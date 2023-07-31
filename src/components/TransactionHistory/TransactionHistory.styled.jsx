import styled from '@emotion/styled';

export const Table = styled.table`
  width: 700px;
  border-collapse: collapse;
  margin: 0 auto;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

  th {
    border: 1px solid #ccc;
    padding: 12px;
    text-align: center;
    background-color: #00bfff;
    color: white;
  }
  td {
    border: 1px solid #ccc;
    padding: 12px;
    text-align: center;
  }
  tbody tr:nth-of-type(odd) {
    background-color: #f8f8f8;
  }
  tbody tr:nth-of-type(even) {
    background-color: #b0e0e6;
  }
`;
