import './App.css';
import Sidebar from './component/Sidebar';
import About from './component/About';
import Home from "./component/Home"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Post from './component/Post';
import Privacy from './component/Privacy';
import Term from './component/Term';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Sidebar/>
     <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Post/>}/>
        <Route path='/privacy' element={<Privacy/>}/>
        <Route path='/term' element={<Term/>}/>
     </Routes>
    
       
        </BrowserRouter>
    </div>
  );
}

export default App;
