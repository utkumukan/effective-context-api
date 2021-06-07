import "./styles.css";
import CountDisplay from "./Components/CountDisplay";
import Counter from "./Components/Counter";
import CountProvider from "./Contexts/Count/countProvider";

export default function App() {
  return (
    <div className="App">
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  );
}
