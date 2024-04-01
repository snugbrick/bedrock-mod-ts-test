import * as _minecraft_server from "@minecraft/server";

_minecraft_server.system;

function killPlayers(event: _minecraft_server.PlayerJoinAfterEvent) {
  const playerName = event.playerName.toString();
  if (_minecraft_server.system.currentTick % 60 === 1) {
    _minecraft_server.world.sendMessage(`welcome ${playerName}`);
  }
}

_minecraft_server.world.afterEvents.playerJoin.subscribe(killPlayers);
