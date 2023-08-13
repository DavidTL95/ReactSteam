import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { getUsers, modifyMe } from '../../services/apiCalls';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Admin.css'
import { TextInput } from '../../common/TextInput/TextInput';
import { TextInputAdmin } from '../../common/TextInputAdmin/TextInputAdmin';
import { remove } from '../userSlice';

export const Admin = () => {

  const [users, setUsers] = useState([])

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userDataApi, setUserDataApi] = useState({
})

  useEffect(() => {
    getUsers()
    .then((res) => {
      setUsers(res)
    })
    .catch((error) => console.log(error))
  }, [])

  const keepData = (id) => {
    modifyMe(id,userDataApi)
    .then(
        res => {
            if(res.id !== 0){
                setTimeout(() => {
                    navigate("/login")
                }, 750);
            }
        }
    )
    .catch(error => console.log(error))
}

  return (
    <>
      <Container fluid className="contenedorUsuarios" xs={12} md={12} xl={12}>
        <Row>
          <>
            {users?.map((user) => {
              return(
            <Col className='usuario' key={user.id}>
            <Row className='rowUsuario'>
            Nombre:
            <TextInputAdmin
                name="name"
                type="text"
                placeholder={user.name}
                state={setUserDataApi}
            />
            </Row>
            <Row className='rowUsuario'>
            Apellido:
            <TextInputAdmin
                name="surname"
                type="text"
                placeholder={user.surname}
                state={setUserDataApi}
            />
            </Row>
                <Row className='rowUsuario'>
                              Edad:
            <TextInputAdmin
                name="age"
                type="text"
                placeholder={user.age}
                state={setUserDataApi}
            />
                </Row>
<Row className='rowUsuario'>
              Correo:
            <TextInputAdmin
                name="email"
                type="text"
                placeholder={user.email}
                state={setUserDataApi}
            />
</Row>
<Row className='rowUsuario'>
              Contraseña:
            <TextInputAdmin
                name="password"
                type="text"
                placeholder={user.password}
                state={setUserDataApi}
            />
</Row>
<Row className='rowUsuario'>
              ID:
            <TextInputAdmin
                name="id"
                type="text"
                placeholder={user.id}
                state={setUserDataApi}
            />
</Row>
  <Row className='rowUsuario'>



            <Button className="boton" onClick={()=>keepData(user.id)}>ENVIAR</Button>
            <Button className="boton" onClick={()=>dispatch([remove({})])}>ELIMINAR</Button>
            </Row>

          </Col>
              )
            })}
          </>
        </Row>
      </Container>
    </>
  )
}