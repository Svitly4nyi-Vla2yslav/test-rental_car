// import React from 'react';


// import {
//   StyledAdvertDetailsContainer,
//   StyledAdvertDetailsImage,
//   StyledAdvertDetailsBody,
//   StyledAdvertDetailsTitle,
//   StyledAdvertDetailsModel,
//   StyledAdvertDetailsFeatureHeading,
//   StyledAdvertDetailsFeaturesList,
//   StyledAdvertDetailsFeature,
//   StyledAdvertDetailsDescription,
//   StyledAdvertDetailsFuncList,
//   StyledAdvertDetailsFunc,
//   StyledAdvertDetailsRentalList,
//   StyledAdvertDetailsRentalItem,
//   StyledAdvertDetailsRentalItemValue,
//   StyledAdvertDetailsTelephon,
// } from './ModalInfoCard.styled';
// import errorCaar from '../../assets/caaar.jpg';
// import ModalWindow from '../ModalWindow/ModalWindow';
// import Button from '../Button/Button';

// interface AdvertInfoModalCardProps {
//   rentalCar: {
//     address: string;
//     description: string;
//     engineSize: string;
//     fuelConsumption: string;
//     id: number;
//     img: string;
//     functionalities: string[];
//     accessories: string[];
//     make: string;
//     mileage: number;
//     model: string;
//     rentalConditions: string;
//     rentalPrice: string;
//     type: string;
//     year: number;
//   };
//   onClose: () => void;
// }

// interface ImageCarProps {
//   imgurl: string;
// }

// function extractLocation(address) {
//   const addressComponents = address
//     .split(',')
//     .map(component => component.trim());

//   const country = addressComponents.pop();
//   const city = addressComponents.pop();

//   return { country, city };
// }

// function parseConditions(value: string) {
//   const array = value.split('\n');
//   let minimumAge: number | null = null;
//   let validLicense: string | null = null;
//   let insurance: string | null = null;

//   for (const el of array) {
//     if (el.includes('Minimum age:')) {
//       const ageMatch = el.match(/\d+/);
//       minimumAge = ageMatch ? parseInt(ageMatch[0]) : null;
//     } else {
//       if (!validLicense) {
//         validLicense = el.trim();
//       } else {
//         insurance = el.trim();
//       }
//     }
//   }
//   return {
//     minimumAge,
//     validLicense,
//     insurance,
//   };
// }

// function formatMileage(mileage) {
//   const result = mileage.toLocaleString('en');
//   return result;
// }
// formatMileage(40000);

// const ModalInfoCard: React.FC<AdvertInfoModalCardProps> = ({
//   rentalCar,
//   onClose,
// }) => {
//   const { city, country } = extractLocation(rentalCar.address);
//   const { minimumAge, validLicense, insurance } = parseConditions(
//     rentalCar.rentalConditions
//   );
//   const mileage = formatMileage(rentalCar.mileage);

//   return (
//     <ModalWindow onClose={onClose}>
//       <StyledAdvertDetailsContainer>
//         <StyledAdvertDetailsImage
//           imgurl={rentalCar.img || errorCaar}
//         ></StyledAdvertDetailsImage>

//         <StyledAdvertDetailsBody>
//           <div>
//             <StyledAdvertDetailsTitle>
//               {rentalCar.make}{' '}
//               <StyledAdvertDetailsModel>
//                 {rentalCar.model}
//               </StyledAdvertDetailsModel>
//               , {rentalCar.year}
//             </StyledAdvertDetailsTitle>

//             <StyledAdvertDetailsFeaturesList>
//               <StyledAdvertDetailsFeature>{city}</StyledAdvertDetailsFeature>
//               <StyledAdvertDetailsFeature>{country}</StyledAdvertDetailsFeature>
//               <StyledAdvertDetailsFeature>
//                 Id: {rentalCar.id}
//               </StyledAdvertDetailsFeature>
//               <StyledAdvertDetailsFeature>
//                 Year: {rentalCar.year}
//               </StyledAdvertDetailsFeature>
//               <StyledAdvertDetailsFeature>
//                 Type: {rentalCar.type}
//               </StyledAdvertDetailsFeature>
//             </StyledAdvertDetailsFeaturesList>

//             <StyledAdvertDetailsFeaturesList>
//               <StyledAdvertDetailsFeature>
//                 Fuel Consumption: {rentalCar.fuelConsumption}
//               </StyledAdvertDetailsFeature>
//               <StyledAdvertDetailsFeature>
//                 Engine Size: {rentalCar.engineSize}
//               </StyledAdvertDetailsFeature>
//             </StyledAdvertDetailsFeaturesList>

//             <StyledAdvertDetailsDescription>
//               {rentalCar.description}
//             </StyledAdvertDetailsDescription>
//           </div>

//           <div>
//             <StyledAdvertDetailsFeatureHeading>
//               Accessories and functionalities:
//             </StyledAdvertDetailsFeatureHeading>
//             <StyledAdvertDetailsFuncList>
//               {rentalCar.accessories.map(accessorie => (
//                 <StyledAdvertDetailsFunc key={accessorie}>
//                   {accessorie}
//                 </StyledAdvertDetailsFunc>
//               ))}
//               {rentalCar.functionalities.map(functionalitie => (
//                 <StyledAdvertDetailsFunc key={functionalitie}>
//                   {functionalitie}
//                 </StyledAdvertDetailsFunc>
//               ))}
//             </StyledAdvertDetailsFuncList>
//           </div>

//           <div>
//             <StyledAdvertDetailsFeatureHeading>
//               Rental conditions:
//             </StyledAdvertDetailsFeatureHeading>
//             <StyledAdvertDetailsRentalList>
//               <StyledAdvertDetailsRentalItem>
//                 Minimum age:{' '}
//                 <StyledAdvertDetailsRentalItemValue>
//                   {minimumAge}
//                 </StyledAdvertDetailsRentalItemValue>
//               </StyledAdvertDetailsRentalItem>

//               <StyledAdvertDetailsRentalItem>
//                 {validLicense}
//               </StyledAdvertDetailsRentalItem>
//               <StyledAdvertDetailsRentalItem>
//                 {insurance}
//               </StyledAdvertDetailsRentalItem>

//               <StyledAdvertDetailsRentalItem>
//                 Mileage:{' '}
//                 <StyledAdvertDetailsRentalItemValue>
//                   {mileage}
//                 </StyledAdvertDetailsRentalItemValue>
//               </StyledAdvertDetailsRentalItem>

//               <StyledAdvertDetailsRentalItem>
//                 Price:{' '}
//                 <StyledAdvertDetailsRentalItemValue>
//                   {rentalCar.rentalPrice}
//                 </StyledAdvertDetailsRentalItemValue>
//               </StyledAdvertDetailsRentalItem>
//             </StyledAdvertDetailsRentalList>
//           </div>

//           <Button padY={12} padX={50}>
//             <StyledAdvertDetailsTelephon href="tel:+380730000000">
//               Rent This Car
//             </StyledAdvertDetailsTelephon>
//           </Button>
//         </StyledAdvertDetailsBody>
//       </StyledAdvertDetailsContainer>
//     </ModalWindow>
//   );
// };
// export type { ImageCarProps };
// export default ModalInfoCard;
