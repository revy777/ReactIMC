
import './App.css'
import CalculadoraIMC from './CalculadoraIMC'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageResultado from './PageResultado'


function App() {
  
  
  return (
       <BrowserRouter>
          <Routes>
             <Route path = "/" element = {<CalculadoraIMC></CalculadoraIMC>}></Route>
             <Route path = "/resultado" element = {<PageResultado></PageResultado>}></Route>
             
            
          </Routes>

       </BrowserRouter>





    
    
  )
}

export default App;
