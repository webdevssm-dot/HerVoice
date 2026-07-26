import React, { useState } from 'react';
import { ResourceAsset } from '../types';

interface ResourceModalProps {
  resource: ResourceAsset | null;
  onClose: () => void;
}

export const ResourceModal: React.FC<ResourceModalProps> = ({ resource, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!resource) return null;

  const handleDownload = () => {
    setDownloaded(true);
    const link = document.createElement('a');
    link.href = resource.image;
    link.download = `${resource.title.toLowerCase().replace(/\s+/g, '-')}-her-voice.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-[#f2e8f2] flex flex-col relative text-[#2e1a28]">
        {/* Top Header Bar */}
        <div className="p-4 bg-[#fce8f5] border-b border-pink-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-[#7c52aa] text-white text-[10px] font-bold uppercase rounded-full">
              {resource.type}
            </span>
            <span className="text-xs font-bold text-[#e040a0] bg-white px-2.5 py-0.5 rounded-full">{resource.format}</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white hover:bg-pink-50 flex items-center justify-center text-[#2e1a28] transition-colors border border-pink-200 shadow-sm"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* High-Res Preview Image */}
        <div className="bg-[#fcf7fc] p-6 flex items-center justify-center max-h-80 overflow-hidden relative border-b border-[#f2e8f2]">
          <img
            src={resource.image}
            alt={resource.imageAlt || resource.title}
            className="max-h-72 w-auto object-contain rounded-2xl shadow-lg border border-pink-100"
          />
        </div>

        {/* Resource Details */}
        <div className="p-6 space-y-4 text-[#2e1a28]">
          <div>
            <h3 className="text-2xl font-black text-[#2e1a28]">{resource.title}</h3>
            <p className="text-xs text-[#7c52aa] font-bold mt-1 uppercase">
              FREE OPEN LICENSE FOR HERVOICE COMMUNITY
            </p>
          </div>

          <p className="text-sm text-[#604868] leading-relaxed font-medium">
            {resource.description || 'Designed for young creators, non-profit organizers, and student advocates. Ready to customize in Figma, Canva, or Adobe Creative Cloud.'}
          </p>

          <div className="p-4 bg-[#f0e5ff] rounded-2xl border border-purple-100 grid grid-cols-2 gap-4 text-xs font-semibold">
            <div>
              <p className="text-[#7c52aa] font-bold uppercase">FORMATS</p>
              <p className="font-bold text-[#2e1a28] mt-0.5">{resource.format}</p>
            </div>
            <div>
              <p className="text-[#7c52aa] font-bold uppercase">LICENSE</p>
              <p className="font-bold text-[#e040a0] mt-0.5">Free Non-Profit Use</p>
            </div>
          </div>

          {downloaded && (
            <div className="p-3 bg-[#fce8f5] text-[#e040a0] border border-pink-200 rounded-xl text-xs font-bold flex items-center gap-2 animate-bounce">
              <span className="material-symbols-outlined text-lg">download_done</span>
              <span>Asset download started! Ke a leboga!</span>
            </div>
          )}

          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={handleDownload}
              className="flex-1 py-3.5 bg-[#e040a0] text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md shadow-pink-500/20 hover:bg-[#c82f8c] transition-all bouncy-hover flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-xl">download</span>
              <span>Download Free Asset Pack</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
