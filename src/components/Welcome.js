import styled from '@emotion/styled';

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: #ffffff;

  margin: 20px;
  & > h1 {
    
  } 
`

const Welcome = () => {
  return <Cards>
    <h1>Bienvenido 👋</h1>
    <p> Esta comunidad es para todos aquellos que quieran aprender y compartir los aprendido.
        Principalmente por ahora trataremos temas de desarrollo y crypto pero estamos abiertos a cualquier propuesta que pueda ser interesante :) </p>
  </Cards>
  ;
};

export default Welcome;