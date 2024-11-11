import { useState } from "react"

const SignUpForm = ({setToken}) => {
  const [username, setUsername] = useState(``)
  const [password, setPassword] = useState(``)

  const handleSubmit = async (event) => {
    event.preventDefault()
    // console.log(`submitted`)
    const response = await fetch(`https://fsa-jwt-practice.herokuapp.com/signup`, {
      method:`post`,
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
    const result = await response.json()
    // console.log(result.token)
    setToken(result.token)
  }

  return (
    <>
      <h2>Sign Up</h2>

      <form onSubmit={handleSubmit}>
        <section>
          <input 
            placeholder="Username"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value)
            }}
          >
          </input>
        </section>

        <section>
          <input 
            placeholder="Password"
            type="password"
            onChange={(event) => {
              setPassword(event.target.value)
            }}
          >
          </input>
        </section>

        <button>submit</button>
      </form>
    </>
  )
}

export default SignUpForm