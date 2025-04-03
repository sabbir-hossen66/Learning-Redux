import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount, reset } from './Redux/CounterSlice';

 export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();
  return (
    <div>
      <h2>count:{ count}</h2>
<button onClick={()=>dispatch(increment())}>Increment</button>
<button onClick={()=>dispatch(decrement())}>Decrement</button>
<button onClick={()=>dispatch(incrementByAmount(3))}>Amount</button>
<button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  )
}

