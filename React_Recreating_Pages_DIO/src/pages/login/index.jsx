import { useNavigate, Link } from "react-router-dom";
import { MdEmail, MdLock } from "react-icons/md";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";

import { api } from "../../services/api";

// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

import {
  Container,
  Title,
  Column,
  TitleLogin,
  SubtitleLogin,
  EsqueciText,
  CriarText,
  Row,
  Wrapper,
} from "./styles";

// const schema = yup
//   .object({
//     email: yup
//       .string()
//       .email("Email não é valido")
//       .required("Campo Obrigatorio"),
//     password: yup
//       .string()
//       .min(8, "No minimo 8 caracteres")
//       .required("Campo Obrigatorio"),
//   })
//   .required();

const Login = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onChange",
    mode: "onChange",
  });

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.get(
        `/users?email=${formData.email}&senha=${formData.senha}`
      );

      if (data.length && data[0].id) {
        navigate("/feed");
        return;
      }
      alert("Usuário ou senha inválido");
    } catch (e) {
      alert("Houve um erro");
    }
  };

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
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change.</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                placeholder="E-mail"
                leftIcon={<MdEmail />}
                name="email"
                control={control}
              />
              {errors.email && <span>E-mail é obrigatório</span>}
              <Input
                type="password"
                placeholder="Senha"
                leftIcon={<MdLock />}
                name="senha"
                control={control}
              />
              {errors.senha && <span>Senha é obrigatório</span>}
              <Button title="Entrar" variant="secondary" type="button" />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <Link to="/cadastro">
                <CriarText>Criar Conta</CriarText>
              </Link>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Login };
