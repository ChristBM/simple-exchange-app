'use client';

import styled from 'styled-components';

export const ResultWrapper = styled.div`
  display: flex;
  width: 100%;
  height: max-content;
  flex-direction: column;
  gap: 30px;
`;

export const ResultSectionWrapper = styled.section`
  display: flex;
  flex-flow: column wrap;
  border-bottom: 1px solid #373a40;
  align-items: baseline;
  gap: 10px;
`;

export const ResultLabelText = styled.p`
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 700;
`;

export const ConversionResultWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: baseline;
  font-size: 18px;
  gap: 5px;
`;

export const ConversionReadOnly = styled.input`
  appearance: none;
  width: 190px;
  background: none;
  border: none;
  outline: none;

  &::selection {
    background-color: none;
    color: cyan;
  }
`;

export const ExchangeResultWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: baseline;
  font-size: 18px;
  gap: 5px;
`;

export const CurrencyText = styled.p`
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 300;
`;
