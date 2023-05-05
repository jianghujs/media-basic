import babel from 'rollup-plugin-babel'; // 大家都理解，方便使用 javascript 的新特性,es新特性的解析
import commonjs from 'rollup-plugin-commonjs'; // 插件将CommonJS模块转换为 ES2015 提供给 Rollup 处理
import replace from 'rollup-plugin-replace'; // 变量替换，可以将动态设置的变量提取出来在配置文件中设置
import nodeResolve from 'rollup-plugin-node-resolve';
import copy from 'rollup-plugin-copy';  // 直接复制文件和文件夹。
import {terser} from 'rollup-plugin-terser'; // 压缩


const isProd = process.env.NODE_ENV === 'production';

const baseConfig = {
    output: {
        format: 'umd',
        sourcemap: !isProd,
    },
    plugins: [
        nodeResolve(),
        commonjs(),
        babel({
            runtimeHelpers: true,
            exclude: 'node_modules/**',
            presets: [
                [
                    '@babel/preset-env',
                    {
                        modules: false,
                    },
                ],
            ],
            plugins: ['@babel/plugin-external-helpers', '@babel/plugin-transform-runtime'],
        }),
        replace({
            exclude: 'node_modules/**',
            __ENV__: JSON.stringify(process.env.NODE_ENV || 'development'),
        }),
        isProd && terser({
            output: {
                comments: () => false,
            },
        }),
        isProd && {
            name: 'removeHtmlSpace',
            transform(code) {
                return {
                    code: code.replace(/\\n*\s*</g, '<').replace(/>\\n*\s*/g, '>'),
                };
            },
        },
        copy({
            targets: [
                {
                    src: "decoder/decoder-full.wasm",
                    dest: 'demo'
                },
            ],
            verbose: true, // Output copied items to console.
            copyOnce: true //  Copy items once. Useful in watch mode.
        })
    ],
};

export default [
    {
        input: 'src/index.js',
        output: {
            name: 'demo',
            file: isProd ? 'demo/flv-decoder.js':'demo/flv-decoder.dev.js',
        },
        plugins: [],
    }
].map(config => {
    return {
        input: config.input,
        output: {
            ...baseConfig.output,
            ...config.output,
        },
        plugins: [...baseConfig.plugins, ...config.plugins],
    };
});
