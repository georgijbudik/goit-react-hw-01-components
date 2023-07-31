import styled from '@emotion/styled';
import { getRandomColor } from 'utils/getRandomColor';

export const Section = styled.section`
  display: flex;
  align-items: center;
  text-align: space-between;
  flex-direction: column;
  background-color: white;
  width: 260px;
  margin: 0 auto 50px;
  padding: 20px 20px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 20px 0;
`;

export const StatList = styled.ul`
  display: flex;
  text-align: center;
`;
export const Item = styled.li`
  display: block;
  padding: 10px;
  color: white;
  width: 40px;
  background-color: ${getRandomColor};
`;
export const Label = styled.span`
  display: flex;
  justify-content: center;
  font-size: 12px;
  margin-bottom: 6px;
`;
export const Percentage = styled.span`
  font-size: 20px;
`;
