import React from "react";
interface Props {
  text: string;
  onClick: () => void;
}

const Button: React.FC<Props> = (props) => {
  const { text, onClick } = props;
  return (
    <button style={{ height: "2.5rem", marginLeft: "1rem" }} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
