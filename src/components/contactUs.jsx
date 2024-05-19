import EmailContact from './emailContact';
import PhoneAndWhatsapp from './phoneAndWhatsapp';
const ContactUs = () => {
  return (
    <div
      className=" text-darkBlue py-8 px-4 md:px-8 md:py-12 lg:px-20  lg:py-16 bg-fadeBlue"
      id="contact"
    >
      <div className="pb-4  text-center text-3xl md:pb-6  md:text-4xl lg:pb-8 lg:text-5xl lg:leading-[3.3rem] font-semibold">
        Contact Us
      </div>
      <div className="md:flex items-center justify-between">
        <div className=" w-80 h-80">
          <img src="/contactUsvector.png" alt="" className="w-full h-full" />
        </div>
        <EmailContact />
        <PhoneAndWhatsapp />
      </div>
    </div>
  );
};

export default ContactUs;
