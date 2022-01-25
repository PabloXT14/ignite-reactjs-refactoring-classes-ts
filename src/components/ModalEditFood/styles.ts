import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Form = styled(Unform)`
  padding: 48px 40px;
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
    margin-bottom: 40px;
  }

  button {
    margin-top: 48px;
    align-self: flex-end;
  }

  button {
    font-weight: 600;
    border-radius: 8px;
    border: 0;
    background: #FF9E0A;
    color: #fff;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

    display: flex;
    flex-direction: row;
    align-items: center;

    transition: all .3s ease;

    &:hover {
      transform: translateY(-7px);
    }

    .text {
      padding: 16px 24px;
    }

    .icon {
      display: flex;
      padding: 16px 16px;
      background: #FFB84C;
      border-radius: 0 8px 8px 0;
      margin: 0 auto;
    }
  }

  @media (max-width: 700px) {
    padding: 28px 20px;

    h1 {
      margin-bottom: 25px;
    }

    button {
      align-self: center;
    }
  }

  @media (max-width: 400px) {
    padding: 28px 15px;
  }
`;
