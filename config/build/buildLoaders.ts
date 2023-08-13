import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
    const typescriptLoader = {
        // Loader for TS
        test: /\.tsx?$/, // TS and TSX files
        use: "ts-loader",
        exclude: /node_modules/,
    };

    return [typescriptLoader];
}
