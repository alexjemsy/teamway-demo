import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';

import Questions, { QuestionsQuery } from '../Questions';

const { act } = TestRenderer;

it('renders the loading logo', async () => {
  let component;

  act(() => {
    component = TestRenderer.create(
      <MockedProvider mocks={[]} addTypename={false}>
        <Questions/>
      </MockedProvider>
    );
  });

  const tree = component.toJSON();
  expect(tree.children[0].type).toContain('img');
});

it('should render question', async () => {
  const mocks = [
    {
      request: {
        query: QuestionsQuery
      },
      result: {
        data: {
          questions: [
            { id: '1', text: 'text', extrovertResponses: ['extrovert'], introvertResponses: ['introvert'] }
          ]
        }
      }
    }
  ];

  let component;

  await act(async () => {
    component = TestRenderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Questions/>
      </MockedProvider>
    );

    await new Promise(resolve => setTimeout(resolve, 1));
  });

  const tree = component.toJSON();

  expect(tree.children[1].children[0].children).toContain('text');
});

it('should show error UI', async () => {
  const mock = {
    request: {
      query: QuestionsQuery
    },
    error: new Error('An error occurred')
  };

  let component;

  await act(async () => {
    component = TestRenderer.create(
      <MockedProvider mocks={[mock]} addTypename={false}>
        <Questions/>
      </MockedProvider>,
    );
    await new Promise(resolve => setTimeout(resolve, 2)); // wait for response
  });

  const tree = component.toJSON();
  expect(tree.children[0].children).toContain('Application error, reload this page.');
});
