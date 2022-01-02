import { useState, useEffect } from 'react';
import SectionCard from "../../components/SectionCard";
import Welcome from "../../components/Welcome";
import liveService from "../../services/liveService";
import youtubeService from "../../services/youtubeService";
import { ContainerMain, Section, SectionTitle } from './style';

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
    <>
      <Welcome />
        <ContainerMain id='main'>
            <Section>
              <SectionTitle>Próximos Lives</SectionTitle>
              <SectionCard data={lives} />
            </Section>
            <Section>
              <SectionTitle>Youtube Videos</SectionTitle>
              <SectionCard data={youtubes} />
            </Section>
        </ContainerMain>
    </>
  );
};

export default Home;
