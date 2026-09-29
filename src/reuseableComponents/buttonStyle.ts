import styled from "styled-components";
import { Link } from "react-router-dom";

interface ButtonContainerProps {
  padding?: string;
  // kept for backwards compatibility with call sites that pass this instead of `padding`
  paddingm?: string;
}

export const ButtonContainer = styled.div<ButtonContainerProps>`
  padding: ${({ padding }) => padding || "2rem 0 2rem 0"};
  position: sticky;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.primary2};
  margin-top: 2rem;
  z-index: 4000;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    margin: 0 auto;
    padding: ${({ padding }) => padding || "3rem 0 2rem 0"};
  }
`;

interface ButtonProps {
  color?: string;
  padding?: string;
  fs?: string;
  mfs?: string;
  width?: string;
}

export const Button = styled(Link)<ButtonProps>`
  color: ${({ color, theme }) => color || theme.colors.primary1};
  background: ${({ theme }) => theme.gradients.gold};
  border: none;
  padding: ${({ padding }) => padding || "1rem 0"};
  display: inline-block;
  border-radius: ${({ theme }) => theme.radius.md};
  font-weight: 600;
  letter-spacing: 0.05rem;
  font-size: ${({ fs }) => fs || "1.6rem"};
  text-align: center;
  width: ${({ width }) => width || "100%"};
  z-index: 4000;
  cursor: pointer;
  position: sticky;
  bottom: 0;
  right: 0;
  left: 0;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  box-shadow: ${({ theme }) => theme.shadow.gold};

  &:hover {
    background: ${({ theme }) => theme.gradients.goldHover};
    transform: translateY(-0.2rem);
    box-shadow: 0 1rem 2.2rem rgba(203, 159, 85, 0.45);
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    margin: 0 auto;
    font-size: ${({ mfs }) => mfs || "1.5rem"};
    width: 90%;
    position: fixed;
    bottom: 0.5rem;
    right: 0;
    left: 0;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 350px) {
    font-size: 1.2rem;
  }
`;

export const ButtonS = styled(Link)<ButtonProps>`
  color: ${({ color, theme }) => color || theme.colors.primary1};
  background: ${({ theme }) => theme.gradients.gold};
  width: 100%;
  border: none;
  padding: ${({ padding }) => padding || "1rem 0"};
  display: inline-block;
  border-radius: ${({ theme }) => theme.radius.md};
  font-weight: 600;
  letter-spacing: 0.05rem;
  font-size: ${({ fs }) => fs || "1.6rem"};
  text-align: center;
  width: ${({ width }) => width || "100%"};
  margin: 1rem 0 2rem 0;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  box-shadow: ${({ theme }) => theme.shadow.gold};

  &:hover {
    background: ${({ theme }) => theme.gradients.goldHover};
    transform: translateY(-0.2rem);
    box-shadow: 0 1rem 2.2rem rgba(203, 159, 85, 0.45);
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    font-size: ${({ mfs }) => mfs || "1.5rem"};
    width: 90%;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 350px) {
    font-size: 1.2rem;
  }
`;
