"use client";
import React from "react";

import ItemCard from "@/components/commons/ItemCard";

export default function GridCards({ data }: { data: any }) {
  return (
    <section className="grid grid-cols-2 gap-4">
      {data.map((serie: any) => (
        <ItemCard key={serie.id} data={serie} />
      ))}
    </section>
  );
}
