import { useState } from 'react';
import NavItem from './navItem';
import { navItems } from '../constants';
import HamBurgerMenuIcon from '../../public/hamBurgerMenu';
import Cross from '../../public/cross';
import NavMenu from './navMenu';
import Logo from './logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <navbar>
      <div className="flex items-center justify-between px-4 py-2 md:px-8 md:py-4 lg:px-10 lg:py-5">
        <Logo />
        <div className="text-darkBlue hidden font-[590] md:flex md:gap-12 md:text-2xl lg:gap-20 lg:text-3xl">
          {navItems.map((item) => (
            <NavItem key={item} label={item} />
          ))}
        </div>
        <div className="md:hidden ">
          <Cross
            width={32}
            height={32}
            color={'#0b2640'}
            className={`absolute top-2 right-3 transition-all duration-700   ${
              isMenuOpen ? 'opacity-1' : 'opacity-0'
            }`}
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          />
          <HamBurgerMenuIcon
            width={32}
            height={32}
            color={'#0b2640'}
            className={`absolute top-2 right-3 transition-all duration-700   ${
              !isMenuOpen ? 'opacity-1' : 'opacity-0'
            }`}
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          />
        </div>
      </div>
      <NavMenu isMenuOpen={isMenuOpen} navItems={navItems} />
    </navbar>
  );
};

export default Navbar;
