import styled from "styled-components";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

interface AlertStyleProps {
  variant?: "success" | "error";
}

export const AlertStyle = styled.div<AlertStyleProps>`
  position: fixed;
  width: 32rem;
  top: 7rem;
  right: 2rem;
  z-index: 100000;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  background: ${({ theme }) => theme.colors.primary2};
  border: 1px solid
    ${({ variant, theme }) =>
      variant === "error" ? `${theme.colors.tertiary5}59` : "rgba(85, 197, 122, 0.35)"};
  color: ${({ theme }) => theme.colors.secondary1};
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: ${({ theme }) => theme.shadow.soft};
  animation: slideIn 2s ease-in;

  @media (max-width: 500px) {
    width: 30rem;
  }

  @media (max-width: 340px) {
    width: 95%;
    right: 0.5rem;
  }

  @keyframes slideIn {
    0% {
      transform: translateX(500px);
      opacity: 0;
    }

    65% {
      transform: translateX(1px);
      opacity: 1;
    }
    70% {
      transform: translateX(-1px);
    }
    75% {
      transform: translateX(1px);
    }
    90% {
      transform: translateX(0);
    }
    100% {
      transform: translate(0);
    }
  }

  p {
    display: flex;
    align-items: center;
    font-size: clamp(1.4rem, 3vw, 1.5rem);
    padding: 2rem 0.5rem;
    gap: 1.3rem;

    @media (max-width: 500px) {
      padding: 1.5rem 0.5rem;
    }

    @media (max-width: 340px) {
      padding: 1rem 0.5rem;
    }
  }
`;

interface TickProps {
  display?: string;
}

export const Tick = styled(FaCheckCircle)<TickProps>`
  display: ${({ display }) => display || "block"};
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.tertiary4};
  font-size: 2.5rem;
`;

export const ErrorIcon = styled(FaExclamationCircle)<TickProps>`
  display: ${({ display }) => display || "block"};
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.tertiary5};
  font-size: 2.5rem;
`;
