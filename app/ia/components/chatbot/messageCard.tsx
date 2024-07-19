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
  const user_props: any = {
    ai: "bot",
    user: "usuario",
  };

  /*   const avatar = user_type === "user" ? <Avatar isBordered color="success" src="https://i.pravatar.cc/150" />: <Avatar isBordered color="success" src="https://i.pravatar.cc/150" />;
   */
  return (
    <Card className=" w-fit my-3 bg-cardbg ">
      {/*       {user_type != "user" && (
        <>
        <CardHeader className={"flex gap-3 "}>
          <Avatar
            size="sm"
            isBordered
            icon={
              <FontAwesomeIcon
                icon={user_type == "user" ? userIcon : botIcon}
              />
            }
          />

          <div className="flex flex-col">
            <p className="text-md">{user_props[user_type]}</p>
            {user_type != "user" && (
              <p className="text-small text-default-500">{ai_model}</p>
            )}
          </div>
        </CardHeader>

        </>
      )} */}

      <CardBody>
        <p>{message}</p>
      </CardBody>
      <Divider />
    </Card>
  );
}
