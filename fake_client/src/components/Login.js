import React , { useRef }from 'react'
import  {Container, Form, Button} from 'react-bootstrap'
import { v4 as uuidV4 } from 'uuid'
import './AppChat'



export default function Login({ onIdSubmit }){
    
    const idRef = useRef()


    function handleSubmit(e) {
        e.preventDefault()

        onIdSubmit(idRef.current.value)
    }

    function createNewID() {
        onIdSubmit(uuidV4())
    }


return (
    <Container>
        <Form  className='use-bootstrap' onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Enter your Id</Form.Label>
              <Form.Control type="text" ref={idRef} required/>
            </Form.Group>
            <Button type="submit">Login</Button>
            <Button onClick={createNewID} >Create A New Id</Button>
        </Form>
    </Container>
    
 )
}
