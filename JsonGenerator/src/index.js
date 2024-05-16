"use strict";
// generate-json.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonTasksHandler = exports.generate = exports.register = void 0;
var fs = require("node:fs");
//注册当前json任务
var _jsonTasks = [];
function register(tasks) {
    _jsonTasks === null || _jsonTasks === void 0 ? void 0 : _jsonTasks.push(tasks);
}
exports.register = register;
function generate() {
    if (_jsonTasks && _jsonTasks.length > 0) {
        var type = _jsonTasks[0].type;
        var name_1 = _jsonTasks[0].name;
        var filePath_1 = "./product/".concat(name_1, ".json");
        var fileFolder = "./product";
        if (!fs.existsSync(fileFolder)) {
            fs.mkdirSync(fileFolder, { recursive: true });
        }
        fs.writeFile(filePath_1, JSON.stringify(_jsonTasks[0]), function (err) {
            if (err) {
                console.error("Error writing JSON file:", err);
            }
            else {
                console.log("JSON data has been written to ".concat(filePath_1));
            }
            console.log("done");
            console.log(JSON.stringify(_jsonTasks[0]));
        });
    }
    else {
        console.error("_jsonTasks is undefined or empty");
    }
}
exports.generate = generate;
var jsonTasksHandler = /** @class */ (function () {
    function jsonTasksHandler() {
    }
    jsonTasksHandler.prototype.createJsonTasks = function (tasksType, fileName) {
        this.type = tasksType;
        this.name = fileName;
    };
    jsonTasksHandler.prototype.createIdentifier = function (identifier) {
        this.identifier = identifier;
    };
    return jsonTasksHandler;
}());
exports.jsonTasksHandler = jsonTasksHandler;
/* 定义要写入的 JSON 数据
const jsonData = {
    name: 'John Doe',
    age: 30,
    city: 'New York'
};

// 将 JSON 数据转换为字符串
const jsonString = JSON.stringify(jsonData, null, 2);

// 指定要写入的文件路径
const filePath = 'output.json';

// 将 JSON 字符串写入到文件
fs.writeFile(filePath, jsonString, (err) => {
    if (err) {
        console.error('Error writing JSON file:', err);
    } else {
        console.log(`JSON data has been written to ${filePath}`);
    }
});
*/
