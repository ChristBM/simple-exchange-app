'use client';

import styled from 'styled-components';

export const CalculatorWrapper = styled.div<{$scheme: 'light' | 'dark'}>`
  display: flex;
  width: 330px;
  height: 650px;
  padding: 20px 15px;
  margin-block-end: 50px;
  border-radius: 8px;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  background-color: ${({ $scheme }) => ($scheme === 'light' ? '#FFF' : '#25262b')};
  backdrop-filter: blur(20px);
  box-shadow: 2px 0px 10px #17171730;

  @media screen and (min-width: 768px) {
    & {
      width: 550px;
      height: 320px;
    }
  }
`;

export const InputSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media screen and (min-width: 768px) {
    & {
      flex-direction: row;
    }
  }
`;

export const ButtonSectionWrapper = styled.section`
  display: flex;
  width: 100%;
  height: max-content;
  justify-content: center;
`;

export const ResultsSectionWrapper = styled.section`
  display: flex;
  width: 100%;
  height: max-content;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;
