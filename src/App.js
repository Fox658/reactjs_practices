import React from 'react';
import './App.css';
// import Item from './Component/MyItem';


class StarWars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadeCharacter: false,
      name: null,
      height: null,
      homeworld: null,
      films: [],

    }
  }
  getNewCharacter() {
    console.log("Get new character from a button");
    const randomNumber = Math.round(Math.random() * 82);
    const url = `https://swapi.dev/api/people/${randomNumber}/`;//atleast 82
    fetch(url)
      .then( res => res.json())
      .then(data => {
        this.setState(
          {
            loadeCharacter: true,
            name: data.name ,
            height: data.height,
            homeworld: data.homeworld,
            films: data.films,
      
          }
        );
        console.log(data);
      });
  }

  render() {
    return (
    <div>
      {
        this.state.loadeCharacter &&
        <div>
          <h1>{this.state.name}</h1>
          <p>{this.state.height}cm</p>
          <p>Homeworld: {this.state.homeworld}</p>
          <ul>
            <li>{this.state.films}</li>
          </ul>
        </div>
      }
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
