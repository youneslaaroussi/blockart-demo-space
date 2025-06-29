import { storyblokEditable } from "@storyblok/react";
import { useState } from "react";

const ProductGrid = ({ blok }) => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const categories = blok.categories || [];

  if (!categories.length) {
    return null;
  }

  return (
    <section className="py-16 bg-white" {...storyblokEditable(blok)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            {blok.title || "Featured Products"}
          </h2>
          <p className="text-lg text-slate-600">
            {blok.subtitle || "Discover our best-selling items"}
          </p>
        </div>

        {/* Category Navigation */}
        {categories.length > 1 && (
          <div className="flex justify-center mb-12">
            <nav className="flex space-x-1 rounded-lg bg-slate-100 p-1">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(index)}
                  className={`rounded-md px-6 py-2 text-sm font-medium transition-colors ${
                    selectedCategory === index
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </nav>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories[selectedCategory]?.products?.map((product, index) => (
            <div key={index} className="group bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative">
                {product.image?.filename && (
                  <>
                    <img 
                      src={product.image.filename} 
                      alt={product.image.alt || product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* AI Generated Badge */}
                    <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-medium flex items-center">
                      <svg className="w-3 h-3 mr-1 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      AI Generated
                    </div>
                    
                    {/* Alt Text Preview on Hover */}
                    {product.image.alt && (
                      <div className="absolute inset-x-3 bottom-3 bg-white/95 backdrop-blur-sm rounded p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <p className="text-xs text-slate-600 font-medium mb-1">Alt Text Preview:</p>
                        <p className="text-xs text-slate-500 italic">"{product.image.alt}"</p>
                      </div>
                    )}
                  </>
                )}
                {product.badge && (
                  <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {product.badge}
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
                  {product.image?.filename && (
                    <div className="text-xs text-slate-500 text-right">
                      <div className="font-medium">BlockArt AI</div>
                    </div>
                  )}
                </div>
                <p className="text-sm text-slate-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-slate-900">{product.price}</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid; 