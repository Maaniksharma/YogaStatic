const HeroSection = () => {
  return (
    <div
      className="pt-16 pb-16  px-4 md:pb-20 md:px-6 md:flex items-center md:gap-6 md:pt-8 lg:pb-24 lg:px-8 lg:pt-24 lg:gap-10"
      id="about"
    >
      <div className="md:w-[50vw] pb-6 md:pb-0">
        <div className="text-darkBlue text-3xl md:text-4xl lg:text-5xl lg:leading-[3.3rem] font-semibold">
          <div className="text-center">
            Welcome to <span className="text-lightBlue">Mindspace.fit</span> ,
            where tranquility of
            <span className="text-lightBlue"> yoga</span> merges with the
            healing power of <span className="text-lightBlue">therapy.</span>
          </div>
        </div>
        <div className="text-darkBlue pt-2 text-lg md:pt-4 md:text-xl lg:text-2xl lg:pt-8">
          Our integrated approach combines ancient yogic practices with modern
          therapeutic techniques to nurture your mind, body, and spirit. Whether
          you seek physical strength, emotional balance, or mental clarity, our
          experienced instructors and compassionate therapists are here to
          support you every step of the way. Embark on a journey towards
          wholeness and well-being with us today.
        </div>
      </div>
      <div className="flex items-center justify-center text-center w-full pt-8 md:pt-0 md:pl-6 md:w-[35vw]">
        <img
          src="/youngYogi.webp"
          alt=""
          className="object-cover shadow-slate-800 shadow-2xl rounded-lg"
        />
      </div>
    </div>
  );
};

export default HeroSection;
