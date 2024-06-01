import type { MetaFunction } from '@remix-run/node';
import { useState } from 'react';
import { Button } from '@components';

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world! 2</h1>
      <Button
        type="button"
        onClick={() => setCounter(counter + 1)}
        className="active:bg-indigo-700 rounded bg-indigo-600 px-3 py-3 text-xs font-semibold text-white shadow-sm
hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
focus-visible:outline-indigo-600"
      >
        Button text
      </Button>
      <span className="text-red-500">{counter}</span>
    </div>
  );
}
