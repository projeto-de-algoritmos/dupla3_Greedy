import paw from './assets/paw.png';
import './App.css';
import React, { useState } from 'react';
import TimePicker from 'react-time-picker';
import scheduling from './components/scheduling';

function App() {
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);
  const [showScheduleButton, setShowScheduleButton] = useState(false);
  const [hourValue, onChange] = useState('08:00');
  const [petSize, setPetSize] = useState(1);
  const [schedule, setSchedule] = useState(scheduling.createPriorityQueue());
  const [bestSchedule, setBestSchedule] = useState([]);
  const [name, setName] = useState('');
  const today = new Date();
  const date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

  return (
    <>
      <div>
        <img className="logo" src={paw} width="200"></img>
        <div className="cover">
          <h1 className="cover-title">Pet Greedy</h1>
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
          : null
        }
      </div>
      {showTimePicker ?
        <div className="content">
          <div className='picker'>
            <span className="cover-text">Agende seu horário para hoje, dia {date}</span>
          </div>
          <div className='picker'>
            <span>Realizamos agendamentos com horas inteiras (Ex.: 13:00)</span>
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
            <span className="cover-text">Nome do pet</span>
          </div>
          <div className="picker">
            <input type="text" onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="picker">
            <span >Tempo de banho:<br />Pet Pequeno: 1 hora<br />Pet Médio: 2 horas<br />Pet Grande: 3 horas</span>
          </div>
          <div className="picker">
            <button className="graph-button" type="button" onClick={() => { setSchedule(scheduling.enqueue(schedule, name, Number(petSize), Number(hourValue.slice(0, 2)))); setShowScheduleButton(true) }}>
              Concluir
            </button>
          </div>
        </div>
        : null
      }
      {showScheduleButton ?
        <div className="picker">
          <button className="graph-button" type="button" onClick={() => { setBestSchedule(scheduling.scheduling(schedule)); setShowSchedule(true) }}>
            Gerar melhor agendamento
          </button>
        </div>
        : null}
      {showSchedule ?
        <div>
          <div>
            <span className="cover-text"><br /><br />Agendamentos Realizados</span>
          </div>
          <div className="picker">
            <ul>
              {bestSchedule?.map((pet) => (

                <li>Hora: {pet.startTime}h às {pet.endTime}h - Pet: {pet.name.charAt(0).toUpperCase() + pet.name.slice(1)}</li>

              ))}
            </ul>
          </div>
        </div>
        : null}
    </>
  );
}

export default App; 