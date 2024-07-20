"use client";
import React from "react";
import { Card, CardBody, Divider } from "@nextui-org/react";

export default function MessageCard({
  user_type,
  message,
}: {
  user_type: string;
  ai_model: string;
  message: string;
}) {
  const class_card: any = {
    ai: " w-fit my-3 bg-complement mr-3",
    user: " w-fit my-3 bg-secondary ml-3",
  };

  return (
    <Card className={class_card[user_type == "user" ? user_type : "ai"]}>
      <CardBody>
        <p>{message}</p>
      </CardBody>
      <Divider />
    </Card>
  );
}
