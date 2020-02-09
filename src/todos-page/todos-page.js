import { Button, Text } from 'native-base';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'uuid/v1';

import { addTodo } from '../store/todos/todos.actions';
import { Todo } from './todo/todo';

export function TodosPage() {
  const todos = useSelector(({ todos: { todoIds, todos } }) =>
    todoIds.map((id) => todos[id]),
  );

  const dispatch = useDispatch();

  const dispatchTodo = () => {
    const todo = {
      id: uuid(),
      title: 'asdf',
      text: 'fdsa',
    };

    dispatch(addTodo(todo));
  };

  return (
    <>
      <Text>Here are your todos:</Text>

      {todos && todos.length > 0 ? (
        todos.map((todo) => <Todo key={todo.id} {...todo}></Todo>)
      ) : (
        <Text>No todos to show</Text>
      )}

      <Button onPress={dispatchTodo}>
        <Text>Add Todo</Text>
      </Button>
    </>
  );
}
