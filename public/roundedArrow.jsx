const RoundedArrow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    color={'#000000'}
    fill={'none'}
    {...props}
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M10.5 8C10.5 8 13.5 10.946 13.5 12C13.5 13.0541 10.5 16 10.5 16"
      stroke="currentColor"
      strokeWidth="2.0"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default RoundedArrow;
