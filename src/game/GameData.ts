interface LevelItem {
   answer: string;
   img: string;
   word: string;
   tip: string;
   content: string;
}

class GameData {
   private static shared: GameData;

   public static get Instance() {
      if (!GameData.shared) {
         GameData.shared = new GameData();
      }
      return GameData.shared;
   }

   public items: Array<LevelItem> = [];
   public totalLevels: number = 0;

   constructor() {
      this.items = RES.getRes('questions_json');
      this.totalLevels = this.items.length;
   }

   public getItem(level: number): LevelItem {
      return this.items[level-1];
   }

   static get clearedItem(): number {
      return parseInt(egret.localStorage.getItem('clearedItem')) || 1;
   }

   static set clearedItem(n: number) {
      egret.localStorage.setItem('clearedItem', `${n}`);
   }
}
