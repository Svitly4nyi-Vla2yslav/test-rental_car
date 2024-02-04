import styled from 'styled-components';
import { ButtonProps } from './Button';

export const StyledButton = styled.button<ButtonProps>`
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  border: none;

  padding: ${({ padY, padX }) => `${padY}px ${padX}px`};
  border-radius: 12px;
  background: #3470ff;

  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background: #0b44cd;
  }
`;