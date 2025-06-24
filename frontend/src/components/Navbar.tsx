import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingBag, FaBars, FaTimes, FaUser } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { getItemsCount } = useCart();
  const itemCount = getItemsCount();

  // Load user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      // setUser(JSON.parse(storedUser));
      const parsedUser = JSON.parse(storedUser);
      console.log("User from localStorage:", parsedUser); // See what's inside
      setUser(parsedUser);
    }
  }, []);

  // Handle outside click for dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setShowDropdown(false);
    navigate("/login");
  };

  const getInitial = () => {
    if (user?.name) return user.name.charAt(0).toUpperCase();
    if (user?.email) return user.email.charAt(0).toUpperCase();
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="font-bold text-xl text-blue-600">StepStyle</span>
            </Link>
          </div>

          {/* Desktop Navigation */}

          <div className="hidden md:flex items-center space-x-8">
            {user && user.admin ? (
              <>
                <Link
                  to="/admin-upload"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  upload
                </Link>
                <Link
                  to="/admin-products"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  products
                </Link>
                <Link
                  to="/admin-orders"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  orders
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/men"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  Men
                </Link>
                <Link
                  to="/women"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  Women
                </Link>
                {/* <Link
                  to="/collections"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  Collections
                </Link>
                <Link
                  to="/sale"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  Sale
                </Link> */}
              </>
            )}
          </div>

          {/* Right Section (Icons) */}
          <div className="hidden md:flex items-center space-x-5">
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="w-9 h-9 bg-blue-600 text-white flex items-center justify-center rounded-full font-bold"
                >
                  {getInitial()}
                </button>
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-50">
                    <button
                      onClick={handleLogout}
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="text-gray-700 hover:text-blue-600 p-1.5 rounded-full transition-colors"
              >
                <FaUser size={18} />
              </Link>
            )}

            <Link
              to="/cart"
              className="relative text-gray-700 hover:text-blue-600 p-1.5 rounded-full transition-colors"
            >
              <FaShoppingBag size={18} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-700 hover:text-blue-600 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="pt-2 pb-4 space-y-1 px-4">
            <Link to="/" className="block py-2 text-gray-700 font-medium">
              Home
            </Link>
            <Link to="/men" className="block py-2 text-gray-700 font-medium">
              Men
            </Link>
            <Link to="/women" className="block py-2 text-gray-700 font-medium">
              Women
            </Link>
            <Link
              to="/collections"
              className="block py-2 text-gray-700 font-medium"
            >
              Collections
            </Link>
            <Link to="/sale" className="block py-2 text-gray-700 font-medium">
              Sale
            </Link>

            <div className="flex items-center space-x-4 py-2">
              {user ? (
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="w-9 h-9 bg-blue-600 text-white flex items-center justify-center rounded-full font-bold"
                  >
                    {getInitial()}
                  </button>
                  {showDropdown && (
                    <div className="absolute left-0 mt-2 w-32 bg-white border rounded shadow-lg z-50">
                      <button
                        onClick={handleLogout}
                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link to="/login" className="text-gray-700 p-1.5 rounded-full">
                  <FaUser size={18} />
                </Link>
              )}
              <Link
                to="/cart"
                className="relative text-gray-700 p-1.5 rounded-full"
              >
                <FaShoppingBag size={18} />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {itemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
