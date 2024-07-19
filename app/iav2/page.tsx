'use client';

import { useChat } from 'ai/react';
import { title } from "@/components/primitives";

export default function PricingPage() {

  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div>
      <h1 className={title()}>Pricing</h1>


      <div className="mx-auto w-full max-w-md py-24 flex flex-col stretch">
      {messages.map(m => (
        <div key={m.id}>
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.content}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <label>
          Say something...
          <input
            className="fixed w-full max-w-md bottom-0 border border-gray-300 rounded mb-8 shadow-xl p-2"
            value={input}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
    </div>
  );
}
