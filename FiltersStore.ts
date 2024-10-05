import { FiltersStore } from "./type";

export const filterStore: FiltersStore = {
  budget: {
    id: 1,
    status: "budget",
    typeCheck: "status",
    checked: false,
    disabled: false,
  },
  premium: {
    id: 2,
    status: "premium",
    typeCheck: "status",
    checked: false,
    disabled: false,
  },
  work: {
    id: 3,
    status: "work",
    typeCheck: "status",
    checked: false,
    disabled: false,
  },
  passenger: {
    id: 4,
    typeCheck: "typecar",
    typeCar: "passenger",
    checked: false,
    disabled: false,
  },
  cargo: {
    id: 5,
    typeCar: "cargo",
    typeCheck: "typecar",
    checked: false,
    disabled: false,
  },
  bmw: {
    id: 6,
    model: "BMW",
    typeCheck: "model",
    checked: false,
    disabled: false,
  },
  lada: {
    id: 7,
    model: "LADA",
    typeCheck: "model",
    checked: false,
    disabled: false,
  },
  kamaz: {
    id: 8,
    model: "KAMAZ",
    typeCheck: "model",
    checked: false,
    disabled: false,
  },
  gaz: {
    id: 9,
    model: "GAZ",
    typeCheck: "model",
    checked: false,
    disabled: false,
  },
  uaz: {
    id: 10,
    model: "UAZ",
    typeCheck: "model",
    checked: false,
    disabled: false,
  },
  mersedes: {
    id: 11,
    model: "MERSEDES",
    typeCheck: "model",
    checked: false,
    disabled: false,
  },
  chery: {
    id: 12,
    model: "CHERY",
    typeCheck: "model",
    checked: false,
    disabled: false,
  },
  red: {
    id: 13,
    color: "red",
    typeCheck: "color",
    checked: false,
    disabled: false,
  },
  grey: {
    id: 14,
    typeCheck: "color",
    color: "grey",
    checked: false,
    disabled: false,
  },
  green: {
    id: 15,
    typeCheck: "color",
    color: "green",
    checked: false,
    disabled: false,
  },
  white: {
    id: 16,
    typeCheck: "color",
    color: "white",
    checked: false,
    disabled: false,
  },
  black: {
    id: 17,
    typeCheck: "color",
    color: "black",
    checked: false,
    disabled: false,
  },
  blue: {
    id: 18,
    typeCheck: "color",
    color: "blue",
    checked: false,
    disabled: false,
  },
  orange: {
    id: 19,
    typeCheck: "color",
    color: "orange",
    checked: false,
    disabled: false,
  },
  metallic: {
    id: 20,
    typeCheck: "color",
    color: "metallic",
    checked: false,
    disabled: false,
  },
};

export const workFilters = (param: string) => {
  let timeArr = [];

  if (param != "") {
    let paramLowerCase = param.toLowerCase();
    filterStore[paramLowerCase].checked = !filterStore[paramLowerCase].checked;
  }
  if (param === filterStore.mersedes.model || param === filterStore.bmw.model) {
    filterStore.work.checked =
      (filterStore.bmw.checked === true ? false : false) ||
      (filterStore.mersedes.checked === true && false);
    filterStore.work.disabled =
      (filterStore.bmw.checked === true ? true : false) ||
      (filterStore.mersedes.checked === true ? true : false);
    filterStore.cargo.checked =
      (filterStore.bmw.checked === true && false) ||
      (filterStore.mersedes.checked === true && false);
    filterStore.cargo.disabled =
      (filterStore.bmw.checked === true ? true : false) ||
      (filterStore.mersedes.checked === true ? true : false);
    filterStore.budget.checked =
      (filterStore.bmw.checked === true ? false : false) ||
      (filterStore.mersedes.checked === true && false);
    filterStore.budget.disabled =
      (filterStore.bmw.checked === true ? true : false) ||
      (filterStore.mersedes.checked === true ? true : false);
  }

  for (let key in filterStore) {
    timeArr.push(filterStore[key]);
  }
  return timeArr;
};
