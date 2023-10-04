import tints from 'tailwind-tints';

export interface PluginOptions {
    theme: {
        colors: {
            primary: string;
        };
    };
}

export const defaultOptions: PluginOptions = {
    theme: {
        colors: {
            primary: '#0CAAAB',
        },
    },
};

export const plugin = (options: PluginOptions = defaultOptions) => {
    return tints(options.theme.colors);
};
