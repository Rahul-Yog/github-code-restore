// Image processing utilities for Crown of Caledon image management

export const loadImage = (file: File): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
};

export const removeBranding = async (img: HTMLImageElement): Promise<Blob> => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  if (!ctx) {
    throw new Error('Could not get canvas context');
  }

  canvas.width = img.width;
  canvas.height = img.height;
  
  // Draw the original image
  ctx.drawImage(img, 0, 0);
  
  // Simple branding removal - this would typically involve more sophisticated image processing
  // For now, we'll just return the original image processed through canvas
  
  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      if (blob) {
        resolve(blob);
      } else {
        // Fallback: create a simple blob from canvas data
        canvas.toBlob((fallbackBlob) => {
          resolve(fallbackBlob || new Blob());
        }, 'image/png');
      }
    }, 'image/png');
  });
};

export const removeBackground = async (img: HTMLImageElement): Promise<Blob> => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  if (!ctx) {
    throw new Error('Could not get canvas context');
  }

  canvas.width = img.width;
  canvas.height = img.height;
  
  // Draw the original image
  ctx.drawImage(img, 0, 0);
  
  // Simple background removal - this would typically involve more sophisticated image processing
  // For now, we'll just return the original image processed through canvas
  
  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      if (blob) {
        resolve(blob);
      } else {
        // Fallback: create a simple blob from canvas data
        canvas.toBlob((fallbackBlob) => {
          resolve(fallbackBlob || new Blob());
        }, 'image/png');
      }
    }, 'image/png');
  });
};

export const processImageBatch = async (
  files: File[],
  processingMethod: 'branding' | 'background',
  onProgress?: (progress: number) => void
): Promise<Blob[]> => {
  const results: Blob[] = [];
  
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const img = await loadImage(file);
    
    const processedBlob = processingMethod === 'branding' 
      ? await removeBranding(img)
      : await removeBackground(img);
    
    results.push(processedBlob);
    
    if (onProgress) {
      onProgress(((i + 1) / files.length) * 100);
    }
  }
  
  return results;
};

export const downloadBlob = (blob: Blob, filename: string) => {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};