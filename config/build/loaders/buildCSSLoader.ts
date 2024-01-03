import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildCSSLoader = (isDev: boolean) => ({
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
                    auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                    localIdentName: isDev
                        ? '[path][name]__[local]'
                        : '[hash:base64:8]',
                },
            },
        },
        // Compiles Sass to CSS
        'sass-loader',
    ],
});
