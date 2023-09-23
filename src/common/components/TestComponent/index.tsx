'use client';

import { TestComponentProps } from './Interfaces';
import useTestComponent from './useTestComponent.vm';
import {
  Button, Text, Title, Wrapper,
} from './styles';

export default function TestComponent({
  subtitle,
  btnLabel,
}: TestComponentProps) {
  const { title, handleClick } = useTestComponent();

  return (
    <Wrapper>
      <Title $isPrimary>{title}</Title>

      <Text>{subtitle}</Text>

      <Button onClick={handleClick} $isPrimary>{btnLabel}</Button>
    </Wrapper>
  );
}
