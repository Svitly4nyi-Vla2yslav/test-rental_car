import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  top: 0;

  z-index: 200;
  padding-left: 40px;
  padding-right: 40px;
  background-color: #3470ff;
  border-bottom: '1px solid rgba(239, 237, 232, 0.20)';
  
`;
export const HeaderContainer = styled.header`
  padding-top: 24px;
  padding-bottom: 24px;
  
`;

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;

export const NavWrap = styled.nav`
  margin-right: 32px;
`;

export const UserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const UserBarWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;
