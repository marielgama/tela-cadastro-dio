import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Container, Title, TitleHighLight, TextContent, ImgMobile, ImgDesktop } from "./style";
import BannerImage from "../../assets/banner.png";

const Home = () => {  

    const navigate = useNavigate();

    const handleClickSignIn = () => { 
        navigate("/login");
    }

    return (
        <>
            <div>
                <Header />
                <Container>
                    <ImgMobile>
                        <img src={BannerImage} height="220" width="320" alt="Imagem Principal" />
                    </ImgMobile>
                    <div>
                        <Title>
                            <TitleHighLight>
                                Implemente
                                <br />   
                            </TitleHighLight>
                            <p> o seu futuro global agora!</p> 
                        </Title>
                        <TextContent>
                            Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                        </TextContent>  
                        <Button title="Começar agora" variant="primary" onClick={handleClickSignIn} />
                    </div>
                    <ImgDesktop>
                        <img src={BannerImage} height="360" width="560" alt="Imagem Principal" />
                    </ImgDesktop>
                </Container>
            </div>
        </>   
    )
}


export { Home };
