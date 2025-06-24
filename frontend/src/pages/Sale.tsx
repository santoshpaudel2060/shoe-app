import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

const saleProducts = [
  {
    id: "s1",
    name: "Running Trainers",
    price: 129.99,
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    rating: 4,
    discount: 30,
  },
  {
    id: "s2",
    name: "Casual Sneakers",
    price: 89.99,
    imageUrl:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
    rating: 3,
    discount: 25,
  },
  {
    id: "s3",
    name: "Fashion Boots",
    price: 139.99,
    imageUrl:
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80",
    rating: 4,
    discount: 40,
  },
  {
    id: "s4",
    name: "Office Shoes",
    price: 119.99,
    imageUrl:
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    rating: 5,
    discount: 20,
  },
];

const Sale = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-600 text-white rounded-lg p-8 mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Season Clearance
            </h1>
            <p className="text-xl mb-4">Up to 40% off selected styles</p>
            <p className="text-lg">Limited time offer. While stocks last.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {saleProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Why Shop Our Sale?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Authentic Products</h3>
                <p className="text-gray-600">
                  All items are 100% genuine with full manufacturer warranty
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Free Shipping</h3>
                <p className="text-gray-600">
                  Free standard shipping on all sale items
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Easy Returns</h3>
                <p className="text-gray-600">
                  30-day hassle-free return policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sale;
