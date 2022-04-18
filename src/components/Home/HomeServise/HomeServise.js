import React from "react";
import useServices from "../../Shared/useServise/useSrvise";
import Servise from "../Servise/Servise";

const HomeServise = () => {
  const [servises, setServises] = useServices([]);
  const homeServise = servises.slice(0, 3);

  console.log(servises);
  return (
    <div className="servises-contsiner">
      {homeServise.map((servise) => (
        <Servise key={Servise.id} servise={servise}></Servise>
      ))}
    </div>
  );
};

export default HomeServise;
