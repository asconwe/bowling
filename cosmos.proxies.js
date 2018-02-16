import createReduxProxy from 'react-cosmos-redux-proxy';
import { createStore } from 'redux';
import rootReducer from './src/reducers/rootReducer';

const ReduxProxy = createReduxProxy({
    createStore: (state) => {
      const store = createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
      return store;
    }
});

export default [
  ReduxProxy
  // ...other proxies
];