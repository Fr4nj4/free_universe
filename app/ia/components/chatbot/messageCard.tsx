"use client";
import React from "react";
import { Card, CardHeader, CardBody, Divider, Avatar } from "@nextui-org/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot as botIcon } from "@fortawesome/free-solid-svg-icons";

import { faUser as userIcon } from "@fortawesome/free-solid-svg-icons";

export default function MessageCard({
  user_type,
  ai_model,
  message,
}: {
  user_type: string;
  ai_model: string;
  message: string;
}) {
  const class_card: any = {
    ai: " w-fit my-3 bg-cardbg mr-3",
    user: " w-fit my-3 bg-cardbg ml-3",
  };

  return (
    <Card className={class_card[user_type]}>
      <CardBody>
        <p>{message}</p>
      </CardBody>
      <Divider />
    </Card>
  );
}
