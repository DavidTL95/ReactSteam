import { useDispatch, useSelector } from "react-redux"
import { favData, remove } from "../favSlice"
import { userData } from "../userSlice";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { newOrder } from "../../services/apiCalls";

export const Fav = () => {

    let reduxFavData = useSelector(favData);

    const dispatch = useDispatch();

    useEffect(() => {
        console.log(reduxFavData);
    },[reduxFavData])

    console.log(reduxFavData)

    return (
        <>
            {
                reduxFavData.items.length > 0

                ?(<div>{reduxFavData.items.map(
                    deal => {
                        return(
                            <div className="carrito" key={reduxFavData.gameID}>{reduxFavData.items}</div>
                        )
                    }
                )
            }
                <Button onClick={() => dispatch(remove([]))}>Vaciar carrito</Button>
                </div>


                ):(
                    <div>No tienes items en el carrito.</div>
                )
            }
        </>
    )

}