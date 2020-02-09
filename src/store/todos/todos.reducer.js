import produce from 'immer';
import { todosActionTypes } from './todos.actions';
import uuid from 'uuid/v1';

const initialState = {
  loading: false,
  error: null,
  todoIds: [],
  todos: {},
  selectedId: null,
};

export function todosReducer(state = initialState, action) {
  switch (action.type) {
    case todosActionTypes.FetchTodosSuccess:
      return produce(state, (draft) => {
        draft.todoIds = action.payload.map((todo) => todo.id);

        draft.todos = action.payload.reduce((todos, todo) => {
          todos[action.payload.id] = action.payload;
          return todos;
        }, {});
      });

    case todosActionTypes.AddTodo:
      return produce(state, (draft) => {
        console.warn('Add Todo: ', action.payload);

        draft.todoIds.push(action.payload.id);

        draft.todos[action.payload.id] = action.payload;
      });

    case todosActionTypes.UpdateTodo:
      return {
        ...state,

        todos: {
          ...state.todos,
          [action.payload.id]: action.payload,
        },
      };

    default:
      return state;
  }
}
