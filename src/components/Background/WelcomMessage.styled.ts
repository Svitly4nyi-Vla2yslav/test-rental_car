import styled from 'styled-components';


const WelcomeContainer = styled.div`
  // background-image: url('/src/assets/rent-a-car-vacation-hero-1.gif'); 
  // background-size: cover;
  // background-position: fixed;
  
  color: #fff; // Колір тексту
  font-family: 'Protest Riot', sans-serif;
  text-align: center;
  margin-top: 50px;
  padding: 50px;
`;

const WelcomeText = styled.h1`
  font-size: 36px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export {WelcomeContainer, WelcomeText}