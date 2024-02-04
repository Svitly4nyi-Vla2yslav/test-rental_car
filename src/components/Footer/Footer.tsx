import React from 'react';
import { FooterContainer, FooterContent } from './Footer.styled';
import { LinkText } from '../Navigation/Navigation.styled';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      
      <FooterContent><LinkText href="tel:+380730000000">+38 (073) 000-00-00</LinkText>
        <span>© All Rights Reserved.</span>
      </FooterContent>
    </FooterContainer>
  );
};
export default Footer;
