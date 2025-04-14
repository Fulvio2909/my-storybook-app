import React, { useState } from 'react';
import { Button } from './Button';

type UserCardProps = {
  name: string;
  email: string;
};

export const UserCard: React.FC<UserCardProps> = ({ name, email }) => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleClick = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simula un'operazione asincrona
    setIsConfirmed(true); // Aggiorna lo stato
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
      <h3>{name || <span style={{ color: 'red' }}>Nome non fornito</span>}</h3>
      <p>{email || <span style={{ color: 'red' }}>Email non fornita</span>}</p>
      <Button label="Conferma!" onClick={handleClick} />
      {isConfirmed && (
        <div style={{ marginTop: '10px', color: 'green' }}>
          Utente confermato!
        </div>
      )}
    </div>
  );
};