import React, { useState, useEffect } from 'react';
import { ResourceAsset } from '../types';
import { downloadA4Brief } from '../utils/downloadA4Brief';

interface ResourceModalProps {
  resource: ResourceAsset | null;
  onClose: () => void;
}

export const ResourceModal: React.FC<ResourceModalProps> = ({ resource, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!resource) return null;

  const handleDownloadAsset = () => {
    setDownloaded(true);
    const link = document.createElement('a');
    link.href = resource.image;
    link.download = `${resource.title.toLowerCase().replace(/\s+/g, '-')}-her-voice.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setDownloaded(false), 3000);
  };

  const handleDownloadBrief = () => {
    downloadA4Brief({
      title: `${resource.title} - Resource Asset Brief`,
      subtitle: resource.description || 'Open toolkit asset provided by HerVoice Botswana.',
      category: resource.type,
      publisherOrCountry: resource.officialPublisher || 'HerVoice Botswana',
      bodyText: `${resource.title}\n\nFormat: ${resource.format}\n\n${resource.description || ''}`,
      highlights: [
        `Format: ${resource.format}`,
        `Type: ${resource.type}`,
        `License: Free Non-Profit Use`
      ],
      officialCitation: resource.citation || resource.officialPublisher,
      sourceUrl: resource.sourceUrl
    });
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-[#f2e8f2] flex flex-col relative text-[#2e1a28]"
      >
        {/* Sticky Top Header Bar */}
        <div className="p-4 bg-[#fce8f5] border-b border-pink-100 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-[#7c52aa] text-white text-[10px] font-bold uppercase rounded-full">
              {resource.type}
            </span>
            <span className="text-xs font-bold text-[#e040a0] bg-white px-2.5 py-0.5 rounded-full">{resource.format}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadBrief}
              title="Download A4 Brief"
              className="px-3 py-1.5 bg-white text-[#e040a0] hover:bg-[#e040a0] hover:text-white rounded-full text-xs font-bold transition-all border border-pink-200 shadow-sm flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-base">download</span>
              <span className="hidden sm:inline">A4 Brief</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close Modal"
              className="w-9 h-9 rounded-full bg-white hover:bg-pink-100 flex items-center justify-center text-[#2e1a28] font-bold transition-colors border border-pink-200 shadow-sm"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto flex-1 text-[#2e1a28]">
          {/* High-Res Preview Image */}
          <div className="bg-[#1f121d] p-6 flex items-center justify-center max-h-80 overflow-hidden relative border-b border-[#f2e8f2]">
            <img
              src={resource.image}
              alt={resource.imageAlt || resource.title}
              className="max-h-72 w-auto object-contain rounded-2xl shadow-2xl border border-white/20"
            />
          </div>

          {/* Resource Details */}
          <div className="p-6 space-y-4">
            <div>
              <h3 className="text-2xl font-black text-[#2e1a28]">{resource.title}</h3>
              <p className="text-xs text-[#7c52aa] font-bold mt-1 uppercase">
                FREE OPEN LICENSE FOR HERVOICE COMMUNITY
              </p>
            </div>

            <p className="text-sm text-[#604868] leading-relaxed font-medium">
              {resource.description || 'Designed for young creators, non-profit organizers, and student advocates. Ready to customize in Figma, Canva, or Adobe Creative Cloud.'}
            </p>

            {/* Publisher & Source Link */}
            {(resource.officialPublisher || resource.sourceUrl) && (
              <div className="p-3.5 bg-[#fcf7fc] border border-[#f2e8f2] rounded-2xl flex items-center justify-between gap-3 text-xs">
                <div>
                  <p className="text-[10px] font-bold uppercase text-[#7c52aa]">PUBLISHER / SOURCE</p>
                  <p className="font-bold text-[#2e1a28]">{resource.officialPublisher || 'Official Partner'}</p>
                </div>
                {resource.sourceUrl && (
                  <a
                    href={resource.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-[#f0e5ff] hover:bg-[#e040a0] hover:text-white text-[#7c52aa] font-bold text-[11px] rounded-xl transition-all flex items-center gap-1 shrink-0"
                  >
                    <span>Official Portal</span>
                    <span className="material-symbols-outlined text-xs">open_in_new</span>
                  </a>
                )}
              </div>
            )}

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
          </div>
        </div>

        {/* Sticky Bottom Exit Bar */}
        <div className="p-4 bg-[#fcf7fc] border-t border-[#f2e8f2] flex items-center justify-between gap-3 shrink-0">
          <button
            onClick={handleDownloadAsset}
            className="flex-1 py-3 bg-[#e040a0] text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md shadow-pink-500/20 hover:bg-[#c82f8c] transition-all bouncy-hover flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-xl">download</span>
            <span>Download Asset Pack</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-3 bg-[#f0e5ff] text-[#7c52aa] hover:bg-[#e040a0] hover:text-white font-bold text-xs rounded-full transition-all flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-base">close</span>
            <span>Exit</span>
          </button>
        </div>
      </div>
    </div>
  );
};
