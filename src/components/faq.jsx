import { useState } from 'react';
import PropTypes from 'prop-types';
import RightArrowIcon from '../../public/rightArrowIcon';

const Faq = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(1);
  return (
    <div className=" border-b-2 border-darkBlue">
      <div className="flex justify-between items-center px-4 py-2 text-darkBlue text-lg md:text-xl md:px-6 md:py-2 lg:px-8 lg:py-3 ">
        <div className=" ">{question}</div>
        <div
          className={`rounded-full p-2 bg-fadeBlue transition-all duration-500 -rotate-90 ${
            isOpen == 0 ? '' : isOpen === 1 ? 'rotate-90' : '-rotate-90'
          }`}
          onClick={() => {
            isOpen == 0
              ? setIsOpen(2)
              : isOpen === 1
              ? setIsOpen(2)
              : setIsOpen(1);
          }}
        >
          <RightArrowIcon />
        </div>
      </div>

      <div
        className={`transition-all bg-fadeBlue duration-500  text-darkBlue   ${
          isOpen === 2
            ? 'h-full px-4 py-2 text-lg  md:px-6 md:py-2 md:text-xl lg:px-8 lg:py-3 '
            : ' h-0'
        }`}
      >
        <div className={`${isOpen === 2 ? 'visible' : 'hidden'}`}>{answer}</div>
      </div>
    </div>
  );
};

Faq.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default Faq;
