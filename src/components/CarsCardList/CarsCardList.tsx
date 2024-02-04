import React from 'react';
import { useSelector } from 'react-redux';
import { selectRentalCars } from '../../redux/selectors';
import CarsCardItem from '../CarsCardItem/CarsCardItem';
import { CardList } from './CarsCardList.styled';

const CarsCardList: React.FC = () => {
  const cars = useSelector(selectRentalCars);
console.log(cars)
  return (
    <CardList>
      {cars.map(rentalCar => (
        <CarsCardItem key={rentalCar.id} rentalCar={rentalCar} />
      ))}
    </CardList>
  );
};

export default CarsCardList;
