import React from "react";
import styled, { css } from "styled-components";

const LARGE_BUTTON = css`
  padding: 15px 30px;
  font-size: 20px;
`;

const MEDIUM_BUTTON = css`
  padding: 8px 15px;
  font-size: 16px;
`;

const OUTLINE_BUTTON = css`
  background-color: white;
  color: teal;
  border: 2px solid teal;

  &:disabled {
    color: gray;
    background-color: white;
    border: 2px solid gray;
  }
`;

const DISABLED_BUTTON = css`
  background-color: gray;
  cursor: not-allowed;
`;

const StyleButton = styled.button`
  background-color: teal;
  color: white;
  border-radius: 5px;
  padding: 5px 10px;
  border: none;
  font-weight: bold;

  &:hover:enabled {
    cursor: pointer;
  }

  ${({ size }) => {
    if (size === "large") {
      return `${LARGE_BUTTON}`;
    } else if (size === "medium") {
      return `${MEDIUM_BUTTON}`;
    }
  }};

  ${({ outline }) => outline && `${OUTLINE_BUTTON}`}

  ${({ disabled }) => disabled && `${DISABLED_BUTTON}`}
`;

const Button = ({ size, children, outline = false, disabled, onClick }) => {
  console.log("outline", outline);
  return (
    <StyleButton outline={outline} size={size} disabled={disabled} onClick={onClick}>
      {children}
    </StyleButton>
  );
};

export default Button;
