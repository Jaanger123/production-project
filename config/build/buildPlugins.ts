import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BuildOptions } from './types/config';
import webpack from 'webpack';
import MiniExtractLoader from 'mini-css-extract-plugin';

export function buildPlugins({
    paths,
}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            // Hepls us to inject minimized files to HTML file
            template: paths.html,
        }),
        new webpack.ProgressPlugin(), // Shows progress
        new MiniExtractLoader({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
    ];
}
