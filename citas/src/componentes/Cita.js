import React from 'react';
import './Cita.css';

function Cita ({cita}) {
  return (
    <div class="one-half column"> 
    
    <div className="cita">
      <p>Mascota: <span>{cita.mascota}</span></p>
      <p>Dueño: <span>{cita.propietario}</span></p>
      <p>Fecha: <span>{cita.fecha}</span></p>
      <p>Hora: <span>{cita.hora}</span></p>
      <p>Síntomas: <span>{cita.sintomas}</span></p>
      <button className="button eliminar u-full-width">Eliminar ×</button>
    </div>
    </div>
  );
}

export default Cita;

