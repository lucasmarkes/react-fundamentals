import PropTypes from "prop-types";
import React, { useContext } from "react";
import { ThemeContext } from "./App";

function Button(props) {
  const theme = useContext(ThemeContext);

  return (
    <button
      onClick={() => props.onRemove(props.id)}
      style={{
        background: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "white" : "black",
      }}
    >
      Remove
    </button>
  );
}

export default Button;

Button.propTypes = {
  id: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
};
