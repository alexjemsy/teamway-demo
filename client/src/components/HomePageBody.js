import styled from '@emotion/styled';

import Questions from './Questions';

const Container = styled.div`
  color: #000;
  line-height: 33px;
  margin-top: 22.5px;
  margin-bottom: 22.5px;
  margin-bottom: 1em;
  max-width: 33em !important;
  font-size: 22px;
  
  div {
    max-width: 100%;
  }
`;

const HomePageBody = () => {
  return (
    <Container className="has-y-padding container-md">
      <div className="field-body">
        <p>
          At work, is it you who gets noticed first or perhaps the other people around you?
          Do you feel compelled to take centre-stage or are you more comfortable back-stage?
          If it’s the former, then you are eager for contact — warm and happy human relations.
          If it’s the latter, then solitude suits and stimulates you more and hell is often other people…
        </p>
      </div>
      <Questions/>
    </Container>
  );
};

export default HomePageBody;
