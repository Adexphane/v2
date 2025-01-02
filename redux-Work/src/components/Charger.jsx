import { useSelector, useDispatch } from "react-redux";
import { positive, negative, reset } from "../app/features/charge/chargeSlice";

const Charger = () => {
  const charge = useSelector((state) => state.charge.value);
  const history = useSelector((state) => state.charge.history);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Charge: {charge}</h1>
      <button onClick={() => dispatch(positive())}>Increase</button>
      <button onClick={() => dispatch(negative())}>Decrease</button>
      <button onClick={() => dispatch(reset())}>RESET</button>

      <div>
        <h2>History:</h2>
        {history.map((entry, index) => (
          <div key={index}>
            {entry.type === "increase"
              ? "⬆️"
              : entry.type === "decrease"
              ? "⬇️"
              : "🔄"}
            Value: {entry.value} - Time:{" "}
            {new Date(entry.timestamp).toLocaleTimeString()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Charger;
