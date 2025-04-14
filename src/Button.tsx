import React from 'react';

type ButtonProps = {
    label: string;
    onClick: () => void;
};

/**
 * Componente Bottone che riceve via props una label e una funzione onClick.
 * @param {string} label - La label del bottone.
 * @param {function} onClick - La funzione da eseguire al click del bottone.
 * @returns {JSX.Element} - Un elemento JSX che rappresenta il bottone.
 */

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return <button onClick={onClick}>{label}</button>;
};