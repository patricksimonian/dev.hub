import { validUrl } from "../../utils/valid-url";

describe('Valid Url', () => {
  test('/google.com  fails', () => {
    expect(validUrl('/google.com')).toBe(false);
  });
  
  test('httpps://google.com fails', () => {
    expect(validUrl('httpps://google.com')).toBe(false);
  })
  test('http://google.com? help fails', () => {
    expect(validUrl('http://google.com? help')).toBe(false);
    
  })
  test('avx fails', () => {
    expect(validUrl('avx')).toBe(false);
  })

  test('https:// and http:// pass', () => {
    expect(validUrl('http://google.com')).toBe(true);
    expect(validUrl('https://google.com')).toBe(true);
  })
})