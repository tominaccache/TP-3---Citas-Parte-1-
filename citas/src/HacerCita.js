import React from 'react';

class HacerCita extends React.Component {
  render() {
    return (
      <div>
        <h2>Crear mi Cita</h2>
        <form target="_blank">
          <label>Nombre Mascota</label>
          <input type="text" name="mascota" className="m_u-full-width" value="" />
          <label>Nombre Dueño</label>
          <input type="text" name="propietario" className="m_u-full-width" value="" />
          <label>Fecha</label>
          <input type="date" name="fecha" className="m_u-full-width" value="" />
          <label>Hora</label>
          <input type="time" name="hora" className="m_u-full-width" value="" />
          <label>Síntomas</label>
          <textarea name="sintomas" className="m_u-full-width"></textarea>
          <button type="submit" className="m_u-full-width m_button-primary">Agregar Cita</button>
        </form>
      </div>
    );
  }
}

export default HacerCita;
