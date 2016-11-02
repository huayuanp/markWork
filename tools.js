//王号的账号
//hwangrd 18655950910 wh
//nginx
//http: //localhost/ylzt_0823/
	operationRemind //通用的提示接口
actionlist_createLoadingCircle //通用的创建加载圈圈
actionlist_destroyLoadingCircle //通用的销毁圈圈
KBEngine.app.player().baseCall('reqTestAddEquipment', 22116, 5, 0, 0);
//拿滚轴里面的对象
scro_equip.getCell(0, 0).children[0].qyobj
	//王号的文字的通用的动作序列
createCommonFlutterTxt
//王号的兑换银子的接口
//董宇的调用帮助的接口
//帮助你们调用 createHelpPanel 传index和你们帮助内容在text数据表里面的字段名 比如我仇人就是传"foe_help"
//设置IP、端口
localStorage.setItem("qyport", 20013);
localStorage.setItem("qyip", '192.168.0.253');

KBEngine.app.player().baseCall('reqChangeNoviceGuide', "[true,false,true,true,false,false,false,false]");
//消息的发送
current_scene.dispatchMessage({
	"type": 'message',
	"message": "显示红点",
	"argument0": 1234
});
KBEngine.app.player().baseCall('reqTestAddGoods', 90011, 30);
//执行动作序列
current_game.scripts["al_scr_" + "createCommonFlutterTxt"] && current_game.scripts["al_scr_" + "createCommonFlutterTxt"].call(this, undefined, this);


KBEngine.app.player().baseCall('reqTestAddGoods', 40001, 10);
//20001 20002 20004 20005 20008 20009 200211 20116 20207

KBEngine.app.player().baseCall('reqTestAddLevelAndVipAndGoldAndSilver', 1, 20, 10000, 1000)
	//停止唯一标识符的时间轴
qyengine.guardId("txt_pkSecret_" + secretLocation).stopTimeline();
//清除场景的延迟事件
game.vars_.timeOutHander && game.vars_.timeOutHander.forEach(function(hd) {
		window.clearTimeout(hd);
	})
	//添加对象到滚轴容器
qyengine.guardId('scro_equip')._batchCreate = true
qyengine.guardId('scro_equip').addOneInstance('grou_packageEquipItem', Math.floor(repeatTime / 4) + 1 - 1, (repeatTime % 4) + 1 - 1, {
	"way": 'objectName',
	"type": 'grou_packageEquipItem',
	"id": 'grou_packageEquipItem_' + repeatTime,
	"autoAdd": "",
	"center": "",
	"x": Math.floor(repeatTime / 4) + 1,
	"y": (repeatTime % 4) + 1,
	"px": 52,
	"py": 51,
	"allowMultiple": 'true'
});


qyengine.guardId('scro_equip').addOneInstance('grou_packageEquipItem', Math.floor(repeatTime / 4) + 1 - 1, (repeatTime % 4) + 1 - 1, {
	"way": 'objectName',
	"type": 'grou_packageEquipItem',
	"id": 'grou_packageEquipItem_' + repeatTime,
	"extend": {
		"变量名": {
			value: "变量zhi",
			variable: "变量名"
		}

	},
	"autoAdd": "",
	"center": "",
	"x": Math.floor(repeatTime / 4) + 1,
	"y": (repeatTime % 4) + 1,
	"px": 52,
	"py": 51,
	"allowMultiple": 'true'
});
//调用动作序列的代码
current_game.scripts["al_scr_" + "CreateGrou_guide"] && current_game.scripts["al_scr_" + "CreateGrou_guide"].call(this, undefined, this);
//回到王号的主界面上时都会相应的 调用
mainGrouUIReturnBtnLogic

//将实例移出滚轴容器
能不能判断实例在滚轴容器中的行和列


//js原生的确定取消
var aa = confirm("登录服务器失败或服务器繁忙,要重试吗?");
if (aa == true) {
	location.reload()
} else {}
//创建实例
qyengine.instance_create(1414, 1226, "txt_rankListNumber", {
	"type": "txt_rankListNumber",
	"id": 'txt_rankListNumber',
	"zIndex": 20,
	"scene": 'main_scene',
	"layer": 'layer_headerfeet'
});


//自适应填充
qyengine.createInstance({
	type: "obj_warnFrame",
	id: "obj_warnFrame",
	position: {
		x: 100,
		y: 0
	},
	"autoDirection": "start"
}, layer0)

//场景的所有的对象整体的偏移100个像素
var layers = $.utils.getAllJson().scenes.sce_rankList.layers;

for (var i = layers.length - 1; i >= 0; i--) {
	modifyPos(layers[i]);
}

function modifyPos(obj) {
	var objects = obj.objects || [];
	for (var i = objects.length - 1; i >= 0; i--) {
		var object = objects[i];
		object.position && (object.position.x += 100);
		modifyPos(object);
	}
}
//增加新的数据表
qyengine.addDataforms('dataform_1', 'id', {
	"id": 1,
	"data": 100
});

//发送消息
qyengine.guardId("grou_redPointMore85").dispatchMessage({
	"type": 'message',
	"message": 'sendMessageData',
	"argument0": self.vars_.fightPlayerProperty.uid
});

//滚轴容器刷新
scro_1.refreshRelations();
//获取对象绑定的文本的实例
obj_pkFailAndSuccessSure.currentSprite.txtLabel_


//设置文本的颜色
qyengine.guardId('txt_pkRoleNick').setFontColor('#f7ad0d');
//预加载在preloader 中

//设置字体为楷体
self.currentSprite.style.font = "normal 25px kaiti";

//唯一标识符的对象  .classId

//清空滚轴
if (scro_equip.isVisible) {
	scro_equip.cells = [];
	scro_equip.currentSprite.moving_.removeChildren();
	scro_equip.removeAll();
}


if (!this.addOneInstance("grou_factionFightRankListItem", repeatTime, 0, {
		id: 'grou_factionFightRankListItem' + repeatTime,
		px: 35,
		py: 54
	})) {
	this.vars_.itemSize = Math.max(repeatTime - 1, 0);
	break;
}

//添加实例到滚轴容器
qyengine.guardId("scro_1").appendChild("xxxxxxxxxx", 120, 30, 1 - 1, 2 - 1, false, true);
//通过设置饱和度使其变灰
this.setHSL && this.setHSL(0, -100, 0);
//延迟执行
qyengine.callAfter(function () {
	console.log("打印下先。");
}
	.bind(this), current_scene, 1000);

//字体更新后刷新缓存的代码
qyremote.remove("deployed", qyengine.userId + "/" + $.currentProj);
qyremote.deployProj(qyengine.userId + "/" + $.currentProj);
//刷新页面
location.reload();
//消除延迟
qyengine.unscheduleTask(current_scene.vars_.markLoading0);

/**git remote add origin git@github.com:huayuanp/markWork.git
 * $ git push origin master
 * 
 */