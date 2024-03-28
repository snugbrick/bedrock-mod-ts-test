/*Obfuscated by JShaman.com*/
import *as _0x5bdfd3 from '@minecraft/server';
const world = _0x5bdfd3['world'];
const overworld = world['getDimension']('overworld');
function runCommand(_0x294e64) {
    return overworld['runCommandAsync'](_0x294e64);
}
function toLocation(_0x521574) {
    return new _0x5bdfd3['Location'](_0x521574['x'], _0x521574['y'], _0x521574['z']);
}
function log(_0x1ac497) {
    Array['from'](world['getPlayers']())['forEach'](_0x1a8d77 => { _0x1a8d77['tell'](_0x1ac497); });
}
const int = parseInt;
function getScore(_0x228124, _0x57ec99) {
    return world['scoreboard']['getObjective'](_0x228124) == undefined ? undefined : world['scoreboard']['getObjective'](_0x228124)['getParticipants']
        ()['find'](_0x4bc486 => {
            return _0x4bc486['displayName'] == _0x57ec99;
        }) == undefined ? undefined : world['scoreboard']['getObjective'](_0x228124)['getScore'](world['scoreboard']['getObjective'](_0x228124)['getParticipants']()['find'](_0x31ec8a => { return _0x31ec8a['displayName'] == _0x57ec99; }));
}
export { int, getScore, _0x5bdfd3 as mc, world, overworld, runCommand, log, toLocation };