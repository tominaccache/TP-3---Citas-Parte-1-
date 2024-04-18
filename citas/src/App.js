import React from 'react';
import './App.css';
import HacerCita from './HacerCita';
import ListaCitas from './ListaCitas';
import Titulo from './Titulo';
import Subtitulo from './Subtitulo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      citas: [
        { id: 1, mascota: 'Nina', propietario: 'Martin', fecha: '2021-08-05', hora: '08:20', sintomas: 'Le duele la pierna' },
        { id: 2, mascota: 'Sifon', propietario: 'Flecha', fecha: '2023-08-05', hora: '09:24', sintomas: 'Duerme mucho' },
        { id: 3, mascota: 'Floki', propietario: 'Ari', fecha: '2023-08-05', hora: '16:15', sintomas: 'No está comiendo' }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <Titulo />
        <Subtitulo texto="Administra tus citas" />
        <div className="m_container">
          <div className="m_row">
            <HacerCita />
            <ListaCitas citas={this.state.citas} />
          </div>
        </div>
        <Subtitulo texto="Crear mi Cita" />
      </div>
    );
  }
}

export default App;
