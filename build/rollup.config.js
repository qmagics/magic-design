import { getPackagesSync } from '@lerna/project';
import typescript from "rollup-plugin-typescript2";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import vue from 'rollup-plugin-vue';
import path from 'path';
import fs from 'fs';
const { LibPath } = require("./paths");

// pkgs (excludes theme-chalk)
const pkgs = getPackagesSync().map(pkg => pkg.name)
    .filter(name => name.includes('@magic-design') && !name.includes('theme-chalk'))
    .map(name => {
        const pkgName = name.split("@magic-design/")[1];
        return {
            name,
            input: path.resolve(__dirname, `../packages/${pkgName}/index.ts`),
            file: path.join(LibPath, `${pkgName}/index.js`)
        }
    });

// components
const componentsDir = fs.readdirSync(path.resolve(__dirname, '../packages/components'))
    .filter(i => fs.lstatSync(path.resolve(__dirname, `../packages/components/${i}`)).isDirectory());
const componentsPkgs = componentsDir.map(name => ({
    name,
    input: path.resolve(__dirname, `../packages/components/${name}/index.ts`),
    file: path.join(LibPath, `components/${name}/index.js`)
}));

// inputs
const inputs = [...pkgs, ...componentsPkgs];

export default inputs.map(({ name, input, file }) => {
    return {
        input,
        output: {
            format: "es",
            file
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