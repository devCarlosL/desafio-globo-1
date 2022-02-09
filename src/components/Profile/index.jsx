import { useUser } from "../../hooks/useUser";
import { Avatar, ProfileContainer } from "../../styled";

export function Profile() {
  const { user } = useUser();

  return (
    <ProfileContainer>
      <Avatar src={user?.avatar_url} alt="Imagem de perfil" />
      <a href={user?.html_url} target="_blank">
        {user?.login}
      </a>
    </ProfileContainer>
  )
};
