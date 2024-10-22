import PropTypes from "prop-types";

const Button = ({text, type, onClick}) => {
  return (
    <button type={type} onClick={onClick}
      className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 transition ease-in-out duration-200"
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
export default Button;
