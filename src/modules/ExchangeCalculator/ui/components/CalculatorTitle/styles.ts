'use client';

/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const CalculatorTitleWrapper = styled.div`
  display: flex;
  width: 100%;
  height: max-content;
  justify-content: center;
  align-items: center;

  & > h1 {
    font-size: 30px;
    text-align: center;
    }

  @media screen and (min-width: 768px) {
    & {
      height: 60px;
    }

    & > h1 {
      font-size: 45px;
    }
  }
`;
