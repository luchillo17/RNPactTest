import { Body, Header, Text, Title, Button } from 'native-base';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import uuid from 'uuid/v1';

import { Todo } from './todo/todo';
import { addTodo } from '../store/todos.actions';

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
