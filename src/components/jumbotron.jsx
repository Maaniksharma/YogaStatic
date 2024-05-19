import Logo from '../components/logo';

const Jumbotron = () => {
  return (
    <div className="bg-heroYogaBoy bg-cover bg-center w-full h-[22rem] md:h-[32rem] lg:h-screen">
      <div className="bg-slate-800 opacity-[.3] w-full h-[22rem] md:h-[32rem] lg:h-screen absolute"></div>
      <div className="text-white absolute z-10 top-12 right-16 text-center md:top-20 md:right-2 lg:top-[32.5rem] lg:right-4">
        <Logo />
        <span className="text-lg md:text-3xl lg:text-4xl">
          The House of Yoga and Therapy
        </span>
      </div>
    </div>
  );
};

export default Jumbotron;
