//JsonTasks.ts
import * as fs from "node:fs";
import { jsonType, checkType } from "./enums/JsonTypeEnum";
import { jsonContent } from "./generator/ItemGenerate";

const _jsonTasks: jsonTasks[] | undefined = [];

export function register(tasks: jsonTasks): void {
  _jsonTasks?.push(tasks);
}

/**
 * when generate start,if there are not have ./product folder
 * ,it will happen some error
 *
 * @issue status:
 * Will not Fix
 * @since 1.0.0
 */
export function generate(): void {
  if (_jsonTasks && _jsonTasks.length > 0) {
    for (let i: number = 0; i < _jsonTasks.length; i++) {
      //json类型分析
      checkType(_jsonTasks[i].type);

      let filePath = `./product/${_jsonTasks[i]?.path}/${_jsonTasks[i]?.name}.json`;
      let fileFolder = `./product/${_jsonTasks[i]?.path}`;
      if (_jsonTasks[i]?.path && !fs.existsSync(fileFolder))
        fs.mkdirSync(fileFolder, { recursive: true });
      else if (!_jsonTasks[i]?.path)
        filePath = `./product/${_jsonTasks[i]?.name}.json`;

      fs.writeFile(filePath, JSON.stringify(_jsonTasks[i].content), (err) => {
        if (err) console.error("Error writing JSON file:", err);
        else console.log(`JSON data has been written to ./product/${filePath}`);

        console.log(`${_jsonTasks[i].name}done`);
      });
    }
  } else {
    console.error("_jsonTasks is undefined or empty");
  }
}
//131 399297
interface jsonTasks {
  type: jsonType | undefined;
  name: string | undefined;
  identifier: string | undefined;
  path: string | undefined;
  content: jsonContent | undefined;

  createJsonTasks(type: jsonType, name: string, content: jsonContent): void;
  createIdentifier(identifier: string): void;
}

export class jsonTasksHandler implements jsonTasks {
  type: jsonType | undefined;
  name: string | undefined;
  identifier: string | undefined;
  path: string | undefined;
  content: jsonContent | undefined;

  constructor(path?: string) {
    if (path) this.path = path;
  }

  createJsonTasks(
    tasksType: jsonType,
    fileName: string,
    content: jsonContent
  ): void {
    this.type = tasksType;
    this.name = fileName;
    this.content = content;
  }
  createIdentifier(identifier: string): void {
    this.identifier = identifier;
  }
}
