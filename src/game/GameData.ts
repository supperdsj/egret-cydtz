interface Item {
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

   public items: Array<Item> = [];
   public totalLevels: number = 0;

   constructor() {
      this.items = RES.getRes('questions_json');
      this.totalLevels = this.items.length;
   }

   public getItem(level: number): Item {
      return this.items[level];
   }

   static get clearedItem(): number {
      return parseInt(egret.localStorage.getItem('clearedItem')) || 1;
   }

   static set clearedItem(n: number) {
      egret.localStorage.setItem('clearedItem', `${n}`);
   }
}
