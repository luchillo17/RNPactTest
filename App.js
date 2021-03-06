import { Ionicons } from '@expo/vector-icons';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Body, Container, Header, Title, Content, Text } from 'native-base';
import React from 'react';
import { Provider } from 'react-redux';

import { store } from './src/store';
import { TodosPage } from './src/todos-page/todos-page';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });

    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Provider store={store}>
        <Container>
          <Header>
            <Body>
              <Title>Todos</Title>
            </Body>
          </Header>
          <Content padder>
            <TodosPage />
          </Content>
        </Container>
      </Provider>
    );
  }
}
