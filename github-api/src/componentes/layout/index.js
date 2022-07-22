import React from "react";
import Header from "../header";
import * as S from "./styled"
import useGithub from "../hooks/github-hooks";


function Layout({ children }) {

    const { githubState } = useGithub();

    return (
        <S.WrapperLayout>
            <Header />
            {children}
        </S.WrapperLayout>
    );
}

export default Layout;