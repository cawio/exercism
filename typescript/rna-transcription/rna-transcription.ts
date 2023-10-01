const dnaToRna: { [key: string]: string } = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
};

export function toRna(dnaSequence: string): string {
  if (/[^(GCTA)]/.test(dnaSequence)) {
    throw new Error('Invalid input DNA.');
  }

  return dnaSequence.split('').map(dna => dnaToRna[dna]).join('');
}