import "./App.css";
import Button from "./components/button";
import Card from "./components/card";
import Input from "./components/input";

function App() {
  return (
    <div className="App">
      <Card />
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
