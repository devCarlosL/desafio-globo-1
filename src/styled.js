import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormControl = styled.div`
  display: flex;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border: 1px solid #ccc;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  font-size: 14px;
`;

export const SearchButton = styled.button`
cursor: pointer;
  width: 120px;
  height: 40px;
  border: 1px solid #ccc;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 10px;
  background-color: #00bcd4;
  border-color: #00bcd4;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #00acc1;
  }
`;

export const ErrorMessage = styled.small`
  color: #f5222d;
  font-size: 12px;
  margin-top: 5px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;

  a {
    padding: 8px;
  }
`;

export const Avatar = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
`;