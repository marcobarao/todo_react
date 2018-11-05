import React from "react";

import { List, Item, Label, Check, Text, Time } from "./styles";

const CardContent = props => (
  <List>
    {props.tasks.map(task => (
      <Item key={task.id}>
        <Label>
          <Check
            type="checkbox"
            id={task.id}
            defaultChecked={task.checked}
            onChange={props.handleCheck}
          />
          <label htmlFor={task.id}>
            <svg viewBox="-3 -5 30 30">
              <path d="M5 11 L 10 16 L 18 5" />
            </svg>
          </label>
          <Text checked={task.checked}>
            {task.title} <Time>{task.hour}</Time>
          </Text>
        </Label>
      </Item>
    ))}
  </List>
);

export default CardContent;
