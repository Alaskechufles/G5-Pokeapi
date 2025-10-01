import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import PokeInfo from "./pages/PokeInfo"
import Father from "./components/Father"
import UserContext from "./context/UserContext"
import Mother from "./components/Mother"
import { useState } from "react"

function App() {
  let user = {name:"Andres", lastname:"Huarsaya"}
  let user2 = {name:"Manuel", lastname:"Koala"}
  const frutas = ["fresa","pera"]

  const [isOpen, setIsOpen] = useState(true)


  return (
    <>
      <UserContext.Provider value={{user,user2,frutas,isOpen,setIsOpen}}>
        {/* <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/:id" element={<PokeInfo/>}></Route>
        </Routes> */}
        <Father user={user}></Father>
      <Mother></Mother>
      </UserContext.Provider>
    </>
  )
}

export default App
