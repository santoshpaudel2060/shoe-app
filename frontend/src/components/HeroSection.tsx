import { Link } from "react-router-dom";
import { FaArrowRight, FaShoppingBag } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 py-16 md:py-24 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Step Into Style,{" "}
              <span className="text-blue-600">Step Into Comfort</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-md">
              Discover the perfect balance of fashion and function with our
              premium collection of footwear for every occasion.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/men"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Shop Men
                <FaShoppingBag />
              </Link>
              <Link
                to="/women"
                className="flex items-center gap-2 bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-colors"
              >
                Shop Women
                <FaArrowRight />
              </Link>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-30"></div>
              <div className="relative bg-white rounded-full p-4">
                <img
                  src="https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1465&q=80"
                  alt="Featured Shoe"
                  className="w-full max-w-md rounded-2xl shadow-xl transform rotate-12 hover:rotate-0 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curved divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          fill="white"
        >
          <path d="M0,96L60,85.3C120,75,240,53,360,53.3C480,53,600,75,720,80C840,85,960,75,1080,64C1200,53,1320,43,1380,37.3L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
