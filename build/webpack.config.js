// 打包 umd 模块
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, "../packages/magic-design/index.ts"),
    output: {
        path: path.resolve(__dirname, "../lib"),
        filename: "index.js",
        libraryTarget: "umd",
        library: "QUI"
    },
    externals: {
        vue: {
            root: "Vue",
            commonjs: "vue",
            commonjs2: "vue"
        }
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.vue']
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ]
            },
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: "vue-loader"
                    }
                ]
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}
