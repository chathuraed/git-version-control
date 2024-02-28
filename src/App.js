import "./App.css";
import Button from "./components/button";
import Input from "./components/input";

function App() {
  return (
    <div className="App">
      <Input
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <Button
        onClick={() => {
          console.log("clicked");
        }}
        title="Click Me"
      />
    </div>
  );
}

export default App;
