import {
  createStore,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer, initialState } from './rootReducer';

export const store = createStore(rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk)));
