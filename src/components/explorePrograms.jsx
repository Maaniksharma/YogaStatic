import ProgramsCarousel from './programsCarousel';

const ExplorePrograms = () => {
  return (
    <div
      className=" bg-fadeBlue max-h-screen  py-12 md:py-10 lg:py-12"
      id="programs"
    >
      <div className=" text-center text-darkBlue text-3xl md:text-4xl lg:text-5xl lg:leading-[3.3rem] font-semibold">
        Explore Our Programs
      </div>
      <ProgramsCarousel />
    </div>
  );
};

export default ExplorePrograms;
