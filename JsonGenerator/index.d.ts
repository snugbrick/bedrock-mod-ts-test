//index.d.ts
declare module "index" {
  export interface jsonTasks {
    createJsonTasks(type: string, name: string): void;
    createIdentifier(identifier: string): void;
  }

  export class jsonTasksHandler implements jsonTasks {
    createJsonTasks(tasksType: string, fileName: string): void;
    createIdentifier(identifier: string): void;
  }

  export function register(tasks: jsonTasks): void;
  
  export function generate(): void;
}
