import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import instagramPost from "@/assets/instagram-social-post.jpg";
import facebookPost from "@/assets/facebook-social-post.jpg";

export const SocialMediaDownload = () => {
  const downloadImage = (imageSrc: string, filename: string) => {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Social Media Graphics Download</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Instagram Post */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Instagram Post (1080x1080px)</h2>
            <div className="mb-4">
              <img 
                src={instagramPost} 
                alt="Instagram Social Media Post" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <Button 
              onClick={() => downloadImage(instagramPost, 'crown-of-caledon-instagram-post.jpg')}
              className="w-full"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Instagram Post
            </Button>
          </Card>

          {/* Facebook Post */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Facebook Post (1200x630px)</h2>
            <div className="mb-4">
              <img 
                src={facebookPost} 
                alt="Facebook Social Media Post" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <Button 
              onClick={() => downloadImage(facebookPost, 'crown-of-caledon-facebook-post.jpg')}
              className="w-full"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Facebook Post
            </Button>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            Click the download buttons above to save the social media graphics to your device.
          </p>
        </div>
      </div>
    </div>
  );
};