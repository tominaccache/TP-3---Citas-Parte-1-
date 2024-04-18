import React from 'react';
import Cita from './Cita'; 

class ListaCitas extends React.Component {
  render() {
    return (
      <div>
        {this.props.citas.map(cita => (
          <Cita key={cita.id} cita={cita} />
        ))}
      </div>
    );
  }
}

export default ListaCitas;
