import { act, renderHook } from '@testing-library/react'
import useCounter from './useCounter'

describe('useCounter', () => {
  test('should return a default value', () => {
    const { result } = renderHook(() => useCounter())
    expect(result.current.count).toBe(0)
  })

  test('should increment the initial value once', () => {
    const { result } = renderHook(() => useCounter())
    act(() => result.current.increment())
    expect(result.current.count).toEqual(1)
  })
})
