import { it, describe, expect } from 'angular2/testing';


describe('universal truths', () => {
  it('should do math', () => {
    expect(1 + 1).toEqual(2);

    expect(5).toBeGreaterThan(4);
  });

 it('should do incorrect math', () => {
    expect(2 + 1).not.toEqual(2);

    expect(2).not.toBeGreaterThan(4);
  });

  xit('should skip this', () => {
    expect(4).toEqual(40);
  });
});
