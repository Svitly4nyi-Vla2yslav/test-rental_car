import React, { ReactNode } from 'react';
import { Container } from './Container.styled';

interface MainContainerProps {
  children: ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default MainContainer;
