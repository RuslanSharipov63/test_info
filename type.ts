export type Cars = {
  id: number;
  model: string;
  status: string;
  price: number;
  engine_power: number;
  color: string;
  typeCar: string;
  img: string;
};

export type FiltersStore = {
  [x: string]: {
    id: number;
    model?: string;
    status?: string;
    typeCar?: string;
    color?: string;
    typeCheck: string;
    checked: boolean;
    disabled: boolean;
  };
};

export type FilterStoreForStateType = {
  id: number;
  model?: string;
  status?: string;
  color?: string;
  typeCar?: string;
  typeCheck: string;
  checked: boolean;
  disabled: boolean;
};
