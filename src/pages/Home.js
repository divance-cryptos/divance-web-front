import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Header from "../components/Header";
import LiveSection from "../components/LiveSection";
import liveService from "../services/liveService";

const Section = styled.div`
  margin: 0 auto;
  width: 80%;
  padding-top: 20px;
`

const Home = () => {
  const [lives, setLives] = useState([]);

  useEffect(() => {
    const service = liveService();
    service.getLives()
      .then(lives => setLives(lives))
  }, [setLives])

  return (
    <>
      <Header />
      <Section>
        <h3>Próximos Lives</h3>
        <LiveSection lives={lives} />
      </Section>
      <Section>
        <h3>Youtube Videos</h3>
        <LiveSection lives={lives} />
      </Section>
    </>
  );
};

export default Home;
