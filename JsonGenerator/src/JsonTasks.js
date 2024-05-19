"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonTasksHandler = exports.generate = exports.register = void 0;
//JsonTasks.ts
var fs = require("node:fs");
var JsonTypeEnum_1 = require("./enums/JsonTypeEnum");
var _jsonTasks = [];
function register(tasks) {
    _jsonTasks === null || _jsonTasks === void 0 ? void 0 : _jsonTasks.push(tasks);
}
exports.register = register;
/**
 * when generate start,if there are not have ./product folder
 * ,it will happen some error
 *
 * @issue status:
 * Will not Fix
 * @since 1.0.0
 */
function generate() {
    var _a, _b, _c, _d, _e, _f;
    if (_jsonTasks && _jsonTasks.length > 0) {
        var _loop_1 = function (i) {
            //json类型分析
            (0, JsonTypeEnum_1.checkType)(_jsonTasks[i].type);
            var filePath = "./product/".concat((_a = _jsonTasks[i]) === null || _a === void 0 ? void 0 : _a.path, "/").concat((_b = _jsonTasks[i]) === null || _b === void 0 ? void 0 : _b.name, ".json");
            var fileFolder = "./product/".concat((_c = _jsonTasks[i]) === null || _c === void 0 ? void 0 : _c.path);
            if (((_d = _jsonTasks[i]) === null || _d === void 0 ? void 0 : _d.path) && !fs.existsSync(fileFolder))
                fs.mkdirSync(fileFolder, { recursive: true });
            else if (!((_e = _jsonTasks[i]) === null || _e === void 0 ? void 0 : _e.path))
                filePath = "./product/".concat((_f = _jsonTasks[i]) === null || _f === void 0 ? void 0 : _f.name, ".json");
            fs.writeFile(filePath, JSON.stringify(_jsonTasks[i].content), function (err) {
                if (err)
                    console.error("Error writing JSON file:", err);
                else
                    console.log("JSON data has been written to ./product/".concat(filePath));
                console.log("".concat(_jsonTasks[i].name, "done"));
            });
        };
        for (var i = 0; i < _jsonTasks.length; i++) {
            _loop_1(i);
        }
    }
    else {
        console.error("_jsonTasks is undefined or empty");
    }
}
exports.generate = generate;
var jsonTasksHandler = /** @class */ (function () {
    function jsonTasksHandler(path) {
        if (path)
            this.path = path;
    }
    jsonTasksHandler.prototype.createJsonTasks = function (tasksType, fileName, content) {
        this.type = tasksType;
        this.name = fileName;
        this.content = content;
    };
    jsonTasksHandler.prototype.createIdentifier = function (identifier) {
        this.identifier = identifier;
    };
    return jsonTasksHandler;
}());
exports.jsonTasksHandler = jsonTasksHandler;
