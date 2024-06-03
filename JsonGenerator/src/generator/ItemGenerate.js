"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createItemJsonContent = exports.itemJsonContent = void 0;
var itemJsonContent = /** @class */ (function () {
    function itemJsonContent() {
    }
    return itemJsonContent;
}());
exports.itemJsonContent = itemJsonContent;
//117965902
function createItemJsonContent(version, 
//description
identifier, category, 
//components
icon, stacked_by_data, foil, max_stack_size) {
    var _a;
    var itemJson = {
        format_version: "".concat(version),
        "minecraft:item": {
            description: {
                identifier: "".concat(identifier),
                category: "".concat(category),
            },
            components: {
                "minecraft:stacked_by_data": stacked_by_data !== null && stacked_by_data !== void 0 ? stacked_by_data : false,
                "minecraft:foil": foil !== null && foil !== void 0 ? foil : false,
                "minecraft:max_stack_size": max_stack_size !== null && max_stack_size !== void 0 ? max_stack_size : 0,
                "minecraft:icon": {
                    texture: (_a = "".concat(icon)) !== null && _a !== void 0 ? _a : null,
                },
            },
        },
    };
    //删除多余行 （感觉好像dom）:/
    deleteExtraRows(itemJson);
    return itemJson;
}
exports.createItemJsonContent = createItemJsonContent;
function deleteExtraRows(itemJson) {
    for (var key in itemJson["minecraft:item"].components) {
        var typedKey = key;
        if (itemJson["minecraft:item"].components[typedKey] === null ||
            itemJson["minecraft:item"].components[typedKey] === false ||
            itemJson["minecraft:item"].components[typedKey] === 0) {
            delete itemJson["minecraft:item"].components[typedKey];
        }
    }
}
