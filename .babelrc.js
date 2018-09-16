// XXX: There must be a better way
const IS_JEST = process.argv.join("").includes("jest");

// only for es imports
const nodeSupport = [
    "@babel/preset-env",
    {
        targets: {
            node: "current",
        },
    },
];

const browserSupport = [
    "@babel/preset-env",
    {
        // http://browserl.ist/?q=%3E+0.5%25%2C+not+dead%2C+not+samsung+%3C%3D+4%2C+not+android+%3E+0%2C+not+op_mini+%3E+0%2C+not+ie+%3E+0
        targets: [
            "> 0.5%",
            "not dead",
            "not samsung <= 4",
            "not android > 0",
            "not op_mini > 0",
            "not ie > 0 ",
        ],
        // We will transform async functions to generators.
        // It gives  us smaller bundlers and better debugging experience
        exclude: ["transform-regenerator"],
    },
];

let config = {
    presets: ["@babel/preset-typescript", "@babel/preset-react"],
    plugins: [
        "@babel/plugin-proposal-class-properties",
        // "@babel/plugin-syntax-dynamic-import",
    ],
};

if (IS_JEST) {
    config.presets.push(nodeSupport);
} else {
    config.presets.push(browserSupport);
    // The generator transform for async functions
    config.plugins.push("@babel/plugin-transform-async-to-generator");
}

module.exports = config;
