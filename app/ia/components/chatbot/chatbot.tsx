import { Button, Spacer } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import { faPaperPlane as sendIcon } from "@fortawesome/free-solid-svg-icons";
import { useChat } from "ai/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import MessageCard from "./messageCard";
import ModelSelection from "./modelSelection";

export default function Chatbot() {
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
  const [model, setmodel] = useState(
    "OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5",
  );
  const { messages, isLoading, input, handleInputChange, handleSubmit } =
    useChat({
      body: { model },
    });

  return (
    <>
      {messages.map((message, index) => (
        <div
          key={index}
          className={`gap-5 w-full flex justify-${message.role == "user" ? "end" : "start"}`}
        >
          <MessageCard
            ai_model={model}
            message={message.content}
            user_type={message.role}
          />
        </div>
      ))}

      <Spacer y={1} />

      <form
        className="flex flex-row w-full h-auto items-center justify-center gap-2"
        onSubmit={() => handleSubmit(event)}
      >
        <div className="w-1/3">
          <ModelSelection handleSelection={setmodel} value={model} />
        </div>

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
    </>
  );
}
