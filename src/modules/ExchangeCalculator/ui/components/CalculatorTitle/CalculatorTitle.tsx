import { Text } from '@mantine/core';
import { CalculatorTitleProps } from './Interfaces';
import { CalculatorTitleWrapper } from './styles';

export default function CalculatorTitle({
  title,
}: CalculatorTitleProps) {
  return (
    <CalculatorTitleWrapper>
      <Text
        fw={900}
        variant="gradient"
        component="h1"
      >
        {title}
      </Text>
    </CalculatorTitleWrapper>
  );
}
