import React, { useEffect, useState } from 'react';
import {
  Accessories,
  Adress,
  Block,
  CarsInfo,
  Container,
  Functionalities,
  Id,
  ImageCar,
  InfoBlock,
  LearnButton,
  LikeButton,
  Make,
  Model,
  ModelAuto,
  Price,
  RentalCompany,
  TextButton,
  TitleName,
  Type,
  Wrapper,
  WrapperName,
  Year,
} from './CarsCardItem.styled';
import HeartBorderIcon from '@mui/icons-material/FavoriteBorder';
import HeartOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/rootReducer/store';
import { selectFavorites, selectRentalCars } from '../../redux/selectors';
import { toggleFavorite } from '../../redux/slice';
import errorCaar from '../../assets/caaar.jpg';

interface RentalCars {
  rentalCar: {
    id: number;
    year: number;
    make: string;
    model: string;
    type: string;
    img: string;
    description: string;
    fuelConsumption: string;
    engineSize: string;
    accessories: string[];
    functionalities: string[];
    rentalPrice: string;
    rentalCompany: string;
    address: string;
    rentalConditions: string;
    mileage: number;
    limit?: number;
  };
  onLearnMore: (rentalCar: RentalCars['rentalCar']) => void;
}

interface ImageCarProps {
  imgurl: string;
}

const CarsCardItem: React.FC<RentalCars> = ({ rentalCar, onLearnMore }) => {
  const dispatch = useDispatch<AppDispatch>();
  const car = useSelector(selectRentalCars);
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.filter(
    favorite => favorite.id === rentalCar.id
  )[0];
  const favoriteToggle = rentalCar => {
    dispatch(toggleFavorite(rentalCar));
  };

  return (
    <>
      <Container>
        <Block>
          <ImageCar imgurl={rentalCar.img || errorCaar}>
            <LikeButton onClick={() => favoriteToggle(rentalCar)}>
              {isFavorite ? (
                <HeartOutlinedIcon
                  fontSize="medium"
                  style={{ fill: '#3470ff' }}
                />
              ) : (
                <HeartBorderIcon
                  fontSize="medium"
                  style={{ fill: '#ffffffcc' }}
                />
              )}
            </LikeButton>
          </ImageCar>
          <Wrapper>
            <WrapperName>
              <TitleName>
                <Make> {rentalCar.make} </Make>
                <ModelAuto> {rentalCar.model} </ModelAuto>
                <Year> {rentalCar.year} </Year>
              </TitleName>
              <Price> {rentalCar.rentalPrice}</Price>
            </WrapperName>
            <InfoBlock>
              <CarsInfo>
                <Adress>
                  {rentalCar.address
                    .split(' ')
                    [rentalCar.address.split(' ').length - 2].slice(0, -1)}{' '}
                  |
                </Adress>
                <Adress>
                  {
                    rentalCar.address.split(' ')[
                      rentalCar.address.split(' ').length - 1
                    ]
                  }{' '}
                  |
                </Adress>
                <RentalCompany> {rentalCar.rentalCompany} | </RentalCompany>
                <Accessories> {rentalCar.accessories[0]} | </Accessories>
                <Type> {rentalCar.type} | </Type>
                <Model> {rentalCar.model} | </Model>
                <Id>{rentalCar.id} | </Id>
                <Functionalities>
                  {rentalCar.functionalities[0]}{' '}
                </Functionalities>
              </CarsInfo>
            </InfoBlock>
          </Wrapper>
        </Block>
        <LearnButton onClick={() => onLearnMore(rentalCar)}>
          <TextButton>Learn More</TextButton>
        </LearnButton>
      </Container>
    </>
  );
};

export default CarsCardItem;
export type { ImageCarProps };
