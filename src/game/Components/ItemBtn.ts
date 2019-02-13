class ItemBtn extends eui.Component implements eui.UIComponent {
   public btn: eui.Button;
   public lb_word:eui.Label;

   constructor() {
      super();
      this.skinName = "resource/eui_skins/mySkins/ItemBtnSkin.exml";
      this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
         SceneManager.Instance.changeScene(new GameScene(parseInt(this.btn.label)));
      },this);
   }

   public set num(n: number) {
      this.btn.label = `${n}`;
   }

   public set cleared(b: boolean) {
      this.btn.enabled = b;
   }
}
