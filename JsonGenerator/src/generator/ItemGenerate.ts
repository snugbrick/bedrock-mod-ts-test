import { Key } from "node:readline";

interface ItemDescription {
  identifier: string;
  category: string;
}

interface ItemComponents {
  "minecraft:stacked_by_data": boolean;
  "minecraft:foil": boolean;
  "minecraft:max_stack_size": number;
  "minecraft:icon": {
    texture: string;
  };
}
//出包王女 不道德工会
export class itemJsonContent {
  format_version?: string;
  "minecraft:item": {
    description: ItemDescription;
    components: ItemComponents;
  };
}
//117965902
export function createItemJsonContent(
  version: string,
  //description
  identifier: string,
  category: string,
  //components
  icon: string,
  stacked_by_data?: boolean,
  foil?: boolean,
  max_stack_size?: number
): itemJsonContent {
  let itemJson: itemJsonContent = {
    format_version: `${version}`,
    "minecraft:item": {
      description: {
        identifier: `${identifier}`,
        category: `${category}`,
      },
      components: {
        "minecraft:stacked_by_data": stacked_by_data ?? false,
        "minecraft:foil": foil ?? false,
        "minecraft:max_stack_size": max_stack_size ?? 0,
        "minecraft:icon": {
          texture: `${icon}` ?? null,
        },
      },
    },
  };
  //删除多余行 （感觉好像dom）:/
  deleteExtraRows(itemJson);

  return itemJson;
}

function deleteExtraRows(itemJson: itemJsonContent) {
  for (let key in itemJson["minecraft:item"].components) {
    let typedKey: keyof ItemComponents = key as keyof ItemComponents;
    if (
      itemJson["minecraft:item"].components[typedKey] === null ||
      itemJson["minecraft:item"].components[typedKey] === false ||
      itemJson["minecraft:item"].components[typedKey] === 0
    ) {
      delete itemJson["minecraft:item"].components[typedKey];
    }
  }
}
