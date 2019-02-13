interface LevelDataItem {
   answer: string;
   img: string;
   word: string;
   tip: string;
   content: string;
}

class LevelDataManager {
   private static shared: LevelDataManager;

   public static get Instance() {
      if (!LevelDataManager.shared) {
         LevelDataManager.shared = new LevelDataManager();
      }
      return LevelDataManager.shared;
   }

   public items: Array<LevelDataItem> = [];
   public totalLevels: number = 0;

   constructor() {
      this.items = RES.getRes('questions_json');
      this.totalLevels = this.items.length;
   }

   public getLevelData(level: number): LevelDataItem {
      return this.items[level];
   }
}
