/*Obfuscated by JShaman.com*/
import { world } from '@minecraft/server'; 
import { getScore, log, mc, overworld, runCommand, toLocation } from '../DefineLib/DefineLib'; 
function commonError() { log('§4未找到File根部'); } 
var File = { 'version': 'V0.0.1', 'Root': Array['from'](overworld['getEntities']({ 'name': 'File(root)', 'type': 'file:dir' }))[0x237fd ^ 0x237fd], 'currentPath': world['scoreboard']['getObjective']('File') != undefined ? world['scoreboard']['getObjective']('File')['getParticipants']()['find'](_0x4a36cb => { return _0x4a36cb['displayName']['startsWith']('currentPath->'); }) == undefined ? 'File(root)' : world['scoreboard']['getObjective']('File')['getParticipants']()['find'](_0x2cafa0 => { return _0x2cafa0['displayName']['startsWith']('currentPath->'); })['displayName']['substring'](0x3a759 ^ 0x3a754) : undefined, 'touch'(_0x1125f0, _0x265cc3) { _0x265cc3 = _0x265cc3 == undefined ? ![] : _0x265cc3; if (!this['inited']) { if (_0x265cc3) commonError(); return undefined; } const _0x217420 = getScore('File', 'x'); const _0x40fe38 = getScore('File', 'y'); const _0x3a3a55 = getScore('File', 'z'); var _0x2b96a6 = overworld['spawnEntity']('file:file', new mc['Location'](_0x217420, _0x40fe38, _0x3a3a55)); _0x2b96a6['nameTag'] = _0x1125f0; _0x2b96a6['addTag']('protected'); var _0x147a41 = ''; var _0x2b7dac = 'File(root)'; const _0x26048c = _0x1125f0['split']('/'); for (var _0x5c2759 = 0x46c25 ^ 0x46c25; _0x5c2759 < _0x26048c['length'] - (0x7e2bb ^ 0x7e2ba); ++_0x5c2759) { _0x147a41 += _0x26048c[_0x5c2759] + '/'; const _0x4ed49d = Array['from'](overworld['getEntities']({ 'name': _0x147a41, 'type': 'file:dir' }))[0x5d304 ^ 0x5d304]; if (_0x4ed49d == undefined) { const _0x2c7a52 = overworld['spawnEntity']('file:dir', new mc['Location'](_0x217420, _0x40fe38, _0x3a3a55)); _0x2c7a52['addTag']('protected'); _0x2c7a52['nameTag'] = _0x147a41; } Array['from'](overworld['getEntities']({ 'name': _0x2b7dac, 'type': 'file:dir' }))[0xafc24 ^ 0xafc24]['addTag'](_0x147a41); _0x2b7dac = _0x147a41; } Array['from'](overworld['getEntities']({ 'name': _0x2b7dac, 'type': 'file:dir' }))[0x6cd7e ^ 0x6cd7e]['addTag'](_0x1125f0); if (_0x265cc3) log('§2创建文件成功'); return _0x2b96a6; }, 'writeTo'(_0xcc6e54, _0x58b799, _0x3edb31) { _0x3edb31 = _0x3edb31 == undefined ? ![] : _0x3edb31; if (!this['inited']) { if (_0x3edb31) commonError(); return undefined; } var _0x45b9e3 = {}; _0x45b9e3['name'] = _0xcc6e54; _0x45b9e3['type'] = 'file:file'; const _0x25c260 = Array['from'](overworld['getEntities'](_0x45b9e3))[0xb581d ^ 0xb581d]; if (_0x25c260 == undefined) this['touch'](_0xcc6e54)['addTag'](_0x58b799); else { _0x25c260['getTags']()['forEach'](_0x4335e7 => { _0x25c260['removeTag'](_0x4335e7); }); _0x25c260['addTag']('protected'); _0x25c260['addTag'](_0x58b799); } if (_0x3edb31) log('§2写入文件成功'); return _0xcc6e54; }, 'writeLine'(_0x3feae2, _0x5175e5, _0xc6b6fe) { _0xc6b6fe = _0xc6b6fe == undefined ? ![] : _0xc6b6fe; if (!this['inited']) { if (_0xc6b6fe) commonError(); return undefined; } var _0x141c70 = {}; _0x141c70['name'] = _0x3feae2; _0x141c70['type'] = 'file:file'; const _0x40ad2e = Array['from'](overworld['getEntities'](_0x141c70))[0x4ba94 ^ 0x4ba94]; if (_0x40ad2e == undefined) this['touch'](_0x3feae2)['addTag'](_0x5175e5); else { var _0x3f44ff = File['readFrom'](_0x3feae2); _0x40ad2e['removeTag'](_0x3f44ff); _0x3f44ff += (_0x3f44ff == '' ? '' : '\x0a') + _0x5175e5; _0x40ad2e['addTag'](_0x3f44ff); } if (_0xc6b6fe) log('§2写入文件成功'); return _0x3feae2; }, 'uninit'(_0x30ed6d) { runCommand('tp\x20@e[type=file:file]\x20' + _0x30ed6d['x'] + '\x20' + _0x30ed6d['y'] + '\x20' + _0x30ed6d['z']); runCommand('tp\x20@e[type=file:dir]\x20' + _0x30ed6d['x'] + '\x20' + _0x30ed6d['y'] + '\x20' + _0x30ed6d['z']); if (world['scoreboard']['getObjective']('File') && getScore('File', 'inited')) runCommand('scoreboard\x20players\x20reset\x20\x22inited\x22\x20File'); runCommand('tickingarea\x20remove\x20File'); this['inited'] = ![]; log('OK'); }, 'init'(_0xcac75d) { if (!world['scoreboard']['getObjective']('File')) world['scoreboard']['addObjective']('File', 'File'); var _0x562997 = {}; _0x562997['type'] = 'file:dir'; _0x562997['name'] = 'File(root)'; runCommand('scoreboard\x20players\x20set\x20\x22currentPath->File(root)\x22\x20File\x201'); this['currentPath'] = 'File(root)'; runCommand('scoreboard\x20players\x20set\x20\x22inited\x22\x20File\x201'); runCommand('tickingarea\x20add\x20' + _0xcac75d['x']['toFixed']() + '\x20' + _0xcac75d['y']['toFixed']() + '\x20' + _0xcac75d['z']['toFixed']() + '\x20' + _0xcac75d['x']['toFixed']() + '\x20' + _0xcac75d['y']['toFixed']() + '\x20' + _0xcac75d['z']['toFixed']() + '\x20File\x20true'); if (Array['from'](overworld['getEntities'](_0x562997))['length'] == (0xde2cd ^ 0xde2cd)) { var _0xd60297 = overworld['spawnEntity']('file:dir', toLocation(_0xcac75d)); _0xd60297['nameTag'] = 'File(root)'; _0xd60297['addTag']('protected'); } runCommand('scoreboard\x20players\x20set\x20\x22x\x22\x20File\x20' + _0xcac75d['x']['toFixed']()); runCommand('scoreboard\x20players\x20set\x20\x22y\x22\x20File\x20' + _0xcac75d['y']['toFixed']()); runCommand('scoreboard\x20players\x20set\x20\x22z\x22\x20File\x20' + _0xcac75d['z']['toFixed']()); this['inited'] = !![]; this['Root'] = Array['from'](overworld['getEntities']({ 'name': 'File(root)', 'type': 'file:dir' }))[0x44593 ^ 0x44593]; log('OK'); }, 'delete'(_0x81fed7, _0x2a61ca) { _0x2a61ca = _0x2a61ca == undefined ? ![] : _0x2a61ca; const _0x565c19 = Array['from'](overworld['getEntities']({ 'name': _0x81fed7, 'type': _0x81fed7['endsWith']('/') ? 'file:dir' : 'file:file' }))[0x0]; if (!_0x565c19) { if (_0x2a61ca) log('§4未找到该文件'); return null; } if (_0x81fed7['endsWith']('/')) _0x565c19['getTags']()['forEach'](_0x14521d => { if (!(_0x14521d == 'protected')) this['delete'](_0x14521d); }); const _0x1b121c = _0x81fed7['endsWith']('/') && _0x81fed7['split']('/')['length'] == 0x2 || !_0x81fed7['endsWith']('/') && _0x81fed7['split']('/')['length'] == 0x1 ? 'File(root)' : _0x81fed7['endsWith']('/') && _0x81fed7['split']('/')['length'] == 0x2 || !_0x81fed7['endsWith']('/') && _0x81fed7['split']('/')['length'] == (0x9f339 ^ 0x9f338) ? 'File(root)' : _0x81fed7['substring'](0x1a2d0 ^ 0x1a2d0, _0x81fed7['length'] - _0x81fed7['split']('/')[_0x81fed7['split']('/')['length'] - (_0x81fed7['endsWith']('/') ? 0x2 : 0x1)]['length'] - (_0x81fed7['endsWith']('/') ? 0x1 : 0x0)); Array['from'](overworld['getEntities']({ 'name': _0x1b121c, 'type': 'file:dir' }))[0xd06e1 ^ 0xd06e1]['removeTag'](_0x81fed7); _0x565c19['removeTag']('protected'); _0x565c19['kill'](); if (_0x2a61ca) log('§4删除文件成功'); }, 'deleteLine'(_0xc9c1d1, _0x582c5e) { const _0x5860f3 = File['readFrom'](_0xc9c1d1); const _0x593060 = Array['from'](overworld['getEntities']({ 'name': _0xc9c1d1, 'type': 'file:file' }))[0x0]; if (_0x593060 == undefined) { log('§4未找到该文件'); return null; } _0x593060['removeTag'](_0x593060['getTags']()['find'](_0x770bc8 => { return _0x770bc8 != 'protected'; })); var _0x45fbe6 = ''; for (var _0x6f6299 = 0x5fb19 ^ 0x5fb19; _0x6f6299 < _0x5860f3['split']('\x0a')['length'] - _0x582c5e; ++_0x6f6299)_0x45fbe6 += _0x5860f3['split']('\x0a')[_0x6f6299]; _0x593060['addTag'](_0x45fbe6); log('§2写入文件成功'); }, 'copy'(_0xf2c342, _0x1563c2) { if (!this['exsits'](_0xf2c342)) log('§4未找到该文件'); else this['writeTo'](_0x1563c2, this['readFrom'](_0xf2c342)); }, 'move'(_0x287494, _0x23699b) { if (!this['exsits'](_0x287494)) log('§4未找到该文件'); else { this['copy'](_0x287494, _0x23699b); this['delete'](_0x287494); } }, 'merge'(_0xb7ef51, ..._0x5ac548) { var _0x3ba865 = ''; _0x5ac548['forEach']((_0x1acfee, _0x2bb431) => { _0x3ba865 += this['readFrom'](_0x1acfee) == undefined ? '' : this['readFrom'](_0x1acfee) + (_0x2bb431 != _0x5ac548['length'] - (0x1dde3 ^ 0x1dde2) ? '\x0a' : ''); }); log(_0x5ac548['toString']()); this['writeTo'](_0xb7ef51, _0x3ba865); }, 'zip'() { str = '$~ZIP~$\x0a'; }, 'unzip'() { }, 'mkdir'(_0x4efa94) { if (!this['inited']) { commonError(); return undefined; } const _0x252d78 = getScore('File', 'x'); const _0x13b268 = getScore('File', 'y'); const _0x3a510a = getScore('File', 'z'); var _0x485049 = overworld['spawnEntity']('file:dir', new mc['Location'](_0x252d78, _0x13b268, _0x3a510a)); _0x485049['nameTag'] = _0x4efa94; _0x485049['addTag']('protected'); var _0xc6cf63 = ''; var _0x59b238 = 'File(root)'; const _0x1cbee2 = _0x4efa94['split']('/'); for (var _0x511c2e = 0x0; _0x511c2e < _0x1cbee2['length'] - (0x64206 ^ 0x64204); ++_0x511c2e) { _0xc6cf63 += _0x1cbee2[_0x511c2e] + '/'; const _0xe053f3 = Array['from'](overworld['getEntities']({ 'name': _0xc6cf63, 'type': 'file:dir' }))[0x0]; if (_0xe053f3 == undefined) { const _0x507c61 = overworld['spawnEntity']('file:dir', new mc['Location'](_0x252d78, _0x13b268, _0x3a510a)); _0x507c61['addTag']('protected'); _0x507c61['nameTag'] = _0xc6cf63; } Array['from'](overworld['getEntities']({ 'name': _0x59b238, 'type': 'file:dir' }))[0x2fbec ^ 0x2fbec]['addTag'](_0xc6cf63); _0x59b238 = _0xc6cf63; } Array['from'](overworld['getEntities']({ 'name': _0x59b238, 'type': 'file:dir' }))[0x0]['addTag'](_0x4efa94); log('§2创建文件夹成功'); return _0x485049; }, 'readFrom'(_0x36f72d, _0x452f68) { _0x452f68 = _0x452f68 == undefined ? ![] : _0x452f68; if (Array['from'](overworld['getEntities']({ 'type': 'file:file', 'name': _0x36f72d }))[0x0] == undefined) { if (_0x452f68) log('§4未找到该文件'); return null; } var _0x270c2f = Array['from'](overworld['getEntities']({ 'type': 'file:file', 'name': _0x36f72d }))[0x0]['getTags']()['find'](_0xbe0966 => { return _0xbe0966 != 'protected'; }); _0x270c2f = _0x270c2f == undefined ? '' : _0x270c2f; if (_0x452f68) log('§e=========§r\x20§2' + _0x36f72d + '\x20§e=========§r\x0a' + _0x270c2f + '\x0a§e=========§r\x20§1EOF§r\x20§e=========§r'); return _0x270c2f; }, 'cd'(_0x39f00a) { if (_0x39f00a != 'File(root)') { if (!_0x39f00a['endsWith']('/')) _0x39f00a += '/'; if (_0x39f00a['startsWith']('./')) { _0x39f00a = (this['currentPath'] != 'File(root)' ? this['currentPath'] : '') + _0x39f00a['substring'](0x40dfe ^ 0x40dfc); } else if (_0x39f00a['startsWith']('../')) { if (this['currentPath'] == 'File(root)') { log('§4无法返回上级目录'); return undefined; } _0x39f00a = this['currentPath']['substring'](0x0, this['currentPath']['length'] - (this['currentPath']['split']('/')[this['currentPath']['split']('/')['length'] - 0x2]['length'] + (0x7755a ^ 0x7755b))); if (!_0x39f00a['endsWith']('/')) _0x39f00a += '/'; if (_0x39f00a == '/') _0x39f00a = 'File(root)'; } if (!this['exsits'](_0x39f00a) && _0x39f00a != 'File(root)') { log('§4目录不存在'); return undefined; } } runCommand('scoreboard\x20players\x20reset\x20\x22currentPath->' + this['currentPath'] + '\x22\x20File'); runCommand('scoreboard\x20players\x20set\x20\x22currentPath->' + _0x39f00a + '\x22\x20File\x201'); this['currentPath'] = _0x39f00a; log('§2成功切换到' + _0x39f00a); return _0x39f00a; }, 'list'(_0x20c4d0, _0x5d7e0f) { if (_0x20c4d0 == 'File(root)') log('§eFile(root)'); else if (_0x5d7e0f == (0x4cca1 ^ 0x4cca0)) log('§e' + _0x20c4d0['split']('/')[_0x20c4d0['split']('/')['length'] - (0x8f7e2 ^ 0x8f7e0)]); else log('|\x20'['repeat'](_0x5d7e0f - 0x1) + '§2' + _0x20c4d0['split']('/')[_0x20c4d0['split']('/')['length'] - 0x2]); Array['from'](overworld['getEntities']({ 'type': 'file:dir', 'name': _0x20c4d0 }))[0xec2d4 ^ 0xec2d4]['getTags']()['sort']()['forEach'](_0x346a2c => { if (_0x346a2c == 'protected') return; if (_0x346a2c['endsWith']('/')) this['list'](_0x346a2c, _0x5d7e0f + 0x1); else log('|\x20'['repeat'](_0x5d7e0f) + _0x346a2c['split']('/')['pop']()); }); }, 'filter'(_0x146ea5, _0x4a17a3) { if (this['readFrom'](_0x146ea5) == null) { return undefined; } var _0x490f0d = ''; this['readFrom'](_0x146ea5)['split']('\x0a')['forEach'](_0x1e599e => { if (_0x1e599e != _0x4a17a3) _0x490f0d += (_0x490f0d == '' ? '' : '\x0a') + _0x1e599e; }); this['writeTo'](_0x146ea5, _0x490f0d); }, 'exsits'(_0x4589a0) { return !_0x4589a0['endsWith']('/') ? Array['from'](overworld['getEntities']({ 'name': _0x4589a0, 'type': 'file:file' }))['length'] == 0x1 : Array['from'](overworld['getEntities']({ 'name': _0x4589a0, 'type': 'file:dir' }))['length'] == 0x1; }, 'help'() { ['====================================================================================', 'Fe文件系统' + this['version'], 'File.uninit\x20|\x20File.init\x20:\x20初始化函数,任何操作之前必须执行过初始化,不然会报错', 'File.writeTo\x20|\x20File.writeLine\x20:\x20写入文件', 'File.read\x20:\x20读取文件内容', 'File.ls\x20|\x20File.list\x20:\x20列出当前目录下所有文件', 'File.cd\x20:\x20切换目录', 'File.touch\x20:\x20新建文件', 'File.mkdir\x20:\x20新建文件夹', 'File.cp\x20:\x20复制文件', 'File.mv\x20:\x20移动文件', 'File.inited\x20:\x20是否已初始化', 'File.currentPath\x20:\x20当前目录', 'File.merge\x20:\x20合并文件', 'File.delete\x20:\x20删除文件', 'File.deleteLine\x20:\x20删除某个文件末尾一行', '====================================================================================']['forEach'](_0x1b9490 => { var _0x2441d4 = '§2'; if (_0x1b9490 == '====================================================================================') _0x2441d4 = '§1§l'; else if (_0x1b9490 == 'Fe文件系统' + this['version']) _0x2441d4 = '§e§l'; log(_0x2441d4 + _0x1b9490); }); }, 'debug'() { if (!this['inited']) { log('§4未初始化'); return 0x0; } var _0x1030e3 = !![]; var _0x430273 = {}; Array['from'](overworld['getEntities']({ 'type': 'file:file' }))['forEach'](_0x3e2d02 => { _0x430273[_0x3e2d02['nameTag']] = _0x430273[_0x3e2d02['nameTag']] == undefined ? 0x1 : _0x430273[_0x3e2d02['nameTag']] + 0x1; }); for (var _0x19d0d4 in _0x430273) if (_0x430273[_0x19d0d4] != 0x1) { log('§4发现§e' + _0x430273[_0x19d0d4] + '§4份同一位置的§e' + _0x19d0d4 + '§4文件,已删除多余文件'); runCommand('kill\x20@e[type\x20=\x20file:file,name\x20=\x20\x22' + _0x19d0d4 + '\x22,c\x20=\x20' + (_0x430273[_0x19d0d4] - (0x7829f ^ 0x7829e)) + ']'); _0x1030e3 = ![]; } var _0x5f26cb = {}; Array['from'](overworld['getEntities']({ 'type': 'file:dir' }))['forEach'](_0xd697ed => { _0x5f26cb[_0xd697ed['nameTag']] = _0x5f26cb[_0xd697ed['nameTag']] == undefined ? 0x9704d ^ 0x9704c : _0x5f26cb[_0xd697ed['nameTag']] + (0xd5267 ^ 0xd5266); }); for (var _0x19d0d4 in _0x5f26cb) if (_0x5f26cb[_0x19d0d4] != 0x1) { log('§4发现§e' + _0x5f26cb[_0x19d0d4] + '§4份同一位置的§e' + _0x19d0d4 + '§4文件夹,已删除多余文件夹'); runCommand('kill\x20@e[type\x20=\x20file:dir,name\x20=\x20\x22' + _0x19d0d4 + '“,c\x20=\x20' + (_0x430273[_0x19d0d4] - 0x1) + ']'); _0x1030e3 = ![]; } if (_0x1030e3) log('§2未找到bug,如仍无法使用,请联系FeJS8888\x20-\x20§eQQ3270208782'); return 0x72527 ^ 0x72526; }, 'inited': world['scoreboard']['getObjective']('File') == undefined ? ![] : getScore('File', 'inited') == undefined ? ![] : !![] }; world['events']['entityHurt']['subscribe'](_0x550741 => { if (_0x550741['hurtEntity']['hasTag']('protected')) { const _0x69f5bc = overworld['spawnEntity'](_0x550741['hurtEntity']['typeId'], toLocation(_0x550741['hurtEntity']['location'])); _0x550741['hurtEntity']['getTags']()['forEach'](_0x343b19 => { _0x69f5bc['addTag'](_0x343b19); }); _0x69f5bc['nameTag'] = _0x550741['hurtEntity']['nameTag']; } }); world['events']['beforeChat']['subscribe'](_0x1cbae3 => { if (_0x1cbae3['message']['startsWith']('File.')) { _0x1cbae3['cancel'] = !![]; const _0x4a6733 = _0x1cbae3['message']['substring'](0x5); if (_0x4a6733 == 'uninit') File['uninit'](_0x1cbae3['sender']['location']); else if (_0x4a6733 == 'init') File['init'](_0x1cbae3['sender']['location']); else if (_0x4a6733 == 'inited') log(File['inited']['toString']()); else if (_0x4a6733['startsWith']('exsits\x20')) log(File['exsits'](_0x4a6733['substring'](0xd6dec ^ 0xd6deb))['toString']()); else if (_0x4a6733 == 'ls' || _0x4a6733 == 'list') File['list'](File['currentPath'], 0x1); else if (_0x4a6733['startsWith']('writeTo\x20')) File['writeTo']((File['currentPath'] != 'File(root)' ? File['currentPath'] : '') + _0x4a6733['substring'](0x2afc1 ^ 0x2afc9)['split']('->')[0x0], _0x4a6733['substring'](0x8)['split']('->')[0x1], !![]); else if (_0x4a6733['startsWith']('writeLine\x20')) File['writeLine']((File['currentPath'] != 'File(root)' ? File['currentPath'] : '') + _0x4a6733['substring'](0xa)['split']('->')[0x0], _0x4a6733['substring'](0x631dd ^ 0x631d7)['split']('->')[0x1], !![]); else if (_0x4a6733['startsWith']('mkdir\x20')) File['mkdir']((File['currentPath'] != 'File(root)' ? File['currentPath'] : '') + (_0x4a6733['substring'](0x6)['endsWith']('/') ? _0x4a6733['substring'](0x6) : _0x4a6733['substring'](0x5489b ^ 0x5489d) + '/')); else if (_0x4a6733['startsWith']('touch\x20')) File['touch']((File['currentPath'] != 'File(root)' ? File['currentPath'] : '') + _0x4a6733['substring'](0x6), !![])['addTag'](''); else if (_0x4a6733['startsWith']('read\x20')) File['readFrom']((File['currentPath'] != 'File(root)' ? File['currentPath'] : '') + _0x4a6733['substring'](0x827d2 ^ 0x827d7), !![]); else if (_0x4a6733['startsWith']('delete\x20')) File['delete']((File['currentPath'] != 'File(root)' ? File['currentPath'] : '') + _0x4a6733['substring'](0x7), !![]); else if (_0x4a6733['startsWith']('copy\x20')) File['copy']((File['currentPath'] != 'File(root)' ? File['currentPath'] : '') + _0x4a6733['substring'](0x5)['split']('->')[0x0], (File['currentPath'] != 'File(root)' ? File['currentPath'] : '') + _0x4a6733['substring'](0xa49db ^ 0xa49de)['split']('->')[0x1]); else if (_0x4a6733['startsWith']('cp\x20')) File['copy']((File['currentPath'] != 'File(root)' ? File['currentPath'] : '') + _0x4a6733['substring'](0xa0dc3 ^ 0xa0dc0)['split']('->')[0x0], (File['currentPath'] != 'File(root)' ? File['currentPath'] : '') + _0x4a6733['substring'](0x3e533 ^ 0x3e530)['split']('->')[0xbbd83 ^ 0xbbd82]); else if (_0x4a6733['startsWith']('move\x20')) File['move']((File['currentPath'] != 'File(root)' ? File['currentPath'] : '') + _0x4a6733['substring'](0x5)['split']('->')[0x6024c ^ 0x6024c], (File['currentPath'] != 'File(root)' ? File['currentPath'] : '') + _0x4a6733['substring'](0xefd75 ^ 0xefd70)['split']('->')[0x1]); else if (_0x4a6733['startsWith']('mv\x20')) File['move']((File['currentPath'] != 'File(root)' ? File['currentPath'] : '') + _0x4a6733['substring'](0x8b429 ^ 0x8b42a)['split']('->')[0x0], (File['currentPath'] != 'File(root)' ? File['currentPath'] : '') + _0x4a6733['substring'](0x3)['split']('->')[0x1]); else if (_0x4a6733['startsWith']('run\x20')) File[_0x4a6733['split']('\x20')[0x1]] != undefined ? typeof File[_0x4a6733['split']('\x20')[0x8e08c ^ 0x8e08d]] != 'function' ? log(File[_0x4a6733['split']('\x20')[0x1]]['toString']()) : File[_0x4a6733['split']('\x20')[0x42855 ^ 0x42854]](..._0x4a6733['substring']((0x2d033 ^ 0x2d037) + _0x4a6733['substring'](0x4)['split']('\x20')[0x0]['length'] + 0x1)['split']('\x20')) : log('§4执行命令失败(未找到命令)'); else if (_0x4a6733['startsWith']('cd\x20')) File['cd'](_0x4a6733['substring'](0x3)); else if (_0x4a6733 == 'help') File['help'](); else if (_0x4a6733 == 'version') log(File['version']); else if (_0x4a6733['startsWith']('deleteLine\x20')) File['deleteLine']((File['currentPath'] != 'File(root)' ? File['currentPath'] : '') + _0x4a6733['substring'](0xb), 0x1); else log('错误的参数>>§4' + _0x4a6733['split']('\x20')[0x0] + '§r<<'); } }); export { File };