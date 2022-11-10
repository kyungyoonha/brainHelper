import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "src/components/Logo";

const LayoutHeader = () => {
  const router = useRouter();
  return (
    <HeaderContainer>
      <MenuList>
        <Logo fontSize="24px" />
        <MenuItem href="/" className={router?.pathname === "/" ? "active" : ""}>
          전체랜덤
        </MenuItem>
        <MenuItem
          href="/bbb"
          className={router?.pathname === "/bbb" ? "active" : ""}
        >
          특정랜덤
        </MenuItem>
        <MenuItem
          href="/ccc"
          className={router?.pathname === "/ccc" ? "active" : ""}
        >
          전체보기
        </MenuItem>
      </MenuList>
    </HeaderContainer>
  );
};
export default LayoutHeader;

const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuList = styled.ul`
  width: 1200px;
  height: 100%;
  display: flex;
`;

const MenuItem = styled(Link)`
  margin-right: 30px;
  width: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 300;

  &:last-child {
    margin-right: 0;
  }

  &.active {
    font-weight: 400;
    color: ${(props) => props.theme.blue};
    border-bottom: 4px solid ${(props) => props.theme.blue};
  }

  &:hover {
    color: ${(props) => props.theme.blue};
  }
`;
