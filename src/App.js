import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarBoots from './components/Navbar/Navbar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';



function App() {
  return (
  <BrowserRouter>
  <NavbarBoots />
  <Routes>
    <Route exact path='/' element= {<ItemListContainer/>}/>
    <Route exact path='/producto/:idproducto' element= {<ItemListContainer/>}/>
    <Route exact path='/categoria/:idcategoria' element= {<ItemListContainer/>}/>
    <Route exact path='/detalle/:idproducto' element= {<ItemDetailContainer/>}/>
  </Routes>
  
  </BrowserRouter>

  )
}





export default App;
