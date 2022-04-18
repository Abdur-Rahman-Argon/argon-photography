import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Servise.css";

const Servise = (props) => {
  const { name, img, description, price } = props.servise;
  console.log(props.servise.img);
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
          <b>Description:</b>
        </p>
      </div>
      <button className="book-btn">
        <p className="btn-text">Checkout Servise </p>
      </button>
    </div>
  );
};

export default Servise;
