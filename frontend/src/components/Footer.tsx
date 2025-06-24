// import { Link } from "react-router-dom";
// import {
//   FaFacebook,
//   FaInstagram,
//   FaTwitter,
//   FaYoutube,
//   // FaEnvelope,
//   FaPhone,
//   FaMapMarkerAlt,
//   FaCcVisa,
//   FaCcMastercard,
//   FaCcPaypal,
//   FaCcAmex,
// } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
//           <div className="lg:col-span-2">
//             <Link to="/" className="flex items-center mb-4">
//               <span className="font-bold text-xl text-white">StepStyle</span>
//             </Link>
//             <p className="text-gray-300 mb-4 max-w-md">
//               Step into a world of comfort and style with our premium selection
//               of footwear for every occasion.
//             </p>
//             <div className="flex space-x-4">
//               <a
//                 href="#"
//                 className="bg-gray-800 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
//               >
//                 <FaFacebook size={18} />
//               </a>
//               <a
//                 href="#"
//                 className="bg-gray-800 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
//               >
//                 <FaInstagram size={18} />
//               </a>
//               <a
//                 href="#"
//                 className="bg-gray-800 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
//               >
//                 <FaTwitter size={18} />
//               </a>
//               <a
//                 href="#"
//                 className="bg-gray-800 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
//               >
//                 <FaYoutube size={18} />
//               </a>
//             </div>
//           </div>

//           <div>
//             <h3 className="font-bold text-lg mb-4">Shop</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link
//                   to="/men"
//                   className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
//                 >
//                   Men
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/women"
//                   className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
//                 >
//                   Women
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/collections"
//                   className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
//                 >
//                   Collections
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/sale"
//                   className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
//                 >
//                   Sale
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-bold text-lg mb-4">Company</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link
//                   to="/about"
//                   className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
//                 >
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/contact"
//                   className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
//                 >
//                   Contact
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/careers"
//                   className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
//                 >
//                   Careers
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-bold text-lg mb-4">Contact</h3>
//             <ul className="space-y-3">
//               <li className="flex items-center gap-3 text-gray-300">
//                 <FaMapMarkerAlt className="text-blue-400" />
//                 <span>Sainamaina-1, Bankatta</span>
//               </li>
//               <li className="flex items-center gap-3 text-gray-300">
//                 <FaPhone className="text-blue-400" />
//                 <span>9811084515</span>
//               </li>
//               <li className="flex items-center gap-3 text-gray-300">
//                 {/* <FaEnvelope className="text-blue-400" /> */}
//                 <MdEmail className="text-blue-400" />
//                 <span>santoshpaudel@gmail.com</span>
//                 {/* <span>santoshppaudel098@gmail.com</span> */}
//               </li>
//             </ul>
//             <div className="mt-4 flex gap-2">
//               <FaCcVisa size={28} className="text-gray-400" />
//               <FaCcMastercard size={28} className="text-gray-400" />
//               <FaCcPaypal size={28} className="text-gray-400" />
//               <FaCcAmex size={28} className="text-gray-400" />
//             </div>
//           </div>
//         </div>

//         <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
//           <p className="text-gray-400 text-sm">
//             &copy; {new Date().getFullYear()} StepStyle. All rights reserved.
//           </p>
//           <div className="flex flex-wrap gap-6 mt-4 md:mt-0">
//             <Link
//               to="/privacy"
//               className="text-gray-400 text-sm hover:text-white transition-colors"
//             >
//               Privacy Policy
//             </Link>
//             <Link
//               to="/terms"
//               className="text-gray-400 text-sm hover:text-white transition-colors"
//             >
//               Terms of Service
//             </Link>
//             <Link
//               to="/accessibility"
//               className="text-gray-400 text-sm hover:text-white transition-colors"
//             >
//               Accessibility
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhone,
  FaMapMarkerAlt,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmex,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Adjust grid: from 5 columns to 4 columns, with the first section spanning 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <span className="font-bold text-xl text-white">StepStyle</span>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Step into a world of comfort and style with our premium selection
              of footwear for every occasion.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <FaFacebook size={18} />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/men"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  Men
                </Link>
              </li>
              <li>
                <Link
                  to="/women"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  Women
                </Link>
              </li>
              <li>
                <Link
                  to="/collections"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  to="/sale"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-300">
                <FaMapMarkerAlt className="text-blue-400" />
                <span>Sainamaina-1, Bankatta</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <FaPhone className="text-blue-400" />
                <span>9811084515</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <MdEmail className="text-blue-400" />
                <span>santoshpaudel@gmail.com</span>
              </li>
            </ul>
            <div className="mt-4 flex gap-2">
              <FaCcVisa size={28} className="text-gray-400" />
              <FaCcMastercard size={28} className="text-gray-400" />
              <FaCcPaypal size={28} className="text-gray-400" />
              <FaCcAmex size={28} className="text-gray-400" />
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} StepStyle. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6 mt-4 md:mt-0">
            <Link
              to="/privacy"
              className="text-gray-400 text-sm hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-400 text-sm hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/accessibility"
              className="text-gray-400 text-sm hover:text-white transition-colors"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
