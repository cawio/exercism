const colorBands = [
  'black', 'brown', 'red', 'orange', 'yellow',
  'green', 'blue', 'violet', 'grey', 'white',
] as const;

type ColorBand = typeof colorBands[number];

const ohms = [
  [1_000_000_000, 'giga'],
  [1_000_000, 'mega'],
  [1_000, 'kilo'],
] as const;

export function decodedResistorValue([band1, band2, band3]: ColorBand[]): string {
  const value = ((colorBands.indexOf(band1) * 10) + colorBands.indexOf(band2)) * (10 ** colorBands.indexOf(band3));

  const [div, pre] = ohms.find(([divisor]) => value >= divisor) ?? [1, ''];

  return `${value / div} ${pre}ohms`;
}