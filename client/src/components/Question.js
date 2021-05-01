import styled from '@emotion/styled';

const newResponse = (type, text) => ({
  type,
  text
});

const buildResponses = ({ extrovertResponses, introvertResponses }) => {
  const responses = Array(extrovertResponses.length + introvertResponses.length);

  const len1 = extrovertResponses.length;
  const len2 = introvertResponses.length;

  let i = 0;
  let j = 0;

  while (i < len1 && j < len2) {
    responses.push(newResponse('extrovert', extrovertResponses[i++]));
    responses.push(newResponse('introvert', introvertResponses[j++]));
  }

  while (i < len1) {
    responses.push(newResponse('extrovert', extrovertResponses[i++]));
  }

  while (j < len2) {
    responses.push(newResponse('introvert', introvertResponses[j++]));
  }

  return responses;
};

const Container = styled.div`
> label {
  color: #000;
  font-size: 20px;
  line-height: 30px;
  margin-top: 10.5px;
  margin-bottom: 10.5px;
  font-style: italic;
  font-weight: 700;
  display: block;
}

.form-type-radio {
    margin-top: 24px;
    margin-bottom: 24px;
    line-height: 27px;
    font-size: 18px;
    font-weight: 700;
    padding-left: 3.2vw;
    cursor: pointer;
    color: #666;
    
    label {
      display: inline;
      font-weight: 400;
      margin-left: 3px;
    }
}
`;

const handleChange = ({ id, item, onSelect }) => {
  if (onSelect) {
    onSelect(id, item);
  }
};

const Question = (props) => {
  const { onSelect, selected, data: { id, extrovertResponses, introvertResponses, text } } = props;
  const responses = buildResponses({ extrovertResponses, introvertResponses });

  return (
    <Container className={`form-item form-type-radios`}>
      <label htmlFor={`edit-${id}`}>{text}</label>
      <div id={`edit-${id}`} className="form-radios">
        {responses.map((item, ind) => (
          <div className="form-item form-type-radio" key={`edit-${id}-${ind}`}>
            <input type="radio"
                   id={`edit-${id}-${ind}`}
                   name={`${id}`}
                   checked={selected === item.text}
                   value={`${ind}`}
                   className="form-radio"
                   onChange={(e) =>
                     handleChange({ id, item, onSelect })}
            />
            <label htmlFor={`edit-${id}-${ind}`}>{item.text}</label>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Question;
