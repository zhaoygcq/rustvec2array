"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
function transform(param) {
    var res = [];
    if (param && param.length) {
        for (var _i = 0, param_1 = param; _i < param_1.length; _i++) {
            var item = param_1[_i];
            res.push(transformItem(item));
        }
    }
    return res;
}
exports["default"] = transform;
function transformItem(item) {
    var res = {};
    if (item) {
        for (var key in item) {
            if (typeof item[key] === 'object') {
                res = __assign(__assign({}, res), item[key]);
            }
            else {
                res = item[key];
            }
        }
    }
    return res;
}
