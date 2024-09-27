import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { FC } from "react";
import { Cars } from "@/type";

type CarProps = {
  cars: Cars;
};

const Car: FC<CarProps> = ({ cars }) => {
  const { model, status, price, engine_power, color, typeCar, img } = cars;

  return (
    <>
      <Card className="w-[20%]">
        <CardHeader>
          <CardTitle>модель: {model}</CardTitle>
          <CardDescription>статус {status}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>мощность двигателя {engine_power} л/с</p>
          <p>цвет: {color}</p>
          <p>тип: {typeCar}</p>
          <Image
            src={`/${img}`}
            width={100}
            height={100}
            alt="auto"
          />
        </CardContent>
        <CardFooter>
          <p>цена: {price}</p>
        </CardFooter>
      </Card>
    </>
  );
};

export default Car;
