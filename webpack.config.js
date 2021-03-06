const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const packageJson = require('./package.json')

const isProd = process.env.NODE_ENV === 'production';

const plugins = [];
if (isProd) {
    plugins.push(new UglifyJsPlugin());
}

const calcPackageName = (packageJsonName) => packageJsonName.replace("@", "").replace("/", "-");
const calcRootName = (pkgName) => pkgName.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase()).replace(/ /g, "");

const pkgName = calcPackageName(packageJson.name);
const rootName = calcRootName(pkgName);

const orgName = packageJson.name.indexOf("@") === 0 ? packageJson.name.split("/")[0] : undefined;
const externals = [];

if (orgName) {
    externals.push(new RegExp(`^(${orgName})`));
}

module.exports = {
    entry: path.resolve(__dirname, './dist/index.js'),
    output: {
        path: path.resolve(__dirname, './pkg'),
        filename: pkgName + (isProd ? '.min' : '') + '.js',
        libraryTarget: 'umd',
        libraryExport: undefined,
        library: {
            root: rootName,
            amd: packageJson.name,
            commonjs: packageJson.name
        },
        umdNamedDefine: true,
        globalObject: 'typeof self !== \'undefined\' ? self : this'
    },
    target: "web",
    externals,
    mode: isProd ? "production" : "development",
    devtool: isProd ? undefined : "inline-source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        "presets": [
                            [
                                "@babel/preset-env", {
                                    "targets": {
                                        "browsers": [
                                            "Chrome >= 52",
                                            "FireFox >= 44",
                                            "Safari >= 7",
                                            "Explorer 11",
                                            "last 4 Edge versions"
                                        ]
                                    } 
                                }
                            ]
                        ],
                        "plugins": [
                            [
                                "@babel/plugin-transform-runtime",
                                {
                                    "helpers": false,
                                    "regenerator": true
                                }
                            ],
                            [
                                "babel-plugin-transform-builtin-extend",
                                {
                                    "globals": ["Error"]
                                }
                            ]
                        ]
                    }
                }
            }
        ]
    },
    node: {
        fs: "empty",
        path: "empty",
        console: false,
        global: false,
        process: false,
        __filename: false,
        __dirname: false,
        Buffer: false,
        setImmediate: false
    },
    plugins
};
