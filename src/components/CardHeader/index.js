import React from "react";

import { Header, Day, Tasks, Button } from "./styles";

const CardHeader = props => (
  <Header>
    <Day>{props.date}</Day>
    <Tasks>{props.tasks} Tasks</Tasks>
    <Button>+</Button>
  </Header>
);

export default CardHeader;
