import React from 'react';

const Index = () => {
  console.log('Index component rendering...');
  
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Crown of Caledon</h1>
        <p className="text-lg text-gray-600">Website is loading...</p>
        <div className="mt-8 p-4 bg-blue-100 rounded-lg">
          <p className="text-sm text-blue-800">If you can see this, React is working.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;