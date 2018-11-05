import React, { Component } from "react";

import CardHeader from "../CardHeader";
import CardContent from "../CardContent";

import { Card } from "./styles";

class MainCard extends Component {
  render() {
    return (
      <Card>
        <CardHeader />
        <CardContent />
      </Card>
    );
  }
}

export default MainCard;
