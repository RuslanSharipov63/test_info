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
    let newArr2: Cars[] = [];
    const newArr3: Cars[] = [];

    param.map(value => {
      if (value.checked) {
        newArr.push(value)
      }
    })
    newArr2 = sortFilter(newArr, carsStore);

  setCarsData([...newArr2]);


/*     if (newArr.length === 1) {
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
          let checkElForCounter = Object.values(item).includes(el);
          if (checkElForCounter) {
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
    } */

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
    {(carsData.length === 0 && checkAddFilter != true) &&
      <p className="flex justify-center">Загрузка...</p>
    }
    {checkAddFilter != false && <p className="flex justify-center">Совпадения не найдены.</p>}
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
