"use client";

import { useChat } from "ai/react";
import { title } from "@/components/primitives";
import Chatbot from "./components/chatbot/chatbot";

export default function PricingPage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat();
  return (
    <div>
      <h1 className={title()}>Platica con la IA</h1>

      <div className="mx-auto  w-lg py-24 flex flex-col stretch">
        <Chatbot isLoading={isLoading} />
      </div>
    </div>
  );
}
