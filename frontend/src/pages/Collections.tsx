import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const collections = [
  {
    id: "c1",
    name: "Summer Essentials",
    description: "Light, breathable footwear for hot summer days.",
    imageUrl:
      "https://images.unsplash.com/photo-1469395446868-fb6a048d5ca3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
    link: "/summer",
  },
  {
    id: "c2",
    name: "Athletic Performance",
    description: "Engineered for athletes, designed for comfort.",
    imageUrl:
      "https://images.unsplash.com/photo-1465479423260-c4afc24172c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    link: "/athletic",
  },
  {
    id: "c3",
    name: "Business Formal",
    description: "Sophisticated footwear for professional settings.",
    imageUrl:
      "https://images.unsplash.com/photo-1531310197839-ccf54634509e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80",
    link: "/formal",
  },
  {
    id: "c4",
    name: "Urban Street Style",
    description: "Contemporary designs for the modern trendsetter.",
    imageUrl:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    link: "/street",
  },
];

const Collections = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Collections
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our curated collections, each carefully designed to match
              your unique style and needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections.map((collection) => (
              <Link to={collection.link} key={collection.id} className="group">
                <div className="relative overflow-hidden rounded-lg shadow-lg h-80">
                  <img
                    src={collection.imageUrl}
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {collection.name}
                    </h3>
                    <p className="text-white/90 mb-4">
                      {collection.description}
                    </p>
                    <span className="inline-block bg-white text-blue-600 px-4 py-2 rounded-md font-medium group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      Explore Collection
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Collections;
