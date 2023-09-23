// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100px;
  min-height: 100px;
  max-height: 150px;
  padding: 10px;
  border: 1px solid #333;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media screen and (min-width: 768px) {
    width: 150px;
    min-height: 150px;
    max-height: 200px;
    padding: 20px;
  }
`;

export const Title = styled.h1<{ $isPrimary?: boolean }>`
  color: ${(props) => (props.$isPrimary ? '#3E85EF' : '#333')};
  text-align: center;
  font-family: "Inter";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;

export const Text = styled.p`
  color: #333;
  font-size: 16px;
  text-transform: capitalize;
`;

export const Button = styled.button<{ $isPrimary: boolean }>`
  width: 70px;
  height: 30px;
  border: none;
  outline: none;
  border-radius: 5px;
  background: ${(props) => (props.$isPrimary ? '#3E85EF' : '#333')};
  text-transform: capitalize;

  &:hover {
    background: #3E8F;
    cursor: pointer;
  }
`;
