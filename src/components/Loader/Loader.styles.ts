import styled from 'styled-components';

export const Wrapper = styled.div<{ padding?: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ padding }) => padding || '0'};
`;
