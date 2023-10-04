import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps } from '../src';

const meta = {
    title: 'Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        appearance: {
            control: {
                type: 'select',
            },
        },
    },
} satisfies Meta<ButtonProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        appearance: 'primary',
        children: 'Primary',
    },
};
