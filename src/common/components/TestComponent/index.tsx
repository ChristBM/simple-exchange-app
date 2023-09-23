'use client';

import { TestComponentProps } from './Interfaces';
import useTestComponent from './useTestComponent.vm';

export default function TestComponent({
  subtitle,
  btnLabel,
}: TestComponentProps) {
  const { title, handleClick } = useTestComponent();

  return (
    <div>
      <h1>{title}</h1>

      <p>{subtitle}</p>

      <button type="button" onClick={handleClick}>
        {btnLabel}
      </button>
    </div>
  );
}
