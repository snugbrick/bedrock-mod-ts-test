import { world } from "@minecraft/server";
import {} from "./Y_Test/define";
import {} from "./Y_Test/file";

function log(log: String) {
  Array["from"](world["getPlayers"]())["forEach"]((_0x1a8d77) => {
    _0x1a8d77["tell"](log);
  });
}
log("重载成功");
