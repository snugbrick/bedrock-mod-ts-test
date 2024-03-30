import { DimensionLocation,Entity, World, world, Block } from "@minecraft/server";
import { MinecraftEffectTypes } from "@minecraft/vanilla-data";
import {  } from "@minecraft/common";
import {} from "./Y_Test/define";
import {} from "./Y_Test/file";

function log(log: String) {
  Array["from"](world["getPlayers"]())["forEach"]((player) => {
    player["tell"](log);
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
