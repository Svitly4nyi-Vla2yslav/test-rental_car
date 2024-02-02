import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Accessories,
  Adress,
  Block,
  CarsInfo,
  Container,
  Functionalities,
//   Heart,
  Id,
  ImageCar,
  InfoBlock,
  LearnButton,
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
import { RentalCars } from '../../redux/types';
import { AppDispatch } from '../../redux/rootReducer/store';
import { selectRentalCars } from '../../redux/selectors';
import { getAllCars } from '../../redux/operations';

interface CarsItemProps {
  rentalCar: RentalCars;
}


const CarsCardItem: React.FC<CarsItemProps> = ({rentalCar}) => {
  const dispatch = useDispatch<AppDispatch>();
  const car = useSelector(selectRentalCars)
    
  console.log(car)

  useEffect(() => {
    dispatch(getAllCars(rentalCar
    //   {
    //   id: 9582,
    //   year: 2008,
    //   make: "Buick",
    //   model: "Enclave",
    //   type: "SUV",
    //   img: "https://ftp.goit.study/img/cars-test-task/buick_enclave.jpeg",
    //   description: "The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.",
    //   fuelConsumption: "10.5",
    //   engineSize: "3.6L V6",
    //   accessories: [
    //     "Leather seats",
    //     "Panoramic sunroof",
    //     "Premium audio system"
    //   ],
    //   functionalities: [
    //     "Power liftgate",
    //     "Remote start",
    //     "Blind-spot monitoring"
    //   ],
    //   rentalPrice: "$40",
    //   rentalCompany:"Luxury Car Rentals",
    //   address: "123 Example Street, Kiev, Ukraine",
    //   rentalConditions: "Minimum age: 25\nValid driver's license\nSecurity deposit required",
    //   mileage: 5858
    // }
    ));
  }, [dispatch]);
  return (
    <>
      <Container>
        <Block>
          {/* <ImageCar src={rentalCar.img} alt='background'>
            <Heart>dfbzdfb</Heart>
          </ImageCar> */}
          <Wrapper>
            <WrapperName>
              <TitleName>
                <Make>{rentalCar.make}</Make>
                <ModelAuto>{rentalCar.model}</ModelAuto>
                <Year>{rentalCar.year}</Year>
              </TitleName>
              <Price>{rentalCar.rentalPrice}</Price>
            </WrapperName>
            <InfoBlock>
              <CarsInfo>
                <Adress>{rentalCar.address}|</Adress>
                <RentalCompany>{rentalCar.rentalCompany}</RentalCompany>
                <Accessories>{rentalCar.accessories}</Accessories>
                <Type>{rentalCar.type}</Type>
                <Model>{rentalCar.model}</Model>
                <Id>{rentalCar.id}</Id>
                <Functionalities>{rentalCar.functionalities}</Functionalities>
              </CarsInfo>
            </InfoBlock>
          </Wrapper>
        </Block>
        <LearnButton>
          <TextButton>Learn More</TextButton>
        </LearnButton>
      </Container>
    </>
  );
};

export default CarsCardItem;
