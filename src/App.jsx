import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import PokeInfo from "./pages/PokeInfo"

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/:id" element={<PokeInfo/>}></Route>
      </Routes>
    </>
  )
}

export default App
