import React, { useState } from 'react';
import CarsCardItem from '../CarsCardItem/CarsCardItem';
import { StyledFavoritesList } from './Favorites.styled';
import { RentalCars } from '../../redux/types';
import ModalWindow from '../ModalWindow/ModalWindow';

interface FavoritesProps {
  favorites: RentalCars[];
}

const Favorites: React.FC<FavoritesProps> = ({ favorites }) => {
  const [selectedCar, setSelectedCar] = useState<RentalCars | null>(null);


  const handleLearnMore = (rentalCar: RentalCars): void => {
    setSelectedCar(rentalCar);
    console.log('Learn More clicked:', rentalCar);
  };

  const handleCloseModal = () => {
    setSelectedCar(null);
  };

  return (
    <StyledFavoritesList>
      {favorites.map(favorite => (
        <CarsCardItem
          key={favorite.id}
          rentalCar={favorite}
          onLearnMore={handleLearnMore}
        />
      ))}
      {selectedCar && (
        <ModalWindow rentalCar={selectedCar} onClose={handleCloseModal} />
      )}
    </StyledFavoritesList>
  );
};

export default Favorites;
