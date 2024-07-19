import {
  Button,
  Spacer,
  CardFooter,
  CardBody,
  Card,
  CardHeader,
  Avatar,
} from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import { faPaperPlane as sendIcon } from "@fortawesome/free-solid-svg-icons";

import { faRobot as botIcon } from "@fortawesome/free-solid-svg-icons";
import { useChat } from "ai/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MessageCard from "./messageCard";
import ModelSelection from "./modelSelection";
import { useState } from "react";

export default function Chatbotv2() {
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
  const [model, setmodel] = useState([
    "OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5",
  ]);
  const { messages, isLoading, input, handleInputChange, handleSubmit } =
    useChat({
      body: { model: model },
    });

  return (
    <Card className="w-full">
      <CardHeader className="justify-between">
        <div className="flex w-full items-center gap-3">
          <Avatar
            isBordered
            icon={<FontAwesomeIcon color="primary" icon={botIcon} />}
            radius="full"
            size="md"
          />

          <ModelSelection handleSelection={setmodel} value={model} />
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`gap-5 w-full flex justify-${message.role == "user" ? "end" : "start"}`}
          >
            <MessageCard
              key={index}
              ai_model={model[0]}
              message={message.content}
              user_type={message.role}
            />
          </div>
        ))}
      </CardBody>
      <CardFooter className="gap-3">
        <form
          className="flex flex-row w-full h-auto items-center justify-center gap-2"
          onSubmit={() => handleSubmit(event)}
        >
          <Input
            disabled={isLoading}
            placeholder="Escribe tu mensaje aquí..."
            type="text"
            value={input}
            onChange={handleInputChange}
          />
          <Spacer y={0.5} />

          <Button
            fullWidth
            isIconOnly
            aria-label="Enviar"
            className="p-4 w-1/8"
            color="primary"
            isLoading={isLoading}
            size="lg"
            type="submit"
            variant="light"
          >
            <FontAwesomeIcon color="primary" icon={sendIcon} />
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
