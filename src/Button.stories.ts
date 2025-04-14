import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { within } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'Components/Button',
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Button>;

// Nuova storia per il bottone
// Modificare il componente button per supportare la disabilitazione
// Aggiungere una proprietà disabled al bottone
// Se la proprietà e null gestire all'onclick prima la disabilitazione
// Simularare l'operazione del click con un setTimeout di 5 secondi
// Dopo 5 secondi rimuovere la proprietà disabled e riattivare il bottone

const onClick = () => {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            alert('Button is clicked!');
            resolve();
        }, 5000);
    });
};

export const Default: Story = {
    args: {
        label: 'Default Button',
        onClick: onClick
    },
};

export const Disabled: Story = {
    args: {
        label: 'Disabled Button',
        onClick: onClick,
        disabled: true,
    },
};

export const WithInteraction: Story = {
    args: {
        label: 'Button with Interaction',
        onClick: onClick,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const button = canvas.getByRole('button');
        await userEvent.click(button);
    }
};