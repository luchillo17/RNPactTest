import { Body, Card, CardItem, Text } from 'native-base';
import React from 'react';

export function Todo({ title, text }) {
  return (
    <Card>
      <CardItem header bordered>
        <Text>{title}</Text>
      </CardItem>

      <CardItem bordered>
        <Body>
          <Text>{text}</Text>
        </Body>
      </CardItem>
    </Card>
  );
}
