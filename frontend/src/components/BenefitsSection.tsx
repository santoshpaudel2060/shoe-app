// import { Truck, RefreshCw, ShieldCheck, Clock } from "lucide-react";

// const benefits = [
//   {
//     title: "Free Shipping",
//     description: "Free shipping on all orders over $50",
//     icon: Truck,
//   },
//   {
//     title: "Easy Returns",
//     description: "30-day hassle-free return policy",
//     icon: RefreshCw,
//   },
//   {
//     title: "Secure Payment",
//     description: "Your payment information is safe with us",
//     icon: ShieldCheck,
//   },
//   {
//     title: "24/7 Support",
//     description: "Customer service available around the clock",
//     icon: Clock,
//   },
// ];

// const BenefitsSection = () => {
//   return (
//     <section className="py-16 bg-brand-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-brand-gray-900">
//             Why Choose Us
//           </h2>
//           <p className="mt-4 text-lg text-brand-gray-500 max-w-2xl mx-auto">
//             We're committed to providing the best shopping experience for our
//             customers.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {benefits.map((benefit, index) => (
//             <div
//               key={index}
//               className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
//             >
//               <div className="flex flex-col items-center text-center">
//                 <div className="p-3 bg-brand-blue/10 text-brand-blue rounded-full mb-4">
//                   <benefit.icon size={24} />
//                 </div>
//                 <h3 className="font-medium text-lg text-brand-gray-900 mb-2">
//                   {benefit.title}
//                 </h3>
//                 <p className="text-brand-gray-500">{benefit.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BenefitsSection;

import { FaTruck, FaExchangeAlt, FaShieldAlt, FaClock } from "react-icons/fa";

const benefits = [
  {
    title: "Free Shipping",
    description: "Free shipping on all orders over $50",
    icon: FaTruck,
  },
  {
    title: "Easy Returns",
    description: "30-day hassle-free return policy",
    icon: FaExchangeAlt,
  },
  {
    title: "Secure Payment",
    description: "Your payment information is safe with us",
    icon: FaShieldAlt,
  },
  {
    title: "24/7 Support",
    description: "Customer service available around the clock",
    icon: FaClock,
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            We're committed to providing the best shopping experience for our
            customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-full mb-4">
                  <benefit.icon size={24} />
                </div>
                <h3 className="font-medium text-lg text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-500">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
