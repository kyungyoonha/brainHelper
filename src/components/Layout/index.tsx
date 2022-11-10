import React from "react";
import styled from "styled-components";
import Head from "next/head";
import LayoutHeader from "./LayoutHeader";
import Image from "next/image";
import Logo from "../Logo";

interface LayoutProps {
  seoTitle?: string;
  children: React.ReactNode;
}

const Layout = ({ seoTitle, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{seoTitle ? seoTitle + " | BrainHelper" : "BrainHelper"}</title>
      </Head>
      <LayoutHeader />

      <Container>
        <Image src="/background.jpeg" alt="few" fill />

        <BoxContainer>
          <BoxHeader>
            <Logo fontSize="20px" />
            <p>
              오늘 푼 문제: <span>4</span>
            </p>
          </BoxHeader>
          {children}
        </BoxContainer>
      </Container>
    </>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0;
  height: calc(100vh - 100px);
  position: relative;
`;

const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px;
  width: 545px;
  background: #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  z-index: 1;
`;

const BoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  width: 100%;

  & > p {
    margin-top: 12px;
    font-size: 14px;
    font-weight: 300;
  }

  & > p > span {
    font-weight: 500;
  }
`;
