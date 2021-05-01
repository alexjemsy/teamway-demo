import styled from '@emotion/styled';
import { gql, useQuery } from '@apollo/client';
import { Fragment, useState } from 'react';

import logo from '../logo.svg';

import Question from './Question';
import Progress from './Progress';
import IntrovertResult from './IntrovertResult';
import ExtrovertResult from './ExtrovertResult';

export const QuestionsQuery = gql`
  query getQuestions {
    questions {
      id
      text
      extrovertResponses
      introvertResponses
    }
  }
`;

const Form = styled.form`
  padding: 1vw 1.6vw;
  border: 1px solid #ccc;
  margin: 1.5rem 0 0;
  
  .form-item {
    margin: 1.5rem 0;
  }
  
  .action-buttons {
    display: flex;
    
    button {
        margin-top: 12px;
        margin-bottom: 12px;
        line-height: 27px;
        font-size: 18px;
        user-select: none;
        padding: .5vw .8vw;
        text-decoration: none;
        border: 0;
    }
    
    > button {
      color: #666;
      background: 0 0;
    }
    
    > div {
      flex: 1;
      
      button:first-of-type {
        color: #666;
        background: 0 0;
        margin-right: 1.6vw;
      }
      
      button:last-of-type {
        margin-left: 8px;
        color: #fff;
        background-color: #d10056;
      }
    }
  }
`;

const Questions = () => {
  const { loading, error, data } = useQuery(QuestionsQuery);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [response, updateResponse] = useState({});
  const [responseAvailable, setResponseAvailable] = useState(false);
  const [resultAvailable, setResultAvailable] = useState(null);
  const { questions = [] } = data || {};
  const question = questions[questionIndex];

  if (resultAvailable) {
    return resultAvailable === 'introvert' ? <IntrovertResult/> : <ExtrovertResult/>;
  }

  return (
    <Form>
      {loading && <img src={logo} className="App-logo" alt="logo"/>}
      {!loading && error && <p>Application error, reload this page.</p>}
      {!loading && !error && (
        <Fragment>
          <Progress index={questionIndex + 1} total={questions.length}/>
          <Question data={question}
                    selected={response[question.id]?.text}
                    onSelect={(id, item) => {
                      updateResponse(state => ({
                        ...state,
                        [id]: item
                      }));

                      if (!responseAvailable) {
                        setResponseAvailable(true);
                      }
                    }}
          />
          <div className="action-buttons">
            <div>
              {questionIndex > 0 && (
                <button type="button" className="btn"
                        onClick={() => setQuestionIndex(v => --v)}
                >Previous</button>
              )}
              {questionIndex < questions.length - 1 && (
                <button type="button" className="btn"
                        onClick={() => setQuestionIndex(v => ++v)}
                >Next</button>
              )}
            </div>
            {responseAvailable && (
              <button type="button"
                      className="btn"
                      onClick={() => {
                        const keys = Object.keys(response);
                        let extrovertResponse = 0;
                        let introvertResponse = 0;

                        keys.forEach(k => {
                          const item = response[k];

                          if (item.type === 'extrovert') {
                            extrovertResponse++;
                          } else {
                            introvertResponse++;
                          }
                        });

                        if (extrovertResponse === introvertResponse) {
                          alert('It appears you were not honest with your response(s), try again.');
                          return;
                        }

                        setResultAvailable(extrovertResponse > introvertResponse ?
                          'extrovert' : 'introvert');
                      }}
              >Finish</button>
            )}
          </div>
        </Fragment>
      )}
    </Form>
  );
};

export default Questions;
