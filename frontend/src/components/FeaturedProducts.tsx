// import { useState } from "react";
// import ProductCard from "./ProductCard";
// import { FaChevronDown } from "react-icons/fa";

// const products = {
//   trending: [
//     {
//       id: "1",
//       name: "Air Max Supreme",
//       price: 129.99,
//       imageUrl:
//         "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
//       rating: 4,
//     },
//     {
//       id: "2",
//       name: "Urban Flex Runners",
//       price: 149.99,
//       imageUrl:
//         "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
//       rating: 5,
//       discount: 15,
//     },
//     {
//       id: "3",
//       name: "Classic Leather Loafers",
//       price: 89.99,
//       imageUrl:
//         "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//       rating: 4,
//     },
//     {
//       id: "4",
//       name: "Boost Comfort Elite",
//       price: 159.99,
//       imageUrl:
//         "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1412&q=80",
//       rating: 5,
//     },
//   ],
//   men: [
//     {
//       id: "5",
//       name: "Tech Runner Pro",
//       price: 179.99,
//       imageUrl:
//         "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
//       rating: 5,
//     },
//     {
//       id: "6",
//       name: "Hiker's Choice Boot",
//       price: 199.99,
//       imageUrl:
//         "https://images.unsplash.com/photo-1623429060839-59065c2526bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
//       rating: 4,
//       discount: 10,
//     },
//     {
//       id: "7",
//       name: "Business Casual Oxford",
//       price: 129.99,
//       imageUrl:
//         "https://images.unsplash.com/photo-1533867617858-e7b97e060509?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
//       rating: 5,
//     },
//     {
//       id: "8",
//       name: "Court Classic Sneakers",
//       price: 89.99,
//       imageUrl:
//         "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//       rating: 4,
//     },
//   ],
//   women: [
//     {
//       id: "9",
//       name: "Elegant Heels",
//       price: 119.99,
//       imageUrl:
//         "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
//       rating: 5,
//     },
//     {
//       id: "10",
//       name: "Casual Day Flats",
//       price: 69.99,
//       imageUrl:
//         "https://images.unsplash.com/photo-1554062614-6da4fa67725a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
//       rating: 4,
//       discount: 20,
//     },
//     {
//       id: "11",
//       name: "Fitness Flex Trainers",
//       price: 109.99,
//       imageUrl:
//         "https://images.unsplash.com/photo-1570464197880-7463341e0ab9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
//       rating: 5,
//     },
//     {
//       id: "12",
//       name: "Retro Platform Boots",
//       price: 149.99,
//       imageUrl:
//         "https://images.unsplash.com/photo-1622760807800-66cf1466fc08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80",
//       rating: 4,
//     },
//   ],
// };

// const FeaturedProducts = () => {
//   const [activeCategory, setActiveCategory] = useState("trending");

//   return (
{
  /* <section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
      <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
        Discover our most sought-after styles, expertly crafted for comfort and
        designed to impress.
      </p>
    </div>

    <div className="flex justify-center mb-10">
      <div className="inline-flex bg-gray-100 rounded-lg p-1 gap-1">
        <button
          onClick={() => setActiveCategory("trending")}
          className={`px-6 py-2 rounded-md text-sm font-medium ${
            activeCategory === "trending"
              ? "bg-blue-600 text-white"
              : "text-gray-700 hover:bg-gray-200"
          }`}
        >
          Trending Now
        </button>
        <button
          onClick={() => setActiveCategory("men")}
          className={`px-6 py-2 rounded-md text-sm font-medium ${
            activeCategory === "men"
              ? "bg-blue-600 text-white"
              : "text-gray-700 hover:bg-gray-200"
          }`}
        >
          Men
        </button>
        <button
          onClick={() => setActiveCategory("women")}
          className={`px-6 py-2 rounded-md text-sm font-medium ${
            activeCategory === "women"
              ? "bg-blue-600 text-white"
              : "text-gray-700 hover:bg-gray-200"
          }`}
        >
          Women
        </button>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products[activeCategory as keyof typeof products].map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>

    <div className="mt-12 text-center">
      <a
        href="/men"
        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
      >
        View All Products
        <FaChevronDown className="rotate-90" />
      </a>
    </div>
  </div>
</section>; */
}
//   );
// };

// export default FeaturedProducts;

import React from "react";

const FeaturedProducts = () => {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Products
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              Discover our most sought-after styles, expertly crafted for
              comfort and designed to impress.
            </p>
          </div>

          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-gray-100 rounded-lg p-1 gap-1">
              <button
                onClick={() => setActiveCategory("trending")}
                className={`px-6 py-2 rounded-md text-sm font-medium ${
                  activeCategory === "trending"
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                Trending Now
              </button>
              <button
                onClick={() => setActiveCategory("men")}
                className={`px-6 py-2 rounded-md text-sm font-medium ${
                  activeCategory === "men"
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                Men
              </button>
              <button
                onClick={() => setActiveCategory("women")}
                className={`px-6 py-2 rounded-md text-sm font-medium ${
                  activeCategory === "women"
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                Women
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products[activeCategory as keyof typeof products].map(
              (product) => (
                <ProductCard key={product.id} {...product} />
              )
            )}
          </div>

          <div className="mt-12 text-center">
            <a
              href="/men"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              View All Products
              <FaChevronDown className="rotate-90" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedProducts;
