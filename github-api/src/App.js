import { ResetCSS } from "./componentes/global/resetCSS";
import useGithub from "./componentes/hooks/github-hooks";
import Layout from "./componentes/layout";
import NoSearch from "./componentes/no-search";
import Profile from "./componentes/profile";
import GithubProvider from "./componentes/providers/github-provider";
import Repositories from "./componentes/repositories";


function App() {
  const { githubState } = useGithub();
  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <p>Loading</p>
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </>
      ) : (
        <NoSearch/>
      )}
    </Layout>
  );
};

export default App;
