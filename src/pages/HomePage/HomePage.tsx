import React, { useEffect } from 'react';
// import CarsCardItem from '../../components/CarsCardItem/CarsCardItem'
import CarsCardList from '../../components/CarsCardList/CarsCardList';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/selectors';
import { getAllCars } from '../../redux/operations';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getAllCars() as any);
  }, [dispatch]);
  return (
    <div>
      <Header/>
      HomePage
      <Footer/>
    </div>
  );
};

export default HomePage;
