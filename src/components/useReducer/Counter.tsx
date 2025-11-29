import { useReducer } from 'react';

type CounterState = {
  count: number;
};

type UpdateState = {
  payload: number;
  type: 'increment' | 'decrement';
};

type ResetState = {
  type: 'reset';
};

type ActionState = UpdateState | ResetState;

const initialState = { count: 0 };

function reducer(state: CounterState, action: ActionState) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload };
    case 'decrement':
      return { count: state.count - action.payload };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>
        <p className="text-center">Count {state?.count}</p>
      </div>
      <div className="my-5 text-center">
        <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
          Increase by 10
        </button>
        <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>
          Decrease by 10
        </button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
