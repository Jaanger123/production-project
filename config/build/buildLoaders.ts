import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCSSLoader } from './loaders/buildCSSLoader';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        { locales: ['ru', 'en'], keyAsDefaultValue: true },
                    ],
                ],
            },
        },
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const cssLoaders = buildCSSLoader(isDev);

    // If you use common JavaScript you need to install babel-loader
    const typescriptLoader = {
        // Loader for TS, also for JSX
        test: /\.tsx?$/, // TS and TSX files
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoaders];
}
