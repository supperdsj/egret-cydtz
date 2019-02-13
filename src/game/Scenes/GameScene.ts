class GameScene extends Scene {
   private _currentLevel: number;
   private _currentLevelData: LevelItem;

   public img_level:eui.Image;
   public gp_words:eui.Group;
   public gp_answers:eui.Group;
   public gp_win:eui.Group;
   public lb_word:eui.Label;
   public lb_content:eui.Label;
   public btn_next:eui.Button;
   public btn_return:eui.Button;

   public constructor(level: number) {
      super();
      this.skinName = "resource/eui_skins/mySkins/GameSceneSkin.exml";
      this._currentLevel = level;
      this._currentLevelData = GameData.Instance.getItem(level);
      console.log(this._currentLevelData);
   }

   protected onAddToStage() {
      this.img_level.source = "resource/assets/data/" + this._currentLevelData.img;
      this.gp_win.visible = false;
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
      for (let i = 0; i < 4; i++) {
         let wordItem = new WordItem();
         wordItem.word = "";
         this.gp_answers.addChild(wordItem);
      }
      console.log(words);
      this.gp_words.addEventListener("clickWord", (e: egret.Event) => {
         let target: WordItem = <WordItem>e.data;
         for (let i = 0; i < 4; i++) {
            const answer_word: WordItem = <WordItem>this.gp_answers.getChildAt(i);
            if (answer_word.word === "") {
               target.visible = false;
               answer_word.word = target.word;
               answer_word.targetWord = target;
               break;
            }
         }
         let userWords = '';
         for (let i = 0; i < 4; i++) {
            userWords += (<WordItem>this.gp_answers.getChildAt(i)).word;
         }
         if (userWords === this._currentLevelData.answer) {
            this.btn_next.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
               SceneManager.Instance.changeScene(new GameScene(this._currentLevel + 1));
            }, this);
            GameData.clearedItem = this._currentLevel + 1;
            this.lb_word.text = this._currentLevelData.word;
            this.lb_content.text = this._currentLevelData.content;
            this.gp_win.visible = true;
         }
      }, this);
      this.gp_answers.addEventListener("clickWord", (e: egret.Event) => {
         let target: WordItem = <WordItem>e.data;
         target.targetWord.visible = true;
         target.word = "";
         console.log(target);
      }, this);

      this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
         SceneManager.Instance.changeScene(new LevelScene());
      }, this);
   }
}
