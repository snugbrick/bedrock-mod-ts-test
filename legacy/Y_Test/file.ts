import {
    world,
    system
  } from "@minecraft/server";

function getPlayer() {
  const allPlayers = world.getAllPlayers();
  if (allPlayers.length === 0) {
    return undefined;
  }

  return allPlayers[0];
}

function getPlayerDimension() {
  const player = getPlayer();
  if (player === undefined) {
    return undefined;
  }
  return player.dimension;
}

function getPlayerLocation() {
  const player = getPlayer();
  if (player === undefined) {
    return undefined;
  }
  return player.location;
}

function mainTick() {
  if (system.currentTick % 200 === 0) {
    const playerDimension = getPlayerDimension();
    const playerLocation = getPlayerLocation();
    if (playerDimension !== undefined && playerLocation !== undefined) {
      if (playerDimension.id === "minecraft:overworld") { 
        playerDimension.spawnEntity("minecraft:fox", playerLocation); 
      } 
      else if (playerDimension.id === "minecraft:nether") { 
        playerDimension.spawnEntity("minecraft:hoglin", playerLocation); 
      }
      else {
        playerDimension.spawnEntity("minecraft:wolf", playerLocation);
      }
    }
  }
  system.run(mainTick);
}

system.run(mainTick);

//copy from : https://learn.microsoft.com/en-us/minecraft/creator/documents/scriptingintroduction?view=minecraft-bedrock-stable :)