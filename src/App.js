import paw from './assets/paw.png';
import './App.css';

function App() {
  return (
    <>
      <div>
          <img className="logo" src={paw} width="200"></img>
        <div className="cover">
          <h1 className="cover-title">Greedy</h1>
          <span className="cover-text">
            Sistema de agendamento de banho e tosa
          </span>
        </div>
        <div className="action">
          <button className="graph-button" type="button" onClick={() => { }}>
            Agendar
          </button>
        </div>
      </div>
    </>
  );
}

export default App;