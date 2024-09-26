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
      <Card>
        <CardHeader>
          <CardTitle>{model}</CardTitle>
          <CardDescription>{status}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{engine_power}</p>
          <p>{color}</p>
          <p>{typeCar}</p>
          <Image
            src={`/${img}`}
            width={100}
            height={100}
            alt="auto"
          />
        </CardContent>
        <CardFooter>
          <p>{price}</p>
        </CardFooter>
      </Card>
    </>
  );
};

export default Car;
