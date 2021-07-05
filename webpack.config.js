const nodeExternals = require("webpack-node-externals");
const path = require("path");

module.exports = {
    entry: "./src/main.ts",
    target: "node",
    externals: [nodeExternals()],
    mode: "production",
    module: {
        rules: [
            {
                test: /\.tsx$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        modules: ["src"],
        extensions: [".ts", ".js"]
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "build")
    }
};