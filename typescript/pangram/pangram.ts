export function isPangram(sentence: string): boolean {
  const letters = sentence.toLowerCase().replace(/[^a-z]/g, '');
  return new Set(letters).size === 26;
}
