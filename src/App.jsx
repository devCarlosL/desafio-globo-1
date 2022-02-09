import { UserProvider } from "./hooks/useUser";

import { GlobalStyle } from "./styled";

import Routes from './routes';

function App() {
  return (
    <UserProvider>
      <GlobalStyle />
      <Routes />
    </UserProvider>
  )
}

export default App
