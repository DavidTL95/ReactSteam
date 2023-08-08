import React from "react";
import "./DealCard.css";
// import "./DealCard.scss";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const DealCard = ({ title, score, imagen, precioOriginal, precio, descuento, id}) => {

  var style = {
    backgroundImage: `url(${imagen})`,
  };

  const navigate = useNavigate();

  return (
    <main className="container">
        <article className="card">
            <img src={imagen} alt="Imagen videojuego" className="card-header"/>
            <div className="card-body">
                <div className="card-body-contentimg">
                    <h2 className="card-body-contentimg-h2">{score}</h2>
                </div>
                <h2 className="card-body-title">{title}</h2>
            </div>
            <div className="card-footer">
                <div className="card-footer-precio">
                    <h3>Precio original</h3>
                    <h4>{precioOriginal}$</h4>
                </div>
                <div className="card-footer-precio">
                    <h3>Precio rebajado</h3>
                    <h4>{precio}$</h4>
                </div>
                <div className="card-footer-precio descuento">
                    <h3>Descuento</h3>
                    <h4>{Math.round(descuento)}%</h4>
                </div>
            </div>
        </article>
    </main>
  );
};
