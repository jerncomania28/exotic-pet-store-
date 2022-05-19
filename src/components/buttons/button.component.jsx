import "./button.styles.scss";

const BUTTON_TYPES = {
  coloured: "coloured",
  pink: "pink",
  empty: "empty",
  inverted: "pink-inverted",
  common : "services-accessory",
  service : "service-pet",
  blue : "blue",
  pinkCard : "pink-card",
  blueCard : "blue-card",
  yellowCard: "yellow-card"

  
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
