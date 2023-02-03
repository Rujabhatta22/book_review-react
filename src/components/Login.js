import { useState,useEffect } from "react"
// import  axios  from "axios"
import { Button, Form, FormGroup, Input, Label } from "reactstrap"
import userService from "../services/userService"
import { useNavigate } from "react-router-dom"
function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const Navigate = useNavigate()

    const handleLogin=(e)=>{
        e.preventDefault()
        console.log(username, password)
        userService.login({username, password})
            .then(response=>{
                console.log(response.data)
                window.localStorage.setItem('token', response.data.token)
                window.alert(response.data.status)
                Navigate('/books')
            }).catch(err => window.alert(err.response.data.error))
    }
    

    return (
        <div>
            <h2>Login</h2>
            <Form>
                <FormGroup >
                    <Label for="username">
                        username
                    </Label>
                    <Input
                        id="Username"
                        name="username"
                        placeholder="Username"
                        type="text"
                        value={username}
                        onChange={(e)=> setUsername(e.target.value)}
                    />

                </FormGroup>
                {' '}
                <FormGroup >
                    <Label for="Password">
                        Password
                    </Label>
                    <Input
                        id="Password"
                        name="password"
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                    />

                </FormGroup>
                {' '}
                <Button color="primary" onClick={handleLogin}>
                    Submit
                </Button>
            </Form>

        </div>

    )
}

export default Login