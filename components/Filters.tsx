"use client";
import { useState } from "react";
import CheckboxComponent from "./CheckboxComponent";

const Filters = () => {
  return (
    <>
      <div>
        <p>Статус</p>
        <CheckboxComponent
          name={"budget"}
          value={"budget"}
          checked={false}
          text={"статус автомобиля"}
         /*  disabled={false} */
        />
      </div>
    </>
  );
};

export default Filters;
