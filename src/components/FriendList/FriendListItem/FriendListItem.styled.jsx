import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin: 0 auto 8px;
  background-color: white;
  width: 200px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 2px;
`;

export const Status = styled.span`
  display: block;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px 0 5px;

  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const Name = styled.p`
  font-weight: 600;
`;

export const Avatar = styled.img`
  margin-right: 10px;
`;
