// import { useEffect, useState } from "react";
// import { FaStar, FaShoppingCart } from "react-icons/fa";
// import { useCart } from "../context/CartContext";
// import { toast } from "react-toastify";
// import { Link } from "react-router-dom";

// interface ProductCardProps {
//   id: string;
//   title: string;
//   productBeforeDiscount: number;
//   productAfterDiscount: number;
//   image: string;
//   category: string;
// }

// const ProductCard = ({
//   id,
//   title,
//   productBeforeDiscount,
//   productAfterDiscount,
//   image,
//   category,
// }: ProductCardProps) => {
//   const { addItem } = useCart();
//   const [isAdding, setIsAdding] = useState(false);

//   const discountPercent = Math.round(
//     ((productBeforeDiscount - productAfterDiscount) / productBeforeDiscount) *
//       100
//   );
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   // console.log(user);

//   const handleAddToCart = () => {
//     if (!user) {
//       toast.warn("Please login first!", {
//         position: "top-center",
//         autoClose: 1000,
//       });
//     } else {
//       setIsAdding(true);
//       addItem({
//         id,
//         name: title,
//         price: productAfterDiscount,
//         image: image,
//         category,
//       });

//       setTimeout(() => {
//         setIsAdding(false);
//       }, 1000);
//     }
//   };

//   // Fixed rating and review count (since API does not provide)
//   const rating = 4;
//   const reviewCount = 24;

//   return (
//     <div className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
//       <div className="relative overflow-hidden">
//         {discountPercent > 0 && (
//           <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
//             {discountPercent}% OFF
//           </span>
//         )}
//         <Link to={`/product/${id}`}>
//           <img
//             src={image}
//             alt={title}
//             className="w-full h-60 object-cover object-center group-hover:scale-105 transition-transform duration-300"
//           />
//         </Link>
//         {/* <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
//           <button className="bg-white p-2 rounded-full shadow-md text-gray-700 hover:text-red-500 transition-colors">
//             <FaHeart />
//           </button>
//         </div> */}
//       </div>
//       <div className="p-4">
//         <div className="flex items-center mb-2">
//           {[...Array(5)].map((_, i) => (
//             <FaStar
//               key={i}
//               className={`${
//                 i < rating ? "text-yellow-400" : "text-gray-300"
//               } w-4 h-4`}
//             />
//           ))}
//           <span className="text-xs text-gray-500 ml-1">({reviewCount})</span>
//         </div>
//         <h3 className="font-medium text-gray-900 mb-1">{title}</h3>
//         <div className="flex items-center justify-between">
//           <div>
//             {discountPercent > 0 ? (
//               <div className="flex items-center gap-2">
//                 <span className="font-bold text-gray-900">
//                   RS.{productAfterDiscount}
//                 </span>
//                 <span className="text-gray-500 text-sm line-through">
//                   RS.{productBeforeDiscount}
//                 </span>
//               </div>
//             ) : (
//               <span className="font-bold text-gray-900">
//                 RS.{productBeforeDiscount}
//               </span>
//             )}
//           </div>

//           <button
//             onClick={handleAddToCart}
//             className={`p-2 rounded-full text-white transition-colors ${
//               isAdding ? "bg-green-500" : "bg-blue-600 hover:bg-blue-700"
//             }`}
//           >
//             <FaShoppingCart className="w-4 h-4" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

import { useEffect, useState } from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  title: string;
  productBeforeDiscount: number;
  productAfterDiscount: number;
  image: string;
  category: string;
  stock: number; // Added stock here
}

const ProductCard = ({
  id,
  title,
  productBeforeDiscount,
  productAfterDiscount,
  image,
  category,
  stock,
}: ProductCardProps) => {
  const { addItem } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const discountPercent = Math.round(
    ((productBeforeDiscount - productAfterDiscount) / productBeforeDiscount) *
      100
  );
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleAddToCart = () => {
    if (!user) {
      toast.warn("Please login first!", {
        position: "top-center",
        autoClose: 1000,
      });
    } else if (stock <= 0) {
      toast.error("Product not available now", {
        position: "top-center",
        autoClose: 1500,
      });
    } else {
      setIsAdding(true);
      addItem({
        id,
        name: title,
        price: productAfterDiscount,
        image: image,
        category,
      });

      setTimeout(() => {
        setIsAdding(false);
      }, 1000);
    }
  };

  // Fixed rating and review count (since API does not provide)
  const rating = 4;
  const reviewCount = 24;

  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative overflow-hidden">
        {discountPercent > 0 && (
          <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
            {discountPercent}% OFF
          </span>
        )}
        <Link to={`/product/${id}`}>
          <img
            src={image}
            alt={title}
            className="w-full h-60 object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </div>
      <div className="p-4">
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`${
                i < rating ? "text-yellow-400" : "text-gray-300"
              } w-4 h-4`}
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">({reviewCount})</span>
        </div>
        <h3 className="font-medium text-gray-900 mb-1">{title}</h3>
        <div className="flex items-center justify-between">
          <div>
            {discountPercent > 0 ? (
              <div className="flex items-center gap-2">
                <span className="font-bold text-gray-900">
                  RS.{productAfterDiscount}
                </span>
                <span className="text-gray-500 text-sm line-through">
                  RS.{productBeforeDiscount}
                </span>
              </div>
            ) : (
              <span className="font-bold text-gray-900">
                RS.{productBeforeDiscount}
              </span>
            )}
          </div>

          {stock > 0 ? (
            <button
              onClick={handleAddToCart}
              className={`p-2 rounded-full text-white transition-colors ${
                isAdding ? "bg-green-500" : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              <FaShoppingCart className="w-4 h-4" />
            </button>
          ) : (
            <span className="text-red-600 font-semibold text-sm">
              Product not available now
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
