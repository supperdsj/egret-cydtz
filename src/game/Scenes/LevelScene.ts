class LevelScene extends Scene {
   public sc_level: eui.Scroller;
   public gp_level: eui.Group;

   constructor() {
      super();
      this.skinName = "resource/eui_skins/mySkins/LevelSceneSkin.exml";
   }

   protected onAddToStage(): void {
      const col = 10;
      const row = 20;
      const icon_width = this.width / col;
      const icon_height = this.height / row;

      this.gp_level.height = icon_height * (GameData.Instance.totalLevels + 2);

      const img: eui.Image = new eui.Image();
      img.source = RES.getRes("GameBG2_jpg");
      img.height = this.gp_level.height;
      img.fillMode = egret.BitmapFillMode.REPEAT;
      this.gp_level.addChild(img);

      this.sc_level.viewport.scrollV = img.height - this.height;
      // if (GameData.clearedItem > row) {
      //    this.sc_level.viewport.scrollV = (GameData.clearedItem - row) * icon_width;
      // }
      for (let i = 0; i < GameData.Instance.totalLevels; i++) {
         const itemBtn: ItemBtn = new ItemBtn();
         itemBtn.num = i + 1;
         itemBtn.width = icon_width;
         itemBtn.height = icon_width;
         itemBtn.x = Math.sin(icon_height * i / 2 / 180) * (this.width - icon_width) * 0.5 + this.width / 2 - icon_width / 2;
         itemBtn.y = this.gp_level.height - icon_height * (i + 2);
         itemBtn.cleared = i < GameData.clearedItem;
         this.gp_level.addChild(itemBtn);
      }
   }

}
