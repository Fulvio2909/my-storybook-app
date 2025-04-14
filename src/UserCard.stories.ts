import type { Meta, StoryObj } from '@storybook/react';
import { UserCard } from './UserCard';
import { within } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/test';


const meta: Meta<typeof UserCard> = {
    component: UserCard,
    title: 'Components/UserCard',
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof UserCard>;

export const Default: Story = {
    args: {
        name: 'Mario Rossi',
        email: 'mario.rossi@example.com',
    },
};

export const NoName: Story = {
    args: {
        name: '',
        email: 'mario.rossi@example.com',
    },
};

export const NoEmail: Story = {
    args: {
        name: 'Mario Rossi',
        email: '',
    },
};

export const NoNameNoEmail: Story = {
    args: {
        name: '',
        email: '',
    },
};

/**
 * Modifica del componente UserCard:
 * 1. Aggiungere nel componente un bottone (Button) con la label
 * "Conferma" che al click esegua una funzione asincrona.
 * 2. La funzione asincrona passata a Button via props
 * dovrà essere simulata con un setTimeout e al completamento visualizzare
 * una scritta all'interno della UserCard con "Utente confermato".
 * 
 * Creazione della storia:
 * 1. Creare le storie necessarie per testare il componente.
 * 2. solo dopo automatizzare il test con "play" alcune storie.
 */

export const WithInteraction: Story = {
    args: {
      name: 'Mario Rossi',
      email: 'mario.rossi@example.com',
    },
    play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
  
      // Trova il bottone e cliccalo
      const button = canvas.getByRole('button', { name: /Conferma!/i });
      await userEvent.click(button);
  
      // Aspetta che il messaggio "Utente confermato!" venga visualizzato
      const message = await canvas.findByText(/Utente confermato!/i, {}, { timeout: 3000 });
      expect(message).toBeInTheDocument();
    },
  };

