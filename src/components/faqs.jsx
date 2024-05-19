import { FAQS } from '../constants';
import Faq from './faq';

const Faqs = () => {
  return (
    <div className="py-8 px-4 md:px-6 md:py-12 lg:px-8  lg:py-16" id="faqs">
      <div className="pb-4  text-center text-darkBlue text-3xl md:pb-6  md:text-4xl lg:pb-8 lg:text-5xl lg:leading-[3.3rem] font-semibold">
        Frequently Asked Questions
      </div>
      <div className=" border-t-2 border-x-2 border-darkBlue flex flex-col gap-0">
        {FAQS.map((faq, index) => (
          <Faq key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default Faqs;
