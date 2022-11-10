import React, { useState } from "react";
import styled from "styled-components";
import { Layout, StarScore, Button } from "@components";

const Home = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Layout seoTitle="BrainHelper">
      <StarScore score={4} />
      <QuestionNumber>Q1</QuestionNumber>
      <QuestionText>과호흡은 왜 오는걸까?</QuestionText>
      <Button
        color="gray"
        fill={String(isClicked)}
        onClick={() => setIsClicked(true)}
      >
        흰트
      </Button>
      <ButtonWrapper>
        <Button color="red" size="large" onClick={() => {}}>
          모르겠어요 😕
        </Button>
        <Button color="blue" size="large" onClick={() => {}}>
          알고 있어요 😆
        </Button>
      </ButtonWrapper>
      <Description>
        내 스스로 기억하기 <span>프로젝트</span>
      </Description>
    </Layout>
  );
};

export default Home;

const QuestionNumber = styled.h3`
  font-weight: 700;
  font-size: 30px;
  color: ${(props) => props.theme.blue};
`;

const QuestionText = styled.h4`
  font-size: 20px;
  font-weight: 300;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;

  & > button {
    flex: 1;
    margin-right: 15px;
  }

  & > button:last-child {
    margin-right: 0px;
  }
`;

const Description = styled.p`
  margin-top: 15px;
  font-size: 16px;
  color: ${(props) => props.theme.red};
  & > span {
    color: ${(props) => props.theme.blue};
  }
`;
