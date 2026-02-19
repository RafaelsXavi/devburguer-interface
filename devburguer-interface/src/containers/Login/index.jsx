import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";




import { Container, LeftContainer, RightContainer, Title, Form, InputContainer, Link } from "./styles";

import { Button } from "../../components/Button";

import backgroundlogo from "../../assets/background-logo.svg";

import { api } from "../../services/api";

import { toast } from "react-toastify";

export function Login() {

    const schema = yup.object().shape({
        email: yup.string().email("Digite um e-mail válido").required("Email é obrigatório"),
        password: yup.string().min(6, "A senha deve conter no mínimo 6 caracteres").required("Senha é obrigatória"),
    })
        .required();

    const {
        register,
        handleSubmit,
        formState: { errors } }
        = useForm({
            resolver: yupResolver(schema),
        });

    const onSubmit = async (data) => {
        const response = await toast.promise(

            api.post("/sessions", {
                email: data.email,
                password: data.password,
            }),
            {
pending: "Verificando suas credenciais...",
success: "Login realizado com sucesso!",
error: "Erro ao realizar login. Verifique suas credenciais e tente novamente.",

            }


        )


    };

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

                <Form onSubmit={handleSubmit((onSubmit))}>
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" placeholder="Email" {...register("email")} />
                        <p>{errors.email?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" placeholder="Senha" {...register("password")} />
                        <p>{errors.password?.message}</p>
                    </InputContainer>

                    <Button type="submit">Entrar</Button> 
                </Form>

                <p>
                    Não possui conta? <Link href="/cadastro"> Clique aqui</Link>
                </p>

            </RightContainer>


        </Container>

    );
}
