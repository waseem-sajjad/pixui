import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps } from '../src';

const meta = {
    title: 'Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        appearance: {
            control: {
                type: 'select',
            },
        },

        rounded: {
            control: {
                type: 'select',
            },
        },
        size: {
            control: {
                type: 'select',
            },
        },
        animation: {
            control: {
                type: 'boolean',
            },
        },
    },
} satisfies Meta<ButtonProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        appearance: 'primary',
        rounded: 'default',
        size: 'default',
        children: 'Primary',
        animation: true,
        loading: false,
        outline: false,
    },
};

export const Danger: Story = {
    args: {
        ...Primary.args,
        appearance: 'danger',
        children: 'Danger',
    },
};

export const Link: Story = {
    args: {
        ...Primary.args,
        appearance: 'link',
        children: 'Link',
    },
};

export const Ghost: Story = {
    args: {
        ...Primary.args,
        appearance: 'ghost',
        children: 'Ghost',
    },
};

export const RoundedNone: Story = {
    args: {
        ...Primary.args,
        rounded: 'none',
        children: 'Rounded None',
    },
    name: 'Rounded - None',
};

export const RoundedDefault: Story = {
    args: {
        ...Primary.args,
        rounded: 'default',
        children: 'Rounded Default',
    },
    name: 'Rounded - Default',
};

export const RoundedSmall: Story = {
    args: {
        ...Primary.args,
        rounded: 'small',
        children: 'Rounded Small',
    },
    name: 'Rounded - Small',
};

export const RoundedMedium: Story = {
    args: {
        ...Primary.args,
        rounded: 'medium',
        children: 'Rounded Medium',
    },
    name: 'Rounded - Medium',
};

export const RoundedLarge: Story = {
    args: {
        ...Primary.args,
        rounded: 'large',
        children: 'Rounded Large',
    },
    name: 'Rounded - Large',
};

export const RoundedFull: Story = {
    args: {
        ...Primary.args,
        rounded: 'full',
        children: 'Rounded Full',
    },
    name: 'Rounded - Full',
};

export const SizeLarge: Story = {
    args: {
        ...Primary.args,
        size: 'large',
        children: 'Size Large',
    },
    name: 'Size - Large',
};

export const SizeMedium: Story = {
    args: {
        ...Primary.args,
        size: 'medium',
        children: 'Size Medium',
    },
    name: 'Size - Medium',
};

export const SizeDefault: Story = {
    args: {
        ...Primary.args,
        size: 'default',
        children: 'Size Default',
    },
    name: 'Size - Default',
};

export const SizeSmall: Story = {
    args: {
        ...Primary.args,
        size: 'small',
        children: 'Size Small',
    },
    name: 'Size - Small',
};

export const Loader: Story = {
    args: {
        ...Primary.args,
        loading: true,
        children: '',
    },
    name: 'Loader - Default',
};
