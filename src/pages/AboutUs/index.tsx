import Header from "../../components/Header";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import Logo from "../../assets/images/logo.svg";
import image from "../../assets/images/image.webp";
/* import VideoBG from "../../assets/videos/videobg.mp4"; */
import Container from "./styles";

const AboutUs = () => {
  return (
    <>
      {/* <Header /> */}
      <Container>
        <section className="topContent">
          {/* <video className="videoContent" src={VideoBG} autoPlay muted loop /> */}
          <figure className="logoBox">
            <img src={Logo} className="logoImage" alt="LOGO" />
          </figure>
        </section>
        <section className="middleContent">
          <div className="objective">
            <h2 className="titleContent">Nosso Objetivo</h2>
            <p className="textContent">
              A Astro4Media tem o objetivo de ajudar usuários a organizar e
              apresentar novas mídias. Com a Astro4Media, o usuário é capaz de
              adicionar filmes e séries com diversos marcadores, os que está
              assistindo, já assistiu, por gênero e muito mais. Além de conhecer
              novas graças ao nosso catálogo, ajudando o usuário a descobrir
              algo que nunca viu antes.
            </p>
          </div>
        </section>
        <section className="middleContent">
          <div className="objective">
            <h2 className="titleContent">TECHS UTILIZADAS</h2>
            <p>(LISTINHA DE ICONES)</p>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
        </section>
        <section className="finalContent">
          <h2 className="titleContent">Equipe de Desenvolvimento</h2>
          <ul className="teamContent">
            <li className="cardProfile">
              <div className="cardContent">
                <figure className="imageProfile">
                  <img src={image} className="image" alt="FOTO" />
                </figure>
                <h3>Nome</h3>
                <h4>Product Owner</h4>
                <div className="boxButtons">
                  <button className="cardButton">
                    <LinkedInIcon />
                  </button>
                  <button className="cardButton">
                    <GitHubIcon />
                  </button>
                  <button className="cardButton">
                    <LogoDevIcon />
                  </button>
                </div>
              </div>
            </li>
            <li className="cardProfile2">
              <div className="cardContent2">
                <figure className="imageProfile2">
                  <img src={image} className="image2" alt="FOTO" />
                </figure>
                <h3>Nome</h3>
                <h4>Product Owner</h4>
                <div className="boxButtons2">
                  <button className="cardButton2">
                    <LinkedInIcon />
                    LINKEDIN
                  </button>
                  <button className="cardButton2">
                    <GitHubIcon />
                    GITHUB
                  </button>
                  <button className="cardButton2">
                    <LogoDevIcon />
                    Dev
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </section>
        <div className="cardDev">
          <div className="cardProfile">
            <figure className="cardImage">
              <img src={image} className="image" alt="" />
            </figure>
            <h2>Nome</h2>
            <h3>Cargo</h3>
            <div>
              <button>Github</button>
              <button>Link</button>
              <button>DEV</button>
            </div>
          </div>
          <div className="cardTechs">
            <h2>Techs</h2>
            <ul className="techs">
              <li>React</li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AboutUs;
