import React from 'react';
import Cita from './Cita.js';

import Subtitulo from './Subtitulo';

function ListaCitas(props) {
  return (
    <div class="one-half column">
      <Subtitulo texto="Administra tus citas" />
      {props.citas.map(cita => (
        <Cita key={cita.id} cita={cita} />
      ))}
    </div>
  );
}

export default ListaCitas;
