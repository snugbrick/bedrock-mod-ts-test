import {
  DimensionLocation,
  world,
  system
} from "@minecraft/server";
import { MinecraftEffectTypes } from "@minecraft/vanilla-data";
import {} from "@minecraft/common";
import {} from "./main";
import {} from "./file";

function log(log: string) {
  Array.from(world.getPlayers()).forEach((player) => {
    player.sendMessage(log);
  });
}
function spawnPoisonedVillager(location: DimensionLocation) {
  const villagerType = "minecraft:villager_v2<minecraft:ageable_grow_up>";
  const villager = location.dimension.spawnEntity(villagerType, location);
  const duration = 20;
  villager.addEffect(MinecraftEffectTypes.Poison, duration, { amplifier: 1 });
}
export class test {
  worldEntity = world.getEntity("minecraft:player");
  //line:1895
  public getEntity() {
    return this.worldEntity?.getEntitiesFromViewDirection;
  }
}
class test2 {
  worldEntity = world.getEntity("zombie");
}
log("重载成功");

let players = world.getPlayers?.toString;
//line:5587

world.beforeEvents.itemUse.subscribe((event) => {
  let myArray: string[] = ["aaa", "bbb", "ccc"];
  return event.itemStack.setLore(myArray);
});

//定制组件 https://learn.microsoft.com/en-us/minecraft/creator/documents/customcomponents?view=minecraft-bedrock-stable

