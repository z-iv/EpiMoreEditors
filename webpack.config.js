const path = require("path");
const env = process.env.NODE_ENV;

module.exports = {
    mode: env || 'development',
    entry: path.resolve(__dirname, "Scripts/main.js"),
    output: {
        filename: "Editors.js",
        libraryTarget: "amd",
        libraryExport: "default",
        path: path.resolve(__dirname, "ClientResources/Editors/")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    externals: [
        "dojo/_base/declare",
        "dijit/_WidgetBase"
    ]
};