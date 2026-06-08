import { useContext } from 'react';
import { Header } from '../../components/Header';
import { UserInfo } from '../../components/Userinfo'; // Seu componente de dados e foto
import { Card } from '../../components/Card'; // Se tiver o componente de Card de posts

import { AuthContext } from '../../context/auth'; // Importa o contexto global

import { Container, Column, Title, TitleHighLight } from './style';

const Feed = () => {
  // 1. Puxa os dados do usuário logado diretamente do contexto global
  const { user } = useContext(AuthContext);

  return (
    <>
      <Header autenticado/>
      <Container>
        {/* Coluna Principal: Conteúdo do Feed */}
        <Column flex={3}>
          <Title>Feed</Title>
              <Card /> 
        </Column>

        {/* Coluna Lateral: Ranking e Informações do Usuário */}
        <Column flex={1}>
          <TitleHighLight># RANKING DA SEMANA</TitleHighLight>
          
          {/* 2. Só renderiza o UserInfo se o usuário realmente existir no estado */}
          {user ? (
            <UserInfo 
              nome={user.name} 
              // Se não houver imagem cadastrada no seu db.json, usa um avatar padrão do GitHub
              imagem={user.imagem || `https://avatars.githubusercontent.com/u/148490113?v=4`} 
              percentual={85} // Progresso inicial padrão
            />
          ) : (
            <p>Carregando dados do usuário...</p>
          )}

          {/* Você pode repetir o componente com dados estáticos para simular outros usuários no ranking */}
          <UserInfo 
            nome="Pablo Henrique" 
            imagem="https://githubusercontent.com" 
            percentual={65} 
          />
          <UserInfo 
            nome="Carla Cibele" 
            imagem="https://githubusercontent.com" 
            percentual={45} 
          />
        </Column>
      </Container>
    </>
  );
};

export { Feed };
