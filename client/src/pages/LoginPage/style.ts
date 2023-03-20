import styled from 'styled-components';

export const LoginPageWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginWindow = styled.div`
  background-color: ${({ theme }) => theme.componentBg};
  padding: 10px 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
`;
