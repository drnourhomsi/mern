import { useState, useEffect } from 'react'
import Axios from 'axios'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Badge, ListGroup, Form, Button } from 'react-bootstrap'

export default function App() {

  const api = "http://localhost:3001"
  const [users, setUsers] = useState([])
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  
  useEffect(() => {
    Axios.get(`${api}/users`)
      .then(res => setUsers(res.data))
  }, [users])
  
  const createUser = () => {
    if (name && age && email) {
      Axios.post(`${api}/createUser`, { name, age, email })
        .then(res => res.data)
    }
  }
  
  return (
    <Container>
      
      <Form className='form'>
        <Form.Control type="text" placeholder='Name' onChange={e => setName(e.target.value)} />
        <Form.Control type="number" placeholder='Age' onChange={e => setAge(e.target.value)} />
        <Form.Control type="text" placeholder='Email' onChange={e => setEmail(e.target.value)} />
        <Button variant="success" type="submit" onClick={createUser}>Create User</Button>
      </Form>

      <div className="result">
        {users.map(({ _id, name, age, email }) => {
          return (
            <ListGroup key={_id}>
              <ListGroup.Item variant="dark" className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{name}</div>{email}
                </div>
                <Badge bg="success" pill>{age}</Badge>
              </ListGroup.Item>
            </ListGroup>
          )
        })}
      </div>

    </Container>
  );
}