import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { Drop } from "../../common/Drop/Drop";
import { TextInput } from "../../common/TextInput/TextInput";
import { Button } from "react-bootstrap";
import { registerMe } from "../../services/apiCalls";

export const Register = () => {

    const navigate = useNavigate();
    const [drop, setDrop] = useState(false)
    const [userData, setUserData] = useState({
        id: 0,
        name: "",
        surname: "",
        age: 0,
        userID: 0
    })

    useEffect(() => {
        if(drop){
            // console.log("Hombre");
        }else{
            // console.log("Mujer");
        }
    }, [drop]);

    useEffect(() => {
        // console.log(userData)
    }, [userData]);

    const keepData = () => {
        registerMe(userData)
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
            <Drop state={setDrop} titulo={'Sexo: '}></Drop>
            <TextInput
            name="id"
            type="text"
            placeholder="write your id..."
            state={setUserData}
            />
            <TextInput
                name="name"
                type="text"
                placeholder="write your name..."
                state={setUserData}
            />
            <TextInput
                name="surname"
                type="text"
                placeholder="write your surname..."
                state={setUserData}
            />
            <TextInput
                name="age"
                type="text"
                placeholder="write your age..."
                state={setUserData}
            />
            <TextInput
                name="userId"
                type="text"
                placeholder="write your userId..."
                state={setUserData}
            />
            <Button onClick={()=>keepData()}>REGISTER ME!</Button>
        </>
    )
}