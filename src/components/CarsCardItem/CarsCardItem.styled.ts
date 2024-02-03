import styled from 'styled-components';
import { ImageCarProps } from './CarsCardItem';

const Container = styled.div`
align-items: flex-start;
display: flex;
flex-direction: column;
border: 1px solid #661414;
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
background: linear-gradient(180deg, rgba(18, 20, 23, 0.5) 0%, rgba(18, 20, 23, 0) 100%);
background-position: 50% 50%;
background-size: cover;
background-repeat: no-repeat;
border-radius: 14px;
height: 268px;
overflow: hidden;
position: relative;
width: 274px;
`
  ;

const Heart = styled.svg`
height: 18px;
left: 242px;
position: absolute;
top: 14px;
width: 18px;
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
`;

const TextButton = styled.p`
color: #fff;
font-family: "Manrope-SemiBold", Helvetica;
font-size: 14px;
font-weight: 600;
letter-spacing: 0;
line-height: 20px;
margin-top: -1px;
position: relative;
white-space: nowrap;
width: fit-content;
`;


export {
  Container, Block, ImageCar, Heart, Wrapper,
  WrapperName, TitleName, Make,
  ModelAuto, Year, Price, InfoBlock,
  CarsInfo, Adress, RentalCompany, Accessories,
  Type, Model, Id, Functionalities, LearnButton, TextButton
};