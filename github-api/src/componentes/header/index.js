import React, { useState } from 'react'
import * as S from './styled'
import useGithub from '../hooks/github-hooks';


function Header() {

    const { getUser } = useGithub();
    const [usernameForSearch, setUsernameForSearch] = useState();

    const submitGetUser = () => {
        if(!usernameForSearch) return;
        return getUser(usernameForSearch);
    };

  return (
    <S.Wrapper>
        <input 
        type="text" placeholder="Search for users..." 
        onChange={(event) => setUsernameForSearch(event.target.value)}
        />

        <button type="submit" onClick={submitGetUser}>
            <span>Search</span>
        </button>
    </S.Wrapper>
  )
}

export default Header;