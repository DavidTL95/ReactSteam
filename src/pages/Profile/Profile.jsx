import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userData } from "../userSlice";
import { modifyMe, profileUser } from "../../services/apiCalls";
import './Profile.css'
import { Button, Container } from "react-bootstrap";
import { TextInput } from "../../common/TextInput/TextInput";

export const Profile = () => {

    const reduxUserCredentials = useSelector(userData);
    const navigate = useNavigate();
    const [userDataApi, setUserDataApi] = useState({
        id: 0,
        name: "",
        surname: "",
        age: 0,
        userID: 0
    })

    useEffect(() => {
        if(!reduxUserCredentials.credentials?.token){
            navigate("/");
        };

        if(reduxUserCredentials.credentials.id){
            profileUser(reduxUserCredentials.credentials.id)
            .then(
                res => {
                    setUserDataApi(res)
                }
            )
            .catch(error => console.log(error))
        }
    },[reduxUserCredentials])

    const keepData = () => {
        modifyMe(userDataApi.id,userDataApi)
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

    return(
        <>
            {
                userDataApi?.id !== 0
                ? (
                    <Container fluid className="contenedorRegistro">
                        <TextInput
                            name="name"
                            type="text"
                            placeholder={userDataApi.name}
                            state={setUserDataApi}
                        />
                        <TextInput
                            name="surname"
                            type="text"
                            placeholder={userDataApi.surname}
                            state={setUserDataApi}
                        />
                        <TextInput
                            name="age"
                            type="text"
                            placeholder={userDataApi.name}
                            state={setUserDataApi}
                        />
                        <Button className="registrame" onClick={()=>keepData()}>ENVIAR</Button>
                    </Container>
                    )

                : (<div>No hay datos de perfil.</div>)
            }



        </>
    )

}