import { useState } from "react"

const Authenticate = ({token}) => {
  const [successMessage, setSuccesMessage] = useState(``)
  const handleClick = async () => {
    // console.log(`clicked`)
    const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", 
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, 
        }
      })
      const result = await response.json()
      // console.log(result)
      setSuccesMessage(result.message)
  }



  return(
    <>
      <h2>Authenticate</h2>
      {successMessage}
      <button onClick = {handleClick}>Authenticate Token</button>
    </>
  )
} 

export default Authenticate