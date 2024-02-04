import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const FooterContainer = styled.footer`
position: fixed;
  background-color: #3470ff;
  right: 0;
  left: 0;
  bottom: 0;
  height: 70px;
  z-index: 200;
`;

export const FooterContent = styled.div`
  max-width: 1144px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 100%;
  justify-content: center;

  > span {
    color: #8a8a89;
  }
`;

