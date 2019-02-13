class WordItem extends eui.Component implements eui.UIComponent {
   public lb_word: eui.Label;

   constructor() {
      super();
      this.skinName = "resource/eui_skins/mySkins/WordItemSkin.exml";
   }

   protected partAdded(partName: string, instance: any): void {
      if (instance === this.lb_word) {
         this.lb_word.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickWord, this);
      }
   }

   protected onClickWord() {
      this.parent.dispatchEvent(new egret.Event('clickWord',false,false,this));
      this.visible = false;
   }

   get word(): string {
      return this.lb_word.text;
   }

   set word(value: string) {
      this.lb_word.text = value;
   }
}
