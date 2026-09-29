import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.section`
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const BackgroundVideoContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  video {
    min-width: 100%;
    min-height: 100%;
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
  }
`;

export const TextContainer = styled.div`
  background: linear-gradient(
    180deg,
    rgba(17, 14, 16, 0.55) 0%,
    rgba(17, 14, 16, 0.72) 55%,
    rgba(17, 14, 16, 0.92) 100%
  );
  width: 100vw;
  height: 100%;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
`;

export const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.colors.secondary1};
  text-align: center;
  width: 60%;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 85%;
  }

  h3 {
    display: inline-block;
    margin-bottom: 2.5rem;
    padding: 0.6rem 2rem;
    border: 1px solid rgba(203, 159, 85, 0.4);
    border-radius: 5rem;
    font-family: ${({ theme }) => theme.fonts.heading};
    font-style: italic;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.tertiary2};
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    line-height: 1.4;

    @media (max-width: 600px) {
      font-size: 1.4rem;
      margin-bottom: 2rem;
    }
  }

  h6 {
    margin: 2.5rem 0;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.secondary2};
    font-size: 1.7rem;
    letter-spacing: 0.05rem;

    @media (max-width: 600px) {
      font-size: 1.4rem;
      margin: 2rem 0;
    }
    @media (max-width: 400px) {
      font-size: 1.3rem;
    }
  }
`;
export const Header = styled.div`
  margin: 0 auto;

  h1 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 5rem;
    font-weight: 600;
    letter-spacing: 0.02rem;
    padding: 1rem 0;
    line-height: 1.3;

    @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      font-size: 4rem;
    }

    @media (max-width: 600px) {
      font-size: 3rem;
    }
    @media (max-width: 400px) {
      font-size: 2.4rem;
    }
  }

  .subHeader {
    @media (max-width: 600px) {
      display: block;
    }
  }

  .yellow {
    color: ${({ theme }) => theme.colors.tertiary2};
  }
`;

export const CtaGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const GhostButton = styled(Link)`
  display: inline-block;
  padding: 1.3rem 3rem;
  border: 1px solid rgba(247, 242, 234, 0.3);
  border-radius: ${({ theme }) => theme.radius.md};
  color: ${({ theme }) => theme.colors.secondary1};
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: 0.05rem;
  transition: background 0.2s ease, border-color 0.2s ease;

  &:hover {
    background: rgba(247, 242, 234, 0.08);
    border-color: rgba(247, 242, 234, 0.6);
  }

  @media (max-width: 600px) {
    width: 50%;
  }
`;
