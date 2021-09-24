import React from 'react';
import './App.css';
// import Item from './Component/MyItem';


class StarWars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      heigth: null,
      homworld: null,
      films: [],

    }
  }
  getNewCharacter() {
    console.log("Get new character from a button");
    this.setState(
      {
        name: "Pablo hurt",
        heigth: 176,
        homworld: "Toto.in",
        films: ["dadass","yolo 2077", "call of cien fuegos"],
  
      }
    );
  }

  render() {
    return (
    <div>
      <h1>{this.state.name}</h1>
      <p>Height cm: {this.state.heigth}</p>
      <p>Homeworld: {this.state.homworld}</p>
      <ul>
        <li>{this.state.films}</li>
      </ul>
      <button 
        type="button" 
        onClick={() => this.getNewCharacter()} 
        className="btn"
      >
        Randomize Character
      </button>

    </div>
    );
  }
}
// this is for run multiple times a component "MyItem in App function comoponent"
// const listPeople = [
//   "Juancho", 
//   "Leticia",
// ];
// let id = 0;
// let items = [];
// for(let item of listPeople){
//   id += 1;
//   items.push(
//     <Item key={id} name={item} /> 
//   );
// };

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarWars />
      </header>
    </div>
  );
}

export default App;
