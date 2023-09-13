import NavBar from "./components/NavBar/NavBar";
import Item from "./components/ItemListContainer/index";
import ItemDetailCountainer from "./components/ItemDetailContainer/ItemDetailCountainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path= '/' element={<Item/>}/>
        <Route path= '/category/:categoryId' element={<Item/>}/>
        <Route path= '/item/:itemId' element={<ItemDetailCountainer/>}/>
        <Route path= '*' element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
