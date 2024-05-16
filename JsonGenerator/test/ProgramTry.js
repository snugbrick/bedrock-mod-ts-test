"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var atry = require("../src/index");
function a() {
    var aatry = new atry.jsonTasksHandler();
    aatry.createJsonTasks("entity", "zombie");
    aatry.createIdentifier("MiracleUR");
    atry.register(aatry);
    atry.generate();
    console.log("done");
}
a();
