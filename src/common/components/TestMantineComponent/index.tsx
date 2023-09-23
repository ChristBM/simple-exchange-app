import {
  NumberInput, Button, Select, Text,
} from '@mantine/core';
import { IconArrowsExchange2, IconCash, IconCoins } from '@tabler/icons-react';

export default function TestMantineComponent() {
  return (
    <div>
      <Text
        size="xl"
        fw={900}
        variant="gradient"
      >
        Simple Exchange Rate Calculator
      </Text>

      <NumberInput
        label="Amount"
        description="How much would you like to convert?"
        placeholder="Add the amount"
        min={0}
        allowNegative={false}
        decimalScale={2}
        thousandSeparator=","
        error={false} // true or message: "Is required"
        disabled={false} // boolean
        required
        // fixedDecimalScale
        // value={value}
        // onChange={setValue}
        radius="md"
        // variant="filled"
        leftSection={<IconCoins size={18} />}
      />

      <Select
        label="From"
        description="From which currency do you want to convert to?"
        placeholder="Select a currency"
        data={['Euro', 'Dollar', 'Peso', 'Libra', 'Bitcoin', 'Balboa', 'Belly']} // string[] o { value: string; label: string; disabled?: boolean }[] o { group: string; item: string[]; }[]
        allowDeselect={false}
        checkIconPosition="right"
        searchable
        limit={5}
        maxDropdownHeight={200}
        // value={value}
        // onChange={setValue}
        nothingFoundMessage="Sorry, we do not have this coin :("
        radius="md"
        // variant="filled"
        required
        // readOnly
        // disabled
        error={false} // true or message: "Is required"
        leftSection={<IconCash size={18} />}
      />

      <Button
        // fullWidth
        size="md"
        justify="space-around"
        leftSection={<IconArrowsExchange2 size={18} />}
        variant="gradient"
        disabled={false} // boolean
        // data-disabled // boolean
        loading={false} // boolean
        loaderProps={{ type: 'dots' }}
        radius="md"
      >
        Convert
      </Button>
    </div>
  );
}
