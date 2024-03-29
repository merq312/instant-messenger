import messageReducer, { Message, sendMessage } from './messageSlice'

describe('message reducer', () => {
  const testMessage: Message = {
    content: 'hello jest',
    userName: 'Tester',
    sentAt: '1635872272682',
  }

  test('should handle initial state', () => {
    expect(messageReducer(undefined, { type: 'unknown' })).toEqual([])
  })

  test('should accept new message', () => {
    const actual = messageReducer(undefined, sendMessage(testMessage))
    expect(actual[0].content).toEqual('hello jest')
  })
})
