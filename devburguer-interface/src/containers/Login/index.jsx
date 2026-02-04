import { Container, LeftContainer, RightContainer, Title, Form, InputContainer, Link } from "./styles";
import Logo from "../../assets/Logo.svg";

export function Login() {
    return (
        

        <Container>
            <LeftContainer>
                <img src={Logo} alt="logo-devburguer" />
            </LeftContainer>
            <RightContainer>
                <Title>Olá, seja bem vindo ao <span>Dev Burguer !.</span> Acesse com seu <span>Login e senha.</span></Title>
                <Form>
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" placeholder="Email" />
                    </InputContainer>
                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" placeholder="Senha" />
                    </InputContainer>
                    <Link href="#">Esqueci minha senha</Link>
                    <button type="submit">Entrar</button>
                </Form>
                <Link href="#">Não possui conta? Clique aqui</Link>
            </RightContainer>
        </Container>

    );
}
