"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vite_1 = require("vite");
var plugin_react_1 = require("@vitejs/plugin-react");
var path_1 = require("path"); // You might need to install @types/node: yarn add -D @types/node
exports.default = (0, vite_1.defineConfig)({
    plugins: [(0, plugin_react_1.default)()],
    resolve: {
        alias: {
            // This maps the "@" symbol to your src folder
            "@": path_1.default.resolve(__dirname, "./src"),
        },
    },
});
