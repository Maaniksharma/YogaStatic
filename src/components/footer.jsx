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

export default Footer;
