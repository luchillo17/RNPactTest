import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { todosReducer } from './todos.reducer';

const enhancer = composeWithDevTools(applyMiddleware(thunk));

const reducers = combineReducers({
  todos: todosReducer,
});

export const store = createStore(reducers, enhancer);
