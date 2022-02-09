import { useUser } from "../hooks/useUser";
import { Profile } from "../components/Profile";
import { SearchBar } from "../components/SearchBar";

import { Container } from "../styled";

function HomePage() {
  const { user } = useUser();
  console.log(user)
  return (
    <Container>
      <SearchBar />
      {user && <Profile />}
    </Container>
  )
}

export default HomePage;
