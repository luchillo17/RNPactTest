# Project setup

The following were applied in the order of this document.

## Native Base tutorial

Read the section for Expo
https://docs.nativebase.io/docs/GetStarted.html

## Jest React Native Expo tutorial

https://docs.expo.io/versions/latest/guides/testing-with-jest/

Here's some changes you have to do in order for the pact:jest command to work (due to API changes since the tutorial was made), please look this command in package.json:

```
{
  "scripts": {
    "test:pact": "cross-env CI=true jest test --runInBand --setupFiles ./pact/setup.js --setupFilesAfterEnv ./pact/jest-wrapper.js --testMatch \"**/*.test.pact.js\""
  }
}
```

## Redux setup tutorial

There's many ways to setup redux, in this example we will rely on redux, react-redux, immer (immutability) and redux-thunk (async operations like http requests).

The folder structure is done in a centralized folder in `./src/store`, in the `index.js` we setup the store with `redux-devtools-extension` support, as well as the `redux-thunk` middleware support.

The rest of the store is setup in folders by feature, the todo feature is setup in `./src/store/todos` where we put the reducer for that feature, and it's actions (both normal ones and async ones that `redux-thunk` will capture).

Lastly wherever you want to use redux in the components you just use `react-redux` bindings like `useSelector` & `useDispatch` to both get data from the store, and dispatch actions to it.

#### Note: `immer` is used in the reducers to make immutability simpler, look at the difference in uses in `./src/store/todos/todos.reducer.js`, all cases there are ensuring immutability, however the immer cases are way more simpler to reason about since you don't have to think about the immutability yourself, just rely on `immer`.

## Pact setup tutorial

https://reflectoring.io/pact-react-consumer/
