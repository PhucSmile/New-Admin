import React from 'react';
import styled from 'styled-components';
import { StyledImg } from 'styles/overrides';
import logoImg from 'assets/images/logo.png';

interface LayoutProps {
  title: string;
  children?: React.ReactNode;
}

const StyledLayout = styled.div`
  max-width: 412px;
  width: 100%;
  padding: 56px 72px;
  border-radius: 8px;
  background-color: var(--white);
`;

const StyledLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

export const Layout = ({ title, children }: LayoutProps) => {
  return (
    <StyledLayout>
      <StyledLogoContainer>
        <StyledImg src={logoImg} alt="logo" />
      </StyledLogoContainer>

      {children}
    </StyledLayout>
  );
};
