import styled from "styled-components";
import NailSalon from "../../images/nail-polish.jpg";

export const AboutUsContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 3.5rem;
  height: 90%;
  overflow: auto;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
    margin-top: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export const TextCol = styled.div`
  background-image: linear-gradient(
      105deg,
      rgba(17, 14, 16, 0.82),
      rgba(17, 14, 16, 0.88)
    ),
    url(${NailSalon});
  background-size: cover;
  background-position: center;
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid rgba(247, 242, 234, 0.08);
  padding: 3rem 2rem;
  color: ${({ theme }) => theme.colors.secondary1};
  text-align: center;

  div {
    h3 {
      font-family: ${({ theme }) => theme.fonts.heading};
      letter-spacing: 0.15rem;
      font-size: 2rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.tertiary2};
      margin-bottom: 0.5rem;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
      margin-top: 2rem;
    }
    li {
      background: rgba(247, 242, 234, 0.06);
      border: 1px solid rgba(247, 242, 234, 0.1);
      padding: 0.8rem 1.8rem;
      border-radius: 5rem;
      font-size: 1.5rem;
      transition: background 0.2s ease, border-color 0.2s ease;

      &:hover {
        background: rgba(203, 159, 85, 0.12);
        border-color: rgba(203, 159, 85, 0.4);
      }
    }
  }
`;
export const Contacts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 3rem 2rem;
  background: ${({ theme }) => theme.colors.primary7};
  border: 1px solid rgba(247, 242, 234, 0.08);
  border-radius: ${({ theme }) => theme.radius.lg};
  text-align: left;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.secondary3};

  div {
    flex: 1;
    min-width: 22rem;
  }

  h4 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 1.8rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.tertiary2};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
  }
`;
