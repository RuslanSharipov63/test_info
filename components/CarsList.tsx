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
    const newArr: string[] /* : FilterStoreForStateType[] */ = [];
    const newArr2: Cars[] = [];
    param.map((el) => {
      if (el.checked === true) {
        if (el.model != undefined) {
          newArr.push(el.model);
        }
        if (el.status != undefined) {
          newArr.push(el.status);
        }
        if (el.typeCar != undefined) {
          newArr.push(el.typeCar);
        }
        if (el.color != undefined) {
          newArr.push(el.color);
        }
      }
    });

    if (newArr.length === 1) {
      carsStore.map((item) => {
        if (item.model === newArr[0]) {
          const checkEl = newArr2.includes(item);
          if (checkEl === false) {
            newArr2.push(item);
          }
        }
      });
    }

    if (newArr.length > 1) {
      carsStore.map((item) => {
        let counter = 0;
        newArr.map((el) => {
          if (item.includes(newArr["el"])) {
            counter++;
          }
          if (counter === newArr.length) {
            const checkEl = newArr2.includes(item);
            if (checkEl === false) {
              newArr2.push(item);
            }
          }
        });
      });
    }

    /* carsStore.map((item) => {
      newArr.map((el) => {
        if (
         el.model === item.model
        ) {
          const checkEl = newArr2.includes(item);
          if (checkEl === false) {
            newArr2.push(item);
          }

        }
      });
    }); 
    */

    setCarsData([...newArr2]);
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
