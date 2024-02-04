import styled from 'styled-components';
import { ImageCarProps } from './CarsCardItem';

const Container = styled.div`
align-items: flex-start;
display: flex;
flex-direction: column;
gap: 28px;
height: 426px;
position: relative;
width: 274px;
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
  background-image: ${({ imgurl }) => `url(${imgurl})`};
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
align-items: flex-start;
display: inline-flex;
flex: 0 0 auto;
gap: 87px;
position: relative;
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
margin-top: -1px;
position: relative;
white-space: nowrap;
width: fit-content;
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
align-items: center;
display: inline-flex;
flex: 0 0 auto;
gap: 6px;
justify-content: center;
position: relative;
`;

const sharedStyles = styled.p`
color: #12141780;
font-family: "Manrope-Regular", Helvetica;
font-size: 12px;
font-weight: 400;
letter-spacing: 0;
line-height: 18px;
margin-top: -1px;
position: relative;
white-space: nowrap;
width: fit-content;
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