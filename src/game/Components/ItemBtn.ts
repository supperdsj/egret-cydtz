class ItemBtn extends eui.Component implements eui.UIComponent {
   public btn: eui.Button;

   constructor() {
      super();
      this.skinName = "resource/eui_skins/mySkins/ItemBtnSkin.exml";
   }

   public set num(n: number) {
      this.btn.label = `${n}`;
   }

   public set cleared(b: boolean) {
      this.btn.enabled = b;
   }
}
