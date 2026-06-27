
import './App.css'
import Routess from './routes/Routess';
import { BrowserRouter } from "react-router-dom";

const App =()=>{
  return (
    <BrowserRouter>
      <Routess/>
    </BrowserRouter> 
  );
}

export default App;
