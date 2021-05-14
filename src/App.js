import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Decrementor from "./Components/Decrementor";
import Incrementor from "./Components/Incrementor";
import Counter from "./Components/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-heading">
        <span
          style={{
            backgroundColor: "purple",
            padding: "0.5em",
            borderRadius: "10px",
          }}
        >
          React-Redux Counter App with UserInput
        </span>
      </header>
      <header className="App-header">
        <Incrementor />
        <Counter />
        <Decrementor />
      </header>
    </div>
  );
}

export default App;
