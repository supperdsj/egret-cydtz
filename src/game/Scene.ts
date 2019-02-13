abstract class Scene extends eui.Component{
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
	}
	protected abstract onAddToStage();
}