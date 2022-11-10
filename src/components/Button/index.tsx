import React from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  color: "gray" | "red" | "blue";
  size?: "small" | "medium" | "large";
  fill?: string;
  onClick: () => void;
  children: React.ReactNode;
}

const Button = ({
  color,
  onClick,
  size = "medium",
  fill = "true",
  children,
}: ButtonProps) => {
  return (
    <ButtonWrapper color={color} size={size} fill={fill} onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.button<ButtonProps>`
  margin-top: 10px;
  width: 100%;
  font-size: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.05s linear;

  &:hover {
    transform: scale(1.02);
  }

  ${(props) => {
    switch (props.size) {
      case "large":
        return css`
          padding: 10px;
        `;
      case "small":
        return css`
          padding: 5px;
        `;
      default:
        return css`
          padding: 7px;
        `;
    }
  }}

  ${(props) => {
    const color = props.theme[props.color];
    return props.fill
      ? css`
          background: ${color};
          color: #fff;
        `
      : css`
          border: 1px solid ${color};
          color: ${color};
          background: #fff;
        `;
  }}
`;
