import { Link } from "react-router-dom";
import styled from "styled-components";

interface HeadingStyleProps {
  PdBottom?: string;
  height?: string;
  mPdTop?: string;
  mPdRi?: string;
  mPdLe?: string;
}

export const HeadingStyle = styled.div<HeadingStyleProps>`
  display: flex;
  justify-content: space-between;
  padding-bottom: ${({ PdBottom }) => PdBottom || "1.5rem"};
  align-items: center;
  position: sticky;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.primary2};
  border-bottom: 1px solid rgba(247, 242, 234, 0.06);
  top: 0;
  height: ${({ height }) => height || "fit-content"};

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    padding-top: ${({ mPdTop }) => mPdTop || "3.5rem"};
    padding-bottom: 1rem;
    padding-right: ${({ mPdRi }) => mPdRi || "0"};
    padding-left: ${({ mPdLe }) => mPdLe || "0"};
  }

  h2 {
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0.02rem;

    @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      font-size: 2.4rem;
    }

    @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      font-size: 2.3rem;
    }

    @media (max-width: 420px) {
      font-size: 2rem;
    }

    @media (max-width: 300px) {
      font-size: 1.8rem;
    }
  }
`;

export const Back = styled(Link)`
  display: flex;
  font-size: 1.5rem;
  font-family: ${({ theme }) => theme.fonts.body};
  justify-content: flex-end;
  align-items: center;
  gap: 0.4rem;
  color: ${({ theme }) => theme.colors.tertiary2};
  padding: 0.6rem 1.2rem;
  border-radius: ${({ theme }) => theme.radius.md};
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: rgba(203, 159, 85, 0.1);
    color: ${({ theme }) => theme.colors.tertiary3};
  }
`;
