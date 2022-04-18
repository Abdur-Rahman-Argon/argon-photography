import React, { useEffect, useState } from "react";
import useServices from "../../Shared/useServise/useSrvise";
import Servise from "../Servise/Servise";

const Services = () => {
  const [servises, setServises] = useServices([]);
  console.log(servises);
  return (
    <div className="servises-contsiner">
      {servises.map((servise) => (
        <Servise key={Servise.id} servise={servise}></Servise>
      ))}
    </div>
  );
};

export default Services;
