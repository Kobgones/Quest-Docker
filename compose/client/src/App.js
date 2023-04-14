import anya from "./anya.gif";
import yor from "./yor.png";
import loid from "./loid.png";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="banner">
          <img src={loid} className="loid" alt="loid forger" />

          <h1>ANYA FAN CLUB</h1>
          <img src={yor} className="yor" alt="yor forger" />
        </div>
        <img src={anya} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
