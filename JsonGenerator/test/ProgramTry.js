"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//pro.ts
var index = require("../src/JsonTasks");
var JsonTasks_1 = require("../src/JsonTasks");
var JsonTypeEnum_1 = require("../src/enums/JsonTypeEnum");
var ItemGenerate_1 = require("../src/generator/ItemGenerate");
function aTest() {
    var aatry = new JsonTasks_1.jsonTasksHandler();
    aatry.createJsonTasks(JsonTypeEnum_1.jsonType.Entity, "zombie", (0, ItemGenerate_1.createItemJsonContent)("11.45.14", "MiracleUR", "nature", "/a"));
    aatry.createIdentifier("MiracleUR");
    var a2atry = new JsonTasks_1.jsonTasksHandler("test2");
    a2atry.createJsonTasks(JsonTypeEnum_1.jsonType.Entity, "zombie2", (0, ItemGenerate_1.createItemJsonContent)("11.45.14", "MiracleUR", "nature", "/a"));
    a2atry.createIdentifier("MiracleUR");
    index.register(aatry);
    index.register(a2atry);
    index.generate();
    console.log("done");
}
aTest();
