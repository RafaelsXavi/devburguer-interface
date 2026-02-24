import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";


import { Container, LeftContainer, RightContainer, Title, Form, InputContainer, Link } from "./styles";

import { Button } from "../../components/Button";

import backgroundlimpo from "../../assets/backgroundlimpo.svg";

import logo from "../../assets/Logo.svg";

import { api } from "../../services/api";

import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";


        export function Login() {






     const navigate = useNavigate();

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
        try {
            const { status } = await api.post(
                "/sessions",
                {
                    email: data.email,
                    password: data.password,
                },
                {
                    validateStatus: (status) => true,
                },
            );

            if (status === 200) {
                toast.success("Login realizado com sucesso!");
                setTimeout(() => {
                    navigate("/");
                }, 2000);
            } else if (status === 401) {
                toast.error("Email ou senha incorretos.");
            } else {
                throw new Error();
            }
        } catch (error) {
            toast.error("Erro ao realizar login. Verifique suas credenciais e tente novamente.");
        }
    };

    return (


        <Container>

            <LeftContainer>
                <img src={backgroundlimpo} alt="background-devburguer" className="background-image" />
                <img src={logo} alt="logo-devburguer" className="logo-image" />
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
                    Não possui conta? <Link to='/cadastro' > Clique aqui</Link>
                </p>

            </RightContainer>


        </Container>

    );
}
