var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SceneManager = (function () {
    function SceneManager() {
    }
    SceneManager.getInstance = function () {
        if (!SceneManager._manager) {
            SceneManager._manager = new SceneManager();
        }
        return SceneManager._manager;
    };
    SceneManager.prototype.changeScene = function (newScene) {
        if (this._currentScene) {
            this.gameStage.removeChild(this._currentScene);
            this._currentScene = null;
        }
        this.gameStage.addChild(newScene);
        this._currentScene = newScene;
    };
    SceneManager.prototype.pushScene = function (newScene) {
        if (this._currentScene) {
            return;
        }
        this.gameStage.addChild(newScene);
        this._currentScene = newScene;
    };
    SceneManager.prototype.popScene = function () {
        if (this._currentScene) {
            this.gameStage.removeChild(this._currentScene);
            this._currentScene = null;
        }
    };
    SceneManager._manager = null;
    return SceneManager;
}());
__reflect(SceneManager.prototype, "SceneManager");
