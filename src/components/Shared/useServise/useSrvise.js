import { useEffect, useState } from "react";

const useServices = () => {
  const [servises, setServises] = useState([]);
  useEffect(() => {
    fetch("servise.json")
      .then((res) => res.json())
      .then((data) => setServises(data));
  }, []);
  return [servises, setServises];
};

export default useServices;
