import React from 'react';
import CarsCardItem from '../CarsCardItem/CarsCardItem';
import { StyledFavoritesList } from './Favorites.styled';
import { RentalCars } from '../../redux/types';

interface FavoritesProps {
    favorites: RentalCars[];
  }

const Favorites: React.FC<FavoritesProps>  = ({ favorites }) => {
  return (
    <StyledFavoritesList>
      {favorites.map(favorite => (
        <CarsCardItem key={favorite.id} rentalCar={favorite} onLearnMore={function (rentalCar: { id: number; year: number; make: string; model: string; type: string; img: string; description: string; fuelConsumption: string; engineSize: string; accessories: string[]; functionalities: string[]; rentalPrice: string; rentalCompany: string; address: string; rentalConditions: string; mileage: number; limit?: number | undefined; }): void {
              throw new Error('Function not implemented.');
          } } />
      ))}
    </StyledFavoritesList>
  );
};

export default Favorites;