import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildCssLoader } from './loaders/buildCssLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const cssloader = buildCssLoader(isDev);

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };
    const fileLoader = {
        test: /\.(png|jpe?g|gif|webp|woff|woff2|eot|ttf)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const babelLoader = buildBabelLoader(options);

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        cssloader
    ];
}
