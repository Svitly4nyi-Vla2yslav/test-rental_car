import { StyledButton } from './Button.styled';
import React, { MouseEvent, ReactNode } from 'react';

interface ButtonProps {
  padY?: number;
  padX?: number;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ padY, padX, onClick, children }) => {
  return (
    <StyledButton padY={padY} padX={padX} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
export type { ButtonProps };
