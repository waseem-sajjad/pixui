import tints from 'tailwind-tints';

export interface PluginOptions {
    theme: {
        colors: {
            primary: string;
            tint: string;
            hover: string;
        };
    };
}

export const defaultOptions: PluginOptions = {
    theme: {
        colors: {
            primary: '#38a3a5',
            tint: '#d0d4e4',
            hover: '#f5f6f8',
        },
    },
};

export const plugin = (options: PluginOptions = defaultOptions) => {
    return tints(options.theme.colors);
};
