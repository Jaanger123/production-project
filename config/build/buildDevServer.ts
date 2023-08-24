import { BuildOptions } from "./types/config";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true, // This option is responsible for directing our request via index.html file, that allow us to reload page at any endpoint in browser (This error occures cause of SPA)
    };
}
