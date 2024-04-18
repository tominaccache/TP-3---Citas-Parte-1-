import React from 'react';
import Cita from './Cita.js';

function ListaCitas(props) {
  return (
    <div>
      {props.citas.map(cita => (
        <Cita key={cita.id} cita={cita} />
      ))}
    </div>
  );
}

export default ListaCitas;
