import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from "react-bootstrap"

export const LoginForm = ({}) => {
    return(
        <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email"/>
            </Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password"/>
        </Form>
    )
}