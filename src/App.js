
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="App">
        <h1 className="header"> My Weather App</h1>
        <br />

        <input
          className="input"
          type="search"
          placeholder="&#128269; Type City"
          autoFocus="on"
        />

        <input type="submit" value="Search" className="btn btn-primary" />
        <br />
        <p className="links">
          Designed by{" "}
          <a
            href="https://www.shecodes.io/graduates/82140-cecille-speckmaier"
            target="_blank"
            rel="noopener noreferrer"
          >
            CMSpeckmaier
          </a>{" "}
          and open-sourced in{" "}
          <a
            href="https://github.com/Cecille-SheCodes/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
