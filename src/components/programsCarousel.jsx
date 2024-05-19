import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { programs } from '../constants';
import ProgramComponent from './programComponent';
import { LeftArrow, RightArrow } from './CustomArrows';

const ProgramsCarousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    initialSlide: 0,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider
      {...settings}
      className=" bg-fadeBlue py-3 md:py-6 lg:py-8 max-h-screen"
    >
      {programs.map((program, index) => (
        <ProgramComponent
          bgImage={program.image}
          key={index}
          title={program.title}
        />
      ))}
    </Slider>
  );
};

export default ProgramsCarousel;
