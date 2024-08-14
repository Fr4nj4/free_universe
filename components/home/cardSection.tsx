"use client";
import React from "react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";

export default function HomeSection({
  categoria,
  descripcion,
}: {
  categoria: string;
  descripcion: string;
}) {
  return (
    <Card className=" w-fit my-3 bg-cardbg ">
      <CardHeader className={"flex gap-3 "}>
        <div className="flex flex-col">
          <p className="text-md">{categoria}</p>
        </div>
      </CardHeader>

      <CardBody>
        <p>{descripcion}</p>
      </CardBody>
      <Divider />
    </Card>
  );
}
