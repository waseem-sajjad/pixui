import { cva, type VariantProps } from 'class-variance-authority';
import cn from '../../utils/cn';

const buttons = cva(
    'px-5 rounded py-2 text-sm transition-colors duration-300 ease-in-out',
    {
        variants: {
            appearance: {
                primary:
                    'bg-primary-500 hover:bg-primary-700 text-white active:bg-primary-600',
            },
        },
        defaultVariants: {
            appearance: 'primary',
        },
    },
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttons> {}

export const Button: React.FC<ButtonProps> = (props) => (
    <button
        {...props}
        className={cn(
            buttons({
                className: props.className,
            }),
        )}
    />
);
