import { useState,useEffect } from "react"
import  axios  from "axios"
import { Button, Form, FormGroup, Input, Label } from "reactstrap"
function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
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
                    />

                </FormGroup>
                {' '}
                <Button>
                    Submit
                </Button>
            </Form>

        </div>

    )
}

export default Login