import * as _minecraft from "@minecraft/server";

class pointLock {
  //false状态为第一领地点 true为第二领地点
  private static Lock: boolean = false;
  /**
   * getLock & setLock
   */
  public getLock(): boolean {
    return pointLock.Lock;
  }
  public setLock(newState: boolean) {
    pointLock.Lock = newState;
  }
}

function log(log: string) {
  Array.from(_minecraft.world.getPlayers()).forEach((player) => {
    player.sendMessage(log);
  });
}
class pointLocation {
  private firLocation: _minecraft.Vector3;
  private secLocation: _minecraft.Vector3;

  public setFirLocation(vector) {
    this.firLocation = vector;
    this.secLocation.y -= 2;
  }
  public setSecLocation(vector) {
    this.secLocation = vector;
    this.secLocation.y -= 2;
  }
  public getFirLocation(): _minecraft.Vector3 {
    return this.firLocation;
  }
  public getSecLocation(): _minecraft.Vector3 {
    return this.secLocation;
  }
}
function firstPoint(event: _minecraft.ItemStartUseAfterEvent) {
  let lockState = new pointLock();
  let locationPoint = new pointLocation();
  if (
    event.source != null &&
    event.itemStack.typeId === "minecraft:wooden_shovel" &&
    lockState.getLock() === false
  ) {
    event.source.sendMessage("你已建立第一个领地点");
    log("[OwnField] 锁已被设置为true");
    lockState.setLock(true);

    locationPoint.setFirLocation(event.source.getHeadLocation);
  }
}

function secondPoint(event: _minecraft.ItemStartUseAfterEvent) {
  let lockState = new pointLock();
  let locationPoint = new pointLocation();
  if (
    event.source != null &&
    event.itemStack.typeId === "minecraft:wooden_shovel" &&
    lockState.getLock() === true
  ) {
    event.source.sendMessage("你已建立第二个领地点");
    log("[OwnField] 锁已被设置为false");
    lockState.setLock(false);

    locationPoint.setSecLocation(event.source.getHeadLocation);
  }
}

_minecraft.world.afterEvents.itemStartUse.subscribe(firstPoint);
_minecraft.world.afterEvents.itemStartUse.subscribe(secondPoint);
