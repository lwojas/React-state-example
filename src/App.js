import "./App.css";
import "./css/flex.css";
import "./css/button.css";
import "./css/margins.css";

import Scoreboard from "./components/Scoreboard";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <main>
        <Title />
        <Scoreboard />
      </main>
    </div>
  );
}

export default App;
