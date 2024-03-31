import {
  world,
  system,
  Player,
  ItemStartUseAfterEvent,
  ItemStopUseAfterEvent,
} from "@minecraft/server";

let tickCount = 0;
let tickTurkeyStartEating = -1;

function startAfterItemUse(event: ItemStartUseAfterEvent) {
  if (!event.source || event.source.typeId !== "minecraft:player") {
    return;
  }

  if (event.itemStack.typeId === "mamm_cds:cooked_dream_turkey") {
    tickTurkeyStartEating = tickCount;
  }
}
function stopAfterItemUse(event: ItemStopUseAfterEvent) {
  if (!event.source || event.source.typeId !== "minecraft:player") {
    return;
  }

  if (
    event.itemStack &&
    event.itemStack.typeId === "mamm_cds:cooked_dream_turkey"
  ) {
    if (
      tickCount - tickTurkeyStartEating > 60 &&
      event.source &&
      event.source.typeId === "minecraft:player"
    ) {
      startDreamSleep(event.source as Player);
    }
  }
}
function startDreamSleep(player: Player) {
  player.onScreenDisplay.setActionBar("§oYou're getting sleepy...§r");
  player.onScreenDisplay.setTitle(" ", {
    fadeInDuration: 20,
    fadeOutDuration: 20,
    stayDuration: 100,
  });
}
