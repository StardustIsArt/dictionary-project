import "./App.css";
import logo from "./YociusProductionsSig.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo"></img>
      </div>
      <main>
        <Dictionary />
      </main>
      <div className="footer">Coded by Samantha Yocius</div>
    </div>
  );
}
