import React from 'react';
import './App.css';
import './index.css'; 
import HacerCita from './componentes/HacerCita';
import ListaCitas from './componentes/ListaCitas';
import Titulo from './componentes/Titulo';
import Subtitulo from './componentes/Subtitulo';


function App() {
  const citasIniciales = [
    { id: 1, mascota: 'Nina', propietario: 'Martin', fecha: '2021-08-05', hora: '08:20', sintomas: 'Le duele la pierna' },
    { id: 2, mascota: 'Sifon', propietario: 'Flecha', fecha: '2023-08-05', hora: '09:24', sintomas: 'Duerme mucho' },
    { id: 3, mascota: 'Floki', propietario: 'Ari', fecha: '2023-08-05', hora: '16:15', sintomas: 'No está comiendo' }
  ];

  return (
    <div className="App">
      <Titulo />
      <Subtitulo texto="Crear mi cita" />
      <div className="container">
        
        <div className="row">
          <HacerCita />
          <Subtitulo texto="Administra tus cita" />
          <ListaCitas citas={citasIniciales} />
        </div>
      </div>
    </div>
  );
}

export default App;
