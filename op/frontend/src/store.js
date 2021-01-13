import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers/root_reducer';
import logger from 'redux-logger';
const initialState = { 
  ops: 'empty',
  selected: 'none',
  drafts: 'empty',
  session: true,
  auth:'none'
};


const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(reduxThunk, logger))
);

export default store;
