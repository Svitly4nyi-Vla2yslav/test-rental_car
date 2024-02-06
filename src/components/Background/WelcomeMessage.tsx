import React from "react";
import { WelcomeContainer, WelcomeText } from "./WelcomMessage.styled";

const WelcomeMessage: React.FC = () => {
    return (
      <WelcomeContainer>
        <WelcomeText>Welcome to our car rental website!</WelcomeText>
        <p>We provide a wide range of high-quality cars at affordable prices.</p>
        <p>Whether you're dreaming of an exciting journey or just need a reliable car for your daily commutes, we've got you covered.</p>
        <p>Join our satisfied customers' community and choose the car of your dreams!</p>
      </WelcomeContainer>
    );
  };
  
  export default WelcomeMessage;