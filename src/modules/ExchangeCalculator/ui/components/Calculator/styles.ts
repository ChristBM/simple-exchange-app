'use client';

import styled from 'styled-components';

export const CalculatorWrapper = styled.div<{$scheme: 'light' | 'dark'}>`
  display: flex;
  width: 390px;
  height: max-content;
  padding: 40px 40px 60px 40px;
  margin-block-end: 50px;
  border-radius: 8px;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  background-color: ${({ $scheme }) => ($scheme === 'light' ? '#FFF' : '#25262b')};
  backdrop-filter: blur(20px);
  box-shadow: 2px 0px 10px #17171730;
`;

export const InputSectionWrapper = styled.section`
  display: flex;
  width: 300px;
  flex-direction: column;
  gap: 15px;
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
