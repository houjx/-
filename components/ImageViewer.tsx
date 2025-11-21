
import React, { useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface ImageViewerProps {
  imageUrl: string | null;
  onClose: () => void;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ imageUrl, onClose }) => {
  useEffect(() => {
    if (imageUrl) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [imageUrl]);

  if (!imageUrl) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 p-3 rounded-full transition-all z-50 hover:bg-white/20"
      >
        <X size={24} />
      </button>
      
      <div className="relative max-w-full max-h-full">
        <img 
          src={imageUrl} 
          alt="Full view" 
          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl select-none"
          onClick={(e) => e.stopPropagation()} 
        />
        <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none opacity-0 animate-[fadeIn_2s_ease-in_forwards]">
           <span className="bg-black/50 text-white text-xs px-3 py-1 rounded-full backdrop-blur-md">
             高清预览模式
           </span>
        </div>
      </div>
    </div>
  );
};

export default ImageViewer;
