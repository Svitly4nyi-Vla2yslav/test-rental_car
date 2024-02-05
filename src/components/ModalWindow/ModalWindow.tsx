import { useEffect } from 'react';

import {
  AccessoriesFunct,
  AddressData,
  BtnRentalCar,
  CloseButton,
  ImgModal,
  InformCar,
  MachineDescription,
  MakeModalYear,
  ModalContent,
  ModalOverlay,
  StyledList,
  TitleInform,
} from './ModalWindow.styled';
import React from 'react';
import { RentalCars } from '../../redux/types';
import { LinkText } from '../Navigation/Navigation.styled';

interface ModalWindowProps {
  rentalCar: RentalCars | null;
  onClose: () => void;
}

const ModalWindow: React.FC<ModalWindowProps> = ({ rentalCar, onClose }) => {
  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keyup', handleKeyDown);

    return () => {
      window.removeEventListener('keyup', handleKeyDown);
    };
  }, [onClose]);

  const handleClose = () => onClose();

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  return (
    <ModalOverlay onClick={handleBackdropClick}>
      <ModalContent>
        <CloseButton onClick={handleClose}>✖</CloseButton>
        <ImgModal
          src={rentalCar?.img}
          alt={`${rentalCar?.make} ${rentalCar?.model}`}
        />
        {rentalCar && (
          <InformCar>
            <MakeModalYear>{`${rentalCar.make} ${rentalCar.model}, ${rentalCar.year}`}</MakeModalYear>
            <AddressData>
              {rentalCar.address && (
                <span>
                  {rentalCar.address
                    .split(' ')
                    [rentalCar.address.split(' ').length - 2].slice(0, -1)}{' '}
                  |{' '}
                  {
                    rentalCar.address.split(' ')[
                      rentalCar.address.split(' ').length - 1
                    ]
                  }
                </span>
              )}{' '}
              | Id: {rentalCar.id} | Year: {rentalCar.year} | Type:{' '}
              {rentalCar.type} | Fuel Consumption: {rentalCar.fuelConsumption} |
              Engine Size: {rentalCar.engineSize}
            </AddressData>
            <MachineDescription>
              {`The ${rentalCar.make} ${rentalCar.model} is a stylish and spacious ${rentalCar.type} known for its comfortable ride and luxurious features.`}
            </MachineDescription>
            <TitleInform>Accessories and functionalities:</TitleInform>
            <AccessoriesFunct>
              {rentalCar.accessories
                ?.slice(0, 3)
                .map((accessory, index) => (
                  <span key={index}>{accessory} | </span>
                ))}
              {rentalCar.functionalities
                ?.slice(0, 3)
                .map((functionality, index) => (
                  <span key={index}>{functionality} | </span>
                ))}
            </AccessoriesFunct>
            <TitleInform>Rental Conditions:</TitleInform>
            {rentalCar.rentalConditions && (
              <StyledList>
                {rentalCar.rentalConditions
                  .split('\n')
                  .map((condition, index) => (
                    <li key={index} className={`class-${index}`}>
                      {index === 0 ? (
                        <span>
                          {condition.split(/(\d+)/).map((part, i) =>
                            isNaN(Number(part)) ? (
                              part
                            ) : (
                              <span
                                style={{ color: 'rgba(52, 112, 255, 1)' }}
                                key={i}
                              >
                                {part}
                              </span>
                            )
                          )}
                        </span>
                      ) : (
                        condition
                      )}
                    </li>
                  ))}
                <li>
                  Mileage:{' '}
                  <span style={{ color: 'rgba(52, 112, 255, 1)' }}>
                    {rentalCar.mileage}
                  </span>
                </li>
                <li>
                  Price:{' '}
                  <span style={{ color: 'rgba(52, 112, 255, 1)' }}>
                    {rentalCar.rentalPrice}
                  </span>
                </li>
              </StyledList>
            )}
            <BtnRentalCar htmlType="submit" type="primary">
              <LinkText href="tel:+380730000000">Rental Car</LinkText>
            </BtnRentalCar>
          </InformCar>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalWindow;
