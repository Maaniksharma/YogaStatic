const Footer = () => (
  <div className="pt-8 md:pt-10 lg:pt-12 pb-4 md:pb-6 bg-darkBlue text-blueWhite">
    <div className=" w-full md:px-20 pt-6 md:pt-10  flex flex-col items-center md:flex-row gap-8 md:gap-96 md:justify-center  md:items-start">
      <div className="flex flex-col  gap-2">
        <h3 className="text-xl md:text-2xl font-semibold">Links</h3>
        <a href="#about">About</a>
        <a href="#programs">Program</a>
        <a href="#contact">Contact</a>
        <a href="#faqs">FAQs</a>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl md:text-2xl font-semibold">Legal</h3>
        <a href="">Privacy</a>
        <a href="">Terms</a>
      </div>
    </div>
    <div className="mt-16 border-t-2 border-gray-300 flex flex-wrap justify-center">
      <div className="w-full md:w-1/3 text-center md:text-left mt-4">
        <p className="text-sm text-gray-200 text-center">
          &copy; {new Date().getFullYear()} Mind-space. All rights reserved.
        </p>
      </div>
    </div>
  </div>
);

// const Footer = () => (
//   <footer className="mt-10 md:mt-12 bg-darkBlue text-white py-8 px-4">
//     <div className="container  mx-auto md:mx-24 lg:mx-36">
//       <div className="flex flex-wrap justify-between">
//         <div className="w-full md:w-1/4 text-center md:text-left">
//           <h5 className="uppercase mb-2 md:mt-4 font-bold">Links</h5>
//           <ul className="mb-4">
//             <li className="mt-2">
//               <a href="#courses" className="hover:underline text-gray-200">
//                 Programs
//               </a>
//             </li>
//             <li className="mt-2">
//               <a href="/contact" className="hover:underline text-gray-200">
//                 Contact
//               </a>
//             </li>
//             <li className="mt-2">
//               <a href="/about" className="hover:underline text-gray-200">
//                 About
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div className="w-full md:w-1/4 text-center md:text-left">
//           <h5 className="uppercase mt-4 mb-2 font-bold">Legal</h5>
//           <ul className="mb-4">
//             <li className="mt-2">
//               <a href="/privacy" className="hover:underline text-gray-200">
//                 Privacy
//               </a>
//             </li>
//             <li className="mt-2">
//               <a href="/terms" className="hover:underline text-gray-200">
//                 Terms
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div className="w-full md:w-1/4 text-center md:text-left">
//           <h5 className="uppercase mb-2 md:mt-4 font-bold">Location</h5>
//           <p className="text-gray-200">Yamunanagar, Haryana</p>
//           <div className="w-full md:w-1/4 text-center md:text-left">
//             <h5 className="uppercase mb-2 mt-4 font-bold">Contact</h5>
//             <a href="tel:+919017767472">
//               <p className="text-gray-200 hover:underline">
//                 Phone: +919017767472
//               </p>
//             </a>
//             <a href="mailto:manusharma.ms35@gmail.com">
//               <p className="text-gray-200 hover:underline">
//                 Email: manusharma.ms35@gmail.com
//               </p>
//             </a>
//           </div>
//         </div>
//         <div className="w-full md:w-1/4 text-center md:text-left">
//           <h5 className="uppercase mt-4 mb-2 font-bold">Social</h5>
//           <ul className="mb-4">
//             <li className="mt-2">
//               <a href="#" className="hover:underline text-gray-200">
//                 Facebook
//               </a>
//             </li>
//             <li className="mt-2">
//               <a
//                 href="https://www.instagram.com/the_innovative2023?igsh=aXR4b3NuZ204azZs"
//                 className="hover:underline text-gray-200"
//               >
//                 Instagram
//               </a>
//             </li>
//             <li className="mt-2">
//               <a href="#" className="hover:underline text-gray-200">
//                 Twitter
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//     <div className="mt-16 border-t-2 border-gray-300 flex flex-wrap justify-center">
//       <div className="w-full md:w-1/3 text-center md:text-left mt-4">
//         <p className="text-sm text-gray-200">
//           &copy; {new Date().getFullYear()} The Innovative. All rights reserved.
//         </p>
//       </div>
//     </div>
//   </footer>
// );

export default Footer;
