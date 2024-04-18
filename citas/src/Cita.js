import React from 'react';

class Cita extends React.Component {
  render() {
    return (
      <div className="m_cita">
        <p>Mascota: <span>{this.props.cita.mascota}</span></p>
        <p>Dueño: <span>{this.props.cita.propietario}</span></p>
        <p>Fecha: <span>{this.props.cita.fecha}</span></p>
        <p>Hora: <span>{this.props.cita.hora}</span></p>
        <p>Síntomas: <span>{this.props.cita.sintomas}</span></p>
        <button className="m_button m_eliminar m_u-full-width">Eliminar ×</button>
      </div>
    );
  }
}

export default Cita;
