import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import bgImg from 'assets/images/auth-bg.png';
import { Footer } from './components/Footer';

const StyledAuthLayout = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${bgImg}) no-repeat center;
  background-size: cover;
  position: relative;
`;

export const AuthLayout = () => {
  return (
    <StyledAuthLayout>
      <Outlet />

      <Footer
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'transparent',
        }}
      />
    </StyledAuthLayout>
  );
};
