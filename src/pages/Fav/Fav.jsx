import { useDispatch, useSelector } from "react-redux"
import { favData, remove } from "../favSlice"
import { userData } from "../userSlice";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { newOrder } from "../../services/apiCalls";

export const Fav = () => {

    let reduxFavData = useSelector(favData);
    const reduxUserData = useSelector(userData);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(reduxFavData);
    },[reduxFavData])

    const placeOrder = () => {
        console.log(reduxUserData);
        (reduxFavData.items.length === 1)
        ?(
            newOrder(reduxFavData.items[0].gameID, reduxUserData.credentials.id)
            .then(
                result => {
                    console.log(result);
                }
            )
            .catch(error => console.log(error))
        )
        :(
            alert("No se puede comprar más de un artículo.")
        )
    }

    console.log(reduxFavData)

    return (
        <>
            {
                reduxFavData.items.length > 0

                ?(<div>{reduxFavData.items.map(
                    deal => {
                        return(
                            <div className="carrito" key={deal.gameID}>{deal.title}</div>
                        )
                    }
                )
            }
                <Button onClick={() => dispatch(remove([]))}>Vaciar carrito</Button>
                <Button onClick={() => placeOrder()}>Finalizar pedido</Button>
                </div>
                ):(
                    <div>No tienes items en el carrito.</div>
                )
            }
        </>
    )

}