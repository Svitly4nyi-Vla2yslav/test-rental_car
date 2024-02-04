import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import React from 'react';

import MainContainer from '../Container/Container';

const SharedLayout: React.FC = ({}) => {
  return (
    <MainContainer>
      <Header />
      <main>
        <Outlet />
      </main>
    </MainContainer>
  );
};

export default SharedLayout;
