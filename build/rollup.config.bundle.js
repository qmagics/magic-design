// 打包 esm 模块
import typescript from "rollup-plugin-typescript2";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import vue from 'rollup-plugin-vue';
import path from 'path';

export default {
    input: path.resolve(__dirname, '../packages/magic-design/index.ts'),

    output: {
        format: "es",
        file: "lib/index.esm.js"
    },

    plugins: [
        nodeResolve(),
        vue({
            target: "browser"
        }),
        typescript({
            tsconfigOverride: {
                exclude: [
                    "node_modules",
                    "docs"
                ]
            },
        })
    ],
    external(id) {
        return /^vue/.test(id);
    }
}
