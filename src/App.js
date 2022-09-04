import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';



function App() {
  return (
    <div className="App">
      <Navbar />
      {/*<ItemListContainer/>*/}
      <ItemDetailContainer/>


        
    </div>
  );
}




export default App;
