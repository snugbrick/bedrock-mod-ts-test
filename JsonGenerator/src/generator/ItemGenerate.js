"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createJsonContent = exports.jsonContent = void 0;
var jsonContent = /** @class */ (function () {
    function jsonContent() {
    }
    jsonContent.prototype.addDescription = function (json, identifier, category) {
        json.identifier = identifier;
        json.category = category;
        return json;
    };
    return jsonContent;
}());
exports.jsonContent = jsonContent;
function createJsonContent(version, 
//description
identifier, category, 
//components
stacked_by_data, foil, max_stack_size, icon) {
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
        addDescription: function (json, identifier, category) {
            throw new Error("Function not implemented.");
        },
    };
    //删除多余行 （感觉好像dom）:/
    deleteExtraRows(itemJson);
    return itemJson;
}
exports.createJsonContent = createJsonContent;
function deleteExtraRows(itemJson) {
    for (var key in itemJson["minecraft:item"].components) {
        var typedKey = key;
        if (itemJson["minecraft:item"].components[typedKey] === null ||
            itemJson["minecraft:item"].components[typedKey] === false ||
            itemJson["minecraft:item"].components[typedKey] === 0)
            delete itemJson["minecraft:item"].components[typedKey];
    }
}
