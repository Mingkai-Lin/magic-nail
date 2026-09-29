import styled from "styled-components";

export const StyledUl = styled.ul`
  padding: 5rem 0 0 1rem;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    display: none;
  }

  & > li {
    padding: 0.5rem 1rem 0.5rem 0;

    .navLink {
      display: block;
      font-size: 1.6rem;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.secondary5};
      padding: 1.4rem 2rem;
      border-radius: ${({ theme }) => theme.radius.md};
      border-left: 3px solid transparent;
      transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;

      &:hover {
        color: ${({ theme }) => theme.colors.secondary1};
        background: rgba(203, 159, 85, 0.06);
      }
    }

    .active {
      background: rgba(203, 159, 85, 0.1);
      border-left: 3px solid ${({ theme }) => theme.colors.tertiary2};
      color: ${({ theme }) => theme.colors.tertiary2};
      font-weight: 500;

      @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
        background: transparent;
      }
    }

    .icon {
      display: none;

      @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
        margin: 0 auto;
        font-size: 2.5rem;
        margin-top: 1.5rem;
        display: inline-block;
      }
    }
  }
`;
