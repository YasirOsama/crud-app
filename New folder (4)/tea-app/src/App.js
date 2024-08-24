import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Abbas from './Abbas';
import Parent from './Parent';

function App() {
  const getdata=(data)=>{
    console.log(data)
  }
  
  

  
  return (
    <div className="App">
     hi
     {/* <Counter/>
     

     <Abbas  getdata={getdata}/> */}

    <Parent/>
    </div>
  );
}

export default App;
