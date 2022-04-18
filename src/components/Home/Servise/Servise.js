import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Servise.css";

const Servise = ({ servise }) => {
  const { name, img, description, price } = servise;
  console.log(servise.img);

  const checkOut = () => {
    console.log(servise);
  };
  return (
    <div className="servise">
      <img src={img} alt=""></img>
      <div className="servise-info">
        <h4 className="servise-name">{name}</h4>
        <p>
          Servise Fee:
          <b>
            <i> $ {price}</i>
          </b>
        </p>
        <p>
          <b>Description:{description}</b>
        </p>
      </div>
      <Link to="/checkout">
        <button onClick={() => checkOut(servise)} className="book-btn">
          <p className="btn-text">Checkout Servise </p>
        </button>
      </Link>
    </div>
  );
};

export default Servise;
