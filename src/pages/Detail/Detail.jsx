
// import { useEffect, useState } from 'react'
// import { useParams } from "react-router-dom"
// import { getDealsByID } from "../../services/apiCalls"
import { Button, Col, Container, Row } from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux'
import { dealData } from '../detailSlice'

import './Detail.css'
import { userData } from "../userSlice"
import { add } from "../favSlice"

export const Detail = () => {

    const reduxDealData = useSelector(dealData);

    const reduxUserData = useSelector(userData);

    const dispatch = useDispatch();

  return (
    <>
        <Container fluid className="contenedorDetail" xs={10} md={8} lg={6}>
                <div className="DetailCard">
                    <img src={reduxDealData.thumb} alt="Imagen videojuego" className="DetailCard-header"/>
                    <div className="DetailCard-body">
                        <div className="DetailCard-body-contentimg">
                            <p className="DetailCard-body-contentimg-h2">{reduxDealData.metacriticScore}</p>
                        </div>
                        <p className="DetailCard-body-title">{reduxDealData.title}</p>
                    </div>
                    <div className="DetailCard-footer">
                        <div className="DetailCard-footer-precio preciOriginal">
                            <h3>Precio original</h3>
                            <h4>{reduxDealData.originalPrice}$</h4>
                        </div>
                    <div className="DetailCard-footer-precio precioRebajado">
                        <h3>Precio rebajado</h3>
                        <h4>{reduxDealData.salePrice}$</h4>
                    </div>
                    <div className="DetailCard-footer-precio descuento">
                        <h3>Descuento</h3>
                        <h4>{Math.round(reduxDealData.savings)}%</h4>
                    </div>
                    </div>
                </div>
            {reduxUserData.credentials.token
                ?(
                    <Row>
                        <Button onClick={() => dispatch(add(reduxDealData.character))}>Add</Button>   
                    </Row>
                ) : (
                    <Row>
                        
                    </Row>    
                    )
                    }
        



        </Container>
    </>
  )
}

export default Detail