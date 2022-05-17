import "./button.styles.scss";

const BUTTON_TYPES = {
  coloured: "coloured",
  pink: "pink",
  empty: "empty",
  inverted: "pink-inverted"
};

const Button = ({ children, buttonType, width }) => {
  return (
    <button
      className={`buttons ${BUTTON_TYPES[buttonType]}`}
      style={{ width: `${width}` }}
    >
      {children}
    </button>
  );
};

export default Button;
