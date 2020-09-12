import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  max-width: 345px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #424242;
  color: white;
  text-align: left;
  padding-bottom: 20px;
`;

const CardTitle = styled.h3`
  text-align: left;
`;

const CardImage = styled.img`
  width: 100%;
  height: 140px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const CardContent = styled.div`
  padding: 0 20px;
`;

const Card = ({ first, last, image, children }) => {
  return (
    <CardContainer>
      {/* <CardTitle>Card Title</CardTitle> */}
      <CardImage src={image} />
      <CardContent>
        <CardTitle>
          {first} {last}
        </CardTitle>
        {children}
      </CardContent>
    </CardContainer>
  );
};

export default Card;
