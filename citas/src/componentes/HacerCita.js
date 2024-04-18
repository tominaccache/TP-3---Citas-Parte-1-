import React from 'react';
import './HacerCita.css'; 
import Subtitulo from './Subtitulo';

function HacerCita() {
  return (
    <div class="one-half column">
      <Subtitulo texto="Crear mi cita" />
      <form >
        <label>Nombre Mascota</label>
        <input type="text" name="mascota" className="u-full-width" />
        <label>Nombre Dueño</label>
        <input type="text" name="propietario" className="u-full-width"  />
        <label>Fecha</label>
        <input type="date" name="fecha" className="u-full-width"  />
        <label>Hora</label>
        <input type="time" name="hora" className="u-full-width" />
        <label>Síntomas</label>
        <textarea name="sintomas" className="u-full-width"></textarea>
        <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
      </form>
    </div>
  );
}

export default HacerCita;

