import React from "react";

export default class SortVisual extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  //On App Load => Reset Array
  componentDidMount() {
    this.resetArray();
  }

  //Generate New Array
  resetArray() {
    const array = [];
    for (let i = 0; i < 100; i++) {
      array.push(randomIntFromInterval(5, 1000));
    }
    this.setState({ array });
  }

  render() {
    const { array } = this.state;

    return <></>;
  }
}
