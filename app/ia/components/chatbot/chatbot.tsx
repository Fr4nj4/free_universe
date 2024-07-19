import { Button, Textarea, Spacer } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import { faPaperPlane as sendIcon } from "@fortawesome/free-solid-svg-icons";
import { useChat } from "ai/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MessageCard from "./messageCard";
import ModelSelection from "./modelSelection";
import { useState } from "react";

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
    "OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5"
  );
  const { messages, isLoading, input, handleInputChange, handleSubmit } =
    useChat({
      body: model,
    });

  return (
    <>
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

      <Spacer y={1} />

      <form
        onSubmit={() => handleSubmit(event)}
        className="flex flex-row w-full h-auto items-center justify-center gap-2"
      >
        <div className="w-1/3">
          <ModelSelection handleSelection={setmodel} value={model} />
        </div>

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
          color="primary"
          type="submit"
          variant="light"
          aria-label="Enviar"
        >
          <FontAwesomeIcon icon={sendIcon} color="primary" />
        </Button>
      </form>
    </>
  );
}
