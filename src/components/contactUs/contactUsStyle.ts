import styled from "styled-components";

export const ContactUsContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  margin-top: 3.5rem;
  overflow: auto;
  height: 92%;

  &::-webkit-scrollbar {
    width: 0;
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 90%;
    margin-top: 0;
    height: 100%;
  }
`;

export const FormField = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 20%;
  position: relative;
  font-size: 1.5rem;
`;

export const InputField = styled.div`
  width: 100%;
  height: 9rem;

  label {
    display: flex;
    flex-direction: column;
    width: 100%;
    font-style: normal;
    font-weight: 400;
    line-height: 1.8rem;
    margin-bottom: 0.8rem;
    color: ${({ theme }) => theme.colors.secondary2};
  }
  input {
    width: 100%;
    padding: 1.3rem 1.6rem;
    background-color: ${({ theme }) => theme.colors.primary7};
    border: 1px solid rgba(247, 242, 234, 0.08);
    border-radius: ${({ theme }) => theme.radius.md};
    color: ${({ theme }) => theme.colors.secondary3};
    font-size: 1.5rem;
    transition: border-color 0.2s ease, background-color 0.2s ease;

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      box-shadow: 0 0 0 3rem ${({ theme }) => theme.colors.primary7} inset !important;
      -webkit-box-shadow: 0 0 0 3rem ${({ theme }) => theme.colors.primary7} inset !important;
      -webkit-text-fill-color: ${({ theme }) => theme.colors.secondary3} !important;
    }

    &:focus {
      border-color: ${({ theme }) => theme.colors.tertiary2};
      outline: none;
      color: ${({ theme }) => theme.colors.secondary1};
      background-color: ${({ theme }) => theme.colors.primary7};
    }
  }
`;

export const ErrorMsg = styled.div`
  p {
    color: ${({ theme }) => theme.colors.tertiary5};
    font-size: 1.2rem;
    margin-top: 0.3rem;
  }
`;

export const Message = styled.div`
  height: 9rem;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    height: 17rem;
  }

  label {
    display: flex;
    flex-direction: column;
    width: 100%;
    font-style: normal;
    font-weight: 400;
    line-height: 1.8rem;
    margin-bottom: 0.8rem;
  }

  textarea {
    width: 100%;
    padding: 1.3rem 1.6rem;
    background-color: ${({ theme }) => theme.colors.primary7};
    border: 1px solid rgba(247, 242, 234, 0.08);
    border-radius: ${({ theme }) => theme.radius.md};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.1rem;
    letter-spacing: 0em;
    text-align: left;
    color: ${({ theme }) => theme.colors.secondary3};
    transition: border-color 0.2s ease;

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      box-shadow: 0 0 0 3rem ${({ theme }) => theme.colors.primary7} inset !important;
      -webkit-box-shadow: 0 0 0 3rem ${({ theme }) => theme.colors.primary7} inset !important;
      -webkit-text-fill-color: ${({ theme }) => theme.colors.secondary3} !important;
    }

    &:focus {
      border-color: ${({ theme }) => theme.colors.tertiary2};
      outline: none;
      color: ${({ theme }) => theme.colors.secondary1};
      background-color: ${({ theme }) => theme.colors.primary7};
    }
  }
`;

export const SubmitBtn = styled.button`
  color: ${({ theme }) => theme.colors.primary1};
  background: ${({ theme }) => theme.gradients.gold};
  padding: 1.2rem 0;
  border-radius: ${({ theme }) => theme.radius.md};
  font-weight: 600;
  letter-spacing: 0.05rem;
  font-size: 1.6rem;
  text-align: center;
  cursor: pointer;
  border: none;
  width: 100%;
  z-index: 1500;
  position: sticky;
  bottom: 0;
  right: 0;
  left: 0;
  box-shadow: ${({ theme }) => theme.shadow.gold};
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.gradients.goldHover};
    transform: translateY(-0.2rem);
    box-shadow: 0 1rem 2.2rem rgba(203, 159, 85, 0.45);
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    margin: 0 auto;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 350px) {
    font-size: 1.2rem;
  }
`;

export const AlertWrapper = styled.div`
  em {
    font-size: 1.6rem;
    color: #999;
    font-weight: 700;
  }

  strong {
    font-size: 1.5rem;
    color: #999;
    font-weight: 400;
  }
`;
