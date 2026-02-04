import { Container } from "./styles";
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

                    <inputContainer>
                    <label>Email</label>
                    <input type="email" placeholder="Email" />
                    </inputContainer>

                    <inputContainer>
                    <label>Senha</label>
                    <input type="password" placeholder="Senha" />
                    </inputContainer>

                    <Link href="#">Esqueci minha senha</Link>

                    <button type="submit">Entrar</button>
                </Form>

                <link href="#">Não possui conta? Clique aqui</link>
            </RightContainer>

        </Container>

    );
}
