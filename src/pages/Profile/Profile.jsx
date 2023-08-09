import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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

    return(
        <>
            {
                userDataApi?.id !== 0

                ? (<div>{userDataApi.name}</div>)

                : (<div>No hay datos de perfil.</div>)
            }
        </>
    )

}