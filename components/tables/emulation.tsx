"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/table";

export default function EmulationTable({ data }: { data: any }) {
  const columns = [
    {
      key: "nombre",
      label: "Nombre",
    },
    {
      key: "consola",
      label: "Consola",
    },
    {
      key: "calificacion",
      label: "Calificacion",
    },
    {
      key: "link",
      label: "Link",
    },
  ];

  console.log("data", data);
  return (
    <Table aria-label="Emuladores">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody>
        {data.map((item: any) => (
          <TableRow key={item.id}>
            <TableCell>{item.nombre}</TableCell>
            <TableCell>{item.consola.value}</TableCell>
            <TableCell>{item.calificacion}</TableCell>
            <TableCell>
              <a href={item.link} target="_blank" rel="noreferrer">
                {item.link}
              </a>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
