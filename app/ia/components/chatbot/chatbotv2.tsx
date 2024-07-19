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
      body: model,
    });

  return (
    <Card className="w-full">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src="https://nextui.org/avatars/avatar-1.png"
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {models[model]}
            </h4>
          </div>
        </div>
        <ModelSelection handleSelection={setmodel} value={model} />
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        {messages.map((message, index) => (
          <div
            className={`gap-5 w-full flex justify-${message.role == "user" ? "end" : "start"}`}
          >
            <MessageCard
              key={index}
              user_type={message.role}
              ai_model={model}
              message={message.content}
            />
          </div>
        ))}
      </CardBody>
      <CardFooter className="gap-3">
        <form
          onSubmit={() => handleSubmit(event)}
          className="flex flex-row w-full h-auto items-center justify-center gap-2"
        >
          <Input
            disabled={isLoading}
            type="text"
            placeholder="Escribe tu mensaje aquí..."
            value={input}
            onChange={handleInputChange}
          />
          <Spacer y={0.5} />

          <Button
            isLoading={isLoading}
            className="p-4 w-1/8"
            fullWidth
            size="lg"
            isIconOnly
            color="warning"
            type="submit"
            variant="light"
            aria-label="Enviar"
          >
            <FontAwesomeIcon icon={sendIcon} color="yellow" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
