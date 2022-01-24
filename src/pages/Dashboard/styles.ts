import styled from 'styled-components';

export const FoodsContainer = styled.div`
  /* width: 100%; */
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 0;
  margin-top: -140px;

  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(0, 400px));
  grid-gap: 32px;
  place-content: center;
`;
