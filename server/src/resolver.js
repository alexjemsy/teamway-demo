const samples = require('./question-samples.json');

const mappedSamples = samples
  .map(({ id, response: { introvert, extrovert }, question }) => {
    return {
      id,
      text: question,
      introvertResponses: introvert,
      extrovertResponses: extrovert
    };
  });

const questions = () => {
  return [
    ...mappedSamples
  ];
};

module.exports = questions;
