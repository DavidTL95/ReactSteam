import React from "react";
import "./Footer.css";
import { Container } from "react-bootstrap";
import twitter from "../../img/twitter.png";
import facebook from "../../img/facebook.png";
import instagram from "../../img/instagram.png";
import tiktok from "../../img/tiktok.png";
import youtube from "../../img/youtube.png";

const Footer = () => {
  return (
    <>
      <section className="triangleFooter">
        <Container fluid className="contenedorFooter" xs={12} md={12} xl={12}>
          <a href="" target="_blank">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="" target="_blank">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="" target="_blank">
            <img src={tiktok} alt="tiktok" />
          </a>
          <a href="" target="_blank">
            <img src={youtube} alt="youtube" />
          </a>
          <a href="" target="_blank">
            <img src={twitter} alt="twitter" />
          </a>
        </Container>
      </section>
    </>
  );
};

export default Footer;
