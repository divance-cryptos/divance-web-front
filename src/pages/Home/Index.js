import { useState, useEffect } from 'react';
import SectionCard from "../../components/SectionCard";
import Welcome from "../../components/Welcome";
import liveService from "../../services/liveService";
import youtubeService from "../../services/youtubeService";
import { Container, ContainerMain, ContainerLeft, Section, SectionTitle, Image } from './style';

const Home = () => {
  const [lives, setLives] = useState([]);
  const [youtubes, setYoutubes] = useState([]);

  useEffect(() => {
    const serviceLive = liveService();
    const serviceYoutube = youtubeService();
    serviceLive.getLives()
      .then(livesData => {
        setLives(livesData)
      })
    serviceYoutube.getYoutubes()
      .then(youtubesData => setYoutubes(youtubesData))
  }, [setLives, setYoutubes])

  return (
    <Container>
      <Welcome />
            <h1>Puedes contribuir si quieres ...</h1>
            <h3>👌 Uniendote a nuestro Discord</h3>
            <h3>👌 Contribuye en nuestos repositorios libres</h3>
            <h3>👌 Donación por ethereum, bsc, polygon WIP</h3>
            <Image src={require(`../../assets/ethereum.png`).default} alt="" width="260px" />
        <ContainerMain id='main'>
          <ContainerLeft>
            <Section>
              <SectionTitle>Próximos Lives</SectionTitle>
              <SectionCard data={lives} />
            </Section>
            <Section>
              <SectionTitle>Youtube Videos</SectionTitle>
              <SectionCard data={youtubes} />
            </Section>
          </ContainerLeft>
        </ContainerMain>
       {/* <Footer /> */}
    </Container>
  );
};

export default Home;
