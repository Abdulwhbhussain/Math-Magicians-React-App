import calculate from './calculate';

let state = {
  total: null,
  next: null,
  operation: null,
};

describe('calculate', () => {
  it('number should update next', () => {
    state = calculate(state, '5');
    expect(state.next).toEqual('5');
  });

  it('AC should clear state', () => {
    state = calculate(state, 'AC');
    expect(state).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('= should return total', () => {
    state = calculate(state, '5');
    state = calculate(state, '+');
    state = calculate(state, '5');
    state = calculate(state, '=');
    expect(state.total).toEqual('10');
  });

  it('operation should update operation', () => {
    state = calculate(state, '5');
    state = calculate(state, '+');
    expect(state.operation).toEqual('+');
  });
});
