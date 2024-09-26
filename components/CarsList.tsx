"use client";
import { useEffect, useState } from "react";
import { carsStore } from "@/CarsStore";
import { Cars } from "@/type";
import Car from "./Car";

const CarList = () => {
  const [carsData, setCarsData] = useState<Cars[]>([]);

  useEffect(() => {
    setCarsData([...carsStore]);
  }, []);
  return (
    <>
      {carsData.length === 0 && <p>Загрузка...</p>}
      {carsData.length > 0 &&
        carsData.map((el) => {
          return <Car cars={el} key={el.id} />;
        })}
    </>
  );
};

export default CarList;
