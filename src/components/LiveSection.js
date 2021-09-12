import styled from '@emotion/styled';
import CardDetail from './CardDetail';

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -8px;
  margin-right: -8px;
`

const CardsItem = styled.div`
  flex-basis: 25%;
  padding-left: 8px;
  padding-right: 8px;
`

const LiveSection = ({ lives }) => {
  console.log(lives.map(live => console.log('live', live)))
  return (
    <Cards>
      {
        lives.map((live) => {
          return <CardsItem key={live.id}>
            <CardDetail thumb={live.thumb} watchLink={live.watchLink} ></CardDetail>
          </CardsItem>
        })
      }
    </Cards>
  );
};

export default LiveSection;