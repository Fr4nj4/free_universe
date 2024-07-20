"use client";
import React from "react";
import { Select, SelectItem } from "@nextui-org/react";

export default function ModelSelection({
  handleSelection,
  value,
}: {
  handleSelection: any;
  value: any;
}) {
  const models: any = [
    {
      value: "OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5",
      label: "OpenAssistant",
    },

    {
      value: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      label: "mistralai",
    },
  ];

  return (
    <Select
      label="Modelo"
      selectedKeys={value}
      size="sm"
      variant="underlined"
      onSelectionChange={handleSelection}
    >
      {models.map((model: any) => (
        <SelectItem key={model.value}>{model.label}</SelectItem>
      ))}
    </Select>
  );
}
