"use client";
import { useState, FC } from "react";
import CheckboxComponent from "./CheckboxComponent";
import { workFilters } from "@/FiltersStore";
import { FilterStoreForStateType } from "@/type";
import { Button } from "@/components/ui/button";


type FiltersProps = {
  searchFilters: (pram: FilterStoreForStateType[]) => void;
};
const Filters: FC<FiltersProps> = ({ searchFilters }) => {
  const [filtersState, setFiltersState] = useState<FilterStoreForStateType[]>(
    []
  );

 let arrForFilters: FilterStoreForStateType[];

  useState(() => {
    arrForFilters = workFilters("");
    if (arrForFilters) {
      setFiltersState(arrForFilters);
    }
  });

  const handleChangeStatus = (param: string) => {
    const newArr = workFilters(param);
    setFiltersState(newArr);
    console.log(filtersState)
  };

 

  return (
    <>
      <div className="flex">
        <div className="flex flex-col gap-2 p-2">
          <p>Модель</p>

          {filtersState.map((el: FilterStoreForStateType) =>
            el.typeCheck === "model" ? (
              <CheckboxComponent
                key={el.id}
                name={el.model}
                value={el.model}
                text={el.model}
                disabled={el.disabled}
                checked={el.checked}
                handleChangeStatus={handleChangeStatus}
              />
            ) : null
          )}
        </div>
        <div className="flex flex-col gap-2 p-2">
          <p>Цвет</p>
          {filtersState.map((el: FilterStoreForStateType) =>
            el.typeCheck === "color" ? (
              <CheckboxComponent
                key={el.id}
                name={el.color}
                value={el.color}
                text={el.color}
                disabled={el.disabled}
                checked={el.checked}
                handleChangeStatus={handleChangeStatus}
              />
            ) : null
          )}
        </div>
        <div className="flex flex-col gap-2 p-2">
          <p>Статус</p>
          {filtersState.map((el: FilterStoreForStateType) =>
            el.typeCheck === "status" ? (
              <CheckboxComponent
                key={el.id}
                name={el.status}
                value={el.status}
                text={el.status}
                checked={el.checked}
                disabled={el.disabled}
                handleChangeStatus={handleChangeStatus}
              />
            ) : null
          )}
        </div>

        <div className="flex flex-col gap-2 p-2">
          <p>Тип</p>
          {filtersState.map((el: FilterStoreForStateType) =>
            el.typeCheck === "typecar" ? (
              <CheckboxComponent
                key={el.id}
                name={el.typeCar}
                value={el.typeCar}
                text={el.typeCar}
                disabled={el.disabled}
                checked={el.checked}
                handleChangeStatus={handleChangeStatus}
              />
            ) : null
          )}
        </div>
      </div>
      <Button onClick={() => searchFilters(filtersState)} className="ml-2">
        Применить
      </Button>
    </>
  );
};

export default Filters;
