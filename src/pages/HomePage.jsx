import { useUser } from "../hooks/useUser";
import { Profile } from "../components/Profile";
import { SearchBar } from "../components/SearchBar";

import { Container, Title } from "../styled";

function HomePage() {
  const { user } = useUser();
  console.log(user)
  return (
    <Container>
      <Title>Encontre um usuário no GitHub</Title>
      <SearchBar />
      {user && <Profile />}
    </Container>
  )
}

export default HomePage;
