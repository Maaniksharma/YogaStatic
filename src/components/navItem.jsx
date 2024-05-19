import PropTypes from 'prop-types';

const NavItem = ({ label }) => {
  return (
    <div className="cursor-pointer flex flex-col gap-[0.05rem] group">
      <div className="">{label}</div>
      <div className="bg-darkBlue h-[0.15rem] w-0 transition-all transform group-hover:w-full"></div>
    </div>
  );
};
NavItem.propTypes = {
  label: PropTypes.string.isRequired,
};

export default NavItem;
