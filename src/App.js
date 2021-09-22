import logo from './logo.svg';
import './App.css';
import Item from './Component/MyItem';

function App() {
  const listPeople = [
    "Juancho", 
    "Leticia",
  ];
  let id = 0;
  let items = [];
  for(let item of listPeople){
    id += 1;
    items.push(
      <Item key={id} name={item} /> 
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {items}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;
