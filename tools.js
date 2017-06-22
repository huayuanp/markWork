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
//开始场景的时间轴
current_scene.startTimeline();
//设置场景的时间轴
current_scene.setTimeline('tm_1', {
	"position": 0,
	"start": false,
	"loop": true
});
//清除场景的延迟事件
game.vars_.timeOutHander && game.vars_.timeOutHander.forEach(function (hd) {
	window.clearTimeout(hd);
})
//刷新列表容器
list_wantStrong.refreshView();
//跳转场景
qyengine.different_scene('sce_1');
//获取途径、物品途径
game.scripts["al_scr_" + "actionlist_getway"](null, null, 90014);
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
//自适应左对齐或者右对齐的偏移量
current_scene.screenAdaptation
//回到王号的主界面上时都会相应的 调用
mainGrouUIReturnBtnLogic

//将实例移出滚轴容器
能不能判断实例在滚轴容器中的行和列


//js原生的确定取消
var aa = confirm("登录服务器失败或服务器繁忙,要重试吗?");
if (aa == true) {
	location.reload()
} else { }
//创建实例
qyengine.instance_create(1414, 1226, "txt_rankListNumber", {
	"type": "txt_rankListNumber",
	"id": 'txt_rankListNumber',
	"zIndex": 20,
	"scene": 'main_scene',
	"layer": 'layer_headerfeet'
});

//查看user-agent，useragent
window.navigator.userAgent
//龙啸九天beta链接上显示 游客登陆的按钮
document.querySelector(".logincustomer")
document.querySelector(".logincustomer").style.display = "block"
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


//获得父对象/父容器
obj_PVEicon_首充.currentSprite.parent.qyobj

//发送消息
qyengine.guardId("grou_redPointMore85").dispatchMessage({
	"type": 'message',
	"message": 'sendMessageData',
	"argument0": self.vars_.fightPlayerProperty.uid
});
//发送消息给对象
qyengine.forEach(function () {
	this.dispatchMessage({
		"type": 'message',
		"message": 'haha'
	});
}, 'obj_1');
//发送消息给标签
qyengine.forEachTag(function () { this.dispatchMessage({ "type": 'message', "message": 'dada' }); }, 'tag_RedPointBttn');
//滚轴容器刷新
scro_1.refreshRelations();
//获取对象绑定的文本的实例
obj_pkFailAndSuccessSure.currentSprite.txtLabel_


//设置文本的颜色
qyengine.guardId('txt_pkRoleNick').setFontColor('#f7ad0d');
//预加载在preloader 中

//设置字体为楷体
self.currentSprite.style.font = "normal 25px kaiti";
//设置字体的描边
self.currentSprite.style.font = "normal 800 25px/1.1 serif";
self.setStroke("#030d8d", 4);
//唯一标识符的对象  .classId

//清空滚轴
if (scro_equip.isVisible) {
	scro_equip.cells = [];
	scro_equip.currentSprite.moving_.removeChildren();
	scro_equip.removeAll();
}
//刷新数据绑定
qyengine.guardId("scro_factionFightReward").refreshRelations();


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
//滚轴容器跳转到指定的行和列
qyengine.guardId("scro_1").scrollerTo && qyengine.guardId("scro_1").scrollerTo(1 - 1, 2 - 1);
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
//跟随移动
heroObj.vars_.objNameTxt.setFollowObj(heroObj.id, -heroObj.vars_.objNameTxt.currentSprite.realWidth * 0.5,
	-heroObj.height * 0.2 * heroObj.scaleY - heroObj.vars_.objNameTxt.currentSprite.realHeight, "both");
//消除延迟
qyengine.unscheduleTask(current_scene.vars_.markLoading0);
//删除滚轴容器的单元格
qyengine.guardId('scro_1').removeOneCell && qyengine.guardId('scro_1').removeOneCell(2 - 1, 3 - 1);
//js原声的计时器
myVar = setInterval("javascript function", milliseconds);
clearInterval(myVar);
//加入控制游戏画面质量的api
qyengine.setImageLowQuality(), qyengine.setImageHighQuality()
//查看对象引用的图片的位置

//移动至,按时间
this.moveTo(691, 859, 'time', 1000);
//移动至,按速度
qyengine.guardId("obj_3").moveTo(100 + qyengine.guardId("obj_3").x, qyengine.guardId("obj_3").y, 200, 1);
//游戏中资源的路径
//http://zuoyouxi.gamemei.com/geng957/longxiaojiutian_role/assets/image/role/wing/wings_1.png
//关闭cache
grou_fight.currentSprite.cacheAsBitmap = false
//合并链接存在
window.adapt
// 屏蔽按钮的事件,以及取消按钮的屏蔽事件
this.shieldEvent && this.shieldEvent(["mousedown", "mouseup"], 500)
qyengine.callAfter(function () {
	this.cancelShieldEvent && this.cancelShieldEvent(["mousedown", "mouseup"])
}
	.bind(this), current_scene, 600);
//判断是否是合并的版本
window.adapt
//找出对象的"父类"/所在的组合UI
obj_Btn_Share_Square_pond_1.currentSprite.parent.qyobj.id
//主动断点
debugger;
//紫色的颜色值
//#ff306f
//查看对象的图片所在的路径
selectRole_photo_10001.currentSprite.fill_
	//阻止事件往下传递
	(event.event || event.originalEvent || event).stopPropagation && (event.event || event.originalEvent || event).stopPropagation();
