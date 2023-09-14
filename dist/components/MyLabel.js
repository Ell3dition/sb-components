"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyLabel = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
require("./MyLabel.css");
const MyLabel = ({ label, size = "normal", allCaps = false, color = "text-primary", fontColor = "#000000", backgroundColor = "transparent", }) => {
    return ((0, jsx_runtime_1.jsx)("span", { className: `${size} ${color}`, style: { color: fontColor, backgroundColor }, children: allCaps ? label.toUpperCase() : label }));
};
exports.MyLabel = MyLabel;
