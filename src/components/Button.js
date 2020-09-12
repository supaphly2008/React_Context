import React from "react";
import styled from "styled-components";

const StyleButton = styled.button`
  background-color: teal;
`;

const Button = ({ children }) => {
  return <StyleButton>{children}</StyleButton>;
};

export default Button;
