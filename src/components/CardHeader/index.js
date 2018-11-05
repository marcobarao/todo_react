import React from "react";

import { Header, Day, Tasks, Button } from "./styles";

const CardHeader = () => (
  <Header>
    <Day>Wednesday, 22 Nov</Day>
    <Tasks>3 Tasks</Tasks>
    <Button>+</Button>
  </Header>
);

export default CardHeader;
