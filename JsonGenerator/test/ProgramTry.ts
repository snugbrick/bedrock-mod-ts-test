//pro.ts
import * as index from "../src/JsonTasks";
import { jsonTasksHandler } from "../src/JsonTasks";
import { jsonType } from "../src/enums/JsonTypeEnum";
import { createItemJsonContent } from "../src/generator/ItemGenerate";

function aTest() {
  let aatry: jsonTasksHandler = new jsonTasksHandler();
  aatry.createJsonTasks(
    jsonType.Entity,
    "zombie",
    createItemJsonContent("11.45.14", "MiracleUR", "nature", "/a")
  );
  aatry.createIdentifier("MiracleUR");

  let a2atry: jsonTasksHandler = new jsonTasksHandler("test2");
  a2atry.createJsonTasks(
    jsonType.Entity,
    "zombie2",
    createItemJsonContent("11.45.14", "MiracleUR", "nature", "/a")
  );
  a2atry.createIdentifier("MiracleUR");
  
  index.register(aatry);
  index.register(a2atry);
  index.generate();

  console.log("done");
}

aTest();
