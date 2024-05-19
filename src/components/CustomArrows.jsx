import PropTypes from 'prop-types';
import RightArrowIcon from '../../public/rightArrowIcon';
import LeftArrowIcon from '../../public/leftArrowIcon';
const LeftArrow = ({ style, onClick }) => {
  return (
    <div
      className="size-16 absolute z-10 top-[45%] left-2 rounded-full flex items-center justify-center bg-lightBlue cursor-pointer"
      style={{ ...style }}
      onClick={onClick}
    >
      <LeftArrowIcon
        width={44}
        height={44}
        color={'#FFFFFF'}
        className="ml-2 mt-[0.65rem]"
      />
    </div>
  );
};

const RightArrow = ({ style, onClick }) => {
  return (
    <div
      className="size-16 absolute z-10 top-[45%] right-2 rounded-full flex items-center justify-center bg-lightBlue cursor-pointer"
      style={{ ...style }}
      onClick={onClick}
    >
      <RightArrowIcon
        width={44}
        height={44}
        color={'#FFFFFF'}
        className="ml-3 mt-[0.65rem]"
      />
    </div>
  );
};

LeftArrow.propTypes = {
  style: PropTypes.object,
  onClick: PropTypes.func,
};
RightArrow.propTypes = {
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export { LeftArrow, RightArrow };
