import {BrowserRouter, Routes, Route} from "react-router-dom"
import Contato from "./Contato"
import Home from "./Home"
import Sobre from "./Sobre"

// BrowserRouter deve ser o componente pai que envolve tudp que depende do react-router

// routes define a area em que vamos colocar os nossos route

//o route recebe um caminho em path, se esse caminho for o mesmo da url ele ira o componetne que estiver dentro do element={}

const App = () => {
    return(
     <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/contato" element={<Contato/>} />
     </Routes>
     </BrowserRouter>
    )
}

export default App