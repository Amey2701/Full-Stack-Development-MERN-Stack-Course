import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "../redux/slices/counterSlice";

const CounterApp = () => {
  const count = useSelector(state => state.count.value);
  const dispatch = useDispatch();

  return (
    <div className="card counter-card">
      <h2>Counter App</h2>
      <p className="count">{count}</p>

      <div className="btn-group">
        <button onClick={() => dispatch(increment())}>+ Increase</button>
        <button onClick={() => dispatch(decrement())}>– Decrease</button>
        <button onClick={() => {
          const amount = prompt("Enter amount:");
          dispatch(incrementByAmount(Number(amount)));
        }}>+ Increase by Amount</button>
      </div>
    </div>
  );
};

export default CounterApp;
