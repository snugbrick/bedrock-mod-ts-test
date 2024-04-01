"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _minecraft_server = require("@minecraft/server");
_minecraft_server.system;
function killPlayers(event) {
    var playerName = event.playerName.toString();
    if (_minecraft_server.system.currentTick % 60 === 1) {
        _minecraft_server.world.sendMessage("welcome ".concat(playerName));
    }
}
_minecraft_server.world.afterEvents.playerJoin.subscribe(killPlayers);
