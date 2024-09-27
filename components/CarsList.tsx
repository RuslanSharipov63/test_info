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
      {carsData.length === 0 && <p className="flex justify-center">Загрузка...</p>}
      <div className="flex justify-between gap-4 grid-cols-2 max-w-[1200px]">
        {carsData.length > 0 &&
          carsData.map((el) => {
            return <Car cars={el} key={el.id} />;
          })}
      </div>
    </>
  );
};

export default CarList;
