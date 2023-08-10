import { useSelector } from "react-redux"
import { favData } from "../../pages/favSlice"
import { useEffect } from "react";


export const FavIcon = () => {

    let reduxFavData = useSelector(favData);

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