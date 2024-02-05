import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectRentalCars } from '../../redux/selectors';
import CarsCardItem from '../CarsCardItem/CarsCardItem';
import { CardList, LinkLoadMore } from './CarsCardList.styled';
import { getAllCars } from '../../redux/operations';
import ModalWindow from '../ModalWindow/ModalWindow';
import { RentalCars } from '../../redux/types';
import { AppDispatch } from '../../redux/rootReducer/store';

const CarsCardList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [carsData, setCarsData] = useState<RentalCars[] | any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCar, setSelectedCar] = useState<RentalCars | null>(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await dispatch(getAllCars(page));
        if (getAllCars.fulfilled.match(data)) {
          setCarsData(prevData => [
            ...prevData,
            ...data.payload.filter(
              (car: { id: number }) =>
                !prevData.some(prevCar => prevCar.id === car.id)
            ),
          ]);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [page]);

  const handleBtnLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const shouldShowLoadMoreButton =
    carsData.length % 12 === 0 && carsData.length > 0;

  const handleLearnMore = (rentalCar: RentalCars) => {
    setSelectedCar(rentalCar);
  };

  const handleCloseModal = () => {
    setSelectedCar(null);
  };
  const cars = useSelector(selectRentalCars);
  console.log(cars);
  return (
    <>
      <CardList>
        {carsData.map(rentalCar => (
          <CarsCardItem
            key={rentalCar.id}
            rentalCar={rentalCar}
            onLearnMore={handleLearnMore}
          />
        ))}
      </CardList>
      {!isLoading && shouldShowLoadMoreButton && (
        <LinkLoadMore type="text" onClick={handleBtnLoadMore}>
          Load more
        </LinkLoadMore>
      )}
      {selectedCar && (
        <ModalWindow rentalCar={selectedCar} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default CarsCardList;
