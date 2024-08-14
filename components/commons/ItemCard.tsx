"use client";
import React from "react";
import { Card, CardBody, Image, CardFooter } from "@nextui-org/react";
import { Link } from "@nextui-org/link";

export default function ItemCard({ data }: { data: any }) {
  return (
    <Card
      key={data.id}
      isBlurred
      isExternal
      isPressable
      as={Link}
      className="h-auto "
      href={data.link}
      shadow="md"
    >
      <CardBody className="overflow-visible p-2">
        <Image
          alt={data.title}
          className="w-full object-cover h-56"
          radius="lg"
          shadow="sm"
          src={data.image}
          width="100%"
        />
        <b>{data.title}</b>
        <p>{data.description}</p>
      </CardBody>
      <CardFooter className="text-small justify-between">
        <p className="text-default-500">{data.year}</p>
      </CardFooter>
    </Card>
  );
}
