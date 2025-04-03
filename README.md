# React - Redux

### Basic

**_ Redux > CounterSlice.jsx > store.jsx _**

#### CounterSlice.jsx

```
 const CounterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    }
  }
})
export const { increment } = CounterSlice.actions

```

#### Store.jsx

```
import myCounter from './CounterSlice'
export const store = configureStore({
  reducer: {
    counter: myCounter
  }
})
```

### use of example

```
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();
  return (
    <div>
      <h2>count:{ count}</h2>
<button onClick={()=>dispatch(increment())}>Increment</button>

    </div>
  )
```
### Todo App - TodoSlice

```
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({id:Date.now(),text:action.payload,completed:false})
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed=!todo.completed
      }
    },
    removeTodo: (state, action) => {
  return state.filter((todo)=>todo.id !==action.payload)
}
  }
  ```