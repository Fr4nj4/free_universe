import { Button, Textarea, Spacer } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import { faPaperPlane as sendIcon } from "@fortawesome/free-solid-svg-icons";
import { useChat } from "ai/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MessageCard from "./messageCard";

export default function Chatbot({ isLoading }: { isLoading: boolean }) {
  const ai_model = "GPT-3";

  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <>
      {messages.map((message, index) => (
        <div
          className={`gap-5 w-full flex justify-${message.role == "user" ? "end" : "start"}`}
        >
          <MessageCard
            key={index}
            user_type={message.role}
            ai_model={ai_model}
            message={message.content}
          />
        </div>
      ))}

      <Spacer y={1} />

      <form
        onSubmit={handleSubmit}
        className="flex flex-row w-full h-10 content-center justify-center gap-2"
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
    </>
  );
}
