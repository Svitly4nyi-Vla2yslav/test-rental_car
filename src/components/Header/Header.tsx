import React from 'react'
import { HeaderContainer, HeaderWrap,  NavWrap, UserBarWrapper, UserContainer, Wrapper } from './Header.styled';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navagation';


const Header: React.FC = () => {
  return (
    <div>  <Wrapper>
    <HeaderContainer>
      <HeaderWrap>
          <UserContainer>
            <NavWrap>
              <Navigation />
            </NavWrap>
          </UserContainer>
        </HeaderWrap>
      </HeaderContainer>
    </Wrapper>
    </div>
  )
}

export default Header
