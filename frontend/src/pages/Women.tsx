// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import ProductCard from "../components/ProductCard";

// const womenProducts = [
//   {
//     id: "w1",
//     name: "Elegant Stiletto Heels",
//     price: 99.99,
//     imageUrl:
//       "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
//     rating: 4,
//     discount: 5,
//   },
//   {
//     id: "w2",
//     name: "Comfortable Ballet Flats",
//     price: 69.99,
//     imageUrl:
//       "https://images.unsplash.com/photo-1554238113-01b8a7056241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     rating: 5,
//   },
//   {
//     id: "w3",
//     name: "Fashion Ankle Boots",
//     price: 129.99,
//     imageUrl:
//       "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80",
//     rating: 4,
//     discount: 15,
//   },
//   {
//     id: "w4",
//     name: "Sport Sneakers",
//     price: 79.99,
//     imageUrl:
//       "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
//     rating: 4,
//   },
//   {
//     id: "w5",
//     name: "Summer Sandals",
//     price: 59.99,
//     imageUrl:
//       "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1530&q=80",
//     rating: 5,
//   },
//   {
//     id: "w6",
//     name: "Casual Slip-Ons",
//     price: 49.99,
//     imageUrl:
//       "https://images.unsplash.com/photo-1573100925118-870b8efc799d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
//     rating: 3,
//     discount: 10,
//   },
// ];

// const Women = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar />
//       <main className="py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Women's Collection
//             </h1>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Explore our stylish range of women's footwear, combining comfort
//               and elegance for every moment of your day.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {womenProducts.map((product) => (
//               <ProductCard key={product.id} {...product} />
//             ))}
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Women;

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
}

const Women: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/product/all");
        const data = await response.json();
        const menProducts = data.data.filter(
          (product: Product) => product.category === "women"
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
                Women's Collection
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

export default Women;
