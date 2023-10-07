import NavBar from "./components/NavBar/NavBar";
import Item from "./components/ItemListContainer/index";
import ItemDetailCountainer from "./components/ItemDetailContainer/ItemDetailCountainer";
import Cart from "./components/Cart/Cart"
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { CartProvider } from "./context/CartContext";


function App() {
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path= '/' element={<Item/>}/>
        <Route path= '/category/:categoryId' element={<Item/>}/>
        <Route path= '/item/:itemId' element={<ItemDetailCountainer/>}/>
        <Route path= '*' element={<h1>404 NOT FOUND</h1>}/>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
