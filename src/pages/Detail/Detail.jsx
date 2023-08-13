import { Button, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { dealData } from "../detailSlice";

import "./Detail.css";
import { userData } from "../userSlice";
import { add } from "../favSlice";
import metacritic from "../../img/metacritic.png";

export const Detail = () => {
  const reduxDealData = useSelector(dealData);

  const reduxUserData = useSelector(userData);

  const dispatch = useDispatch();

  const linlReviews = "https://www.metacritic.com";

  return (
    <>
      <Container fluid className="contenedorDetail" xs={12} md={12} lg={12}>
        <div className="DetailCard" xs={12} md={12} lg={6}>
          <img
            src={reduxDealData.thumb}
            alt="Imagen videojuego"
            className="DetailCard-header"
          />
          <div className="DetailCard-body">
            <div className="DetailCard-body-contentimg">
              <p className="DetailCard-body-contentimg-h2">
                {reduxDealData.metacriticScore}
              </p>
            </div>
            <p className="DetailCard-body-title">{reduxDealData.title}</p>
          </div>
          <div className="DetailCard-footer">
            <h2>Puntuación de la rebaja</h2>
            <h3>{reduxDealData.dealRating}/10</h3>
            <h2>Valoración de Steam</h2>
            <h3>{reduxDealData.steamRatingText}</h3>
            <a
              target="_blank"
              href={linlReviews + reduxDealData.metacriticLink}
            >
              <img className="metacritic" src={metacritic}></img>
            </a>
          </div>
        </div>

        <div className="DetailCardPrecios" xs={12} md={12} lg={6}>
          <div className="DetailCard-footer-precio preciOriginalPrecios">
            <h3>Precio original</h3>
            <h4>{reduxDealData.normalPrice}$</h4>
          </div>
          <div className="DetailCard-footer-precio descuentoPrecios">
            <h3>Descuento</h3>
            <h4>{Math.round(reduxDealData.savings)}%</h4>
          </div>
          <div className="DetailCard-footer-precio precioRebajadoPrecios">
            <h3>Precio rebajado</h3>
            <h4>{reduxDealData.salePrice}$</h4>
          </div>
          {reduxUserData.credentials.token ? (
            <Row>
              <Button
                className="favButton"
                onClick={() => dispatch(add(reduxDealData.title))}
              >
                Favorito
              </Button>
            </Row>
          ) : (
            <Row></Row>
          )}
        </div>
      </Container>
    </>
  );
};

export default Detail;
