import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartProvider } from "./context/CartContext";
import Index from "./pages/Index";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Collections from "./pages/Collections";
import Sale from "./pages/Sale";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
// import Checkout from "./pages/Checkout";
import PaymentSuccess from "./pages/PaymentSuccess";
import NotFound from "./pages/NotFound";
import AdminProductPage from "./pages/AdminProductPage";
import AdminProducts from "./pages/AdminProducts";
import { isAdmin } from "./utils/auth";
import ProtectedRoute from "./components/ProtectedRoute";
import CheckoutButton from "./components/CheckoutButton";
import EsewaPayment from "./components/EsewaPayment";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductDetail from "./pages/ProductDetail";
import EsewaForm from "./pages/EsewaForm";
import AdminOrders from "./pages/AdminOrders";
// import SuccessPage from "./pages/SuccessPage";
// import FailurePage from "./pages/FailurePage";

// import EsewaCheckout from "./pages/EsewaCheckout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/checkout" element={<Checkout />} /> */}
          {/* <Route path="/checkout" element={<EsewaCheckout />} /> */}
          <Route path="/api/esewa/success" element={<PaymentSuccess />} />
          <Route path="/esewaPayment" element={<EsewaPayment />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="/admin-upload" element={<AdminProductPage />} />
          <Route path="/products" element={<AdminProducts />} /> */}
          {/* Protected admin routes */}
          <Route
            path="/admin-upload"
            element={
              <ProtectedRoute isAllowed={isAdmin()}>
                <AdminProductPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin-products"
            element={
              <ProtectedRoute isAllowed={isAdmin()}>
                <AdminProducts />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin-orders"
            element={
              <ProtectedRoute isAllowed={isAdmin()}>
                <AdminOrders />
              </ProtectedRoute>
            }
          />
          {/* 
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/failure" element={<FailurePage />} /> */}
          <Route path="/esewaForm" element={<EsewaForm />} />
          <Route path="/checkout" element={<CheckoutButton />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <ToastContainer position="top-center" autoClose={3000} />
      </BrowserRouter>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
