// 打包 esm 模块
import typescript from "rollup-plugin-typescript2";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import vue from 'rollup-plugin-vue';
import path from 'path';
import moveFilePlugin from "./rollup-plugins/moveFilePlugin";
const { LibPath } = require("./paths");

export default {
    input: path.resolve(__dirname, '../packages/magic-design/index.ts'),

    output: {
        format: "es",
        file: path.join(LibPath, "index.esm.js")
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
        }),
        moveFilePlugin({
            fromFile: path.join(LibPath, 'magic-design/index.d.ts'),
            toFile: path.join(LibPath, 'index.d.ts')
        })
    ],
    external(id) {
        return /^vue/.test(id);
    }
}
