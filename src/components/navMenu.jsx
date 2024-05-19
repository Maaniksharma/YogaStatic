import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const NavMenu = ({ isMenuOpen, navItems }) => {
  return (
    <div
      className={`md:hidden z-20  bg-white absolute text-darkBlue w-full flex flex-col items-start p-4 pt-2 transition-all duration-500 ${
        isMenuOpen ? 'opacity-1' : 'opacity-0'
      }`}
    >
      {navItems.map((item) => (
        <Link
          key={item}
          className={`mb-2 transition-all duration-500 ${
            isMenuOpen ? 'opacity-1' : 'opacity-0'
          }`}
        >
          {item}
        </Link>
      ))}
    </div>
  );
};

NavMenu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  navItems: PropTypes.array.isRequired,
};
export default NavMenu;
