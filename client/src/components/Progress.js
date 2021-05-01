import styled from '@emotion/styled';

const Container = styled.div`
  font-weight: 700;
  
  > div:first-of-type {
    border-radius: 0;
    height: 4vw;
    background: #e5e5e5;
    border: 1px solid #ccc;
    margin: 0 .2em;
    
    > div {
      height: 4vw;
      background: #d10056;
      border: 1px solid #d10056;
      position: relative;
      top: -1px;
      left: -1px;
    }
  }
  
  .percentage, .message {
    margin-top: 22.5px;
    margin-bottom: 22.5px;
    line-height: 30px;
    font-size: 20px;
    text-transform: uppercase;
    color: #d10056;
    font-weight: 400;
  }
  
  .percentage {
    float: right;
    text-align: right;
  }
  
  .message {
    text-align: left;
  }
`;

const Progress = (props) => {
  const { index, total } = props;
  const percent = Math.floor(index * 100 / total);

  return (
    <Container>
      <div>
        <div className="filled" style={{
          width: `${percent}%`
        }}/>
      </div>
      <div className="percentage">{percent}%</div>
      <div className="message">Question {index} of {total}</div>
    </Container>
  );
};

export default Progress;
