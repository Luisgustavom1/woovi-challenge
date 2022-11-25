function sum(a: number, b: number) {
  return a + b;
}

describe('<Component />', () => {
  it('Should make any action ts', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
