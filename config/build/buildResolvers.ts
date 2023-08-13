import webpack from "webpack";

export function buildResolvers(): webpack.ResolveOptions {
    return {
        // To import files without writing its extension (import Component from 'Component')
        extensions: [".tsx", ".ts", ".js"],
    };
}
