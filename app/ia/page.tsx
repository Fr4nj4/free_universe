"use client";

import { useChat } from "ai/react";

import Chatbot from "./components/chatbot/chatbot";
import Chatbotv2 from "./components/chatbot/chatbotv2";
import { title } from "@/components/primitives";

export default function PricingPage() {
  return (
    <div>
      <h1 className={title()}>Platica con la IA</h1>

      <div className="mx-auto  w-lg py-24 flex flex-col stretch">
        <Chatbotv2 />
      </div>
    </div>
  );
}
