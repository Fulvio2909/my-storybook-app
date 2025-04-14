import React from 'react';

type UserCardProps = {
  name: string;
  email: string;
};

/**
 * Componente UserCard che mostra il nome e l'email di un utente.
 * @param {string} name - Il nome dell'utente.
 * @param {string} email - L'email dell'utente.
 * @returns {JSX.Element} - Un elemento JSX che rappresenta la card utente.
 */

export const UserCard: React.FC<UserCardProps> = ({ name, email }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
};