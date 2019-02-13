class StartScene extends Scene {
   public btn_startGame:eui.Button;
   public btn_setting:eui.Button;

   constructor() {
      super();
      this.skinName = "resource/eui_skins/mySkins/StartSceneSkin.exml";
   }

   protected onAddToStage() {
      this.btn_startGame.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
         SceneManager.Instance.changeScene(new LevelScene());
      },this);
      this.btn_setting.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{

      },this);
   }
}
