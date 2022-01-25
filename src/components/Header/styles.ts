import styled from 'styled-components';

export const Container = styled.div`
  background: #c72828;
  padding: 30px;

  header {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 0 160px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      max-width: 308px;
    }

    nav {
      div {
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
      }
    }
  }

  @media (max-width: 700px) {
    header {
      flex-direction: column;
      gap: 30px;
    }
  }
`;
