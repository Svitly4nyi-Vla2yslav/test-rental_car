import React from 'react';
import { NavWrap, LinkStyled, LinkText } from './Navigation.styled';

const Navigation: React.FC = () => {
  return (
    <NavWrap>
      <nav>
        <LinkStyled to="/">Home</LinkStyled>

        <LinkStyled to="/catalog">Rental Cars</LinkStyled>

        <LinkStyled to="/favorites">Favorites</LinkStyled>
      </nav>
     
    </NavWrap>
  );
};

export default Navigation;
