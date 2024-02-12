import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Modal from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur praesentium sed repellendus amet placeat animi voluptatem tempore officiis reprehenderit labore porro, aut reiciendis, ea fugiat natus neque quasi libero nihil?',
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur praesentium sed repellendus amet placeat animi voluptatem tempore officiis reprehenderit labore porro, aut reiciendis, ea fugiat natus neque quasi libero nihil?',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
