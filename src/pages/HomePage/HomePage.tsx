import React, { useEffect } from 'react';
// import CarsCardItem from '../../components/CarsCardItem/CarsCardItem'
import CarsCardList from '../../components/CarsCardList/CarsCardList';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/selectors';
import { getAllCars } from '../../redux/operations';

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getAllCars() as any);
  }, [dispatch]);
  return (
    <div>
      HomePage
      <CarsCardList />
    </div>
  );
};

export default HomePage;
