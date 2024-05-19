import RoundedArrow from '../../public/roundedArrow';
import propTypes from 'prop-types';

const PhoneAndWhatsapp = () => {
  return (
    <div className=" pt-12 flex flex-col items-center gap-8">
      <a href="tel:7900622629">
        <RoundedButton text={'Call Us Directly'} />
      </a>
      <a href="https://wa.me/7900622629" target="_blank">
        <RoundedButton text={'Chat on Whatsapp'} />
      </a>
    </div>
  );
};

const RoundedButton = ({ text }) => {
  return (
    <div className="w-72 h-20 cursor-pointer hover:ring-2 ring-darkBlue rounded-xl text-darkBlue font-semibold bg-blueWhite px-6 py-4 text-xl flex items-center justify-between">
      <div className="">{text}</div>
      <div className="mt-2 size-10 flex items-center justify-center text-center rounded-full bg-fadeBlue animate-bounce">
        <RoundedArrow color={'#0b2640'} className="rotate-90" />
      </div>
      <div className=""></div>
    </div>
  );
};

RoundedButton.propTypes = {
  text: propTypes.string,
};

export default PhoneAndWhatsapp;
