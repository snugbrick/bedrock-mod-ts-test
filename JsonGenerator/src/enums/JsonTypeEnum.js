"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkType = exports.jsonType = void 0;
var jsonType;
(function (jsonType) {
    jsonType[jsonType["Entity"] = 0] = "Entity";
    jsonType[jsonType["Item"] = 1] = "Item";
    jsonType[jsonType["Block"] = 2] = "Block";
})(jsonType || (exports.jsonType = jsonType = {}));
function checkType(type) {
    switch (type) {
        case jsonType.Block:
            break;
        case jsonType.Entity:
            break;
        case jsonType.Item:
            break;
    }
}
exports.checkType = checkType;
