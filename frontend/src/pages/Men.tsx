// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import ProductCard from "../components/ProductCard";

// const menProducts = [
//   {
//     id: "m1",
//     name: "Classic Running Sneakers",
//     price: 89.99,
//     imageUrl:
//       "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
//     rating: 4,
//     discount: 10,
//   },
//   {
//     id: "m2",
//     name: "Premium Leather Oxfords",
//     price: 129.99,
//     imageUrl:
//       "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     rating: 5,
//   },
//   {
//     id: "m3",
//     name: "Sports Basketball Shoes",
//     price: 99.99,
//     imageUrl:
//       "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     rating: 4,
//     discount: 15,
//   },
//   {
//     id: "m4",
//     name: "Hiking Boots",
//     price: 149.99,
//     imageUrl:
//       "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
//     rating: 5,
//   },
//   {
//     id: "m5",
//     name: "Casual Loafers",
//     price: 79.99,
//     imageUrl:
//       "https://images.unsplash.com/photo-1623826538393-efc2dde39b98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
//     rating: 4,
//   },
//   {
//     id: "m6",
//     name: "Urban Skate Shoes",
//     price: 69.99,
//     imageUrl:
//       "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=698&q=80",
//     rating: 3,
//     discount: 20,
//   },
// ];

// const Men = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar />
//       <main className="py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Men's Collection
//             </h1>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Discover our premium selection of men's footwear for every
//               occasion, from casual comfort to formal elegance.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {menProducts.map((product) => (
//               <ProductCard key={product.id} {...product} />
//             ))}
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Men;

// import React, { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import ProductCard from "../components/ProductCard";

// interface Product {
//   _id: string;
//   title: string;
//   productBeforeDiscount?: number;
//   productAfterDiscount: number;
//   image: string;
//   category: string;
//   discount?: number;
//   rating?: number;
// }

// const Men = () => {
//   const [menProducts, setMenProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch("http://localhost:4000/api/product");
//         const data = await response.json();

//         if (data.success) {
//           // Assuming backend returns products in data.products as an array
//           const filtered = data.products.filter(
//             (product: Product) => product.category === "men"
//           );
//           setMenProducts(filtered);
//         } else {
//           setError("Failed to fetch products");
//         }
//       } catch (err) {
//         setError("An error occurred while fetching products");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar />
//       <main className="py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Men's Collection
//             </h1>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Discover our premium selection of men's footwear for every
//               occasion, from casual comfort to formal elegance.
//             </p>
//           </div>

//           {loading && <p>Loading products...</p>}
//           {error && <p className="text-red-500">{error}</p>}

//           {!loading && !error && menProducts.length === 0 && (
//             <p>No men's products found.</p>
//           )}

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {!loading &&
//               !error &&
//               menProducts.map((product) => (
//                 <ProductCard
//                   key={product._id}
//                   id={product._id}
//                   name={product.title}
//                   price={product.productAfterDiscount}
//                   imageUrl={product.image}
//                   discount={product.discount}
//                   rating={product.rating}
//                 />
//               ))}
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Men;

// src/pages/Men.tsx

import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface Product {
  _id: string;
  image: string;
  title: string;
  productBeforeDiscount: number;
  productAfterDiscount: number;
  category: string;
  stock: number;
  discount?: number; // Optional, if not always available
  rating?: number; // Optional, if not always available
}

const Men: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/product/all");
        const data = await response.json();
        const menProducts = data.data.filter(
          (product: Product) => product.category === "men"
        );
        setProducts(menProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Men's Collection
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover our premium selection of men's footwear for every
                occasion, from casual comfort to formal elegance.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product._id}
                  id={product._id}
                  title={product.title}
                  productBeforeDiscount={product.productBeforeDiscount}
                  productAfterDiscount={product.productAfterDiscount}
                  image={`http://localhost:4000/uploads/${product.image}`}
                  rating={4} // Placeholder rating
                  discount={Math.round(
                    ((product.productBeforeDiscount -
                      product.productAfterDiscount) /
                      product.productBeforeDiscount) *
                      100
                  )}
                  stock={product.stock}
                />
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Men;
