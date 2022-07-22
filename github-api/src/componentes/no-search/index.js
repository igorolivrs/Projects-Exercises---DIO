import React from "react";
import * as S from "./styled";

const NoSearch = () => {
  return (
    <S.Wrapper>
      <S.Wrapper2>
        <h1>No user searched.</h1>
      </S.Wrapper2>

      <S.Wrapper2>
      <p>Desenvolvido por: </p>
      <a href="https://github.com/igorolivrs" target="_blank">
      José Igor Souza © 2022</a>
      </S.Wrapper2>
    </S.Wrapper>

  );
};

export default NoSearch;