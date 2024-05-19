import PropTypes from 'prop-types';

const ProgramComponent = ({ bgImage, title }) => {
  return (
    <div
      className={`relative mx-4 shadow-slate-800 shadow-2xl flex items-center justify-center rounded-xl bg-cover bg-norepeat h-[32rem] md:mx-8 lg:mx-16`}
      style={{
        backgroundImage: `url(${bgImage}.webp)`,
      }}
    >
      <div className="absolute text-center flex justify-center items-center bg-slate-800 bottom-0 opacity-[.4] h-[12rem]  mx-4 w-full md:mx-8 lg:mx-16"></div>
      <div className="absolute bottom-36 text-white text-3xl md:text-4xl lg:text-4xl font-semibold">
        {title}
      </div>
    </div>
  );
};

ProgramComponent.propTypes = {
  bgImage: PropTypes.string,
  title: PropTypes.string,
};

export default ProgramComponent;
