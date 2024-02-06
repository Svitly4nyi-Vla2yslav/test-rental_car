import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectRentalCars } from '../../redux/selectors';
import CarsCardItem from '../CarsCardItem/CarsCardItem';
import {
  CardList,
  Container,
  LinkLoadMore,
  NotFilters,
} from './CarsCardList.styled';
import { getAllCars } from '../../redux/operations';
import ModalWindow from '../ModalWindow/ModalWindow';
import { RentalCars } from '../../redux/types';
import { AppDispatch } from '../../redux/rootReducer/store';
import Filter from '../Filter/Filter';
import Loader from '../Loader/Loader';

const CarsCardList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [carsData, setCarsData] = useState<RentalCars[] | any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCar, setSelectedCar] = useState<RentalCars | null>(null);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    make: '',
    filteredPrices: [],
    minMileage: '',
    maxMileage: '',
  });
  const [filteredAdverts, setFilteredAdverts] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);

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

  useEffect(() => {
    if (isFiltering) {
      if (Object.values(filters).some(Boolean)) {
        const updatedFilteredAdverts = carsData.filter(
          ({ make, rentalPrice, mileage }) => {
            const passMakeFilter = !filters.make || make === filters.make;
            const passPriceFilter =
              !filters.filteredPrices.length ||
              filters.filteredPrices.some(
                ({ value }) => value === rentalPrice.replace('$', '')
              );
            const passMinMileageFilter =
              !filters.minMileage ||
              Number(mileage) >= Number(filters.minMileage);
            const passMaxMileageFilter =
              !filters.maxMileage ||
              Number(mileage) <= Number(filters.maxMileage);

            return (
              passMakeFilter &&
              passPriceFilter &&
              passMinMileageFilter &&
              passMaxMileageFilter
            );
          }
        );

        setFilteredAdverts(updatedFilteredAdverts);
      } else {
        setFilteredAdverts([]);
      }
    }
  }, [filters, carsData, isFiltering]);

  const carMakes: string[] = Array.from(
    new Set(carsData.map(({ make }) => make))
  );
  const carPrices: number[] = Array.from(
    new Set(
      carsData.map(({ rentalPrice }) => Number(rentalPrice.replace('$', '')))
    )
  );
  const carMileage: number[] = Array.from(
    new Set(carsData.map(({ mileage }) => mileage))
  );
  const minCarMileage = Math.min(...carMileage);
  const maxCarMileage = Math.max(...carMileage);

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

  const handleFilterChange = newFilters => {
    setFilters(newFilters);
    setIsFiltering(true);
  };
  return (
    <>
      <Filter
        carMakes={carMakes}
        carPrices={carPrices}
        minMileage={minCarMileage}
        maxMileage={maxCarMileage}
        onFilterChange={handleFilterChange}
      />
      <CardList>
        {isFiltering && filters.make && filteredAdverts.length > 0 ? (
          filteredAdverts.map(rentalCar => (
            <CarsCardItem
              key={rentalCar.id}
              rentalCar={rentalCar}
              onLearnMore={handleLearnMore}
            />
          ))
        ) : (
          <>
            {isFiltering && filters.make ? (
              <>
                <NotFilters>
                  Regrettably, we&#39;re currently unable to provide any
                  offerings related to the selected items.
                </NotFilters>
              </>
            ) : (
              <>
                {carsData.map(rentalCar => (
                  <CarsCardItem
                    key={rentalCar.id}
                    rentalCar={rentalCar}
                    onLearnMore={handleLearnMore}
                  />
                ))}
              </>
            )}
          </>
        )}
      </CardList>
      {isLoading && <Loader />}
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
