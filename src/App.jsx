import { useEffect, useState } from "react";
import { useCustomHook } from "./hooks/useCustomHook";

function App() {
  const { count, setCount, text, setText, memoizedValue } = useCustomHook();
  const [renders, setRenders] = useState(1);

  useEffect(() => {
    //   Apenas no render
    console.log(`Rendered ${renders} times`);
    setRenders((prev) => prev + 1);
  }, [count, text]);

  return (
    <div>
      <h1>Memoization Test</h1>
      <p>Count: {count}</p>
      <p>Memoized Value (count * 2): {memoizedValue}</p>
      <p>Renders: {renders}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
    </div>
  );
}

export default App;
