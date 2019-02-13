class SceneManager {
   private static _manager = null;

   public static get Instance() {
      if (!SceneManager._manager) {
         SceneManager._manager = new SceneManager();
      }
      return SceneManager._manager;
   }

   private _currentScene: Scene;
   public gameStage: eui.UILayer;

   public changeScene(newScene: Scene) {
      if (this._currentScene) {
         this.gameStage.removeChild(this._currentScene);
         this._currentScene = null;
      }
      this.gameStage.addChild(newScene);
      this._currentScene = newScene;
   }

   public pushScene(newScene: Scene) {
      if (this._currentScene) {
         return;
      }
      this.gameStage.addChild(newScene);
      this._currentScene = newScene;
   }

   public popScene() {
      if (this._currentScene) {
         this.gameStage.removeChild(this._currentScene);
         this._currentScene = null;
      }
   }
}
