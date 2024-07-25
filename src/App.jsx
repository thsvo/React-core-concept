
import "./App.css";
import Pole from "./Count";
import Team from "./Team";
import Users from "./Users";
import Friends from "./Friends";
function App() {
  function handleClick() {
    alert("Hello, Vite!");
  }

  return (
    <>
  
      <h2>Hello World 2</h2>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Pole> </Pole>
      <button onClick={handleClick}>Click Me</button>
      <button
        onClick={function helloWorld() {
          alert("hello mam");
        }}
      >
        Hello
      </button>
    </>
  );
}

export default App;
