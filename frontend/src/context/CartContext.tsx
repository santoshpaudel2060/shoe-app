// import {
//   createContext,
//   useState,
//   useContext,
//   ReactNode,
//   useEffect,
// } from "react";

// interface CartItem {
//   id: string;
//   name: string;
//   price: number;
//   image: string;
//   quantity: number;
//   category: string;
//   size?: string;
// }

// interface CartContextType {
//   cartItems: CartItem[];
//   addItem: (item: Omit<CartItem, "quantity"> & { size?: string }) => void;
//   removeItem: (id: string, size?: string) => void;
//   updateQuantity: (id: string, quantity: number, size?: string) => void;
//   clearCart: () => void;
//   getCartTotal: () => number;
//   getItemsCount: () => number;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

//   // Load cart items from localStorage when the component mounts
//   useEffect(() => {
//     const savedCartItems = localStorage.getItem("cartItems");
//     if (savedCartItems) {
//       setCartItems(JSON.parse(savedCartItems));
//     }
//   }, []);

//   // Save cart items to localStorage whenever cartItems changes
//   useEffect(() => {
//     if (cartItems.length > 0) {
//       localStorage.setItem("cartItems", JSON.stringify(cartItems));
//     } else {
//       localStorage.removeItem("cartItems");
//     }
//   }, [cartItems]);

//   const addItem = (item: Omit<CartItem, "quantity"> & { size?: string }) => {
//     setCartItems((currentItems) => {
//       // Check if item already exists in cart (including size if provided)
//       const existingItemIndex = currentItems.findIndex(
//         (i) => i.id === item.id && i.size === item.size
//       );

//       if (existingItemIndex > -1) {
//         // Item exists, increase quantity
//         const newItems = [...currentItems];
//         newItems[existingItemIndex].quantity += 1;
//         return newItems;
//       }

//       // Item doesn't exist, add new item with quantity 1
//       return [...currentItems, { ...item, quantity: 1 }];
//     });
//   };

//   const removeItem = (id: string, size?: string) => {
//     setCartItems((currentItems) =>
//       currentItems.filter((item) => !(item.id === id && item.size === size))
//     );
//   };

//   const updateQuantity = (id: string, quantity: number, size?: string) => {
//     if (quantity <= 0) {
//       removeItem(id, size);
//       return;
//     }

//     setCartItems((currentItems) =>
//       currentItems.map((item) =>
//         item.id === id && item.size === size ? { ...item, quantity } : item
//       )
//     );
//   };

//   const clearCart = () => {
//     setCartItems([]);
//   };

//   const getCartTotal = () => {
//     return cartItems.reduce(
//       (total, item) => total + item.price * item.quantity,
//       0
//     );
//   };

//   const getItemsCount = () => {
//     return cartItems.reduce((count, item) => count + item.quantity, 0);
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         addItem,
//         removeItem,
//         updateQuantity,
//         clearCart,
//         getCartTotal,
//         getItemsCount,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (context === undefined) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };

import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

// Define the structure of a cart item
interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  category: string;
  size?: string;
}

// Define the structure of the cart context
interface CartContextType {
  cartItems: CartItem[];
  addItem: (item: Omit<CartItem, "quantity"> & { size?: string }) => void;
  removeItem: (id: string, size?: string) => void;
  updateQuantity: (id: string, quantity: number, size?: string) => void;
  incrementQuantity: (id: string, size?: string) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getItemsCount: () => number;
}

// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined);

// CartProvider to wrap your app
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on initial mount
  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  // Save cart to localStorage on change
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } else {
      localStorage.removeItem("cartItems");
    }
  }, [cartItems]);

  // Add item or increase quantity
  const addItem = (item: Omit<CartItem, "quantity"> & { size?: string }) => {
    setCartItems((currentItems) => {
      const existingItemIndex = currentItems.findIndex(
        (i) => i.id === item.id && i.size === item.size
      );

      if (existingItemIndex > -1) {
        const newItems = [...currentItems];
        newItems[existingItemIndex].quantity += 1;
        return newItems;
      }

      return [...currentItems, { ...item, quantity: 1 }];
    });
  };

  // Remove an item
  const removeItem = (id: string, size?: string) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => !(item.id === id && item.size === size))
    );
  };

  // Update quantity (set a specific number)
  const updateQuantity = (id: string, quantity: number, size?: string) => {
    if (quantity <= 0) {
      removeItem(id, size);
      return;
    }

    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id && item.size === size ? { ...item, quantity } : item
      )
    );
  };

  // Increment quantity (+1)
  const incrementQuantity = (id: string, size?: string) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate total price
  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Get total item count
  const getItemsCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        updateQuantity,
        incrementQuantity,
        clearCart,
        getCartTotal,
        getItemsCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook to use the cart
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
