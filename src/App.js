import paw from './assets/paw.png';
import './App.css';
import React, { useState } from 'react';
import TimePicker from 'react-time-picker';

function App() {
  const [showTimePicker, setShowTimePicker] = useState(false);
  const today = new Date();
  const date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
  const [hourValue, onChange] = useState('10:00');


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
          <button className="graph-button" type="button" onClick={() => { setShowTimePicker(true) }}>
            Agendar
          </button>
        </div>
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
          <button className="graph-button" type="button" onClick={() => { setShowTimePicker(true) }}>
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