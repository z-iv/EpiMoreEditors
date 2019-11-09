const path = require("path");
const env = process.env.NODE_ENV;

// Get all entry points from Scripts/Editors
const glob = require('glob');
const entryArray = glob.sync('Scripts/Editors/*.js');
const entryObject = entryArray.reduce((acc, item) => {
    const name = item.replace('Scripts/Editors/', '').replace('.js', '');
    acc[name] = path.resolve(__dirname, item);
    return acc;
}, {});

module.exports = {
    mode: env || 'development',
    entry: entryObject,
    output: {
        filename: "[name].js",
        libraryTarget: "amd",
        libraryExport: "default",
        path: path.resolve(__dirname, "ClientResources/scripts/")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env', "@babel/preset-typescript"]
                    },
                }
            }
        ]
    },
    externals: [
        "dojo/_base/declare",
        "dijit/_WidgetBase"
    ]
};