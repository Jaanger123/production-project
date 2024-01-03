import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { buildCSSLoader } from '../build/loaders/buildCSSLoader';
import { BuildPaths } from '../build/types/config';
import { buildSVGLoader } from '../build/loaders/buildSVGLoader';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');

    if ((config.module?.rules) !== undefined) {
        // eslint-disable-next-line no-param-reassign
        config.module.rules = config.module.rules.map((rule: RuleSetRule | '...') => {
            if (
                rule !== '...'
                && rule.test instanceof RegExp
                && rule.test.toString().includes('svg')
            ) {
                return { ...rule, exclude: /\.svg$/i };
            }
            return rule;
        });
    }

    config.module?.rules?.push(buildSVGLoader());
    config.module?.rules?.push(buildCSSLoader(true));

    return config;
};
