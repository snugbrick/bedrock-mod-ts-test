import * as atry from "../src/index";

function a() {
  let aatry: atry.jsonTasksHandler = new atry.jsonTasksHandler();
  aatry.createJsonTasks("entity", "zombie");
  aatry.createIdentifier("MiracleUR");

  atry.register(aatry);
  atry.generate();

  console.log("done");
}

a();
