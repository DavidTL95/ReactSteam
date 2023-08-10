import { useEffect } from "react";
import { useSelector } from "react-redux"

export const Favorites = () => {

    let reduxFavData = useSelector(cartData);

    useEffect(() => {
        console.log(reduxFavData);
    },[reduxFavData])

    return(
        <div className="contenedor">
            <i className="bi bi-cart"></i>
            {reduxFavData.items.length}
        </div>
    )
}