import React from "react";
import styled from "styled-components";

interface StarScoreProps {
  score: number;
}

const StarScore = ({ score }: StarScoreProps) => {
  return (
    <Container>
      {[...new Array(score).keys()].map((key) => {
        return <StarItem key={key}>⭐️</StarItem>;
      })}
    </Container>
  );
};

export default StarScore;

const Container = styled.div``;

const StarItem = styled.span`
  margin-right: 5px;

  &:last-child {
    margin-right: 0;
  }
`;
