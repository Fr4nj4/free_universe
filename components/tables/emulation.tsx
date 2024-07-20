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
import { Link } from "@nextui-org/link";

import CalificationStars from "@/components/calification-stars";

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
  ];

  return (
    <Table aria-label="Emuladores">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.key} className="text-complement">
            {column.label}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody>
        {data.map((item: any) => (
          <TableRow key={item.id}>
            <TableCell>
              <Link
                isExternal
                showAnchorIcon
                color="secondary"
                href={item.link}
              >
                {item.nombre}
              </Link>
            </TableCell>
            <TableCell>{item.consola.value}</TableCell>
            <TableCell>
              <CalificationStars numStars={item.calificacion} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
