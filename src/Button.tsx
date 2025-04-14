import React, { useState } from 'react';

type ButtonProps = {
  label: string;
  onClick: () => Promise<void>;
  disabled: boolean;
};

/**
 * Componente Bottone che riceve via props una label e una funzione onClick.
 * @param {string} label - La label del bottone.
 * @param {function} onClick - La funzione da eseguire al click del bottone.
 * @param {boolean} disabled - Indica se il bottone è disabilitato.
 * @returns {JSX.Element} - Un elemento JSX che rappresenta il bottone.
 */

export const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => {
  const [isDisabled, setIsDisabled] = useState(disabled);

  const handleClick = async () => {
    setIsDisabled(true); // Disabilita il bottone
    await onClick(); // Esegui la funzione onClick    
    setIsDisabled(false); // Abilita il bottone
  }

  return (
      <button onClick={handleClick} disabled={isDisabled}>
        {label}
      </button>
  );
};