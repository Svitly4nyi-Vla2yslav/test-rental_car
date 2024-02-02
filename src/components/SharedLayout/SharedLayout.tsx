import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import  Header  from '../Header/Header';
import React from 'react';
import CarsCardItem from '../CarsCardItem/CarsCardItem';

const SharedLayout: React.FC = () => {
  return (
    <>
      <Header />
      {/* <CarsCardItem/> */}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
