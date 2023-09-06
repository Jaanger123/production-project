import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const cssLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
            // style-loader -> Creates `style` nodes from JS strings
            // MiniCssExtractPlugin.loader -> Decompose css files after bundling
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) =>
                            Boolean(resPath.includes('.module.')),
                        localIdentName: isDev
                            ? '[path][name]__[local]'
                            : '[hash:base64:8]',
                    },
                },
            },
            // Compiles Sass to CSS
            'sass-loader',
        ],
    };

    // If you use common JavaScript you need to install babel-loader
    const typescriptLoader = {
        // Loader for TS, also for JSX
        test: /\.tsx?$/, // TS and TSX files
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [fileLoader, svgLoader, typescriptLoader, cssLoaders];
}
