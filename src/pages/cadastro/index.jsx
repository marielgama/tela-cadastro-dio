// import { useNavigate } from "react-router-dom";
import {MdEmail, MdLock, MdPerson} from 'react-icons/md';
import { Button } from "../../components/Button"; 
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { 
    Column, Row, Container, Title,
    SubTitleLogin, TitleLogin, Wrapper, CriarContaText, LinkFazerLogin
       } from "./style";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; 
import { yupResolver } from "@hookform/resolvers/yup"

import { api } from "../../services/api";
import { userSchema } from "../../validations/userSchema";
import { useState } from "react";



const Cadastro = () => { 

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
    } = useForm({
    resolver: yupResolver(userSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await api.post("/users", data);
      alert(`Olá ${data.name}, você foi cadastrado(a) com sucesso!`);
      reset();
    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar usuário");
    } finally {
      setLoading(false);
    }
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
                            <TitleLogin>Começe agora grátis</TitleLogin>
                            <SubTitleLogin>Crie sua conta e make the change._ </SubTitleLogin>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Input name="name" errorMessage={errors?.name?.message}  
                                control={control}
                                placeholder="Nome Completo" leftIcon={<MdPerson />} />
                                
                                <Input name="email" errorMessage={errors?.email?.message}  
                                 control={control}
                                placeholder="E-mail" leftIcon={<MdEmail />} />
                                
                                {/* Correção feita aqui: type="password" */}
                                <Input name="password" errorMessage={errors?.password?.message}  
                                 control={control}
                                placeholder="Senha" type="password" leftIcon={<MdLock />} />
                                
                                <Button title="Criar minha conta" variant="secondary" type="submit" disabled={loading}>
                                 {loading ? "Salvando..." : "Cadastrar"}
                                 </Button> 
                            </form>
                            <Row>
                                <CriarContaText>Ao clicar em "Criar minha conta grátis", você está aceitando os Termos de Serviço e Política de Privacidade da DIO.
                                     <LinkFazerLogin onClick={() => navigate('/login')}>
                                         Já tenho conta. Fazer Login
                                     </LinkFazerLogin>
                                </CriarContaText>
                            </Row>
                        </Wrapper>
                    </Column>
                </Container>
            </div>
        </>   
    )
}

export { Cadastro };
