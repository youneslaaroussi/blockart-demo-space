import { storyblokEditable } from "@storyblok/react";

const FeatureBanner = ({ blok }) => {
  const features = blok.features || [];

  return (
    <section className="bg-blue-50 py-12" {...storyblokEditable(blok)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            {blok.title || "Why Shop With Us?"}
          </h2>
          <p className="text-slate-600">
            {blok.subtitle || "We're committed to providing the best experience"}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm group relative">
              <div className={`w-12 h-12 bg-${feature.color || 'blue'}-100 rounded-lg flex items-center justify-center mx-auto mb-3 relative`}>
                {feature.icon?.filename ? (
                  <>
                    <img 
                      src={feature.icon.filename} 
                      alt={feature.icon.alt || feature.title}
                      className="w-6 h-6"
                    />
                    {/* AI Generated indicator for icons */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-slate-800 rounded-full flex items-center justify-center">
                      <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </>
                ) : (
                  <svg className={`w-6 h-6 text-${feature.color || 'blue'}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">{feature.title}</h3>
              <p className="text-sm text-slate-600">{feature.description}</p>
              
              {/* AI Generated tooltip and alt text preview */}
              {feature.icon?.filename && (
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="bg-slate-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    <div className="font-medium">AI Generated with BlockArt</div>
                    {feature.icon.alt && (
                      <div className="mt-1 text-slate-300 italic">"{feature.icon.alt}"</div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureBanner; 