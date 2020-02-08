export const todosActionTypes = {
  FetchTodosSuccess: 'FetchTodosSuccess',
  AddTodo: 'AddTodo',
  UpdateTodo: 'UpdateTodo',
};

export const fetchTodosSuccess = (todos) => ({
  type: todosActionTypes.FetchTodosSuccess,
  payload: todos,
});

export const addTodo = (todo) => ({
  type: todosActionTypes.AddTodo,
  payload: todo,
});

export const updateTodo = (todo) => ({
  type: todosActionTypes.UpdateTodo,
  payload: todo,
});
