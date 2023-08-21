import NavBar from "./components/NavBar/NavBar";
import Item from "./components/ItemListContainer";


function App() {
  return (
    <div className="App">
     <NavBar/>
     <Item greeting={'Hola, un placer'} /> 
    </div>
  );
}

export default App;
