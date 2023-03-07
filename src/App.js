import "./App.css";
import getData from "./getData";

function App() {
  getData(1).then((data) => data);

  return (
    <div className="App">
      <h1></h1>
    </div>
  );
}

export default App;
