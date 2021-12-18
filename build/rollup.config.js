import { getPackagesSync } from '@lerna/project';
import typescript from "rollup-plugin-typescript2";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import vue from 'rollup-plugin-vue';
import path from 'path';

const inputs = getPackagesSync().map(pkg => pkg.name).filter(name => name.includes('@magic-design'));

export default inputs.map(name => {
    const pkgName = name.split("@magic-design/")[1];
    return {
        input: path.resolve(__dirname, `../packages/${pkgName}/index.ts`),
        output: {
            format: "es",
            file: `lib/${pkgName}/index.js`
        },
        plugins: [
            nodeResolve(),
            vue({
                target: "browser"
            }),
            typescript({
                tsconfigOverride: {
                    compilerOptions: {
                        declaration: false,
                    },
                    exclude: [
                        "node_modules",
                    ]
                },
            })
        ],
        external(id) {
            return /^vue/.test(id) || /^@magic-design/.test(id);
        }
    }
})



