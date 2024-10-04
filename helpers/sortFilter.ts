import { FilterStoreForStateType } from "@/type";
import { Cars } from "@/type";

export const sortFilter = (
  checkFilter: FilterStoreForStateType[],
  afterArr: Cars[]
) => {
  let newArr1: Cars[] = [];
  let newArr2: Cars[] = [];
  let newArr3: Cars[] = [];
  let newArr4: Cars[] = [];

  checkFilter.map((el) => {
    if (el.model) {
      afterArr.map((item) => {
        if (el.model === item.model) {
          const checkEl = newArr1.includes(item);
          if (checkEl === false) {
            newArr1.push(item);
          }
        }
      });
    }
  });

  let timeArr = newArr1.length === 0 ? afterArr : newArr1;

  checkFilter.map((el) => {
    if (el.color) {
      timeArr.map((item) => {
        if (el.color === item.color) {
          const checkEl = newArr2.includes(item);
          if (checkEl === false) {
            newArr2.push(item);
          }
        }
      });
    }
  });

  let timeArr2: Cars[] = [];
  
  if (newArr2.length === 0 && newArr1.length === 0) {
    timeArr2 = afterArr;
  }

  if (newArr2.length === 0 && newArr1.length != 0) {
    timeArr2 = newArr1;
  }

  checkFilter.map((el) => {
    if (el.status) {
      timeArr2.map((item) => {
        if (el.status === item.status) {
          const checkEl = newArr3.includes(item);
          if (checkEl === false) {
            newArr3.push(item);
          }
        }
      });
    }
  });

  let timeArr3 = newArr3.length === 0 ? afterArr : newArr3;

  checkFilter.map((el) => {
    if (el.typeCar) {
      timeArr3.map((item) => {
        if (el.typeCar === item.typeCar) {
          const checkEl = newArr4.includes(item);
          if (checkEl === false) {
            newArr4.push(item);
          }
        }
      });
    }
  });

  return newArr4;
};
