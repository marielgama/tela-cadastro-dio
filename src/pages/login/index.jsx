// import { useNavigate } from "react-router-dom";
import {MdEmail, MdLock} from 'react-icons/md';
import { Button } from "../../components/Button"; 
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { 
    Column, CriarText, EsqueciText, Row, Container, Title,
    SubTitleLogin, TitleLogin, Wrapper
       } from "./style";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; 
import { yupResolver } from "@hookform/resolvers/yup"
import { useContext } from 'react';
import { AuthContext } from "../../context/auth"; // Ajuste o caminho do seu contexto
import { loginSchema } from "../../validations/loginSchema";



  
const Login = () => { 

    const { handleLogin, loading } = useContext(AuthContext);

    const navigate = useNavigate();

   const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });


     const onSubmit = async (formData) => {
        await handleLogin(formData);
    };


    return (
        <>
            <div>
                <Header />
                <Container>
                    <Column>
                        <Title>
                            A Plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                        </Title>    
                    </Column>
                    <Column>
                        <Wrapper>
                            <TitleLogin>Faça seu login</TitleLogin>
                            <SubTitleLogin>Faça o seu login e make the change </SubTitleLogin>
                             <form onSubmit={handleSubmit(onSubmit)}>
                                <Input name="email" errorMessage={errors?.email?.message}  control={control} placeholder="E-mail" leftIcon={<MdEmail />} />
                                <Input name="password" errorMessage={errors?.password?.message}  control={control} placeholder="Senha" type="password"  leftIcon={<MdLock />} />
                                <Button title="Entrar" variant="secondary"  type="submit" disabled={loading}> 
                                     {loading ? "Entrando..." : "Entrar"}
                                </Button>
                            </form>
                            <Row>
                                <EsqueciText>Esqueci minha senha</EsqueciText>
                                <CriarText onClick={() => navigate('/cadastro')}>Criar conta</CriarText>
                            </Row>
                        </Wrapper>
                    </Column>
                </Container>
            </div>
        </>   
    )
}


export { Login };
