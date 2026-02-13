import { Container, LeftContainer, RightContainer, Title, Form, InputContainer, Link, Button } from "./styles";

import backgroundlogo from "../../assets/background-logo.svg";

export function Login() {
    return (


        <Container>

            <LeftContainer>
                <img src={backgroundlogo} alt="background-devburguer" />
            </LeftContainer>

            <RightContainer>

                <Title>Olá, seja bem vindo ao <span>Dev Burguer !.</span>
                    <br />
                    Acesse com seu <span>Login e senha.</span>
                </Title>

                <Form>
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" placeholder="Email" />
                    </InputContainer>
                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" placeholder="Senha" />
                    </InputContainer>

                    <Button type="submit">Entrar</Button>
                </Form>

             <p>
               Não possui conta? <Link href="#"> Clique aqui</Link>
            </p>
            </RightContainer>


        </Container>

    );
}
