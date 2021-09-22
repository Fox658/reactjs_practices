import React from "react";

class Item extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        count: 0,
    }
  }

  clickMe = () => {
    this.setState(prev => ({ count: prev.count + 1 }));
  };

  render() {
    return (
      <h1 onClick = {() => this.clickMe()}>
        Hello Bitch!
        <small> {this.state.count} clicks by {this.props.name}!!</small>
      </h1>
    );
  }
}

export default Item;