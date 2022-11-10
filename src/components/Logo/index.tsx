import React from "react";
import styled from "styled-components";

interface LogoProps {
  fontSize: string;
}

const Logo = ({ fontSize }: LogoProps) => {
  return (
    <LogoContainer fontSize={fontSize}>
      <span>B</span>elieve<span>B</span>rain
    </LogoContainer>
  );
};

export default Logo;

type AAA = {
  fontSize: string;
};

const LogoContainer = styled.div<AAA>`
  display: flex;
  align-items: center;
  margin-right: 30px;
  font-weight: 700;
  font-size: ${(props) => props.fontSize};

  & > span {
    &:first-child {
      color: ${(props) => props.theme.blue};
    }
    &:last-child {
      color: ${(props) => props.theme.red};
    }
  }
`;
