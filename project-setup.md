# Project setup

The following were applied in the order of this document.

## Native Base tutorial

Read the section for Expo
https://docs.nativebase.io/docs/GetStarted.html

## Jest React Native Expo tutorial

https://docs.expo.io/versions/latest/guides/testing-with-jest/

Here's some changes you have to do in order for the pact:jest command to work, please look this command in package.json:

```
{ "scripts": {
    "test:pact": "cross-env CI=true jest test --runInBand --setupFiles ./pact/setup.js --setupFilesAfterEnv ./pact/jest-wrapper.js --testMatch \"**/*.test.pact.js\""
  }
}
```

## Pact setup tutorial

https://reflectoring.io/pact-react-consumer/
