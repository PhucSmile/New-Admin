import React from 'react';
import styled from 'styled-components';
import { Layout, LayoutProps } from 'antd';
import { APP_FOOTER_NAME, APP_FOOTER_LINK } from 'constants/app';

const StyledFooter = styled(Layout.Footer)`
  text-align: center;
  padding: 12px 24px;
  color: var(--redText);
  background: rgba(255, 255, 255, 0.15) !important;
`;

export const Footer = (props: LayoutProps) => {
  return (
    <StyledFooter {...props}>
      <a href={APP_FOOTER_LINK} target="_blank" rel="noreferrer">
        {APP_FOOTER_NAME}
      </a>
    </StyledFooter>
  );
};
