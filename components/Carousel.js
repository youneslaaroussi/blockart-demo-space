import { storyblokEditable } from "@storyblok/react";
import { useState } from "react";

const Carousel = ({ blok }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAltText, setShowAltText] = useState(false);
  const slides = blok.slides || [];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (!slides.length) {
    return null;
  }

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative bg-slate-900 overflow-hidden" {...storyblokEditable(blok)}>
      <div className="relative h-96 md:h-[500px] lg:h-[600px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {slide.image?.filename && (
              <img
                src={slide.image.filename}
                alt={slide.image.alt || slide.title}
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
        
        {/* AI Generated Badge */}
        {currentSlideData?.image?.filename && (
          <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center z-10">
            <svg className="w-4 h-4 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            AI Generated with BlockArt
          </div>
        )}

        {/* Alt Text Toggle Button */}
        {currentSlideData?.image?.alt && (
          <button
            onClick={() => setShowAltText(!showAltText)}
            className="absolute top-6 right-6 bg-white/10 backdrop-blur-md text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors z-10"
          >
            {showAltText ? 'Hide' : 'Show'} Alt Text
          </button>
        )}

        {/* Alt Text Preview */}
        {showAltText && currentSlideData?.image?.alt && (
          <div className="absolute bottom-20 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 z-10">
            <p className="text-sm text-slate-700 font-medium mb-1">Alt Text Preview:</p>
            <p className="text-sm text-slate-600 italic">"{currentSlideData.image.alt}"</p>
          </div>
        )}
        
        {/* Carousel Content */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {slides[currentSlide]?.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200">
              {slides[currentSlide]?.subtitle}
            </p>
            {slides[currentSlide]?.cta_text && (
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors">
                {slides[currentSlide].cta_text}
              </button>
            )}
          </div>
        </div>

        {/* Navigation Arrows */}
        {slides.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Carousel; 