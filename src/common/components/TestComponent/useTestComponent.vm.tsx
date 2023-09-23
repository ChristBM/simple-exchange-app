import { useState } from 'react';

export default function useTestComponent() {
  const [title, setTitle] = useState<string>();

  const handleClick = () => setTitle('hello');

  return { title, handleClick };
}
