import { useDispatch, useSelector } from "react-redux";
import { favData, remove } from "../favSlice";
import { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import "./Fav.css";

export const Fav = () => {
  let reduxFavData = useSelector(favData);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(reduxFavData);
  }, [reduxFavData]);

  return (
    <>
      {reduxFavData.items.length > 0 ? (
        <Container fluid className="container" xs={12} md={12} xl={12}>
          {reduxFavData.items.map((deal) => {
            return (
              <>
                <div className="carrito" key={reduxFavData.gameID}>
                  <p>{deal}</p>
                  <Button
                    className="vaciarUno"
                    onClick={() => dispatch(remove([this]))}
                  >
                    Eliminar
                  </Button>
                </div>
              </>
            );
          })}
          <Button className="vaciar" onClick={() => dispatch(remove([]))}>
            Eliminar todos los favoritos
          </Button>
        </Container>
      ) : (
        <div className="container">No tienes items en el carrito.</div>
      )}
    </>
  );
};
