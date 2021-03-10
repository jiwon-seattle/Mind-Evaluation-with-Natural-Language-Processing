import { text } from 'body-parser';
import { polarityChecker } from '../js/formHandler'

describe('Testing polarity translation functionality', () => {
  test('Testing the polarityChecker function', () => {
    expect(polarityChecker('P+')).toBe('STRONG POSITIVE')
  })
  test('Testing the polarityChecker function', () => {
    expect(polarityChecker('P')).toBe('POSITIVE')
  })
  test('Testing the polarityChecker function', () => {
    expect(polarityChecker('NEW')).toBe('NEUTRAL')
  })
  test('Testing the polarityChecker function', () => {
    expect(polarityChecker('N')).toBe('NEGATIVE')
  })
  text('Testing the polarityChecker function', () => {
    expect(polarityChecker('N+').toBe('STRONG NEGATIVE'))
  })
  text('Testing the polarityChecker function', () => {
    expect(polarityChecker('NONE')).toBe('NO SENTIMENT')
  })
  test('Testing the polarityChecker function', () => {
    expect(polarityChecker).toBeDefined()
  })
});
