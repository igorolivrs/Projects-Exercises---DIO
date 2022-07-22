import React, { createContext, useCallback, useState } from 'react';
import api from '../../services/api';

export const GithubContext = createContext({
    loading: false,
    user: {},
    repositories: [],
    starred: [],
});

function GithubProvider({ children }) {
    const [githubState, setGithubState] = useState({
        hasUser: false,
        loading: false,

        user:{
            id: undefined,
            login: undefined,
            name: undefined,
            avatar_url: undefined,
            html_url: undefined,
            location: undefined,
            followers: 0,
            following: 0,
            public_gists: 0,
            public_repos: 0,

        },
        repositories: [],
        starred: [],
    });

    const getUser = (username) => {
        setGithubState((prevState) => ({
            ...prevState,
            loading: !prevState.loading,
        }));

        api.get(`https://api.github.com/users/${username}`).then(({ data }) => {
           setGithubState((prevState) => ({
            ...prevState,
            hasUser:true,
            user:{
                id: data.id,
                login: data.login,
                name: data.name,
                avatar_url: data.avatar_url,
                html_url: data.html_url,
                location: data.location,
                followers: data.followers,
                following: data.following,
                public_gists: data.public_gists,
                public_repos: data.public_repos,
            },
        })) ;
        }).finally(() => {
            setGithubState((prevState) => ({
                ...prevState,
                loading: !prevState.loading,
            }));
        });
    };

    // Buscar Repositórios

    const getUserRepos = (username) => {
        api.get(`https://api.github.com/users/${username}/repos`).then( ( { data } ) => 
        {
            console.log("data: " + JSON.stringify(data));
            setGithubState((prevState) => ({
            ...prevState,
            repositories: data,
        }));
        });
    };

    // Buscar Starred

    const getUserStarred = (username) => {
        api.get(`https://api.github.com/users/${username}/starred`).then( ( { data } ) => 
        {
            console.log("data: " + JSON.stringify(data));
            setGithubState((prevState) => ({
            ...prevState,
            starred: data,
        }));
        });
    };

    const contextValue = {
        githubState,
        getUser: useCallback((username) => getUser(username), []),
        getUserRepos: useCallback((username) => getUserRepos(username), []),
        getUserStarred: useCallback((username) => getUserStarred(username), []),
    };

  return (
    <GithubContext.Provider value={contextValue}>
        {children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;