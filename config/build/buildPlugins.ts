import HtmlWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from "./types/config";
import webpack from "webpack";

export function buildPlugins({
    paths,
}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            // Hepls us to inject minimized files to HTML file
            template: paths.html,
        }),
        new webpack.ProgressPlugin(), // Shows progress
    ];
}
