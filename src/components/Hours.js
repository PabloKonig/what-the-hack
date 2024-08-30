// Placeholder to host a component
// components/Hours.js
import React from 'react';

const Hours = () => {
  const today = new Date();
  const dayOfWeek = today.getDay();

  let openingHours = '';

  switch (dayOfWeek) {
    case 0: // Domingo
    case 6: // Sábado
      openingHours = '9:00 AM - 8:00 PM';
      break;
    case 1: // Lunes
    case 2: // Martes
    case 3: // Miércoles
    case 4: // Jueves
    case 5: // Viernes
      openingHours = '10:00 AM - 4:00 PM';
      break;
    default:
      openingHours = 'Cerrado';
  }

  return (
    <div>
      <h3>Horario de Hoy:</h3>
      <p>{openingHours}</p>
    </div>
  );
};

export default Hours;
