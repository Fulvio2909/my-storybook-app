import type { Meta, StoryObj } from '@storybook/react';
import { UserCard } from './UserCard';

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