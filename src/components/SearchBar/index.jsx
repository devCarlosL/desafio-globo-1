import { useEffect, useRef } from "react";

import { getUser } from "../../service/api";
import { useUser } from "../../hooks/useUser";
import { useAsync } from "../../hooks/useAsync";
import { ErrorMessage, FormContainer, FormControl, SearchButton, SearchInput } from "../../styled";

export function SearchBar() {
  const searchInput = useRef('');
  const { setUser } = useUser();
  const { value, status, execute } = useAsync(() => getUser({ username: searchInput.current.value }), false);

  const handleSubmit = (e) => {
    e.preventDefault();
    execute();
  }

  useEffect(() => {
    if (value) {
      setUser(value);
    }
  }, [value])

  return (
      <FormContainer onSubmit={handleSubmit}>
        <FormControl>
          <SearchInput
            type="text"
            placeholder="Pesquisar usuário"
            ref={searchInput}
            $isError={status === 'error'}
          />
          <SearchButton type="submit" $isError={status === 'error'}>
            {status === 'pending' ? 'Carregando...' : 'Procurar'}
          </SearchButton>
        </FormControl>
        {status === 'error' && <ErrorMessage>usuário não encontrado</ErrorMessage>}
      </FormContainer>
  )
}
