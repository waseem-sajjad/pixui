import { cva } from 'class-variance-authority';

export interface ButtonsTypes {
    rounded?: 'default' | 'full' | 'none' | 'medium' | 'large' | 'small';
    appearance?: 'primary' | 'danger' | 'link' | 'ghost';
    size?: 'default' | 'medium' | 'large' | 'small';
    animation?: boolean;
    loading?: boolean;
    outline?: boolean;
}

export const buttons = cva(
    'transition-colors duration-300 ease-in-out py-2 px-4',
    {
        variants: {
            appearance: {
                primary:
                    'bg-primary-500 hover:bg-primary-700 text-white active:bg-primary-600',
                danger: 'bg-red-500 hover:bg-red-700 text-white active:bg-red-600',
                link: 'text-blue-500',
                ghost: 'border border-tint-500 hover:bg-hover-500 active:bg-hover-500 text-gray-700',
            },
            rounded: {
                default: 'rounded',
                full: 'rounded-full',
                none: 'rounded-none',
                medium: 'rounded-md',
                large: 'rounded-lg',
                small: 'rounded-sm',
            },
            animation: {
                true: 'active:scale-95',
            },
            size: {
                default: 'text-sm',
                medium: 'text-base',
                small: 'text-xs',
                large: 'text-lg',
            },
            outline: {
                true: 'bg-inherit',
                false: '',
            },
        },
        defaultVariants: {
            appearance: 'primary',
            rounded: 'default',
            size: 'default',
            animation: true,
            outline: false,
        },
        compoundVariants: [
            {
                appearance: 'primary',
                outline: true,
                className:
                    'text-primary-500 border border-primary-500 hover:bg-primary-500 active:bg-primary-500 hover:text-white active:text-white',
            },
            {
                appearance: 'danger',
                outline: true,
                className:
                    'text-red-500 border border-red-500 hover:bg-red-500 active:bg-red-500 hover:text-white active:text-white',
            },
        ],
    },
);
