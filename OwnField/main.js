"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _minecraft = require("@minecraft/server");
var pointLock = /** @class */ (function () {
    function pointLock() {
    }
    /**
     * getLock & setLock
     */
    pointLock.prototype.getLock = function () {
        return pointLock.Lock;
    };
    pointLock.prototype.setLock = function (newState) {
        pointLock.Lock = newState;
    };
    //false状态为第一领地点 true为第二领地点
    pointLock.Lock = false;
    return pointLock;
}());
function log(log) {
    Array.from(_minecraft.world.getPlayers()).forEach(function (player) {
        player.sendMessage(log);
    });
}
var pointLocation = /** @class */ (function () {
    function pointLocation() {
    }
    pointLocation.prototype.setFirLocation = function (vector) {
        this.firLocation = vector;
        this.secLocation.y -= 2;
    };
    pointLocation.prototype.setSecLocation = function (vector) {
        this.secLocation = vector;
        this.secLocation.y -= 2;
    };
    pointLocation.prototype.getFirLocation = function () {
        return this.firLocation;
    };
    pointLocation.prototype.getSecLocation = function () {
        return this.secLocation;
    };
    return pointLocation;
}());
function firstPoint(event) {
    var lockState = new pointLock();
    var locationPoint = new pointLocation();
    if (event.source != null &&
        event.itemStack.typeId === "minecraft:wooden_shovel" &&
        lockState.getLock() === false) {
        event.source.sendMessage("你已建立第一个领地点");
        log("[OwnField] 锁已被设置为true");
        lockState.setLock(true);
        locationPoint.setFirLocation(event.source.getHeadLocation);
    }
}
function secondPoint(event) {
    var lockState = new pointLock();
    var locationPoint = new pointLocation();
    if (event.source != null &&
        event.itemStack.typeId === "minecraft:wooden_shovel" &&
        lockState.getLock() === true) {
        event.source.sendMessage("你已建立第二个领地点");
        log("[OwnField] 锁已被设置为false");
        lockState.setLock(false);
        locationPoint.setSecLocation(event.source.getHeadLocation);
    }
}
_minecraft.world.afterEvents.itemStartUse.subscribe(firstPoint);
_minecraft.world.afterEvents.itemStartUse.subscribe(secondPoint);
