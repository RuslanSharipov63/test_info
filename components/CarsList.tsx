"use client";
import { useEffect, useState } from "react";
import { carsStore } from "@/CarsStore";
import { Cars } from "@/type";
import Car from "./Car";
import Filters from "./Filters";
import { FilterStoreForStateType } from "@/type";

const CarList = () => {
  const [carsData, setCarsData] = useState<Cars[]>([]);

  useEffect(() => {
    setCarsData([...carsStore]);
  }, []);

  const searchFilters = (param: FilterStoreForStateType[]) => {
    const newArr: FilterStoreForStateType[] = [];
    const newArr2: Cars[] = [];
    param.map((el) => {
      if (el.checked === true) {
        newArr.push(el);
      }
    });
    carsStore.map((item) => {
      newArr.map((el) => {
        if (
          item.model === el.model ||
          item.color === el.color ||
          item.status === el.status ||
          item.typeCar === el.typeCar
        ) {
          newArr2.push(item);
        }
      });
    });
    const set: any = new Set(newArr2);

    setCarsData([...set]);
  };

  return (
    <>
      <Filters searchFilters={searchFilters} />
      {carsData.length === 0 && (
        <p className="flex justify-center">Загрузка...</p>
      )}
      <div className="grid sm:grid-cols-5 gap-4 m-4">
        {carsData.length > 0 &&
          carsData.map((el) => {
            return <Car cars={el} key={el.id} />;
          })}
      </div>
    </>
  );
};

export default CarList;
