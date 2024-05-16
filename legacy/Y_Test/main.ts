import { world, system, PlayerJoinAfterEvent } from "@minecraft/server";

function killPlayers(event: PlayerJoinAfterEvent) {
  const playerName = event.playerName.toString();
  if (system.currentTick % 60 === 1) {
    world.sendMessage(`welcome ${playerName}`);
  }
}

world.afterEvents.playerJoin.subscribe(killPlayers);