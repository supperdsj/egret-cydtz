class GameScene extends Scene {
   private _currentLevel: number;
   private _currentLevelData: LevelItem;

   public img_level: eui.Image;
   public gp_words: eui.Group;
   public gp_answers: eui.Group;
   public gp_win: eui.Group;

   public constructor(level: number) {
      super();
      this.skinName = "resource/eui_skins/mySkins/GameSceneSkin.exml";
      this._currentLevel = level;
      this._currentLevelData = GameData.Instance.getItem(level);
      console.log(this._currentLevelData);
   }

   protected onAddToStage() {
      this.img_level.source = "resource/assets/data/" + this._currentLevelData.img;
      let words: Array<string> = this._currentLevelData.answer.split('');
      while (words.length < 20) {
         let randomWords = GameData.Instance.getItem(Math.floor(Math.random() * GameData.Instance.totalLevels)).answer;
         for (let i = 0; i < randomWords.length; i++) {
            if (words.length === 20) {
               break;
            } else if (words.indexOf(randomWords[i]) === -1) {
               words.push(randomWords[i]);
            }
         }
      }
      words = ((words) => {
         let resultWords: Array<string> = [];
         while (words.length > 0) {
            let i = Math.floor(Math.random() * words.length);
            resultWords.push(...words.splice(i, 1));
         }
         return resultWords;
      })(words);
      for (let i = 0; i < 20; i++) {
         let wordItem = new WordItem();
         wordItem.word = words[i];
         this.gp_words.addChild(wordItem);
      }
      console.log(words);
      this.gp_words.addEventListener("clickWord", (e: egret.Event) => {
         let target: WordItem = <WordItem>e.data;
         console.log(target);
      }, this);
      this.gp_answers.addEventListener("clickWord", (e: egret.Event) => {

      }, this);
   }
}
