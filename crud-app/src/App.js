
import './App.css';
import Create from './components/Create';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from './components/Read';

function App() {
  return (
    <div className="App">
     
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route excat path='/' element={<Create/>}/>
        <Route excat path='/read' element={<Read/>}/>
      </Routes>
    
      </BrowserRouter>
   
    </div>
  );
}

export default App;


// https://6625e902052332d55320fec5.mockapi.io/crud-app