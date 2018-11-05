import React from "react";

import { List, Item, Label, Check, Text, Time } from "./styles";

const CardContent = props => (
  <List>
    <Item>
      <Label onClick={props.handleCheck}>
        <Check type="checkbox" id="check-1" />
        <label for="check-1">
          <svg viewBox="-3 -5 30 30">
            <path d="M5 11 L 10 16 L 18 5" />
          </svg>
        </label>
        <Text>
          Morning walk <Time>7:00am</Time>
        </Text>
      </Label>
    </Item>
    <Item>
      <Label onClick={props.handleCheck}>
        <Check type="checkbox" id="check-2" />
        <label for="check-2">
          <svg viewBox="-3 -5 30 30">
            <path d="M5 11 L 10 16 L 18 5" />
          </svg>
        </label>
        <Text>
          Meeting with Ana <Time>9:30am</Time>
        </Text>
      </Label>
    </Item>
    <Item>
      <Label onClick={props.handleCheck}>
        <Check type="checkbox" id="check-3" />
        <label for="check-3">
          <svg viewBox="-3 -5 30 30">
            <path d="M5 11 L 10 16 L 18 5" />
          </svg>
        </label>
        <Text>
          Buy Pizza from Pizzahut <Time>11:00am</Time>
        </Text>
      </Label>
    </Item>
  </List>
);

export default CardContent;
