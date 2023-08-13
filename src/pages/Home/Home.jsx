import React, { useEffect, useState } from "react";
import { getDeals, getDealsByTitle } from "../../services/apiCalls";
import { DealCard } from "../../common/DealCard/DealCard";
import { Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import { useDebounce } from "use-debounce";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addDeal } from "../detailSlice";

export const Home = () => {
  const [deals, setDeals] = useState([]);

  //BÚSQUEDA LOCAL
  const [search, setSearch] = useState("");
  const [debounceSearch] = useDebounce(search, 750);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //BÚSQUEDA LOCAL

  useEffect(() => {
    if (debounceSearch) {
      getDealsByTitle(debounceSearch).then((res) => {
        setDeals(res);
      });
    } else {
      getDeals().then((res) => setDeals(res));
    }
  }, [debounceSearch]);

  const inputHandler = ({ target }) => {
    const { value } = target;
    setSearch(value);
  };

  //FUNCIÓN DETAIL.

  const seeDetail = (item) => {
    dispatch(addDeal(item));
    navigate("/detail");
  };

  return (
    <Container fluid className="contenedorHome" xs={12} md={12} xl={12}>
      <Row></Row>
      <input
        className="buscador"
        name="criteria"
        type="text"
        placeholder="Search..."
        onChange={inputHandler}
      />
      <Row className="contenedorTarjetas">
        <>
          {deals?.map((deal) => {
            return (
              <Col
                onClick={() => seeDetail(deal)}
                className="colTarjetas"
                xs={10}
                md={4}
                xl={3}
                key={deal.gameID}
              >
                <DealCard
                  title={deal.title}
                  score={deal.metacriticScore}
                  imagen={deal.thumb}
                  precioOriginal={deal.normalPrice}
                  precio={deal.salePrice}
                  descuento={deal.savings}
                  id={deal.gameID}
                />
              </Col>
            );
          })}
        </>
      </Row>
    </Container>
  );
};

export default Home;
