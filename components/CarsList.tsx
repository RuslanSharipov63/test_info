"use client";
import { useEffect, useState } from "react";
import { carsStore } from "@/CarsStore";
import { Cars } from "@/type";
import Car from "./Car";
import Filters from "./Filters";

const CarList = () => {
  const [carsData, setCarsData] = useState<Cars[]>([]);

  useEffect(() => {
    setCarsData([...carsStore]);
  }, []);
  return (
    <>
      <Filters />
      {carsData.length === 0 && (
        <p className="flex justify-center">Загрузка...</p>
      )}
      <div className="grid grid-cols-5 gap-4 m-4">
        {carsData.length > 0 &&
          carsData.map((el) => {
            return <Car cars={el} key={el.id} />;
          })}
      </div>
    </>
  );
};

export default CarList;
