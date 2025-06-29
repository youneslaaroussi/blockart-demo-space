import Head from "next/head";
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

export default function Landing({ story }) {
  story = useStoryblokState(story);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Head>
        <title>ShopSmart - Modern Ecommerce Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg mr-3"></div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                ShopSmart
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors duration-200 font-medium">
                Home
              </a>
              <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors duration-200 font-medium">
                Products
              </a>
              <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors duration-200 font-medium">
                About
              </a>
              <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors duration-200 font-medium">
                Contact
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="text-slate-600 hover:text-slate-900 transition-colors duration-200 p-2 rounded-lg hover:bg-slate-100">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="text-slate-600 hover:text-slate-900 transition-colors duration-200 p-2 rounded-lg hover:bg-slate-100 relative">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-slate-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-slate-400 rounded-full mr-2"></span>
            Premium Shopping Experience
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Discover Your Perfect
            <span className="block bg-gradient-to-r from-slate-700 to-slate-500 bg-clip-text text-transparent">
              Shopping Experience
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Curated collections, exceptional quality, and seamless shopping. 
            Find everything you need in one beautifully designed space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-slate-900 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate-800 transition-all duration-200 shadow-lg hover:shadow-xl">
              Explore Collection
            </button>
            <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate-50 transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* BlockArt Plugin Demo */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-200 text-slate-700 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-slate-500 rounded-full mr-2"></span>
              Plugin Demo
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Experience
              <span className="block bg-gradient-to-r from-slate-700 to-slate-500 bg-clip-text text-transparent">
                BlockArt in Action
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Watch how BlockArt transforms your creative workflow with powerful block-based design tools 
              that make building beautiful content effortless.
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-slate-900">
              <div className="aspect-video">
                <iframe
                  src="https://player.vimeo.com/video/1097344530?badge=0&autopause=0&quality_selector=1&player_id=0&app_id=58479"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  title="BlockArt Plugin Demo"
                ></iframe>
              </div>
              
              {/* Video overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none rounded-2xl"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-slate-200 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-slate-300 rounded-full opacity-15 blur-2xl"></div>
          </div>
          
          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-slate-900 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate-800 transition-all duration-200 shadow-lg hover:shadow-xl">
                Try BlockArt Now
              </button>
              <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate-100 transition-all duration-200">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Storyblok Managed Content */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StoryblokComponent blok={story.content} />
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900"></div>
        <div className="relative py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join thousands of satisfied customers who have discovered 
              the future of online shopping with ShopSmart.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-slate-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate-100 transition-all duration-200 shadow-lg">
                Start Shopping
              </button>
              <button className="border-2 border-slate-400 text-slate-300 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate-800 transition-all duration-200">
                Create Account
              </button>
            </div>
          </div>
          
          {/* Footer Bottom */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-slate-700">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="w-6 h-6 bg-gradient-to-br from-slate-400 to-slate-600 rounded mr-2"></div>
                <span className="text-slate-400 font-medium">ShopSmart</span>
              </div>
              <div className="flex space-x-8 text-slate-400">
                <a href="#" className="hover:text-white transition-colors duration-200">Privacy</a>
                <a href="#" className="hover:text-white transition-colors duration-200">Terms</a>
                <a href="#" className="hover:text-white transition-colors duration-200">Support</a>
              </div>
            </div>
            <div className="text-center md:text-left mt-4 text-slate-500 text-sm">
              © 2024 ShopSmart. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  let slug = "landing";

  let sbParams = {
    version: "draft", // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600,
  };
}