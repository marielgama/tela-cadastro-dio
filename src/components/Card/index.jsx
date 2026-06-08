
import React from 'react';
import { FiThumbsUp } from 'react-icons/fi'; // Certifique-se de ter o react-icons instalado
import { 
  CardContainer, 
  ImgBackground, 
  Content, 
  UserInfo, 
  UserPicture, 
  NameText, 
  PostInfo, 
  HasInfo 
} from './style';

const Card = ({ nome, fotoUser, fotoPost, titulo, descricao, tags, curtidas }) => {
  return (
    <CardContainer>
      {/* Imagem de fundo do post (ex: um banner de tecnologia) */}
      <ImgBackground src={fotoPost || "https://unsplash.com"} />
      
      <Content>
        {/* Informações de quem postou */}
        <UserInfo>
          <UserPicture src={fotoUser || "https://avatars.githubusercontent.com/u/148490113?v=4"} />
          <div>
            <NameText>{nome}</NameText>
          </div>
        </UserInfo>
        
        {/* Detalhes do Post */}
        <PostInfo>
          <h4>{titulo}</h4>
          <p>{descricao}</p>
        </PostInfo>
        
        {/* Tecnologias/Tags e as curtidas */}
        <HasInfo>
          <h4>{tags}</h4>
          <p>
            <FiThumbsUp style={{ marginRight: '8px', verticalAlign: 'middle' }} />
            {curtidas}
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};

export { Card };

