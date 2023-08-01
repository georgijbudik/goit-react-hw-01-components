import styled from '@emotion/styled';

export const StatsList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 20px;
  gap: 10px;
  border-top: 1px solid gray;
  background-color: #f4f4fd;
`;

export const Item = styled.li`
  text-align: center;
`;
export const Label = styled.span`
  display: flex;
  margin-bottom: 4px;
  color: #434455;
`;

export const Quantity = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #2e2f42;
`;
