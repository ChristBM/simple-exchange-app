export interface CalcRateArgs {
  fromRate: number;
  toRate: number;
}

export interface CalcConversionArgs extends CalcRateArgs {
  amount: number;
}

export const calcRate = ({ fromRate, toRate }: CalcRateArgs) => toRate / fromRate;

export default function calcConversion({
  amount,
  fromRate,
  toRate,
}: CalcConversionArgs) {
  return amount * calcRate({ fromRate, toRate });
}
