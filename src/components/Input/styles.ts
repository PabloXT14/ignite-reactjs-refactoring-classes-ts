import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;

  background: #fff;
  border-radius: 8px;
  padding: 18px 24px;
  width: 100%;
  font-size: 16px;

  transition: all .3s ease;

  & + div {
    margin-top: 24px;
  }

  h1 {
    margin-bottom: 40px;
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
  }

  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border: 1px solid #ff9000;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: ${props => props.isFilled ? '#FF9000' : '#b7b7cc'};

    &::placeholder {
      color: #b7b7cc;
    }
  }

  svg {
    margin-right: 16px;
  }

  @media (max-width: 700px) {
    padding: 14px 20px;
  }
`;
