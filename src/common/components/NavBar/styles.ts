import styled from 'styled-components';

export const NavBarWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 64px;
  padding-inline-end: 10px;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
`;

export const IconSunWrapper = styled.div<{$show: boolean}>`
  display: ${(props) => (props.$show ? 'none' : 'block')};
`;

export const IconMoonWrapper = styled.div<{$show: boolean}>`
  display: ${(props) => (props.$show ? 'none' : 'block')};
`;
