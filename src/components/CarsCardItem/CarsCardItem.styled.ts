import styled from 'styled-components';
import { ImageCarProps } from './CarsCardItem';

const Container = styled.div`
background-color: rgba(255, 255, 255, 0.8);
align-items: flex-start;
display: flex;
flex-direction: column;
gap: 28px;
height: 426px;
position: relative;
width: 274px;
border-radius: 14px;
&:last-child {
  margin-bottom: 120px;
}
`;

const Block = styled.div`
align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 14px;
    height: 354px;
    position: relative;
    width: 274px;
`;

const ImageCar = styled.div<ImageCarProps>`
background-image: ${({ $imgurl }) => `url(${$imgurl})`};
background-position: 50% 50%;
background-size: cover;
background-repeat: no-repeat;
border-radius: 14px;
height: 268px;
overflow: hidden;
position: relative;
width: 274px;
` ;

const LikeButton = styled.button`
padding: 0;
line-height: 0;
border: none;
background-color: transparent;
position: absolute;
top: 14px;
right: 14px;
transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover {
  transform: scale(1.2);
  stroke: #0b44cd;
}
`;

const Wrapper = styled.div`
align-items: flex-start;
display: flex;
flex: 0 0 auto;
flex-direction: column;
gap: 8px;
position: relative;
width: 274px;
`;

const WrapperName = styled.div`
display: flex;
  justify-content: space-between;
  min-width: 100% ;
  flex-wrap: wrap;
`;

const TitleName = styled.p`
color: transparent;
font-family: "Manrope-Medium", Helvetica;
font-size: 16px;
font-weight: 500;
letter-spacing: 0;
line-height: 24px;
margin-top: -1px;
position: relative;
white-space: nowrap;
width: fit-content;
`;

const Make = styled.span`
color: #121417;
`
const ModelAuto = styled.span`
color: #3470ff
`;
const Year = styled.span`
color: #121417;
`;

const Price = styled.p`
color: #121417;
font-family: "Manrope-Medium", Helvetica;
font-size: 16px;
font-weight: 500;
letter-spacing: 0;
line-height: 24px;

`;

const InfoBlock = styled.div`
align-items: flex-start;
display: flex;
flex-direction: column;
gap: 4px;
height: 40px;
position: relative;
width: 270px;
`;

const CarsInfo = styled.div`
 display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 10px;
  max-height: 39px;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 60%;

`;

const sharedStyles = styled.p`
color: #3470FF;
font-family: "Manrope-Regular", Helvetica;
font-size: 12px;
font-weight: 400;
letter-spacing: 0;
position: relative;
padding: 0px;
    &:not(:last-child) {
      margin-right: 12px;
    }
    &:not(:last-child)::after {
      content: '';
      position: absolute;
      display: block;
      width: 1px;
      background-color: rgba(18, 20, 23, 0.1);
      height: 16px;
      top: 2px;
      right: -6px;
    }
`;
const Adress = styled.p`
${sharedStyles}
`;
const RentalCompany = styled.p`
  ${sharedStyles}
`;
const Accessories = styled.p`
  ${sharedStyles}
`;
const Type = styled.p`
${sharedStyles}
`;
const Model = styled.p`
${sharedStyles}
`;
const Id = styled.p`
${sharedStyles}
`;
const Functionalities = styled.p`
${sharedStyles}
`;

const LearnButton = styled.button`
all: unset;
align-items: center;
background-color: #3470ff;
border-radius: 12px;
box-sizing: border-box;
display: flex;
height: 44px;
justify-content: center;
padding: 12px 99px;
position: relative;
width: 274px;
transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover,
&:focus {
  background: #0b44cd;
}
`;

const TextButton = styled.p`
color: #fff;
font-family: "Manrope-SemiBold", Helvetica;
font-size: 14px;
font-weight: 600;
letter-spacing: 0;
line-height: 20px;
padding-top: 12px;
position: relative;
white-space: nowrap;
width: fit-content;
`;


export {
  Container, Block, ImageCar, Wrapper,
  WrapperName, TitleName, Make,
  ModelAuto, Year, Price, InfoBlock,
  CarsInfo, Adress, RentalCompany, Accessories,
  Type, Model, Id, Functionalities, LearnButton, TextButton,
  LikeButton
};