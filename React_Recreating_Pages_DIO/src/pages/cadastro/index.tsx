import React from "react";
import { MdEmail, MdLock, MdOutlinePerson } from "react-icons/md";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { useForm } from "react-hook-form";

import {
  Container,
  Title,
  Column,
  TitleLogin,
  SubtitleLogin,
  CriarText,
  Row,
  Wrapper,
} from "./styles";

const Cadastro = () => {
  const {
    control,
  } = useForm();

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubtitleLogin>Crie sua conta e make the change.</SubtitleLogin>
            <form>
              <Input
                placeholder="Nome completo"
                leftIcon={<MdOutlinePerson />}
                name="nome"
                control={control}
              />
              <Input
                placeholder="E-mail"
                leftIcon={<MdEmail />}
                name="email"
                control={control}
              />
              <Input
                type="password"
                placeholder="Senha"
                leftIcon={<MdLock />}
                name="senha"
                control={control}
              />

              <Button title="Entrar" variant="secondary" type="submit"/>
            </form>
            <Column>
              <br />
              <SubtitleLogin>
                Ao clicar em "criar minha conta grátis", declaro que aceito as
                Políticas de Privacidade e os Termos de Uso da DIO.
              </SubtitleLogin>

              <Row>
                Já tenho conta. 
                <Link to={"/login"}><CriarText>Fazer login</CriarText></Link>
              </Row>
            </Column>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Cadastro };
