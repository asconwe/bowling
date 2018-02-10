import createReduxProxy from 'react-cosmos-redux-proxy';
import { createStore } from 'redux';
import bowlingReducer from './src/reducers/bowlingReducer';

const ReduxProxy = createReduxProxy({
    createStore: (state) => {
      const store = createStore(
        bowlingReducer,
        state
      )
      return store;
    }
});

export default [
  ReduxProxy
  // ...other proxies
];