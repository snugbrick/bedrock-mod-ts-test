// generate-json.ts

import * as fs from "node:fs";

//注册当前json任务
const _jsonTasks: jsonTasks[] | undefined = [];
export function register(tasks: jsonTasks): void {
  _jsonTasks?.push(tasks);
}

export function generate() {
  if (_jsonTasks && _jsonTasks.length > 0) {
    let type = _jsonTasks[0].type;
    let name = _jsonTasks[0].name;
    let filePath = `./product/${name}.json`;
    let fileFolder = "./product";
    if (!fs.existsSync(fileFolder)) {
      fs.mkdirSync(fileFolder, { recursive: true });
    }

    fs.writeFile(filePath, JSON.stringify(_jsonTasks[0]), (err) => {
      if (err) {
        console.error("Error writing JSON file:", err);
      } else {
        console.log(`JSON data has been written to ${filePath}`);
      }
      console.log("done");
      console.log(JSON.stringify(_jsonTasks[0]));
    });
  } else {
    console.error("_jsonTasks is undefined or empty");
  }
}

export interface jsonTasks {
  type: string | undefined;
  name: string | undefined;
  identifier: string | undefined;

  createJsonTasks(type: string, name: string): void; //创建json目标
  createIdentifier(identifier: string): void;
}

export class jsonTasksHandler implements jsonTasks {
  type: string | undefined;
  name: string | undefined;
  identifier: string | undefined;

  createJsonTasks(tasksType: string, fileName: string): void {
    this.type = tasksType;
    this.name = fileName;
  }
  createIdentifier(identifier: string): void {
    this.identifier = identifier;
  }
}
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
