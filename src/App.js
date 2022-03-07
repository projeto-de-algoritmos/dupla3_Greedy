import paw from './assets/paw.png';
import './App.css';
import React, { useState } from 'react';
import TimePicker from 'react-time-picker';
import scheduling from './components/scheduling';

function App() {
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [hourValue, onChange] = useState('10:00');
  const [petSize, setPetSize] = useState(1);
  let [id, setId] = useState(0);
  const today = new Date();
  const date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
  const schedule = scheduling.createPriorityQueue();

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
        {!showTimePicker ?
          <div className="action">
            <button className="graph-button" type="button" onClick={() => { setShowTimePicker(true) }}>
              Agendar
            </button>
          </div>
          : null}
      </div>
      {showTimePicker ?
        <div className="content">
          <div>
            <span className="cover-text">Agende seu horário para hoje, dia {date}</span>
          </div>
          <div className="picker">
            <TimePicker onChange={onChange} value={hourValue} />
          </div>
          <div className="picker">
            <span className="cover-text">Selecione o tamanho do pet</span>
          </div>
          <div className="picker">
            <select type="select" onChange={(e) => setPetSize(e.target.value)}>
              <option value={1}>Pequeno</option>
              <option value={2}>Médio</option>
              <option value={3}>Grande</option>
            </select>
          </div>
          <div className="picker">
            <span >Tempo de banho:<br />Pet Pequeno: 1 hora<br />Pet Médio: 2 horas<br />Pet Grande: 3 horas</span>
          </div>
          <div className="picker">
            <button className="graph-button" type="button" onClick={() => { scheduling.enqueue(schedule, id, Number(petSize), Number(hourValue.slice(0, 2))); setId(id += 1) }}>
              Concluir
            </button>
          </div>
        </div>
        : null
      }
    </>
  );
}

export default App;