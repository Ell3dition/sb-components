"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomBackground = exports.CustomColor = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
const MyLabel_1 = require("../components/MyLabel");
const meta = {
    title: "My Label",
    component: MyLabel_1.MyLabel,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        size: {
            control: "select",
        },
        color: {
            control: "select",
        },
        fontColor: {
            control: "color",
        },
    },
};
exports.default = meta;
exports.Basic = {
    args: {
        label: "Basic label",
    },
};
exports.AllCaps = {
    args: {
        label: "AllCaps",
        size: "normal",
        allCaps: true,
    },
};
exports.Secondary = {
    args: {
        label: "Secondary",
        size: "normal",
        color: "text-secondary",
    },
};
exports.CustomColor = {
    args: {
        label: "Custom color",
        size: "normal",
        fontColor: "red",
    },
};
exports.CustomBackground = {
    args: {
        label: "Custom color",
        size: "normal",
        fontColor: "red",
        backgroundColor: "black",
    },
};
