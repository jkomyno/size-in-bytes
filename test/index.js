const sizeInBytes = require('../');
const expect = require('expect');

describe('sizeInBytes', () => {
  it('should export function', () => {
    expect(typeof sizeInBytes).toBe('function');
  });
});

describe('sizeInBytes should handle failures', () => {
  it('should return null if sizeStr is malformed', () => {
    expect(sizeInBytes(null)).toBe(null);
    expect(sizeInBytes(true)).toBe(null);
    expect(sizeInBytes('')).toBe(null);
    expect(sizeInBytes('no bytes here 123')).toBe(null);
  });

  it('should throw error if sizeStr is malformed and raise is true', () => {
    expect(() => { sizeInBytes(null, true) }).toThrow();
    expect(() => { sizeInBytes(true, true) }).toThrow();
    expect(() => { sizeInBytes('', true) }).toThrow();
    expect(() => { sizeInBytes('no bytes here 123', true) }).toThrow();
  });
});

describe('sizeInBytes should handle successful cases', () => {
  it('should return the expected value if the string is well formed, even with spaces', () => {
    expect(sizeInBytes('1b')).toBe(1);
    expect(sizeInBytes('1k')).toBe(1024);
    expect(sizeInBytes('2k')).toBe(2048);
    expect(sizeInBytes('1m')).toBe(1048576);

    expect(sizeInBytes('1 b')).toBe(1);
    expect(sizeInBytes('1 k')).toBe(1024);
    expect(sizeInBytes('2 k')).toBe(2048);
    expect(sizeInBytes('1 m')).toBe(1048576);

    expect(sizeInBytes('   1   b   ')).toBe(1);
    expect(sizeInBytes('   1   k   ')).toBe(1024);
    expect(sizeInBytes('   2   k   ')).toBe(2048);
    expect(sizeInBytes('   1   m   ')).toBe(1048576);
  });
});
