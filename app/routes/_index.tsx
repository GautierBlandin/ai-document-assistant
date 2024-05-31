import type { MetaFunction } from "@remix-run/node";
import { useState } from 'react';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [counter, setCounter] = useState(0);

  return (
    <h1 className="text-3xl font-bold underline">
      Hello world! 2
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <span className="text-red-500">{counter}</span>
    </h1>
  );
}
