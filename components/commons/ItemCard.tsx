"use client";
import React from "react";
import { Card, CardBody, Image, CardFooter } from "@nextui-org/react";

export default function EmulationTable({ data }: { data: any }) {
  return (
    <Card
      key={data.id}
      isPressable
      shadow="sm"
      onPress={() => console.log("item pressed")}
    >
      <CardBody className="overflow-visible p-0">
        <Image
          alt={data.title}
          className="w-full object-cover h-[140px]"
          radius="lg"
          shadow="sm"
          src={data.image}
          width="100%"
        />
      </CardBody>
      <CardFooter className="text-small justify-between">
        <b>{data.title}</b>
        <p className="text-default-500">{data.year}</p>
      </CardFooter>
    </Card>
  );
}
