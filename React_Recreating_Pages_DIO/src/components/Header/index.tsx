import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo-dio.png";

import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper,
} from "./styles";

import { Button } from "../Button";
import { IHeader } from "./types";

const Header = ({ autenticado }: IHeader) => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate("/login");
  };

  const handleClickHome = () => {
    navigate("/");
  };

  const handleClickCadastro = () => {
    navigate("/cadastro");
  };

  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da Dio" onClick={handleClickHome}/>
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <>
              <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4" />
            </>
          ) : (
            <>
              <MenuRight href="/">Home</MenuRight>
              <Button
                title="Entrar"
                onClick={handleClickSignIn}
              ></Button>
              <Button title="Cadastrar" onClick={handleClickCadastro}></Button>
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