//查看对象的全局坐标
obj_Btn_Share_Square_pond_1.currentSprite.getGlobalPosition()
//查看对象的资源路径
qyengine.guardType("obj_icon_lxjt_default").defaultOpt.fill
//-------清除场景中的角色
current_game.scripts['al_scr_' + "sceneBattleVarInit"].call(this, undefined, this);
current_game.scripts['al_scr_' + "createMainUIRole"].call(this, undefined, this);
KBEngine.app.player().baseCall('reqMainCityPlayers');

current_game.scripts['al_scr_' + "main_sceneBattleInfoInit"].call(this, undefined, this);
//修正引擎的bug,组合UI改名
$.utils.getAllJson().structure.groupUIs.push("grou_noticeNew_cell_scro")
//内部链接: http://debug.games.gamemei.com/ylzt_ios/v73/gamecode.min.js
/**git remote add origin git@github.com:huayuanp/markWork.git
 * $ git push origin master
 * 
 */



/*
yulongzaitianH5_pre_lxjt   新增加的
//chrome调试地址
chrome://inspect/#devices

geng957/yulong_xinshouyindao    替换  longxiaojiutian_xinshouyindao*/
//创建封号提示
if (qyengine.getInstancesByType("grou_gameIsOff").length == 0) {
	var posX = Number(game.configs.UIConfig.grou_loadingRefreshGame.position.split(",")[0]);
	var posY = Number(game.configs.UIConfig.grou_loadingRefreshGame.position.split(",")[1]);
	var zIndex = Number(game.configs.UIConfig.grou_loadingRefreshGame.zIndex);
	qyengine.instance_create(posX, posY, "grou_gameIsOff", {
		"type": "grou_gameIsOff",
		"id": 'grou_gameIsOff',
		"zIndex": zIndex,
		"scene": 'main_scene',
		"layer": 'layer_headerfeet'
	});
	if (current_scene.classId == "main_scene") {

	} else {
		grou_gameIsOff.x += 100;
	}
}

//18133693805

/*
vs的快捷键
回退上一个光标操作： Ctrl+U
*/
//https://www.evernote.com/secure/SecuritySettings.action
//password：zuishuaipeng321

//whack737@yahoo.com   




//绘制 角色的形象
// wh 加
var roleId = data[0][0];
var rolesSurtId;
var rolesWeapenId;
var rolesWingLv;
var roleInfo = {};

console.log("data:" + data);

roleInfo["id"] = roleId;
roleInfo["equips"] = [];
roleInfo["wing"] = {};

if (data[0][1] != 0) {
	rolesSurtId = data[0][1];
	var equipData = {};
	equipData["id"] = rolesSurtId;
	equipData["type"] = 3;
	roleInfo["equips"].push(equipData);
}
if (data[0][2] != 0) {
	rolesWeapenId = data[0][2];
	var equipData = {};
	equipData["id"] = rolesWeapenId;
	equipData["type"] = 1;
	roleInfo["equips"].push(equipData);
}

rolesWingLv = data[0][3];
roleInfo.wing["level"] = rolesWingLv;




if (qyengine.getInstancesByType("grou_ranking").length > 0) {

	console.log("roleInfo=" + roleInfo);
	//（参数1，角色数据，参数二，需要换装的对象）
	grou_ranking.vars_.heroObjShow = game.scripts["al_scr_" + "changeShowObjModel"](null, null, roleInfo, grou_ranking.vars_.heroObjShow);
	grou_ranking.vars_.heroObjShow.setScale(0.4, 0.4);
	grou_ranking.vars_.heroObjShow.show();
	//grou_ranking.vars_.heroObjShow.x = 308;
	//grou_ranking.vars_.heroObjShow.y = 170;
	grou_show_hero_panel.appendChild(grou_ranking.vars_.heroObjShow.id, -42, -204);
	grou_ranking.vars_.nowHeroInfo = roleInfo;
}
else {

	grou_foes_details.vars_.heroObjShow = qyengine.instance_create(0, 0, 'heroObjShow', {
		"type": 'heroObjShow',
		"id": 'heroObjShow',
		"zIndex": 0,
	});
	grou_foes_details.vars_.heroObjShow.setScale(0.8, 0.8);
	foesSprite.appendChild("heroObjShow", foesSprite.width / 2, foesSprite.height / 2);


	//（参数1，角色数据，参数二，需要换装的对象）
	game.scripts["al_scr_" + "changeShowObjModel"](null, null, roleInfo, grou_foes_details.vars_.heroObjShow);

}










grou_ranking.vars_.heroObjShow = game.scripts["al_scr_" + "changeShowObjModel"](null, null, grou_ranking.vars_.nowHeroInfo);
grou_ranking.vars_.heroObjShow.setScale(0.4, 0.4);
grou_ranking.vars_.heroObjShow.show();
//grou_ranking.vars_.heroObjShow.x = 308;
//grou_ranking.vars_.heroObjShow.y = 170;
grou_show_hero_panel.appendChild(grou_ranking.vars_.heroObjShow.id, -42, -204);







if(grou_ranking.vars_.heroObjShow&&!grou_ranking.vars_.heroObjShow.isVisible){
      grou_ranking.vars_.heroObjShow.isVisible= true;
}