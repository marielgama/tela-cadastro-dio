import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo-dio.png'; // Substitua pelo caminho correto do seu 
import { Button } from '../Button';
import { AuthContext } from '../../context/auth'; // Importe o seu contexto global

import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture, // Certifique-se de que este styled-component existe para a foto redonda
  Wrapper
} from './style';

const Header = ({ autenticado = false }) => {
  const navigate = useNavigate();
  
  // 1. Puxa os dados do usuário e a função de logout do Contexto Global
  const { user, handleSignOut } = useContext(AuthContext);

  return (
    <Wrapper>
      <Container>
        <Row>
          {/* Substitua pelo logo oficial da DIO ou um texto */}
         
         <h1 style={{ color: '#FFF', cursor: 'pointer' }} onClick={() => navigate('/')}><img src={logo} height="32" width="60" alt="Logo da Dio" /></h1>
          
          {/* Se o usuário estiver logado, exibe a barra de busca e o menu interno */}
          {autenticado && user ? (
            <>
              <BuscarInputContainer>
                <Input placeholder='Buscar...' />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        
        <Row>
          {/* 🔥 2. CONDICIONAL DE PERFIL: */}
          {autenticado &&user ? (
            <>
              {/* Se estiver logado, exibe a foto e uma opção de sair */}
              <UserPicture 
                src={user.imagem || `https://githubusercontent.com{user.id}?v=4`} 
                alt={user.name}
                title={user.name}
              />
              <MenuRight 
                style={{ cursor: 'pointer', marginLeft: '12px' }} 
                onClick={handleSignOut}
              >
                Sair
              </MenuRight>
            </>
          ) : (
            <>
              {/* Se NÃO estiver logado, exibe os botões tradicionais */}
              <MenuRight onClick={() => navigate('/')}>Home</MenuRight>
              <Button title="Entrar" onClick={() => navigate('/login')} />
              <Button title="Cadastrar" onClick={() => navigate('/cadastro')} />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
