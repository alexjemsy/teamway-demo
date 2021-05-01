import styled from '@emotion/styled';

const Header = styled.header`
background: #f6f6f6;
h1 {
  color: #d10056;
  font-size: 36px;
  line-height: 54px;
  margin-top: 21px;
  margin-bottom: 21px;
  max-width: 20em;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
.page__subtitle {
    padding-bottom: 1vw;
    text-align: center;
    
    .field-body-summary {
      display: inline-block;
      margin: auto;
      
      p {
        color: #666;
        font-size: 20px;
        margin-top: 0;
        margin-bottom: 0;
        max-width: 44em;
        text-align: center;
        padding-top: 1vw;
        padding-bottom: 1vw;
      }
    }
    
    .authored-by {
      color: #666;
      font-size: 20px;
      margin-top: 0;
      margin-bottom: 0;
      padding-top: 1vw;
      padding-bottom: 1vw;
      
      a {
        color: #666;
        font-size: 20px;
      }
    }
}
`;

const HomePageHeader = () => {
  return (
    <Header className="has-y-padding">
      <div className="has-x-padding">
        <h1>Test: Are you an introvert or an extrovert?</h1>
      </div>
      <div className="has-x-padding">
        <div className="page__subtitle">
          <div className="field-body-summary">
            <p>
              So do you consider yourself more of an introvert or an extrovert? Take this test, put together with input
              from psychoanalyst Sandrine Dury, and find out
            </p>
          </div>
          <p className="authored-by"><em>by</em>&nbsp;<a
            href="https://www.psychologies.co.uk/psychologies-0">Psychologies</a></p></div>
      </div>
    </Header>
  );
};

export default HomePageHeader;
