import styled from '@emotion/styled';
import CardDetail from './CardDetail';

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -8px;
  margin-right: -8px;
`

const CardsItem = styled.div`
  padding-left: 8px;
  padding-right: 8px;
`

const SectionCard = ({data}) => {
  return (
    <Cards>
      {
        data.map((row) => {
          return <CardsItem key={row.id}>
            <CardDetail thumb={row.thumb} watchLink={row.watchLink} ></CardDetail>
          </CardsItem>
        })
      }
    </Cards>
  );
};

export default SectionCard;