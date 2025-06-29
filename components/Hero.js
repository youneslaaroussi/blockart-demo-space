import { storyblokEditable } from "@storyblok/react";

const Hero = ({ blok }) => {
  return (
    <section className="bg-white" {...storyblokEditable(blok)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl mb-6">
              {blok.headline}
              {blok.highlighted_text && (
                <span className="text-blue-600"> {blok.highlighted_text}</span>
              )}
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              {blok.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {blok.primary_button && (
                <button className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors">
                  {blok.primary_button}
                </button>
              )}
              {blok.secondary_button && (
                <button className="border border-slate-300 text-slate-700 px-8 py-3 rounded-md text-lg font-semibold hover:bg-slate-50 transition-colors">
                  {blok.secondary_button}
                </button>
              )}
            </div>
          </div>
          <div className="relative">
            {blok.image?.filename && (
              <div className="relative group">
                <img 
                  src={blok.image.filename} 
                  alt={blok.image.alt || "Hero image"}
                  className="rounded-lg shadow-lg w-full h-96 object-cover"
                />
                
                {/* AI Generated Badge */}
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-sm font-medium flex items-center">
                  <svg className="w-4 h-4 mr-1.5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  AI Generated with BlockArt
                </div>
                
                {/* Alt Text Preview */}
                {blok.image.alt && (
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <p className="text-sm text-slate-700 font-medium mb-1">Alt Text Preview:</p>
                    <p className="text-sm text-slate-600 italic">"{blok.image.alt}"</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 