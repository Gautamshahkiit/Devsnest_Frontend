import React from 'react';
import { List } from "semantic-ui-react";

const Test = (props) => (
  <List>
    <List.Item  content={props.Name}/>
  </List>
);

export default Test
