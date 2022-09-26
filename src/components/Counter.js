import {useSelector, useDispatch} from 'react-redux'
import {counterActions } from '../store/counter';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  

  const incrementHandler =()=>{
    console.log(counterActions)
    dispatch (counterActions?.increment())

  }

  const decrementHandler =()=>{
    dispatch(counterActions.decrement())

  }
  const increaseHandler=()=>{
    dispatch(counterActions.increase(5));
  }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter)
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={increaseHandler}> Increase By 5</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
