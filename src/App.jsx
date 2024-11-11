import { useState } from "react"

import Authenticate from "./components/Authenticate.jsx"
import SignUpForm from "./components/SignUpform.jsx"

const App = () => {
  const [token, setToken] = useState(``)


  return (
    <>
      <SignUpForm setToken = {setToken}/>
      <Authenticate token = {token}/>
    </>
  )
}

export default App
