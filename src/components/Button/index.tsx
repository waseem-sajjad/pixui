'use client';

import { forwardRef } from 'react';

import { buttons, ButtonsTypes } from './buttons';
import Loading from './loading';

import cn from '../../utils/cn';

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        ButtonsTypes {}

export const Button: React.FC<ButtonProps> = forwardRef<
    HTMLButtonElement,
    ButtonProps
>(
    (
        {
            className,
            appearance,
            rounded,
            size,
            animation,
            loading,
            outline,
            children,
            ...props
        },
        ref,
    ) => {
        return (
            <button
                {...(loading && { disabled: true })}
                {...props}
                className={cn(
                    buttons({
                        appearance,
                        rounded,
                        size,
                        animation,
                        outline,
                        className,
                    }),
                )}
                ref={ref}
            >
                {loading ? (
                    <div className='flex items-center justify-center gap-2'>
                        <Loading
                            className={cn({
                                'fill-gray-200 text-white':
                                    appearance === 'primary',
                                'fill-red-200 text-white':
                                    appearance === 'danger',
                                'fill-primary-200 text-primary-500':
                                    outline && appearance === 'primary',
                                'fill-red-200 text-red-500':
                                    outline && appearance === 'danger',
                            })}
                        />
                        <span>Loading...</span>
                    </div>
                ) : (
                    children
                )}
            </button>
        );
    },
);

Button.displayName = 'Button';

Button.defaultProps = {
    appearance: 'primary',
    rounded: 'default',
    size: 'default',
    animation: true,
    outline: false,
    loading: false,
};
