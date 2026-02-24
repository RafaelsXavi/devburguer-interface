import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";


import { useNavigate } from "react-router-dom";

import { Container, LeftContainer, RightContainer, Title, Form, InputContainer, Link } from "./styles";

import { Button } from "../../components/Button";

import backgroundlimpo from "../../assets/backgroundlimpo.svg";

import logo from "../../assets/Logo.svg";

import { api } from "../../services/api";

import { toast } from "react-toastify";

export function Register() {
const navigate = useNavigate();
    const schema = yup
        .object()
        .shape({
            name: yup.string().required("Nome é obrigatório"),
            email: yup.string().email("Digite um e-mail válido").required("Email é obrigatório"),
            password: yup.string().min(6, "A senha deve conter no mínimo 6 caracteres").required("Senha é obrigatória"),
            confirmPassword: yup.string().oneOf([yup.ref("password"), null], "As senhas devem ser iguais").required(),
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
 try { const { status } = await api.post(

            '/users',

            {
                name: data.name,
                email: data.email,
                password: data.password,
            },

            {
                validateStatus: (status) => true,
            },
        );
if (status === 200 || status === 201) {
setTimeout(() => {
navigate("/login");
}, 2000);


            toast.success("Cadastro realizado com sucesso!");
        } else if (status === 409) {
            toast.error("Erro ao realizar cadastro. Verifique os dados e tente novamente.");
} else {throw new Error(); } 

}

catch (error) {
    toast.error("Erro ao realizar cadastro. Verifique os dados e tente novamente.");
}
       

};

    return (
        <Container>

            <LeftContainer>
                <img src={backgroundlimpo} alt="background-devburguer" className="background-image" />
                <img src={logo} alt="logo-devburguer" className="logo-image" />
            </LeftContainer>

            <RightContainer>

                <Title>
                    Crie sua conta no <span>Dev Burguer !.</span>
                </Title>

                <Form onSubmit={handleSubmit((onSubmit))}>

                    <InputContainer>
                        <label>Nome Completo</label>
                        <input type="text" placeholder="Nome Completo" {...register("name")} />
                        <p>{errors.name?.message}</p>
                    </InputContainer>

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

                    <InputContainer>
                        <label>Confirmar Senha</label>
                        <input type="password" placeholder="Confirmar Senha" {...register("confirmPassword")} />
                        <p>{errors.confirmPassword?.message}</p>
                    </InputContainer>

                    <Button type="submit">Entrar</Button>
                </Form>

                <p>
                    Já possui conta? <Link to="/login"> Clique aqui</Link>
                </p>

            </RightContainer>


        </Container>

    );
}
