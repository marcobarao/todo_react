import React, { Component } from "react";
import moment from "moment";

import CardHeader from "../CardHeader";
import CardContent from "../CardContent";

import { Card } from "./styles";

class MainCard extends Component {
  state = {
    date: moment("20181124", "YYYYMMDD").format("dddd, D MMM"),
    tasks: [
      {
        id: 1,
        title: "Morning walk",
        hour: moment("0700", "HHmm").format("h:ssa"),
        checked: false
      },
      {
        id: 2,
        title: "Meeting with Annie",
        hour: moment("0930", "HHmm").format("h:ssa"),
        checked: false
      },
      {
        id: 3,
        title: "Lunch",
        hour: moment("1200", "HHmm").format("h:ssa"),
        checked: false
      },
      {
        id: 4,
        title: "Workout",
        hour: moment("1530", "HHmm").format("h:ssa"),
        checked: false
      },
      {
        id: 5,
        title: "Dinner",
        hour: moment("1800", "HHmm").format("h:ssa"),
        checked: false
      },
      {
        id: 6,
        title: "Learn React",
        hour: moment("1900", "HHmm").format("h:ssa"),
        checked: false
      }
    ]
  };

  handleCheck = ({ target }) => {
    const newTasks = this.state.tasks.map(
      task =>
        task.id === parseInt(target.id)
          ? { ...task, checked: !task.checked }
          : task
    );
    this.setState({ tasks: newTasks });
  };
  render() {
    const { tasks, date } = this.state;

    return (
      <Card>
        <CardHeader tasks={tasks.length} date={date} />
        <CardContent tasks={tasks} handleCheck={this.handleCheck} />
      </Card>
    );
  }
}

export default MainCard;
