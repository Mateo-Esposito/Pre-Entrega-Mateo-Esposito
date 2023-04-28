import './App.css';
import NavBar from './Component/NavBar/NavBar';
import ItemListContainer from './Component/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <ItemListContainer greeting={"Opti-Tecnology"}/>
      <NavBar />
    </div>
  );
}

export default App;
