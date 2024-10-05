"use client";
import { useEffect, useState } from "react";
import { carsStore } from "@/CarsStore";
import { Cars } from "@/type";
import Car from "./Car";
import Filters from "./Filters";
import { FilterStoreForStateType } from "@/type";
import { sortFilter } from "@/helpers/sortFilter";

const CarList = () => {
  const [carsData, setCarsData] = useState<Cars[]>([]);
  const [checkAddFilter, setCheckAddFilter] = useState<boolean>(false);

  useEffect(() => {
    setCarsData([...carsStore]);
  }, []);

  const searchFilters = (param: FilterStoreForStateType[]) => {
    const newArr: FilterStoreForStateType[] = [];
    let resultArr: Cars[] | undefined = [];

    param.map((value) => {
      if (value.checked) {
        newArr.push(value);
      }
    });
    resultArr = sortFilter(newArr, carsStore);
    if (resultArr) {
      setCarsData([...resultArr]);
      setCheckAddFilter(false);
    }

    if (resultArr?.length === 0) {
      setCheckAddFilter(true);
    }
  };

  return (
    <>
      <Filters searchFilters={searchFilters} />
      {carsData.length === 0 && checkAddFilter != true && (
        <p className="flex justify-center">Загрузка...</p>
      )}
      {checkAddFilter != false && (
        <p className="flex justify-center">Совпадения не найдены.</p>
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
