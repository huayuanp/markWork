
//封装的任务的收益和收获
var markMission = ["silver", "gold", "gold", "pk", "boss", "dragon_soul", "equip", "pvp", "escort"];
var dayLimit = Number(game.configs['guild_mission']['' + (current_scene.markTaskType)][markMission[current_scene.markTaskType - 1]].split("|")[1]);
var consumeNum = Number(game.configs['guild_mission']['' + (current_scene.markTaskType)][markMission[current_scene.markTaskType - 1]].split("|")[0]);
var contributionNum = Number(game.configs['guild_mission']['' + (current_scene.markTaskType)][markMission[current_scene.markTaskType - 1]].split("|")[2]);
var integrationNum = Number(game.configs['guild_mission']['' + (current_scene.markTaskType)][markMission[current_scene.markTaskType - 1]].split("|")[3]);
game.vars_.backFaction[1][4] += contributionNum;
game.vars_.backFaction[1][3] += integrationNum;
if (current_scene.markTaskType == 1) {
	game.vars_.userInfo.silver -= consumeNum;
} else if (current_scene.markTaskType == 2 || current_scene.markTaskType == 3) {
	game.vars_.userInfo.gold -= consumeNum;
}


//calFactionTaskReward calFactionUpdate

[current_scene['nowAllowNum'], getConfig('factionJoinLimit', current_scene['nowLimitNum'], 'limitNum')]

//grou_pkBigBg 的自身的属性 storagePkNearbyPlayerInfoProperty0

current_scene.vars_.markPkFightObj = self;
game.vars_.respPvpFightingEnemys



//heroObjShow changeShowObjModel


otherHeroObj = qyengine.instance_create(0, random(current_scene.height * 0.5), "otherHeroObj_" + game.vars_.respPvpFightingEnemys[5][i].profession, {
	"id": "otherHeroObj" + i,
	"zIndex": 10,
	"layer": "layer_fight"
});


otherHeroObj.vars_.bloodBg = qyengine.instance_create(Number(getConfig("UIConfig", "grou_pkNearbyPlayerInfo", "position").split(",")[0]),
	Number(getConfig("UIConfig", "grou_pkNearbyPlayerInfo", "position").split(",")[1]), "heroObjShow", {
		"id": heroObjShow + "pk",
		"zIndex": 4,
		"layer": "layer_headerfeet"
	});

//武器:
21001 - 21016 //男女法师
20001 - 20016 //战士
22001 - 22016 //道士
//衣服:
20201 - 20216 //男战士男战士
21201 - 21216 //法师
22201 - 22216 //道士

current_scene['storagePkNearbyPlayerInfoProperty']
//initFactionSceneData txt_factionFlagFighting
//现在密探成功要重新请求;
grou_packCapacityFrame
reqPvpFieldSpyPlayer //密探请求
onRespPvpFieldSpyPlayerResult //密探成功与否
reqPvpFieldPkPlayer //请求野外pk的玩家
onRespPvpFieldPkPlayersResult //请求野外pk的玩家的反馈

current_scene.vars_.mainSceneRequestPkPlayer //判断是主界面进来的还是pk界面进来的。



//密探返回,赋值
if (qyengine.getInstanceCount('grou_pkBigBg') == 0) {
	qyengine.guardId('txt_PKtime_' + game.vars_.secretLocation).hide();
	qyengine.guardId('txt_PKtime_' + game.vars_.secretLocation).stopTimeline();
	qyengine.guardId('obj_mainScenePkTimeFrame_' + game.vars_.secretLocation).hide();
	qyengine.guardId('txt_PKtime_' + game.vars_.secretLocation).hide();
	qyengine.guardId('obj_PVEicon_计时_' + game.vars_.secretLocation).show();
	qyengine.guardId('obj_PVEicon_计时_' + game.vars_.secretLocation).changeSprite('obj_通用_圆形头像框_wh_default');
	qyengine.guardId("obj_PVEicon_计时_" + game.vars_.secretLocation).setVar('fightPlayerProperty', data[1]);
	qyengine.guardId("obj_PVEicon_计时_" + game.vars_.secretLocation).setVar('type', "挑战");
	qyengine.guardId('obj_通用_圆形头像框底图_wh_' + game.vars_.secretLocation).show();
	qyengine.guardId('obj_通用_圆形头像框底图_wh_' + game.vars_.secretLocation).changeSprite("obj_" + game.configs.role[Number(data[1].profession)].photo + "_default");
	qyengine.guardId('obj_通用_圆形头像框底图_wh_' + game.vars_.secretLocation).setSize(90, 90);
} else {
	qyengine.guardId("txt_pkSecret_" + game.vars_.secretLocation).stopTimeline();
	if (game.vars_.secretLocation == 2) {
		qyengine.guardId('obj_pkPlayerPhotoFrame_OutFight_' + game.vars_.secretLocation).show();
		qyengine.guardId("obj_pkPlayerPhotoImage_" + game.vars_.secretLocation).show();
		qyengine.guardId("obj_pkPlayerPhotoImage_" + game.vars_.secretLocation).changeSprite("obj_" + game.configs.role[Number(data[1].profession)].photo + "_default");
		qyengine.guardId("txt_outPkVipNum_" + game.vars_.secretLocation).hide();
		qyengine.guardId("txt_pkOutName_OutFight_" + game.vars_.secretLocation).show();
		qyengine.guardId("obj_pkFightButton_OutFight_" + game.vars_.secretLocation).changeSprite("obj_pkFightButton_A0");
		qyengine.guardId("txt_pkSecret_" + game.vars_.secretLocation).destroy();
		qyengine.guardId("txt_outPkVipNum_" + game.vars_.secretLocation).setText("VIP" + data[1].vip);
		qyengine.guardId("txt_pkOutName_OutFight_" + game.vars_.secretLocation).setText(data[1].nick);
		qyengine.guardId("obj_pkFightButton_OutFight_" + game.vars_.secretLocation).setVar('fightPlayerProperty', data[1]);
		qyengine.guardId("obj_pkFightButton_OutFight_" + game.vars_.secretLocation).setVar('type', "挑战");
	} else {
		for (var i = game.vars_.secretLocation; i <= 2; i++) {
			qyengine.guardId('obj_pkPlayerPhotoFrame_OutFight_' + i).show();
			qyengine.guardId("obj_pkPlayerPhotoImage_" + i).show();
			qyengine.guardId("txt_outPkVipNum_" + i).hide();
			qyengine.guardId("txt_pkOutName_OutFight_" + i).show();
			if (qyengine.guardId("txt_pkSecret_" + i)) {
				qyengine.guardId("txt_pkSecret_" + i).destroy();
			}
		}
		KBEngine.app.player().baseCall('reqPvpFieldPkPlayer');
	}

	//current_game.scripts["al_scr_" + "realizeAfterSecretTimeShow"] && current_game.scripts["al_scr_" + "realizeAfterSecretTimeShow"].call(this, undefined, this, game.vars_.secretLocation + 1);
}



//1, 华安天天爱问答新增加一个H5的更改版本;
//2， 等毋含和服务端boss接完, 再和他把帮派任务接完。
//3, bug修改以及王号遗留下的部分bug的修改;



game.vars_.backFaction[1][3] //帮派积分    
grou_factionDailyActivity.objects['txt_myCalculus'].setText(game.vars_.backFaction[1][3]);
game.vars_.backFaction[0].numberslist.length



current_game.scripts["al_scr_" + "createDoubleProgressResult"] && current_game.scripts["al_scr_" + "createDoubleProgressResult"].call(this, undefined, this);



current_game.scripts["al_scr_" + "createDoubleProgressDetail"] && current_game.scripts["al_scr_" + "createDoubleProgressDetail"].call(this, undefined, this);



obj_进入游戏框
obj_进入游戏火
qyengine.guardId("obj_开始游戏按钮_1").hide();
qyengine.guardId("obj_进入游戏火").hide();
qyengine.guardId("obj_进入游戏框").hide();







qyengine.guardId("obj_注册登录_加载条").width = 100;


qyengine.guardId("obj_注册登录_加载条").width = Number(data) * 430 / 100;

qyengine.guardId("obj_注册登录_加载条_2").x = qyengine.guardId("obj_注册登录_加载条").width + qyengine.guardId("obj_注册登录_加载底框").x;



qyengine.guardId("obj_注册登录_加载条").width = Number(data) * 430 / 100;
qyengine.guardId("obj_注册登录_加载条_2").x = qyengine.guardId("obj_注册登录_加载条").width + qyengine.guardId("obj_注册登录_加载底框").x;
if (Number(data) >= 100) {
	qyengine.different_scene('main_scene');
}



var addWidthNum = random_range(1, 10);
var widthNum = self.width + addWidthNum;
if (widthNum > 430) {
	self.width = widthNum - 430;
}
obj_注册登录_加载条_3.x = self.x + self.width;

qyengine.guardId("obj_注册登录_加载条_1").stopTimeline();
qyengine.guardId("obj_注册登录_加载条_1").width = 430;
qyengine.guardId("obj_注册登录_加载条_3").x = qyengine.guardId("obj_注册登录_加载条_1").width + qyengine.guardId("obj_注册登录_加载条_1").x;


qyengine.guardId("obj_创建角色按钮").hide();
qyengine.guardId("obj_通用_确定_argeement_wh").hide();
qyengine.guardId("txt_createRole_userName_Tip").hide();



qyengine.loadObjectAssets([
	"heroObjShow", "heroObjShowAll", "obj_guide_newopen_info", "obj_battleBg_1", "obj_factionManagementBG", "obj_通用_大框_外框_02pw",
	"obj_createAndEnterBotton", "obj_factionMengBan", "obj_popUI_bg", "obj_factionListBottonMengBan", "obj_通用_大框_外框_02pw",
	"obj_通用_大框_外框_02", "obj_熔炼_背景图片", "obj_packageBigFrame", "obj_选择装备_外框", "obj_选择装备_内框", "obj_包裹_弹出框_外框",
	"obj_pkBgMengBan", "obj_pkBgUiOut", "obj_pkBgUi", "obj_pkFailAndSuccess", "obj_pkBgMengBan", "obj_pkAttackNearbyBg", "obj_pkAttackNearbyFrameOut",
	"obj_通用_大框_内框_02", "obj_通用_界面背景_factionFlag_wh", "obj_通用_大框_外框_01_factionbaoku", "obj_通用_大框_内框_02_factionbaoku_wh",
	"obj_通用_界面背景_factionbaoku", "obj_通用_大框_外框_03_guardExcitation", "obj_国库_框框背景图", "obj_副本弹出框遮罩", "obj_通用_大框_内框_01",
	"obj_通用_大框_外框_01", "obj_通用_大框_内框_03", "obj_通用_大框_外框_03", "obj_hangUpBg_1", "obj_obj_hangUpBg_2", "obj_任务界面背景",
	"obj_任务界面内框", "obj_任务界面外框", "obj_任务界面内框_1", "obj_任务界面外框_1", "obj_传承装备展示背景图", "obj_传承装备界面内框",
	"obj_传承装备界面外框", "obj_传承装备展示背景图_1", "obj_装备传承_背景", "obj_传承装备展示背景框", "obj_battlelog_duibi", "obj_chat_bg",
	"obj_fuliBG", "obj_biaoju_bg", "obj_bangpai_paihangbang_BG3", "obj_getway_BG1", "obj_breakout_BG1", "obj_breakout_BG2", "obj_battlelogtitle",
	"obj_liaotian_bg", "obj_七天登录_底框", "obj_家族镖局_背景图片", "obj_bangpai_paihangbang_BG2", "obj_getway_BG2", "obj_breakout_BG2",
	"obj_新手引导_欢迎", "role_bg_inside", "role_common_BG", "creatRole_BG", "roleSkill_bgIn", "starShow_BGIn", "wing_bgIn",
	"obj_王城擂台赛_背景图", "obj_BOSS战_框3", "obj_新手引导_新玩法框", "obj_膜拜霸主_底框", "obj_虚伪以待_背景图", "obj_虚伪以待_背景图_1",
	"obj_王者披风_底图", "vacantPositionPanelBGImage", "obj_通用_大框_内框_02_goodDetail_wh", "obj_通用_大框_内框_03_shopUI",
	"obj_通用_界面背景_shop_wh", "obj_通用_小内框_shop_wh", "obj_mailBoxMask_wh", "obj_通用_大框_内框_02", "obj_通用_大框_内框_03_mailBox_wh",
	"ChuckRoleInfoBG_show", "equipmentBGIn_show", "loognNum_bg_show", "role_bg_inside_show", "role_common_BG_show", "roleSkill_bgIn_show",
	"starShow_BGIn_show", "wing_bgIn_show", "arena_bg", "obj_通用_内框_01", "obj_竞技场商店_小框", "ringKingPanelBg", "ranking_item_btn",
	"obj_通用_界面背景", "obj_通用_内框_02", "obj_通用_大框_内框_03", "grou_foes_scene_zhezhao", "obj_登录注册_背景", "obj_battlelog_duibi",
	"obj_chat_bg", "obj_fuliBG", "obj_biaoju_bg", "obj_bangpai_paihangbang_BG3", "obj_getway_BG1", "obj_breakout_BG1", "obj_bloodEffect",
	"obj_magicEffect", "obj_自动挑战特效"
], function (ok) {
	console.log('加载资源', ok);
	current_game.scripts["al_scr_" + "createDoubleProgressResult"] && current_game.scripts["al_scr_" + "createDoubleProgressResult"].call(this, undefined, this);
}, function (p) {
	console.log(p)
	current_game.scripts["al_scr_" + "createDoubleProgressDetail"] && current_game.scripts["al_scr_" + "createDoubleProgressDetail"].call(this, undefined, this, p);
});



//申请界面
qyengine.guardId('grou_factionApplyItem' + repeatTime).objects['obj_通用_小按钮_01_pwang'].vars_.applyId = data[0][repeatTime][0];
qyengine.guardId('grou_factionApplyItem' + repeatTime).objects['obj_通用_小按钮_01_pwang_1'].vars_.applyId = data[0][repeatTime][0];
qyengine.guardId('grou_factionApplyItem' + repeatTime).objects['obj_通用_小按钮_01_pwang'].vars_.listIndex = repeatTime + 1;
qyengine.guardId('grou_factionApplyItem' + repeatTime).objects['obj_通用_小按钮_01_pwang_1'].vars_.listIndex = repeatTime + 1;
qyengine.guardId('grou_factionApplyItem' + repeatTime).objects['txt_factionApplyItemLevel'].setText(data[0][repeatTime][1]);
qyengine.guardId('grou_factionApplyItem' + repeatTime).objects['txt_factionApplyItemName'].setText(data[0][repeatTime][2]);
qyengine.guardId('grou_factionApplyItem' + repeatTime).objects['txt_factionApplyItemFight'].setText(data[0][repeatTime][3]);

for (var i = current_scene['scroIndex']; i < scro_factionApply.vars_.itemsNum; i++) {
	if (!(qyengine.guardId('grou_factionApplyItem' + 0) && qyengine.guardId('grou_factionApplyItem' + 0).destroyed_)) {
		qyengine.guardId('grou_factionApplyItem' + repeatTime).objects['obj_通用_小按钮_01_pwang'].vars_.listIndex--;
	}
}



scro_factionApply.vars_.itemsNum


//场景一般是3个图层 layer_fight   layer_maincity	layer_headerfeet
'update_dazao_redPoint_data'



grou_factionRankListItem(35, 54)
qyengine.guardId('grou_factionFightRankListItem' + repeatTime).setScale(1, 1);


obj_通用_选择框_factionFightRankList_0

var markSplitArray = touchObj.spriteName.split("_");
if (markSplitArray[markSplitArray.length - 1] === "A0") {
	touchObj.changeSprite(touchObj.classId + "_A1");
} else {
	touchObj.changeSprite(touchObj.classId + "_A0");
}
for (var i = 0; i < tabNum; i++) {
	if (qyetouchObj.vars_.tabId != self.vars_.tabId) {
		qyengine.guardId(touchObj.classId + "_" + i).changeSprite(touchObj.classId + "_A0");
	}
}





(356, 42)


grou_factionFightRewardItem
scro_factionFightReward


grou_factionFightRewardItem(30, -132)
grou_factionFightRewardItemSmall(-37, 50)

for (var i = 0; i < 5; i++) {
	//创建实例
	qyengine.instance_create(-37, 50, "grou_factionFightRewardItemSmall", {
		"type": "grou_factionFightRewardItemSmall",
		"id": 'grou_factionFightRewardItemSmall' + i,
		"zIndex": 5,
		"scene": 'main_scene',
		"layer": 'layer_headerfeet'
	});
	qyengine.guardId('grou_factionFightRewardItemSmall' + i).appendChild(qyengine.guardId("grou_factionFightRewardItem" + repeatTime).objects['scro_factionFightRewardItem'].id, -37, 50, 0, i, false, true);
}

qyengine.guardId("grou_factionFightRewardItem" + repeatTime).objects['scro_factionFightRewardItem']

qyengine.guardId("scro_1").appendChild("xxxxxxxxxx", 120, 30, 1 - 1, 2 - 1, false, true);



grou_factionLastRanklist.objects


for (var i = 0; i < qyengine.getInstancesByType("grou_factionFightRewardItemSmall").length; i++) {
	qyengine.getInstancesByType("grou_factionFightRewardItemSmall")[i].destroy();
}



if (!this.addOneInstance("grou_factionFightRewardItem", repeatTime, 0, {
	id: 'grou_factionFightRewardItem' + repeatTime,
	px: 35,
	py: 54
})) {
	this.vars_.itemSize = Math.max(repeatTime - 1, 0);
	for (var i = 0; i < 5; i++) {
		//创建实例
		qyengine.instance_create(-37, 50, "grou_factionFightRewardItemSmall", {
			"type": "grou_factionFightRewardItemSmall",
			"id": 'grou_factionFightRewardItemSmall' + i,
			"zIndex": 5,
			"scene": 'main_scene',
			"layer": 'layer_headerfeet'
		});
		qyengine.guardId('grou_factionFightRewardItemSmall' + i).appendChild(self.objects['scro_factionFightRewardItem'].id, -37, 50, 0, i, false, true);
	}
	break;
}



qyengine.guardId(self.objects['scro_factionFightRewardItem'].id + '').addOneInstance('grou_factionFightRewardItemSmall' + i, 0, i, {
	"way": 'objectName',
	"type": 'grou_factionFightRewardItemSmall',
	"id": 'grou_factionFightRewardItemSmall' + i,
	"autoAdd": "",
	"y": 0,
	"x": i,
	"center": "",
	"px": -37,
	"py": 50,
	"allowMultiple": 'true'
});



grou_militaryMain(-5, 186)
qyengine.guardId("grou_treasuryMainUI").appendChild("grou_militaryMain", -20, 86);



qyengine.guardId("scro_1").appendChild("xxxxxxxxxx", 120, 30, 1 - 1, 2 - 1, false, true);

var objList = {
	"obj_国库_国库文字": "obj_通用_选择框_01_treansury_国库",
	"obj_国库_建设文字": "obj_通用_选择框_01_treansury_建设",
	"obj_国库_守卫文字": "obj_通用_选择框_01_treansury_守卫",
	"obj_国库_军需文字": "obj_通用_选择框_01_treansury"
};

if (self.vars_.curSelectedTab && event.argument0 && qyengine.guardId(objList[self.vars_.curSelectedTab]).changeSprite('obj_通用_选择框_01_treansury_default')) {
	qyengine.guardId(self.vars_.curSelectedTab).vars_.canTouch = true;
	self.vars_.curSelectedTab = event.argument0;
	self.vars_.curSelectedTab && qyengine.guardId(objList[self.vars_.curSelectedTab]).changeSprite('obj_通用_选择框_01_treansury_mouseDown');
}



if (self.vars_.curPopUI) {
	if (qyengine.getInstanceCount(self.vars_.curPopUI)) {
		qyengine.guardId(self.vars_.curPopUI).destroy();
		self.vars_.curPopUI = event.argument1;
	}
}


//创建实例
qyengine.instance_create(90, 500, "grou_militaryPopConsume", {
	"type": "grou_militaryPopConsume",
	"id": 'grou_militaryPopConsume',
	"zIndex": 5,
	"scene": 'main_scene',
	"layer": 'layer_headerfeet'
});


for (var i = current_scene['scroIndex']; i < scro_factionApply.vars_.itemsNum; i++) {
	if (!(qyengine.guardId('grou_factionApplyItem' + i) && qyengine.guardId('grou_factionApplyItem' + i).destroyed_)) {
		qyengine.guardId('grou_factionApplyItem' + i).objects['obj_通用_小按钮_01_pwang'].vars_.listIndex--;
	}
}

//关于家族战的报名主界面的数据
data = [0, 0, 0, [1456342443, 1476342443],
	[2456342443, 2476342443],
	[0, 0]
]; //开始战斗之前为0否则为1	上次家族排名	上次个人排名 报名时间  战斗时间 报名信息

//关于家族战的报名主界面的数据的数据的初始化
grou_factionFightMain.objects["txt_factionFightMain2"].setText("我的家族等级: " + game.vars_.backFaction[0].level);
var sighUpCondition = ["txt_factionFightMain5", "txt_factionFightMain4", "txt_factionFightMain3"];
var sighUpObj = ["obj_家族_报名参加_2", "obj_家族_报名参加_1", "obj_家族_报名参加"];
var sighUpObjBackButton = ["obj_通用_按钮_factionFightFindButton_2_1", "obj_通用_按钮_factionFightFindButton_1_1", "obj_通用_按钮_factionFightFindButton_0_1"];
for (var i = 0; i < sighUpCondition.length; i++) {
	grou_factionFightMain.objects[sighUpCondition[i]].text = "报名条件: " + game.configs.guild_war_level[i + 1].level_min + "级<=家族等级<=" + game.configs.guild_war_level[i + 1].level_max + "级";
	grou_factionFightMain.objects[sighUpObj[i]].vars_.level_min = game.configs.guild_war_level[i + 1].level_min;
	grou_factionFightMain.objects[sighUpObj[i]].vars_.level_max = game.configs.guild_war_level[i + 1].level_max;
	if (game.vars_.backFaction[0].level >= game.configs.guild_war_level[i + 1].level_min && game.vars_.backFaction[0].level <= game.configs.guild_war_level[i + 1].level_max) {
		grou_factionFightMain.objects[sighUpObj[i]].vars_.canTouch = true;
	} else {
		grou_factionFightMain.objects[sighUpObj[i]].vars_.canTouch = false;
		grou_factionFightMain.objects[sighUpObj[i]].setHSL && grou_factionFightMain.objects[sighUpObj[i]].setHSL(0, -100, 0);
		grou_factionFightMain.objects[sighUpObjBackButton[i]].setHSL && grou_factionFightMain.objects[sighUpObjBackButton[i]].setHSL(0, -100, 0);
	}
}
if (data[1]) {
	grou_factionFightMain.objects["txt_factionFightMain6"].text = "上次家族排名: " + data[1];
} else {
	grou_factionFightMain.objects["txt_factionFightMain6"].text = "上次家族排名: 尚无名次";
}
if (data[2]) {
	grou_factionFightMain.objects["txt_factionFightMain7"].text = "上次个人排名: " + data[2];
} else {
	grou_factionFightMain.objects["txt_factionFightMain7"].text = "上次个人排名: " + "尚无名次";
}
if (!data[5][1]) {
	grou_factionFightMain.objects[sighUpObj[data[5][0]]].changeSprite("obj_家族_报名参加_A1");
	grou_factionFightMain.objects[sighUpObj[data[5][0]]].setHSL(0, 0, 0);
	grou_factionFightMain.objects[sighUpObjBackButton[data[5][0]]].hide();
}
var time0 = 0;
var time1 = 0;
for (var i = 3; i <= 4; i++) {
	if (i === 3) {
		time0 = changeTimeToText(i);
	} else {
		time1 = changeTimeToText(i);
	}
}
grou_factionFightMain.objects["txt_factionFightMain0"].text = time0;
grou_factionFightMain.objects["txt_factionFightMain1"].text = time1;

function changeTimeToText(args0) {
	var temps = ["报名时间: ", "战斗时间: "];
	var time0_obj = new Date(data[args0][0] * 1000);
	var time0_obj1 = new Date(data[args0][1] * 1000);
	var timeText = temps[args0 - 3] + calNowMonth(time0_obj.toString().split(" ")[1]) + "月" + time0_obj.toString().split(" ")[2] + "日" + time0_obj.toString().split(" ")[4].split(":")[0] + ":" + time0_obj.toString().split(" ")[4].split(":")[1] + "至" +
		calNowMonth(time0_obj.toString().split(" ")[1]) + "月" + time0_obj1.toString().split(" ")[2] + "日" + time0_obj1.toString().split(" ")[4].split(":")[0] + ":" + time0_obj1.toString().split(" ")[4].split(":")[1];
	return timeText;
}

function calNowMonth(monthDate) {
	var month12 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	for (var i = 0; i < month12.length; i++) {
		if (month12[i] == monthDate) {
			return i;
		}
	}
}



this.setHSL && this.setHSL(0, -100, 0);

grou_militaryMain.objects["obj_国库_我要押镖"].setHSL && grou_militaryMain.objects["obj_国库_我要押镖"].setHSL(0, -100, 0);
grou_militaryMain.objects["obj_通用_按钮_02_militaryDefend"].setHSL && grou_militaryMain.objects["obj_通用_按钮_02_militaryDefend"].setHSL(0, -100, 0);

current_game.scripts["al_scr_" + "yaBiaoButtonChangeGray"] && current_game.scripts["al_scr_" + "yaBiaoButtonChangeGray"].call(this, undefined, this, 0);

if (Number(data) == 0) { //变灰
	grou_militaryMain.objects["obj_国库_我要押镖"].setHSL && grou_militaryMain.objects["obj_国库_我要押镖"].setHSL(0, -100, 0);
	grou_militaryMain.objects["obj_通用_按钮_02_militaryDefend"].setHSL && grou_militaryMain.objects["obj_通用_按钮_02_militaryDefend"].setHSL(0, -100, 0);
} else {
	grou_militaryMain.objects["obj_国库_我要押镖"].setHSL && grou_militaryMain.objects["obj_国库_我要押镖"].setHSL(0, 0, 0);
	grou_militaryMain.objects["obj_通用_按钮_02_militaryDefend"].setHSL && grou_militaryMain.objects["obj_通用_按钮_02_militaryDefend"].setHSL(0, 0, 0);
}



qyengine.callAfter(function () {
	grou_militaryMain.objects["obj_国库_我要押镖"].changeSprite("obj_国库_我要押镖_A0");
	grou_militaryMain.objects["txt_militaryMain_5"].setText("金子: 50");
}
	.bind(this), current_scene, 50);

qyengine.callAfter(function () {
	console.log("打印下先。");
}
	.bind(this), current_scene, 1000);



grou_militaryMain.objects["txt_militaryMain_5"] && clearInterval(grou_militaryMain.objects["txt_militaryMain_5"].vars_.markCalTime);


grou_militaryMain.objects["obj_国库_换一辆"].setHSL && grou_militaryMain.objects["obj_国库_换一辆"].setHSL(0, -100, 0);


game.vars_.userInfo.packageInfo.packGod = data[0];
console.log("灵魂~~~~~~" + data[0]);
game.vars_.xxxxwh = data[0];
var markProperty = ["name", "icon", "quality"];
for (var i = 0; i < game.vars_.userInfo.packageInfo.packGod.length; i++) {
	for (var j = 0; j < markProperty.length; j++) {
		game.vars_.userInfo.packageInfo.packGod[i][markProperty[j]] = game.configs.dragon_soul[game.vars_.userInfo.packageInfo.packGod[i].id][markProperty[j]];
	}
}

onesInfoUI.vars_.markLastTouch = "promote";
onesInfoUI.vars_.promote = true;

if (onesInfoUI.vars_.markLastTouch == "promote") {
	onesInfoUI.vars_.promote = true;
}



obj_提示职务或解除.vars_.touchType = 2; //按钮为副组长
obj_提示职务或解除.vars_.touchType = 1; //



if (self.vars_.touchType == 2) {
	self.vars_.touchType == 1;
	onesInfoUI.objects["obj_提示职务或解除"].changeSprite("obj_授予爵位_解除职务");
} else {
	self.vars_.touchType == 2;
	onesInfoUI.objects["obj_提示职务或解除"].changeSprite("obj_授予爵位_提升职务");
}



if (qyengine.guardId("obj_提示职务或解除") && qyengine.guardId("obj_提示职务或解除").vars_.touchType === 2) {
	qyengine.guardId(current_scene.onesInfo.touchId).objects["memberInfoUITxt_0"].setText("副族长");
} else if (qyengine.guardId("obj_提示职务或解除") && qyengine.guardId("obj_提示职务或解除").vars_.touchType === 1) {
	qyengine.guardId(current_scene.onesInfo.touchId).objects["memberInfoUITxt_0"].setText("会员");
}


onesInfoUI.objects["memberInfoShow_2"].text = "职位：会员";

qyengine.guardId(current_scene.onesInfo.touchId).vars_.currentHeroInfo



qyengine.guardId(current_scene.onesInfo.touchId).objects["obj_帮派成员信息展示背景"].vars_.currentHeroInfo.jobs = 2; //副组长
qyengine.guardId(current_scene.onesInfo.touchId).objects["obj_帮派成员信息展示背景"].vars_.currentHeroInfo.jobsTxt = "副族长";
0 //会员
memberInfoUI1.objects["obj_帮派成员信息展示背景"].vars_.currentHeroInfo.jobs



qyengine.guardId("grou_pkNearbyPlayerInfo").appendChild("heroObjShowpk");
grou_pkNearbyPlayerInfo.vars_.storageEnemyObj.show()

"heroObjShowpk"


for (var i = 0; i < current_scene.vars_.getRanklistData[0][repeatTime][3].length; i++) {
	qyengine.guardId('grou_factionFightRankListItem' + repeatTime).objects["obj_通用_金子_" + i].show();
	//qyengine.guardId('grou_factionFightRankListItem'+repeatTime).objects["obj_通用_金子_"+i].changeSprite("");
	qyengine.guardId('grou_factionFightRankListItem' + repeatTime).objects["txt_fationFightLastRankList_" + (3 + i)].show();
	qyengine.guardId('grou_factionFightRankListItem' + repeatTime).objects["txt_fationFightLastRankList_" + (3 + i)].setText(current_scene.vars_.getRanklistData[0][repeatTime][3][i][1]);
	var markDataId = Number(current_scene.vars_.getRanklistData[0][repeatTime][3][0][0]);
	var markIcon = "obj_通用_金子_default";
	if (game.configs.equipment[markDataId]) {
		markIcon = "obj_" + game.configs.equipment[markDataId].icon + "_default";
	} else if (game.configs.item[markDataId]) {
		markIcon = "obj_" + game.configs.item[markDataId].icon + "_default";
	} else if (game.configs.box[markDataId]) {
		markIcon = "obj_" + game.configs.box[markDataId].icon + "_default";
	} else {
		markIcon = "obj_" + game.configs.dragon_soul[markDataId].icon + "_default";
	}
	qyengine.guardId('grou_factionFightRankListItem' + repeatTime).objects["obj_通用_金子_" + i].changeSprite(markIcon);
	qyengine.guardId('grou_factionFightRankListItem' + repeatTime).objects["obj_通用_金子_" + i].setScale(0.6, 0.6);
}
var markCommonBottonText = ["我的家族排名", "家族族长排名",
	"我的排名"
];
grou_factionLastRanklist.objects["txt_fationFightLastRankList_7"].text = markCommonBottonText[Number(self.vars_.eventArgs)] + current_scene.vars_.getRanklistData[1][0];
grou_factionLastRanklist.objects["txt_fationFightLastRankList_8"].text = "士气值" + current_scene.vars_.getRanklistData[1][1];
for (var j = 0; j < current_scene.vars_.getRanklistData[1][2].length; j++) { //固定对应获得的奖励
	grou_factionLastRanklist.objects["obj_通用_金子_" + (4 + j)].show();
	grou_factionLastRanklist.objects["txt_fationFightLastRankList_" + (9 + j)].show();
	var markRewardId = current_scene.vars_.getRanklistData[1][2][j][0];
	var markRewardIcon = "obj_通用_金子_default";
	if (game.configs.equipment[markRewardId]) {
		grou_factionLastRanklist.objects["obj_通用_金子_" + (4 + j)].changeSprite("obj_" + game.configs.equipment[markRewardId].icon + "_default");
	} else if (game.configs.item[markDataId]) {
		grou_factionLastRanklist.objects["obj_通用_金子_" + (4 + j)].changeSprite("obj_" + game.configs.item[markRewardId].icon + "_default");
	} else if (game.configs.box[markDataId]) {
		grou_factionLastRanklist.objects["obj_通用_金子_" + (4 + j)].changeSprite("obj_" + game.configs.box[markRewardId].icon + "_default");
	} else {
		grou_factionLastRanklist.objects["obj_通用_金子_" + (4 + j)].changeSprite("obj_" + game.configs.dragon_soul[markRewardId].icon + "_default");
	}
	grou_factionLastRanklist.objects["obj_通用_金子_" + (4 + j)].setScale(0.6, 0.6);
	grou_factionLastRanklist.objects["txt_fationFightLastRankList_" + (9 + j)].text = "" + current_scene.vars_.getRanklistData[1][2][j][1];
}
if (Number(self.vars_.eventArgs)) {
	qyengine.guardId('grou_factionFightRankListItem' + repeatTime).objects["txt_fationFightLastRankList_vip"].text = "VIP 0";
	qyengine.guardId('grou_factionFightRankListItem' + repeatTime).objects["obj_通用_方形头像框"].changeSprite("obj_photopwang" + "_10001_default");
	qyengine.guardId('grou_factionFightRankListItem' + repeatTime).objects["obj_通用_方形头像框"].setScale(0.8, 0.8);
}


scro_factionFightRankList.vars_.eventArgs


current_scene.vars_.getRanklistData = [[[1, "徐超超", 1000000, [[97001, 1], [97002, 5]]],
[2, "xuguangyuan", 2000000, [[97010, 1], [96001, 5]]]], [20, 500, [[97004, 2], [97005, 4], [97003, 4]]]];//家族战排行榜的数据结构;


if ((self.vars_.taskType <= 3)) {
	if (Number(game.configs['guild_mission']['' + (current_scene.markTaskType)].gold) > Number(game.vars_.userInfo.gold)) {
		current_game.scripts["al_scr_" + "createCommonFlutterTxt"] && current_game.scripts["al_scr_" + "createCommonFlutterTxt"].call(this, undefined, this, '金子不足!');
		return;
	}
	if (Number(game.configs['guild_mission']['' + (current_scene.markTaskType)].silver) > Number(game.vars_.userInfo.silver)) {
		current_game.scripts["al_scr_" + "createCommonFlutterTxt"] && current_game.scripts["al_scr_" + "createCommonFlutterTxt"].call(this, undefined, this, '银子不足!');
		return;
	}
	current_game.scripts["al_scr_" + 'actionlist_createLoadingCircle'] && current_game.scripts["al_scr_" + 'actionlist_createLoadingCircle'].call(this, undefined, this);
	current_game.scripts['scr_kbe_sendMessage']("reqGuildTaskType", [self.vars_.taskType], false);
}
//格式化快捷键alt +shift+ f;


self.vars_.lastTouchInstance = "obj_通用_选择框_factionFightRankList_reward_0";
self.vars_.nowTouchInstance = "obj_通用_选择框_factionFightRankList_reward_0";
event.argument0
if (self.vars_.lastTouchInstance) {
	qyengine.guardId("self.vars_.lastTouchInstance").changeSprite("obj_通用_选择框_factionFightRankList_A0");
}
self.vars_.lastTouchInstance = self.vars_.nowTouchInstance;
qyengine.guardId("self.vars_.nowTouchInstance").changeSprite("obj_通用_选择框_factionFightRankList_A1");
qyengine.getInstancesByType("grou_factionLastRanklistReward").length

qyengine.guardId("grou_factionFightRewardItem" + repeatTime).objects["txt_rankListNumber"].setText(repeatTime);



//创建战族战的奖励
current_scene.vars_.factionFightRewardData = [[], [], []];
var factionFightWarData0 = [[[20001, 12], [97008, 10], [90201, 2], [20014, 3]], [[97001, 12], [97008, 10], [92001, 2], [98001]], [[97001, 12], [97008, 10], [20018, 2]]];
var factionFightWarData1 = [[[20001, 12], [97008, 10], [90201, 2], [20014, 3], [90001, 1], [90015, 2]], [[97001, 12], [97008, 10], [92001, 2], [98001]], [[97001, 12], [97008, 10], [20018, 2]]];
var factionFightWarData2 = [[[20001, 12], [97008, 10], [90201, 2], [20014, 3]], [[97001, 12], [97008, 10], [92001, 2], [98001]], [[97001, 12], [97008, 10], [20018, 2]]];
current_scene.vars_.factionFightRewardData[0][0] = factionFightWarData0;
current_scene.vars_.factionFightRewardData[0][1] = factionFightWarData1;
current_scene.vars_.factionFightRewardData[0][2] = factionFightWarData2;
var markId = self.id.split("_")[self.id.split("_").length - 1];
for (var i = 0; i < current_scene.vars_.factionFightRewardData[0][0][markId].length; i++) {
	//创建实例
	qyengine.guardId(self.objects['scro_factionFightRewardItem'].id + '').addOneInstance('grou_factionFightRewardItemSmall', 0, i, {
		"way": 'objectName',
		"type": 'grou_factionFightRewardItemSmall',
		"id": 'grou_factionFightRewardItemSmall' + i,
		"autoAdd": "",
		"y": 0,
		"x": i,
		"center": "",
		"px": -37,
		"py": 50,
		"allowMultiple": 'true'
	});
	var markGetInfo = current_game.scripts["al_scr_" + "backIcon"] && current_game.scripts["al_scr_" + "backIcon"].call(this, undefined, this, Number(current_scene.vars_.factionFightRewardData[0][0][markId][i][0]));
	qyengine.guardId("grou_factionFightRewardItemSmall" + i).objects["obj_factionFightRewardEquipIcon"].changeSprite("obj_" + markGetInfo.icon + "_default");
	qyengine.guardId("grou_factionFightRewardItemSmall" + i).objects["txt_fationFightReward_2"].text = "" + Number(current_scene.vars_.factionFightRewardData[0][0][markId][i][1]);
	qyengine.guardId("grou_factionFightRewardItemSmall" + i).objects["txt_fationFightReward_1"].text = "" + markGetInfo.name;
}




//每次进入帮派,判断是否有人申请进入帮派
qyengine.callAfter(function () {
	applyPrompt();
}.bind(this), current_scene, 50);
function applyPrompt() {
	if (Number(game.vars_.backFaction[1][0]) == 1 || Number(game.vars_.backFaction[1][0]) == 2) {   //族长、副族长
		if (game.vars_.backFaction[0].reqjoinguildlist.length > 0) {
			var posX = Number(game.configs.UIConfig.grou_applyPrompt.position.split(",")[0]);
			var posY = Number(game.configs.UIConfig.grou_applyPrompt.position.split(",")[1]);
			var zIndex = Number(game.configs.UIConfig.grou_applyPrompt.zIndex);
			qyengine.instance_create(posX, posY, "grou_applyPrompt", {
				"type": "grou_applyPrompt",
				"id": "grou_applyPrompt",
				"zIndex": zIndex,
				"scene": 'main_scene',
				"layer": 'layer_headerfeet'
			});
		}
	}
}



if (qyengine.getInstancesByType("grou_applyPrompt").length > 0) {
	qyengine.getInstancesByType("grou_applyPrompt").destroy();
}

//grou_applyPrompt  (145,600)  10

//获取途径
game.scripts["al_scr_" + "actionlist_getway"](null, null, 90001, 6);



qyengine.guardId('txt_PorpUpWord').setText(getConfig("box", current_scene['nowSaleButton'].vars_.Id, "name"));
qyengine.guardId("txt_saleGoodDec").setText(getConfig("box", current_scene['nowSaleButton'].vars_.Id, "dec"));
qyengine.guardId('txt_equipNeedLevel').hide();
qyengine.guardId('txt_packagePopUpBoxWord').setText('请选择数量');
qyengine.guardId('txt_saleRewardCoin').hide();
qyengine.guardId("grou_packagePopUp_Box").objects['cont_packagePopUp_Box'].objects['obj_equipImage'].changeSprite("obj_" + game.configs.box[current_scene['nowSaleButton'].vars_.Id].icon + '_default');
//使用或者开启宝箱界面的元素的一些初始化
var showLinShi = ['txt_openBoxCostWord', 'obj_openBoxCost', 'txt_openBoxCostName', 'txt_openBoxHaveGoodNum', 'txt_openBoxCostGoodNum'];
for (var i = 0; i < showLinShi.length; i++) {
	qyengine.guardId(showLinShi[i]).show();
}
//qyengine.guardId('txt_openBoxCostGoodNum').setText('1');
openBoxOpera(current_scene['nowSaleButton'].vars_.Id);
function openBoxOpera(markId) {
	for (var i = 0; i < game.vars_.userInfo.packageInfo.packBox.length; i++) {
		if (markId == game.vars_.userInfo.packageInfo.packBox[i].id) {
			if (Number(game.vars_.userInfo.packageInfo.packBox[i].type) == 2) {
				qyengine.guardId('obj_装备出售_使用按钮').changeSprite('obj_装备出售_使用按钮_A1');
				var costGoodNum = Number(game.vars_.userInfo.packageInfo.packBox[i].cost.split(':')[1]);
				var costGoodType = Number(game.vars_.userInfo.packageInfo.packBox[i].cost.split(':')[0]);
				qyengine.guardId('txt_openBoxCostGoodNum').setText('' + costGoodNum);
				current_scene['nowSaleButton'].vars_.costId = costGoodType;
				qyengine.guardId('obj_openBoxCost').changeSprite('obj_' + game.configs.item[costGoodType].icon + '_default');	 //消耗的物品的icon
				qyengine.guardId('obj_openBoxCost').setScale(0.6, 0.6);
				qyengine.guardId('txt_openBoxCostName').setText(game.configs.item[costGoodType].name);	 //消耗的物品的name
				qyengine.guardId('txt_openBoxHaveGoodNum').setText(calNowHaveCostGood(costGoodType) + '/'); //拥有本物品的数量
				current_scene['nowSaleButton'].vars_.openBoxHaveGoodNum = calNowHaveCostGood(costGoodType);   //记录拥有本物品的数量
				qyengine.guardId('grou_packagePopUp_Box').dispatchMessage({
					"type": 'message',
					"message": "使用或开启",
					"argument0": 0
				});
			} else {
				qyengine.guardId('obj_装备出售_使用按钮').changeSprite('obj_装备出售_使用按钮_A0');
				var hideLinShi = ['txt_openBoxCostWord', 'obj_openBoxCost', 'txt_openBoxCostName', 'txt_openBoxHaveGoodNum', 'txt_openBoxCostGoodNum'];
				for (var j = 0; j < hideLinShi.length; j++) {
					qyengine.guardId(hideLinShi[j]).hide();
				}
				qyengine.guardId('grou_packagePopUp_Box').dispatchMessage({
					"type": 'message',
					"message": "使用或开启",
					"argument0": 1
				});
			}
			return;
		}
	}
}
//计算需要消耗的物品的数量
function calNowHaveCostGood(costId) {
	for (var i = 0; i < game.vars_.userInfo.packageInfo.packGood.length; i++) {
		if (Number(game.vars_.userInfo.packageInfo.packGood[i].id) == Number(costId)) {
			return Number(game.vars_.userInfo.packageInfo.packGood[i].num);
		}
	}
	return 0;
}


current_game.scripts["al_scr_" + "createCommonFlutterTxt"].call(this, undefined, this, '45级开启!');
//组别 剩余时间 剩余家族数量/家族总数量	
if (qyengine.getInstancesByType("grou_factionDailyActivity").length && grou_factionDailyActivity.vars_.upperLimitFaction) {
	game.vars_.backFaction[0].upperLimitFaction = grou_factionDailyActivity.vars_.upperLimitFaction;
}

if (qyengine.getInstancesByType("grou_factionFightMainFighting").length == 0) {
	var posX = Number(game.configs.UIConfig.grou_factionFightMainFighting.position.split(",")[0]);
	var posY = Number(game.configs.UIConfig.grou_factionFightMainFighting.position.split(",")[1]);
	var zIndex = Number(game.configs.UIConfig.grou_factionFightMainFighting.zIndex);
	qyengine.instance_create(posX, posY, "grou_factionFightMainFighting", {
		"type": "grou_factionFightMainFighting",
		"id": "grou_factionFightMainFighting",
		"zIndex": zIndex,
		"scene": 'main_scene',
		"layer": 'layer_headerfeet'
	});
	var posX1 = Number(game.configs.UIConfig.grou_factionFightCommonBotton_1.position.split(",")[0]);
	var posY1 = Number(game.configs.UIConfig.grou_factionFightCommonBotton_1.position.split(",")[1]);
	var zIndex1 = Number(game.configs.UIConfig.grou_factionFightCommonBotton_1.zIndex);
	qyengine.instance_create(posX1, posY1, "grou_factionFightCommonBotton", {
		"type": "grou_factionFightMainFighting",
		"id": "grou_factionFightCommonBotton_1",
		"zIndex": zIndex,
		"scene": 'main_scene',
		"layer": 'layer_headerfeet'
	});
	qyengine.guardId("grou_factionFightMainFighting").appendChild("grou_factionFightCommonBotton_1", posX1, posY1);
	//绘制滚轴元素
	scro_factionFightMainFighting.resetLimitPosition(true);
	scro_factionFightMainFighting.vars_.itemSize = 0;
	qyengine.guardId("scro_factionFightMainFighting").dispatchMessage({ "type": 'message', "message": 'create_object_item' });
}
grou_factionFightMainFighting.objects["txt_factionFightMian_fightMianScene2_1"] =
	"活动倒计时: " + countDownCal(Number(game.vars_.startFightMainData[1])); 	//活动倒计时
var markAllGroup = ["青铜组", "白银组", "黄金组"];
var surplusFamilyAndLevel = markAllGroup[Number(game.vars_.startFightMainData[2][0])] + "剩余家族数量: " + game.vars_.startFightMainData[2][1] +
	"/" + game.vars_.startFightMainData[2][2];
grou_factionFightMainFighting.objects["txt_factionFightMian_fightMianScene2_0"].text =
	surplusFamilyAndLevel;  //xxxx组剩余家族数量
var surplusTime = game.vars_.startFightMainData[3][0];
surplusTime = "攻击冷却时间: " + countDownCal(Number(surplusTime)) + "后可攻击";
grou_factionFightCommonBotton_1.objects["txt_fightSelect_6"].text = surplusTime;
grou_factionFightCommonBotton_1.objects["txt_fightSelect_7"].text = "我的家族排名" + game.vars_.startFightMainData[3][1];
grou_factionFightCommonBotton_1.objects["txt_fightSelect_11"].text = "未击破城门: " + game.vars_.startFightMainData[3][2] + "/" + game.vars_.startFightMainData[3][3];
grou_factionFightCommonBotton_1.objects["txt_fightSelect_8"].text = "家族士气值: " + game.vars_.startFightMainData[3][4];
grou_factionFightCommonBotton_1.objects["txt_fightSelect_9"].text = "我的个人排名: " + game.vars_.startFightMainData[3][5];
grou_factionFightCommonBotton_1.objects["txt_fightSelect_10"].text = "个人士气值: " + game.vars_.startFightMainData[3][6];
function countDownCal(markTime) {
	var minute = 0;
	var second = 0;
	if (markTime < 60) {
		return "00:" + markTime + "秒";
	} else {
		minute = Math.floor(markTime / 60);
		second = (markTime - minute * 60) < 0 ? 0 : (markTime - minute * 60);
		if (second < 10) {
			return "" + minute + "0" + second;
		} else {
			return "" + minute + "" + second;
		}
	}
}

//scro_factionFightMainFighting中元素的初始化	grou_factionFightMainFightingItem_
var markNameAndServer = "" + game.vars_.startFightMainData[0][0] + "<font  color='#ffe57a'>" + "LV." + game.vars_.startFightMainData[0][1] + "" +
	game.vars_.startFightMainData[0][2] + "</font>";
qyengine.guardId("grou_factionFightMainFightingItem_" + repeatTime).objects["txt_factionFightMian_fightMianScene2_item_0"].text = markNameAndServer;
qyengine.guardId("grou_factionFightMainFightingItem_" + repeatTime).objects["txt_factionFightMian_fightMianScene2_item_1"].text = "当前排名:" + game.vars_.startFightMainData[0][7];
var cityGate = "未击破城门: " + game.vars_.startFightMainData[0][3] + "/" + game.vars_.startFightMainData[0][4];
qyengine.guardId("grou_factionFightMainFightingItem_" + repeatTime).objects["txt_factionFightMian_fightMianScene2_item_1"].text = cityGate;
var moraleNum = "家族士气值: " + game.vars_.startFightMainData[0][5] + "" + game.vars_.startFightMainData[0][6];


//97601   ip 112 
//跨服家族战,到达战斗时间后的主界面
/** 家族列表(包括: 家族名称 等级 所属的服务器名字和编号 未击破城门数量	城门总数量	家族当前士气值 士气值上限 家族当前的排名)
 * 家族倒计时
 * 当前组别的剩余数量、当前组别的总家族数量
 * 攻击冷却时间 我的家族排名 未击破城门 家族士气值   我的个人排名 个人士气值
 * 
*/
game.vars_.startFightMainData = [[], 600, [0, 28, 35], [600, 2, 2, 4, 72850, 5, 20000]];
var factionDetailRanklist = [["徐超超二号", 1, "s1", 2, 4, 999, 10000, 28], ["徐超超二号", 1, "s1", 2, 4, 999, 10000, 28],
["徐超超三号", 3, "s2", 1, 4, 999, 10000, 22], ["徐超超四号", 10, "s5", 3, 4, 1288, 10000, 15]];
game.vars_.startFightMainData[0] = factionDetailRanklist;


//创建战斗前的选择城门的界面
if (qyengine.getInstancesByType("grou_fightSelectScene").length == 0) {
	var posX = Number(game.configs.UIConfig.grou_fightSelectScene.position.split(",")[0]);
	var posY = Number(game.configs.UIConfig.grou_fightSelectScene.position.split(",")[1]);
	var zIndex = Number(game.configs.UIConfig.grou_fightSelectScene.zIndex);
	qyengine.instance_create(posX, posY, "grou_fightSelectScene", {
		"type": "grou_fightSelectScene",
		"id": "grou_fightSelectScene",
		"zIndex": zIndex,
		"scene": 'main_scene',
		"layer": 'layer_headerfeet'
	});
	//本页面的一些从服务器获得的数据的赋值
	grou_fightSelectScene.vars_.gateSelectSceneData = [[5000, 10003], [4000, 10004], [6000, 10001], [6000, 10001]];
	var posX1 = Number(game.configs.UIConfig.grou_factionFightCommonBotton_0.position.split(",")[0]);
	var posY1 = Number(game.configs.UIConfig.grou_factionFightCommonBotton_0.position.split(",")[1]);
	var zIndex1 = Number(game.configs.UIConfig.grou_factionFightCommonBotton_0.zIndex);
	qyengine.instance_create(posX1, posY1, "grou_factionFightCommonBotton", {
		"type": "grou_factionFightCommonBotton",
		"id": "grou_factionFightCommonBotton_0",
		"zIndex": zIndex1,
		"scene": 'main_scene',
		"layer": 'layer_headerfeet'
	});
	qyengine.guardId("grou_fightSelectScene").appendChild("grou_factionFightCommonBotton_0", posX1, posY1);

	for (var m = 2; m <= 5; m++) {
		var nowCityGateHp = grou_fightSelectScene.vars_.gateSelectSceneData[m - 2][0];
		grou_fightSelectScene.objects["txt_fightSelect_" + m].text = "城门生命: " + nowCityGateHp + "/" + "10000";
		grou_fightSelectScene.objects["obj_通用_圆形头像框底图_fightSelect_" + (m - 2)].changeSprite("obj_photo_" + grou_fightSelectScene.vars_.gateSelectSceneData[m - 2][1] + "_default");
	}

	grou_fightSelectScene.objects["txt_fightSelect_0"].text = grou_factionFightMainFighting.objects['txt_factionFightMian_fightMianScene2_1'].text;
	grou_fightSelectScene.objects["txt_fightSelect_1"].text = grou_factionFightMainFighting.objects['txt_factionFightMian_fightMianScene2_0'].text;
	for (var i = 6; i <= 11; i++) {
		grou_factionFightCommonBotton_0.objects["txt_fightSelect_" + i].text = grou_factionFightCommonBotton_1.objects["txt_fightSelect_" + i].text;
	}
}



//新的圈圈的延迟的方案
if (current_scene.classId == "main_scene") {
	//延迟执行
	qyengine.callAfter(function () {
		isDestroyLoad();
	}
		.bind(this), current_scene, 5000);
} else {
	qyengine.callAfter(function () {
		isDestroyLoad();
	}
		.bind(this), current_scene, 8000);
}
function isDestroyLoad() {
	if (qyengine.getInstancesByType("grou_loadingCircle").length > 0) {
		current_game.scripts["al_scr_" + "actionlist_destroyLoadingCircle"].call(this, undefined, this);
	}
}



//背包中龙魂点击后的数据的处理
current_scene['nowSaleNum'] = current_scene['nowSaleButton'].vars_.num;
qyengine.guardId("txt_packagePopUpBoxSelectNum").setText(current_scene['nowSaleNum']);
qyengine.guardId("txt_openBoxCostGoodNum").setText(current_scene['nowSaleNum']);
qyengine.guardId("txt_saleRewardCoin").setText(current_scene['nowSaleNum'] * 1000);
qyengine.guardId('txt_PorpUpWord').setText(getConfig("dragon_soul", current_scene['nowSaleButton'].vars_.Id, "name"));
qyengine.guardId("txt_saleGoodDec").setText(getConfig("dragon_soul", current_scene['nowSaleButton'].vars_.Id, "dec"));
//qyengine.guardId("txt_saleGoodDec").hide();
qyengine.guardId("txt_saleRewardCoin").setText("获得:" + 1000);
qyengine.guardId("grou_packagePopUp_Box").objects['cont_packagePopUp_Box'].objects['obj_equipImage'].changeSprite("obj_" + game.configs.dragon_soul[current_scene['nowSaleButton'].vars_.Id].icon + "_default");
//var markGoodType = Number(game.configs.dragon_soul[current_scene['nowSaleButton'].vars_.Id].type);
//qyengine.guardId("grou_packagePopUp_Box").objects['cont_packagePopUp_Box'].vars_.markGoodType = markGoodType;
qyengine.guardId("obj_装备出售_使用按钮").changeSprite("obj_装备出售_使用按钮_A2");


//请求授予军衔的列表
KBEngine.app.player().baseCall('reqClickNobilityInfo');


qyengine.guardId('grou_grantRankItem' + repeatTime).objects['txt_gantRank8'].setText('剩余数量:' + 0 + '/' + game.configs.guild_peerage[repeatTime + 1].num);
for (var i = 0; i <= 20; i++) {
	var markAllNum = qyengine.guardId('grou_grantRankItem' + i).objects['txt_gantRank8'].text.split("/")[1];
	qyengine.guardId('grou_grantRankItem' + i).objects['txt_gantRank8'].text = "剩余数量:" + data[0][i] + "/" + markAllNum;
}
//授予军衔后的回调
var markRewardText = ["授予军衔失败!", "超过限定人数,授予军衔失败!", "帮派等级未达到,授予军衔失败!", "会员等级未达到,授予军衔失败!"];
current_game.scripts["al_scr_" + 'operationRemind'].call(this, undefined, this, markRewardText[Number(data)]);

grou_grantRank.objects['obj_确认授权按钮'].vars_.isAwarded = true;

if (grou_grantRank.objects['obj_确认授权按钮'] && grou_grantRank.objects['obj_确认授权按钮'].vars_.isAwarded) {
	grou_grantRank.objects['obj_确认授权按钮'].vars_.isAwarded = false;
	current_game.scripts['al_scr_' + 'destroyAllGroup'].call(this, undefined, this);
	current_game.scripts["al_scr_" + 'operationRemind'].call(this, undefined, this, '授予军衔成功!');
}


if (qyengine.getInstancesByType("grou_loadingRefreshGame").length == 0) {
	var posX = Number(game.configs.UIConfig.grou_loadingRefreshGame.position.split(",")[0]);
	var posY = Number(game.configs.UIConfig.grou_loadingRefreshGame.position.split(",")[1]);
	var zIndex = Number(game.configs.UIConfig.grou_loadingRefreshGame.zIndex);
	qyengine.instance_create(posX, posY, "grou_loadingRefreshGame", {
		"type": "grou_loadingRefreshGame",
		"id": 'grou_loadingRefreshGame',
		"zIndex": zIndex,
		"scene": 'main_scene',
		"layer": 'layer_headerfeet'
	});
	if (current_scene.classId == "main_scene") {

	} else {
		grou_loadingRefreshGame.x += 100;
	}
}


xxx



qyengine.unscheduleTask(current_scene.vars_.markLoading0)
if (current_scene.vars_.markLoading0) {
	qyengine.unscheduleTask(current_scene.vars_.markLoading0);
}
if (current_scene.vars_.markLoading1) {
	qyengine.unscheduleTask(current_scene.vars_.markLoading1);
}


qyengine.instance_create(-100, 0, "SystemTipUI", { "id": "SystemTipUI", "zIndex": 999, "layer": "layer_headerfeet" });

"obj_提示_2", "obj_通用_按钮_08", "obj_通用_按钮_刷新链接", "obj_通用弹出框_01_loadReconnection", "obj_提示_1"
if (game.vars_.mark_againLinkLogic) {
	game.vars_.mark_againLinkLogic = false;
	return;
}

//reqRolesListCallback loginSuccessCallback

if (game.vars_.mark_againLinkLogic) {
	game.vars_.mark_againLinkLogic = false;
	qyengine.different_scene("main_scene");
}

//onLoginBaseappFailed 这个回调在什么情况下会被调用


if (!game.vars_.disconnect) {   //一段时间后不能连上不再重连
	//qyengine.unscheduleTask(game.vars_.markConnectCallAfter);
	game.vars_.markConnectCallAfter = qyengine.callAfter(function () {
		if (qyengine.getInstancesByType('grou_loadingRefreshGame').length > 0) {
			grou_loadingRefreshGame.destroy();
		}
		current_game.scripts["al_scr_" + 'createSystemTipUI'].call(this, undefined, this, 1);
		game.vars_.disconnect2 = true;
	}.bind(this), current_scene, 6000);
	game.vars_.disconnect = true;
}

if (game.vars_.disconnect2) {
	return;
}

if (game.vars_.markConnectCallAfter) {
	qyengine.unscheduleTask(game.vars_.markConnectCallAfter);
}


//自己的军衔的等级
current_scene.onesInfo.currentRankLevel
self.vars_.allProperty

current_scene.markLastTouch

if ((Number(current_scene.markLastTouch) + 1) == Number(current_scene.onesInfo.currentRankLevel)) {
	current_game.scripts["al_scr_" + 'operationRemind'] && current_game.scripts["al_scr_" + 'operationRemind'].call(this, undefined, this, '军衔等级与即将被授予的军衔相同!');
	return;
}


onRespResult_saleGood

scro_god

if (current_scene['packNowTab'] == 2) {
	qyengine.guardId("txt_openBoxCostGoodNum").setText(current_scene['nowSaleNum']);
	qyengine.guardId("txt_saleRewardCoin").setText("获得:" + current_scene['nowSaleNum'] * 1000);
	(event.event || event.originalEvent || event).stopPropagation && (event.event || event.originalEvent || event).stopPropagation();
	return;
}



current_scene['nowSaleNum']--;

current_scene['nowSaleNum'] = 1;
if (current_scene.vars_.packNowTab == 2) {
	current_game.scripts["al_scr_" + "actionlist_createLoadingCircle"].call(this, undefined, this);
	KBEngine.app.player().baseCall('reqSaleDragon', [[current_scene['nowSaleButton'].vars_.Id, current_scene['nowSaleNum']]]);
	return;
}

grou_pkNearbyPlayerInfo.objects["heroObjShowpk"].x
current_scene['nowSaleButton']
current_scene['nowSaleButton'].vars_.allProperty.quality
qyengine.guardId("grou_packagePopUp").objects['cont_packagePopUp'].objects["obj_packageSmallFrame"].changeSprite("obj_packageSmallFrame_A" + current_scene['nowSaleButton'].vars_.allProperty.quality);
switch (current_scene["packNowTab"]) {
	case 0:
		qyengine.guardId("grou_packagePopUp").objects['cont_packagePopUp'].objects["obj_packageSmallFrame"].
			changeSprite("obj_packageSmallFrame_A" + current_scene['nowSaleButton'].vars_.allProperty.quality);
		break;
	case 1:
		qyengine.guardId("grou_packagePopUp_Box").objects['cont_packagePopUp_Box'].objects["obj_packageSmallFrame"].
			changeSprite("obj_packageSmallFrame_A" + game.configs.item[current_scene['nowSaleButton'].vars_.Id].quality);
		break;
	case 2:
		qyengine.guardId("grou_packagePopUp_Box").objects['cont_packagePopUp_Box'].objects["obj_packageSmallFrame"].
			changeSprite("obj_packageSmallFrame_A" + game.configs.dragon_soul[current_scene['nowSaleButton'].vars_.Id].quality);
		break;
	case 3:
		qyengine.guardId("grou_packagePopUp_Box").objects['cont_packagePopUp_Box'].objects["obj_packageSmallFrame"].
			changeSprite("obj_packageSmallFrame_A" + game.configs.box[current_scene['nowSaleButton'].vars_.Id].quality);
		break;

}
qyengine.guardId("grou_packagePopUp_Box").objects['cont_packagePopUp_Box'].objects["obj_packageSmallFrame"].
	changeSprite("obj_packageSmallFrame_A" + game.configs.item[current_scene['nowSaleButton'].vars_.Id].quality);




grou_packageBig.vars_.needRefreshGood = true;


if (grou_packageBig.vars_.needRefreshGood) {
	qyengine.callAfter(function () {
		grou_packageBig.vars_.needRefreshGood = false;
		current_game.scripts["al_scr_" + "actionlist_initPackage"].call(this, undefined, this, 1);
	}.bind(this), current_scene, 150);
}

game.configs.dragon_soul[game.vars_.userInfo.packageInfo.packGod[repeatTime].id].quality


//请求敌人的角色信息,创建服装等 	      onRespPvpFightingEnemys    返回了红名点    game.vars_.respPvpFightingEnemys[6]
//初始化pk界面的列表              onRespPvpFieldPkPlayersResult  
/**	名称:dbId	类型:UNICODE	描述:数据库ID
	名称:uid	类型:UNICODE	描述:UID
	名称:nick	类型:UNICODE	描述:昵称
	名称:level	类型:UINT32	描述:等级
	名称:vip	类型:UINT32	描述:VIP
	名称:server	类型:UNICODE	描述:所在服务器
	名称:profession	类型:UINT32	描述:职业
	名称:spy	类型:UINT32	描述:密探次数 每天清零
	名称:data	类型:UINT32	描述:挑战后的倒计时或是否机器人 */



grou_treasuryMainUI.vars_.treasuryDataList[0][1]



configDataLength("exchequer")



if (game.vars_.expansion <= game.vars_.userInfo.packageInfo.packEquip.length) {
	return true;
}


//各种颜色值
/**
 * 白色: #ffffff 绿色:73ffc9 蓝色 d5d5d5 紫色: 73ffc9 黄色:fff8af
 * 
 */

current_game.scripts["al_scr_" + "setColorAccordingQuality"].call(this, undefined, this, "txt_PorpUpWord",
	game.configs.box[current_scene['nowSaleButton'].vars_.Id].quality);
var markQuality = game.configs.item[current_scene['nowSaleButton'].vars_.Id].quality;
var markId = "txt_PorpUpWord";
var markColorValue = ["#ffffff", "#73ffc9", "#77b1ff", "#ffa3fe", "#fff8af"];
qyengine.guardId(markId).setFontColor(markColorValue[Number(markQuality)]);

qyengine.guardId('grou_fusionSelectItem' + local.markFusionIndex).objects["txt_packFusionSelectItemName"].id


game.vars_.userInfo.packageInfo.packEquip[repeatTime].quality
current_game.scripts["al_scr_" + "setColorAccordingQuality"].call(this, undefined, this, qyengine.guardId('grou_fusionSelectItem' + local.markFusionIndex).objects["txt_packFusionSelectItemName"].id,
	game.vars_.userInfo.packageInfo.packEquip[repeatTime].quality);





if (qyengine.getInstancesByType("grou_account").length > 0) {
	return;
}
pos = getConfig('UIConfig', 'grou_account', 'position').split(',');
zIndex = getConfig('UIConfig', 'grou_account', 'zIndex');
layer = getConfig('UIConfig', 'grou_account', 'layer');

qyengine.instance_create(Number(pos[0]), Number(pos[1]), 'grou_account', {
	"id": 'grou_account',
	"zIndex": zIndex,
	"layer": layer
});




//国库领取奖励成功
if (Number(data)) {
	current_game.scripts["al_scr_" + "createCommonFlutterTxt"] && current_game.scripts["al_scr_" + "createCommonFlutterTxt"].call(this, undefined, this, "领取成功!");
	//current_game.scripts["al_scr_"+"actionlist_createLoadingCircle"]&&current_game.scripts["al_scr_"+"actionlist_createLoadingCircle"].call(this,undefined,this);
	//KBEngine.app.player().baseCall('reqClickMateriel');
	grou_militaryMain.objects["obj_国库_我要押镖"].changeSprite("obj_国库_我要押镖_A0");
	grou_militaryMain.objects["txt_militaryMain_5"].setText("金子: 50");
	grou_militaryMain.objects["txt_militaryMain_2"] && grou_militaryMain.objects["txt_militaryMain_2"].setText("当前进度: " + "0/10");
} else {
	current_game.scripts["al_scr_" + "createCommonFlutterTxt"] && current_game.scripts["al_scr_" + "createCommonFlutterTxt"].call(this, undefined, this, "领取失败!");
}



grou_militaryMain.objects["txt_militaryMain_3"].vars_.remianTimes
if (grou_militaryMain.objects["txt_militaryMain_3"].vars_.remianTimes > 0) {
	//成功领取后更改进度和剩余押镖的次数
	grou_militaryMain.objects["txt_militaryMain_3"].vars_.remianTimes--;
	grou_militaryMain.objects['txt_militaryMain_3'].text = "今日剩余押镖次数: " + grou_militaryMain.objects["txt_militaryMain_3"].vars_.remianTimes + "次";
	grou_militaryMain.objects['txt_militaryMain_2'].text = "当前进度: " + (3 - grou_militaryMain.objects["txt_militaryMain_3"].vars_.remianTimes) + "/10";
}





qyengine.guardId("grou_pkNearbyPlayerInfo").objects['txt_pkNearbyInfoRewardCoin'].setText(current_scene['storagePkNearbyPlayerInfoProperty'][0]);
qyengine.guardId("grou_pkNearbyPlayerInfo").objects['txt_pkNearbyInfoRewardExp'].setText(current_scene['storagePkNearbyPlayerInfoProperty'][1]);
qyengine.guardId("grou_pkNearbyPlayerInfo").objects['obj_pkAttackButton'].setVar('enemyProperty', current_scene['storagePkNearbyPlayerInfoProperty'][2]);
var markCountry = ["魏", "蜀", "吴"];
var nowCountry = markCountry[Number(current_scene['storagePkNearbyPlayerInfoProperty'][2].country)];
qyengine.guardId('grou_pkNearbyPlayerInfo').objects['txt_pkSecretPlayer'].setText(current_scene.vars_.outPlayerMarkServer + "." + nowCountry + "." + current_scene['storagePkNearbyPlayerInfoProperty'][3]);

var markInfo = [];
markInfo[0] = game.vars_.respPvpFightingEnemys[3] == "" ? "无家族" : ("" + game.vars_.respPvpFightingEnemys[3]);
markInfo[1] = "VIP " + current_scene.vars_.outPlayerMarkVip;
markInfo[2] = "lv." + game.vars_.respPvpFightingEnemys[4];
for (var j = 0; j < 3; j++) {
	qyengine.guardId("txt_grou_pkNearbyPlayerInfoData_" + j).setText(markInfo[j]);
}


if (qyengine.getInstancesByType("grou_pkNearbyPlayerInfo").length > 0) {
	qyengine.guardId('grou_pkNearbyPlayerInfo').objects['txt_pkSecretPlayer'].setFontColor("#f3d51d");
}

calRedPointColor
current_game.scripts['al_scr_' + "calRedPointColor"].call(this, undefined, this, 1);





//设置翅膀
if (game.vars_.userInfo.level >= getConfig('function', 3, 'level')) {
	//判断当前的翅膀是否激活
	//当前翅膀的等级
	var wingLv = game.vars_.userInfo.roles[game.vars_.userInfo.curryRoleIndex].wing.level;
	//当前翅膀的星级
	var wingStar = game.vars_.userInfo.roles[game.vars_.userInfo.curryRoleIndex].wing.star;

	//判断当前的翅膀是否已经激活
	if (wingLv == 0) {
		//没有激活

		qyengine.instance_create(0, 0, 'wingActivatePanel', { "type": 'wingActivatePanel', "id": 'wingActivatePanel', "zIndex": 80, "layer": "layer_headerfeet", });

	} else {
		//先判断是否需要进阶
		if (wingStar == 10) {
			//进阶界面
			qyengine.instance_create(0, 0, 'wingActivatePanel', { "type": 'wingActivatePanel', "id": 'wingActivatePanel', "zIndex": 80, "layer": "layer_headerfeet", });

		} else {
			//培养界面
			qyengine.instance_create(0, 0, 'wingCultivatePanel', { "type": 'wingCultivatePanel', "id": 'wingCultivatePanel', "zIndex": 80, "layer": "layer_headerfeet", });
			current_game.scripts["al_scr_" + "ifWingMaxLevel"].call(this, undefined, this, wingLv);
		}

	}
	qyengine.guardId("role_panel_bg").setHidden(true);
} else {

	game.scripts["al_scr_" + 'createCommonFlutterTxt'] && current_game.scripts["al_scr_" + 'createCommonFlutterTxt'].call(this, undefined, this, "20级开启!");

}



//战印的红点
if (2 == data[0] && data[1] == 5) {
	console.log("服务端推送战印的红点的数据------", data);
	qyengine.guardId("obj_主城_龙印").vars_.storageFightMarking = true;
	current_game.scripts["al_scr_" + "createAndDestroyFightRedPoint"].call(this, undefined, this, 1);
}

removeFightMarking


console.log("服务端推送战印的红点的数据------", data);
qyengine.guardId("obj_主城_龙印").vars_.storageFightMarking = true;
current_game.scripts["al_scr_" + "createAndDestroyFightRedPoint"].call(this, undefined, this, 1);
current_scene.vars_.storageFightMarking = true;




var markRoleEquipRedPoint = ["redPointHint_equipment0",]
var markShowAutoEquipEffect = false;
for (var i = 0; i < 8; i++) {
	if (qyengine.guardId("redPointHint_equipment" + i).isVisible) {
		markShowAutoEquipEffect = true;
	}
}
if (markShowAutoEquipEffect) {
	qyengine.guardId("obj_一键换装按钮特效").show();
} else {
	qyengine.guardId("obj_一键换装按钮特效").hide();
}



judgeAutoEquipButtonEffect

//一键换装按钮的特效是否显示
current_game.scripts["al_scr_" + "judgeAutoEquipButtonEffect"].call(this, undefined, this);

grou_treasuryMainUI.vars_.treasuryDataList   //存储国库信息的变量~~~~~

showTreasuryUI

updateBuildUIShow



current_scene.scripts['al_scr_' + "actionlist_createLoadingCircle"].call(this, undefined, this);
current_scene.scripts['al_scr_' + "actionlist_destroyLoadingCircle"].call(this, undefined, this);

current_game.scripts["al_scr_" + "createFactionFight"].call(this, undefined, this);

switch (self.vars_.tab) {
	case 0:
		KBEngine.app.player().baseCall("reqLastTimeCSGuildsFightingRank", 2, 0);
		grou_factionFightMain.vars_.nowShowRank = 2;
		break;
	case 1:
		KBEngine.app.player().baseCall("reqLastTimeCSGuildsFightingRank", 1, 0);
		grou_factionFightMain.vars_.nowShowRank = 1;
		break;
	case 2:
		KBEngine.app.player().baseCall("reqLastTimeCSGuildsFightingRank", 0, 0);
		grou_factionFightMain.vars_.nowShowRank = 0;
		break;
}


//存储排行榜的数据


grou_factionFightMain.vars_.getRanklistData = [];
if (!grou_factionFightMain.vars_.getRanklistData[grou_factionFightMain.vars_.markNowTab]) {
	grou_factionFightMain.vars_.getRanklistData[grou_factionFightMain.vars_.markNowTab] = data[0];
}


//current_scene.vars_.getRanklistData     self.vars_.eventArgs

current_scene.vars_.getRanklistData = [[[1, "徐超超", 1000000, [[97001, 1], [97002, 5]]], [2, "xuguangyuan", 2000000, [[97010, 1], [96001, 5]]]],
[20, 500, [[97004, 2], [97005, 4], [97003, 4]]]];


qyengine.guardId('grou_factionFightRankListItem' + repeatTime).setScale(1, 1);
qyengine.guardId('grou_factionFightRankListItem' + repeatTime).objects["txt_rankListNumber"].text = grou_factionFightMain.vars_.getRanklistData[self.vars_.eventArgs][repeatTime][0];  //名次
qyengine.guardId('grou_factionFightRankListItem' + repeatTime).objects["txt_fationFightLastRankList_1"].text = grou_factionFightMain.vars_.getRanklistData[self.vars_.eventArgs][repeatTime][1];  //家族名称
qyengine.guardId('grou_factionFightRankListItem' + repeatTime).objects["txt_fationFightLastRankList_2"].text = "士气值: " + grou_factionFightMain.vars_.getRanklistData[self.vars_.eventArgs][repeatTime][2]; //家族总的士气值
for (var i = 0; i < current_scene.vars_.getRanklistData[0][repeatTime][3].length; i++) {
	qyengine.guardId('grou_factionFightRankListItem' + repeatTime).objects["obj_通用_金子_" + i].show();
	//qyengine.guardId('grou_factionFightRankListItem'+repeatTime).objects["obj_通用_金子_"+i].changeSprite("");
	qyengine.guardId('grou_factionFightRankListItem' + repeatTime).objects["txt_fationFightLastRankList_" + (3 + i)].show();
	qyengine.guardId('grou_factionFightRankListItem' + repeatTime).objects["txt_fationFightLastRankList_" + (3 + i)].setText(current_scene.vars_.getRanklistData[0][repeatTime][3][i][1]);
	var markDataId = Number(current_scene.vars_.getRanklistData[0][repeatTime][3][0][0]);
	var markIcon = "obj_通用_金子_default";
	if (game.configs.equipment[markDataId]) {
		markIcon = "obj_" + game.configs.equipment[markDataId].icon + "_default";
	} else if (game.configs.item[markDataId]) {
		markIcon = "obj_" + game.configs.item[markDataId].icon + "_default";
	} else if (game.configs.box[markDataId]) {
		markIcon = "obj_" + game.configs.box[markDataId].icon + "_default";
	} else {
		markIcon = "obj_" + game.configs.dragon_soul[markDataId].icon + "_default";
	}
	qyengine.guardId('grou_factionFightRankListItem' + repeatTime).objects["obj_通用_金子_" + i].changeSprite(markIcon);
	qyengine.guardId('grou_factionFightRankListItem' + repeatTime).objects["obj_通用_金子_" + i].setScale(0.6, 0.6);
}
var markCommonBottonText = ["我的家族排名", "家族族长排名",
	"我的排名"
];
grou_factionLastRanklist.objects["txt_fationFightLastRankList_7"].text = markCommonBottonText[Number(self.vars_.eventArgs)] + grou_factionFightMain.vars_.getRanklistDataSelf[0];
grou_factionLastRanklist.objects["txt_fationFightLastRankList_8"].text = "士气值" + grou_factionFightMain.vars_.getRanklistDataSelf[1];
for (var j = 0; j < current_scene.vars_.getRanklistData[1][2].length; j++) { //固定对应获得的奖励
	grou_factionLastRanklist.objects["obj_通用_金子_" + (4 + j)].show();
	grou_factionLastRanklist.objects["txt_fationFightLastRankList_" + (9 + j)].show();
	var markRewardId = current_scene.vars_.getRanklistData[1][2][j][0];
	var markRewardIcon = "obj_通用_金子_default";
	if (game.configs.equipment[markRewardId]) {
		grou_factionLastRanklist.objects["obj_通用_金子_" + (4 + j)].changeSprite("obj_" + game.configs.equipment[markRewardId].icon + "_default");
	} else if (game.configs.item[markDataId]) {
		grou_factionLastRanklist.objects["obj_通用_金子_" + (4 + j)].changeSprite("obj_" + game.configs.item[markRewardId].icon + "_default");
	} else if (game.configs.box[markDataId]) {
		grou_factionLastRanklist.objects["obj_通用_金子_" + (4 + j)].changeSprite("obj_" + game.configs.box[markRewardId].icon + "_default");
	} else {
		grou_factionLastRanklist.objects["obj_通用_金子_" + (4 + j)].changeSprite("obj_" + game.configs.dragon_soul[markRewardId].icon + "_default");
	}
	grou_factionLastRanklist.objects["obj_通用_金子_" + (4 + j)].setScale(0.6, 0.6);
	grou_factionLastRanklist.objects["txt_fationFightLastRankList_" + (9 + j)].text = "" + current_scene.vars_.getRanklistData[1][2][j][1];
}
if (Number(self.vars_.eventArgs)) {
	qyengine.guardId('grou_factionFightRankListItem' + repeatTime).objects["txt_fationFightLastRankList_vip"].text = "VIP 0";
	qyengine.guardId('grou_factionFightRankListItem' + repeatTime).objects["obj_通用_方形头像框"].changeSprite("obj_photopwang" + "_10001_default");
	qyengine.guardId('grou_factionFightRankListItem' + repeatTime).objects["obj_通用_方形头像框"].setScale(0.8, 0.8);
}






qyengine.guardId('grou_factionFightRankListItem' + repeatTime).setScale(1, 1);
qyengine.guardId('grou_factionFightRankListItem' + repeatTime).objects["txt_rankListNumber"].text = grou_factionFightMain.vars_.getRanklistData[self.vars_.eventArgs][repeatTime][0];  //名次
qyengine.guardId('grou_factionFightRankListItem' + repeatTime).objects["txt_fationFightLastRankList_1"].text = grou_factionFightMain.vars_.getRanklistData[self.vars_.eventArgs][repeatTime][1];  //家族名称
qyengine.guardId('grou_factionFightRankListItem' + repeatTime).objects["txt_fationFightLastRankList_2"].text = "士气值: " + grou_factionFightMain.vars_.getRanklistData[self.vars_.eventArgs][repeatTime][2]; //家族总的士气值
var realDuanWei = [2, 1, 0];
var markGetReward = [];
if (repeatTime + 1 <= 10) {
	if (grou_factionFightMain.vars_.markNowTab == 1) {
		markGetReward = game.configs.guild_war_reward[repeatTime + 1].chairman.split("|")[realDuanWei[grou_factionFightMain.vars_.nowShowRank]].split(";");
	} else if (grou_factionFightMain.vars_.markNowTab == 2) {
		markGetReward = game.configs.guild_war_reward[repeatTime + 1].self.split("|")[realDuanWei[grou_factionFightMain.vars_.nowShowRank]].split(";");
	} else {
		markGetReward = game.configs.guild_war_reward[repeatTime + 1].guild.split("|")[realDuanWei[grou_factionFightMain.vars_.nowShowRank]].split(";");
	}
} else {
	if (grou_factionFightMain.vars_.markNowTab == 1) {
		markGetReward = game.configs.guild_war_reward[repeatTime + 1].chairman.split("|")[realDuanWei[grou_factionFightMain.vars_.nowShowRank]].split(";");
	}
}
for (var i = 0; i < markGetReward.length; i++) {
	var markRewardId = Number(markGetReward[0].split(":")[0]);
	var markNum = Number(markGetReward[0].split(":")[1]);
	qyengine.guardId('grou_factionFightRankListItem' + repeatTime).objects["obj_通用_金子_" + i].show();
	qyengine.guardId('grou_factionFightRankListItem' + repeatTime).objects["txt_fationFightLastRankList_" + (3 + i)].show();
	var markIcon = "obj_通用_金子_default";
	if (game.configs.equipment[markDataId]) {
		markIcon = "obj_" + game.configs.equipment[markDataId].icon + "_default";
	} else if (game.configs.item[markDataId]) {
		markIcon = "obj_" + game.configs.item[markDataId].icon + "_default";
	} else if (game.configs.box[markDataId]) {
		markIcon = "obj_" + game.configs.box[markDataId].icon + "_default";
	} else if (game.configs.dragon_soul[markDataId]) {
		markIcon = "obj_" + game.configs.dragon_soul[markDataId].icon + "_default";
	} else if (game.configs.title[markDataId]) {
		markIcon = "obj_" + game.configs.title[markDataId].icon + "_default";
	}
	qyengine.guardId('grou_factionFightRankListItem' + repeatTime).objects["obj_通用_金子_" + i].changeSprite(markIcon);
	qyengine.guardId('grou_factionFightRankListItem' + repeatTime).objects["obj_通用_金子_" + i].setScale(0.6, 0.6);
}
if (repeatTime === 0) {
	//下面自己家族、族长、个人的排名以及奖励等的赋值
	var markCommonBottonText = ["我的家族排名", "家族族长排名",
		"我的排名"
	];
	if (Number(grou_factionFightMain.vars_.getRanklistDataSelf[0])) {
		grou_factionLastRanklist.objects["txt_fationFightLastRankList_7"].text = markCommonBottonText[Number(self.vars_.eventArgs)] + "十名之外";
		grou_factionLastRanklist.objects["txt_fationFightLastRankList_8"].text = "士气值" + grou_factionFightMain.vars_.getRanklistDataSelf[1];
	} else {
		grou_factionLastRanklist.objects["txt_fationFightLastRankList_7"].text = markCommonBottonText[Number(self.vars_.eventArgs)] + grou_factionFightMain.vars_.getRanklistDataSelf[0];
		grou_factionLastRanklist.objects["txt_fationFightLastRankList_8"].text = "士气值" + grou_factionFightMain.vars_.getRanklistDataSelf[1];
	}

	realDuanWei = [2, 1, 0];
	markGetReward = [];
	if (Number(grou_factionFightMain.vars_.getRanklistDataSelf[0]) != 0) {
		if (grou_factionFightMain.vars_.markNowTab == 1) {
			markGetReward = game.configs.guild_war_reward[grou_factionFightMain.vars_.getRanklistDataSelf[0]].chairman.split("|")[realDuanWei[grou_factionFightMain.vars_.nowShowRank]].split(";");
		} else if (grou_factionFightMain.vars_.markNowTab == 2) {
			markGetReward = game.configs.guild_war_reward[grou_factionFightMain.vars_.getRanklistDataSelf[0]].self.split("|")[realDuanWei[grou_factionFightMain.vars_.nowShowRank]].split(";");
		} else {
			markGetReward = game.configs.guild_war_reward[grou_factionFightMain.vars_.getRanklistDataSelf[0]].guild.split("|")[realDuanWei[grou_factionFightMain.vars_.nowShowRank]].split(";");
		}
	} else {
		if (grou_factionFightMain.vars_.markNowTab == 1) {
			markGetReward = game.configs.guild_war_reward[11].chairman.split("|")[realDuanWei[grou_factionFightMain.vars_.nowShowRank]].split(";");
		}
	}
	for (var j = 0; j < markGetReward.length; j++) {
		var markRewardId = Number(markGetReward[0].split(":")[0]);
		var markNum = Number(markGetReward[0].split(":")[1]);
		qyengine.guardId('grou_factionFightRankListItem' + repeatTime).objects["obj_通用_金子_" + (j + 4)].show();
		qyengine.guardId('grou_factionFightRankListItem' + repeatTime).objects["txt_fationFightLastRankList_" + (j + 9)].show();
		var markIcon = "obj_通用_金子_default";
		if (game.configs.equipment[markDataId]) {
			markIcon = "obj_" + game.configs.equipment[markDataId].icon + "_default";
		} else if (game.configs.item[markDataId]) {
			markIcon = "obj_" + game.configs.item[markDataId].icon + "_default";
		} else if (game.configs.box[markDataId]) {
			markIcon = "obj_" + game.configs.box[markDataId].icon + "_default";
		} else if (game.configs.dragon_soul[markDataId]) {
			markIcon = "obj_" + game.configs.dragon_soul[markDataId].icon + "_default";
		} else if (game.configs.title[markDataId]) {
			markIcon = "obj_" + game.configs.title[markDataId].icon + "_default";
		}
		qyengine.guardId('grou_factionFightRankListItem' + repeatTime).objects["obj_通用_金子_" + (j + 4)].changeSprite(markIcon);
		qyengine.guardId('grou_factionFightRankListItem' + repeatTime).objects["obj_通用_金子_" + (j + 9)].setScale(0.6, 0.6);
	}

	//if (Number(self.vars_.eventArgs)) {
	//qyengine.guardId('grou_factionFightRankListItem' + repeatTime).objects["txt_fationFightLastRankList_vip"].text = "VIP 0";
	//qyengine.guardId('grou_factionFightRankListItem' + repeatTime).objects["obj_通用_方形头像框"].changeSprite("obj_photopwang" + "_10001_default");
	//qyengine.guardId('grou_factionFightRankListItem' + repeatTime).objects["obj_通用_方形头像框"].setScale(0.8, 0.8);
	//}




	current_game.scripts['al_scr_' + "createFactionFightRankList"].call(this, undefined, this, self.vars_.tabId);



	//点击报名的回调用
	var markRewardText = ["已经报名!", "没到报名时间", "报名成功"];
	if (Number(data[0]) >= 5 && Number(data[0]) <= 7) {
		current_game.scripts['al_scr_' + "createCommonFlutterTxt"].call(this, undefined, this, markRewardText[Number(data[0] - 5)]);
	}



	/**
	 * yulongzaitian_wuhan      ---汪鹏
	//公告
	
	//yulongzaitian_role_wuhan     ---耿树群
	  角色       role
	  查看属性    role/roleInfoPanel
	  星级属性    role/starShowPanel
	  翅膀        role/wingPanel
	  技能        role/skillPanel
	  龙魂        role/loongPanel
	  创建角色(伙伴)    role/creatNewRole
	  龙魂值      role/loongPanel/loongNumPanel
	  特殊戒指    role/specialRing
	 家族boss
	 世界boss
	  王成霸主     kindomOverlord
	  擂台         arena
	  护国寺(二期) huguoTemple
	
	
	//打造          ylzt_dazao    ---徐光源
	
	//邮箱         yulongzaitianH5_MailBox    ---汪鹏
	
	
	//商城         yulongzaitianH5_商城       ---汪鹏
	
	
	//查看其它玩家信息  yulongzaitian_observedRoleInfo    ---徐光源
	 */

	//696   220     (-3,-272)
	//  grou_activityMainItem (346,48);

	/**
	 * 活动的滚轴容器的参数:1 816 698 322 1   (-356,-284)  txt_activity_rankReward
	 * grou_activityMain_rankReward_item  (218,39)
	 * grou_activityEquipItem_10  grou_activityEquipItem_11
	 */
	//创建等级榜的奖励
	//grou_activityMain_rankReward.vars_.nowTabIndex = 0;
	if (qyengine.getInstancesByType("grou_activityMain_rankReward").length == 0) {
		qyengine.instance_create(359, 640, "grou_activityMain_rankReward", {
			"type": "grou_activityMain_rankReward",
			"id": "grou_activityMain_rankReward",
			"zIndex": 5,
			"scene": "main_scene",
			"layer": "layer_headerfeet"
		});
	}
	var itemTitle0 = ["obj_活动_等级榜前1_activity_default", "obj_活动_等级榜前2_activity_default", "obj_活动_等级榜前3_activity_default",
		"obj_活动_等级榜前10_activity_default", "obj_活动_等级榜前50_activity_default"];
	var itemTitle1 = ["obj_活动_战力榜前1_activity_default", "obj_活动_战力榜前2_activity_default", "obj_活动_战力榜前3_activity_default",
		"obj_活动_战力榜前10_activity_default", "obj_活动_战力榜前50_activity_default"];
	for (var i = 0; i < configDataLength("activity_charts"); i++) {
		qyengine.instance_create(369, 640, "grou_activityMain_rankReward_item", {
			"type": "grou_activityMain_rankReward_item",
			"id": "grou_activityMain_rankReward_item_" + i,
			"zIndex": 5,
			"scene": "main_scene",
			"layer": "layer_headerfeet"
		});
		qyengine.guardId("scro_activityMain_RankReward").appendChild("grou_activityMain_rankReward_item_" + i, 218, 39, i, 0, false, true);
		grou_activityEquipItem_10.objects["obj_活动_VIP_5"].changeSprite("obj_通用_金子_advaced_default");
		grou_activityEquipItem_10.objects["txt_activityEquipItem_name_4"].text = "金子";
		var itemId = 0;
		var itemNum = 0;
		var itemName = 0;
		if (grou_activityMain_rankReward.vars_.nowTabIndex == 0) { //等级榜奖励
			qyengine.guardId("grou_activityMain_rankReward_item_" + i).objects['obj_活动_等级榜前1_activity'].changeSprite(itemTitle0[i]);
			grou_activityEquipItem_10.objects["txt_activity_advanced_5"].text = game.configs.activity_charts[i + 1].gold_level;
			itemId = Number(game.configs.activity_charts[i + 1].item_level.split("|")[0]);
			itemNum = Number(game.configs.activity_charts[i + 1].item_level.split("|")[1]);
			itemName = game.configs.item[itemId].name;
			grou_activityEquipItem_11.objects['txt_activityEquipItem_name_5'].text = itemName;
			grou_activityEquipItem_11.objects["txt_activity_advanced_6"].text = itemNum;
			if (game.configs.item[itemId]) {
				grou_activityEquipItem_11.objects["obj_活动_VIP_6"].changeSprite("obj_" + game.configs.item[itemId].icon + "_default");
			}
		} else {					//战力榜奖励
			qyengine.guardId("grou_activityMain_rankReward_item_" + i).objects['obj_活动_等级榜前1_activity'].changeSprite(itemTitle1[i]);
			grou_activityEquipItem_10.objects["txt_activity_advanced_5"].text = game.configs.activity_charts[i + 1].gold_power;
			itemId = Number(game.configs.activity_charts[i + 1].box_power.split("|")[0]);
			itemNum = Number(game.configs.activity_charts[i + 1].box_power.split("|")[1]);
			itemName = game.configs.box[itemId].name;
			grou_activityEquipItem_11.objects['txt_activityEquipItem_name_5'].text = itemName;
			grou_activityEquipItem_11.objects["txt_activity_advanced_6"].text = itemNum;
			if (game.configs.box[itemId]) {
				grou_activityEquipItem_11.objects["obj_活动_VIP_6"].changeSprite("obj_" + game.configs.box[itemId].icon + "_default");
			}
		}
	}


	//等级榜和战力榜上按钮的切换
	self.changeSprite("obj_通用_选择框_01_activity_rank_A1");
	if (self.vars_.nowTabIndex == 1) {  //战力榜
		qyengine.guardId("obj_通用_选择框_01_activity_rank_0").changeSprite("obj_通用_选择框_01_activity_rank_A0");
	} else { //等级榜
		qyengine.guardId("obj_通用_选择框_01_activity_rank_1").changeSprite("obj_通用_选择框_01_activity_rank_A0");
	}
	grou_activityMain_rankReward.vars_.nowTabIndex = self.nowTabIndex;
	scro_activityMain_RankReward.removeAll();
	current_game.scripts['al_scr_' + "createActivityRankReward"].call(this, undefined, this);

	//超清和高清在战斗中的切换
	game.vars_.imageQuality = 1; //1:急速	2:超清
	if (game.vars_.imageQuality == 1) {
		//game.vars_.imageQuality = 2;
		qyengine.setImageLowQuality && qyengine.setImageLowQuality();
		grou_fight.objects['obj_按钮_极速'].changeSprite("obj_按钮_极速_default");
		grou_fight.objects['obj_字_极速'].changeSprite("obj_字_极速_default");

	} else {
		//game.vars_.imageQuality = 1;
		qyengine.setImageHighQuality && qyengine.setImageHighQuality();
		grou_fight.objects['obj_按钮_极速'].changeSprite("obj_按钮_高清_default");
		grou_fight.objects['obj_字_极速'].changeSprite("obj_字_高清_default");
	}

	current_game.scripts['al_scr_' + "setImageQuality"].call(this, undefined, this);


	if (qyengine.isiPhone) {
		grou_fight.objects['obj_按钮_极速'].show();
		grou_fight.objects['obj_字_极速'].show();
	} else {
		grou_fight.objects['obj_按钮_极速'].hide();
		grou_fight.objects['obj_字_极速'].hide();
	}
	if (game.vars_.imageQuality == 1) {
		//game.vars_.imageQuality = 2;
		qyengine.setImageLowQuality && qyengine.setImageLowQuality();
		grou_fight.objects['obj_按钮_极速'].changeSprite("obj_按钮_极速_default");
		grou_fight.objects['obj_字_极速'].changeSprite("obj_字_极速_default");

	} else {
		//game.vars_.imageQuality = 1;
		qyengine.setImageHighQuality && qyengine.setImageHighQuality();
		grou_fight.objects['obj_按钮_极速'].changeSprite("obj_按钮_高清_default");
		grou_fight.objects['obj_字_极速'].changeSprite("obj_字_高清_default");
	}



	if (!game.vars_.onConnectStatus) {
		return;
	}


	qyengine.getQueryString('td_channelid') || "gamemei"
	//有server的name
	if (current_scene.vars_.serverInfoList[Object.keys(current_scene.vars_.serverInfoList)[Math.max(current_scene.vars_.serverID, 0)]].name) {
		var serverNameWord = current_scene.vars_.serverInfoList[Object.keys(current_scene.vars_.serverInfoList)[Math.max(current_scene.vars_.serverID, 0)]].name;
		qyengine.guardId('txt_StartGame_serverName').text = qyengine.guardId('txt_StartGame_serverName').text + " " + serverNameWord;
	}





	//处理商城的金子或者银子的扣除的延迟
	if (grou_shopMainUI.vars_.buyAllEquipNeedSilver && Number(grou_shopMainUI.vars_.buyAllEquipNeedSilver) > 0) {
		var nowSilver = game.vars_.userInfo.silver - Number(Number(grou_shopMainUI.vars_.buyAllEquipNeedSilver));
		//game.vars_.userInfo.silver -= Number(Number(grou_shopMainUI.vars_.buyAllEquipNeedSilver));
		qyengine.guardId('txt_silver_shop_wh').text = game.vars_.userInfo.silver;
	}
	if (grou_shopMainUI.vars_.buyAllEquipNeedGold && Number(grou_shopMainUI.vars_.buyAllEquipNeedGold) > 0) {
		var nowGold = game.vars_.userInfo.gold - Number(grou_shopMainUI.vars_.buyAllEquipNeedGold);
		//game.vars_.userInfo.gold -= Number(grou_shopMainUI.vars_.buyAllEquipNeedGold);
		qyengine.guardId('txt_gold_shop_wh').text = game.vars_.userInfo.gold;
	}
	//qyengine.guardId('txt_gold_shop_wh').dispatchMessage({"type":'message',"message":'updateGoldNumShow'});
	//qyengine.guardId('txt_silver_shop_wh').dispatchMessage({"type":'message',"message":'updateSilverNumShow'});



	//处理商城的金子或者银子的扣除的延迟
	if (grou_shopMainUI.vars_.typeAndPrice && grou_shopMainUI.vars_.typeAndPrice[0] && grou_shopMainUI.vars_.typeAndPrice[1]) {
		if (Number(grou_shopMainUI.vars_.typeAndPrice[0]) == 1) {
			var nowSilver = game.vars_.userInfo.silver - Number(grou_shopMainUI.vars_.typeAndPrice[1]);
			qyengine.guardId('txt_silver_shop_wh').text = nowSilver;
		} else {
			var nowGold = game.vars_.userInfo.gold - Number(grou_shopMainUI.vars_.typeAndPrice[1])
			//game.vars_.userInfo.gold=game.vars_.userInfo.gold-Number(grou_shopMainUI.vars_.typeAndPrice[1]);
			qyengine.guardId('txt_gold_shop_wh').text = nowGold;
		}
	}

	current_game.scripts['al_scr_' + "dealWithAllGoldAndSilver"].call(this, undefined, this);


	qyengine.guardId("txt_freshPrice_shop_wh") && qyengine.guardId("txt_freshPrice_shop_wh").isVisible

	obj_通用_按钮_01_shop_fresh
	self.vars_.isReqRefresh = false;



	//处理商城的金子或者银子的扣除的延迟
	if (grou_shopMainUI.vars_.typeAndPrice && grou_shopMainUI.vars_.typeAndPrice[0] && grou_shopMainUI.vars_.typeAndPrice[1]) {
		if (Number(grou_shopMainUI.vars_.typeAndPrice[0]) == 1) {
			var nowSilver = game.vars_.userInfo.silver - Number(grou_shopMainUI.vars_.typeAndPrice[1]);
			qyengine.guardId('txt_silver_shop_wh').text = nowSilver;
		} else {
			var nowGold = game.vars_.userInfo.gold - Number(grou_shopMainUI.vars_.typeAndPrice[1])
			//game.vars_.userInfo.gold=game.vars_.userInfo.gold-Number(grou_shopMainUI.vars_.typeAndPrice[1]);
			console.log("nowGold", nowGold);
			qyengine.guardId('txt_gold_shop_wh').text = nowGold;
		}
	}
	//qyengine.guardId('txt_gold_shop_wh').dispatchMessage({"type":'message',"message":'updateGoldNumShow'});
	//qyengine.guardId('txt_silver_shop_wh').dispatchMessage({"type":'message',"message":'updateSilverNumShow'});



	if (qyengine.guardId("txt_freshPrice_shop_wh") && qyengine.guardId("txt_freshPrice_shop_wh").isVisible) {
		grou_shopMainUI.vars_.isReqRefreshNeedMoney = true;
	}

	if (grou_shopMainUI.vars_.isReqRefreshNeedMoney) {
		grou_shopMainUI.vars_.isReqRefreshNeedMoney = false;
		var nowSilver = game.vars_.userInfo.silver - 1000;
		if (qyengine.guardId('txt_silver_shop_wh')) {
			qyengine.guardId('txt_silver_shop_wh').text = nowSilver;
		}
	}






	/*
		程序员: 王号
		功能：初始化服务器编号列表
	*/

	//服务器个数
	var serverNum = Object.keys(current_scene.vars_.serverInfoList).length;

	var stageNum = parseInt(serverNum / 20) + 1; //按20为一组共多少阶
	var remainingNum = serverNum % 20; //最后一组的个数

	scro_serverIDBttnList.vars_.curSelectedServerStage = '通用_选择框_01_selectServer_loginHistory';

	scro_serverIDBttnList.removeAll();//清空滚轴容器

	//第一个永远是"登录过的
	qyengine.instance_create(0, 0, '通用_选择框_01_selectServer_loginHistory', {
		"type": '通用_选择框_01_selectServer_loginHistory',
		"id": '通用_选择框_01_selectServer_loginHistory',
		"zIndex": 0,
	});

	qyengine.instance_create(0, 0, 'txt_serverIDList', {
		"type": 'txt_serverIDList',
		"id": 'txt_serverIDList',
		"zIndex": 0,
	});


	qyengine.guardId('txt_serverIDList').setText('登录过的');
	qyengine.guardId('通用_选择框_01_selectServer_loginHistory').changeSprite('通用_选择框_01_selectServer_mouseDown');
	qyengine.guardId('通用_选择框_01_selectServer_loginHistory').vars_.isChangeState = true;


	qyengine.guardId('scro_serverIDBttnList').appendChild('通用_选择框_01_selectServer_loginHistory', undefined, undefined, 0, 0, true, true);
	qyengine.guardId('scro_serverIDBttnList').appendChild('txt_serverIDList', 20, 15, 0, 0, false, true);

	//创建其他服务列表
	for (var i = stageNum; i > 0; i--) {
		qyengine.instance_create(0, 0, '通用_选择框_01_selectServer', {
			"type": '通用_选择框_01_selectServer',
			"id": '通用_选择框_01_selectServer' + i,
			"zIndex": 0,
		});

		qyengine.instance_create(0, 0, 'txt_serverIDList', {
			"type": 'txt_serverIDList',
			"id": 'txt_serverIDList' + i,
			"zIndex": 0,
		});


		qyengine.guardId('txt_serverIDList' + i).setText((i - 1) * 20 + 1 + '-' + i * 20 + '服');
		qyengine.guardId('通用_选择框_01_selectServer' + i).vars_.serverState = i;

		qyengine.guardId('scro_serverIDBttnList').appendChild('通用_选择框_01_selectServer' + i, undefined, undefined, i, 0, true, true);
		qyengine.guardId('scro_serverIDBttnList').appendChild('txt_serverIDList' + i, 20, 15, i, 0, false, true);
	}






	//初始化服务器编号列表显示
	/*
		程序员: 王号
		功能：初始化服务器编号列表
	*/

	//服务器个数
	var serverNum = Object.keys(current_scene.vars_.serverInfoList).length;

	var stageNum = parseInt(serverNum / 20) + 1; //按20为一组共多少阶
	var remainingNum = serverNum % 20; //最后一组的个数

	scro_serverIDBttnList.vars_.curSelectedServerStage = '通用_选择框_01_selectServer_loginHistory';

	scro_serverIDBttnList.removeAll();//清空滚轴容器

	//第一个永远是"登录过的
	qyengine.instance_create(0, 0, '通用_选择框_01_selectServer_loginHistory', {
		"type": '通用_选择框_01_selectServer_loginHistory',
		"id": '通用_选择框_01_selectServer_loginHistory',
		"zIndex": 0,
	});

	qyengine.instance_create(0, 0, 'txt_serverIDList', {
		"type": 'txt_serverIDList',
		"id": 'txt_serverIDList',
		"zIndex": 0,
	});


	qyengine.guardId('txt_serverIDList').setText('登录过的');
	qyengine.guardId('通用_选择框_01_selectServer_loginHistory').changeSprite('通用_选择框_01_selectServer_mouseDown');
	qyengine.guardId('通用_选择框_01_selectServer_loginHistory').vars_.isChangeState = true;


	qyengine.guardId('scro_serverIDBttnList').appendChild('通用_选择框_01_selectServer_loginHistory', undefined, undefined, 0, 0, true, true);
	qyengine.guardId('scro_serverIDBttnList').appendChild('txt_serverIDList', 20, 15, 0, 0, false, true);

	//创建其他服务列表
	for (var i = stageNum; i > 0; i--) {
		qyengine.instance_create(0, 0, '通用_选择框_01_selectServer', {
			"type": '通用_选择框_01_selectServer',
			"id": '通用_选择框_01_selectServer' + i,
			"zIndex": 0,
		});

		qyengine.instance_create(0, 0, 'txt_serverIDList', {
			"type": 'txt_serverIDList',
			"id": 'txt_serverIDList' + i,
			"zIndex": 0,
		});


		qyengine.guardId('txt_serverIDList' + i).setText((i - 1) * 20 + 1 + '-' + i * 20 + '服');
		qyengine.guardId('通用_选择框_01_selectServer' + i).vars_.serverState = i;

		qyengine.guardId('scro_serverIDBttnList').appendChild('通用_选择框_01_selectServer' + i, undefined, undefined, i, 0, true, true);
		qyengine.guardId('scro_serverIDBttnList').appendChild('txt_serverIDList' + i, 20, 15, i, 0, false, true);
	}





	//showLoginedHistoryList  创建服务器列表
	scro_serverInfoList.removeAll(); //清空滚轴容器

	if (localStorage.length > 0 && localStorage.getItem("loginedServerList")) {

		var _serverInfoList = JSON.parse(localStorage.getItem("loginedServerList"));
		var nameList = Object.keys(_serverInfoList); //服务器名字
		var serverID = 0; //服务器编号
		var rowIndex = 0; //行号

		for (var i = nameList.length; i > 0; --i) {

			i = i;
			qyengine.instance_create(-4, 38, 'obj_选择框_小框_01_selectServer1', {
				"type": 'obj_选择框_小框_01_selectServer1',
				"id": 'obj_选择框_小框_01_selectServer1' + i,
				"zIndex": 0
			});

			qyengine.instance_create(-4, 38, 'obj_注册登录_良好', {
				"type": 'obj_注册登录_良好',
				"id": 'obj_注册登录_良好' + i,
				"zIndex": 0
			});

			qyengine.instance_create(0, 0, 'txt_serverName_wh', {
				"type": 'txt_serverName_wh',
				"id": 'txt_serverName_wh' + i,
				"zIndex": 0
			});

			qyengine.instance_create(0, 0, 'obj_注册登录_新', {
				"type": 'obj_注册登录_新',
				"id": 'obj_注册登录_新' + i,
				"zIndex": 0
			});

			qyengine.instance_create(0, 0, 'cont_selectServer_serverInfor', {
				"type": 'cont_selectServer_serverInfor',
				"id": 'cont_selectServer_serverInfor' + i,
				"zIndex": 0
			});

			serverID = _serverInfoList[nameList[i - 1]].serverID;
			qyengine.guardId('obj_选择框_小框_01_selectServer1' + i).vars_.serverID = serverID; //设置编号
			qyengine.guardId('txt_serverName_wh' + i).setText(nameList[i - 1] + '服');
			//pwangrd_qiyun新添加
			if (_serverInfoList[nameList[i]].name) {
				qyengine.guardId('txt_serverName_wh' + i).setText(qyengine.guardId('txt_serverName_wh' + i).text + _serverInfoList[nameList[i]].name);
			}
			qyengine.guardId('cont_selectServer_serverInfor' + i).appendChild('obj_选择框_小框_01_selectServer1' + i, 175, 33);
			qyengine.guardId('cont_selectServer_serverInfor' + i).appendChild('obj_注册登录_良好' + i, 40, 38);
			qyengine.guardId('cont_selectServer_serverInfor' + i).appendChild('txt_serverName_wh' + i, 109, 17);
			qyengine.guardId('cont_selectServer_serverInfor' + i).appendChild('obj_注册登录_新' + i, 300, 36);
			qyengine.guardId('scro_serverInfoList').appendChild('cont_selectServer_serverInfor' + i, 0, 0, rowIndex, 0, false, true);

			rowIndex++;
		}
	}



	//showServerInfoList  显示20个服的详情

	scro_serverInfoList.removeAll(); //清空滚轴容器

	var nameList = Object.keys(current_scene.vars_.serverInfoList); //服务器名字
	var serverID = 0; //服务器编号
	var rowIndex = 0; //行号
	var _objId = 0;

	var serverNum = Object.keys(current_scene.vars_.serverInfoList).length;

	var stageNum = parseInt(serverNum / 20) + 1; //按20为一组共多少阶
	var remainingNum = serverNum % 20; //最后一组的个数

	var _num = 0;

	if (serverStateID < stageNum) {
		_num = 20;
	}

	if (serverStateID == stageNum) {
		_num = remainingNum;
	}

	for (var i = _num - 1; i >= 0; --i) {

		_objId = i;
		qyengine.instance_create(-4, 38, 'obj_选择框_小框_01_selectServer1', {
			"type": 'obj_选择框_小框_01_selectServer1',
			"id": 'obj_选择框_小框_01_selectServer1' + _objId,
			"zIndex": 0
		});

		qyengine.instance_create(-4, 38, 'obj_注册登录_良好', {
			"type": 'obj_注册登录_良好',
			"id": 'obj_注册登录_良好' + _objId,
			"zIndex": 0
		});

		qyengine.instance_create(0, 0, 'txt_serverName_wh', {
			"type": 'txt_serverName_wh',
			"id": 'txt_serverName_wh' + _objId,
			"zIndex": 0
		});

		qyengine.instance_create(0, 0, 'obj_注册登录_新', {
			"type": 'obj_注册登录_新',
			"id": 'obj_注册登录_新' + _objId,
			"zIndex": 0
		});

		qyengine.instance_create(0, 0, 'cont_selectServer_serverInfor', {
			"type": 'cont_selectServer_serverInfor',
			"id": 'cont_selectServer_serverInfor' + _objId,
			"zIndex": 0
		});

		serverID = (serverStateID - 1) * 20 + _objId;
		qyengine.guardId('obj_选择框_小框_01_selectServer1' + _objId).vars_.serverID = serverID; //设置编号
		qyengine.guardId('txt_serverName_wh' + _objId).setText(nameList[serverID] + '服');
		qyengine.guardId('cont_selectServer_serverInfor' + _objId).appendChild('obj_选择框_小框_01_selectServer1' + _objId, 175, 33);
		qyengine.guardId('cont_selectServer_serverInfor' + _objId).appendChild('obj_注册登录_良好' + _objId, 40, 38);
		qyengine.guardId('cont_selectServer_serverInfor' + _objId).appendChild('txt_serverName_wh' + _objId, 109, 17);
		qyengine.guardId('cont_selectServer_serverInfor' + _objId).appendChild('obj_注册登录_新' + _objId, 300, 36);
		qyengine.guardId('scro_serverInfoList').appendChild('cont_selectServer_serverInfor' + _objId, 0, 0, rowIndex, 0, false, true);

		rowIndex++;
	}




	if (qyengine.getInstancesByType("grou_shopMainUI").length == 0) {
		return;
	}
	//处理商城的金子或者银子的扣除的延迟
	if (grou_shopMainUI.vars_.buyAllEquipNeedSilver && Number(grou_shopMainUI.vars_.buyAllEquipNeedSilver) > 0) {
		var nowSilver = game.vars_.userInfo.silver - Number(Number(grou_shopMainUI.vars_.buyAllEquipNeedSilver));
		//game.vars_.userInfo.silver -= Number(Number(grou_shopMainUI.vars_.buyAllEquipNeedSilver));
		qyengine.guardId('txt_silver_shop_wh').text = nowSilver;
	}
	if (grou_shopMainUI.vars_.buyAllEquipNeedGold && Number(grou_shopMainUI.vars_.buyAllEquipNeedGold) > 0) {
		var nowGold = game.vars_.userInfo.gold - Number(grou_shopMainUI.vars_.buyAllEquipNeedGold);
		//game.vars_.userInfo.gold -= Number(grou_shopMainUI.vars_.buyAllEquipNeedGold);
		qyengine.guardId('txt_gold_shop_wh').text = nowGold;
	}



	qyengine.instance_create(200, 400, "grou_superClearPop", {
		"type": "grou_superClearPop",
		"id": 'grou_superClearPop',
		"zIndex": 20,
		"scene": 'main_scene',
		"layer": 'layer_headerfeet'
	});

	if (qyengine.getInstancesByType("grou_superClearPop").length > 0) {
		grou_superClearPop.destroy();
	}

	var posX = Number(game.configs.UIConfig.grou_superClearPop.position.split(",")[0]);
	var posY = Number(game.configs.UIConfig.grou_superClearPop.position.split(",")[1]);
	qyengine.instance_create(posX, posY, "grou_superClearPop", {
		"type": "grou_superClearPop",
		"id": 'grou_superClearPop',
		"zIndex": 20,
		"scene": 'main_scene',
		"layer": 'layer_headerfeet'
	});
	var needRechangeText = [0, "是否确认切换为超清模式？", "是否确认切换为急速模式？"];            //所在状态:1急速 2:高清
	grou_superClearPop.objects['txt_superClearRemind_0'].text = needRechangeText[Number(game.vars_.imageQuality)];





	//pk界面内部
	//qyengine.guardId("txt_pkSecret_0").setText();
	var secretIndex = 0; //密探人数
	qyengine.guardId('txt_pkRoleNick').setText(game.vars_.userInfo.nick);
	for (var i = 0; i < game.vars_.rewardOutPkPlayer.length; i++) {
		qyengine.guardId("obj_pkFightButton_OutFight_" + i).vars_.markVip = game.vars_.rewardOutPkPlayer[i].vip;
		qyengine.guardId("obj_pkFightButton_OutFight_" + i).vars_.markServer = game.vars_.rewardOutPkPlayer[i].server;
		if (!game.vars_.rewardOutPkPlayer[i].uid) {
			qyengine.guardId("obj_pkPlayerPhotoFrame_OutFight_" + i).hide();
			qyengine.guardId("txt_outPkVipNum_" + i).hide();
			qyengine.guardId("txt_pkOutName_OutFight_" + i).hide();
			qyengine.guardId("obj_pkPlayerPhotoImage_" + i).hide();
			if (secretIndex == 0) {
				var deltaTime = 20 * 60 - (time() * 0.001 - game.vars_.rewardOutPkPlayer[i].data);
				if (deltaTime < 0) {
					deltaTime = 0;
				}
				calTime(deltaTime, i);
				//qyengine.guardId("txt_pkSecret_" + i).setTimeline('tm_pkSecretTime', {
				//"position": 0,
				//"start": true,
				//"loop": true,
				//"actionIndex": 1
				//});
				//js的计时器
				qyengine.guardId("txt_pkSecret_" + i).vars_.markCalTime = setInterval(function () {
					game.vars_.txt_pkSecretTimeNum.nowTime--;
					calTime(game.vars_.txt_pkSecretTimeNum.nowTime, game.vars_.txt_pkSecretTimeNum.location);
					if (game.vars_.txt_pkSecretTimeNum.nowTime <= 0) {
						//cancelMainPkTime();
						for (var n = 0; n < 3; n++) {
							if (qyengine.guardId("txt_pkSecret_" + n).vars_.markCalTime) {
								clearInterval(qyengine.guardId("txt_pkSecret_" + n).vars_.markCalTime);
							}
						}
						current_game.scripts["al_scr_" + "mainSceneRequestPkPlayer"] && current_game.scripts["al_scr_" + "mainSceneRequestPkPlayer"].call(this, undefined, this);
					}
				}, 1000);
				qyengine.guardId("obj_pkFightButton_OutFight_" + i).show();
				qyengine.guardId("obj_pkFightButton_OutFight_" + i).changeSprite("obj_pkFightButton_A1");
				qyengine.guardId("obj_pkFightButton_OutFight_" + i).setVar('type', "密探");
				qyengine.guardId("obj_pkFightButton_OutFight_" + i).setVar('fightPlayerProperty', game.vars_.rewardOutPkPlayer[i]);
				qyengine.guardId("obj_pkFightButton_OutFight_" + i).vars_.id = game.vars_.rewardOutPkPlayer[i].location;
				qyengine.guardId('obj_pkSecretButtonFrame_' + i).show();
			} else {
				qyengine.guardId('txt_pkSecret_' + i).stopTimeline();
				if (qyengine.guardId("txt_pkSecret_" + i).vars_.markCalTime) {
					clearInterval(qyengine.guardId("txt_pkSecret_" + i).vars_.markCalTime);
				}
				qyengine.guardId("obj_pkFightButton_OutFight_" + i).hide();
				qyengine.guardId("obj_pkFightButton_OutFight_" + i).setVar('fightPlayerProperty', game.vars_.rewardOutPkPlayer[i]);
				qyengine.guardId('obj_pkSecretButtonFrame_' + i).hide();
				qyengine.guardId("txt_pkSecret_" + i).show();
				qyengine.guardId("txt_pkSecret_" + i).setText("暂无对手,等待寻找");
			}
			secretIndex++;
		} else {
			qyengine.guardId('txt_pkSecret_' + i).stopTimeline();
			if (qyengine.guardId("txt_pkSecret_" + i).vars_.markCalTime) {
				clearInterval(qyengine.guardId("txt_pkSecret_" + i).vars_.markCalTime);
			}
			qyengine.guardId("txt_outPkVipNum_" + i).setText("VIP" + game.vars_.rewardOutPkPlayer[i].vip);
			qyengine.guardId("txt_pkOutName_OutFight_" + i).setText(game.vars_.rewardOutPkPlayer[i].nick);
			qyengine.guardId("obj_pkFightButton_OutFight_" + i).show();
			if (qyengine.guardId("obj_pkFightButton_OutFight_" + i).spriteName == 'obj_pkFightButton_A1') {
				qyengine.guardId("obj_pkFightButton_OutFight_" + i).changeSprite('obj_pkFightButton_A0');
			}
			qyengine.guardId("obj_pkFightButton_OutFight_" + i).setVar('fightPlayerProperty', game.vars_.rewardOutPkPlayer[i]);
			qyengine.guardId("obj_pkFightButton_OutFight_" + i).setVar('type', "挑战");
			qyengine.guardId("grou_pkBigBg").objects['cont_pkOutFight'].objects['obj_pkPlayerPhotoImage_' + i].changeSprite("obj_" + game.configs.role[Number(game.vars_.rewardOutPkPlayer[i].profession)].photo + "_default");
		}

	}
	//根据时间计算分秒
	function calTime(nowTime, location) {
		if (nowTime > 60) {

			var minusTime = Math.floor(nowTime / 60);
			var secondTime = Math.floor(nowTime - minusTime * 60);
			//qyengine.guardId("txt_pkSecret_" + location).setText("寻找对手中        " + minusTime + ":" + secondTime);
			if (secondTime < 10) {
				qyengine.guardId("txt_pkSecret_" + location).setText("寻找对手中        " + minusTime + ":0" + secondTime);
			} else {
				qyengine.guardId("txt_pkSecret_" + location).setText("寻找对手中        " + minusTime + ":" + secondTime);
			}

		} else {
			nowTime = Math.floor(nowTime);
			//qyengine.guardId("txt_pkSecret_" + location).setText("寻找对手中        " + "0:" + nowTime);
			if (nowTime < 10) {
				qyengine.guardId("txt_pkSecret_" + location).setText("寻找对手中        " + "0:0" + nowTime);
			} else {
				qyengine.guardId("txt_pkSecret_" + location).setText("寻找对手中        " + "0:" + nowTime);
			}
		}
		qyengine.guardId("txt_pkSecret_" + location).show();
		game.vars_.txt_pkSecretTimeNum = { "nowTime": nowTime, "location": location };
	}





	console.log("onRespResult71:", data);

	if (data == 1) {
		current_game.scripts["al_scr_" + "createCommonFlutterTxt"] && current_game.scripts["al_scr_" + "createCommonFlutterTxt"].call(this, undefined, this, "首充奖励已领取,请去\n包裹内查看");
		if (qyengine.getInstancesByType("grou_first").length > 0) {
			qyengine.guardId('grou_first').destroy();
		}
		//obj_战斗_首冲.hide();
		//obj_PVEicon_首充.hide();
		game.scripts["al_scr_" + "removeBtnEffect"](null, null, "grou_fight", "obj_PVEicon_首充");
		game.vars_.userInfo.getFirstReward = false;
	} else {
		current_game.scripts["al_scr_" + "createCommonFlutterTxt"] && current_game.scripts["al_scr_" + "createCommonFlutterTxt"].call(this, undefined, this, "背包已满!");
	}

	current_game.scripts['al_scr_' + "createCommonFlutterTxt"].call(this, undefined, this, "熔炼失败!");




	grou_factionManageMent

	//帮派管理界面3种界面
	var markMessageObject = ["obj_factionOrangeBar", "obj_factionGreemBar", "obj_factionGreemBar_1", "obj_factionGreemBar_2"];
	var markMessageName = ["申请", "修改", "设置", "解散"];
	var markHideObject = [];
	if (game.vars_.backFaction[1][0] == 2) {        //副族长
		markHideObject = ["obj_factionGreemBar_1", "obj_factionSetWord", "obj_factionGreemBar_2", "obj_factionDisbandWord"];
		qyengine.guardId("grou_factionManageMent").objects['obj_factionModifyNoticeWord'].changeSprite("obj_factionExitWord_default");
		qyengine.guardId(markMessageObject[0]).dispatchMessage({
			"type": 'message',
			"message": "申请",
		});
		qyengine.guardId("grou_factionManageMent").objects['obj_factionModifyNoticeWord'].changeSprite("obj_factionExitWord_default");
		qyengine.guardId(markMessageObject[1]).dispatchMessage({
			"type": 'message',
			"message": "退出",
		});
	} else if (game.vars_.backFaction[1][0] == 3) {    //成员
		markHideObject = ["obj_factionGreemBar_1", "obj_factionSetWord", "obj_factionGreemBar_2", "obj_factionDisbandWord", "obj_factionGreemBar", "obj_factionModifyNoticeWord"];
		qyengine.guardId("grou_factionManageMent").objects['obj_factionEnterApply'].changeSprite("obj_factionExitWord_default");
		qyengine.guardId(markMessageObject[0]).dispatchMessage({
			"type": 'message',
			"message": "退出",
		});
	} else {                                                //族长
		for (var i = 0; i < markMessageObject.length; i++) {
			qyengine.guardId(markMessageObject[i]).dispatchMessage({
				"type": 'message',
				"message": markMessageName[i],
			});
		}
	}
	for (var i = 0; i < markHideObject.length; i++) {
		qyengine.guardId("grou_factionManageMent").objects[markHideObject[i]].hide();
	}



	if (KBEngine.app.player().firstcharge == 1 && KBEngine.app.player().getreward == 1) {    //已经首充
		if (qyengine.getInstancesByType("grou_fight").length > 0) {
			grou_fight.objects['obj_PVEicon_首充'].changeSprite("obj_PVEicon_首充_maincity_default");
			grou_fight.objects['obj_战斗_首冲'].changeSprite("obj_主城_充值_default");
			if (grou_fight.objects.obj_PVEicon_首充.vars_.roundEffect) {
				grou_fight.objects.obj_PVEicon_首充.vars_.roundEffect.destroy();
				grou_fight.objects.obj_PVEicon_首充.vars_.roundEffect = null;
			}
		}
	}

	if (KBEngine.app.player().firstcharge == 1 && KBEngine.app.player().getreward == 1) {
		current_game.scripts['al_scr_' + "popRechargeUI"].call(this, undefined, this);
	} else {
		game.scripts["al_scr_" + 'createRewardFirst'] && game.scripts["al_scr_" + 'createRewardFirst'].call(this, undefined, this);
	}





	if (data == 1) {
		current_game.scripts["al_scr_" + "createCommonFlutterTxt"] && current_game.scripts["al_scr_" + "createCommonFlutterTxt"].call(this, undefined, this, "首充奖励已领取,请去\n包裹内查看");
		if (qyengine.getInstancesByType("grou_first").length > 0) {
			qyengine.guardId('grou_first').destroy();
		}
		//obj_战斗_首冲.hide();
		//obj_PVEicon_首充.hide();
		game.scripts["al_scr_" + "removeBtnEffect"](null, null, "grou_fight", "obj_PVEicon_首充");
		game.vars_.userInfo.getFirstReward = false;
	} else {
		current_game.scripts["al_scr_" + "createCommonFlutterTxt"] && current_game.scripts["al_scr_" + "createCommonFlutterTxt"].call(this, undefined, this, "背包已满!");
	}


	if (grou_fight.objects.obj_PVEicon_首充.vars_.roundEffect) {
		grou_fight.objects.obj_PVEicon_首充.vars_.roundEffect.destroy();
		grou_fight.objects.obj_PVEicon_首充.vars_.roundEffect = null;
	}









	var needrmb = 0;
	console.log("已购买金额:" + data[0]);
	console.log("充值界面数据:", data);
	var needrmb;
	var curRmb = data[0];
	//for (var i = 2; i <= configDataLength("vip"); ++i) {
	//needrmb = getConfig("vip", i, "rmb");
	//if (curRmb < needrmb) {
	//txt_recharge_gold_wh.setText(needrmb - curRmb);
	//txt_recharge_gold_progress_wh.setText(curRmb + "/" + needrmb);
	//break;
	//}
	//}

	//新更改的
	if (getConfig("vip", game.vars_.userInfo.vip + 2, "rmb")) {
		needrmb = Number(getConfig("vip", game.vars_.userInfo.vip + 2, "rmb"));
		txt_recharge_gold_wh.setText(needrmb - curRmb);
	}
	txt_recharge_gold_progress_wh.setText(curRmb + "/" + needrmb);
	if ((curRmb / needrmb) == 0) {
		obj_recharge_gold_progress_wh.hide();
	}
	else {
		obj_recharge_gold_progress_wh.show();
		obj_recharge_gold_progress_wh.setScale(curRmb / needrmb, 1);
	}

	txt_VIP_recharge.setText("VIP " + game.vars_.userInfo.vip);
	txt_VIP_recharge_next.setText("VIP " + (game.vars_.userInfo.vip + 1));

	//scro_recharge_progress.width =  parseInt((curRmb/ needrmb)*427);

	qyengine.guardId('grou_recharge_MainUI_wh').show();

	var cellID = 0;
	for (var cell in game.configs.recharge) {
		cellID += 1;

		if (!data[2][cellID - 1]) {
			qyengine.guardId('grou_recharge_cell_wh' + cellID).objects.obj_recharge_typeIcon.changeSprite("obj_充值_首充_default");
			if (data[1] == 0 && cellID <= 4) {
				qyengine.guardId('grou_recharge_cell_wh' + cellID).objects.txt_recharge_cell_desc_wh.setText(game.configs.recharge[cell].name + "x3  首充送" + game.configs.recharge[cell].gift + "金子");
			}
			else {
				qyengine.guardId('grou_recharge_cell_wh' + cellID).objects.txt_recharge_cell_desc_wh.setText(game.configs.recharge[cell].name + " 首充送" + game.configs.recharge[cell].gift + "金子");
			}
		}
		else {

			if (game.configs.recharge[cell].firstGift != -1) {
				qyengine.guardId('grou_recharge_cell_wh' + cellID).objects.obj_recharge_typeIcon_panel.hide();
				qyengine.guardId('grou_recharge_cell_wh' + cellID).objects.obj_recharge_typeIcon.hide();
			}
			qyengine.guardId('grou_recharge_cell_wh' + cellID).objects.txt_recharge_cell_desc_wh.setText(game.configs.recharge[cell].name);
		}
	}


	if (!game.vars_.disconnect) {   //一段时间后不能连上不再重连
		//qyengine.unscheduleTask(game.vars_.markConnectCallAfter);
		game.vars_.markConnectCallAfter = qyengine.callAfter(function () {
			if (qyengine.getInstancesByType('grou_loadingRefreshGame').length > 0) {
				grou_loadingRefreshGame.destroy();
			}
			current_game.scripts["al_scr_" + 'createSystemTipUI'].call(this, undefined, this, 1);
			game.vars_.disconnect2 = true;
		}.bind(this), current_scene, 8000);
		game.vars_.disconnect = true;
	}


	//提示_2   通用_按钮_刷新链接   通用_按钮_08    通用弹出框_01
	//提示_14   提示_1

	//"disconnect":{"variable":"disconnect","value":"false","comment":"","autosave":false,"serverVariable":false}

	if (qyengine.getInstancesByType("grou_dazao") > 0) {
		grou_dazao.destroy();
	}



	if (qyengine.getInstancesByType("SystemTipUI").length > 0) {
		return;
	}


	game.vars_.rongCuoDisConnect = 0;

	if (game.vars_.rongCuoDisConnect) {
		clearInterval(game.vars_.rongCuoDisConnect);
		game.vars_.rongCuoDisConnect = null;
	}
	game.vars_.rongCuoDisConnect = setInterval(function () {
		//alert("xxx");
		if (_G.getInstancesByType(_U(7694)).length > 0) {
			grou_loadingRefreshGame.destroy();
		}
		alert("断线重连改为刷新");
		game.scripts["al_scr_" + 'createSystemTipUI'].call(this, undefined, this, 1);
		game.vars_.disconnect2 = true;
		clearInterval(game.vars_.rongCuoDisConnect);
	}, 6000);

	if (game.vars_.rongCuoDisConnect) {
		if (_G.getInstancesByType(_U(7694)).length > 0) {
			grou_loadingRefreshGame.destroy();
		}
		alert("断线重连改为刷新");
		game.scripts["al_scr_" + 'createSystemTipUI'].call(this, undefined, this, 1);
		game.vars_.disconnect2 = true;
		clearInterval(game.vars_.rongCuoDisConnect);
	}



	game.vars_.markConnectCallAfter = _G.callAfter(function () {
		if (_G.getInstancesByType(_U(7694)).length > 0) {
			grou_loadingRefreshGame.destroy();
		}
		alert("断线重连改为刷新");
		game.scripts["al_scr_" + 'createSystemTipUI'].call(this, undefined, this, 1);
		game.vars_.disconnect2 = true;
	}.bind(this), current_scene, 8000);





	//修改断线重连的时间的间隔
	if (!game.vars_.reSetFire) {
		game.vars_.reSetFire = setInterval(function () {
			//alert("xxx");
			KBEngine.app.reset();
			KBEngine.Event.fire("login", KBEngine.app.username, KBEngine.app.password, _G.getQueryString('td_channelid') || "gamemei");
			current_scene["otherAccountLogin"] = true;
			current_scene["isConnecting"] = true;
		}, 2000);
	}



	//在状态里面销毁
	if (game.vars_.reSetFire) {
		clearInterval(game.vars_.reSetFire);
		game.vars_.reSetFire = null;
	}
	if (game.vars_.rongCuoDisConnect) {
		clearInterval(game.vars_.rongCuoDisConnect);
		game.vars_.rongCuoDisConnect = null;
	}



	current_game.scripts['al_scr_' + "createCommonFlutterTxt"].call(this, undefined, this, "背包已满!");


	<font color='#fc050d'>100</font>;

	var markInstance = ['obj_活动_VIP_1', 'obj_活动_VIP'];
	for (var i = 0; i < markInstance.length; i++) {
		grou_activityMain_advanced.objects[markInstance[i]].changeSprite("obj_通用_银子_activity_default");
	}





	qyengine.callAfter(function () {
		//判断是否需要显示熔炼的特效
		current_game.scripts['al_scr_' + "addFusionEffect"].call(this, undefined, this);
		current_game.scripts['al_scr_' + "act_HideAndShow_check"].call(this, undefined, this);
		current_game.scripts['al_scr_' + "act_RolePartnerCheck"].call(this, undefined, this);
	}.bind(this), current_scene, 10);


	//obj_PVEicon_聊天    (49，654)     熔炼(482,809)    翅膀(582,809)
	//obj_战斗_收益按钮 (216，909)		txt_missionId（239,898）  txt_missionName (320，898)  txt_multikill (485,898)  obj_战斗_收益按钮底框（457,908）
	memberInfoUI.objects['obj_帮派成员头像']
	qyengine.guardId("memberInfoUI" + 0).objects['obj_帮派成员头像'].setScale(0.75, 0.75);
	qyengine.guardId("inpu_factionAnnounce").getValue().search('&nbsp;')
	//去掉了空格
	game.vars_.backFaction[0].notice = game.vars_.backFaction[0].notice.replace("&nbsp;", "");


	//
	self.vars_.moveFinishIndex = 0;
	self.vars_.moveToPos = false;
	//移动完成
	qyengine.guardId("obj_PVEicon_收缩箭头_mainScene").vars_.moveFinishIndex++;
	if (self.vars_.moveToPos) {
		self.vars_.moveToPos = false;
	} else {
		self.vars_.moveToPos = true;
		self.hide();
	}
	if (qyengine.guardId("obj_PVEicon_收缩箭头_mainScene").vars_.moveFinishIndex < 8) {
		return
	}
	qyengine.guardId("obj_PVEicon_收缩箭头_mainScene").vars_.moveFinishIndex = 0;
	if (qyengine.guardId("obj_PVEicon_收缩箭头_mainScene").vars_.moveToPos) {    //缩起来的状态
		qyengine.guardId("obj_PVEicon_收缩箭头_mainScene").vars_.moveToPos = false;
		qyengine.guardId("obj_PVEicon_收缩箭头_mainScene").setScale(1, 1);
		qyengine.callAfter(function () {
			//判断是否需要显示熔炼的特效
			current_game.scripts['al_scr_' + "addFusionEffect"].call(this, undefined, this);
			current_game.scripts['al_scr_' + "act_HideAndShow_check"].call(this, undefined, this);
			current_game.scripts['al_scr_' + "act_RolePartnerCheck"].call(this, undefined, this);
			grou_fight.currentSprite.cacheAsBitmap = true;
		}.bind(this), current_scene, 10);
	} else {																	//放开的状态
		qyengine.guardId("obj_PVEicon_收缩箭头_mainScene").vars_.moveToPos = true;
		qyengine.guardId("obj_PVEicon_收缩箭头_mainScene").setScale(-1, 1);
		grou_fight.currentSprite.cacheAsBitmap = true;
	}
	qyengine.guardId("obj_PVEicon_收缩箭头_mainScene").vars_.canTouch = true;



	if (self.vars_.moveToPos) {
		self.vars_.moveToPos = false;
		qyengine.guardId("obj_PVEicon_收缩箭头_mainScene").setScale(1, 1);
		qyengine.callAfter(function () {
			//判断是否需要显示熔炼的特效
			current_game.scripts['al_scr_' + "addFusionEffect"].call(this, undefined, this);
			current_game.scripts['al_scr_' + "act_HideAndShow_check"].call(this, undefined, this);
			current_game.scripts['al_scr_' + "act_RolePartnerCheck"].call(this, undefined, this);
			grou_fight.currentSprite.cacheAsBitmap = true;
		}.bind(this), current_scene, 10);
	} else {
		self.vars_.moveToPos = true;
		self.hide();
		qyengine.guardId("obj_PVEicon_收缩箭头_mainScene").setScale(-1, 1);
		grou_fight.currentSprite.cacheAsBitmap = true;
	}
	qyengine.guardId("obj_PVEicon_收缩箭头_mainScene").vars_.canTouch = true;


	if (Number(data) === 0) {
		current_game.scripts['al_scr_' + "createCommonFlutterTxt"].call(this, undefined, this, "家族等级达到15级开启!");
	}






	//跨服家族战
	var data_data = [];
	//关于家族战的报名主界面的数据
	data_data = [0, 0, 0, [1456342443, 1476342443],
		[2456342443, 2476342443],
		[0, 0]
	]; //开始战斗之前为0否则为1	上次家族排名	上次个人排名 报名时间  战斗时间 报名信息

	if (data[0]) {
		data_data[5][1] = 1;
		data_data[5][0] = data[0] - 1;
	} else {
		data_data[5][1] = 0;
		data_data[5][1] = 0;
	}
	data_data[1] = data[1];
	data_data[2] = data[2];
	//关于家族战的报名主界面的数据的数据的初始化
	grou_factionFightMain.objects["txt_factionFightMain2"].setText("我的家族等级: " + game.vars_.backFaction[0].level);
	var sighUpCondition = ["txt_factionFightMain5", "txt_factionFightMain4", "txt_factionFightMain3"];
	var sighUpObj = ["obj_家族_报名参加_2", "obj_家族_报名参加_1", "obj_家族_报名参加_0"];
	var sighUpObjBackButton = ["obj_通用_按钮_factionFightFindButton_2_1", "obj_通用_按钮_factionFightFindButton_1_1", "obj_通用_按钮_factionFightFindButton_0_1"];
	for (var i = 0; i < sighUpCondition.length; i++) {
		grou_factionFightMain.objects[sighUpCondition[i]].text = "报名条件: " + game.configs.guild_war_level[i + 1].level_min + "级<=家族等级<=" + game.configs.guild_war_level[i + 1].level_max + "级";
		grou_factionFightMain.objects[sighUpObj[i]].vars_.level_min = game.configs.guild_war_level[i + 1].level_min;
		grou_factionFightMain.objects[sighUpObj[i]].vars_.level_max = game.configs.guild_war_level[i + 1].level_max;
		if (game.vars_.backFaction[0].level >= game.configs.guild_war_level[i + 1].level_min && game.vars_.backFaction[0].level <= game.configs.guild_war_level[i + 1].level_max) {
			grou_factionFightMain.objects[sighUpObj[i]].vars_.canTouch = true;

		} else {
			grou_factionFightMain.objects[sighUpObj[i]].vars_.canTouch = false;
			grou_factionFightMain.objects[sighUpObj[i]].setHSL && grou_factionFightMain.objects[sighUpObj[i]].setHSL(0, -100, 0);
			grou_factionFightMain.objects[sighUpObjBackButton[i]].setHSL && grou_factionFightMain.objects[sighUpObjBackButton[i]].setHSL(0, -100, 0);
		}
	}
	if (data_data[1]) {
		grou_factionFightMain.objects["txt_factionFightMain6"].text = "上次家族排名: " + data_data[1];
	} else {
		grou_factionFightMain.objects["txt_factionFightMain6"].text = "上次家族排名: 尚无名次";
	}
	if (data_data[2]) {
		grou_factionFightMain.objects["txt_factionFightMain7"].text = "上次个人排名: " + data_data[2];
	} else {
		grou_factionFightMain.objects["txt_factionFightMain7"].text = "上次个人排名: " + "尚无名次";
	}
	if (data_data[5][1]) {
		grou_factionFightMain.objects[sighUpObj[data_data[5][0]]].changeSprite("obj_家族_报名参加_A1");
		grou_factionFightMain.objects[sighUpObj[data_data[5][0]]].setHSL(0, 0, 0);
		grou_factionFightMain.objects[sighUpObjBackButton[data_data[5][0]]].hide();
	}
	/*
	var time0 = 0;
	var time1 = 0;
	for (var i = 3; i <= 4; i++) {
		if (i === 3) {
			time0 = changeTimeToText(i);
		} else {
			time1 = changeTimeToText(i);
		}
	}
	grou_factionFightMain.objects["txt_factionFightMain0"].text = time0;
	grou_factionFightMain.objects["txt_factionFightMain1"].text = time1;

	function changeTimeToText(args0) {
		var temps = ["报名时间: ", "战斗时间: "];
		var time0_obj = new Date(data_data[args0][0] * 1000);
		var time0_obj1 = new Date(data_data[args0][1] * 1000);
		var timeText = temps[args0 - 3] + calNowMonth(time0_obj.toString().split(" ")[1]) + "月" + time0_obj.toString().split(" ")[2] + "日" + time0_obj.toString().split(" ")[4].split(":")[0] + ":" + time0_obj.toString().split(" ")[4].split(":")[1] + "至" +
			calNowMonth(time0_obj.toString().split(" ")[1]) + "月" + time0_obj1.toString().split(" ")[2] + "日" + time0_obj1.toString().split(" ")[4].split(":")[0] + ":" + time0_obj1.toString().split(" ")[4].split(":")[1];
		return timeText;
	}
	function calNowMonth(monthDate) {
		var month12 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		for (var i = 0; i < month12.length; i++) {
			if (month12[i] == monthDate) {
				return i;
			}
		}
	}
	*/

	if (self.vars_.canTouch && self.vars_.isTouch) {
		self.vars_.isTouch = false;
		current_game.scripts['al_scr_' + "actionlist_createLoadingCircle"].call(this, undefined, this);
		KBEngine.app.player().baseCall('reqApplyCSGuildsFighting');
	}

	current_game.scripts['al_scr_' + "actionlist_destroyLoadingCircle"].call(this, undefined, this);


	current_scene.vars_.factionFightRewardData = [[0], [0], [0]];
	var factionFightWarData0 = [[[22501, 12], [22401, 10], [20001, 2], [20014, 3]], [[22501, 12], [22401, 10], [20001, 2], [20014, 3]], [[22501, 12], [22401, 10], [20001, 2], [20014, 3]]];
	var factionFightWarData1 = [[[22501, 12], [22401, 10], [20001, 2], [20014, 3]], [[22501, 12], [22401, 10], [20001, 2], [20014, 3]], [[22501, 12], [22401, 10], [20001, 2], [20014, 3]]];
	var factionFightWarData2 = [[[22501, 12], [22401, 10], [20001, 2], [20014, 3]], [[22501, 12], [22401, 10], [20001, 2], [20014, 3]], [[22501, 12], [22401, 10], [20001, 2], [20014, 3]]];
	current_scene.vars_.factionFightRewardData[0][0] = factionFightWarData0;
	current_scene.vars_.factionFightRewardData[0][1] = factionFightWarData1;
	current_scene.vars_.factionFightRewardData[0][2] = factionFightWarData2;
	//家族战奖励的赋值
	current_scene.vars_.factionFightRewardData = [[0], [0], [0]];
	for (var a = 0; a < 3; a++) {   //青铜 白银 黄金
		for (var b = 0; b < 3; b++) {  //家族 族战 自身
			current_scene.vars_.factionFightRewardData[a][b] = calFactionReward(a, b);
		}
	}
	function calFactionReward(grade, job) {  //grade 0:青铜 1白银 2黄金
		var markFactionFightWarData = [];
		for (var i = 1; i < configDataLength("guild_war_reward"); i++) {
			var markJob = ["guild", "chairman", "self"];
			var markRewardItemAndNum = game.configs.guild_war_reward[i][markJob[Number(job)]].split("|")[Number(grade)].split(";");
			var markLinShiCell = [];
			for (var j = 0; j < markRewardItemAndNum.length; j++) {
				var linShiArray = [];
				var itemId = markRewardItemAndNum[j].split(":")[0];
				itemId = Number(itemId);
				var itemNum = markRewardItemAndNum[j].split(":")[1];
				itemNum = Number(itemNum);
				linShiArray.push(itemId);
				linShiArray.push(itemNum);
				markLinShiCell.push(linShiArray);
			}
			markFactionFightWarData.push(markLinShiCell);
		}
		return markFactionFightWarData;
	}




	obj_通用_方形头像框
	selectRole_photo_10001

	current_game.scripts["al_scr_" + "actionlist_destroyLoadingCircle"].call(this, undefined, this);
	current_game.scripts['al_scr_' + "createFactionFightDefendRecord"].call(this, undefined, this, data);




	if (qyengine.getInstancesByType("grou_battle_task").length > 0) {
		grou_battle_task.objects['txt_battle_taskTitle'].text = game.configs.mission[Number(data[0].missionid)].name;
		grou_battle_task.objects['txt_battle_taskContent'].text = game.configs.mission[Number(data[0].missionid)].dec;
		if (Number(game.configs.mission[Number(data[0].missionid)].gold) != -1) {
			grou_battle_task.objects['txt_battle_taskRewardYellow'].text = game.configs.mission[Number(data[0].missionid)].gold;
		} else {
			grou_battle_task.objects['txt_battle_taskRewardYellow'].text = 0;
		}
		grou_battle_task.objects['txt_battle_taskRewardBlue'].text = game.configs.mission[Number(data[0].missionid)].silver;
		//grou_battle_task.objects['obj_战斗_金子'].changeSprite();
		grou_battle_task.vars_.markTask = data[0];
		if (Number(data[0].progress) != 0 && data[0].curprogress <= data[0].progress) {
			grou_battle_task.objects['obj_战斗_领取框_task'].changeSprite("obj_战斗_领取框_task_A0");
			grou_battle_task.objects['obj_战斗_领取字_task'].changeSprite("obj_战斗_领取字_task_A0");
		}
		if (Number(data[0].progress) === 0 || Number(data[0].curprogress) > Number(data[0].progress)) {
			grou_battle_task.objects['obj_战斗_领取框_task'].changeSprite("obj_战斗_领取框_task_A1");
			grou_battle_task.objects['obj_战斗_领取字_task'].changeSprite("obj_战斗_领取字_task_A1");
		}
	}


	//任务领取的请求~~~~~~
	KBEngine.app.player().baseCall("reqAcievementReward", grou_battle_task.vars_.markTask.missionid);

	//领取点击事件里面的判断
	if (Number(grou_battle_task.progress) === 0 || Number(grou_battle_task.curprogress) > Number(grou_battle_task.progress)) {
		return;
	}


	//离线收益界面的显示的更改
	if (game.vars_.userInfo.vip > 0) {
		self.x = -21;
	}


	if (game.vars_.userInfo.vip > 0) {
		grou_offLineReward.destroy();
		current_game.scripts['al_scr_' + "createCommonFlutterTxt"].call(this, undefined, this, '领取成功!');
		current_game.scripts['al_scr_' + "guide_sendinformation"].call(this, undefined, this);
	} else {
		current_game.scripts['al_scr_' + "popRechargeUI"].call(this, undefined, this);
	}



	current_game.scripts['al_scr_' + "sceneBattleVarInit"].call(this, undefined, this);


	KBEngine.app.player().baseCall('reqMainCityPlayers');
















	//-----------------------------------------------------------------------------------------------------
	//创建主城其它的角色模块,初始化模块   otherHeroObj
	var rolesNameJson = { "10001": "男战士", "10002": "女战士", "10003": "男法师", "10004": "女法师", "10005": "男道士", "10006": "女道士" };
	var randomPosition = { 'x': random_range(50, current_scene.full_size.width - 50), 'y': random_range(100, current_scene.full_size.width - 100) };
	for (var j = 0; j < data[0].length; j++) {
		for (var i = 0; i < data[0][j].roles.length; i++) {

			var otherHeroObj = null;

			if (i == 0) {
				otherHeroObj = qyengine.instance_create(randomPosition.x, randomPosition.y,
					"obj_mainUIRole_" + data[0][j].roles[i].profession, { "id": "obj_mainUIRole_" + data[0][j].roles[i].profession, "zIndex": 10, "layer": "layer_fight" });

				//主角
				current_scene.vars_.otherHeroObj = otherHeroObj;
				current_scene.vars_.otherHeroObj.vars_.currentAtkObj = 1;
				otherHeroObj.setFollowView();

			} else {

				//其他角色
				otherHeroObj = qyengine.instance_create(random_range(current_scene.vars_.otherHeroObj.x - 200, current_scene.vars_.otherHeroObj.x + 200),
					random_range(current_scene.vars_.otherHeroObj.y - 200, current_scene.vars_.otherHeroObj.y + 200), "obj_mainUIRole_" + data[0][j].roles[i].profession,
					{ "id": "obj_mainUIRole_" + data[0][j].roles[i].profession, "zIndex": 9, "layer": "layer_fight" });
			}

			otherHeroObj.currentSprite.setFill("");

			if (window.currentOtherHeroObjPIXI) {

				for (var nameItem in window.currentOtherHeroObjPIXI) {

					if (nameItem == rolesNameJson[data[0][j].roles[i].profession]) {

						otherHeroObj.currentAnim = window.currentOtherHeroObjPIXI[nameItem];

						break;
					}
				}

			} else {

				window.currentOtherHeroObjPIXI = {};
			}

			if (!otherHeroObj.currentAnim) {

				otherHeroObj.currentAnim = new PIXI.extras.RoleAnimation(rolesNameJson[data[0][j].roles[i].profession]);

				window.currentOtherHeroObjPIXI[rolesNameJson[data[0][j].roles[i].profession]] = otherHeroObj.currentAnim;
			}

			var size = otherHeroObj.currentAnim.getSize();

			otherHeroObj.currentAnim.position.x = size.width * 0.5;

			otherHeroObj.currentAnim.position.y = size.height * 0.5;

			otherHeroObj.currentSprite.addChild(otherHeroObj.currentAnim);

			otherHeroObj.currentAnim.setAction("待机");

			otherHeroObj.currentAnim.setDirection(5);

			otherHeroObj.setSize(size);

			// game.scripts["al_scr_sceneSetHeroInfo"](null,null,heroObj,rolesInfo[i]);
			if (!current_scene.vars_.otherHeroObjArr) {
				current_scene.vars_.otherHeroObjArr = [];
			}
			current_scene.vars_.otherHeroObjArr.push(otherHeroObj);
			var markWingLevel = 0;
			if (data[0][j].roles.isRebot) {
				markWingLevel = calWingLevel(Number(data[0][j].uid), i);
			} else {
				markWingLevel = data[0][j].roles[i].equips[2];
			}
			var markOtherInfo = {
				'id': data[0][j].roles[i].profession,
				'equips': calOtherHeroEquip(data[0][j].roles[i].equips),
				'wing': {
					'level': markWingLevel
				}
			};
			//换装
			game.scripts["al_scr_changeObjModel"](null, null, markOtherInfo, otherHeroObj);

		}
	}
	function calOtherHeroEquip(equipInfo) {
		var backArray = [];
		for (var i = 0; i < equipInfo.length - 1; i++) {
			var equips = {};
			if (Number(equipInfo[i]) != 0) {
				equips.id = equipInfo[i];
				equips.type = game.configs.equipment[equips.id].type;
				backArray.push(equips);
			}
		}
		return backArray;
	}
	function calWingLevel(uid, index) {  //id 以及是第几个角色
		var winglevel = game.configs.robot_city[uid].wings.split('|')[index];
		return Number(winglevel);
	}

	//------------------------------------------------------------------------
	current_game.scripts['al_scr_' + "sceneBattleVarInit"].call(this, undefined, this);
	current_game.scripts['al_scr_' + "createMainUIRole"].call(this, undefined, this);
	KBEngine.app.player().baseCall('reqMainCityPlayers');

	//首充
	grou_firstRecharge_new(150, 485)
	grou_firstRechargeItem(-23, 36)

	var rewardConfig = getConfig("activity_first", 1, "reward");
	var rewards = rewardConfig.split("|");
	var equipConfig = getConfig("activity_first", 1, "equip");
	var equips = equipConfig.split("|");
	var index = 0;

	for (var i = 0; i < rewards.length; ++i) {
		//创建item
		qyengine.instance_create(0, 0, "grou_firstRechargeItem", { "type": "grou_firstRechargeItem", "id": 'item' + index, "zIndex": 0 });

		var rewardDatas = rewards[index].split(":");
		qyengine.guardId("item" + index).objects.txt_firstChargeItemName.text = getConfig("item", rewardDatas[0], "name");
		qyengine.guardId("item" + index).objects.txt_firstChargeItemNum.text = rewardDatas[1];
		//pwangrd_qiyun 后加
		var markShowQuality = Number(game.configs.item[Number(rewardDatas[0])].quality) - 1;
		qyengine.guardId('item' + index).objects["obj_通用_道具框_白_firstRecharge"].changeSprite("obj_packageSmallFrame_A" + markShowQuality);
		qyengine.guardId("item" + index).objects.obj_firstRechargeIcon.changeSprite("obj_" + getConfig("item", rewardDatas[0], "icon") + "_default");
		console.error("index++", index++);
		scro_firstRechage_new.appendChild("item" + index, -23, 36, 0, index++, false, true);
	}

	var index2 = 0;
	for (var i = 0; i < equips.length; ++i) {
		//创建item
		qyengine.instance_create(0, 0, "grou_firstRechargeItem", { "type": "grou_firstRechargeItem", "id": 'item' + index, "zIndex": 0 });

		var rewardDatas = equips[index2].split(":");
		qyengine.guardId("item" + index).objects.txt_firstChargeItemName.text = getConfig("equipment", rewardDatas[0], "name");
		qyengine.guardId("item" + index).objects.txt_firstChargeItemNum.text = rewardDatas[2];
		//pwangrd_qiyun 后加
		var markShowQuality = Number(rewardDatas[1]) - 1;
		qyengine.guardId('item' + index).objects["obj_通用_道具框_白_firstRecharge"].changeSprite("obj_packageSmallFrame_A" + markShowQuality);
		qyengine.guardId("item" + index).objects.obj_firstRechargeIcon.changeSprite("obj_" + getConfig("equipment", rewardDatas[0], "icon") + "_default");
		console.error("index + (index2++)", index + (index2++));
		scro_firstRechage_new.appendChild("item" + index++, -23, 36, 0, index + (index2++), false, true);
		index++;
	}





	//创建实例
	qyengine.instance_create(400, 400, "grou_firstRecharge_new", {
		"type": "grou_firstRecharge_new",
		"id": 'grou_firstRecharge_new',
		"zIndex": 20,
		"scene": 'main_scene',
		"layer": 'layer_headerfeet'
	});






	current_game.scripts['al_scr_' + "guide_sendinformation"].call(this, undefined, this);
	qyengine.getInstancesByType("grou_firstRecharge_new").length > 0 && grou_firstRecharge_new.destroy();



	if (NoticeMainPanel.isVisible) {
		return;
	}
	if (KBEngine.app.player().firstcharge == 1 && KBEngine.app.player().getreward == 1) {
		NoticeMainPanel.show();
	} else {
		qyengine.getInstancesByType('NoticeMainPanel').length > 0 && NoticeMainPanel.destroy();
		game.scripts["al_scr_" + 'createRewardFirst'] && game.scripts["al_scr_" + 'createRewardFirst'].call(this, undefined, this);
	}

	//领取奖励的时候
	var needHideObj = ['obj_二期首充_6元按钮', 'obj_二期首充_98元按钮', 'obj_呼吸灯特效', 'obj_呼吸灯橙特效'];
	for (var i = 0; i < needHideObj.length; i++) {
		grou_firstRecharge_new.objects[needHideObj[i]].hide();
	}
	grou_firstRecharge_new.objects['first_recharge_btn_get'].show();
	grou_firstRecharge_new.objects['obj_首充_领取奖励'].show();



	/*
		first_recharge_btn_get
		obj_首充_领取奖励
	*/


	if (grou_firstRecharge_new.objects['obj_二期首充_6元按钮'].isVisible) {
		grou_firstRecharge_new.objects['first_recharge_btn_get'].isVisible = false;
		grou_firstRecharge_new.objects['obj_首充_领取奖励'].isVisible = false;
	}






	console.log("onRespResult71:", data);

	if (data == 1) {
		current_game.scripts["al_scr_" + "createCommonFlutterTxt"] && current_game.scripts["al_scr_" + "createCommonFlutterTxt"].call(this, undefined, this, "首充奖励已领取,请去\n包裹内查看");
		if (qyengine.getInstancesByType("grou_firstRecharge_new").length > 0) {
			qyengine.guardId('grou_firstRecharge_new').destroy();
		}
		//obj_战斗_首冲.hide();
		//obj_PVEicon_首充.hide();
		game.scripts["al_scr_" + "removeBtnEffect"](null, null, "grou_fight", "obj_PVEicon_首充");
		game.vars_.userInfo.getFirstReward = false;
		if (qyengine.getInstancesByType("grou_fight").length > 0) {
			grou_fight.objects['obj_PVEicon_首充'].changeSprite("obj_PVEicon_首充_maincity_default");
			grou_fight.objects['obj_战斗_首冲'].changeSprite("obj_主城_充值_default");
			if (grou_fight.objects.obj_PVEicon_首充.vars_.roundEffect) {
				grou_fight.objects.obj_PVEicon_首充.vars_.roundEffect.destroy();
				grou_fight.objects.obj_PVEicon_首充.vars_.roundEffect = null;
			}
		}
	} else {
		current_game.scripts["al_scr_" + "createCommonFlutterTxt"] && current_game.scripts["al_scr_" + "createCommonFlutterTxt"].call(this, undefined, this, "背包已满!");
	}







	game.scripts["al_scr_" + "removeBtnEffect"](null, null, "grou_fight", "obj_PVEicon_首充");
	game.vars_.userInfo.getFirstReward = false;
	if (qyengine.getInstancesByType("grou_fight").length > 0) {
		grou_fight.objects['obj_PVEicon_首充'].changeSprite("obj_PVEicon_首充_maincity_default");
		grou_fight.objects['obj_战斗_首冲'].changeSprite("obj_主城_充值_default");
		if (grou_fight.objects.obj_PVEicon_首充.vars_.roundEffect) {
			grou_fight.objects.obj_PVEicon_首充.vars_.roundEffect.destroy();
			grou_fight.objects.obj_PVEicon_首充.vars_.roundEffect = null;
		}
	}



	if (current_scene.classId == "main_scene") {
		current_game.scripts["al_scr_" + 'changeObjModel'].call(this, undefined, this, game.vars_.userInfo.roles[0], current_scene.vars_.heroObj);
	}


	if (grou_firstRecharge_new.vars_.needShowOffLine) {
		game.scripts["al_scr_" + "createOffLineScene"](null, null);
		game.scripts["al_scr_" + "actionlist_createOffLineScene"](null, null);
	}


	qyengine.getInstancesByType("grou_payWay_recharge").length > 0 && grou_payWay_recharge.destroy();
	current_game.scripts['al_scr_' + "onRespPayResultQuery"].call(this, undefined, this, 1);


	if (KBEngine.app.player().step && KBEngine.app.player().step.split(",")[0] >= 10) {
		console.log("asdfasdf")
	}

	//人物的移动~~~~~~~~~~~~~~~~~~~~~~~~~

	if (self.distanceTo(current_scene.vars_.heroObj.id) > random_range(100, 400)) {
		this.setVar('currentAtkObj', null);
		local['movePos'] = [random_range(current_scene.vars_.heroObj.x - random_range(-300, 300), current_scene.vars_.heroObj.x + random_range(-300, 300)), random_range(current_scene.vars_.heroObj.y - random_range(-300, 300), current_scene.vars_.heroObj.y + random_range(-300, 300))];
		current_game.scripts["al_scr_" + 'changeDirection'] && current_game.scripts["al_scr_" + 'changeDirection'].call(this, undefined, this, [self.x, self.y], [local.movePos[0], local.movePos[1]], 0, "跑");
		this.moveTo(local.movePos[0], local.movePos[1], self.vars_.currentMoveSpeed, 1);
		this.setVar('moveEndPos', local.movePos);
		this.setVar('moveToHeroObj', true);
	}
	else {
		if (self.vars_.currentState != "待机") {
			this.setSpeed(0, 0);
			self.currentAnim.setAction("待机");

			self.vars_.currentState = "待机";
		}
	}


	current_game.scripts["al_scr_" + "actionlist_destroyLoadingCircle"].call(this, undefined, this);
	//其它玩家的绘制以及信息的显示------------------------------------------
	var rolesNameJson = { "10001": "男战士", "10002": "女战士", "10003": "男法师", "10004": "女法师", "10005": "男道士", "10006": "女道士" };
	for (var j = 0; j < data[0].length; j++) {
		var otherHeroObjArrLinShi = [];
		var randomPosition = { 'x': random_range(50, current_scene.full_size.width - 50), 'y': random_range(100, current_scene.full_size.width - 100) };
		for (var i = 0; i < data[0][j].roles.length; i++) {

			var otherHeroObj = null;

			if (i == 0) {
				otherHeroObj = qyengine.instance_create(randomPosition.x, randomPosition.y,
					"obj_mainUIRole_" + data[0][j].roles[i].profession, { "id": "obj_mainUIOther_" + data[0][j].roles[i].profession, "zIndex": 10, "layer": "layer_fight" });

				//主角
				current_scene.vars_.otherHeroObj = otherHeroObj;
				current_scene.vars_.otherHeroObj.vars_.currentAtkObj = 1;
				otherHeroObj.vars_.isMain = true;
				otherHeroObj.vars_.inArrayIndex = j;
				//otherHeroObj.setFollowView();
			} else {

				//其他角色
				otherHeroObj = qyengine.instance_create(random_range(current_scene.vars_.otherHeroObj.x - 200, current_scene.vars_.otherHeroObj.x + 200),
					random_range(current_scene.vars_.otherHeroObj.y - 200, current_scene.vars_.otherHeroObj.y + 200), "obj_mainUIRole_" + data[0][j].roles[i].profession,
					{ "id": "obj_mainUIOther_" + data[0][j].roles[i].profession, "zIndex": 9, "layer": "layer_fight" });
				otherHeroObj.vars_.inArrayIndex = j;
				otherHeroObj.vars_.storageMainObj = current_scene.vars_.otherHeroObj;
			}

			otherHeroObj.currentSprite.setFill("");
            /*
			if (window.currentOtherHeroObjPIXI) {

				for (var nameItem in window.currentOtherHeroObjPIXI) {

					if (nameItem == rolesNameJson[data[0][j].roles[i].profession]) {

						otherHeroObj.currentAnim = window.currentOtherHeroObjPIXI[nameItem];

						break;
					}
				}

			} else {

				window.currentOtherHeroObjPIXI = {};
			}

            */
			if (!otherHeroObj.currentAnim) {

				otherHeroObj.currentAnim = new PIXI.extras.RoleAnimation(rolesNameJson[data[0][j].roles[i].profession]);

				//window.currentOtherHeroObjPIXI[rolesNameJson[data[0][j].roles[i].profession]] = otherHeroObj.currentAnim;
			}

			var size = otherHeroObj.currentAnim.getSize();

			otherHeroObj.currentAnim.position.x = size.width * 0.5;

			otherHeroObj.currentAnim.position.y = size.height * 0.5;

			otherHeroObj.currentSprite.addChild(otherHeroObj.currentAnim);

			otherHeroObj.currentAnim.setAction("待机");
			otherHeroObj.currentAnim.setLoop(true);
			otherHeroObj.currentAnim.setDirection(5);

			otherHeroObj.setSize(size);

			// game.scripts["al_scr_sceneSetHeroInfo"](null,null,heroObj,rolesInfo[i]);
			/*
			if (!current_scene.vars_.otherHeroObjArr) {
				current_scene.vars_.otherHeroObjArr = [];
			}
			current_scene.vars_.otherHeroObjArr.push(otherHeroObj);
			*/
			otherHeroObj.vars_.currentDirection = 5;
			otherHeroObj.vars_.currentState = "待机";
			otherHeroObj.vars_.objNameTxt = qyengine.instance_create(0, 0, "objNameTxt", {
				"id": data[0][j].uid + "objNameTxt",
				"zIndex": 0,
				"layer": "layer_fight"
			});
			otherHeroObj.vars_.nick = data[0][j].nick;
			otherHeroObj.vars_.level = data[0][j].level;
			var markCountry = ['魏', '蜀', '吴'];
			var nowCountry = markCountry[Number(data[0][j].country)];
			otherHeroObj.vars_.objNameTxt.text = otherHeroObj.vars_.nick + " " + "Lv: " + otherHeroObj.vars_.level;
			otherHeroObj.vars_.objNameTxt.setFollowObj(otherHeroObj.id, -otherHeroObj.vars_.objNameTxt.currentSprite.realWidth * 0.5,
				-otherHeroObj.height * 0.2 * otherHeroObj.scaleY - otherHeroObj.vars_.objNameTxt.currentSprite.realHeight, "both");
			otherHeroObjArrLinShi.push(otherHeroObj);
			if (data[0][j].roles.isRebot) {
				markWingLevel = calWingLevel(Number(data[0][j].uid), i);
				var markOtherHeroTitle = game.configs.robot_city[Number(data[0][j].uid)].title;
				if (Number(markOtherHeroTitle) != -1 && Number(Number(markOtherHeroTitle)) != 0) {
					current_game.scripts['al_scr_' + "createMainCityTitle"].call(this, undefined, this, Number(markOtherHeroTitle), otherHeroObj);
				}
			} else {
				markWingLevel = data[0][j].roles[i].equips[2];
				if (data[0][j].title != 0 && data[0][j].title != -1) {
					current_game.scripts['al_scr_' + "createMainCityTitle"].call(this, undefined, this, Number(data[0][j].title), otherHeroObj);
				}
			}
			console.log("翅膀的等级~~~~~", markWingLevel);
			var markOtherInfo = {
				'id': data[0][j].roles[i].profession,
				'equips': calOtherHeroEquip(data[0][j].roles[i].equips),
				'wing': {
					'level': markWingLevel
				}
			};
			//换装
			game.scripts["al_scr_changeObjModel"](null, null, markOtherInfo, otherHeroObj);

		}
		if (!current_scene.vars_.otherHeroObjArr) {
			current_scene.vars_.otherHeroObjArr = [];
		}
		current_scene.vars_.otherHeroObjArr.push(otherHeroObjArrLinShi);
	}
	function calOtherHeroEquip(equipInfo) {
		var backArray = [];
		for (var i = 0; i < equipInfo.length - 1; i++) {
			var equips = {};
			if (Number(equipInfo[i]) != 0) {
				equips.id = equipInfo[i];
				equips.type = game.configs.equipment[equips.id].type;
				backArray.push(equips);
			}
		}
		return backArray;
	}
	function calWingLevel(uid, index) {  //id 以及是第几个角色
		var winglevel = game.configs.robot_city[uid].wings.split('|')[index];
		return Number(winglevel);
	}

	//----------次要角色跟随它的主角移动的逻辑 
	console.error('mainRole-------------', mainRole);
	if (!self.vars_.moveToHeroObj == true) {
		this.setVar('currentAtkObj', null);
		local['movePos'] = [random_range(mainRole.x - 300, mainRole.x + 300), random_range(mainRole.y - 300, mainRole.y + 300)];
		current_game.scripts["al_scr_" + 'changeDirection'] && current_game.scripts["al_scr_" + 'changeDirection'].call(this, undefined, this, [self.x, self.y], [local.movePos[0], local.movePos[1]], 0, "run");
		this.moveTo(local.movePos[0], local.movePos[1], 190, 1);
		this.setVar('moveEndPos', local.movePos);
		this.setVar('moveToHeroObj', true);
	} else {
		if ((Math.abs(self.x - self.vars_.moveEndPos[0]) <= 20) && (Math.abs(self.y - self.vars_.moveEndPos[1]) <= 20)) {
			if (self.vars_.currentState != "stand") {
				this.setSpeed(0, 0);
				self.setSliceAnimationAction(getConfig("heroAction", self.vars_.currentDirection, "stand"), true);

				self.vars_.currentState = "stand";
				this.setVar('moveToHeroObj', false);
			}
		}
	}
	//-------------------点击主角进行移动~~~~~~~~~~~~~~
	if (current_scene.vars_.openGrouUI) {  //说明现在是在主城上面~~~
		var markRolePos = [current_scene.vars_.heroObjArr[0].x, current_scene.vars_.heroObjArr[0].y];
		current_scene.vars_.heroObjArr[0].moveTo(mouseX, mouseY, 210, 1);
		current_scene.vars_.heroObjArr[0].dispatchMessage({
			'type': 'message',
			'message': 'MainSceneChangeDirection',
			'argument0': markRolePos,
			'argument1': [mouseX, mouseY],
			'argument2': 0,
			'argument3': '跑'
		});
	}
	//----------------从主城返回到战斗场景~~~~~~
	//game.vars_.mainCityOtherPlayerMove && clearInterval(game.vars_.mainCityOtherPlayerMove);
	//game.vars_.mainCityOtherPlayerFollow && clearInterval(game.vars_.mainCityOtherPlayerFollow);

	for (var i = 0; i < current_scene.vars_.heroObjArr.length; i++) {
		current_scene.vars_.heroObjArr[i].vars_.setIntervalValue && clearInterval(current_scene.vars_.heroObjArr[i].vars_.setIntervalValue);
		current_scene.vars_.heroObjArr[i].destroy();
	}
	for (var a = 0; a < current_scene.vars_.otherHeroObjArr.length; a++) {
		for (var b = 0; b < current_scene.vars_.otherHeroObjArr[a].length; b++) {
			current_scene.vars_.otherHeroObjArr[a][b].vars_.setIntervalValue && clearInterval(current_scene.vars_.otherHeroObjArr[a][b].vars_.setIntervalValue);
			current_scene.vars_.otherHeroObjArr[a][b].destroy();
		}
	}
	current_scene.vars_.heroObjArr = null;
	current_scene.vars_.otherHeroObjArr = null;
	current_scene.vars_.currentWavesType = 0;
	current_game.scripts['al_scr_' + "main_sceneBattleInfoInit"].call(this, undefined, this);

	current_scene.scripts['al_scr_' + 'actionlist_createLoadingCircle'].call(this, undefined, this);
	current_game.scripts["al_scr_" + "actionlist_destroyLoadingCircle"].call(this, undefined, this);
	//--------------------------------
	current_game.scripts['al_scr_' + "sceneBattleVarInit"].call(this, undefined, this);
	current_game.scripts['al_scr_' + "createMainUIRole"].call(this, undefined, this);
	KBEngine.app.player().baseCall('reqMainCityPlayers');

	current_game.scripts["al_scr_" + "changeDirection"] && current_game.scripts["al_scr_" + "changeDirection"].call(this, undefined, this, event.argument0, event.argument1, event.argument2, event.argument3);
	current_scene.scripts['al_scr_' + "followMove"].call(this, undefined, this);

	for (var i = 0; i < 5; i++) {
		var xxx = setTimeout(function () {
			console.log("i", i);
		}, 2000);
	}


	//------------点击的判断~~~~~~~~~~~~~
	var isIn = judgeIsIn();
	if (isIn) {
		return;
	}
	function judgeIsIn() {
		for (item in grou_feet.objects) {
			var leftX = grou_feet.objects[item].x + grou_feet.x + current_scene.viewOffset.x - grou_feet.objects[item].width / 2;
			var rightX = grou_feet.objects[item].x + grou_feet.x + current_scene.viewOffset.x + grou_feet.objects[item].width / 2;
			var upY = grou_feet.objects[item].y + grou_feet.x + current_scene.viewOffset.y - grou_feet.objects[item].height / 2;
			var downY = grou_feet.objects[item].y + grou_feet.x + current_scene.viewOffset.y + grou_feet.objects[item].height / 2;
			if (mouseX >= leftX && mouseX <= rightX && mouseY <= downY && mouseY >= upX) {
				return true;
			}
			//console.log(grou_feet.objects[item].id);
		}
		for (mainItem in grou_maincity.objects) {
			var leftX = grou_maincity.objects[mainItem].x + grou_maincity.x + current_scene.viewOffset.x - grou_maincity.objects[mainItem].width / 2;
			var rightX = grou_maincity.objects[mainItem].x + grou_maincity.x + current_scene.viewOffset.x + grou_maincity.objects[mainItem].width / 2;
			var upY = grou_maincity.objects[mainItem].y + grou_maincity.x + current_scene.viewOffset.y - grou_maincity.objects[mainItem].height / 2;
			var downY = grou_maincity.objects[mainItem].y + grou_maincity.x + current_scene.viewOffset.y + grou_maincity.objects[mainItem].height / 2;
			if (mouseX >= leftX && mouseX <= rightX && mouseY <= downY && mouseY >= upX) {
				return true;
			}
		}
		return false;
	}

	//--------角色的创建事件里面
	if (self.vars_.isMain) {  //是主角
		self.vars_.setIntervalValue = setInterval(function () {
			var markEndPos = [random_range(50, current_scene.full_size.width - 50), random_range(50, current_scene.full_size.height - 50)];
			var moveNumPos = random_range(0, moveNum.length - 1);
			self.moveTo(markEndPos[0], markEndPos[1], 210, 1);
			var startPos = [self.x, self.y];
			self.dispatchMessage({
				'type': 'message',
				'message': 'MainSceneChangeDirection',
				'argument0': startPos,
				'argument1': markEndPos,
				'argument2': 0,
				'argument3': '跑'
			});
		}, random_range(5000, 30000));
	}
	/*else {        //跟随的角色
		self.vars_.setIntervalValue = setInterval(function () {
			self.dispatchMessage({
				'type': 'message',
				'message': 'MainSceneFollowMove',
				'argument0': self.vars_.storageMainObj
			});
		}, 1000);
	}*/

	//---------移动结束重置
	if (self.vars_.isMain) {
		if (self.vars_.isSelf) {//玩家自己
			if (current_scene.vars_.heroObjArr.length > 1) {
				for (var i = 1; i < current_scene.vars_.heroObjArr.length; i++) {
					current_scene.vars_.heroObjArr[i].vars_.moveToHeroObj = false;
				}
			}
		} else {
			if (current_scene.vars_.otherHeroObjArr[self.vars_.inArrayIndex].length > 1) {
				for (var i = 1; i < current_scene.vars_.otherHeroObjArr[self.vars_.inArrayIndex].length; i++) {
					current_scene.vars_.otherHeroObjArr[self.vars_.inArrayIndex][i].vars_.moveToHeroObj = false;
				}
			}
		}
	}


	//------
	qyengine.guardId("grou_activityInTestCell" + i).objects['']


	grou_treasuryMainUI.y = Number(grou_treasuryMainUI.y) + 5;


	(current_scene.width / 5) * 2 - 110 / 2 + 38 - 7 - 7 - ((current_scene.screenAdaptation && current_scene.screenAdaptation.x) || 0);

	/*
	修正若干在iphone6 plus上的自适应的问题~~~
	修正点击首充的叉号会报错的问题~~~
	稍微修正了主界面的两个加号的点击的区域~~~
	主界面上的切换按钮连续点击会产生问题,已经解决~~~
	在有多个伙伴的时候，主城和主界面的伙伴昵称都同时只显示在第一个人物身上~~~
	玩家申请进入家族，组长无法拒绝玩家进入家族已解决
	*/
	setTimeout(function () {
		var markPos = 0;
		if ((current_scene.screenAdaptation && current_scene.screenAdaptation.x)) {
			markPos = current_scene.screenAdaptation.x;
		}
		self.x -= markPos;

	}, 10);


	if (self.vars_.needMove) {
		setTimeout(function () {
			var markPos = 0;
			if ((current_scene.screenAdaptation && current_scene.screenAdaptation.x)) {
				markPos = current_scene.screenAdaptation.x;
			}
			self.x -= markPos;

		}, 10);
	}





	qyengine.forEachTag(function () { this.dispatchMessage({ "type": 'message', "message": 'unTouch' }); }, 'tag_moveToPosTwo');
	qyengine.forEachTag(function () { this.dispatchMessage({ "type": 'message', "message": 'unTouch' }); }, 'tag_moveToPos');


	qyengine.forEachTag(function () { this.dispatchMessage({ "type": 'message', "message": 'cancelTouch' }); }, 'tag_moveToPosTwo');
	qyengine.forEachTag(function () { this.dispatchMessage({ "type": 'message', "message": 'cancelTouch' }); }, 'tag_moveToPos');
	self.shieldEvent && self.shieldEvent(["mousedown", "mouseup"], 10000000);






	self.setScale(1, 1);
	self.vars_.isTouch = false;
	self.shieldEvent && self.shieldEvent(["mousedown", "mouseup"], 10000000);
	setTimeout(function () {
		self.cancelShieldEvent && self.cancelShieldEvent(["mousedown", "mouseup"]);
		qyengine.forEachTag(function () { this.dispatchMessage({ "type": 'message', "message": 'unTouch' }); }, 'tag_moveToPosTwo');
		qyengine.forEachTag(function () { this.dispatchMessage({ "type": 'message', "message": 'unTouch' }); }, 'tag_moveToPos');
	}, 950);
	if (self.vars_.nowStatus == "战斗") {
		current_scene.dispatchMessage({
			"type": "message",
			"message": "someButtonMoveToPosTwo"
		});
	} else {
		current_scene.dispatchMessage({
			"type": "message",
			"message": "someButtonMoveToPos"
		});
	}



	/***********************************************************************
	* 判断一个字符串是否为空字符串
	*/

	if (isBlank(qyengine.guardId("inpu_factionAnnounce").getValue())) {
		qyengine.instance_create(0, 0, "txt_remind", {
			"type": "txt_remind",
			"id": "txt_remind",
			"layer": "layer_headerfeet"
		});
		qyengine.guardId("txt_remind").text = "输入不合法!"
		return;
	}
	function isBlank(szStr) {
		if (szStr.length < 1) {
			return true;
		}
		for (i = 0; i < szStr.length; i++) {
			if (szStr.substring(i, i + 1) != ' ') {
				return false;
			}
		}
		return true;
	}

	var str = qyengine.guardId("inpu_factionAnnounce").getValue().indexOf("&nbsp;");
	if (str >= 0) {
		qyengine.instance_create(0, 0, "txt_remind", {
			"type": "txt_remind",
			"id": "txt_remind",
			"layer": "layer_headerfeet"
		});
		qyengine.guardId("txt_remind").text = "输入不合法!"
		return;
	}
	//判断字符串中是否存在空格
	function isKong(szStr) {
		//trim方法为上面去掉字符串首尾空格的方法，不是系统方法
		//var str = trim(szStr);
		if (strlen(str) > 0) {
			if (str.indexOf(' ') >= 0) {
				return true;
			}
		}
		return false;
	}
	/***
	 * 1,进入商城会刷新链接的问题已经解决;
	 * 2,家族里面的公告可以输入空格发布后显示乱码的问题已经修复;
	 * 3,解决创建家族的时候，家族名可以为多个空格;
	 * 4,家族宝库中的等级描述修改;
	 * 5,玩家在家族的职位在成员列表中显示正常，详情中全部显示族长,已经修复;
	 * 6,修正在主城中点开聊天，后点击返回，点击地图，人物无法移动
	 * 7,修正自动挑战上面的文字的自适应的问题;
	 * 8,现在主城中的玩家的其它角色统一不显示昵称等;
	 * 9,国库激励中助威酒的消耗和拥有数量调整~~~
	 */
	KBEngine.app.player().baseCall("reqTestAddGuildsLevel", 6);


	/**
	 * 1,修正国库军需押镖中替换资源更改逻辑留下的部分的问题(最高品质的时候点击会报错,领取押镖奖励后,显示不正常);
	 * 2,点击领取离线收益,再点击叉掉首充会出现叉不掉的情况,已经修复;
	 * 3,物品详情界面获得银币后缺少单位(文本中插入图片合并后路径已经完全不一样导致丢失,已经尝试修正)
	 * 4,尝试修正点击背包内的物品有时候会无反应的问题;
	 * 5,注册角色的时候，昵称可以为多个空格小细节修正
	 * 6,跳转至主城后，应退出本次摸金大战
	 */
	var xxx = "'" + grou_head.objects['obj_战斗_银子'].currentSprite.fill_ + "'"
	txt_saleRewardCoin.text = "获得:" + saleCoinNum + "<img src=" + xxx + "></img>";



	var xxx = "'" + grou_head.objects['obj_战斗_银子'].currentSprite.fill_ + "'"
	txt_saleRewardCoin.text = "获得:5000<img src=" + xxx + "></img>";



	current_scene.classId == "main_scene" ? 161 : (161 + 100)

	KBEngine.app.player().baseCall("reqGoldBattleForceOpen")


	qyengine.getInstancesByType("feelGoldUI").length > 0 && qyengine.getInstancesByType("feelGoldUI")[0].destroy();



	//判断字符串中是否存在空格
	var str = qyengine.guardId("inpu_roleName").getValue();
	function isKong(str) {
		//trim方法为上面去掉字符串首尾空格的方法，不是系统方法
		//var str = trim(szStr);
		if (str.indexOf(' ') >= 0) {
			return true;
		}
		return false;
	}
	if (isKong(str) >= 0) {
		qyengine.instance_create(0, 0, "txt_remind", {
			"type": "txt_remind",
			"id": "txt_remind",
			"layer": "layer_headerfeet"
		});
		qyengine.guardId("txt_remind").text = "输入不合法!"
		return;
	}
	/**
	 * 目前绝世邪君需要服务端及时处理的问题
	 * 1,主界面上的整个任务功能;
	 * 2,活动服务端需要移入,另,需补齐缺少的两个红点;
	 * 3,跨服家族战的部分内网和测试反馈部分不相符,需要联合调试修改;
	 * 4,祈福需要服务端挪;
	 * 5,牵涉到boss的需要服务端查看测试组的反馈;
	 * 6,最新的vip特权也需要沈伟那边加接口
	 * 
	 */
	//新的家族战奖励-层滚轴
	var markJiBie = grou_factionFightMain.vars_.nowRewardJiBie;
	var markNowTab = grou_factionFightMain.vars_.tabId;
	for (var i = 0; i < current_scene.vars_.factionFightRewardData[markJiBie][markNowTab].length; i++) {
		game.configs.config_fightReward[i + 1] = {
			id: i + 1,
			scroId: "rewardBig_" + i
		};
	}
	qyengine.guardId("scro_factionFightReward").refreshRelations();


	//grou_vipGift的创建事件
	if (scro_giftVipTitle.isVisible) {
		scro_giftVipTitle.cells = [];
		scro_giftVipTitle.currentSprite.moving_.removeChildren();
		scro_giftVipTitle.removeAll();
	}
	for (i = 1; i <= configDataLength('vip_gift'); i++) {
		game.configs.config_giftTitle[i] = {
			id: i,
			index: i,
			titleId: i
		};
	}
	qyengine.guardId("scro_giftVipTitle").refreshRelations();


	//创建每日福利和超值礼包的动作序列
	//清理滚轴
	var scro_Obj = ["scro_giftReward", "scro_giftRewardDay"];
	for (scro_item in scro_Obj) {
		qyengine.guardId(scro_Obj[scro_Obj]).cells = [];
		qyengine.guardId(scro_Obj[scro_Obj]).currentSprite.moving_.removeChildren();
		qyengine.guardId(scro_Obj[scro_Obj]).removeAll();
	}
	game.configs.config_giftRewardItemDay = {};
	game.configs.config_giftRewardItem = {};
	var vip_giftObj = game.configs.vip_gift[viplevel];
	grou_vipGift.objects['txt_initPrice'].text = vip_giftObj.price;
	grou_vipGift.objects['txt_gift_nowPrice'].text = vip_giftObj.price_off;
	var disCountPrice = (vip_giftObj.price_off) / (vip_giftObj.price);
	disCountPrice = Number(disCountPrice.toFixed(2));
	disCountPrice = disCountPrice * 100;
	grou_vipGift.objects['txt_gift_discount'].text = "" + disCountPrice + "%";
	var dayReward = vip_giftObj.gift;
	for (item in dayReward.split(";")) {
		var dayRewardItem = dayReward.split(";")[item];
		var dayRewardItemId = dayRewardItem.split("|")[0];
		var dayRewardItemNum = dayRewardItem.split("|")[1];
		var dayRewardItemInfo = backColorAndName(dayRewardItemId);
		try {
			var dayRewardItemColor = dayRewardItemInfo.color;
			var dayRewardItemName = dayRewardItemInfo.name;
		} catch (error) {
			console.error("error---", error.message);
		}
		game.configs.config_giftRewardItemDay[item + 1] = {
			id: item + 1,
			num: Number(dayRewardItemNum),
			icon: dayRewardItemInfo.icon,
			color: Number(dayRewardItemColor),
			name: dayRewardItemName,
			itemId: Number(dayRewardItemId)
		};
	}
	qyengine.guardId('scro_giftRewardDay').refreshRelations();
	//超值礼包
	var mark_giftReward_length = 0;
	var deserverItem = vip_giftObj.item;
	var deserverBox = vip_giftObj.box;
	var deserverTitle = vip_giftObj.title;
	var markNotEmptyArr = [deserverItem, deserverBox, deserverTitle];
	for (var j = 1; j <= markNotEmptyArr.length; j++) {
		if (markNotEmptyArr[j] != -1) {
			for (cell in markNotEmptyArr[j].split(";")) {
				mark_giftReward_length++;
				var deserverItemIdAndNum = markNotEmptyArr[j].split(";")[cell];
				var deserverItemId = deserverItemIdAndNum.split("|")[0];
				var deserverItemNum = deserverItemIdAndNum.split("|")[1];
				deserverItemInfo = backColorAndName(deserverItemId);
				game.configs.config_giftRewardItem[mark_giftReward_length] = {
					id: mark_giftReward_length,
					num: Number(deserverItemNum),
					icon: deserverItemInfo.icon,
					color: Number(deserverItemInfo.color),
					name: deserverItemInfo.name,
					itemId: Number(deserverItemId)
				};
			}
		}
	}
	/*
	if (vip_giftObj.item != -1) {
	}
	*/
	if (vip_giftObj.equipment != -1) {
		var deserverEquip = vip_giftObj.equipment;
		for (equip in deserverEquip.split(';')) {
			mark_giftReward_length++;
			var deserverEquipIdAndQuality = deserverEquip.split(';')[cell];
			var deserverEquipId = deserverEquip.split(';')[cell].split('|')[0];
			var deserverEquipQuality = deserverEquip.split(';')[cell].split('|')[1];
			var deserverEquipName = game.configs.equipment[deserverEquipId].name;
			var deserverEquipIcon = "obj_" + game.configs.equipment[deserverEquipId].icon + "_default";
			game.configs.config_giftRewardItem[mark_giftReward_length] = {
				id: mark_giftReward_length,
				num: 1,
				icon: deserverEquipIcon,
				color: Number(deserverEquipQuality),
				name: deserverEquipName,
				itemId: Number(deserverEquipId)
			};
		}
	}
	qyengine.guardId('scro_giftReward').refreshRelations();
	function backColorAndName(itemId) {
		var itemInfo = {};
		if (game.configs.item[itemId]) {
			itemInfo.color = game.configs.item[itemId].quality;
			itemInfo.name = game.configs.item[itemId].name;
			itemInfo.icon = "obj_" + game.configs.item[itemId].icon + "_default";
		} else if (game.configs.box[itemId]) {
			itemInfo.color = game.configs.box[itemId].quality;
			itemInfo.name = game.configs.box[itemId].name;
			itemInfo.icon = "obj_" + game.configs.box[itemId].icon + "_default";
		} else if (game.configs.title[itemId]) {
			itemInfo.color = game.configs.title[itemId].quality;
			itemInfo.name = game.configs.title[itemId].name;
			itemInfo.icon = "" + game.configs.title[itemId].icon + "_default";
		}
		return itemInfo;
	}






	self.vars_.lastTab = 0;
	self.vars_.nowTab = 0;
	//改变Tab
	qyengine.forEach(function () {
		this, dispatchMessage({
			"type": "message",
			"message": "changeGiftTab",
			"argument0": 1
		});
	}, "obj_特权_选择框_01_gift");
	//收到消息改变Tab
	if (self.vars_.titleId == event.argument0) {
		self.changeSprite("" + self.classId + "_A1");
		grou_vipGift.vars_.nowTab = self.vars_.titleId;

		/*
		if (grou_vipGift.vars_.lastTab) {
			qyengine.forEach(function () {
				this, dispatchMessage({
					"type": "message",
					"message": "changeGiftTabBlack",
					"argument0": grou_vipGift.vars_.lastTab
				});
			}, "obj_特权_选择框_01_gift");

		}
		*/
	}





	self.changeSprite(self.vars_.icon);
	self.changeSprite("obj_packageSmallFrame_A" + (self.vars_.color - 1));

	qyengine.getInstancesByType("grou_vipGift").length > 0 && grou_vipGift.destroy();

	self.vars_.vipDec = false;
	//隐藏和显示Vip礼包
	var vipGatherObjArr = ["obj_特权_大VIP_gift_1", "txt_bigVip_gift_1", "obj_特权_超值礼包_gift", "scro_giftReward", "obj_特权_数字图_gift",
		"txt_gift_discount", "txt_initPrice", "obj_VIP特权_花纹_gift", "obj_特权_红横杠_gift", "obj_通用_金子_gift", "txt_gift_nowPrice", "obj_特权_未达成_gift_0"];
	if (grou_vipGift.objects['obj_特权_查看特权_01_gift'].vars_.vipDec) {  //隐藏vip礼包
		for (cell in vipGatherObjArr) {
			grou_grou_vipGift.objects[vipGatherObjArr[cell]].hide();
		}
	} else {   //显示Vip礼包
		for (cell in vipGatherObjArr) {
			grou_grou_vipGift.objects[vipGatherObjArr[cell]].show();
		}
	}

	//grou_vipDec的坐标(-262,353)
	//点击查看特权的按钮
	if (self.vars_.vipDec) {
		self.vars_.vipDec = false;
		grou_vipGift.objects['obj_特权_查看特权_03_gift'].changeSprite("obj_特权_查看特权_03_gift_default");
		qyengine.getInstancesByType("grou_vipDec").length > 0 && grou_vipDec.destroy();
	} else {
		self.vars_.vipDec = true;
		grou_vipGift.objects['obj_特权_查看特权_03_gift'].changeSprite("obj_特权_返回_03_gift_default");
		qyengine.instance_create(0, 0, "grou_vipDec", {
			"type": "grou_vipDec",
			"id": "grou_vipDec",
			"zIndex": 5,
			"layer": "layer_headerfeet"
		});
		grou_vipGift.appendChild("grou_vipDec", -262, 353);
		current_game.scripts['al_scr_' + "actionlist_lookVipDec"].call(this, undefined, this);
	}
	current_game.scripts['al_scr_' + "actionlist_hideVipDec"].call(this, undefined, this);
	//创建vipDec界面
	var markVipInfo = game.configs.vip_gift[grou_vipGift.vars_.nowTab];
	grou_vipDec.objects['txt_giftVipDec_0'].text = "累计充值" + "<font  color='#ffba02'>" + markVipInfo.price + "</font>" + "金子即可享受以下特权:";
	grou_vipDec.objects['txt_giftVipDec_2'].text = markVipInfo.dec;


	grou_vipGift.objects['obj_特权_查看特权_01_gift'].dispatchMessage({
		"type": "message",
		"message": "hideVipDec"
	});









	qyengine.instance_create(360, 37, "grou_vipGift", {
		"type": "grou_vipGift",
		"id": "grou_vipGift",
		"zIndex": 5,
		"layer": "layer_headerfeet",
		"scene": "main_scene"
	});

	try {

	} catch (error) {

	}

	//	-252 395
	/**
	 * 2017/3/6
	 * 1,拓展了查看商城的物品的详情,使其适配更多的界面
	 * 2,修正特权的进度条的显示问题;
	 * 3,现在在特权界面切换的时候,根据最新的策划案进度条是动态的了;
	 * 4,研究螃蟹村策划案
	 * 5,国库中的军需达人文字的修改;
	 * 6,背包扩容到500格，之后再扩容，提示-1金币扩容4个格子已经修正;
	 * 7,国库中的国家名称显示全部修正;
	 * 2017/3/7
	 * 1,螃蟹村主界面的UI以及部分效果ok
	 * 2017/3/8
	 * 1,龙啸九天的选服界面的更改;
	 * 2,龙啸九天新增分享(缺少服务端)
	 * 3,螃蟹村的商城(部分)
	 * 2017/3/9
	 * 1,龙啸九天和服务端对分享
	 * 4,商城的购买物品
	 * 2017/3/13
	 * 1,龙啸九天新的离线
	 * 2,修正龙啸九天帮派任务界面的经验值显示的问题
	 * 3,容错龙啸九天的帮派任务界面可能出现的等级跳动
	 * 2017/3/14
	 * 1,修正新的离线收益界面的两个的bug
	 * 2,对于用户中出现的一个位置偏移的问题做了容错
	 * 3,我的蟹池部分
	 * 4,增加了两个渠道的分享
	 * 2017/3/15
	 * 1,继续我的蟹池部分
	 * 2017/3/16
	 * 1,龙啸九天活动红点的及时更新;
	 * 1，公测特权：
		“领取奖励”四个字调整成灰色的
		2，累计消耗未达成文字显示
		3，等级礼包：已领取下方按钮顶上
		4，积分转轮：强化结束之后的展示效果
		5，排序：积分转轮、累计消耗、王者争霸、累计充值、等级礼包
		6，默认展示第一个活动，点击右侧按钮展示下一个活动
		7,钥匙不够的情况下右边至少显示开一个箱子需要的钥匙数目，这样更好点
		8,修正离线界面的Vip的领取的字偶尔位置偏移的问题~~~
		9,现在是不足够开启一个宝箱也是显示能够开启一个宝箱所需要的钥匙
	   2017/3/21
	   1,服务选择界面的更改


	/**2017/3/24
	 * 1,特权   在vip3页签上超值礼包的显示问题和点击查看详情的问题~~~~;
	 * 2,部分物品名称过长换行的问题;
	 * 3,部分页签查看特权界面残留上一个界面的一个文字问题；
	 * 4,修正查看特权界面的标题理解错误的问题;
	 * 5,下面福利领取的修正;
	 * 6,再充值可成为字体大小的修正;
	 * 7,大转盘新增加的宝箱获得后显示undefined的问题;
	 * 2017/3/28
	 * 1,//XXXXXXXXXXX新用户登陆的改变
	 * 2,活动箭头逻辑的循环
	 * 3,新的折扣购买的活动带额添加
	 * 2017/3/29
	 * 1,处理角色翅膀中的一些逻辑等
	 * 2017/3/31
	 * 1,螃蟹村的喂养处理
	 * 2017/4/1
	 * 1,特权的价格前面增加了原价
      2,特权调整了部分VIP后面数字的位置~
       3,修正了部分首充挡位不消失的问题
       4,新手引导新的光圈
	 * 
	 * 
	 */
	//主界面的任务

	/**
	 * 二期首充_人物:"assets/qy1737.png"
	 * 御龙在天_人物1:"assets/qy1953.png"
	 * 御龙在天_人物2:"assets/qy1954.png"
	 *  引导_人 "assets/qy1714.png"
	 *  活动_人物1     "assets/qy2012.png"
	 */

	//automaticBattle
	/**
	 * 坐标(407,522) (231,700) (585,700)
	 */





	//创建主角,初始化主角模块
	var rolesInfo = game.vars_.userInfo.roles;

	for (var i = 0; i < rolesInfo.length; i++) {

		var heroObj = null;

		if (i == 0) {

			heroObj = qyengine.instance_create(750, 900, "heroObj_" + rolesInfo[i].id, { "id": "heroObj_" + rolesInfo[i].id, "zIndex": 10, "layer": "layer_fight" });

			//主角
			current_scene.vars_.heroObj = heroObj;

			heroObj.setFollowView();

		} else {

			//其他角色
			heroObj = qyengine.instance_create(random_range(current_scene.vars_.heroObj.x - 200, current_scene.vars_.heroObj.x + 200), random_range(current_scene.vars_.heroObj.y - 200, current_scene.vars_.heroObj.y + 200), "heroObj_" + rolesInfo[i].id, { "id": "heroObj_" + rolesInfo[i].id, "zIndex": 9, "layer": "layer_fight" });
		}

		game.scripts["al_scr_sceneSetHeroInfo"](null, null, heroObj, rolesInfo[i]);

		current_scene.vars_.heroObjArr.push(heroObj);

		//换装
		game.scripts["al_scr_changeObjModel"](null, null, rolesInfo[i], heroObj);

	}












	//创建主角,初始化主角模块
	var rolesInfo = game.vars_.userInfo.roles;

	var rolesNameJson = { "10001": "男战士", "10002": "女战士", "10003": "男法师", "10004": "女法师", "10005": "男道士", "10006": "女道士" };

	for (var i = 0; i < rolesInfo.length; i++) {

		var heroObj = null;

		if (i == 0) {

			heroObj = qyengine.instance_create(current_scene.full_size.width * 0.5, current_scene.full_size.height * 0.5, "heroObj_" + rolesInfo[i].id, { "id": "heroObj_" + rolesInfo[i].id, "zIndex": 10, "layer": "layer_fight" });

			//主角
			current_scene.vars_.heroObj = heroObj;

			heroObj.setFollowView()

		} else {

			//其他角色
			heroObj = qyengine.instance_create(random_range(current_scene.vars_.heroObj.x - 200, current_scene.vars_.heroObj.x + 200), random_range(current_scene.vars_.heroObj.y - 200, current_scene.vars_.heroObj.y + 200), "heroObj_" + rolesInfo[i].id, { "id": "heroObj_" + rolesInfo[i].id, "zIndex": 9, "layer": "layer_fight" });
		}

		heroObj.currentSprite.setFill("");

		if (window.currentHeroObjPIXI) {

			for (var nameItem in window.currentHeroObjPIXI) {

				if (nameItem == rolesNameJson[rolesInfo[i].id]) {

					heroObj.currentAnim = window.currentHeroObjPIXI[nameItem];

					break;
				}
			}

		} else {

			window.currentHeroObjPIXI = {};
		}

		if (!heroObj.currentAnim) {

			heroObj.currentAnim = new PIXI.extras.RoleAnimation(rolesNameJson[rolesInfo[i].id]);
			//heroObj.currentAnim = new PIXI.extras.RoleAnimation("魂白鸽");
			window.currentHeroObjPIXI[rolesNameJson[rolesInfo[i].id]] = heroObj.currentAnim;
		}

		//设置切片动画的坐标点
		var size = heroObj.currentAnim.getSize();

		heroObj.currentAnim.position.x = size.width * 0.5;

		heroObj.currentAnim.position.y = size.height * 0.5;

		//压入到空白对象里面
		heroObj.currentSprite.addChild(heroObj.currentAnim);

		//设置动作
		heroObj.currentAnim.setAction("待机");

		//设置方向
		heroObj.currentAnim.setDirection(5);

		heroObj.setSize(size);

		game.scripts["al_scr_sceneSetHeroInfo"](null, null, heroObj, rolesInfo[i]);

		current_scene.vars_.heroObjArr.push(heroObj);

		//换装
		game.scripts["al_scr_changeObjModel"](null, null, rolesInfo[i], heroObj);

	}







	window.container = new PIXI.Container();
	RoleAnimation.rootFolder = "/qiyun/lxjt_roleanim/";
	roleAnimation = new RoleAnimation("男法师");
	roleAnimation.setAction("攻击");
	roleAnimation.setCostume(1).setWeapon(1).setDirection(3);
	roleAnimation.setPosition(150, 150);
	container.addChild(roleAnimation);






	// 王城霸主挑战回调     onRespResult59

	create_enemyBossInfo

	main_sceneBattleInfoInit


	//onRespFlushOverlordInfo       game.vars_.oneplus

	createEnemyBoss// 报错



	//刷新技能CD
	for (var i = 0; i < self.vars_.skillList.length; i++) {

		if (self.vars_.skillList[i] > 0) {

			if (self.vars_.skillCdList[i] > 0) {

				self.vars_.skillCdList[i] -= 0.1;

				if (self.vars_.skillCdList[i] <= 0) {

					self.vars_.skillCdList[i] = 0;
				}
			}

		}
	}

	//筛选当前技能
	if (self.vars_.currentSkillIndex == 0) {

		//四次第一技能释放完毕
		if (self.vars_.currentSkillNum == 4) {

			//如果上次释放的技能未激活成功
			if (!self.vars_.oldSkillID) {

				//是否激活技能2
				if (self.vars_.skillList[self.vars_.currentSkillIndex + 1] > 0 && self.vars_.skillCdList[self.vars_.currentSkillIndex + 1] == 0) {

					self.vars_.currentSkillIndex++;

					//重新释放第一个技能
				} else {

					self.vars_.currentSkillIndex = 0;

					self.vars_.currentSkillNum = 0;
				}

			} else {

				if (self.vars_.oldSkillID < 4) {

					//是否激活更高级的技能
					if (self.vars_.skillList[self.vars_.oldSkillID + 1] > 0 && self.vars_.skillCdList[self.vars_.oldSkillID + 1] == 0) {

						self.vars_.currentSkillIndex = self.vars_.oldSkillID + 1;

						//重新释放第一个技能
					} else {

						self.vars_.currentSkillIndex = 0;

						self.vars_.currentSkillNum = 0;

						self.vars_.oldSkillID = null;
					}

				} else {

					self.vars_.currentSkillIndex = 0;

					self.vars_.currentSkillNum = 0;

					self.vars_.oldSkillID = null;
				}
			}

			self.vars_.currentSkillID = self.vars_.skillIDList[self.vars_.currentSkillIndex];
		}

		//如果上次释放的不是第一个技能	
	} else {

		//如果技能已释放完成,重复释放四次第一个技能
		if (self.vars_.currentSkillNum == 0) {

			self.vars_.currentSkillIndex = 0;

			self.vars_.currentSkillID = self.vars_.skillIDList[self.vars_.currentSkillIndex];
		}
	}






	var _grouArr = ['grou_guide_LockIcon', 'grou_guide_NewFunctionOpen', 'grou_guide_arrow', 'grou_guide_dialogue',
		'grou_guide_jiantou_1', 'grou_guide_step', 'grou_guide_stepdialog', 'grou_newguideinfo'];
	_grouArr.forEach(function (e) {
		//qyengine.guardId(e).destroy();
		if (qyengine.getInstancesByType(e).length > 0) {
			qyengine.guardId(e).destroy();
		}
	});



	game.configs.mission[taskInfo[repeatTime].missionid]


	grou_crossFightResult.objects['txt_crossFightResultBack'].dispatchMessage({
		"type": "message",
		"message": "stopCountDown"
	});
	grou_crossFightResult.destroy();






	game.vars_.inArena = false;

	game.vars_.backScenePopUI = "reopenStarUpScene"; game.vars_.backScenePopUI = "reopenStoneScene";
	game.vars_.backScenePopUI = "OpenWingPanel"; game.vars_.backScenePopUI = "taskSkipInterface";

	qyengine.instance_destroy(grou_crossFightResult);


	current_game.scripts['al_scr_' + "main_sceneBattleInfoInit"].call(this, undefined, this);




	game.vars_.inArena = false;
	game.vars_.backScenePopUI = "reopenStarUpScene";
	qyengine.instance_destroy(grou_crossFightResult);
	current_game.scripts['al_scr_' + "main_sceneBattleInfoInit"].call(this, undefined, this);




	//grou_crossServerFightReward_item_cell  (21,39)


	//创建跨服竞技场的奖励
	qyengine.getInstancesByType("grou_crossServerFightReward").length == 0 && qyengine.instance_create(-100, 0, "grou_crossServerFightReward", {
		"type": "grou_crossServerFightReward",
		"id": "grou_crossServerFightReward",
		"zIndex": 5,
		"layer": "layer_headerfeet",
		"scene": "main_scene"
	});

	//grou_crossServerFightReward的创建事件
	grou_crossServerFightReward.vars_.nowTab = 0; //现在显示的是排名奖励
	self.objects['obj_通用_选择框_01_crossFight'].dispatchMessage({
		"type": "message",
		"message": "changeTab"
	});

	//changeTab消息中内容
	self.changeSprite("obj_通用_选择框_02_crossFight_default");
	game.configs.config_crossFightReward = {};
	if (scro_crossServerFightReward.isVisible) {
		scro_crossServerFightReward.cells = [];
		scro_crossServerFightReward.currentSprite.moving_.removeChildren();
		scro_crossServerFightReward.removeAll();
	}
	var rangingDataLength = grou_crossServerFightReward.vars_.nowTab == 1 ? configDataLength("pk_rank_score") : configDataLength("pk_rank_reward");
	for (var i = 1; i <= rangingDataLength; i++) {
		var name = grou_crossServerFightReward.vars_.nowTab == 1 ? game.configs.pk_rank_score[i].name : game.configs.pk_rank_reward[i].name;
		game.configs.config_crossFightReward[i] = {
			id: i,
			ranking: game.configs.pk_rank_reward[i].name,
			scroId: "scroranking_" + i
		}
	}
	scro_crossServerFightReward.refreshRelations();
	//scro_crossServerFightReward_item的创建事件
	var markId = self.id.split("_")[1];
	markId = Number(markId);
	var _info = 0,
		index = 0,
		pic = "",
		num = 0,
		itemObj = null;

	if (qyengine.getInstancesByType('grou_crossServerFightReward').length > 0 && qyengine.getInstancesByType('grou_crossServerFightReward')[0].vars_ && grou_crossServerFightReward.vars_.nowTab) {  //段位奖励
		_info = game.configs.pk_rank_score[markId];
		var markSilver = Number(_info.silver);
		if (markSilver) {
			pic = "obj_通用_银子_crossServerFight_default";
			num = markSilver;
			itemObj = createItemOrBox(index);
			self.appendChild(itemObj.id, 21, 39, 0, index, false, true);
			itemObj.objects['obj_通用_金子'].changeSprite(pic);
			itemObj.objects['txt_crossFightRewardNum'].text = num;
			index++;
		}
	} else {                      //排名奖励
		_info = game.configs.pk_rank_reward[markId];
		var markGold = Number(_info.gold);
		if (markGold) {
			pic = "obj_通用_金子_default";
			num = markGold;
			itemObj = createItemOrBox(index);
			self.appendChild(itemObj.id, 21, 39, 0, index, false, true);
			itemObj.objects['obj_通用_金子'].changeSprite(pic);
			itemObj.objects['txt_crossFightRewardNum'].text = num;
			index++;
		}
	}
	if (_info.reward) {
		var itemArr = _info.reward.split(";");
		for (cell in itemArr) {
			var itemIdAndNum = itemArr[cell].split("|");
			var itemId = Number(itemIdAndNum[0]);
			pic = "obj_" + game.configs.item[itemId].icon + "_default";
			num = Number(itemIdAndNum[1]);
			itemObj = createItemOrBox(index);
			self.appendChild(itemObj.id, 21, 39, 0, index, false, true);
			itemObj.objects['obj_通用_金子'].changeSprite(pic);
			itemObj.objects['obj_通用_金子'].setScale(0.6, 0.6);
			itemObj.objects['txt_crossFightRewardNum'].text = num;
			index++
		}
	}
	if (_info.box != -1) {
		itemArr = _info.box.split("|");
		itemId = Number(itemArr[0]);
		pic = "obj_" + game.configs.box[itemId].icon + "_default";
		num = Number(itemArr[1]);
		itemObj = createItemOrBox(index);
		itemObj.objects['obj_通用_金子'].changeSprite(pic);
		itemObj.objects['txt_crossFightRewardNum'].text = num;
		index++;
	}


	function createItemOrBox(index) {
		//var temp={"id":1,"num":1,isSilver};
		var itemObj = qyengine.instance_create(0, 0, "grou_crossServerFightReward_item_cell", {
			"type": "grou_crossServerFightReward_item_cell",
			"id": "grou_crossServerFightReward_item_cell" + index,
			"zIndex": 5
		});
		return itemObj;
	}


	//tab按钮的点击事件
	if (self.vars_.buttonType == grou_crossServerFightReward.vars_.nowTab) {
		return;
	}
	if (self.vars_.buttonType == 1) {
		grou_crossServerFightReward.vars_.nowTab = 1; //现在显示的是段位
		grou_crossServerFightReward.objects['obj_通用_选择框_01_crossFight_1'].dispatchMessage({
			"type": "message",
			"message": "changeTab"
		});
		grou_crossServerFightReward.objects['obj_通用_选择框_01_crossFight'].changeSprite("obj_通用_选择框_01_crossFight_default");
	} else {
		grou_crossServerFightReward.vars_.nowTab = 0; //现在显示的是排名奖励
		grou_crossServerFightReward.objects['obj_通用_选择框_01_crossFight'].dispatchMessage({
			"type": "message",
			"message": "changeTab"
		});
		grou_crossServerFightReward.objects['obj_通用_选择框_01_crossFight_1'].changeSprite("obj_通用_选择框_01_crossFight_default");
	}



	current_game.scripts['al_scr_' + "createCrossFightReward"].call(this, undefined, this);






	qyengine.getInstancesByType("grou_crossServerFightReward_item").length > 0 && qyengine.forEach(function () {
		this.destroy();
	}, "grou_crossServerFightReward_item");
	qyengine.getInstancesByType("grou_crossServerFightReward_item_cell").length > 0 && qyengine.forEach(function () {
		this.destroy();
	}, "grou_crossServerFightReward_item_cell");


	try {

	} catch (error) {
		console.log(error.message);
	}



	current_game.scripts["al_scr_" + 'actionlist_createLoadingCircle'] && current_game.scripts["al_scr_" + 'actionlist_createLoadingCircle'].call(this, undefined, this);
	KBEngine.app.player().baseCall("reqCrossServerJJC");






	KBEngine.app.player().baseCall("reqCrossServerShop");


	current_game.scripts["al_scr_" + "actionlist_destroyLoadingCircle"].call(this, undefined, this);



	arena_shop_cur_honor.text = KBEngine.app.player().sportHonor;

	//威望值
	game.vars_.userInfo.prestigeNum = data[1];


	arena_shop_cur_honor.text = game.vars_.userInfo.prestigeNum;




	if (grou_arena.vars_.nowFightType == 1) {
		self.objects['obj_竞技场商店_竞技场商店标题'].changeSprite("obj_跨服竞技商店_字_default");
		grou_arena_shop.objects['obj_通用_荣誉_1'].changeSprite("obj_威望_字_default");
		arena_shop_cur_honor.text = game.vars_.userInfo.prestigeNum;

	}

	//更新威望值的消息      updatePrestigeNum

	qyengine.getInstancesByType('grou_arena_shop').length > 0 && grou_arena_shop.dispatchMessage({
		"type": "message",
		"message": "updatePrestigeNum"
	});


	getConfig("shop_pk_rank", self.vars_.item_id, "price")

	if (grou_arena.vars_.nowFightType == 1) {
		grou_arena_shop_buy.objects['obj_通用_荣誉_2'].changeSprite("obj_威望_字_default");
	}


	if (grou_arena.vars_.nowFightType == 1) {
		arena_shop_buy_honor.text = grou_arena_shop_buy.vars_.count * getConfig("shop_pk_rank", arena_shop_buy_btn.vars_.item_id, "price");

	} else {
		arena_shop_buy_honor.text = grou_arena_shop_buy.vars_.count * getConfig("shop_pk", arena_shop_buy_btn.vars_.item_id, "price");
	}




	//弹窗
	game.scripts["al_scr_AddTip_1"](null, null, "金币购买成功", "layer1");

	current_game.scripts['al_scr_' + "CreateSevenTarget"].call(this, undefined, this);
	current_game.scripts['al_scr_' + "JudgeSevenTargetShowAndHide"].call(this, undefined, this);


	//ShareIngBasePanel

	//obj_Main_interface_qirimubiao_fanye_1  左右方向的点击事件

	if (!grou_sevenTargetMain.vars_.nowTab) {
		grou_sevenTargetMain.vars_.nowTab = 1;
	}
	//记录下一个Tab
	var tempTab = 0;
	if (self.vars_.buttonType == "left") {
		if (grou_sevenTargetMain.vars_.nowTab == 1) {
			return;
		}
		tempTab = grou_sevenTargetMain.vars_.nowTab - 1;
		if (judgeIsLock()) {
			return;
		}
		//显示选中的红框 
		qyengine.forEach(function () {
			this.dispatchMessage({
				"type": "message",
				"message": "selectShow",
				"argument0": false
			});
		}, "grou_sevenTarget_item");
		grou_sevenTargetMain.vars_.nowTab--;
	} else {
		if (grou_sevenTargetMain.vars_.nowTab >= 7) {
			return;
		}
		tempTab = grou_sevenTargetMain.vars_.nowTab + 1;
		if (judgeIsLock()) {
			return;
		}
		//显示选中的红框 
		qyengine.forEach(function () {
			this.dispatchMessage({
				"type": "message",
				"message": "selectShow",
				"argument0": false
			});
		}, "grou_sevenTarget_item");
		grou_sevenTargetMain.vars_.nowTab++;
	}
	qyengine.guardId("obj_Main_interface_qirimubiao_fanye_1").scrollerTo && qyengine.guardId("obj_Main_interface_qirimubiao_fanye_1").scrollerTo(0, grou_sevenTargetMain.vars_.nowTab);
	//显示选中的红框 
	qyengine.forEach(function () {
		this.dispatchMessage({
			"type": "message",
			"message": "selectShow",
			"argument0": true
		});
	}, "grou_sevenTarget_item");
	grou_sevenTargetMain.dispatchMessage({
		"type": "message",
		"message": "refreshData"
	});
	function judgeIsLock() {
		var tempGrouArr = qyengine.getInstancesByType("grou_sevenTarget_item");
		for (var i = 0; i < tempGrouArr.length; i++) {
			if (tempGrouArr[i].vars_.day == tempTab && tempGrouArr[i].vars_.isHide) {
				return true;
			}
		}
		return false;
	}
	//obj_Main_interface_qirimubiao_bt_01  切换天数的点击事件
	if (self.vars_.lock == 1) {
		game.scripts["al_scr_AddTip_1"](null, null, "第" + self.vars_.day + "天开启，敬请期待", "layer1");
		return;
	}
	if (self.vars_.day == grou_sevenTargetMain.vars_.nowTab) {
		return;
	}
	qyengine.forEach(function () {
		this.dispatchMessage({
			"type": "message",
			"message": "selectShow",
			"argument0": false
		});
	}, "grou_sevenTarget_item");
	grou_sevenTargetMain.vars_.nowTab = self.vars_.day;
	self.currentSprite.parent.qyobj.objects['obj_Main_interface_qirimubiao_bt_01_1'].show();
	grou_sevenTargetMain.dispatchMessage({
		"type": "message",
		"message": "refreshData"
	});
	//创建7日目标的界面  CreateSevenTarget
	function backDate(secondsNum) {
		var date = new Date(secondsNum * 1000);
		var year = date.getFullYear();
		var month = date.getMonth() + 1;
		var day = date.getDate();
		console.log(secondsNum, year, month, day);
		return [year, month, day];
	};
	function callBack_seven() {   //1未完成  2可领取   3已领取
		game.configs.config_sevenTarget_bang = {};
		if (qyengine.getInstancesByType("grou_sevenTargetMain").length > 0) {
			grou_sevenTargetMain.show();
			grou_obj = qyengine.guardId("grou_sevenTargetMain");
		} else {
			qyengine.instance_create(15, 0, "grou_sevenTargetMain", {
				"type": "grou_sevenTargetMain",
				"id": "grou_sevenTargetMain",
				"zIndex": 9,
				"layer": "layer0"
			});
		}
		console.log("七日目标:", arguments);
		var receive_data = arguments[2];
		//receive_data.start_time		
		//receive_data.over_time
		var start_time = backDate(receive_data.start_time);
		var over_time = backDate(receive_data.over_time);
		var start_time_word = "活动日期：" + start_time[0] + "年" + start_time[1] + "月" + start_time[2] + "日" + "-";
		var over_time_word = over_time[0] + "年" + over_time[1] + "月" + over_time[2] + "日";
		grou_sevenTargetMain.objects['txt_sevenTarget_common_day'].text = start_time_word + over_time_word;
		if (receive_data.code == 200) {
			grou_sevenTargetMain.vars_.server_data = receive_data.info;
			grou_sevenTargetMain.vars_.progress = receive_data.progress;
			grou_sevenTargetMain.vars_.progress_item = receive_data.taskinfo;
			var grou_obj = qyengine.guardId("grou_sevenTargetMain");
			//更新tab  更新reward和领取情况
			grou_obj.vars_.nowTab = 1;
			grou_obj.objects["scro_sevenTarget"].dispatchMessage({
				"type": "message",
				"message": "refreshData"
			});
			grou_obj.dispatchMessage({
				"type": "message",
				"message": "refreshData"
			});
		} else {
			game.scripts["al_scr_AddTip_1"](null, null, "网络异常", "layer1");
		}
		game.scripts["al_scr_gameloadDestroy"](null, null);
	}
	var grou_obj = null;
	game.scripts["al_scr_gameloadCreate"](null, null);
	QyRpc.get_user_seven(callBack_seven);

	//scro_sevenTarget 的消息事件
	var canGetDay = 7;
	var lockSprite = ["obj_Main_interface_qirimubiao_bt_01_default", "obj_Main_interface_qirimubiao_bt_02_default"];
	var grou_obj = qyengine.guardId("grou_sevenTargetMain");
	for (var i = 1; i <= canGetDay; i++) {
		var lock = 1;  //1 是锁的 0是未被锁的
		var pick_lick = "";
		if (i > grou_obj.vars_.progress) {
			lock = 1;
		} else {
			lock = 0;
		}
		//isHide文字是否隐藏的变量
		game.configs.config_sevenTarget_bang[1] = {
			"id": i,
			"day": i,
			"lock": lock,
			"pic_lock": lockSprite[lock],
			"isHide": lock == 1 ? 1 : 0,
			"showText": lock == 1 ? "" : ("第" + i + "天"),
			"markConfigId": i
		};
	}
	grou_obj.objects["scro_sevenTarget"].refreshRelations();
	//显示选中的红框 
	qyengine.forEach(function () {
		this.dispatchMessage({
			"type": "message",
			"message": "selectShow",
			"argument0": true
		});
	}, "grou_sevenTarget_item");
	/**
	 * grou_sevenTarget_item下的selectShow  消息事件
	 */
	if (self.vars_.day == grou_sevenTargetMain.vars_.nowTab) {
		if (event.argument0) {
			self.objects["obj_Main_interface_qirimubiao_bt_01_1"].show();
		} else {
			self.objects["obj_Main_interface_qirimubiao_bt_01_1"].hide();
		}
	}
	/**
	 * grou_sevenTargetMain下的消息事件
	 */
	var selectDay = self.vars_.nowTab;
	var config_obj = game.configs.seven;
	//计数 >3   return 
	var _index = 0;
	//先隐藏防止切换出错
	for (var _a = 0; _a < 3; _a++) {
		for (var _b = 0; _b < 3; _b++) {
			self.objects["obj_Main_interface_qirimubiao_icon" + _a + "_" + _b].hide();
			if (_b == 2) {
				self.objects['txt_sevenTarget_rewardNum' + _a + "_" + _b].hide();
			}
		}
	}
	for (item in config_obj) {
		if (config_obj[item].day == selectDay) {
			ReChangeSprite(config_obj[item], _index, item);
			//三个领取 按钮的状态
			getRewardButtonStatus(_index);
			qyengine.guardId("obj_Fate_interaction_bt_05_seven" + _index).vars_.markId = item;
			//次日奖励
			if (_index == 0) {
				NextDayReward(config_obj[item]);
			}
			if (++_index >= 3) {
				break;
			}
		}
	}



	function getRewardButtonStatus(markWhichIndex) {
		//1前往  2领取  3已领取
		var markStatus = self.vars_.server_data[selectDay][markWhichIndex];
		switch (markStatus) {
			case 1:
				self.objects['obj_Fate_interaction_bt_05_seven' + (markWhichIndex)].changeSprite("obj_Fate_interaction_bt_06_seven_default");
				self.objects['obj_Main_interface_qirimubiao_bt_03_' + (markWhichIndex)].changeSprite("obj_Main_interface_qirimubiao_bt_04_default");
				self.objects['obj_Main_interface_qirimubiao_bt_03_' + (markWhichIndex)].show();
				self.objects['obj_Fate_interaction_bt_05_seven' + (markWhichIndex)].show();
				break;
			case 3:
				//obj_Bg_Active_interface_Already_receive
				self.objects['obj_Fate_interaction_bt_05_seven' + (markWhichIndex)].changeSprite("obj_Bg_Active_interface_Already_receive_default");
				self.objects['obj_Main_interface_qirimubiao_bt_03_' + (markWhichIndex)].hide();
				self.objects['obj_Fate_interaction_bt_05_seven' + (markWhichIndex)].show();
				break;
			default:
				self.objects['obj_Main_interface_qirimubiao_bt_03_' + (markWhichIndex)].show();
				self.objects['obj_Main_interface_qirimubiao_bt_03_' + (markWhichIndex)].changeSprite("obj_Main_interface_qirimubiao_bt_03_default");
				self.objects['obj_Fate_interaction_bt_05_seven' + (markWhichIndex)].changeSprite("obj_Fate_interaction_bt_05_seven_default");
				self.objects['obj_Fate_interaction_bt_05_seven' + (markWhichIndex)].show();
				break;
		}
		self.objects['obj_Fate_interaction_bt_05_seven' + (markWhichIndex)].vars_.buttonStatus = markStatus;
	}
	//次日奖励的展示
	function NextDayReward(ItemData) {

		if (ItemData.tomorrow == -1) {
			self.objects["obj_Show_dress_25068_seven"].hide();
			self.objects['txt_sevenTarget_common_2'].text = "" + ItemData.tomorrow_dec;
			self.objects['txt_sevenTarget_common_3'].hide();
			return;
		} else {
			self.objects["obj_Show_dress_25068_seven"].changeSprite("obj_" + ItemData.tomorrow + "_default");
			self.objects['txt_sevenTarget_common_2'].text = ItemData.tomorrow_dec.split(ItemData.name)[0] + "<font  color='#ff0000'>" + ItemData.name + "</font>";
			self.objects["obj_Show_dress_25068_seven"].show();
			//self.objects['txt_sevenTarget_common_3'].text = ItemData.name;
		}
		grou_sevenTargetMain.objects['txt_sevenTarget_common_4'].hide();

	}
	function ReChangeSprite(config_obj_item, which_index, _item) {
		var condition = config_obj_item.condition.split("|");
		var reward_obj = config_obj_item.reward.split(";");
		var parent_obj = grou_sevenTargetMain.objects;
		var titleText = "";
		switch (Number(condition[0])) {
			case 1:
				titleText = "通关剧情" + "(" + game.configs.quest[condition[1]].name.split("(")[1];
				//getStroyId
				var markStoryConfigId = 0;
				for (var _item in game.configs.story) {
					if (game.configs.story[_item].chapterId == game.configs.quest[condition[1]].storyId) {
						markStoryConfigId = _item;
						break;
					}
				}
				qyengine.guardId("obj_Fate_interaction_bt_05_seven" + which_index).vars_.argument0 = markStoryConfigId;
				break;
			case 12:
				qyengine.guardId("obj_Fate_interaction_bt_05_seven" + which_index).vars_.argument0 = Number(condition[1]);
			default:
				var temp_config = game.configs.config_sevenTarget_taskType[Number(condition[0])];
				if (temp_config.dec.indexOf("%s") == -1) {
					titleText = temp_config.dec;
				} else {
					titleText = temp_config.dec.replace("%s", "" + condition[1]);
					//增加有进度任务的完成的进度
					titleText = titleText + "(" + self.vars_.progress_item[condition[0]] + "/" + condition[1] + ")";
					//记录完成单个任务需要的次数
					qyengine.guardId("obj_Fate_interaction_bt_05_seven" + which_index).vars_.conditionTotalNum = Number(condition[1]);
				}
				break;
		}
		parent_obj["txt_sevenTarget_common_reward" + which_index].text = titleText;
		qyengine.guardId("obj_Fate_interaction_bt_05_seven" + which_index).vars_.conditionId = Number(condition[0]);

		//1物品2服装3设计图4背景5礼物|编号|数量
		for (_cell in reward_obj) {
			var children_obj = reward_obj[_cell].split("|");
			var children_obj_date = BackPicAndNum(children_obj);
			var iconObj = parent_obj["obj_Main_interface_qirimubiao_icon" + which_index + "_" + _cell];
			iconObj.show();
			iconObj.changeSprite(children_obj_date[0]);
			//图纸需要缩放
			if (children_obj_date.length > 2) {
				iconObj.setScale(children_obj_date[2][0], children_obj_date[2][1])
			} else {
				iconObj.setScale(1, 1);
			}

			parent_obj["txt_sevenTarget_rewardNum" + which_index + "_" + _cell].text = children_obj_date[1];
			parent_obj["txt_sevenTarget_rewardNum" + which_index + "_" + _cell].show();
		}
	}
	function BackPicAndNum(reward_child) {
		var needBackArr = [];
		var configsArr = [0, game.configs.prop, game.configs.fashion, game.configs.fashionPlan, game.configs.bg, game.configs.hero_gift];
		var switch_value = Number(reward_child[0]);
		switch (switch_value) {
			case 1:
				needBackArr[0] = "obj_" + configsArr[1][reward_child[1]].smallIcon + "_default";
				break;
			case 3:   //图纸需要缩放
				needBackArr[2] = [0.5, 0.5];
			case 5:
				needBackArr[0] = "obj_" + configsArr[switch_value][reward_child[1]].icon + "_default";
				break;
			case 2:
			case 4:
				needBackArr[0] = "obj_" + configsArr[switch_value][reward_child[1]].sicon + "_default";
				break;
			default:
				console.error("出现了错误");
				break;
		}
		needBackArr[1] = Number(reward_child[2]);
		return needBackArr;
	}

	/**
	 * JudgeSevenTargetShowAndHide  动作序列,判断7日目标按钮的隐藏和显示
	 */
	function callBack_show() {
		//console.log(arguments);
		if (arguments[1] && arguments[2].code == 200) {
			arguments[2].flg && self.show();
		} else {
			console.error("请求错误~需要查看");
		}
	}
	QyRpc.seven_show(callBack_show);

	/**
	 * 七日目标领取按钮的事件
	 */
	if (self.vars_.buttonStatus == 3) {  //已经领取
		return;
	}
	if (self.vars_.buttonStatus == 1) {  //前往
		if (self.vars_.conditionId == 1 || self.vars_.conditionId == 12) {
			var needAction = game.configs.config_sevenTarget_taskType[self.vars_.conditionId].action0;
			current_game.scripts['al_scr_' + needAction].call(this, undefined, this, self.vars_.argument0);

		} else {
			var needAction = game.configs.config_sevenTarget_taskType[self.vars_.conditionId].action0;
			current_game.scripts['al_scr_' + needAction].call(this, undefined, this);
		}


	} else if (self.vars_.buttonStatus == 2) {
		game.scripts["al_scr_gameloadCreate"](null, null);

		function sign_callBack() {

			if (arguments[1]) {  //领取成功
				self.changeSprite("obj_Bg_Active_interface_Already_receive_default");
				var lastPlaceNum = self.id.slice(self.id.length - 1, self.id.length);
				//领取过后隐藏图标更改数据F
				qyengine.guardId("obj_Main_interface_qirimubiao_bt_03_" + lastPlaceNum).hide();
				grou_sevenTargetMain.vars_.server_data[grou_sevenTargetMain.vars_.nowTab][Number(lastPlaceNum)] = 3;
				//弹出领取奖励  改变部分奖励的数量
				calRewardAndShow();
			}
			if (!arguments[1] || arguments[2].code != 200) {
				game.scripts["al_scr_AddTip_1"](null, null, "领取失败", "layer1");
			}
			game.scripts["al_scr_gameloadDestroy"](null, null);
		}
		QyRpc.seven_sign(self.vars_.markId, sign_callBack);
	}
	//计算奖励展示,并且改变数量
	function calRewardAndShow() {
		var rewardAllType = game.configs.seven[self.vars_.markId].reward.split(";");
		game.vars_.dropList = [];
		for (cell in rewardAllType) {
			var type_id_num = rewardAllType[cell].split("|");
			game.vars_.dropList[cell] = {};
			game.vars_.dropList[cell].type = Number(type_id_num[0]);
			game.vars_.dropList[cell].id = Number(type_id_num[1]);
			game.vars_.dropList[cell].num = Number(type_id_num[2]);
			if (game.vars_.dropList[cell].type == 2) {
				var isOwn = !(game.vars_.bagList.cloth[game.vars_.dropList[cell].id] == undefined);
				game.vars_.dropList[cell].isOwn = isOwn;
			}
			if (game.vars_.dropList[cell].type == 3) {
				var isOwn = !(game.vars_.bagList.plan[game.vars_.dropList[cell].id] == undefined);
				game.vars_.dropList[cell].isOwn = isOwn;
			}
			if (game.vars_.dropList[cell].type == 4) {
				var isOwn = !(game.vars_.playInfoJson.bgMap.maps[game.vars_.dropList[cell].id] == undefined);
				game.vars_.dropList[cell].isOwn = isOwn;
			}
			if (game.vars_.dropList[cell].type == 5) {
				var isOwn = !(game.vars_.playInfoJson.hero_gift[game.vars_.dropList[cell].id] == undefined);
				game.vars_.dropList[cell].isOwn = isOwn;
			}
		}
		current_game.scripts['al_scr_' + "AddToBag"].call(this, undefined, this, game.vars_.dropList);
		//InitAwardBg
		current_game.scripts['al_scr_' + "InitAwardBg"].call(this, undefined, this, game.vars_.dropList, 'layer1');
	}











	//ExperienceVolumeEvent   动作序列
	qyengine.getInstancesByType("grou_experienceTips").length == 0 && qyengine.instance_create(50, 0, "grou_experienceTips", {
		type: "grou_experienceTips",
		id: "grou_experienceTips",
		zIndex: 10
	});
	grou_experienceTips.show();

	//obj_Main_interface_qirimubiao_bt_10  转化钻石的点击事件   al_scr_InitAwardBg
	if (game.vars_.playInfoJson.vipLevel) {
		game.scripts["al_scr_gameloadCreate"](null, null);
		function convert_callBack() {
			if (arguments[1]) {
				qyengine.getInstancesByType("grou_experienceTips").length > 0 && grou_experienceTips.destroy();
				game.vars_.dropList = [];

				game.vars_.dropList[0] = { "type": 1, 'id': 101, "num": game.vars_.playInfoJson.vipJuan * 20 };
				game.vars_.playInfoJson.stone += game.vars_.playInfoJson.vipJuan * 20;
				qyengine.getInstancesByType("grou_experienceBg").length > 0 && qyengine.getInstancesByType("grou_experienceBg")[0].hide();
				game.vars_.playInfoJson.vipJuan = 0;
				game.scripts["al_scr_InitAwardBg"](null, null, game.vars_.dropList, "layer0", 10, false);
			} else {
				console.error("有问题,需要查看");
			}
			game.scripts["al_scr_gameloadDestroy"](null, null);
		}
		QyRpc.vipquan_stone(convert_callBack);
	} else {    //暂时不是vip
		game.scripts["al_scr_AddTip_1"](null, null, "VIP玩家才能将体验券转化为钻石哦~", "layer1");
	}

	//得到体验券的数量~~~  getVipQuanNum


	function quan_callBack() {
		console.log(arguments);
		if (arguments[1]) {
			game.vars_.playInfoJson.vipJuan = arguments[2].num;
			if (qyengine.getInstancesByType("grou_experienceBg").length > 0) {
				grou_experienceBg.objects['txt_experience'].text = "x" + game.vars_.playInfoJson.vipJuan;
			}
		} else {
			console.error("错误，需要查看");
		}
	}
	QyRpc.get_vipquan(quan_callBack);

	//使用体验卷购买服装
	if (!qyengine["grou_vipQuanUsePop"]) {
		qyengine["grou_vipQuanUsePop"] = qyengine.instance_create(50, 0, "grou_vipQuanUsePop", {
			"type": "grou_vipQuanUsePop",
			"id": "grou_vipQuanUsePop",
			"zIndex": 10
		});
	} else {
		qyengine["grou_vipQuanUsePop"].show();
	}
	var needStone = getConfig("toggeryVip", grou_shopPanel.vars_.itemId, "price");
	var stoneIconPath = gmx_[gmx_.obj_Icon_goods_1.defaultOpt.sprite].defaultOpt.fill;
	var imageW = " width = '35'";
	var imageH = " height = '31'";
	var textShow = "你是非VIP玩家，是否消耗体验券+" +
		"<img src='" + stoneIconPath + "'" + imageW + imageH + "></img>" + needStone + "购买服装?(充值6元即可" + "<font  color='#fa0505'>" + "永久不限次" + "</font>" +
		"购买折扣商店服装哦~）";
	grou_vipQuanUsePop.objects['txt_vipQuanUse'].text = textShow;
	qyengine["grou_vipQuanUsePop"].objects['obj_Icon_Active_duanwujie_tankuan_022_vipQuan'].vars_.needStone = needStone;


	//obj_Icon_Active_duanwujie_tankuan_022_vipQuan   购买事件
	if (game.vars_.playInfoJson.stone > self.vars_.needStone) {

	} else {
		game.scripts["al_scr_AddTip_1"](null, null, "钻石不足", "layer1");
	}




	current_game.scripts['al_scr_' + "RefreshPowerGoldStoneText"].call(this, undefined, this);




	//grou_wheel的创建事件
	var luckywheelData = game.configs.luckywheel_lottery;
	var itemData = game.configs.items;
	for (_cell in luckywheelData) {
		var getItemId = luckywheelData[_cell].reward.split('|')[0];
		var getItemNum = luckywheelData[_cell].reward.split('|')[1];
		var getItenIcon = itemData[getItemId].icon;
		self.objects['obj_CrabLarvaN_1_' + _cell].changeSprite("obj_" + getItenIcon + "_default");
		self.objects['txt_luckWheelItemNum_' + (Number(_cell) - 1)].text = getItemNum;
	}

	//大转盘开始的点击事件
	//30 * 12
	//2.5 * 2 * 6 * 12
	var needStopPlace = random_range(1, 12);
	var rotationRateNum = 5;
	var needAngle = -(15 + 30 * (needStopPlace - 1) + 360 * rotationRateNum);
	var timeOutObj = setInterval(function () {
		var rotationObj = grou_wheel.objects['obj_Icon_Activity_Arrow'];
		rotationObj.setRotation(rotationObj.getRotation() - 2.5);
		if (rotationObj.getRotation() <= needAngle) {
			clearInterval(timeOutObj);
			var xxx = Math.floor(rotationObj.getRotation() / (-360));
			rotationObj.setRotation(rotationObj.getRotation() + xxx * 360);
		}
	}, 1000 * 0.005);
	//点击 成为vip按钮

	if (game.vars_.userInfo.vip_flg == 1) {
		current_game.scripts['al_scr_' + "createCommonToast"].call(this, undefined, this, null, "您已经是VIP！");
	} else {
		current_scene.vars_.needOpenTab = 5;
		current_game.scripts['al_scr_' + "createShop"].call(this, undefined, this);
	}
	// grou_cultivationKing  的创建事件
	game.configs.config_cultivationKing = {};
	var breedCrabData = game.configs.breedcrab_reward;
	var itemData = game.configs.items;
	for (_cell in breedCrabData) {
		var _data = breedCrabData[_cell].reward.split("|");
		var _data_num = Number(_data[1]);
		var _data_name = itemData[_data[0]].name;
		game.configs.config_cultivationKing[_cell] = {
			"id": _cell,
			"targetNum": breedCrabData[_cell].totalcrab + "只",
			"rewardName": _data_name + "x" + _data_num,
			"markId": Number(_cell)
		};
	}
	scro_cultivationKing.refreshRelations();





	game.vars_.friendITouchItemUser

	/**
	 * 玩家互动接口
	 * channelMsg_interact
	 * gid 数据库user字段
	 * msgId  1:亲密度超过好友  2：和闺蜜合影  3：好友发送弹幕  4：宠物快饿死了
	 */
	if (game.vars_.friendsRank[i].Faver >= 10) {
		current_game.scripts['al_scr_' + "channelMsg_interact"].call(this, undefined, this, game.vars_.friendITouchItemUser, 2);
	}
	//grou_oneKeyGet


	//第一次进入游戏获取好友信息  EnterGameGetFriendInfo






	/**
	 * 玩家互动接口
	 * channelMsg_interact
	 * gid 数据库user字段
	 * msgId  1:亲密度超过好友  2：和闺蜜合影  3：好友发送弹幕  4：宠物快饿死了
	 */
	if (/*game.vars_.friendsRank[i].Faver >= 10*/arguments[2].favorFlag == 9) {
		current_game.scripts['al_scr_' + "channelMsg_interact"].call(this, undefined, this, game.vars_.friendITouchItemUser, 2);
	}


	//obj_fate_pet_bt_jiasu_auto  清除CD的点击事件


	if (qyengine['grou_clearCoolTime']) {
		qyengine['grou_clearCoolTime'].show();
	} else {
		qyengine['grou_clearCoolTime'] = qyengine.instance_create(110, 0, "grou_clearCoolTime", {
			"type": "grou_clearCoolTime",
			"id": "grou_clearCoolTime",
			"zIndex": 9,
			"layer": "layer0"
		});
		//game.configs.pet_money
		var parent_obj = self.currentSprite.parent.qyobj;
		var markSelectId = parent_obj.select_id;
		//需要的钻石
		var needDiamond = Number(game.configs.pet_money[markSelectId].diamond);
		qyengine['grou_clearCoolTime'].objects['txt_clearCoolTime_1'].text = needDiamond;
		qyengine['grou_clearCoolTime'].objects['obj_tailours_buy_bt_queding_clearCoolTime'].vars_.needDiamond = needDiamond;
		qyengine['grou_clearCoolTime'].objects['obj_tailours_buy_bt_queding_clearCoolTime'].vars_.select_id = markSelectId;
	}

	//清除cd的确定的按钮的点击事件
	if (game.vars_.playInfoJson.stone >= self.vars_.needDiamond) {
		function clearCoolTimeBack() {
			//console.error(arguments);
			if (arguments[1]) {
				//arguments[2].petId
				//arguments[2].stone
				game.vars_.playInfoJson.stone = Number(arguments[2].stone);
				var stoneArr = qyengine.getInstancesByType("txt_stone");
				for (var i = 0; i < stoneArr.length; i++) {
					stoneArr[i].setText(game.vars_.playInfoJson.stone);
				}
				//还差一个最后的处理~~~清除过后的处理

			} else {
				console.error("返回错误,需要查看");
			}
			game.scripts["al_scr_gameloadDestroy"](null, null);
		}
		self.vars_.select_id && QyRpc.clearCoolTime(Number(game.vars_.CurryPetID), self.vars_.select_id, clearCoolTimeBack);
	} else {
		game.scripts["al_scr_donotEnughStone"](null, null);
		self.currentSprite && self.currentSprite.parent.qyobj.hide();
	}



	//螃蟹村 的转盘的点击事件
	if (self.vars_.status == "starting") {
		return;
	}
	if (grou_wheel.vars_.haveNum && grou_wheel.vars_.haveNum <= 0) {
		qyengine.instance_create(400, 550, 'txt_getRewardWordFly', {
			"type": 'txt_getRewardWordFly',
			"id": 'txt_getRewardWordFly',
			"zIndex": 15,
			"layer": "scene_pop",
			"scene": "sce_mainScene"
		});
		qyengine.guardId("txt_getRewardWordFly").text = "剩余次数为0";
		return;
	}
	current_game.scripts['al_scr_' + "ShowLoading"].call(this, undefined, this);
	function calRewardAndWordFly(getItemId) {
		qyengine.instance_create(400, 550, 'txt_getRewardWordFly', {
			"type": 'txt_getRewardWordFly',
			"id": 'txt_getRewardWordFly',
			"zIndex": 15,
			"layer": "scene_pop",
			"scene": "sce_mainScene"
		});
		var getRewardItemArr = game.configs.luckywheel_lottery[getItemId].reward.split("|");
		var itemName = game.configs.items[getRewardItemArr[0]].name;
		qyengine.guardId("txt_getRewardWordFly").text = "获得" + itemName + "x" + getRewardItemArr[1];
	}
	function wheelBack() {
		//console.error(arguments);
		if (arguments[1]) {
			self.vars_.status = "starting";
			var needStopPlace = Number(arguments[2].sid);
			var rotationRateNum = 5;
			var needAngle = -(15 + 30 * (needStopPlace - 1) + 360 * rotationRateNum);
			self.vars_.timeOutObj = setInterval(function () {
				var rotationObj = grou_wheel.objects['obj_Icon_Activity_Arrow'];
				rotationObj.setRotation(rotationObj.getRotation() - 2.5);
				if (rotationObj.getRotation() <= needAngle) {
					clearInterval(self.vars_.timeOutObj);
					self.vars_.status = "finish";
					var xxx = Math.floor(rotationObj.getRotation() / (-360));
					rotationObj.setRotation(rotationObj.getRotation() + xxx * 360);
					calRewardAndWordFly(needStopPlace);
					grou_wheel.vars_.haveNum--;
					grou_wheel.objects['txt_haveTimes'].text = "剩余" + grou_wheel.vars_.haveNum + "次";
				}
			}, 1000 * 0.0025);
		} else {
			console.error("返回错误,需要查看~~~");
		}
		current_game.scripts['al_scr_' + "DismissLoading"].call(this, undefined, this);
	}
	QyRpc.draw_active(wheelBack);






	//大转盘剩余次数
	if ((nowTab - 1) != 1) {
		return;
	}
	function wheelNumBack() {
		if (arguments[1]) {
			var haveNum = 0;
			if (game.vars_.userInfo.vip_flg == 1) {  //已经是vips
				haveNum = 5 - Number(arguments[2].num);

			} else {
				haveNum = 1 - Number(arguments[2].num);
			}
			if (haveNum < 0) {
				haveNum = 0;
			}
			grou_wheel.objects['txt_haveTimes'].text = "剩余" + haveNum + "次";
			grou_wheel.vars_.haveNum = haveNum;
		} else {
			console.error("返回有错误,需要查看");
		}
		current_game.scripts['al_scr_' + "DismissLoading"].call(this, undefined, this);
	}
	current_game.scripts['al_scr_' + "ShowLoading"].call(this, undefined, this);
	QyRpc.get_draw_active(wheelNumBack);

	//-------------------------------getMonitoringRecordData    monitoringRecord




	//hwurd_qiyun/AVG_bulletScreen
	/**
	 * 	1,弹幕的显示
		1,普通玩家发送的弹幕
		2,vip1-vip5之间玩家发送的弹幕
		3,>vip5玩家发送的弹幕
	2,
	 */

	/**
	 * InitStartAndOpenBulletScreenButton
	 */
	if (!game.vars_.playInfoJson.bulletScreen) {
		//默认是开启弹幕  匿名状态
		game.vars_.playInfoJson.bulletScreen = { 'start': 1, 'Anonymous': game.vars_.playInfoJson.isName, 'showing': data, 'alreadyShow': [], 'alreadyShowFriend': [] };
	}
	game.vars_.playInfoJson.bulletScreen.showing = data;
	current_game.scripts['al_scr_' + "changeBulletScreenButtonStatus"].call(this, undefined, this);

	var getAnonymousObjArr = qyengine.getInstancesByType("obj_Flowers_tanmu_bt_03_5");
	var getOpenObjArr = qyengine.getInstancesByType("obj_Flowers_tanmu_bt_03_2");
	for (var i = 0; i < getAnonymousObjArr.length; i++) {
		if (game.vars_.playInfoJson.bulletScreen.Anonymous) {
			getAnonymousObjArr[i].changeSprite("obj_Flowers_tanmu_bt_03_5_default");
		} else {
			getAnonymousObjArr[i].changeSprite("obj_Flowers_tanmu_bt_03_4_default");
		}
	}
	for (var j = 0; j < getOpenObjArr.length; j++) {
		if (game.vars_.playInfoJson.bulletScreen.start) {
			getOpenObjArr[j].changeSprite("obj_Flowers_tanmu_bt_03_2_default");
		} else {
			getOpenObjArr[j].changeSprite("obj_Flowers_tanmu_bt_03_3_default");
		}
	}


	if (game.vars_.playInfoJson.bulletScreen.Anonymous) {
		game.vars_.playInfoJson.bulletScreen.Anonymous = false;
	} else {
		game.vars_.playInfoJson.bulletScreen.Anonymous = true;
	}
	current_game.scripts['al_scr_' + "changeBulletScreenButtonStatus"].call(this, undefined, this);

	/**
	 * ShowBulletScreen  
	 */
	function backBulletScreen() {
		console.log(arguments);
		if (arguments[1]) {
			//current_game.scripts['al_scr_' + "InitStartAndOpenBulletScreenButton"].call(this, undefined, this);
			game.vars_.playInfoJson.bulletScreen.total = arguments[2].barrage;
			if (game.vars_.playInfoJson.bulletScreen.total.length == 0) {
				return;
			}
			if (!game.vars_.playInfoJson.bulletScreen.start && type && type == 1) {
				game.scripts["al_scr_gameloadDestroy"](null, null);
				game.scripts["al_scr_AddTip_1"](null, null, "弹幕发送成功", "layer1");
				grou_bulletSceneMain.isVisible && inpu_bulletScreen.hide() && grou_bulletSceneMain.hide();
				type = 2;
				return;
			}

			if (!game.vars_.playInfoJson.bulletScreen.start) {
				return;
			}

			if (game.vars_.playInfoJson.bulletScreen.total.length == 0) {
				return;
			}
			//判断是否需要展示，在点评和闺蜜合影界面 为true
			//game.vars_.playInfoJson.bulletScreen.showing = true;
			if (!game.vars_.playInfoJson.bulletScreen.showing) {
				if (game.vars_.bulletScreenShowTime) {
					clearInterval(game.vars_.bulletScreenShowTime);
				}
				return;
			}
			game.vars_.nowAlreadyShow = game.vars_.bulletScreenType == "friend" ? game.vars_.playInfoJson.bulletScreen.alreadyShowFriend : game.vars_.playInfoJson.bulletScreen.alreadyShow;
			lengthRange30();
			if (game.vars_.nowAlreadyShow.length >= 30) {
				game.scripts["al_scr_gameloadDestroy"](null, null);
				grou_bulletSceneMain.isVisible && inpu_bulletScreen.hide() && grou_bulletSceneMain.hide();
				return;
			}
			if (game.vars_.nowAlreadyShow && game.vars_.nowAlreadyShow.length > 0) {

				//一些容错处理
				if (game.vars_.playInfoJson.bulletScreen.total.length < game.vars_.nowAlreadyShow.length) {
					game.vars_.nowAlreadyShow = JSON.parse(JSON.stringify(game.vars_.playInfoJson.bulletScreen.total));
					game.vars_.playInfoJson.bulletScreen.total.splice(0, game.vars_.nowAlreadyShow.length);

					return;
				}
				var needRemovePos = game.vars_.playInfoJson.bulletScreen.total.length - game.vars_.nowAlreadyShow.length;
				game.vars_.playInfoJson.bulletScreen.total.splice(needRemovePos, game.vars_.nowAlreadyShow.length);
			} else {
				//game.vars_.nowAlreadyShow = [];
			}
			showBulletScreen();
			game.vars_.bulletScreenShowTime && clearInterval(game.vars_.bulletScreenShowTime);
			game.vars_.bulletScreenShowTime = setInterval(function () {
				showBulletScreen();
			}, 4000);
			if (type == 1) {
				type = 2;
				game.scripts["al_scr_gameloadDestroy"](null, null);
				grou_bulletSceneMain.isVisible && inpu_bulletScreen.hide() && grou_bulletSceneMain.hide();
			}
		} else {
			console.error("发生错误,需要查看~");
		}
	}


	//超过30条的时候,服务端不再增加长度 本地需要判断~~~
	function lengthRange30() {

		if (game.vars_.nowAlreadyShow && game.vars_.playInfoJson.bulletScreen.total.length == game.vars_.nowAlreadyShow.length && game.vars_.playInfoJson.bulletScreen.total.length == 30) {
			var xxx = function () {
				/*
				for (var p = 0; p < game.vars_.playInfoJson.bulletScreen.total.length; p++) {
					for (var q = game.vars_.nowAlreadyShow.length - 1; q >= 0; q--) {
						if ((p == 0) && JSON.stringify(game.vars_.nowAlreadyShow[q]) == JSON.stringify(game.vars_.playInfoJson.bulletScreen.total[p])) {
							return 0;
						} else if (p != 0) {
							return random_range(1,5);
						}
					}
				}
				*/
				return random_range(1, 5);
			};
			var _showNum = xxx();
			try {
				var alreadyShowLength = game.vars_.nowAlreadyShow.length;
				game.vars_.nowAlreadyShow.splice(alreadyShowLength - _showNum, _showNum);
			} catch (error) {
				console.error(error.message);
			}

			/*
			for (var j = 0; j < game.vars_.playInfoJson.bulletScreen.total.length; j++) {
				var totalItem = game.vars_.playInfoJson.bulletScreen.total[j];
				getPlaceInTotal(totalItem);
			}
			*/
		}
	}

	//
	//创建并展示弹幕
	function showBulletScreen() {
		var bullet_grouArr = current_game.scripts['al_scr_' + "calHideFlyGrou"].call(this, undefined, this, 0);

		var oneTimeShowNum = game.vars_.playInfoJson.bulletScreen.total.length < 15 ? game.vars_.playInfoJson.bulletScreen.total.length : random_range(3, 15);

		//处理vip5以下的弹幕
		for (var _cell = 0; _cell < oneTimeShowNum; _cell++) {
			var itemJson = game.vars_.playInfoJson.bulletScreen.total[_cell];
			if (!itemJson) {
				break;
			}
			if (itemJson.vip >= 5) {
				if (!game.vars_.playInfoJson.bulletScreenVip5) {
					game.vars_.playInfoJson.bulletScreenVip5 = [];
				}

				//创建vip5的
				var nowVip5Visible = getShowVipNum();
				var nowVip5VisibleFalse = current_game.scripts['al_scr_' + "calHideFlyGrou"].call(this, undefined, this, 1);
				if (nowVip5Visible >= 0 && nowVip5Visible < 4) {
					var _markShowObj = null;
					if (nowVip5VisibleFalse.length > 0) {
						_markShowObj = nowVip5VisibleFalse[0];

					} else {
						_markShowObj = qyengine.instance_create(0, 0, "grou_bullutScreen_fly_vip5", {
							"type": "grou_bullutScreen_fly_vip5",
							"id": "grou_bullutScreen_fly_vip5",
							"zIndex": 20,
							"layer": "layer0"
						});
					}

					!_markShowObj.isVisible && _markShowObj.dispatchMessage({
						"type": "message",
						"message": "delayHide"
					});
					var placePosY = nowVip5Visible ? (500 + _markShowObj.height * nowVip5Visible + 20 * nowVip5Visible) : 500;
					_markShowObj.setPosition(100, placePosY);
					var markTxtObj = _markShowObj.objects['txt_flyWord_bulletScreen'];
					if (itemJson.name) {
						markTxtObj.text = itemJson.name + "说:" + itemJson.msg;
					} else {
						markTxtObj.text = "" + itemJson.msg;
					}
					_markShowObj.objects['txt_flyWord_bulletScreen_vip'].text = "V" + itemJson.vip;
					_markShowObj.objects['obj_Flowers_tanmu_box_04'].width = markTxtObj.currentSprite.realWidth + 5;
					_markShowObj.show();
					_markShowObj.vars_.place = nowVip5Visible + 1;
					game.vars_.nowAlreadyShow.push(game.vars_.playInfoJson.bulletScreen.total.splice(_cell, 1)[0]);
					--_cell;
				} else {
					game.vars_.playInfoJson.bulletScreenVip5.push(itemJson);
					var _needPush = game.vars_.playInfoJson.bulletScreen.total.splice(_cell, 1)[0];
					game.vars_.nowAlreadyShow.push(_needPush);
					--_cell;
				}
				continue;
			} else if (_cell < bullet_grouArr.length) {
				bullet_grouArr[_cell].setPosition(random_range(current_scene.width, current_scene.width + 100), random_range(0 + bullet_grouArr[_cell].height, current_scene.height - bullet_grouArr[_cell].height));
				bullet_grouArr[_cell].setPosition(random_range(current_scene.width, current_scene.width + 100), random_range(530, 880));

				var txtObj = bullet_grouArr[_cell].objects['txt_flyWord_bulletScreen'];
				if (itemJson.name) {
					txtObj.text = itemJson.name + "说:" + itemJson.msg;
				} else {
					txtObj.text = itemJson.msg;
				}
				bullet_grouArr[_cell].objects['obj_Flowers_tanmu_box_04'].changeSprite("obj_Flowers_tanmu_box_nolevel_default");
				bullet_grouArr[_cell].objects['obj_Flowers_tanmu_box_04'].width = txtObj.currentSprite.realWidth + 4;
				if (itemJson.vip != undefined && itemJson.vip > 0) {
					txtObj.setFontColor("#cc3333");
				} else {
					txtObj.setFontColor("#3399ff");
				}

				bullet_grouArr[_cell].show();
				//bullet_grouArr[_cell].setSpeed(-(random_range(100, 250)), 0);
				bullet_grouArr[_cell].moveTo(-bullet_grouArr[_cell].x - current_scene.width - 1000, bullet_grouArr[_cell].y, random_range(100, 250))
				bullet_grouArr.splice(_cell, 1);
			} else {
				var markShowObj = qyengine.instance_create(0, 0, "grou_bullutScreen_fly", {
					"type": "grou_bullutScreen_fly",
					"id": "grou_bullutScreen_fly_" + random(1000),
					"zIndex": 10,
					"layer": "layer0"
				});
				markShowObj.setPosition(random_range(current_scene.width, current_scene.width + 100), random_range(530, 880));
				var txtObj = markShowObj.objects['txt_flyWord_bulletScreen'];
				if (itemJson.name) {
					txtObj.text = itemJson.name + "说:" + itemJson.msg;
				} else {
					txtObj.text = itemJson.msg;
				}
				markShowObj.objects['obj_Flowers_tanmu_box_04'].changeSprite("obj_Flowers_tanmu_box_nolevel_default");
				markShowObj.objects['obj_Flowers_tanmu_box_04'].width = txtObj.currentSprite.realWidth + 4;
				if (itemJson.vip != undefined && itemJson.vip > 0) {
					txtObj.setFontColor("#cc3333");
				} else {
					txtObj.setFontColor("#3399ff");
				}
				//markShowObj.setSpeed(-(random_range(100, 250)), 0);
				markShowObj.moveTo(markShowObj.x - current_scene.width - 1000, markShowObj.y, (random_range(100, 250)));
			}
			game.vars_.nowAlreadyShow.push(itemJson);
			game.vars_.playInfoJson.bulletScreen.total.splice(_cell, 1);
			--_cell;
		}

	}

	function getShowVipNum() {
		var _vip5Num = 0;
		var _grouFlyVip = qyengine.getInstancesByType('grou_bullutScreen_fly_vip5');
		for (var k = 0; k < _grouFlyVip.length; k++) {
			if (_grouFlyVip[k].isVisible) {
				_vip5Num++;
			}
		}
		return _vip5Num;
	}
	//type 1：从发送事件点击进来的,2:其它
	//screenType 好友0 百花1
	//'flower'  'friend'
	//game.vars_.bulletScreenType = flowerInScene;
	var bulletScreenType = game.vars_.bulletScreenType == "friend" ? 0 : 1;
	if (type == 1) {
		game.scripts["al_scr_gameloadCreate"](null, null);
		QyRpc.sendBarrage(bulletScreenType, game.vars_.playInfoJson.bulletScreen.Anonymous ? 1 : 0, sendTxt, backBulletScreen);
	} else {
		QyRpc.getBarrage(bulletScreenType, backBulletScreen);
	}
	game.vars_.bulletScreenCycleTime && clearInterval(game.vars_.bulletScreenCycleTime);
	game.vars_.bulletScreenCycleTime = setInterval(function () {
		QyRpc.getBarrage(bulletScreenType, backBulletScreen);
	}, 20 * 1000);



	//VIP5以上的弹幕隐藏事件里面的处理
	/**
	 * 1,还有几个显示的 (3:还有三个显示先判断位置进行移动，再创建  2:   1)
	 */
	setTimeout(function () {
		if (!game.vars_.playInfoJson.bulletScreen.showing) {
			return;
		}
		self.hide();
		hideEventCal();
	}, 2000);
	function hideEventCal() {
		var bulletVip5_grouArr = qyengine.getInstancesByType("grou_bullutScreen_fly_vip5");
		//现在界面上还显示的vip5的弹幕
		var bulletVip5Show_grouArr = [];
		for (var i = 0; i < bulletVip5_grouArr.length; i++) {
			if (bulletVip5_grouArr[i].isVisible) {
				bulletVip5Show_grouArr.push(bulletVip5_grouArr[i]);
			}
		}
		//排序
		var minToMaxByPlace = function sortRule(a, b) {
			return a.vars_.place - b.vars_.place;
		}
		bulletVip5Show_grouArr.sort(minToMaxByPlace);
		var alreadymove = [];
		for (var m = 1; m <= 4; m++) {
			if (!bulletVip5Show_grouArr[m - 1]) {
				break;
			}
			if (bulletVip5Show_grouArr[m - 1].vars_.place == alreadymove.length + 1) {
				alreadymove.push(1);
			} else if (bulletVip5Show_grouArr[m - 1].vars_.place != alreadymove.length + 1) {
				var calPosY = 500 + bulletVip5Show_grouArr[m - 1].height * alreadymove.length + 10 * (alreadymove.length);
				bulletVip5Show_grouArr[m - 1].moveTo(_objMove.x, calPosY, 'time', 80);
				alreadymove.push(1);
			}
		}
		for (var m = 1; m <= 4; m++) {
			if (m > bulletVip5Show_grouArr.length) {
				var
			}
		}







		for (var j = 1; j <= 4; j++) {
			if (j != self.vars_.place) {
				var _objMove = findFlyWordPlace(j);
				if (!_objMove) {
					continue;
				}
				if (_objMove.vars_.place > self.vars_.place) {
					_objMove.moveTo(_objMove.x, _objMove.y - _objMove.height - 10, 'time', 80);
					_objMove.vars_.place--;
				}
			}
		}
		//没有vip5新的弹幕return
		if (game.vars_.playInfoJson.bulletScreenVip5.length <= 0) {
			return;
		}
		var getVip5HideObj = current_game.scripts['al_scr_' + "calHideFlyGrou"].call(this, undefined, this, 1);
		var nowCreateVipObj = null;
		if (getVip5HideObj.length > 0) {
			nowCreateVipObj = getVip5HideObj[0];

			nowCreateVipObj.dispatchMessage({
				"type": "message",
				"message": "delayHide"
			});

		} else {
			nowCreateVipObj = qyengine.instance_create(400, 500 + bulletVip5Show_grouArr.length * self.height, "grou_bullutScreen_fly_vip5", {
				"type": "grou_bullutScreen_fly_vip5",
				"id": "grou_bullutScreen_fly_vip5",
				"zIndex": 20,
				"layer": "layer0"
			});
		}
		var placePosY = bulletVip5Show_grouArr.length ? (500 + nowCreateVipObj.height * bulletVip5Show_grouArr.length + 10 * (bulletVip5Show_grouArr.length)) : 500;
		nowCreateVipObj.setPosition(400, placePosY);
		nowCreateVipObj.show();
		var itemJson = game.vars_.playInfoJson.bulletScreenVip5[0];
		var itemTxtObj = nowCreateVipObj.objects['txt_flyWord_bulletScreen'];
		itemTxtObj.text = itemJson.name ? itemJson.name + "说:" : "" + itemJson.msg;
		nowCreateVipObj.objects['txt_flyWord_bulletScreen_vip'].text = "V" + itemJson.vip;
		nowCreateVipObj.objects['obj_Flowers_tanmu_box_04'].changeSprite("obj_Flowers_tanmu_box_04_default");
		nowCreateVipObj.objects['obj_Flowers_tanmu_box_04'].width = itemTxtObj.currentSprite.realWidth + 4;
		itemTxtObj.setFontColor("#9966ff");
		var _spliceObj = game.vars_.playInfoJson.bulletScreenVip5.splice(0, 1);
		//game.vars_.playInfoJson.bulletScreen.alreadyShow.push(_spliceObj);
		nowCreateVipObj.vars_.place = bulletVip5Show_grouArr.length + 1;


		function findFlyWordPlace(movePlace) {
			var moveObj = null;
			for (var i = 0; i < bulletVip5Show_grouArr.length; i++) {
				if (bulletVip5Show_grouArr[i] == movePlace) {
					moveObj = bulletVip5Show_grouArr[i];
					return moveObj;
				}
			}
			return moveObj;
		}
	}

	/**
	 * calHideFlyGrou    因为不止一个地方用到故封装成一个动作序列
	 */
	var bullet_grouArr = argType == 0 ? qyengine.getInstancesByType("grou_bullutScreen_fly") : qyengine.getInstancesByType("grou_bullutScreen_fly_vip5");
	var _temp = [];
	for (var i = 0; i < bullet_grouArr.length; i++) {
		if (!bullet_grouArr[i].isVisible) {
			_temp.push(bullet_grouArr[i]);
		}
	}
	return _temp;




	//发送弹幕
	function callBack() {
		console.log(arguments);
	}
	QyRpc.sendBarrage(1, 'dadadadadada', callBack);





	for (cell in game.configs.fashion) {
		if (game.configs.fashion[cell].name == "昭容意") {
			console.error(cell);
		}
	}
	current_game.scripts['al_scr_' + "CreateScreenWordShow"].call(this, undefined, this);





	/**
	 * buttonEventSendBulletScreen
	 */
	//发送弹幕
	/*
	if (!game.vars_.playInfoJson.bulletScreen.start) {
		game.scripts["al_scr_AddTip_1"](null, null, "请先开启弹幕开关", "layer1");
		return;
	}
	*/
	if (self.id == "obj_Flowers_tanmu_bt_02") {
		var getInput = inpu_bulletScreen.getValue();
		if (getInput == "") {
			game.scripts["al_scr_AddTip_1"](null, null, "输入不能为空哦", "layer1");
			return;
		}
		if (getInput.length > 30) {
			game.scripts["al_scr_AddTip_1"](null, null, "超过限定字数", "layer1");
			return;
		}
		local.sendTxt = getInput;
		//sendBarrageInfo();
	} else {
		local.sendTxt = self.text;
		//sendBarrageInfo();
	}
	grou_bulletSceneMain.hide();
	current_game.scripts['al_scr_' + "CreateScreenWordShow"].call(this, undefined, this, 1, local.sendTxt);




	/**
	 * CreateBulletScreen
	 */
	if (qyengine.getInstancesByType('grou_bulletSceneMain') > 0) {
		var markGrouObj = qyengine.getInstancesByType('grou_bulletSceneMain')[0];
		markGrouObj.show();
		inpu_bulletScreen.show();
	} else {
		var markGrouObj = qyengine.instance_create(0, 0, "grou_bulletSceneMain", {
			"type": "grou_bulletSceneMain",
			"id": "grou_bulletSceneMain",
			"zIndex": 9,
			"layer": "layer0"
		});
	}
	var txtArr = current_game.scripts['al_scr_' + "getRandomBulletScreenWord"].call(this, undefined, this);
	var parentObj = grou_bulletSceneMain.objects;
	for (var j = 1; j <= txtArr.length; j++) {
		parentObj['txt_common_bulletScreen_' + j].text = txtArr[j - 1];
	}
	game.vars_.playInfoJson.bulletScreen.Anonymous == 1 && markGrouObj.objects['obj_Flowers_tanmu_bt_03_7'].hide();

	//因为多处用到,故封装成动作序列  getRandomBulletScreenWord
	function getRandomTxt() {
		var markConfig = game.configs.barrage;
		var _arrIndex = Object.keys(markConfig);
		var _randomArrIndex = [];
		var calVar = function () {
			for (var i = 0; i < 4; i++) {
				var delIndex = random_range(0, _arrIndex.length - 1);
				_randomArrIndex.push(markConfig[_arrIndex[delIndex]].name);
				_arrIndex.splice(delIndex, 1);
			}
		}
		calVar();
		return _randomArrIndex;
	}

	/**
	 *   改变宽度和字体颜色的消息  changeWidthAndColor
	 */
	switch (event.argument0) {
		case 5:  //vip大于5

			break;
		case 1:  //1-5之间
			break;
		default:
			break;
	}



	current_game.scripts['al_scr_' + "InitStartAndOpenBulletScreenButton"].call(this, undefined, this, data);















	/**
	 * changeBulletScreenButtonStatus
	 */
	if (!game.vars_.playInfoJson.bulletScreen.showing) {  //showing 控制是否在展示界面
		hideAndClear();
		return;
	}
	var getAnonymousObjArr = qyengine.getInstancesByType("obj_Flowers_tanmu_bt_03_7");
	var getOpenObjArr = qyengine.getInstancesByType("obj_Flowers_tanmu_bt_03_2");
	var openBulletNeedMoveObj = qyengine.guardId("obj_Flowers_tanmu_bt_05");
	for (var i = 0; i < getAnonymousObjArr.length; i++) {
		if (game.vars_.playInfoJson.bulletScreen.Anonymous) {
			try {
				getAnonymousObjArr[i].show();
			} catch (error) {
				console.error(error.message);
			}

		} else {
			try {
				getAnonymousObjArr[i].hide();
			} catch (error) {
				console.error(error.message);
			}
		}
	}
	for (var j = 0; j < getOpenObjArr.length; j++) {
		if (game.vars_.playInfoJson.bulletScreen.start) {
			//getOpenObjArr[j].changeSprite("obj_Flowers_tanmu_bt_03_2_default");
			try {
				//openBulletNeedMoveObj.x = 33;  //37
				if (qyengine.getInstancesByType("Btn_tanMu_Func").length > 0) {
					Btn_tanMu_Func.objects['obj_Flowers_tanmu_bt_05'].x = 33;
				}
				if (qyengine.getInstancesByType("grou_friendInfo").length > 0) {

					var jiZhunX = grou_friendInfo.objects["obj_Flowers_tanmu_bt_04"].x;
					grou_friendInfo.objects['obj_Flowers_tanmu_bt_05'].x = jiZhunX - 24;
				}
			} catch (error) {
				console.error("打印,需要查看");
			}
			current_game.scripts['al_scr_' + "CreateScreenWordShow"].call(this, undefined, this);
		} else {
			try {
				//openBulletNeedMoveObj.x = 89;   //93
				if (qyengine.getInstancesByType("Btn_tanMu_Func").length > 0) {
					Btn_tanMu_Func.objects['obj_Flowers_tanmu_bt_05'].x = 89;
				}

				if (qyengine.getInstancesByType("grou_friendInfo").length > 0) {
					var jiZhunX = grou_friendInfo.objects["obj_Flowers_tanmu_bt_04"].x;
					grou_friendInfo.objects['obj_Flowers_tanmu_bt_05'].x = jiZhunX + 26;
				}
			} catch (error) {
				console.error("打印,需要查看");
			}
			hideAndClear();
			//getOpenObjArr[j].changeSprite("obj_Flowers_tanmu_bt_03_3_default");
		}
	}
	function hideAndClear() {
		qyengine.forEach(function () {
			this.isVisible && this.hide();
			this.setSpeed(0, 0);
		}, "grou_bullutScreen_fly");
		qyengine.forEach(function () {
			this.isVisible && this.hide();
			this.setSpeed(0, 0);
		}, "grou_bullutScreen_fly_vip5");
		game.vars_.bulletScreenCycleTime && clearInterval(game.vars_.bulletScreenCycleTime);
		game.vars_.bulletScreenShowTime && clearInterval(game.vars_.bulletScreenShowTime);
	}






















	var itemId = game.vars_.manualDataArr[i][0];

	if (!game.vars_.manualDataArr[i]) {
		continue;
	}



	current_game.scripts['al_scr_' + "StartBulletScreen"].call(this, undefined, this);



	//'flower'  'friend'
	//game.vars_.bulletScreenType = flowerInScene;


	current_game.scripts['al_scr_' + "ShowBulletScreen"].call(this, undefined, this, 0, 'friend');





	qyengine['grou_materialSell'] && qyengine['grou_materialSell'].hide();


	if (localStorage.bulletScreenStart) {
		game.vars_.playInfoJson.bulletScreen
	}

	localStorage.bulletScreenStart = game.vars_.playInfoJson.bulletScreen.start;

	self.objects['obj_Sharing_interface_Share_002'].hide();
	qyengine.forEach(function () {
		this.show();
	}, "obj_Sharing_interface_Share_002");





	//ArenaSharePanel    ShareIngThreeStarsPanel   ShareIngBasePanel



	var closeNumArr = grou_decomposePanel.vars_.clothInBag;
	var totalNum = 0;
	for (var cell in closeNumArr) {
		totalNum += Number(closeNumArr[cell].num);
	}



	current_game.scripts['al_scr_' + "CreateMaterailSale"] && current_game.scripts['al_scr_' + "CreateMaterailSale"].call(this, undefined, this);

	//分解的请求
	function callBack() {
		console.log(arguments[1]);
		if (arguments[1] == true) {
			game.scripts["al_scr_DecomposeResult"](null, null, arguments[2]);
		} else {
			console.log(arguments[2].code);
			game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
		}
		game.scripts["al_scr_gameloadDestroy"](null, null);
	}

	game.scripts["al_scr_gameloadCreate"](null, null);
	QyRpc.DisintegrateFashion(cloth, callBack);



	//CreateMaterailSale
	if (qyengine['grou_materialSell']) {
		qyengine['grou_materialSell'].show();
		inpu_materialSell.show();
	} else {
		qyengine['grou_materialSell'] = qyengine.instance_create(0, 0, "grou_materialSell", {
			"id": "grou_materialSell",
			"zIndex": 9,
			"layer": "layer0"
		});
	}

	var miscConfig = game.configs.misc[1].value.split("|");
	var itemId = 0;
	var itemNum = 0;
	switch (Number(miscConfig[0])) {
		case 1:
			itemId = Number(miscConfig[1]);
			itemNum = Number(miscConfig[2]);
			break;
		default:
			break;
	}
	qyengine['grou_materialSell'].vars_.oneItemNum = itemNum;
	qyengine['grou_materialSell'].objects['inpu_materialSell'].setValue(1);
	qyengine['grou_materialSell'].objects['txt_materialSellCommon_goldNum'].text = itemNum;
	qyengine['grou_materialSell'].vars_.nowSelectNum = 1;




	setTimeout(function () {
		inpu_materialSell.currentSprite.domElement.addEventListener("input", function () {
			console.log(this.value);
			qyengine['grou_materialSell'].vars_.nowSelectNum = Number(this.value);
			var oneItemNum = qyengine['grou_materialSell'].vars_.oneItemNum;
			qyengine['grou_materialSell'].objects['txt_materialSellCommon_goldNum'].text = oneItemNum * qyengine['grou_materialSell'].vars_.nowSelectNum;
		})
	}, 500);

	//最大

	//最小
	var oneItemNum = qyengine['grou_materialSell'].vars_.oneItemNum;
	switch (self.vars_.buttonType) {
		case 0:
			qyengine['grou_materialSell'].objects['txt_materialSellCommon_goldNum'].text = oneItemNum;
			qyengine['grou_materialSell'].vars_.nowSelectNum = 1;
			break;
		case 1:
			if (qyengine['grou_materialSell'].vars_.nowSelectNum <= 1) {
				game.scripts["al_scr_AddTip_1"](null, null, "最少要出售一个服装原料哦~", "layer1");
				return;
			} else {
				qyengine['grou_materialSell'].vars_.nowSelectNum--;
				qyengine['grou_materialSell'].objects['txt_materialSellCommon_goldNum'].text = oneItemNum * qyengine['grou_materialSell'].vars_.nowSelectNum;
			}
			break;
		case 2:
			if (qyengine['grou_materialSell'].vars_.nowSelectNum >= Number(game.vars_.bagList.goods[113].num)) {
				game.scripts["al_scr_AddTip_1"](null, null, "你只有这么多服装原料了哦~", "layer1");
				return;
			}
			qyengine['grou_materialSell'].vars_.nowSelectNum++;
			qyengine['grou_materialSell'].objects['txt_materialSellCommon_goldNum'].text = oneItemNum * qyengine['grou_materialSell'].vars_.nowSelectNum;

			break;
		case 3:
			if (qyengine['grou_materialSell'].vars_.nowSelectNum >= Number(game.vars_.bagList.goods[113].num)) {
				return;
			}
			qyengine['grou_materialSell'].vars_.nowSelectNum = Number(game.vars_.bagList.goods[113].num) == 0 ? 1 : Number(game.vars_.bagList.goods[113].num);
			qyengine['grou_materialSell'].objects['txt_materialSellCommon_goldNum'].text = oneItemNum * qyengine['grou_materialSell'].vars_.nowSelectNum;

			break;

		default:
			break;
	}
	inpu_materialSell.setValue(qyengine['grou_materialSell'].vars_.nowSelectNum);
	//出售

	if (qyengine['grou_materialSell'].vars_.nowSelectNum > Number(game.vars_.bagList.goods[113].num)) {
		game.scripts["al_scr_AddTip_1"](null, null, "您没有足够的服装原料哦，赶紧去分解吧~", "layer1");
		return;
	}
	if (qyengine['grou_materialSell'].vars_.nowSelectNum == 0) {
		game.scripts["al_scr_AddTip_1"](null, null, "最少要出售一个服装原料哦~", "layer1");
		return;
	}
	function callBack_decomposed() {
		console.log(arguments);
		if (arguments[1]) {
			var plusStone = Number(arguments[2].stone) - Number(game.vars_.playInfoJson.stone);
			var plusGold = Number(arguments[2].gold) - Number(game.vars_.playInfoJson.gold);
			var plusMaterial = Number(arguments[2].material);
			//game.vars_.playInfoJson.stone = arguments[2].stone;
			game.vars_.bagList.goods[113].num = arguments[2].material;
			//game.vars_.playInfoJson.gold = arguments[2].gold;

			game.vars_.dropList = [];
			var cellObj = {};
			//var propData= game.configs.prop[]
			if (plusStone > 0) {
				cellObj.id = 101;
				cellObj.type = 2;
				cellObj.num = plusStone;
				game.vars_.dropList.push(JSON.parse(JSON.stringify(cellObj)));
			}
			if (plusGold > 0) {
				cellObj.id = 100;
				cellObj.type = 1;
				cellObj.num = plusGold;
				game.vars_.dropList.push(JSON.parse(JSON.stringify(cellObj)));
			}
			/*
			if (plusMaterial > 0) {
				cellObj.id = 113;
				cellObj.type = 6;
				cellObj.num = plusMaterial;
				game.vars_.dropList.push(JSON.parse(JSON.stringify(cellObj)));
			}
			*/
			grou_decomposePanelHasNum.text = plusMaterial;

			current_game.scripts['al_scr_' + "AddToBag"].call(this, undefined, this, game.vars_.dropList);
			//InitAwardBg
			current_game.scripts['al_scr_' + "InitAwardBg"].call(this, undefined, this, game.vars_.dropList, 'layer1');
		} else {
			game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
		}
		game.scripts["al_scr_gameloadDestroy"](null, null);
	}
	game.scripts["al_scr_gameloadCreate"](null, null);
	qyengine['grou_materialSell'].vars_.nowSelectNum && QyRpc.decomposedClothSale(qyengine['grou_materialSell'].vars_.nowSelectNum, callBack_decomposed);









	qyengine.guardId("grou_decomposePanelHasNum").setText(game.vars_.bagList.goods[113].num.toString());








	game.scripts["al_scr_Button_ManualSuit"](null, null, self.vars_.goId);


	KBEngine.app.player().baseCall("reqPushMissionMain");


	current_game.scripts['al_scr_' + "onRespMainMission"].call(this, undefined, this);



	grou_mainSet && grou_mainSet.hide();

	/**
	 * CreateMainSet
	 */
	if (qyengine.getInstancesByType("grou_mainSet").length > 0) {
		qyengine['grou_mainSet'].show();
	} else {
		qyengine['grou_mainSet'] = qyengine.instance_create(0, 0, "grou_mainSet", {
			"type": "grou_mainSet",
			"id": "grou_mainSet",
			"zIndex": 5,
			"layer": "scene_button",
			"scene": "sce_mainScene"
		});
	}

	qyengine['grou_mainSet'].dispatchMessage({
		"type": "message",
		"message": "refreshData"
	});


	/**
	 * refreshData 消息   self===grou_mainSet
	 */

	if (game.vars_.userInfo.music) {
		self.objects['obj_Font_Main_gouxuan_set'].hide();
	} else {
		self.objects['obj_Font_Main_gouxuan_set'].show();
	}
	self.objects['txt_mainSetCommon'].text = "UID: " + game.vars_.userInfo.id;
	var ziObj = self.objects['grou_photoFrameCommon'];
	ziObj.objects['txt_name_mainScene_1'].text = game.vars_.userInfo.name;
	ziObj.objects['txt_vip_mainScene_1'].text = "" + game.vars_.userInfo.vip_DayNum;
	ziObj.objects['obj_Photo_Main_Head_mainScene_1'].changeSprite("obj_headImage_" + game.vars_.userInfo.head_img + "_default");
	//主界面
	grou_head.objects['txt_name_mainScene'].text = game.vars_.userInfo.name;
	grou_head.objects['obj_Photo_Main_Head_mainScene'].changeSprite("obj_headImage_" + game.vars_.userInfo.head_img + "_default");


	/**
	 * obj_Font_Main_bt_genggai_set   点击事件
	 */
	var setNameAndPhoto = qyengine.instance_create(0, 0, "grou_createRole",
		{
			"id": 'grou_createRole',
			"zIndex": 10,
			"layer": "scene_pop",
			"scene": "sce_loginScene"
		}
	);
	setNameAndPhoto.objects['obj_Label_SignIn_CreateRole'].changeSprite("obj_Label_SignIn_shezhi_set_default");
	setNameAndPhoto.objects['obj_Font_SignIn_CreateRole'].changeSprite("obj_Font_Share_Determine_set_default");
	var buttontype = setNameAndPhoto.objects['obj_Btn_SignIn_BlueBtn_createRole'];
	buttontype.vars_.typeStatus = "setting";

	//obj_Btn_SignIn_Close_createRole   关闭按钮的事件
	var typeStatus = qyengine.getInstancesByType('grou_createRole').length && grou_createRole.objects['obj_Btn_SignIn_BlueBtn_createRole'].vars_.typeStatus;
	if (typeStatus) {
		grou_createRole.destroy();
		return;
	}

	//current_scene.vars_.selectHeadImageIndex


	if (self.vars_.typeStatus) { //改变角色的头像和昵称
		grou_createRole.objects["txt_accountIllegal"].hide();
		var input_name = qyengine.guardId("inpu_roleName");
		if (input_name.getValue() == "") {
			console.log("名称不能为空");
			grou_createRole.objects["txt_accountIllegal"].show();
			grou_createRole.objects["txt_accountIllegal"].text = "名称不能为空";
		}
		else if (!checkNickname(input_name.getValue())) {
			grou_createRole.objects["txt_accountIllegal"].show();
			grou_createRole.objects["txt_accountIllegal"].text = "名称最多包含8个字";

		}
		else {
			function editBack() {
				if (arguments[1]) {
					current_game.scripts['al_scr_' + "createCommonToast"].call(this, undefined, this, "", "修改成功!");
					game.vars_.userInfo.name = input_name.getValue();
					game.vars_.userInfo.head_img = current_scene.vars_.selectHeadImageIndex;

					qyengine.getInstancesByType("grou_createRole").length && qyengine.forEach(function () { this.destroy(); }, "grou_createRole");

					qyengine['grou_mainSet'] && qyengine['grou_mainSet'].dispatchMessage({
						"type": "message",
						"message": "refreshData"
					});

				} else {
					current_game.scripts['al_scr_' + "createCommonToast"].call(this, undefined, this, "", "修改失败!");
				}
				current_game.scripts['al_scr_' + "DismissLoading"].call(this, undefined, this);
			}
			current_game.scripts['al_scr_' + "ShowLoading"].call(this, undefined, this);
			QyRpc.edit_user_info(input_name.getValue(), current_scene.vars_.selectHeadImageIndex, editBack);
			return;
		}
	}



	//音乐设置
	var args_music = game.vars_.userInfo.music ? 0 : 1;
	function musicBack() {
		if (arguments[1]) {
			game.vars_.userInfo.music = args_music;
			localStorage.music = game.vars_.userInfo.music;
			game.vars_.userInfo.music ? qyengine.stop_all_sounds() : qyengine.play_sound('sd_main' + random_range(1, 2), { "loop": true, background: true });
			qyengine['grou_mainSet'] && (game.vars_.userInfo.music ? qyengine['grou_mainSet'].objects['obj_Font_Main_gouxuan_set'].hide() : qyengine['grou_mainSet'].objects['obj_Font_Main_gouxuan_set'].show());
		} else {

		}
		current_game.scripts['al_scr_' + "DismissLoading"].call(this, undefined, this);
	}
	current_game.scripts['al_scr_' + "ShowLoading"].call(this, undefined, this);
	QyRpc.edit_music(args_music, musicBack);

	//退出登陆
	qyengine.guardId("scro_myCrabInfoScroll") && qyengine.guardId("scro_myCrabInfoScroll").vars_.markScrollerTime && clearInterval(qyengine.guardId("scro_myCrabInfoScroll").vars_.markScrollerTime);
	game.vars_.userInfo = null;
	qyengine.different_scene('sce_loginScene');
	game.vars_.exitLogin = true;



	if (game.vars_.exitLogin) {
		game.vars_.exitLogin = null;
		qyengine.guardId("obj_Btn_SignIn_Cancellation") && qyengine.guardId("obj_Btn_SignIn_Cancellation").dispatchMessage({
			"type": "message",
			"message": "cancelLogin"
		});
		if (qyengine.getInstancesByType("grou_Notice").length) {
			grou_Notice.destroy();
		}
	}





	game.scripts["al_scr_AddTip_1"](null, null, "需要的积分不足哦~", "layer0");
	/**
	 * avg的大转盘的活动
	 */
	//每次进入活动请求数据
	function drawWheel() {
		if (qyengine.getInstancesByType("LuckyWheelPanel").length) {
			qyengine['LuckyWheelPanel'].show();
		} else {
			qyengine['LuckyWheelPanel'] = qyengine.instance_create(current_scene.viewOffset.x, 0, "LuckyWheelPanel", {
				"type": "LuckyWheelPanel",
				"id": "LuckyWheelPanel",
				"zIndex": 10,
				"layer": "layer0"
			});
			game.vars_.daZhuanPan = qyengine['LuckyWheelPanel'];
			qyengine.guardId("ActivePanel").appendChild("LuckyWheelPanel", 0, 0);
		}
		//时间
		var startTime = "" + game.vars_.activeOpenTimeDic[11].time_start[0] + "年" + game.vars_.activeOpenTimeDic[11].time_start[1] + "月" + game.vars_.activeOpenTimeDic[11].time_start[2] + "日";
		var overTime = "" + game.vars_.activeOpenTimeDic[11].time_over[0] + "年" + game.vars_.activeOpenTimeDic[11].time_over[1] + "月" + game.vars_.activeOpenTimeDic[11].time_over[2] + "日";
		qyengine['LuckyWheelPanel'].objects['txt_luckyWheelCommon'].text = "活动时间：" + startTime + "--" + overTime;
		qyengine['LuckyWheelPanel'].vars_.freeNum = arguments[0].freeNum;
		qyengine['LuckyWheelPanel'].vars_.score = arguments[0].score;
		qyengine['LuckyWheelPanel'].vars_.exchangeRewards = arguments[0].exchangeRewards;
		qyengine['LuckyWheelPanel'].objects['txt_luckyWheelCommon_4'].text = "已有积分：" + arguments[0].score;
		if (Number(qyengine['LuckyWheelPanel'].vars_.freeNum) <= 0) {
			qyengine['LuckyWheelPanel'].objects['txt_luckyWheelCommon_free'].hide();
			qyengine['LuckyWheelPanel'].objects['txt_luckyWheelCommon_haveTimes'].text = 20;
			qyengine['LuckyWheelPanel'].objects['txt_luckyWheelCommon_haveTimes'].show();
			qyengine['LuckyWheelPanel'].objects['obj_Active_interface_zhuanpan_06'].show();
		} else {
			qyengine['LuckyWheelPanel'].objects['txt_luckyWheelCommon_free'].show();
			qyengine['LuckyWheelPanel'].objects['txt_luckyWheelCommon_haveTimes'].hide();
			qyengine['LuckyWheelPanel'].objects['obj_Active_interface_zhuanpan_06'].hide();
		}
		var configData = game.configs.luckywheel_lottery;
		for (var _cell in configData) {
			qyengine['LuckyWheelPanel'].objects['txt_luckyWheelCommon_' + (5 + Number(_cell - 1))].text = configData[_cell].name;
			qyengine['LuckyWheelPanel'].objects['obj_Icon_goods_1_' + (Number(_cell - 1))].changeSprite("obj_" + configData[_cell].show + "_default");
		}
	}
	function dataBack() {
		if (arguments[1]) {
			drawWheel(arguments[2]);
		} else {
			arguments[2].code && game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
		}
		game.scripts["al_scr_gameloadDestroy"](null, null);
	}
	game.scripts["al_scr_gameloadCreate"](null, null);
	QyRpc.LuckyWheelView(dataBack);

	//点击抽奖
	function wheelBack() {
		if (arguments[1]) {
			self.vars_.canTouch = false;
			preventToDown();
			qyengine['LuckyWheelPanel'].vars_.freeNum = arguments[2].freeNum;
			qyengine['LuckyWheelPanel'].vars_.score = arguments[2].score;
			qyengine['LuckyWheelPanel'].objects['txt_luckyWheelCommon_4'].text = "已有积分：" + arguments[2].score;
			if (Number(qyengine['LuckyWheelPanel'].vars_.freeNum) <= 0) {
				qyengine['LuckyWheelPanel'].objects['txt_luckyWheelCommon_free'].hide();
				qyengine['LuckyWheelPanel'].objects['txt_luckyWheelCommon_haveTimes'].text = 20;
				qyengine['LuckyWheelPanel'].objects['txt_luckyWheelCommon_haveTimes'].show();
				qyengine['LuckyWheelPanel'].objects['obj_Active_interface_zhuanpan_06'].show();
			} else {
				qyengine['LuckyWheelPanel'].objects['txt_luckyWheelCommon_free'].show();
				qyengine['LuckyWheelPanel'].objects['txt_luckyWheelCommon_haveTimes'].hide();
				qyengine['LuckyWheelPanel'].objects['obj_Active_interface_zhuanpan_06'].hide();
			}
			qyengine['LuckyWheelPanel'].vars_.place = arguments[2].rewardId;
			qyengine['LuckyWheelPanel'].vars_.placeIndex = arguments[2].rewardIdx;

			startLuckyWheel();

		} else {
			arguments[2].code && game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
		}
		game.scripts["al_scr_gameloadDestroy"](null, null);
	}

	function preventToDown() {
		if (qyengine.getInstancesByType("obj_luckyWheelExchangeMengban").length) {
			qyengine.getInstancesByType("obj_luckyWheelExchangeMengban")[0].show();
		} else {
			qyengine['obj_luckyWheelExchangeMengban'] = qyengine.instance_create(current_scene.viewOffset.x + 360, 640, "obj_luckyWheelExchangeMengban", {
				"type": "obj_luckyWheelExchangeMengban",
				"id": "obj_luckyWheelExchangeMengban",
				"zIndex": 99,
				"layer": "layer0"
			});
		}
	}
	function startLuckyWheel() {
		qyengine['LuckyWheelPanel'].vars_.markInterval && clearInterval(qyengine['LuckyWheelPanel'].vars_.markInterval);
		qyengine['LuckyWheelPanel'].objects['obj_Active_interface_zhuanpan_04'].setRotation(0);

		//var grou_luckyWheel = {};   //组合ui
		var needStopPlace = qyengine['LuckyWheelPanel'].vars_.place;  //需要移动到的位置
		var rotationRateNum = 4;   //几圈
		var moveOneAngle = 360 / (Object.keys(game.configs.luckywheel_lottery).length * 2);
		var needAngle = -(moveOneAngle + moveOneAngle * 2 * (needStopPlace - 1) + 360 * rotationRateNum);
		qyengine['LuckyWheelPanel'].vars_.markInterval = setInterval(function () {
			var _objRotation = qyengine['LuckyWheelPanel'].objects['obj_Active_interface_zhuanpan_04'];
			_objRotation.setRotation(_objRotation.getRotation() - 13.5);
			if (_objRotation.getRotation() <= needAngle) {
				clearInterval(qyengine['LuckyWheelPanel'].vars_.markInterval);
				qyengine['LuckyWheelPanel'].vars_.markInterval = null;
				calReward();
				self.vars_.canTouch = true;
				qyengine.forEach(function () {
					this.hide();
				}, 'obj_luckyWheelExchangeMengban');
			}
		}, 25);
	}
	function calReward() {
		var _rewardId = qyengine['LuckyWheelPanel'].vars_.place;
		var _rewardPlace = qyengine['LuckyWheelPanel'].vars_.placeIndex;
		var configData = game.configs.luckywheel_lottery;
		for (var cell in configData) {
			if (Number(cell) == Number(_rewardId)) {
				var nowReward = configData[cell].reward.split("#")[_rewardPlace];
				var splitRewardType = nowReward.split('|');
				var _type = Number(splitRewardType[0]);
				var _id = Number(splitRewardType[1])
				var _num = Number(splitRewardType[2]);
				if (_type == 2) {
					var isOwn = !(game.vars_.bagList.cloth[_id] == undefined);
				}
				if (_type == 3) {
					var isOwn = !(game.vars_.bagList.plan[_id] == undefined);
				}
				if (_type == 4) {
					var isOwn = !(game.vars_.playInfoJson.bgMap.maps[_id] == undefined);
				}
				if (_type == 5) {
					var isOwn = !(game.vars_.playInfoJson.hero_gift[_id] == undefined);
				}
				game.vars_.dropList = [{ 'type': _type, 'id': _id, 'num': _num, 'isOwn': isOwn }];
				current_game.scripts['al_scr_' + "AddToBag"].call(this, undefined, this, game.vars_.dropList);
				//InitAwardBg
				current_game.scripts['al_scr_' + "InitAwardBg"].call(this, undefined, this, game.vars_.dropList, 'layer1');
			}
		}
	}
	if (qyengine['LuckyWheelPanel'].vars_.freeNum <= 0 && game.vars_.playInfoJson.stone < 20) {
		game.scripts["al_scr_donotEnughStone"](null, null);
	} else {
		game.scripts["al_scr_gameloadCreate"](null, null);
		if (qyengine['LuckyWheelPanel'].vars_.freeNum <= 0) {
			game.vars_.playInfoJson.stone -= 20;
			game.scripts["al_scr_RefreshPowerGoldStoneText"](null, null);
		}

		QyRpc.LuckyWheelOperate(wheelBack);
	}


	//点击兑换
	if (qyengine['LuckyWheelExchangePanel']) {
		qyengine['LuckyWheelExchangePanel'].show();
	} else {
		qyengine['LuckyWheelExchangePanel'] = qyengine.instance_create(0, 0, 'LuckyWheelExchangePanel', {
			"type": "LuckyWheelExchangePanel",
			"id": "LuckyWheelExchangePanel",
			"zIndex": 11,
			"layer": "layer0"
		});
		qyengine['LuckyWheelExchangePanel'].dispatchMessage({
			"type": "message",
			"message": "initData"
		});
	}
	//initData  消息
	self.objects['txt_luckyWheelCommon_alreadyJi'].text = "已有积分：" + qyengine['LuckyWheelPanel'].vars_.score;
	var configData = game.configs.luckywheel_score;
	var alreadyLingQu = qyengine['LuckyWheelPanel'].vars_.exchangeRewards.split(',');
	for (var _cell in configData) {
		var markId = _cell;
		var jiFen = configData[_cell].cost;
		var rewardData = configData[_cell].reward.split('|');
		var id = 1;
		var name = "";
		var icon = "";
		var alreadyRechange = alreadyLingQu.includes(_cell.toString());

		switch (Number(rewardData[0])) {
			case 1:
				var _config = game.configs.prop[Number(rewardData[1])];
				name = _config.name;
				icon = _config.icon;
				break;
			case 2:
				var _config = game.configs.fashion[Number(rewardData[1])];
				name = _config.name;
				icon = _config.sicon;
				break;
			case 3:
				var _config = game.configs.fashionPlan[Number(rewardData[1])];
				name = _config.name;
				icon = _config.icon;
				break;
			case 4:
				var _config = game.configs.bg[Number(rewardData[1])];
				name = _config.name;
				icon = _config.sicon;
				break;
			case 5:
				var _config = game.configs.hero_gift[Number(rewardData[1])];
				name = _config.name;
				icon = _config.icon;
				break;
			default:
				break;
		}
		game.configs.config_luckyWheel[Number(_cell)] = {
			"id": Number(_cell),
			"name": name,
			"icon": 'obj_' + icon + "_default",
			"markId": markId,
			"alreadyRechange": alreadyRechange,
			'jiFen': jiFen,
		};
		self.objects['scro_luckyWheel'].refreshRelations();
		setTimeout(function () {
			self.objects['scro_luckyWheel'].refreshRelations();
		}, 50);
	}


	//  LuckyWheelExchangePanel_item的创建事件
	var propertyObj = self.objects['luckyWheel_exchangeButton'];
	if (propertyObj.vars_.alreadyRechange) {

		propertyObj.objects['obj_Active_interface_zhuanpan_01'].show();
		propertyObj.objects['obj_map_property_yoashi_bt_04'].hide();
		propertyObj.objects['txt_luckyWheelCommon_consumption'].hide();
		propertyObj.objects['obj_Active_interface_zhuanpan_02'].hide();
	} else {
		propertyObj.objects['obj_Active_interface_zhuanpan_01'].hide();
		propertyObj.objects['obj_map_property_yoashi_bt_04'].show();
		propertyObj.objects['txt_luckyWheelCommon_consumption'].show();
		propertyObj.objects['obj_Active_interface_zhuanpan_02'].show();
	}

	//luckyWheel_exchangeButton  点击兑换
	if (self.objects['obj_Active_interface_zhuanpan_01'].isVisible) {
		return;
	}
	var _needCost = Number(game.configs.luckywheel_score[self.vars_.markId].cost);
	if (qyengine['LuckyWheelPanel'].vars_.score < _needCost) {
		game.scripts["al_scr_AddTip_1"](null, null, "积分不足哦~", "layer1");
		return;
	}
	function exchangeBack() {
		if (arguments[1]) {
			qyengine['LuckyWheelPanel'].vars_.score = arguments[2].score;
			qyengine['LuckyWheelPanel'].vars_.exchangeRewards = qyengine['LuckyWheelPanel'].vars_.exchangeRewards + "," + self.vars_.markId;
			qyengine['LuckyWheelPanel'].objects['txt_luckyWheelCommon_4'].text = "已有积分：" + qyengine['LuckyWheelPanel'].vars_.score;
			LuckyWheelExchangePanel.objects['txt_luckyWheelCommon_alreadyJi'].text = "已有积分：" + qyengine['LuckyWheelPanel'].vars_.score;
			var showAndHideStatus = ['obj_Active_interface_zhuanpan_01', 'obj_map_property_yoashi_bt_04', 'obj_Active_interface_zhuanpan_02', 'txt_luckyWheelCommon_consumption'];
			qyengine.getInstancesByType("luckyWheel_exchangeButton")[0]
			showAndHideStatus.forEach(function (e) {
				if (e = "obj_Active_interface_zhuanpan_01") {
					self.objects[e].show();
				} else {
					self.objects[e].hide();
				}
			});

			game.vars_.dropList = [];
			var _dropList = {};
			_dropList.id = arguments[2].reward[0].id;
			_dropList.type = arguments[2].reward[0].type;
			_dropList.num = arguments[2].reward[0].num;
			if (arguments[2].reward[0].type == 2) {
				var isOwn = !(game.vars_.bagList.cloth[arguments[2].reward[0].id] == undefined);
				_dropList.isOwn = isOwn;
			}
			if (arguments[2].reward[0].type == 3) {
				var isOwn = !(game.vars_.bagList.plan[arguments[2].reward[0].id] == undefined);
				_dropList.isOwn = isOwn;
			}
			if (arguments[2].reward[0].type == 4) {
				var isOwn = !(game.vars_.playInfoJson.bgMap.maps[arguments[2].reward[0].id] == undefined);
				_dropList.isOwn = isOwn;
			}
			if (arguments[2].reward[0].type == 5) {
				var isOwn = !(game.vars_.playInfoJson.hero_gift[arguments[2].reward[0].id] == undefined);
				_dropList.isOwn = isOwn;
			}
			game.vars_.dropList.push(_dropList);
			current_game.scripts['al_scr_' + "AddToBag"].call(this, undefined, this, game.vars_.dropList);
			//InitAwardBg
			current_game.scripts['al_scr_' + "InitAwardBg"].call(this, undefined, this, game.vars_.dropList, 'layer1');
		} else {
			console.log(arguments[2].code);
			arguments[2].code && game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
		}
		game.scripts["al_scr_gameloadDestroy"](null, null);
	}
	game.scripts["al_scr_gameloadCreate"](null, null);
	QyRpc.LuckyWheelExchange(self.vars_.markId, exchangeBack);





	if (game.vars_.dropList[cell].type == 2) {
		var isOwn = !(game.vars_.bagList.cloth[game.vars_.dropList[cell].id] == undefined);
		game.vars_.dropList[cell].isOwn = isOwn;
	}
	if (game.vars_.dropList[cell].type == 3) {
		var isOwn = !(game.vars_.bagList.plan[game.vars_.dropList[cell].id] == undefined);
		game.vars_.dropList[cell].isOwn = isOwn;
	}
	if (game.vars_.dropList[cell].type == 4) {
		var isOwn = !(game.vars_.playInfoJson.bgMap.maps[game.vars_.dropList[cell].id] == undefined);
		game.vars_.dropList[cell].isOwn = isOwn;
	}
	if (game.vars_.dropList[cell].type == 5) {
		var isOwn = !(game.vars_.playInfoJson.hero_gift[game.vars_.dropList[cell].id] == undefined);
		game.vars_.dropList[cell].isOwn = isOwn;
	}
}
game.scripts["al_scr_InitAwardBg"](null, null, game.vars_.dropList, "layer1", 0, false);
for (var i = 0; i < game.vars_.dropList.length; ++i) {
	if (game.vars_.dropList[i].id != 100 && game.vars_.dropList[i].id != 101 && game.vars_.dropList[i].id != 102 &&
		game.vars_.dropList[i].id != 103 && game.vars_.dropList[i].id != 114 && game.vars_.dropList[i].id != 115) {
		game.scripts["al_scr_AddToBag"](null, null, game.vars_.dropList[i]);
	}
}

var isOwn = !(game.vars_.bagList.cloth[result.result[i].id] == undefined);
game.vars_.dropList[i] = {
	"type": 2,
	"id": result.result[i].id,
	"num": 1,
	"isOwn": isOwn
};

var isOwn = !(game.vars_.bagList.goods[award[i].id] == undefined);

qyengine.forEach(function () {
	this.hide();
}, "grou_searchResult");



qyengine['LuckyWheelExchangePanel'] && qyengine['LuckyWheelExchangePanel'].hide && qyengine['LuckyWheelExchangePanel'].hide();



game.scripts["al_scr_OpenPhotoGraphersBg"](null, null);















if (qyengine.login._getLoginInfo()._type == "qq" || (window.isShare && window.isShare())) {

	var state = Math.floor(Math.random() * 10) % 2;
	var title;
	if (state == 0) {
		title = "云锦绣织的梦 三生皆为遇见你";

	} else {
		title = "穿越冒险 古风换装 尽在锦绣缘";

	}




	if (game.vars_.SharingIndex != 6 && window.isSharePic && window.isSharePic()) {
		//图片分享
		game.scripts["al_scr_gameloadCreate"](null, null);
		setTimeout(function () {
			game.scripts["al_scr_gameloadDestroy"](null, null);
		}, 1000);
		current_game.scripts['al_scr_' + "getBaseObj64"].call(this, undefined, this, game.vars_.needHideObj, '', game.vars_.baseGroup);
		window.setSharePicture && window.setSharePicture(game.vars_.obj_base64.getCanvas(), "WeChatShareSucceed"/*分享成功回调函数*/, "WeChatShareFailure"/*分享失败回调函数*/)
	} else {
		//普通的文字分享
		if (window.isShare && window.isShare()) {
			window.setChannelShare && window.setChannelShare(title, "锦绣缘", window.avgServerPort + "|" + game.vars_.playInfoJson.uid, "分享图标路径", function () {
				game.scripts["al_scr_" + "WeChatShareSucceed"] && game.scripts["al_scr_" + "WeChatShareSucceed"]();
			}, function () {
				game.scripts["al_scr_" + "WeChatShareFailure"] && game.scripts["al_scr_" + "WeChatShareFailure"]();//分享失败
			});
		}
	}

	return;




} else {

	game.scripts["al_scr_AddTip_1"](null, null, "QQ登录才能分享", "layer1");
}








if (window.isShare && window.isShare()) {

	var state = Math.floor(Math.random() * 10) % 2;
	var title;
	if (state == 0) {
		title = "云锦绣织的梦 三生皆为遇见你";

	} else {
		title = "穿越冒险 古风换装 尽在锦绣缘";

	}



	if (game.vars_.SharingIndex != 6 && window.isSharePic && window.isSharePic()) {
		//图片分享
		game.scripts["al_scr_gameloadCreate"](null, null);
		setTimeout(function () {
			game.scripts["al_scr_gameloadDestroy"](null, null);
		}, 1000);
		game.vars_.needHideObj = Object.keys(grou_photoBack.objects);
		game.vars_.baseGroup = "grou_photoBack";
		current_game.scripts['al_scr_' + "getBaseObj64"].call(this, undefined, this, game.vars_.needHideObj, '', game.vars_.baseGroup);
		window.setSharePicture && window.setSharePicture(game.vars_.obj_base64.getCanvas(), "WeChatShareSucceed"/*分享成功回调函数*/, "WeChatShareFailure"/*分享失败回调函数*/)
	} else {
		window.setChannelShare && window.setChannelShare(title, "锦绣缘", window.avgServerPort + "|" + game.vars_.playInfoJson.uid, "分享图标路径", function () {
			game.scripts["al_scr_" + "WeChatShareSucceed"] && game.scripts["al_scr_" + "WeChatShareSucceed"]();
		}, function () {
			game.scripts["al_scr_" + "WeChatShareFailure"] && game.scripts["al_scr_" + "WeChatShareFailure"]();//分享失败
		});
	}
	return;
}











qyengine.instance_create(0, 0, "grou_gameLoadingBg", {
	"type": "grou_gameLoadingBg",
	"id": "grou_gameLoadingBg",
	"zIndex": 10000,
	"layer": "layer1"
});


var obj = qyengine.getInstancesByType("grou_gameLoadingBg");
if (obj.length > 0) {
	obj[0].destroy();
}







game.vars_.needHideObj = Object.keys(grou_photoBack.objects);
game.vars_.baseGroup = "grou_photoBack";


if (qyengine.getInstancesByType("grou_photoBack").length > 0) {
	game.vars_.needHideObj && game.vars_.needHideObj.forEach(function (e) {
		qyengine.getInstancesByType("grou_photoBack")[0].objects[e].show();
	});
}



game.scripts["al_scr_gameloadCreate"](null, null);
setTimeout(function () {
	game.scripts["al_scr_gameloadDestroy"](null, null);
}, 2000);


//8 7 10 10



TopPanel.vars_.curryTopIndex = 2;
game.scripts["al_scr_TouchTopRankBtn"](null, null);
TopPanelChooseStateIcon.x = self.x;


/**
 * TouchTopRankBtn
 */




function callBack() {
	console.log(arguments);
	if (arguments[1] == true) {
		TopPanel.vars_.DataDic[TopPanel.vars_.curryTopIndex] = arguments[2].rank;
		for (cell in TopPanel.vars_.DataDic[TopPanel.vars_.curryTopIndex]) {
			if (Object.keys(TopPanel.vars_.DataDic[TopPanel.vars_.curryTopIndex][cell].cloth).toString().indexOf("pet") < 0) {
				TopPanel.vars_.DataDic[TopPanel.vars_.curryTopIndex][cell].cloth.pet = 0;
			}
		}
		TopPanel.vars_.CurryTopData = TopPanel.vars_.DataDic[TopPanel.vars_.curryTopIndex];

		game.scripts["al_scr_RefreshTopRank"](null, null);
	} else {
		console.log(arguments[2].code);
		game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
	}
	game.scripts["al_scr_gameloadDestroy"](null, null);
}


if (TopPanel.vars_.DataDic[TopPanel.vars_.curryTopIndex] == null) {
	if (TopPanel.vars_.curryTopIndex == 0) {
		game.scripts["al_scr_gameloadCreate"](null, null);
		QyRpc.clothCollectRank(callBack);
	} else if (TopPanel.vars_.curryTopIndex == 1) {
		game.scripts["al_scr_gameloadCreate"](null, null);
		QyRpc.questLevelRank(callBack)
	} else if (TopPanel.vars_.curryTopIndex == 2) {
		game.scripts["al_scr_gameloadCreate"](null, null);
		QyRpc.FavorLevelRank(callBack)
	}
} else {
	TopPanel.vars_.CurryTopData = TopPanel.vars_.DataDic[TopPanel.vars_.curryTopIndex];
	game.scripts["al_scr_RefreshTopRank"](null, null);
}

qyengine.pay.WeChatPay(self.vars_.rechargeId, 1, null, "ChargeFailCallback", "OrderIdCallback");

//网络繁忙,请稍后重试
//发起支付     grou_reChargeFailed        rechargeFaultPrevent 
current_game.scripts['al_scr_' + "rechargeFaultPrevent"].call(this, undefined, this);
current_scene.vars_.chargeStatus = true;
current_scene.vars_.chargeTimeOut && clearTimeout(current_scene.vars_.chargeTimeOut);
current_scene.vars_.chargeTimeOut = setTimeout(function () {
	var needExist = ['grou_vipPanel', 'grou_map_property_yoashi', "grou_monthCard", "HappyShopPanel"];
	var _show = false;
	for (var _cell in needExist) {
		var _obj = qyengine.getInstancesByType(needExist[cell]);
		if (_obj.length && _obj[0].isVisible) {
			_show = true;
			break;
		}
	}
	_show && current_game.scripts['al_scr_' + "actionlist_rechargeFailed"].call(this, undefined, this);
}, 8000);

//receiveOrderId   收到支付的订单
current_scene.vars_.chargeStatus = false;
current_scene.vars_.chargeTimeOut && clearTimeout(current_scene.vars_.chargeTimeOut);




qyengine.getInstancesByType("grou_reChargeFailed").length && qyengine.getInstancesByType("grou_reChargeFailed")[0].destroy();







/**
 * rechargeFaultPrevent
 */
current_game.scripts['al_scr_' + "actionlist_rechargeFailed"].call(this, undefined, this);
current_scene.vars_.chargeStatus = true;
current_scene.vars_.chargeTimeOut && clearTimeout(current_scene.vars_.chargeTimeOut);
current_scene.vars_.chargeTimeOut = setTimeout(function () {
	var needExist = ['grou_recharge', 'grou_map_property_yoashi', "grou_monthCard", "HappyShopPanel"];
	var _show = false;
	for (var _cell in needExist) {
		var _obj = qyengine.getInstancesByType(needExist[Number(_cell)]);
		if (_obj.length && _obj[0].isVisible) {
			_show = true;
			break;
		}
	}
	_show && current_game.scripts['al_scr_' + "actionlist_rechargeFailed"].call(this, undefined, this, );
}, 6000);







/**
 * actionlist_rechargeFailed
 */

if (current_scene.vars_.chargeStatus) {  //没有成功吊起支付
	if (qyengine.getInstancesByType("grou_reChargeFailed").length) {
		qyengine['grou_reChargeFailed'].show();
	} else {
		qyengine['grou_reChargeFailed'] = qyengine.instance_create(0, 0, "grou_reChargeFailed", {
			"type": "grou_reChargeFailed",
			"id": "grou_reChargeFailed",
			"zIndex": 10,
			"layer": "layer1"
		});
	}
	if (_txt) {
		qyengine['grou_reChargeFailed'].objects['txt_rechargeFailed'].text = "支付请求中...";
		qyengine['grou_reChargeFailed'].objects['obj_Main_tishi_bt_01_failed'].hide();
		qyengine['grou_reChargeFailed'].objects['txt_rechargeFailed'].y = 565 + 15;
	} else {
		qyengine['grou_reChargeFailed'].objects['obj_Main_tishi_bt_01_failed'].show();
		qyengine['grou_reChargeFailed'].objects['txt_rechargeFailed'].text = "同时充值的小仙女太多啦ㄒoㄒ，请稍后重试哦！";
		qyengine['grou_reChargeFailed'].objects['txt_rechargeFailed'].y = 565;
	}
}







current_game.scripts['al_scr_' + "rechargeFaultPrevent"].call(this, undefined, this);

qyengine.pay.WeChatPay(self.vars_.rechargeId, 1, null, "ChargeFailCallback", "OrderIdCallback");






/**
 * InitWeekendActivity
 */

/**
 * InitWeekendActivity
 */

function rechangeShow(getSerData) {
	if (activityId == 12) {   //登陆礼
		var _parent = qyengine.guardId('WeekendItem_0').objects['grou_weekendReceiveBtn'];
		var _parentSun = qyengine.guardId('WeekendItem_1').objects['grou_weekendReceiveBtn'];
		showAndHideButtonLogin(_parent, getSerData.saturdayEnterState, getSerData.orderTime);
		showAndHideButtonLogin(_parentSun, getSerData.sundayEnterState, getSerData.orderTime);
		if (getSerData.orderTime != -1) {
			//_parent.objects['txt_weekendCommon_next'].vars_.zIndex
			_parent.objects['txt_weekendCommon_next'].show();
			_parent.objects['txt_weekendCommon_next'].vars_.seconds = getSerData.orderTime;
			_parent.objects['txt_weekendCommon_next'].startTimeline();
			_parentSun.objects['txt_weekendCommon_next'].show();
			_parentSun.objects['txt_weekendCommon_next'].vars_.seconds = getSerData.orderTime + 24 * 60 * 60;
			_parentSun.objects['txt_weekendCommon_next'].startTimeline();
			grou_alreadyBookingBtn.objects['obj_Main_interface_zhoumo_08'].changeSprite('obj_Main_interface_zhoumo_08_default');
			for (var _h in _parent.objects) {
				if (_h !== "txt_weekendCommon_next") {
					_parent.objects[_h].hide();
					_parentSun.objects[_h].hide();
				}
			}
		} else {
			grou_alreadyBookingBtn.objects['obj_Main_interface_zhoumo_08'].changeSprite('obj_Main_interface_zhoumo_07_default');

		}
	} else {			//在线礼

	}
}



function showAndHideButtonLogin(_parent, satSun, bookTime) {
	if (satSun == 2) {
		_parent.objects['obj_Bg_Active_interface_Already_receive_1'].show();
		_parent.objects['obj_Main_interface_zhoumo_06'].hide();
		_parent.objects['obj_map_property_yoashi_bt_04'].hide();
	} else {
		_parent.objects['obj_Bg_Active_interface_Already_receive_1'].hide();
		_parent.objects['obj_Main_interface_zhoumo_06'].show();
		_parent.objects['obj_map_property_yoashi_bt_04'].show();
	}

}
function weekendLogin() {
	if (arguments[1]) {
		qyengine['WeekendPanel'].show();
		qyengine['WeekendPanel'].vars_.loginData = arguments[2];
		rechangeShow(arguments[2]);
	} else {
		try {
			console.log(arguments[2].code);
			game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
		} catch (error) {
			console.error(error.message);
		}
	}
	game.scripts["al_scr_gameloadDestroy"](null, null);
}
function weekendOnline() {
	if (arguments[1]) {
		qyengine['WeekendPanel'].show();
		qyengine['WeekendPanel'].vars_.onlineData = arguments[2];
		//var wendendDay = new Date(time()).getDay();
		qyengine.forEach(function () {
			if (qyengine['WeekendPanel'].vars_.onlineData.onlineTime == 0) {
				this.objects['AccumulatedItemText'].text = this.objects['AccumulatedItemText'].text.split("(")[0] + "()";
			} else {
				this.objects['AccumulatedItemText'].text = this.objects['AccumulatedItemText'].text.split("(")[0] + "(今日在线" + qyengine['WeekendPanel'].vars_.onlineData.onlineTime + "分钟)";
			}
			//已经领取过
			var _alreadyReceive = qyengine['WeekendPanel'].vars_.onlineData.rewards.indexOf((this.objects['grou_weekendReceiveBtn'].vars_.markIndex + 1)) >= 0;
			var _pa = this.objects['grou_weekendReceiveBtn'].objects;
			for (var _k in _pa) {
				if (_k == "obj_Bg_Active_interface_Already_receive_1" && _alreadyReceive) {
					_pa[_k].show();
				} else if (_alreadyReceive) {
					_pa[_k].hide();
				}

				if ((_k == "obj_Bg_Active_interface_Already_receive_1" || _k == "txt_weekendCommon_next") && !_alreadyReceive) {
					_pa[_k].hide();
				} else if (!_alreadyReceive) {
					_pa[_k].show();
				}
			}

		}, "WeekendItem");
	} else {
		try {
			console.log(arguments[2].code);
			game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
		} catch (error) {
			console.errors(error.message);
		}
	}
	game.scripts["al_scr_gameloadDestroy"](null, null);
}
game.scripts["al_scr_gameloadCreate"](null, null);
activityId == 12 ? QyRpc.WeedendEnterActView(weekendLogin) : QyRpc.getOnlineActivityData(weekendOnline);
if (qyengine.getInstancesByType("WeekendPanel").length == 0) {
	qyengine['WeekendPanel'] = qyengine.instance_create(current_scene.viewOffset.x, 0, "WeekendPanel", {
		"type": "WeekendPanel",
		"id": "WeekendPanel",
		"zIndex": 9,
		"layer": 'layer0'
	});
	qyengine.guardId("ActivePanel").appendChild("WeekendPanel", 0, 0);
} else {
	qyengine['WeekendPanel'].show();
}
qyengine['WeekendPanel'].hide();
qyengine['WeekendPanel'].objects['scro_weekend'].removeAll();
game.vars_.weekendActicity = qyengine['WeekendPanel'];

var _parentObj = qyengine['WeekendPanel'].objects;
var dataConfig_byActivity = null;
if (activityId == 12) {
	_parentObj['obj_Main_interface_zhoumo_09'].changeSprite("obj_Main_interface_zhoumo_09_default");
	_parentObj['txt_weekendCommon'].text = "周末登陆分享，" + "<br/>" + "即可领取奖励哦~"
	dataConfig_byActivity = game.configs.activity_weekend_entry;
	_parentObj['txt_weekendCommon_tip'].hide();
	_parentObj['grou_alreadyBookingBtn'].show();
} else if (activityId == 13) {
	_parentObj['obj_Main_interface_zhoumo_09'].changeSprite("obj_Main_interface_zhoumo_12_default");
	_parentObj['txt_weekendCommon'].text = "周末保持在线，" + "<br/>" + "即可领取奖励哦~"
	dataConfig_byActivity = game.configs.activity_weekend_time;
	_parentObj['txt_weekendCommon_tip'].show();
	_parentObj['grou_alreadyBookingBtn'].hide();
} else {
	console.error("错误,需要查看");
}

var startTime = current_game.scripts['al_scr_' + "CaculateTimeByConfig"].call(this, undefined, this, game.vars_.activeOpenTimeDic[activityId].time_start);
var overTime = current_game.scripts['al_scr_' + "CaculateTimeByConfig"].call(this, undefined, this, game.vars_.activeOpenTimeDic[activityId].time_over);
_parentObj['txt_weekendCommon_time'].text = "活动时间:" + "<br/>" + startTime + "-" + overTime;

for (var item in dataConfig_byActivity) {
	var oneActivityData = dataConfig_byActivity[item];
	var activiy_reward = calculateAward(oneActivityData.reward);
	var obtainObj = null/*getWeekendItemObj(Number(item) - 1)*/;
	if (obtainObj) {
		var markObj = obtainObj;
	} else {
		var markObj = qyengine.instance_create(0, 0, "WeekendItem", {
			"type": "WeekendItem",
			"id": "WeekendItem_" + (Number(item) - 1),
			"zIndex": 9,
		});
		qyengine['WeekendPanel'].objects['scro_weekend'].appendChild(markObj.id, -8, 1, (Number(item) - 1), 0, false, true);
	}

	markObj.vars_.markIndex = Number(item) - 1;
	drawSmallItem(markObj, activiy_reward);
	markObj.objects['grou_weekendReceiveBtn'].vars_.markIndex = Number(item) - 1;
	if (activityId == 12) {
		markObj.objects['grou_weekendReceiveBtn'].objects['obj_Main_interface_zhoumo_06'].changeSprite("obj_Main_interface_zhoumo_05_default");
		var markWord = ["周六登陆礼", "周日登陆礼"];
		markObj.objects['AccumulatedItemText'].text = markWord[(Number(item) - 1)];
	} else {
		markObj.objects['AccumulatedItemText'].text = "在线" + oneActivityData.time + "分钟()";
	}
}
function drawSmallItem(_objs, drawReward) {
	for (var i = 0; i < drawReward.length; i++) {
		switch (Number(drawReward[i].type)) {
			case 1:
				var temp = game.configs.prop[drawReward[i].id];
				var icon = temp.icon;
				break;
			case 2:
				var temp = game.configs.fashion[drawReward[i].id];
				var icon = temp.sicon;
				break;
			case 3:
				var temp = game.configs.fashionPlan[drawReward[i].id];
				var icon = temp.icon;
				break;
			case 4:
				var temp = game.configs.bg[drawReward[i].id];
				var icon = temp.sicon;
				break;
			case 5:
				var temp = game.configs.hero_gift[drawReward[i].id];
				var icon = temp.icon;
				break;
			default:
				break;
		}
		var rewardObjItem = qyengine.instance_create(0, 0, "AccumulatedIAwardItem", {
			"type": "AccumulatedIAwardItem",
			"id": "AccumulatedIAwardItem_" + _objs.vars_.markIndex + "_" + i,
			"zIndex": 9,
			"layer": "layer0"
		});
		_objs.objects['scro_weekendAward'].appendChild(rewardObjItem.id, -5, 1, 0, i, false, true);
		rewardObjItem.objects['AccumulatedIAwardIcon'].changeSprite("obj_" + icon + "_default");
		rewardObjItem.objects['AccumulatedIAwardIcon'].setScale(0.4, 0.4);
		rewardObjItem.objects['AccumulatedIAwardText'].text = "X" + drawReward[i].num;
		rewardObjItem.objects['AccumulatedIAwardText'].x -= 3;

	}
}
//如果存在 WeekendItem  重复利用
function getWeekendItemObj() {
	if (qyengine.getInstancesByType("WeekendItem").length) {
		local.backObj = null;
		qyengine.forEach(function () {
			if (this.markIndex && this.markIndex == arguments[0]) {
				local.backObj = this;
			}
		}, "WeekendItem");
		return local.backObj;
	} else {
		return null;
	}
}
function calculateAward() {
	var _dataConfig = arguments[0];
	_dataConfig = _dataConfig.split("#");
	var allData = [];
	for (var _cell in _dataConfig) {
		var idTypeAndNum = _dataConfig[_cell].split("|");
		var oneData = { "id": idTypeAndNum[1], "type": idTypeAndNum[0], 'num': idTypeAndNum[2] };
		allData.push(oneData);
	}
	return allData;
}




//登录礼  领取奖励领取成功
function weekendReward() {
	if (arguments[1]) {
		//game.vars_.playInfoJson.gold = arguments[2].gold;
		//game.vars_.playInfoJson.power = arguments[2].power;
		//game.vars_.playInfoJson.flowergold = arguments[2].flowergold;
		//game.vars_.playInfoJson.currency = arguments[2].currency;
		qyengine['WeekendPanel'].vars_.loginData.saturdayEnterState = arguments[2].saturdayEnterState;
		qyengine['WeekendPanel'].vars_.loginData.sundayEnterState = arguments[2].sundayEnterState;
		if (game.vars_.SharingIndex == 18) {
			qyengine.guardId('WeekendItem_0').objects['grou_weekendReceiveBtn'].dispatchMessage({
				"type": "message",
				"message": "refreshShow"
			});
		} else {
			qyengine.guardId('WeekendItem_1').objects['grou_weekendReceiveBtn'].dispatchMessage({
				"type": "message",
				"message": "refreshShow"
			});
		}
		game.vars_.dropList = [];
		for (var i = 0; i < arguments[2].reward.length; i++) {
			var isOwn = false;
			var dropListItem = {};
			if (arguments[2].reward[i].type == 2) {
				isOwn = !(game.vars_.bagList.cloth[_id] == undefined);
			}
			if (arguments[2].reward[i].type == 3) {
				isOwn = !(game.vars_.bagList.plan[_id] == undefined);
			}
			if (arguments[2].reward[i].type == 4) {
				isOwn = !(game.vars_.playInfoJson.bgMap.maps[_id] == undefined);
			}
			if (arguments[2].reward[i].type == 5) {
				isOwn = !((game.vars_.playInfoJson.hero_gift && game.vars_.playInfoJson.hero_gift[_id]) == undefined);
			}
			dropListItem.id = arguments[2].reward[i].id;
			dropListItem.type = arguments[2].reward[i].type;
			dropListItem.num = arguments[2].reward[i].num;
			game.vars_.dropList.push(dropListItem);
			//game.vars_.dropList = [{ 'type': _type, 'id': _id, 'num': _num, 'isOwn': isOwn }];
		}
		current_game.scripts['al_scr_' + "AddToBag"].call(this, undefined, this, game.vars_.dropList);
		//InitAwardBg
		current_game.scripts['al_scr_' + "InitAwardBg"].call(this, undefined, this, game.vars_.dropList, 'layer1');

	} else {
		console.log(arguments[2].code);
		game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
	}
	game.scripts["al_scr_gameloadDestroy"](null, null);
}

game.scripts["al_scr_gameloadCreate"](null, null);
QyRpc.WeedendEnterActPost(game.vars_.SharingIndex == 18 ? 6 : 7, weekendReward);






/**
 * refreshShow   消息
 */
/*
var weekendStatus = self.vars_.markIndex == 0 ? qyengine['WeekendPanel'].vars_.loginData.saturdayEnterState : qyengine['WeekendPanel'].vars_.loginData.sundayEnterState;
showAndHideButtonLogin(self, weekendStatus, null);
function showAndHideButtonLogin(_parent, satSun, bookTime) {
	for (var _i in _parent.objects) {
		var _judge = (satSun == 2 && _i == "obj_Bg_Active_interface_Already_receive_1") ||
			(satSun == 1 && (_i == "obj_Main_interface_zhoumo_06" || _i == "obj_map_property_yoashi_bt_04"));
		if (_judge) {
			_parent.objects[_i].show();
		} else {
			_parent.objects[_i].hide();
		}
	}
}
*/

var _pa = self.objects;
for (var _k in _pa) {
	if (_k == "obj_Bg_Active_interface_Already_receive_1") {
		_pa[_k].show();
	} else {
		_pa[_k].hide();
	}
}

//tm_weekend 时间轴

if (self.vars_.seconds >= 0) {
	self.vars_.seconds--;
	self.text = backTimeWord();
}
function backTimeWord() {
	var day = Math.floor((self.vars_.seconds / 3600) / 24);
	var hour = Math.floor((self.vars_.seconds - day * 24 * 3600) / 3600);
	var minus = Math.floor((self.vars_.seconds - hour * 3600 - day * 24 * 3600) / 60);
	var seconds = Math.floor((self.vars_.seconds - hour * 3600 - day * 24 * 3600 - minus * 60));
	if (hour < 10) {
		hour = "0" + hour;
	}
	if (minus < 10) {
		minus = "0" + minus;
	}
	if (seconds < 10) {
		seconds = "0" + minus;
	}
	return "" + day + "天" + hour + "时" + minus + "分" + seconds + "秒";
}


/**
 * 预约周末活动的点击事件
 */
if (/*qyengine['WeekendPanel'].vars_.loginData.saturdayEnterState == 2 && */qyengine['WeekendPanel'].vars_.loginData.sundayEnterState == 0) {
	game.scripts["al_scr_AddTip_1"](null, null, "请领取周日登录奖励后预约哦~", "layer1");
	return;
}
if (qyengine['WeekendPanel'].vars_.loginData.orderTime != -1) {
	return;
}
function bookingBack() {
	if (arguments[1]) {
		var _parent = qyengine.guardId('WeekendItem_0').objects['grou_weekendReceiveBtn'];
		var _parentSun = qyengine.guardId('WeekendItem_1').objects['grou_weekendReceiveBtn'];

		grou_alreadyBookingBtn.objects['obj_Main_interface_zhoumo_08'].changeSprite('obj_Main_interface_zhoumo_08_default');
		_parent.objects['txt_weekendCommon_next'].show();
		_parent.objects['txt_weekendCommon_next'].vars_.seconds = arguments[2].orderTime;
		_parent.objects['txt_weekendCommon_next'].startTimeline();
		_parentSun.objects['txt_weekendCommon_next'].show();
		_parentSun.objects['txt_weekendCommon_next'].vars_.seconds = arguments[2].orderTime + 24 * 60 * 60;
		_parentSun.objects['txt_weekendCommon_next'].startTimeline();
		for (var _h in _parent.objects) {
			if (_h !== "txt_weekendCommon_next") {
				_parent.objects[_h].hide();
				_parentSun.objects[_h].hide();
			}
		}
	} else {
		console.log(arguments[2].code);
		game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
	}
	game.scripts["al_scr_gameloadDestroy"](null, null);
}

game.scripts["al_scr_gameloadCreate"](null, null);
QyRpc.WeekendActOrder(bookingBack);


game.vars_.SharingIndex == 18;
current_game.scripts['al_scr_' + "GetAwardActivityWeekend"].call(this, undefined, this);
















game.scripts["al_scr_OpenInviteFriendPanel"](null, null);

//SuitChestPanel     ShareIngBasePanel






/**
 * grou_sevenTarget_item下的selectShow  消息事件
 */
if (self.vars_.day == grou_sevenTargetMain.vars_.nowTab) {
	if (event.argument0) {
		self.objects["obj_Main_interface_qirimubiao_bt_01_1"].show();
	} else {
		self.objects["obj_Main_interface_qirimubiao_bt_01_1"].hide();
	}
}
/**
 * grou_sevenTargetMain下的消息事件
 */
var selectDay = self.vars_.nowTab;
var config_obj = game.configs.seven;
//计数 >3   return 
var _index = 0;
//先隐藏防止切换出错
for (var _a = 0; _a < 3; _a++) {
	for (var _b = 0; _b < 3; _b++) {
		self.objects["obj_Main_interface_qirimubiao_icon" + _a + "_" + _b].hide();
		if (_b == 2) {
			self.objects['txt_sevenTarget_rewardNum' + _a + "_" + _b].hide();
		}
	}
}

for (item in config_obj) {
	if (config_obj[item].day == selectDay) {
		ReChangeSprite(config_obj[item], _index, item);
		//三个领取 按钮的状态
		getRewardButtonStatus(_index);
		qyengine.guardId("obj_Fate_interaction_bt_05_seven" + _index).vars_.markId = item;
		//次日奖励
		if (_index == 0) {
			NextDayReward(config_obj[item]);
		}
		if (++_index > 3) {
			break;
		}
	}
}



function getRewardButtonStatus(markWhichIndex) {
	//1前往  2领取  3已领取
	var markStatus = self.vars_.server_data[selectDay][markWhichIndex];
	switch (markStatus) {
		case 1:
			self.objects['obj_Fate_interaction_bt_05_seven' + (markWhichIndex)].changeSprite("obj_Fate_interaction_bt_06_seven_default");
			self.objects['obj_Main_interface_qirimubiao_bt_03_' + (markWhichIndex)].changeSprite("obj_Main_interface_qirimubiao_bt_04_default");
			self.objects['obj_Main_interface_qirimubiao_bt_03_' + (markWhichIndex)].show();
			self.objects['obj_Fate_interaction_bt_05_seven' + (markWhichIndex)].show();
			break;
		case 3:
			//obj_Bg_Active_interface_Already_receive
			self.objects['obj_Fate_interaction_bt_05_seven' + (markWhichIndex)].changeSprite("obj_Bg_Active_interface_Already_receive_default");
			self.objects['obj_Main_interface_qirimubiao_bt_03_' + (markWhichIndex)].hide();
			self.objects['obj_Fate_interaction_bt_05_seven' + (markWhichIndex)].show();
			break;
		default:
			self.objects['obj_Main_interface_qirimubiao_bt_03_' + (markWhichIndex)].show();
			self.objects['obj_Main_interface_qirimubiao_bt_03_' + (markWhichIndex)].changeSprite("obj_Main_interface_qirimubiao_bt_03_default");
			self.objects['obj_Fate_interaction_bt_05_seven' + (markWhichIndex)].changeSprite("obj_Fate_interaction_bt_05_seven_default");
			self.objects['obj_Fate_interaction_bt_05_seven' + (markWhichIndex)].show();
			break;
	}
	self.objects['obj_Fate_interaction_bt_05_seven' + (markWhichIndex)].vars_.buttonStatus = markStatus;
}
//次日奖励的展示
function NextDayReward(ItemData) {
	if (ItemData.tomorrow == -1) {
		self.objects["obj_Show_dress_25068_seven"].hide();
		self.objects['txt_sevenTarget_common_2'].text = "" + ItemData.tomorrow_dec;
		self.objects['txt_sevenTarget_common_3'].hide();
		return;
	} else {
		self.objects["obj_Show_dress_25068_seven"].changeSprite("obj_" + ItemData.tomorrow + "_default");
		//self.objects['txt_sevenTarget_common_2'].text = ItemData.tomorrow_dec.split(ItemData.name)[0];
		self.objects['txt_sevenTarget_common_2'].text = ItemData.tomorrow_dec.split(ItemData.name)[0] + "<font  color='#ff0000'>" + ItemData.name + "</font>";
		self.objects["obj_Show_dress_25068_seven"].show();
		//self.objects['txt_sevenTarget_common_3'].text = ItemData.name;
	}
	grou_sevenTargetMain.objects['txt_sevenTarget_common_4'].hide();
}
function ReChangeSprite(config_obj_item, which_index, _item) {
	var condition = config_obj_item.condition.split("|");
	var reward_obj = config_obj_item.reward.split(";");
	var parent_obj = grou_sevenTargetMain.objects;
	var titleText = "";
	switch (Number(condition[0])) {
		case 1:
			titleText = "通关剧情" + "(" + game.configs.quest[condition[1]].tab_1 + ")";
			//getStroyId
			var markStoryConfigId = 0;
			for (var _item in game.configs.story) {
				if (game.configs.story[_item].chapterId == game.configs.quest[condition[1]].storyId) {
					markStoryConfigId = _item;
					break;
				}
			}
			qyengine.guardId("obj_Fate_interaction_bt_05_seven" + which_index).vars_.argument0 = markStoryConfigId;
			qyengine.guardId("obj_Fate_interaction_bt_05_seven" + which_index).vars_.argument1 = condition[1];
			break;
		case 12:
			qyengine.guardId("obj_Fate_interaction_bt_05_seven" + which_index).vars_.argument0 = Number(condition[1]);
		default:
			var temp_config = game.configs.config_sevenTarget_taskType[Number(condition[0])];
			if (temp_config.dec.indexOf("%s") == -1) {
				titleText = temp_config.dec;
			} else {
				titleText = temp_config.dec.replace("%s", "" + condition[1]);
				//增加有进度任务的完成的进度
				titleText = titleText + "(" + self.vars_.progress_item[condition[0]] + "/" + condition[1] + ")";
				//记录完成单个任务需要的次数
				qyengine.guardId("obj_Fate_interaction_bt_05_seven" + which_index).vars_.conditionTotalNum = Number(condition[1]);
			}
			break;
	}
	parent_obj["txt_sevenTarget_common_reward" + which_index].text = titleText;
	qyengine.guardId("obj_Fate_interaction_bt_05_seven" + which_index).vars_.conditionId = Number(condition[0]);
	//1物品2服装3设计图4背景5礼物|编号|数量
	for (_cell in reward_obj) {
		var children_obj = reward_obj[_cell].split("|");
		var children_obj_date = BackPicAndNum(children_obj);
		var iconObj = parent_obj["obj_Main_interface_qirimubiao_icon" + which_index + "_" + _cell];
		iconObj.show();
		iconObj.changeSprite(children_obj_date[0]);
		//图纸需要缩放
		if (children_obj_date.length > 2) {
			iconObj.setScale(children_obj_date[2][0], children_obj_date[2][1])
		} else {
			iconObj.setScale(1, 1);
		}
		parent_obj["txt_sevenTarget_rewardNum" + which_index + "_" + _cell].text = children_obj_date[1];
		parent_obj["txt_sevenTarget_rewardNum" + which_index + "_" + _cell].show();
	}
}
function BackPicAndNum(reward_child) {
	var needBackArr = [];
	var configsArr = [0, game.configs.prop, game.configs.fashion, game.configs.fashionPlan, game.configs.bg, game.configs.hero_gift];
	var switch_value = Number(reward_child[0]);
	switch (switch_value) {
		case 1:
			needBackArr[0] = "obj_" + configsArr[1][reward_child[1]].smallIcon + "_default";
			break;
		case 3:   //图纸需要缩放
			needBackArr[2] = [0.5, 0.5];
		case 5:
			needBackArr[0] = "obj_" + configsArr[switch_value][reward_child[1]].icon + "_default";
			break;
		case 2:
			needBackArr[0] = "obj_" + configsArr[switch_value][reward_child[1]].sicon + "_default";
			break;
		case 4:
			needBackArr[0] = "obj_" + configsArr[switch_value][reward_child[1]].sicon + "_default";
			break;
		default:
			console.error("出现了错误");
			break;
	}
	needBackArr[1] = Number(reward_child[2]);
	return needBackArr;
}







//JumpToMission
var questConfigId = game.configs.quest[data].storyId;
var storyConfig = game.configs.story;
var chapterId = null;
for (var _cell in storyConfig) {
	if (Number(storyConfig[_cell].chapterId) == Number(questConfigId)) {
		chapterId = Number(_cell);
		break;
	}
}
game.scripts["al_scr_intochooseQuest"](null, null, questConfigId, Number(data));

















//Button_ManualSuit 
qyengine.instance_create(150, 0, "grou_clothDetail", {
	"type": "grou_clothDetail",
	"id": "grou_clothDetail",
	"zIndex": 15
});

//itemType 物品的类型
//名字 
var goodsName;
//品质
var quality;
//图标
var type;
var typeStr;
//描述
var describe;
//属性
var property;

//获取途径
var getWay;

//属性详情
var propertyDetail;

//Type:1:材料 2：衣服 3：设计图
if (itemType == 1) {
	goodsName = getConfig("prop", itemId, "name");
	quality = getConfig("prop", itemId, "quality");
	type = null;
	typeStr = null;
	describe = getConfig("prop", itemId, "info");
	property = null;
	getWay = getConfig("prop", itemId, "gatWay").split("#");
	propertyDetail = null;
	grou_clothDetail.objects.obj_Icon_cloth.changeSprite("obj_" + getConfig("prop", itemId, "icon") + "_default");
} else if (itemType == 3) {
	goodsName = getConfig("fashionPlan", itemId, "name");
	quality = getConfig("fashionPlan", itemId, "quality");
	type = null;
	typeStr = null;
	describe = getConfig("fashionPlan", itemId, "info");
	property = null;
	getWay = getConfig("fashionPlan", itemId, "gatWay").split("#");
	propertyDetail = null;
	grou_clothDetail.objects.obj_Icon_cloth.changeSprite("obj_" + getConfig("fashionPlan", itemId, "icon") + "_default");


} else {
	goodsName = getConfig("fashion", itemId, "name");
	quality = getConfig("fashion", itemId, "quality");;
	type = getConfig("fashion", itemId, "type");
	typeStr = getConfig("suitType", type, "name");
	describe = getConfig("fashion", itemId, "info");
	property = getConfig("fashion", itemId, "propertyInfo");
	getWay = getConfig("fashion", itemId, "gatWay").split("#");
	propertyDetail = getConfig("fashion", itemId, "property")
	grou_clothDetail.objects.obj_Icon_cloth.changeSprite("obj_Icon_" + typeStr + "_" + itemId + "_default");


}


//设计路界面的来源购买函数不一样
if (itemType != null) {
	game.vars_.fashionPlanOpen = true;

} else {
	game.vars_.fashionPlanOpen = false;
}




grou_clothDetail.objects.txt_clothName.setText(goodsName);

if (!quality == false) {
	for (var i = 0; i < quality; i++) {
		//qyengine.instance_create(0,0,"obj_Icon_love",{"type":"obj_Icon_love","id":"obj_love_"+i,"zIndex":0});
		grou_clothDetail.addOneInstance("obj_Icon_love", 345 + 42 * i, 256, {
			id: "obj_love_" + i
		});
	}

}




txt_manual_clothDescribe.setText("     " + describe);


var propertyArr = [];
if (!property == false) {
	propertyArr = property.split("#");
}


for (var i = 0; i < propertyArr.length; i++) {
	//qyengine.instance_create(0,0,"obj_FontImage_property_"+propertyArr[i],{"type":"obj_FontImage_property_"+propertyArr[i],"id":"obj_manual_property_"+propertyArr[i],"zIndex":0});
	grou_clothDetail.addOneInstance("obj_FontImage_property_" + propertyArr[i], 160 + 90 * i, 525, {
		id: "obj_manual_property_" + propertyArr[i]
	});
	qyengine.guardId("obj_manual_property_" + propertyArr[i]).setScale(0.85, 0.85);
}


var propertyDetailArr = [];
if (!propertyDetail == false) {
	propertyDetailArr = propertyDetail.split("#");
}



var position = [
	[53, 45],
	[153, 45],
	[253, 45],
	[53, 135],
	[153, 135],
	[253, 135]
];
for (var i = 0; i < propertyDetailArr.length; i++) {
	var temp = propertyDetailArr[i].split("|");
	cont_manual_property.addOneInstance("obj_FontImage_property_" + temp[0], position[i][0], position[i][1], {
		id: "obj_right_property_" + temp[0]
	});
	qyengine.guardId("obj_right_property_" + temp[0]).setScale(0.72, 0.72);

	cont_manual_property.addOneInstance("obj_Icon_settlement_A_01", position[i][0] + 41, position[i][1] + 24, {
		id: "obj_settlement_" + temp[0]
	});
	qyengine.guardId("obj_settlement_" + temp[0]).changeSprite("obj_Icon_settlement_" + temp[1] + "_01_default");
}
cont_manual_property.hide();

/*
1"关卡掉落",
2"锦绣庄购买",
3"设计图制做",
4"裁缝铺进化",
5"签到", 
6"首充礼包", 
7"水晶兑换", 
8"竞技币兑换", 
9"百花币兑换", 
10"云梦锦限定",
11"裁缝高级定制",
12"直接购买",(仅限设计图)
13"服装分解",
14 七天领取套装活动
15 邀请好友赠送套装
16.新手引导
17. VIP会员福利
18 端午活动
*/
//获取途径  itemType
var getwList = ["创建角色自动拥有", "关卡掉落", "锦绣庄购买", "设计图制做", "制衣坊进化",
	"签到", "首充礼包", "水晶兑换", "竞技币兑换", "百花币兑换", "云梦锦限定", "制衣坊高级定制", "直接购买", "服装分解", "七天领取套装活动", "邀请好友赠送套装", "新手引导", "VIP会员福利", "端午活动"
];

for (var i = 0; i < getWay.length; i++) {
	var temp = getWay[i].split("|");

	qyengine.instance_create(0, 0, "grou_accessWay", {
		"type": "grou_accessWay",
		"id": "grou_accessWay_" + i,
		"zIndex": 0
	});
	scro_manual_accessWay.appendChild("grou_accessWay_" + i, 0, 0, i, 0, false, true);
	qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWay.setText(getwList[parseInt(temp[0])]);




	switch (parseInt(temp[0])) {
		case 0:

			qyengine.guardId("grou_accessWay_" + i).objects.obj_Icon_Gold.hide();
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setPosition(14, 90)

			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setText(getwList[parseInt(temp[0])]);
			//qyengine.guardId("grou_accessWay_" + i).addOneInstance("grou_btnAccessWay_3", 330, 70, {
			//  id: "grou_btnAccessWay_3" + i
			//});
			//qyengine.guardId("grou_btnAccessWay_3" + i).vars_.index = parseInt(temp[0]);

			break;



		case 1:

			qyengine.guardId("grou_accessWay_" + i).objects.obj_Icon_Gold.hide();
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setPosition(14, 90)
			var questInfo = getConfig("quest", temp[1]);
			var questId = Number(temp[1]);
			var chapterId = 0;
			for (var _cell in game.configs.story) {
				if (Number(game.configs.story[_cell].chapterId) == Number(questInfo.storyId)) {
					chapterId = Number(_cell);
					break;
				}
			}

			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setText(questInfo.name + "(" + questInfo.tab_1 + ")");
			qyengine.guardId("grou_accessWay_" + i).addOneInstance("grou_btnAccessWay_3", 330, 70, {
				id: "grou_btnAccessWay_3" + i
			});
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.index = parseInt(temp[0]);
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.type = parseInt(temp[0]);
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.questId = questId;
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.chapterId = chapterId;
			break;
		case 2:

			qyengine.guardId("grou_accessWay_" + i).objects.obj_Icon_Gold.hide();
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setPosition(14, 90)
			qyengine.guardId("grou_accessWay_" + i).objects.
				txt_manual_accessWayDescribe.setText(getwList[parseInt(temp[0])]);

			if (temp[1] == "-1") {
				break;
			}


			qyengine.guardId("grou_accessWay_" + i).addOneInstance("grou_btnAccessWay_3", 330, 70, {
				id: "grou_btnAccessWay_3" + i
			});
			//物品ID
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.itemId = itemId;
			//物品类型
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.itemType = itemType;
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.index = parseInt(temp[0]);
			break;
		case 3:

			qyengine.guardId("grou_accessWay_" + i).objects.obj_Icon_Gold.hide();
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setPosition(14, 90)
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setText(getwList[parseInt(temp[0])]);
			if (temp[1] == "-1") {
				break;
			}
			qyengine.guardId("grou_accessWay_" + i).addOneInstance("grou_btnAccessWay_2", 330, 70, {
				id: "grou_btnAccessWay_2" + i
			});
			qyengine.guardId("grou_btnAccessWay_2" + i).vars_.index = parseInt(temp[0]);
			qyengine.guardId("grou_btnAccessWay_2" + i).vars_.itemId = itemId;
			qyengine.guardId("grou_btnAccessWay_2" + i).vars_.itemType = itemType;
			break;
		case 4:

			qyengine.guardId("grou_accessWay_" + i).objects.obj_Icon_Gold.hide();
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setPosition(14, 90)
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setText(getwList[parseInt(temp[0])]);
			if (temp[1] == "-1") {
				break;
			}
			qyengine.guardId("grou_accessWay_" + i).addOneInstance("grou_btnAccessWay_2", 330, 70, {
				id: "grou_btnAccessWay_2" + i
			});
			qyengine.guardId("grou_btnAccessWay_2" + i).vars_.index = parseInt(temp[0]);
			qyengine.guardId("grou_btnAccessWay_2" + i).vars_.itemId = itemId;
			qyengine.guardId("grou_btnAccessWay_2" + i).vars_.itemType = itemType;
			break;
		case 5:
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setPosition(14, 90)
			qyengine.guardId("grou_accessWay_" + i).objects.obj_Icon_Gold.hide();
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setText(getwList[parseInt(temp[0])]);
			if (temp[1] == "-1") {
				break;
			}
			qyengine.guardId("grou_accessWay_" + i).addOneInstance("grou_btnAccessWay_3", 330, 70, {
				id: "grou_btnAccessWay_3" + i
			});
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.index = parseInt(temp[0]);
			break;
		case 6:
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setPosition(14, 90)
			qyengine.guardId("grou_accessWay_" + i).objects.obj_Icon_Gold.hide();
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setText(getwList[parseInt(temp[0])]);
			if (temp[1] == "-1") {
				break;
			}
			qyengine.guardId("grou_accessWay_" + i).addOneInstance("grou_btnAccessWay_3", 330, 70, {
				id: "grou_btnAccessWay_3" + i
			});
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.index = parseInt(temp[0]);
			break;
		case 7:
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setPosition(14, 90)
			qyengine.guardId("grou_accessWay_" + i).objects.obj_Icon_Gold.hide();
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setText(getwList[parseInt(temp[0])]);
			if (temp[1] == "-1") {
				break;
			}
			qyengine.guardId("grou_accessWay_" + i).addOneInstance("grou_btnAccessWay_3", 330, 70, {
				id: "grou_btnAccessWay_3" + i
			});
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.index = parseInt(temp[0]);
			//物品ID
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.itemId = itemId;
			//物品类型
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.itemType = itemType;

			break;
		case 8:
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setPosition(14, 90)
			qyengine.guardId("grou_accessWay_" + i).objects.obj_Icon_Gold.hide();
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setText(getwList[parseInt(temp[0])]);
			if (temp[1] == "-1") {
				break;
			}
			qyengine.guardId("grou_accessWay_" + i).addOneInstance("grou_btnAccessWay_3", 330, 70, {
				id: "grou_btnAccessWay_3" + i
			});
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.index = parseInt(temp[0]);
			//物品ID
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.itemId = itemId;
			//物品类型
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.itemType = itemType;

			break;
		case 9:
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setPosition(14, 90)
			qyengine.guardId("grou_accessWay_" + i).objects.obj_Icon_Gold.hide();
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setText(getwList[parseInt(temp[0])]);
			if (temp[1] == "-1") {
				break;
			}
			qyengine.guardId("grou_accessWay_" + i).addOneInstance("grou_btnAccessWay_3", 330, 70, {
				id: "grou_btnAccessWay_3" + i
			});
			//物品ID
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.itemId = itemId;
			//物品类型
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.itemType = itemType;
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.index = parseInt(temp[0]);
			break;
		case 10:
			qyengine.guardId("grou_accessWay_" + i).objects.obj_Icon_Gold.hide();
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setPosition(14, 90)
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setText(getwList[parseInt(temp[0])]);
			if (temp[1] == "-1") {
				break;
			}
			qyengine.guardId("grou_accessWay_" + i).addOneInstance("grou_btnAccessWay_3", 330, 70, {
				id: "grou_btnAccessWay_3" + i
			});

			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.index = parseInt(temp[0]);
			break;
		case 11:
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setPosition(14, 90)
			qyengine.guardId("grou_accessWay_" + i).objects.obj_Icon_Gold.hide();
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setText(getwList[parseInt(temp[0])]);
			if (temp[1] == "-1") {
				break;
			}
			qyengine.guardId("grou_accessWay_" + i).addOneInstance("grou_btnAccessWay_3", 330, 70, {
				id: "grou_btnAccessWay_3" + i
			});

			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.index = parseInt(temp[0]);
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.itemId = itemId;
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.itemType = itemType;
			break;

		case 12:

			var priceType = getConfig("fashionPlan", itemId, "price").split("|");
			if (priceType[0] == 1)
				qyengine.guardId("grou_accessWay_" + i).objects.obj_Icon_Gold.changeSprite("obj_Icon_goods_5_default");
			else
				qyengine.guardId("grou_accessWay_" + i).objects.obj_Icon_Gold.changeSprite("obj_Icon_goods_1_default");
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setText(priceType[1]);

			qyengine.guardId("grou_accessWay_" + i).addOneInstance("grou_btnAccessWay_1", 330, 70, {
				id: "grou_btnAccessWay_1" + i
			});
			qyengine.guardId("grou_btnAccessWay_1" + i).vars_.itemId = itemId;
			qyengine.guardId("grou_btnAccessWay_1" + i).vars_.itemType = itemType;
			qyengine.guardId("grou_btnAccessWay_1" + i).vars_.index = parseInt(temp[0]);
			break;
		case 13:
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setPosition(14, 90)
			qyengine.guardId("grou_accessWay_" + i).objects.obj_Icon_Gold.hide();
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setText(getwList[parseInt(temp[0])]);
			if (temp[1] == "-1") {
				break;
			}
			qyengine.guardId("grou_accessWay_" + i).addOneInstance("grou_btnAccessWay_3", 330, 70, {
				id: "grou_btnAccessWay_3" + i
			});
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.index = parseInt(temp[0]);
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.itemId = itemId;
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.itemType = itemType;
			break;
		case 14:
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setPosition(14, 90)
			qyengine.guardId("grou_accessWay_" + i).objects.obj_Icon_Gold.hide();
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setText(getwList[parseInt(temp[0])]);
			if (temp[1] == "-1") {
				break;
			}

			qyengine.guardId("grou_accessWay_" + i).addOneInstance("grou_btnAccessWay_3", 330, 70, {
				id: "grou_btnAccessWay_3" + i
			});
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.index = parseInt(temp[0]);
			break;
		case 15:
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setPosition(14, 90)
			qyengine.guardId("grou_accessWay_" + i).objects.obj_Icon_Gold.hide();
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setText(getwList[parseInt(temp[0])]);
			if (temp[1] == "-1") {
				break;
			}
			qyengine.guardId("grou_accessWay_" + i).addOneInstance("grou_btnAccessWay_3", 330, 70, {
				id: "grou_btnAccessWay_3" + i
			});
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.index = parseInt(temp[0]);

			break;
		case 16:
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setPosition(14, 90)
			qyengine.guardId("grou_accessWay_" + i).objects.obj_Icon_Gold.hide();
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setText(getwList[parseInt(temp[0])]);

			break;
		case 17:
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setPosition(14, 90)
			qyengine.guardId("grou_accessWay_" + i).objects.obj_Icon_Gold.hide();
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setText(getwList[parseInt(temp[0])]);
			if (temp[1] == "-1") {
				break;
			}
			qyengine.guardId("grou_accessWay_" + i).addOneInstance("grou_btnAccessWay_3", 330, 70, {
				id: "grou_btnAccessWay_3" + i
			});
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.index = parseInt(temp[0]);
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.itemId = itemId;
			break;
		case 18:
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setPosition(14, 90)
			qyengine.guardId("grou_accessWay_" + i).objects.obj_Icon_Gold.hide();
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setText(getwList[parseInt(temp[0])]);

			break;
		default:
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setPosition(14, 90)
			qyengine.guardId("grou_accessWay_" + i).objects.obj_Icon_Gold.hide();
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setText(temp[1]);
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWay.setText(temp[1]);
			break;
	}
}





manualGrou[0].objects['grou_backBtn_manual'].dispatchMessage({
	"type": "message",
	"message": "shutDownGrou"
});



if (qyengine.isiPhone || qyengine.isiPad) {
	qyengine.pay.iap(game.vars_.userInfo.id, rechargeId);
}













var endTouchTime = qyengine.time.time("local");

if (Math.abs(self.vars_.MouseY - mouseY) >= 25 || Math.abs(self.vars_.MouseX - mouseX) >= 25 ||
	endTouchTime - self.vars_.startTouchTime >= 1500 || !self.vars_.istouch) {
	return;
}

self.vars_.istouch = false;
if (qyengine.getInstancesByType("grou_useCrabYoung").length == 0) //当前在商城界面
{
	if (self.vars_.itemId == 90501 || self.vars_.itemId == 90502) {
		qyengine.instance_create(0, 0, 'grou_buyItem',
			{
				"type": 'grou_buyItem',
				"id": 'grou_buyItem',
				"zIndex": 15,
				"layer": "scene_pop",
				"scene": "sce_mainScene"
			}
		);
		console.log("--------------", self.vars_);
		grou_buyItem.vars_itemId = self.vars_.itemId;
		current_game.scripts['al_scr_' + "init_grou_buyItem"].call(this, undefined, this, 0);
	}
	else if (grou_crabShop.vars_.nowTab == 5 && game.vars_.userInfo.vip_flg != 1) {
		current_game.scripts['al_scr_' + "createCommonToast"].call(this, undefined, this);
	}
	else if (self.vars_.itemId in game.configs.recharge) {
		if (qyengine.isiPhone || qyengine.isiPad) {
			qyengine.pay.iap(game.vars_.userInfo.id, self.vars_.itemId);
		} else {
			console.log('//自动饲养礼包暂时无法购买');
			var grouPay = qyengine.instance_create(0, 0, 'grou_pay',
				{
					"type": 'grou_pay',
					"id": 'grou_pay_1',
					"zIndex": 15,
					"layer": "scene_pop",
					"scene": "sce_mainScene"
				}
			);
			grouPay.vars_.rechargeId = self.vars_.itemId;
			current_game.scripts['al_scr_' + "init_grou_pay"].call(this, undefined, this);
		}

	}
	else {
		qyengine.instance_create(0, 0, 'grou_buyItem',
			{
				"type": 'grou_buyItem',
				"id": 'grou_buyItem',
				"zIndex": 15,
				"layer": "scene_pop",
				"scene": "sce_mainScene"
			}
		);
		console.log("--------------", self.vars_);
		grou_buyItem.vars_itemId = self.vars_.itemId;
		current_game.scripts['al_scr_' + "init_grou_buyItem"].call(this, undefined, this, 0);
	}
}
else {
	var toolNum = 0;
	for (key in game.vars_.userInfo.my_prop) {
		if (game.vars_.userInfo.my_prop[key].sid == self.vars_.itemid) {
			if (game.vars_.userInfo.my_prop[key].num > 0) {
				toolNum = game.vars_.userInfo.my_prop[key].num;
			}
			break;
		}
	}

	var poolLevel = game.vars_.userInfo.pool_level;
	var poolCapacity = game.configs.poolUpgrade[poolLevel].capacity;
	var crab_addCount = 0;
	if (self.vars_.itemid <= 90009 && self.vars_.itemid % 3 == 0) {
		crab_addCount = 10;
	}
	else if (self.vars_.itemid <= 90009 && self.vars_.itemid % 3 == 2) {
		crab_addCount = 5;
	}
	else if (self.vars_.itemid <= 90009 && self.vars_.itemid % 3 == 1) {
		crab_addCount = 1;
	}

	if (game.vars_.userInfo.my_crab.length + crab_addCount > game.configs.poolUpgrade[poolLevel].capacity) {
		current_game.scripts["al_scr_" + "createCommonToast"].call(this, undefined, this, null, "池内螃蟹数量已达上限", null);
	}
	else {
		if (toolNum > 0) {
			current_game.scripts['al_scr_' + "useTool"].call(this, undefined, this, 2, self.vars_.itemid, game.vars_.userInfo.my_prop[key].num);
		}
		else {
			qyengine.guardId("grou_useCrabYoung").destroy();
			//current_scene.vars_.needOpenTab = 1;
			current_game.scripts['al_scr_' + "createBuyItem"].call(this, undefined, this, self.vars_.itemid, 'createUseYoungCrab');
		}
	}
}





//alert(arguments[0]);
//充值成功
data = arguments[0];
current_game.scripts['al_scr_' + "createCommonToast"].call(this, undefined, this, null, "已完成充值", null);
var buyGoodId = qyengine.guardId("grou_pay_1").vars_.rechargeId;
if (buyGoodId in game.configs.recharge) {
	var getCrabGold = Number(game.configs.recharge[buyGoodId].includes) + Number(game.configs.recharge[buyGoodId].gift);
	game.vars_.userInfo.money += getCrabGold;
} else if (buyGoodId == 850001 || buyGoodId == "850001") {
	var getCrabGold = game.configs.package[850001].includes;
	var getItem = game.configs.package[850001].item;
	var getItemNum = getItem.split("|")[1];
	var getItemId = getItem.split("|")[0];
	game.vars_.userInfo.money += Number(getCrabGold);
	//判断已经拥有的物品里面是否有
	if (!JudgeIsHave(getItemId, getItemNum)) {
		var createFormatData = { 'sid': Number(getItemId), 'num': Number(getItemNum) };
		game.vars_.userInfo.my_prop.push(createFormatData);

	}
	AddOtherItem();
	current_game.scripts['al_scr_' + "createAutoManage"].call(this, undefined, this);
}

QyRpc.search_buy_fare(data, function () {
	console.log("充值成功后后端的回调");
});
//更新蟹币
qyengine.forEach(function () {
	this.dispatchMessage(
		{
			"type": "message",
			"message": "changeCrabGold"
		}
	);
}, "grou_crabGoldAddAndShow");

function JudgeIsHave(_getItemId, _getItemNum) {
	for (_cell in game.vars_.userInfo.my_prop) {
		if (game.vars_.userInfo.my_prop[_cell].sid == getItemId) {
			game.vars_.userInfo.my_prop[_cell].num += Number(getItemNum);
			return true;
		}
	}
	return false;
}
function AddOtherItem() {
	for (_cell in game.vars_.userInfo.my_prop) {
		if (game.vars_.userInfo.my_prop[_cell].sid == 850001) {
			break;
		}
	}
	game.vars_.userInfo.my_prop.push({ "sid": 850001 });
}






qyengine.getInstancesByType("grou_changeOverPanel").length && grou_changeOverPanel.destroy();
grou_changeOverPanel && !grou_changeOverPanel.destroyed_ && grou_changeOverPanel.destroy();


qyengine.getInstancesByType('grou_storyBg').length && grou_storyBg.hide();






var req = new XMLHttpRequest();
req.onreadystatechange = function () {
	if (req.readyState == 4 && req.status == 200) {
		var data = JSON.parse(req.responseText);
		if (qyengine.login._getLoginInfo()._type == "haiwanwan") {
			data[1].text = data[1].text.replace("321272986", "314407297");
		}
		data.forEach(function (i) {
			game.configs.notice[i.id] = i;
		});
		grou_starGameUI.dispatchMessage({
			"type": "message",
			"message": "openNotice"
		});
	}
	if (qyengine.getInstancesByType("grou_loadingCircle").length > 0 || !(qyengine.guardId('grou_loadingCircle').destroyed_ || (qyengine.guardId('grou_loadingCircle').isDestroyed && qyengine.guardId('grou_loadingCircle').isDestroyed()))) {

		qyengine.guardId('grou_loadingCircle').destroy();
	}
};
req.open('get', 'http://123.207.107.108/lxjt_dev/notice.json?v=' + time('local'));
req.send();


var xxxh = Object.keys(loongPanel.objects);
var index = 0;
var markTimeInTer = setInterval(function () {
	index < xxxh.length && loongPanel.objects[xxxh[index]].hide();
	index >= xxxh.length && clearInterval(markTimeInTer);
	index++;
	console.log(index + "" + xxxh[index]);
}, 2000);




var needReq = false;
for (var i = 0; i < game.vars_.friendsRank.length; i++) {
	if (game.vars_.friendsRank[i].give && Number(game.vars_.playInfoJson.uid) != Number(game.vars_.friendsRank[i].uid)) {
		needReq = true;
	}
}
needReq && current_game.scripts['al_scr_' + "SendMsgGiveAllFriendsPower"].call(this, undefined, this);
!needReq && game.scripts["al_scr_CodeTips"](null, null, 36);



qyengine.forEach(function () {
	this.hide();
}, "grou_rechargeRemind1")


var whichArr = ["grou_rechargeRemind1", "grou_rechargeRemind2"];
var nowShowObj = qyengine.getInstancesByType(whichArr[which - 1]);
if (nowShowObj.length) {
	nowShowObj[0].show();
} else {
	qyengine.instance_create(-100, 0, whichArr[which - 1], {
		"type": whichArr[which - 1],
		"id": whichArr[which - 1],
		"zIndex": 10,
		"layer": "layer_headerfeet",
		"scene": "main_scene"
	});
}
if (_txt) {

} else if (which == 1) {   //支付请求中...
	game.vars_.requestPaying = true;
	game.vars_.nowPayTimeOut && clearTimeout(game.vars_.nowPayTimeOut);
	grou_rechargeRemind1.objects['obj_龙啸九天_充值繁忙'].changeSprite('obj_龙啸九天_支付请求中_default');
	grou_rechargeRemind1.objects['obj_龙啸九天_关闭按钮_小_remind'].hide();
	game.vars_.nowPayTimeOut = setTimeout(function () {
		if (game.vars_.requestPaying) {
			game.vars_.requestPaying = false;
			game.vars_.nowPayTimeOut && clearTimeout(game.vars_.nowPayTimeOut);
			qyengine.forEach(function () {
				this.hide();
			}, "grou_rechargeRemind1");
			current_game.scripts['al_scr_' + "CreateRechargeRemind"].call(this, undefined, this, 2);
		}
	}, 6500);
}

//onChargeRequest_talkingData
game.vars_.requestPaying = false;
qyengine.forEach(function () {
	this.hide();
}, "grou_rechargeRemind1");
game.vars_.nowPayTimeOut && clearTimeout(game.vars_.nowPayTimeOut);
current_game.scripts['al_scr_' + "CreateRechargeRemind"].call(this, undefined, this, 2);


createMonthPayUI



//李涛支付
if (!qyengine.login._getLoginInfo()._type || qyengine.login._getLoginInfo()._type == "qq" || qyengine.login._getLoginInfo()._type == "weixin") {
	var pos = getConfig('UIConfig', 'grou_payWay_recharge', 'position').split(',');
	var zIndex = getConfig('UIConfig', 'grou_payWay_recharge', 'zIndex');
	var layer = getConfig('UIConfig', 'grou_payWay_recharge', 'layer');

	qyengine.instance_create(pos[0], pos[1], 'grou_payWay_recharge', {
		"id": 'grou_payWay_recharge',
		"zIndex": zIndex,
		"layer": layer
	});

	qyengine.guardId('grou_payWay_recharge').objects.obj_付款方式_按钮_01.setVar("goodId", self.vars_.goodId);
	qyengine.guardId('grou_payWay_recharge').objects.obj_付款方式_按钮_03.setVar("goodId", self.vars_.goodId);
} else {
	qyengine.pay.pay(qyengine.login._getLoginInfo()._type, self.vars_.goodId, 1, 1, 1, "onChargeRequest_talkingData");
}











console.error("充值成功的订单回调", data);

if (data[0]) {

	var rechargeInfo = game.configs.recharge[data[2]];

	var currentIapId = 0;

	var currentAmount = 0;

	var currentRmb = 0;

	if (data[2] > 18) {

		rechargeInfo = game.configs.month_card[data[2]];

		currentIapId = rechargeInfo.price + "元月卡礼包";

		currentAmount = rechargeInfo.gold;

		currentRmb = rechargeInfo.gold.toString();

	} else {

		currentIapId = rechargeInfo.name + "礼包";

		currentAmount = rechargeInfo.baseGold;

		currentRmb = rechargeInfo.rmb.toString();

		if (data[4] == 0) {

			var firstRecharge = rechargeInfo.firstGift;

			currentIapId += "，账号首充赠送" + firstRecharge + "金子";

			currentAmount += firstRecharge;

		} else {

			if (data[5] == 0) {

				var firstRecharge = Number(rechargeInfo.gift);

				currentIapId += "，档位首充赠送" + firstRecharge + "金子";

				currentAmount += firstRecharge;
			}
		}
	}

	//充值成功
	try {
		TDGA.onChargeSuccess({

			orderId: data[1],

			iapId: currentIapId,

			currencyAmount: currentRmb,

			currencyType: 'CNY',

			virtualCurrencyAmount: currentAmount,

			paymentType: data[3]

		});
	} catch (error) {
		console.log(error.message);
	}

} else {

}





qyengine.forEach(function () {
	this.hide();
}, "RealGoodDetail");










/**
 * avg的大转盘的活动
 */
//每次进入活动请求数据
function drawWheel() {
	if (qyengine.getInstancesByType("LuckyWheelPanel").length) {
		qyengine['LuckyWheelPanel'].show();
	} else {
		qyengine['LuckyWheelPanel'] = qyengine.instance_create(current_scene.viewOffset.x, 0, "LuckyWheelPanel", {
			"type": "LuckyWheelPanel",
			"id": "LuckyWheelPanel",
			"zIndex": 10,
			"layer": "layer0"
		});

		game.vars_.daZhuanPan = qyengine['LuckyWheelPanel'];
		qyengine.guardId("ActivePanel").appendChild("LuckyWheelPanel", 0, 0);
	}

	//时间
	var startTime = "" + game.vars_.activeOpenTimeDic[11].time_start[0] + "年" + game.vars_.activeOpenTimeDic[11].time_start[1] + "月" + game.vars_.activeOpenTimeDic[11].time_start[2] + "日";
	var overTime = "" + game.vars_.activeOpenTimeDic[11].time_over[0] + "年" + game.vars_.activeOpenTimeDic[11].time_over[1] + "月" + game.vars_.activeOpenTimeDic[11].time_over[2] + "日";
	qyengine['LuckyWheelPanel'].objects['txt_luckyWheelCommon'].text = "活动时间：" + startTime + "--" + overTime;
	qyengine['LuckyWheelPanel'].vars_.freeNum = arguments[0].freeNum + arguments[0].inviteDrawNum;
	qyengine['LuckyWheelPanel'].vars_.score = arguments[0].score;
	qyengine['LuckyWheelPanel'].vars_.exchangeRewards = arguments[0].exchangeRewards;
	qyengine['LuckyWheelPanel'].vars_.inviteNum = arguments[0].inviteNum;
	qyengine['LuckyWheelPanel'].objects['txt_luckyWheelCommon_4'].text = "已有积分：" + arguments[0].score + "  已邀请新玩家：" + arguments[0].inviteNum;
	if (Number(qyengine['LuckyWheelPanel'].vars_.freeNum) <= 0) {
		qyengine['LuckyWheelPanel'].objects['txt_luckyWheelCommon_free'].hide();
		qyengine['LuckyWheelPanel'].objects['txt_luckyWheelCommon_haveTimes'].text = 20;
		qyengine['LuckyWheelPanel'].objects['txt_luckyWheelCommon_haveTimes'].show();
		qyengine['LuckyWheelPanel'].objects['obj_Active_interface_zhuanpan_06'].show();
	} else {
		qyengine['LuckyWheelPanel'].objects['txt_luckyWheelCommon_free'].show();
		qyengine['LuckyWheelPanel'].objects['txt_luckyWheelCommon_haveTimes'].hide();
		qyengine['LuckyWheelPanel'].objects['obj_Active_interface_zhuanpan_06'].hide();
	}
	var configData = game.configs.luckywheel_lottery;
	for (var _cell in configData) {
		qyengine['LuckyWheelPanel'].objects['txt_luckyWheelCommon_' + (5 + Number(_cell - 1))].text = configData[_cell].name;
		qyengine['LuckyWheelPanel'].objects['obj_Icon_goods_1_' + (Number(_cell - 1))].changeSprite("obj_" + configData[_cell].show + "_default");
		qyengine['LuckyWheelPanel'].objects['obj_Icon_goods_1_' + (Number(_cell - 1))].vars_.itemId = Number(_cell);
	}
}
function dataBack() {
	if (arguments[1]) {
		drawWheel(arguments[2]);
	} else {
		arguments[2].code && game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
	}
	game.scripts["al_scr_gameloadDestroy"](null, null);
}
game.scripts["al_scr_gameloadCreate"](null, null);
QyRpc.LuckyWheelView(dataBack);



if (game.configs.luckywheel_lottery[self.vars_.itemId].name == "实物奖励") {
	current_game.scripts['al_scr_' + "realGoodDetatil"].call(this, undefined, this);
}

/**
 * 实物奖励
 */
var getObjArr = qyengine.getInstancesByType("RealGoodDetail");
if (getObjArr.length) {
	getObjArr[0].show();
} else {
	qyengine.instance_create(0, 0, "RealGoodDetail", {
		"type": "RealGoodDetail",
		"id": "RealGoodDetail",
		"zIndex": 12,
		"layer": "layer0"
	});
}




/**
 * RealGoodRewardHistoryBtn  的点击事件
 */
if (LuckyWheelPanel.vars_.realGood) {
	current_game.scripts['al_scr_' + "realGoodDetatil"].call(this, undefined, this);
} else {
	game.scripts["al_scr_AddTip_1"](null, null, "您还没有获得实物奖励哦~", "layer1");
}





var xxx = game.vars_.userInfo.packageInfo.packEquip;
for (var i = 0; i < xxx.length; i++) {
	console.log(xxx[i].quality);
}

//scro_fusionSelect
if (game.vars_.userInfo.packageInfo.packEquip[repeatTime].quality == 4) {
	continue;
}


var haveObjectId = qyengine.getInstancesByType();





/**
 * SendMsgCommendFriend
 */
//SendMsgCommendFriend
//**************************************************
//动作序列 SendMsgCommendFriend 推荐好友
//**************************************************

function callBack() {
	console.log(arguments[1]);
	if (arguments[1] == true) {
		console.log(arguments[2]);
		game.vars_.recommendFriends = arguments[2];

		// if (qyengine.getInstancesByType("grou_addFriendBg").length > 0) {
		game.scripts["al_scr_InitRecommendFriends"](null, null);
		// } else {
		// 	// for (var i = current_scene.instances.length - 1; i >= 0; i--) {
		// 	// 	console.error(">>>>>>>>>>>>   destoryAll");
		// 	// 	current_scene.instances[i].destroy();
		// 	// }

		// }
		//进入推荐好友界面关闭弹幕~~~
		current_game.scripts['al_scr_' + "ShowBulletScreen"].call(this, undefined, this, 0, 'friend');
	} else {
		console.log(arguments[2].code);
		game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
	}
	game.scripts["al_scr_gameloadDestroy"](null, null);
}

game.scripts["al_scr_CommonInstanceCreate"](null, null, "grou_addFriendBg");
//inpu_searchFriend.show();
inpu_searchFriend.setValue("")
if (_isVisible) {
	inpu_searchFriend.show();
	grou_addFriendBg.show();
} else {
	inpu_searchFriend.hide();
	grou_addFriendBg.hide();
}

game.scripts["al_scr_gameloadCreate"](null, null);
QyRpc.commendFriend(callBack);



/**
 * InitRecommendFriends
 */

current_game.scripts['al_scr_' + "SendMsgCommendFriend"].call(this, undefined, this);



/**
 * InitFriendMain
 */


//**************************************************
//动作序列 InitFriendMain  初始化好友界面
//**************************************************
var roleRankInfo = game.vars_.friendsRank[game.vars_.myRankInFriends];

//我的昵称
qyengine.guardId("grou_friendRight").objects["txt_myNickName"].setText(roleRankInfo.nickName);
//我的收集度
qyengine.guardId("grou_friendMainBg").objects["txt_myCollect"].setText("服装收集：" + parseInt(roleRankInfo.Complete * 100) + "%");
//我的排名
qyengine.guardId("grou_friendRight").objects["txt_myRank"].setText("我的排名：" + (game.vars_.myRankInFriends + 1));
grou_friendBtn_me.objects['txt_friendItem_top'].text = (game.vars_.myRankInFriends + 1);
grou_friendBtn_me.objects['txt_friendVip'].text = game.vars_.friendsRank[game.vars_.myRankInFriends].vip;
grou_friendBtn_me.objects['txt_Item_nickName'].text = game.vars_.friendsRank[game.vars_.myRankInFriends].nickName;
grou_friendBtn_me.objects['txt_Item_collect'].text = "收集度：" + parseInt(game.vars_.friendsRank[game.vars_.myRankInFriends].Complete * 100) + "%";
grou_friendBtn_me.vars_.index = game.vars_.myRankInFriends;
//好友数量

var friendMaxTexNum = getConfig("exp", game.vars_.playInfoJson.level, "maxFriend") + getConfig("vip", game.vars_.playInfoJson.vipLevel, "addFriend");

qyengine.guardId("grou_friendMainBg").objects["txt_friendNumber"].setText("" + game.vars_.friendsRank.length + "/" + friendMaxTexNum);
game.vars_.friendItemArr = [];
qyengine.guardId("grou_friendRight").objects["scro_friendScro"].removeAll();
//好友排名
var scroIndex = 0;
for (var i = 0; i < game.vars_.friendsRank.length; ++i) {
	var friendInfo = game.vars_.friendsRank[i];
	if (Number(friendInfo.uid) == Number(game.vars_.playInfoJson.uid)) {
		continue;
	}
	qyengine.guardId("grou_friendRight").objects["scro_friendScro"].addOneInstance("grou_friendBtn", scroIndex, 0, { "id": "grou_friendBtn" + i, "px": 0, "py": 0, "center": true, "allowMultiple": true });

	var friendBtn = qyengine.guardId("grou_friendBtn" + i);

	scroIndex++;
	friendBtn.vars_.index = i;

	//昵称
	friendBtn.objects["txt_Item_nickName"].setText(friendInfo.nickName);
	//收集度
	friendBtn.objects["txt_Item_collect"].setText("收集度：" + parseInt(friendInfo.Complete * 100) + "%");
	//是否vip
	if (friendInfo.isvip) {
		friendBtn.objects["txt_friendVip"].text = "贵" + friendInfo.vip;
	} else {
		friendBtn.objects["txt_friendVip"].text = "贵" + 0;
	}

	//排名
	friendBtn.objects["txt_friendItem_top"].setText(i + 1);
	game.vars_.friendItemArr.push(friendBtn);
}
grou_friendMainBg.appendChild("grou_playerDress", 50, 140);

if (game.vars_.friendsRank.length >= 1) {
	game.vars_.firstEnterFriend = true;
	game.scripts["al_scr_TouchFriendBtn"](null, null, 0);
	game.scripts["al_scr_InitFriendMainLeft"](null, null, 0);
}





/**
 * GivePowerClick   单独赠送体力
 */
//**************************************************
//动作序列 赠送体力
//GivePowerClick
//**************************************************
qyengine.guardId("grou_friendInfo").objects["Btn_givePower"].isVisible = false;
//var nickName = qyengine.guardId("grou_friendInfo").objects["Btn_givePower"].vars_.nickName;
//var nickUid = qyengine.guardId("grou_friendInfo").objects["Btn_givePower"].vars_.uid;

game.scripts["al_scr_SendMsgGivePower"](null, null, self.vars_.data.nickName, self.vars_.data.uid);


/**
 * SendMsgGivePower
 */

//**************************************************
//动作序列 赠送体力
//SendMsgGivePower
// 参数1  nickName
//**************************************************
function callBack() {
	console.log(arguments[1]);
	if (arguments[1] == true) {
		console.log(arguments[2]);
		//  game.scripts["al_scr_SendMsgGetFriendsRank"](null,null);      
		game.scripts["al_scr_AddTip_1"](null, null, "赠送体力成功", "layer1");
		for (var i = 0; i < game.vars_.friendsRank.length; i++) {
			if (game.vars_.friendsRank[i].uid == uid) {
				game.vars_.friendsRank[i].Faver += 1;
				game.vars_.friendsRank[i].give = false;
				qyengine.guardId("grou_friendInfo").objects["txt_friendCohesion"].setText("亲密度：" + game.vars_.friendsRank[i].Faver);
				game.vars_.alreadySendPowerId = uid;
				//好友的赠送体力的互动
				game.scripts["al_scr_channelMsg_interact"](null, null, [game.vars_.friendsRank[i].user], 7, "4500");
				//SendMsgGivePower
				break;
			}
		}

	} else {
		console.log(arguments[2].code);
		game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
	}
	game.scripts["al_scr_gameloadDestroy"](null, null);
}
game.scripts["al_scr_gameloadCreate"](null, null);
QyRpc.givePower(nickName, uid, callBack);










/**
 *   SendMsgGetFriendInformation   通知界面
 */

//**************************************************
//动作序列 好友通知
//SendMsgGetFriendInformation 
//**************************************************
function callBack() {
	console.log(arguments[1]);
	if (arguments[1] == true) {
		console.log(arguments[2]);
		game.vars_.friendMsgList = arguments[2];
		//for(var i = current_scene.instances.length - 1; i >= 0; i--)
		//{

		//    current_scene.instances[i].destroy();
		//}
		game.configs.config_friendMsgItem = [];
		qyengine.instance_create(0, 0, 'grou_friendMessageBg', { "type": 'grou_friendMessageBg', "id": 'grou_friendMessageBg', "zIndex": 10, "layer": "layer0", });
	} else {
		console.log(arguments[2].code);
		game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
	}
	game.scripts["al_scr_gameloadDestroy"](null, null);
}
game.scripts["al_scr_gameloadCreate"](null, null);
QyRpc.getFriendInformation(callBack);


/**
 * InitFriendMsg   好友的通知
 */
game.configs.config_friendMsgItem = [];
game.vars_.friendMsgIdList = [];
game.vars_.friendMsgTypeList = [];
game.vars_.item = [];
game.vars_.itemId = [];
for (var i = 0; i < game.vars_.friendMsgList.length; ++i) {
	var friendMsgInfo = game.vars_.friendMsgList[i];

	//标题
	var msgTitle = "";
	//忽略按钮
	var neglectBtnState = false;
	//接受按钮
	var takeBtnState = false;
	//领取体力按钮
	var getPowerState = false;

	var id = friendMsgInfo.id;
	var FriendId = friendMsgInfo.FriendId;

	game.vars_.itemId.push(id);
	game.vars_.friendMsgIdList.push(id);
	game.vars_.friendMsgTypeList.push(friendMsgInfo.Ftype);
	game.vars_.item.push(friendMsgInfo.Ftype);

	var index = i;
	var petId = ("petId" in friendMsgInfo) ? friendMsgInfo.petId : "chaochao";
	var petName = petId == 1 ? "腓腓" : (petId == 2 ? "狐妖" : "小鹿");

	if (friendMsgInfo.Ftype == 0)  //送体力
	{
		msgTitle = "<font color= '#AD6977'>" + friendMsgInfo.nickName + "</font><font color='#66DED2'>赠送你" + game.vars_.ConfigClass("GIVE_POWER") + "点体力</font>";
		getPowerState = true;
	} else if (friendMsgInfo.Ftype == 1) {
		msgTitle = "<font color= '#AD6977'>" + friendMsgInfo.nickName + "</font><font color='#66DED2'>请求加你为好友</font>";
		neglectBtnState = true;
		takeBtnState = true;
	} else if (friendMsgInfo.Ftype == 4) {  //回访
		msgTitle = "<font color= '#AD6977'>" + friendMsgInfo.nickName + "</font><font color='#339933'>照顾了你的" + petName + "</font>";
		neglectBtnState = true;
		takeBtnState = true;
	} else if (friendMsgInfo.Ftype == 5) { //报复
		msgTitle = "<font color= '#AD6977'>" + friendMsgInfo.nickName + "</font><font color='#3366cc'>诱拐了你的" + petName + "</font>";
		neglectBtnState = true;
		takeBtnState = true;
	} else {    //调戏
		var heroName = game.configs.hero[petId].name;
		msgTitle = "<font color= '#AD6977'>" + friendMsgInfo.nickName + "</font><font color='#3366cc'>调戏了你的" + heroName + "</font>";
		neglectBtnState = true;
		takeBtnState = true;
	}


	//时间
	var time = game.scripts["al_scr_TimestampToTime"](null, null, friendMsgInfo.time / 1000);

	//头像
	var headIcon = "obj_" + friendMsgInfo.iconImage + "_default";

	//昵称
	var nickName = friendMsgInfo.nickName;
	//等级
	var level = "等级：" + friendMsgInfo.Level;
	//收集度
	var collect = "收集度：" + parseInt(friendMsgInfo.Complete * 100) + "%";
	//vip等级
	var vipLevel = "贵 " + friendMsgInfo.vipLevel;

	game.configs.config_friendMsgItem.push({
		index: index,
		id: FriendId,
		friendMsgTitle: msgTitle,
		friendMsgTime: time,
		friendMsgHeadIcon: headIcon,
		friendMsgNickName: nickName,
		friendMsgLevel: level,
		friendMsgCollect: collect,
		friendMsgNeglectBtn: neglectBtnState,
		friendMsgTakeBtn: takeBtnState,
		friendMsgGetPower: getPowerState,
		friendMsgVipLevel: vipLevel,
		databaseId: id,

	});
}
qyengine.guardId("scro_friendMessage").refreshRelations();




var friendInfo = null;
if (qyengine.getInstancesByType("grou_friendMessageBg_new").length && grou_friendMessageBg_new.isVisible) {
	for (var i = 0; i < game.vars_.friendMsgList.length; i++) {
		if (game.vars_.friendMsgList[i].FriendId == game.vars_.friendITouchItemId) {
			friendInfo = game.vars_.friendMsgList[i];
			qyengine.guardId("DelateFriendTips").text = friendInfo.nickName;
			break;
		}
	}
} else {
	for (var i = 0; i < game.vars_.friendsRank.length; ++i) {
		friendInfo = game.vars_.friendsRank[i];
		if (friendInfo.uid == game.vars_.friendITouchItemId) {
			//qyengine.guardId("DelateFriendTips").text="是否要删除你的好友"+friendInfo.nickName+"!";
			qyengine.guardId("DelateFriendTips").text = friendInfo.nickName;
			return;
		}

	}
}












if (self.vars_ && self.vars_.data) {
	//index = -1;
}
if (grou_friendBtn_me.vars_.index == index) {
	grou_friendBtn_me.objects.obj_Bg_choice_box_1_1.show();
	index = -1;
}

game.vars_.friendITouchItemId = game.vars_.friendsRank[index].uid;
//玩吧发送消息给好友用
game.vars_.friendITouchItemUser = game.vars_.friendsRank[index].user;

for (var i = 0; i < game.vars_.friendItemArr.length; i++) {
	if (game.vars_.friendItemArr[i].vars_.index == index) {
		game.vars_.friendItemArr[i].objects.obj_Bg_choice_box_1_1.show();

	} else {
		game.vars_.friendItemArr[i].objects.obj_Bg_choice_box_1_1.hide();
	}
}





/**
 * 原   添加好友   ItemAddFriendClick
 */
console.log(self.vars_.nickName);
game.scripts["al_scr_SendMsgAddFriend"](null, null, self.vars_.nickName, self.vars_.uid);

/**
 * SendMsgAddFriend
 */


//**************************************************
//动作序列 SendMsgAddFriend 搜索好友
//参数1 nickName 需要搜索的好友昵称
//**************************************************
function callBack() {
	console.log(arguments[1]);
	if (arguments[1] == true) {
		console.log(arguments[2]);
		game.scripts["al_scr_AddTip_1"](null, null, game.vars_.ConfigClass("TIP_45"), "layer1");
		game.scripts["al_scr_AddFriendDelete"](null, null, arguments[2].id);
		self.destroy();
	} else {
		console.log(arguments[2].code);
		game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
	}
	game.scripts["al_scr_gameloadDestroy"](null, null);
}
game.scripts["al_scr_gameloadCreate"](null, null);
QyRpc.addFriend(nickName, uid, callBack);





/**
 * AddFriendDelete
 */





qyengine.forEach(function () {
	this.destroy();
}, "grou_friendItemDetail");
self.currentSprite && self.currentSprite.parent.qyobj.destroy();




/**
 * TouchFriendBtn
 */

if (self.vars_ && self.vars_.data) {
	//index = -1;
}
if (grou_friendBtn_me.vars_.index == index) {
	grou_friendBtn_me.objects.obj_Bg_choice_box_1_1.show();
	index = -1;
} else {
	grou_friendBtn_me.objects.obj_Bg_choice_box_1_1.hide();
}

if (index == -1) {
	for (var j = 0; j < game.vars_.friendsRank.length; j++) {
		if (Number(game.vars_.friendsRank[j].uid) != Number(game.vars_.playInfoJson.uid)) {
			game.vars_.friendITouchItemId = game.vars_.friendsRank[j].uid;
			//玩吧发送消息给好友用
			game.vars_.friendITouchItemUser = game.vars_.friendsRank[j].user;
			break;
		}
	}
} else {
	game.vars_.friendITouchItemId = game.vars_.friendsRank[index].uid;
	//玩吧发送消息给好友用
	game.vars_.friendITouchItemUser = game.vars_.friendsRank[index].user;
}


for (var i = 0; i < game.vars_.friendItemArr.length; i++) {
	if (game.vars_.friendItemArr[i].vars_.index == index) {
		game.vars_.friendItemArr[i].objects.obj_Bg_choice_box_1_1.show();

	} else {
		game.vars_.friendItemArr[i].objects.obj_Bg_choice_box_1_1.hide();
	}
}





qyengine.forEach(function () {
	this.destroy();
}, "grou_friendItemDetail");






if (grou_friendMainBg.vars_.nowTab == "enemy") {
	return;
}













/**
 * TouchFriendBtn
 */
if (self.vars_ && self.vars_.data) {
	//index = -1;
}
if (grou_friendBtn_me.vars_.index == index) {
	grou_friendBtn_me.objects.obj_Bg_choice_box_1_1.show();
	index = -1;
} else {
	grou_friendBtn_me.objects.obj_Bg_choice_box_1_1.hide();
}

if (index == -1) {
	for (var j = 0; j < game.vars_.friendsRank.length; j++) {
		if (Number(game.vars_.friendsRank[j].uid) != Number(game.vars_.playInfoJson.uid)) {
			game.vars_.friendITouchItemId = game.vars_.friendsRank[j].uid;
			//玩吧发送消息给好友用
			game.vars_.friendITouchItemUser = game.vars_.friendsRank[j].user;
			break;
		}
	}
} else {
	game.vars_.friendITouchItemId = game.vars_.friendsRank[index].uid;
	//玩吧发送消息给好友用
	game.vars_.friendITouchItemUser = game.vars_.friendsRank[index].user;
}
if (index != grou_friendBtn_me.vars_.index) {

}

for (var i = 0; i < game.vars_.friendItemArr.length; i++) {
	if (game.vars_.friendItemArr[i].vars_.index == index) {
		game.vars_.friendItemArr[i].objects.obj_Bg_choice_box_1_1.show();

	} else {
		game.vars_.friendItemArr[i].objects.obj_Bg_choice_box_1_1.hide();
	}
}


/**
 * InitFriendMainLeft
 */


//**************************************************
//动作序列 InitFriendMainLeft  初始化好友界面左边
//参数1 index 选择的好友下标
//**************************************************

local.data = self.vars_ && self.vars_.data;
if (local.data) {
	var _objType = "grou_friendItemDetail_other";
} else {
	var _objType = "grou_friendItemDetail";
}

if (game.vars_.firstEnterFriend) {
	game.vars_.firstEnterFriend = null;
} else {
    /*
    if (qyengine.getInstancesByType(_objType).length) {
        local.createObj = qyengine.getInstancesByType(_objType)[0];
        local.createObj.show();
    } else {
    }
	*/

	local.createObj = qyengine.instance_create(0, 0, _objType, {
		"type": _objType,
		"id": _objType,
		"zIndex": 5,
		"layer": "layer0"
	});

	initPopShow();
}

if (grou_friendMainBg.vars_.nowTab == "friend" || self.id == "grou_friendBtn_me") {
	var friendInfo = local.data ? self.vars_.data : game.vars_.friendsRank[index];
} else {
	var friendInfo = local.data ? self.vars_.data : game.vars_.friendsOtherRank[index];
}

if (index == game.vars_.myRankInFriends || (self && self.id && self.id == "grou_friendBtn_me")) {
	qyengine.guardId("grou_friendInfo").isVisible = false;
	grou_oneKeyGive.hide();
	grou_lookSuit.hide();
} else {
	grou_oneKeyGive.show();
	grou_lookSuit.show();
	game.vars_.selectFriendFaver = friendInfo.Faver;
	game.vars_.selectFriendSuit = friendInfo.suit;
	game.vars_.selectFriendNickName = friendInfo.nickName;

	qyengine.guardId("grou_friendInfo").isVisible = true;
	//昵称
	qyengine.guardId("grou_friendInfo").objects["txt_friendNickName"].setText(friendInfo.nickName);
	//亲密度
	qyengine.guardId("grou_friendInfo").objects["txt_friendCohesion"].setText("亲密度：" + friendInfo.Faver);
	//赠送体力按钮
	qyengine.guardId("grou_friendInfo").objects["Btn_givePower"].isVisible = false;
	if (friendInfo.give) {
		qyengine.guardId("grou_friendInfo").objects["Btn_givePower"].isVisible = true;
		qyengine.guardId("grou_friendInfo").objects["Btn_givePower"].vars_.nickName = friendInfo.nickName;
		qyengine.guardId("grou_friendInfo").objects["Btn_givePower"].vars_.uid = friendInfo.uid;
	}
}

if (qyengine.getInstancesByType("grou_playerDress").length <= 0) {
	//妆扮
	qyengine.instance_create(0, 0, "grou_playerDress", { "id": "grou_playerDress_friend", "zIndex": 0, "layer": "layer0" });
	grou_friendMainBg.appendChild("grou_playerDress_friend", 50, 130);
} else {
	var partsType = ['hairStyle_1', 'hairStyle_2', 'jacket', 'pants', 'dress', 'coat_1', 'coat_2', 'coat', 'shoes', 'hairpin', 'earrings', 'necklace', 'bracelet', 'handTake', 'belt', 'face', 'special', 'pet'];

}
game.scripts["al_scr_RefreshClothes"](null, null, friendInfo.suit);



function initPopShow() {
	var showData = local.data || game.vars_.friendsRank[index];
	local.createObj.objects['txt_friendItemDetail'].text = "" + showData.nickName;
	local.createObj.objects['txt_friendItemDetail_2'].text = "服装搜集度： " + Number(showData.Complete) * 100 + "%";
	local.createObj.objects['txt_friendItemDetail_1'].text = "等级： " + (showData.Level || "出错");
	showData.iconImage && local.createObj.objects['obj_Icon_entry_photo3_1'].changeSprite("obj_" + showData.iconImage + "_default");
	if (local.data) {
		local.createObj.objects['txt_friendVip_1'].text = "贵" + showData.vipLevel;
		var operationBtnArr = ["grou_friendItemOperate_7", "grou_friendItemOperate_4", "grou_friendItemOperate_3"];
		operationBtnArr.forEach(function (e) {
			local.createObj.objects[e].vars_.lastTouchObj = self;
		});
	} else {
		local.createObj.objects['txt_friendVip_1'].text = "贵" + showData.vip;
		var operationBtnArr = ["grou_friendItemOperate_1", "grou_friendItemOperate_2", "grou_friendItemOperate_3", "grou_friendItemOperate_4",
			"grou_friendItemOperate_5", "grou_friendItemOperate_6"];
	}
	operationBtnArr.forEach(function (e) {
		local.createObj.objects[e].vars_.data = showData;

	});
}






for (var i = qyengine.getInstanceCount("grou_exhibitionDetail") - 1; i >= 0; i--) {
	qyengine.getInstancesByType("grou_exhibitionDetail")[i].destroy();
}
qyengine.getInstancesByType("grou_exhibitionPanel") && grou_exhibitionPanel.hide();
























if (!game.vars_.playInfoJson.bulletScreen.showing) {  //showing 控制是否在展示界面
	hideAndClear();
	return;
}
var getAnonymousObjArr = qyengine.getInstancesByType("obj_Flowers_tanmu_bt_03_7");
var getOpenObjArr = qyengine.getInstancesByType("obj_Flowers_tanmu_bt_03_2");
var openBulletNeedMoveObj = qyengine.guardId("obj_Flowers_tanmu_bt_05");
for (var i = 0; i < getAnonymousObjArr.length; i++) {
	if (game.vars_.playInfoJson.bulletScreen.Anonymous) {
		try {
			getAnonymousObjArr[i].hide();
		} catch (error) {
			console.error(error.message);
		}

	} else {
		try {
			getAnonymousObjArr[i].show();
		} catch (error) {
			console.error(error.message);
		}
	}
}
for (var j = 0; j < getOpenObjArr.length; j++) {
	if (game.vars_.playInfoJson.bulletScreen.start) {
		//getOpenObjArr[j].changeSprite("obj_Flowers_tanmu_bt_03_2_default");
		try {
			if (qyengine.getInstancesByType("Btn_tanMu_Func").length > 0) {
				Btn_tanMu_Func.objects['obj_Flowers_tanmu_bt_05'].x = 33;
			}
			if (qyengine.getInstancesByType("grou_friendInfo").length > 0) {
				var jiZhunX = grou_friendInfo.objects["obj_Flowers_tanmu_bt_04"].x;
				grou_friendInfo.objects['obj_Flowers_tanmu_bt_05'].x = jiZhunX - 24;
			}
		} catch (error) {
			console.error("打印,需要查看");
		}
		current_game.scripts['al_scr_' + "CreateScreenWordShow"].call(this, undefined, this);
	} else {
		try {
			if (qyengine.getInstancesByType("Btn_tanMu_Func").length > 0) {
				Btn_tanMu_Func.objects['obj_Flowers_tanmu_bt_05'].x = 89;
			}

			if (qyengine.getInstancesByType("grou_friendInfo").length > 0) {
				var jiZhunX = grou_friendInfo.objects["obj_Flowers_tanmu_bt_04"].x;
				grou_friendInfo.objects['obj_Flowers_tanmu_bt_05'].x = jiZhunX + 26;
			}
		} catch (error) {
			console.error("打印,需要查看");
		}
		hideAndClear();
	}
}

function hideAndClear() {
	qyengine.forEach(function () {
		this.isVisible && this.hide();
		this.setSpeed(0, 0);
	}, "grou_bullutScreen_fly");
	qyengine.forEach(function () {
		this.isVisible && this.hide();
		this.setSpeed(0, 0);
	}, "grou_bullutScreen_fly_vip5");
	game.vars_.bulletScreenCycleTime && clearInterval(game.vars_.bulletScreenCycleTime);
	game.vars_.bulletScreenShowTime && clearInterval(game.vars_.bulletScreenShowTime);
}




current_game.scripts['al_scr_' + "ShowBulletScreen"].call(this, undefined, this, 0);









function callBack() {
	console.log(arguments);
	if (arguments[1] == true) {

		game.vars_.FlexRedDotState = false;
		var redDotArr = Object.keys(arguments[2]);
		for (var i = 0; i < redDotArr.length; i++) {
			if (qyengine.guardId("RedDot_" + redDotArr[i]) != null) {
				if (arguments[2][redDotArr[i]] != null) {
					if (arguments[2][redDotArr[i]] > 0) {
						if (redDotArr[i] != "signPoint" && redDotArr[i] != "arenaPoint" && redDotArr[i] != "flowerPoint") {
							game.vars_.FlexRedDotState = true;
						}
						qyengine.guardId("RedDot_" + redDotArr[i]).show();
						if (redDotArr[i] == "taskPoint" || redDotArr[i] == "achievementPoint") {

							QyText.prototype.setText.call(qyengine.guardId("RedDot_" + redDotArr[i] + "_text"), arguments[2][redDotArr[i]])
						}

					} else {
						qyengine.guardId("RedDot_" + redDotArr[i]).hide();
						if (redDotArr[i] == "taskPoint" || redDotArr[i] == "achievementPoint") {
							QyText.prototype.setText.call(qyengine.guardId("RedDot_" + redDotArr[i] + "_text"), "")
						}
					}



				}
			}
		}


		if (game.vars_.FlexRedDotState) {
			//上拉条上的红点 
			if (obj_Btn_up.isClose) {
				qyengine.guardId("RedDot_Btn_up").show();

			}
		}

		//qyengine.guardId("RedDot_inviteFriendPoint").hide();

		if (qyengine.getInstancesByType("obj_messageBtn_redPoint").length > 0) {
			if (arguments[2].friendPoint == 1) {
				qyengine.guardId("obj_messageBtn_redPoint").show();
				qyengine.forEach(function () {
					this.show();
				}, "obj_messageBtn_redPoint");
			} else {
				qyengine.guardId("obj_messageBtn_redPoint").hide();
				qyengine.forEach(function () {
					this.hide();
				}, "obj_messageBtn_redPoint");
			}
		}

		//去掉累充的红点
		qyengine.guardId("RedDot_sumChargePoint").hide();

		qyengine.guardId("RedDot_inviteFriendPoint").hide();




	} else {

		game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
	}
	game.scripts["al_scr_gameloadDestroy"](null, null);
}
QyRpc.getAllPoint(callBack)







game.vars_.friendMsgTypeList && game.vars_.friendMsgTypeList.length <= 0 && qyengine.forEach(function () {
	this.hide();
}, "obj_messageBtn_redPoint");



SendMsgGetFriendInformation



Number(arguments[2].enemies[i].Complete)











/**
 * OpenTopPanel
 */

function callBack() {
	console.log(arguments);
	if (arguments[1] == true) {


		if (qyengine.getInstancesByType("TopPanel") > 0) {
			TopPanel.show();
		} else {

			qyengine.instance_create(150, 0, 'TopPanel', { "type": 'TopPanel', "id": 'TopPanel', "zIndex": 9, "layer": "layer0", });
		}
		TopPanel.vars_.DataDic[TopPanel.vars_.curryTopIndex] = arguments[2].rank;
		for (cell in TopPanel.vars_.DataDic[TopPanel.vars_.curryTopIndex]) {
			if (Object.keys(TopPanel.vars_.DataDic[TopPanel.vars_.curryTopIndex][cell].cloth).toString().indexOf("pet") < 0) {
				TopPanel.vars_.DataDic[TopPanel.vars_.curryTopIndex][cell].cloth.pet = 0;
			}
		}
		TopPanel.vars_.CurryTopData = TopPanel.vars_.DataDic[TopPanel.vars_.curryTopIndex];
		TopPanel.appendChild("grou_playerDress", -180, 320);
		grou_playerDress.scaleX = 0.8;
		grou_playerDress.scaleY = 0.8
		game.scripts["al_scr_RefreshClothes"](null, null, TopPanel.vars_.CurryTopData[TopPanel.vars_.TouchIndex].cloth);
		game.scripts["al_scr_RefreshTopRank"](null, null);
	} else {
		console.log(arguments[2].code);
		game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
	}
	game.scripts["al_scr_gameloadDestroy"](null, null);
}

game.scripts["al_scr_gameloadCreate"](null, null);
QyRpc.clothCollectRank(callBack);

/**
 * RefreshTopRank
 */
TopPanel.vars_.TouchIndex = 0;
qyengine.guardId("TopCurryChooseRoleName").text = TopPanel.vars_.CurryTopData[TopPanel.vars_.TouchIndex].name;
game.scripts["al_scr_RefreshClothes"](null, null, TopPanel.vars_.CurryTopData[TopPanel.vars_.TouchIndex].cloth);




for (var i = 0; i < TopPanel.vars_.CurryTopData.length; i++) {
	if (i >= TopPanel.vars_.ItemArr.length - 1) {
		game.vars_.activeItemId = TopPanel.vars_.CurryTopData[i];
		qyengine.instance_create(0, 0, "topGrouItem", { "type": "topGrouItem", "id": 'topGrouItem' + i, "zIndex": 9 });
		qyengine.guardId("topGrouItem" + i).setVar("select_id", i);
		TopPanel.vars_.ItemArr.push(qyengine.guardId("topGrouItem" + i));
		qyengine.guardId("scro_TopPanelItem").appendChild("topGrouItem" + i, 0, 0, i, 0, false, true);
	} else {
		TopPanel.vars_.ItemArr[i].show();
	}

	if (i == 0) {
		TopPanel.vars_.ItemArr[0].objects.obj_TopItemBgChoose.changeSprite("obj_TopItemBgChoose1_default");
	}

	//刷新数据
	var rank = TopPanel.vars_.CurryTopData[i].rank;
	var vip = TopPanel.vars_.CurryTopData[i].vip;
	var name = TopPanel.vars_.CurryTopData[i].name;
	var uid = TopPanel.vars_.CurryTopData[i].uid;
	var clothNum = TopPanel.vars_.CurryTopData[i].clothNum;
	var questNum = TopPanel.vars_.CurryTopData[i].questNum;
	var favorNum = TopPanel.vars_.CurryTopData[i].favorNum;
	var infoText;
	if (i <= 2) {
		TopPanel.vars_.ItemArr[i].objects.TopOtherLVIcon.changeSprite("obj_TopOtherLvIcon" + i + "_default");
		TopPanel.vars_.ItemArr[i].objects.TopOtherLVNum.text = "";
	} else {
		TopPanel.vars_.ItemArr[i].objects.TopOtherLVIcon.hide();
		TopPanel.vars_.ItemArr[i].objects.TopOtherLVNum.text = rank;
	}
	if (vip == 0) {
		TopPanel.vars_.ItemArr[i].objects.TopOtherLVVipIcon.hide();
		TopPanel.vars_.ItemArr[i].objects.TopOtherLVVipNum.text = "";
	} else {
		TopPanel.vars_.ItemArr[i].objects.TopOtherLVVipIcon.show()
		TopPanel.vars_.ItemArr[i].objects.TopOtherLVVipNum.text = vip;
	}

	//具体的排行描述
	if (clothNum != null) {
		infoText = "服装收集度: " + clothNum;

	} else if (questNum != null) {
		infoText = "剧情完美评分: " + questNum;

	} else if (favorNum != null) {
		infoText = "好感度: " + favorNum;
	}
	TopPanel.vars_.ItemArr[i].objects.TopOtherLVInfo.text = infoText;
	TopPanel.vars_.ItemArr[i].objects.TopOtherLVName.text = name;

	if (uid == game.vars_.playInfoJson.uid) {
		if (i <= 2) {
			qyengine.guardId("myTopLvIcon").show();
			qyengine.guardId("myTopLvIcon").changeSprite("obj_TopOtherLvIcon" + i + "_default");
			qyengine.guardId("TopPanelMyLVNum").text = "";
		} else {
			qyengine.guardId("myTopLvIcon").hide();
			// qyengine.guardId("TopPanelMyLVNum").text=rank;
			if (rank == -1) {
				//  WasnOnTheList.show();  
				//grou_MyTopItem.hide();
				qyengine.guardId("TopPanelMyLVNum").text = "暂未上榜";
			} else {
				// WasnOnTheList.hide();  
				// grou_MyTopItem.show();
				qyengine.guardId("TopPanelMyLVNum").text = rank;
			}


		}
		if (vip == 0) {
			qyengine.guardId("TopPanelMyVipIcon").hide();
			qyengine.guardId("TopPanelMyVipLV").text = "";
		} else {
			qyengine.guardId("TopPanelMyVipIcon").show()
			qyengine.guardId("TopPanelMyVipLV").text = vip;
		}
		qyengine.guardId("TopPanelMyName").text = name;
		qyengine.guardId("TopPanelMyInfoText").text = infoText;
	}
}


if (TopPanel.vars_.CurryTopData.length - 1 < TopPanel.vars_.ItemArr.length) {
	for (var i = TopPanel.vars_.CurryTopData.length - 1; i < TopPanel.vars_.ItemArr.length; i++) {
		TopPanel.vars_.ItemArr[i].hide();
	}
}

scro_TopPanelItem.resetLimitPosition(true);



/**
 * TouchRoleInfoBtn   
 */

var count = 0;

var suitArr = Object.keys(game.configs.suitType);
for (var i = 0; i < suitArr.length; ++i) {
	var type = getConfig("suitType", suitArr[i], "name");
	var itemId = clothInfo[type];
	if (itemId == null) {
		itemId = 0;
	}

	if (itemId != 0) {
		if (count >= TopPanel.vars_.SuitArr.length) {
			qyengine.instance_create(0, 0, "TopSuitGroup", {
				"type": "TopSuitGroup",
				"id": 'TopSuitGroup' + count,
				"zIndex": 0
			});
			scro_TopSuit.appendChild("TopSuitGroup" + count, 0, 0, count, 0, false, true);
			TopPanel.vars_.SuitArr.push(qyengine.guardId("TopSuitGroup" + count));
		} else {
			TopPanel.vars_.SuitArr[count].show();
		}
		TopPanel.vars_.SuitArr[count].vars_.suitId = itemId;
		TopPanel.vars_.SuitArr[count].objects.txt_clothNum.text = (count + 1);
		TopPanel.vars_.SuitArr[count].objects.txt_change_clothName.text = getConfig("fashion", itemId, "name");
		var quality = getConfig("fashion", itemId, "quality");
		TopPanel.vars_.SuitArr[count].objects["obj_未标题心"].width = 174 * (quality / 5);
		TopPanel.vars_.SuitArr[count].objects["obj_未标题心"].x = 5 + (175 / 5 * (5 - quality) - 12) / 2;
		TopPanel.vars_.SuitArr[count].objects.obj_Icon_dress_25000.changeSprite("obj_" + getConfig("fashion", itemId, "icon") + "_default");
		count++;
	}
}



if (TopPanel.vars_.SuitArr.length > count) {
	for (var i = count; i < TopPanel.vars_.SuitArr.length; i++) {
		TopPanel.vars_.SuitArr[i].hide();
	}

}




/**
 * 点击好友的时候新增加的一些处理~
 */
if (grou_friendMainBg.vars_.nowTab == "friend") {
	if (self.vars_ && self.vars_.data) {
		grou_friendMainBg.vars_.closeInfo = self.vars_.data.suit;
	} else if (self.id != "grou_friendBtn_me") {
		grou_friendMainBg.vars_.closeInfo = game.vars_.friendsRank[self.vars_.index].suit;
	}
} else {
	if (self.id != "grou_friendBtn_me") {
		grou_friendMainBg.vars_.closeInfo = game.vars_.friendOtherItemArr[self.vars_.index].suit;
	}
}



/**
 * 好友界面的服装查看~  InitLookSuit
 */
//选择的玩家的服装信息 grou_friendMainBg.vars_.closeInfo
grou_friendMainBg.objects['grou_friendRight'].hide();
grou_friendMainBg.objects['grou_lookFriendSuit'].show();
var clothInfo = grou_friendMainBg.vars_.closeInfo;
var count = 0;
if (!grou_friendMainBg.vars_.suitArr) {
	grou_friendMainBg.vars_.suitArr = [];
}
var suitArr = Object.keys(game.configs.suitType);
for (var i = 0; i < suitArr.length; ++i) {
	var type = getConfig("suitType", suitArr[i], "name");
	var itemId = clothInfo[type];
	if (itemId == null) {
		itemId = 0;
	}
	if (itemId != 0) {
		if (count >= grou_friendMainBg.vars_.SuitArr.length) {
			var _object = qyengine.instance_create(0, 0, "TopSuitGroup", {
				"type": "TopSuitGroup",
				"id": 'TopSuitGroup' + count,
				"zIndex": 0
			});
			grou_lookFriendSuit.objects.scro_lookSuit.appendChild("TopSuitGroup" + count, 0, 0, count, 0, false, true);
			grou_friendMainBg.vars_.SuitArr.push(_object);
		} else {
			grou_friendMainBg.vars_.SuitArr[count].show();
		}
		grou_friendMainBg.vars_.SuitArr[count].vars_.suitId = itemId;
		grou_friendMainBg.vars_.SuitArr[count].objects.txt_clothNum.text = (count + 1);
		grou_friendMainBg.vars_.SuitArr[count].objects.txt_change_clothName.text = getConfig("fashion", itemId, "name");
		var quality = getConfig("fashion", itemId, "quality");
		grou_friendMainBg.vars_.SuitArr[count].objects["obj_未标题心"].width = 174 * (quality / 5);
		grou_friendMainBg.vars_.SuitArr[count].objects["obj_未标题心"].x = 5 + (175 / 5 * (5 - quality) - 12) / 2;
		grou_friendMainBg.vars_.SuitArr[count].objects.obj_Icon_dress_25000.changeSprite("obj_" + getConfig("fashion", itemId, "icon") + "_default");
		count++;
	}
}
if (grou_friendMainBg.vars_.SuitArr.length > count) {
	for (var i = count; i < grou_friendMainBg.vars_.SuitArr.length; i++) {
		grou_friendMainBg.vars_.SuitArr[i].hide();
	}

}




var _userIdArr = obtainUser_Id.split("|");
if (_userIdArr[0].length == 0) {
	game.vars_.loginGameMode = 'visitor';
	qyengine.different_scene('sce_main');
	return;
} else {
	game.vars_.loginGameMode = 'formal';
	game.vars_.fromAppId = _userIdArr[0];
	current_scene.vars_.users_Id = _userIdArr[1];
}




/*qyengine.ajax("http://119.29.203.42:8939/servlet/json",
{result: "text", data: {funcNo: "100316", user_id: game.fromAppId+""}}, "actionlist_1");*/
var ckValue = "Open" + game.fromAppId + "deb37d8fbd1f4a0d9fe4cce177fd8708" + "iD";
var MdValue = qyengine.getHexMd5Digest(ckValue);
game.vars_.MdValue = MdValue;
qyengine.ajax("http://119.29.203.42:8939/servlet/json",
	{ result: "text", data: { funcNo: "100341", openid: game.fromAppId + "", ck: MdValue } }, "actionlist_1");





current_game.scripts['al_scr_' + "actionlist_creatAsyncIcon"].call(this, undefined, this);



grou_friendRight.show();








/**
 * OpenPetMainPanel
 */


//判断关卡是不是解锁了
var unlockData = getConfig("pet", 1, "unlock").split("|");
var lockQuestsID = game.vars_.playInfoJson.storyQuestsAleady[unlockData[0]];
if (lockQuestsID == null || (lockQuestsID && lockQuestsID < parseInt(unlockData[2]))) {

	//点击的宠物没有开启
	/*
	  var strInfo="通关";
	   if(unlockData[0]=="1")
	   {
			if(unlockData[1]=="0")
			{
			  strInfo+="主线关卡";
			}else if(unlockData[1]=="1")
			{
			  strInfo+="支线关卡";
			}
			 strInfo+=getConfig("quest",unlockData[2],"name")+"解锁";
	  
	   }
	*/
	game.scripts["al_scr_AddTip_1"](null, null, "开启第一章第十一关的剧情解锁", "layer1");

	return;

}





function callBack() {
	console.log(arguments[1]);
	if (arguments[1] == true) {
		game.vars_.petData = arguments[2];
		qyengine.instance_create(150, 0, 'PetMainPanel', { "type": 'PetMainPanel', "id": 'PetMainPanel', "zIndex": 9, "layer": "layer0", });

	} else {
		console.log(arguments[2].code);
		game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
	}

	game.scripts["al_scr_gameloadDestroy"](null, null);
}

game.scripts["al_scr_gameloadCreate"](null, null);
QyRpc.viewPets(callBack);


/**
 * PetMainPanel的创建事件
 */
//初始化宠物数据

if (game.vars_.friendpet) {
	//商店隐藏
	qyengine.getInstancesByType("humanGroup").length && humanGroup.hide && humanGroup.hide();
	self.objects['petText_lookAfterNum'] && self.objects['petText_lookAfterNum'].show();
	self.objects['petText_lookAfterNum'].text = "今日剩余照看次数:" + game.vars_.lookAfterNum;
} else {
	self.objects['petText_lookAfterNum'] && self.objects['petText_lookAfterNum'].hide();
}
game.vars_.allPetIdArr = Object.keys(game.configs.pet);

// 设置  宠物活动后加成属性的 pet_money表   键 
PetMainPanel.vars_.addProperty = ["grow", "mood", "food", "intimacy"];
PetMainPanel.vars_.addPropertyIcon = ["", "fate_pet_bt_06", "fate_pet_bt_05", "fate_pet_bt_07", "fate_pet_bt_26", "fate_pet_bt_27", "fate_pet_bt_28"];

//饱食度时间标记
PetMainPanel.vars_.feedtime = [];
//心情时间标记
PetMainPanel.vars_.moodtime = [];

//每十分钟 掉一点 心情和饱食度
PetMainPanel.vars_.feedmoodTime = 600;



//设置宠物Item没有开启
function SetPetNoOpenHandle(i) {
	var ItemObj = qyengine.guardId("petRollerItem" + i).objects;
	ItemObj.obj_Icon_fate_lock.show();
	ItemObj.petRolleItemIcon.show();
	var levelKey = 0;

	var iconName = getConfig("pet", game.vars_.allPetIdArr[i], "photo").split(";")[levelKey];
	ItemObj.petRolleItemIcon.changeSprite("obj_" + iconName + "_default");
}


//设置宠物Item开启
function SetPetOpenHandle(i) {
	var ItemObj = qyengine.guardId("petRollerItem" + i).objects;
	ItemObj.obj_Icon_fate_lock.hide();
	ItemObj.petRolleItemIcon.show();
	var levelKey = 0;
	if (game.vars_.petData[game.vars_.allPetIdArr[i]].level <= 0) {
		levelKey = 0;
	} else {
		levelKey = game.vars_.petData[game.vars_.allPetIdArr[i]].level - 1;
	}
	var iconName = getConfig("pet", game.vars_.allPetIdArr[i], "photo").split(";")[levelKey];
	ItemObj.petRolleItemIcon.changeSprite("obj_" + iconName + "_default");
}





for (var i = 0; i < game.vars_.allPetIdArr.length; i++) {
	qyengine.instance_create(0, 0, "petRollerItem", { "type": "petRollerItem", "id": 'petRollerItem' + i, "zIndex": 9 });
	qyengine.guardId("petRollerItem" + i).setVar("select_id", game.vars_.allPetIdArr[i]);
	qyengine.guardId("scro_PetPanel").appendChild("petRollerItem" + i, 0, 0, 0, i, false, true);

	if (game.vars_.petData[game.vars_.allPetIdArr[i]] == null || (game.vars_.friendpet && game.vars_.petData[game.vars_.allPetIdArr[i]].isAdopt) == 0) {
		// 当前的宠物没有开启
		//  qyengine.guardId("petRollerItem" + i).
		SetPetNoOpenHandle(i);
	} else {
		//当前的宠物开启了
		SetPetOpenHandle(i);
		if (game.vars_.CurryPetID == null) {
			game.vars_.CurryPetID = game.vars_.allPetIdArr[i];

		}
	}
}
game.scripts["al_scr_TouchPet"](null, null, game.vars_.CurryPetID);
if (game.vars_.allPetIdArr.length >= 4) {
	qyengine.guardId("PetAdoptionArrowL").show();
	qyengine.guardId("PetAdoptionArrowR").show();
}


/**
 *    TouchPet
 */
//点击的~宠物Item
//宠物的ID 
function getPerfectWord() {
	var _txt = "";
	switch (arguments[0]) {
		case "A":
			_txt = "优秀";
			break;
		case "B":
			_txt = "优良";
			break;
		case "S":
			_txt = "完美";
			break;
		case "SS":
			_txt = "完美+";
			break;
		default:
			break;
	}
	return _txt;
}

function setPetShopIsShow(hideArg) {
	hideArg ? PetHumanityGroup.show() : PetHumanityGroup.hide();;
	for (var _cell in PetHumanityGroup.objects) {
		if (hideArg && _cell != "humanGroup") {
			PetHumanityGroup.objects[_cell].hide();
		}
		if (!hideArg) {
			PetHumanityGroup.objects[_cell].show();
		}
	}
	hideArg ? humanGroup.show() : humanGroup.hide();
	for (var _item in humanGroup.objects) {
		if (hideArg && _item != "obj_fate_pet_bt_29_1" && _item != "firefliesShopBtn") {
			humanGroup.objects[_item].hide();
		} else {
			humanGroup.objects[_item].show();
			console.log(_item);
		}
	}
}

if (game.vars_.petData[petId] == null && !game.vars_.friendpet) {
	//点击的宠物没有开启
	var unlockData = getConfig("pet", petId, "unlock").split("|");
	var strInfo = "";
	if (unlockData[0] == "1") {
		if (unlockData[1] == "0") {
			strInfo += "通关主线关卡";
		} else if (unlockData[1] == "1") {
			strInfo += "通关支线关卡";
		}
		var guanKaTab = "(" + getConfig("quest", unlockData[2], "tab_1") + ")";
		strInfo += getConfig("quest", unlockData[2], "name") + guanKaTab + "解锁";

	} else if (unlockData[0] == "2") {
		strInfo += "贵宾" + unlockData[1] + "解锁";
	}
	game.scripts["al_scr_AddTip_1"](null, null, strInfo, "layer1");
	return;
} else if (game.vars_.petData[petId] == null && game.vars_.friendpet) {
	game.scripts["al_scr_AddTip_1"](null, null, "您的好友还未领养该宠物哦~", "layer1");
	return;
}





//当前的宠物ID号

game.vars_.CurryPetID = petId;




for (var i = 0; i < game.vars_.allPetIdArr.length; i++) {
	if (qyengine.guardId("petRollerItem" + i)) {
		if (game.vars_.allPetIdArr[i] == game.vars_.CurryPetID) {
			qyengine.guardId("petRollerItem" + i).objects.obj_fate_pet_box_12_1.show();
		} else {
			qyengine.guardId("petRollerItem" + i).objects.obj_fate_pet_box_12_1.hide();
		}
	}
}







//设置右侧的属性面板
function SetPetPropertyHandle() {
	if (petData.level <= 0 || !petData.level) {
		return;
	}


	var propertyStr = getConfig("pet", petId, "property").split(";")[petData.level - 1];
	var propertyMaxStr = getConfig("pet", petId, "property").split(";")[petData.level];
	//当前宠物是否达到满级
	if (propertyMaxStr == null) {
		qyengine.guardId("grou_petProperty").hide();
		qyengine.guardId("grou_petProperty_2").show();
		var propertyData = propertyStr.split("#")
		for (var i = 0; i < propertyData.length; i++) {
			var propertyArr = propertyData[i].split("|");
			var propertyMaxArr = propertyData[i].split("|");
			qyengine.guardId("petPropertyMaxIcon_" + i).changeSprite("obj_FontImage_property_" + propertyArr[0] + "_default");
			qyengine.guardId("petPropertyMaxText_" + i).text = getPerfectWord(propertyArr[1]);
		}
	} else {
		qyengine.guardId("grou_petProperty").show();
		qyengine.guardId("grou_petProperty_2").hide();
		var propertyData = propertyStr.split("#");
		var propertyMaxData = propertyMaxStr.split("#");
		for (var i = 0; i < propertyData.length; i++) {
			var propertyArr = propertyData[i].split("|");
			var propertyMaxArr = propertyMaxData[i].split("|");
			qyengine.guardId("petPropertyIcon_" + i).changeSprite("obj_FontImage_property_" + propertyArr[0] + "_default");
			var txt_0 = getPerfectWord(propertyArr[1]),
				txt_1 = getPerfectWord(propertyMaxArr[1]);

			//qyengine.guardId("grou_petPropertyText_"+i).text=propertyArr[1]+"    "+propertyMaxArr[1];
			qyengine.guardId("grou_petPropertyText_" + i).text = txt_0 + " " + txt_1;

		}

	}
}






//设置成长值进度条
function SetGrowProgressHandle() {
	//如果是宠物型 是 成长值 
	if (petData.level <= 2) {
		if (petData.growVal > parseInt(cardinalityNum)) {
			qyengine.guardId("obj_fate_pet_jindutioa_01_1_1").width = 702 * (parseInt(cardinalityNum) / parseInt(cardinalityNum));
			//设置成长值文本
			qyengine.guardId("grouPetgrowText").text = "成长值:" + parseInt(petData.growVal) + "/" + parseInt(cardinalityNum);
		} else {
			qyengine.guardId("obj_fate_pet_jindutioa_01_1_1").width = 702 * (petData.growVal / parseInt(cardinalityNum));
			//设置成长值文本
			qyengine.guardId("grouPetgrowText").text = "成长值:" + petData.growVal + "/" + parseInt(cardinalityNum);
		}


	} else {

		//如果是人型显示的是亲密度

		qyengine.guardId("obj_fate_pet_jindutioa_01_1_1").width = 702;

		if (petData.intimacyVal <= 100) {
			//设置成长值文本
			qyengine.guardId("grouPetgrowText").text = "亲密度:" + petData.intimacyVal + "/" + 100;

		} else {
			//设置成长值文本
			qyengine.guardId("grouPetgrowText").text = "亲密度:" + petData.intimacyVal;
		}



	}

}



//未领养宠物
function NotToAdoptHandle() {
	//设置为领养的UI
	qyengine.guardId("grouAdopt").show();
	grou_PetPlay.hide();
	var adoptMoneyData = getConfig("pet", petId, "adopt").split("|");
	//设置领养的钱币ICON
	qyengine.guardId("obj_petDeblockingIcon").changeSprite("obj_" + getConfig("prop", adoptMoneyData[1], "smallIcon") + "_default");
	//设置领养的钱数
	qyengine.guardId("petDeblockingUseMoneyText").text = adoptMoneyData[2];

	//设置品质UI
	qyengine.guardId("grou_petProperty").hide();
	qyengine.guardId("grou_petProperty_2").hide();
	//饱食度 心情值 UI 
	qyengine.guardId("petChildhoodStateGrou").hide();
	//设置 对白
	qyengine.guardId("petChildhoodDialogueText").text = "我这么可爱还不赶紧领回家?";
	//设置底图
	qyengine.guardId("obj_fate_pet_beijing_02").changeSprite("obj_fate_pet_beijing_01_default");
	qyengine.guardId("obj_fate_pet_13_1").changeSprite("obj_fate_pet_13_1_default");

	qyengine.guardId("grou_AdoptionAward").hide();

}


//设置饱食度心情值
function SetOvereatMoodOfHandle() {

	//设置饱食度
	qyengine.guardId("petOvereatBar").width = 360 * (petData.satietiy / 100);
	qyengine.guardId("petFeedNumText").text = petData.satietiy + "/" + 100;
	//设置心情
	qyengine.guardId("petMoodOfBar").width = 360 * (petData.moodVal / 100);
	qyengine.guardId("petMoodNumText").text = petData.moodVal + "/" + 100;

}






//重置 宠物的      game.vars_.friendpet=true; 照看好友的宠物
function RemakePetPlayScro() {
	var indexNum = 0;
	if (petData.level > 2) {
		indexNum = 3;
	}
	//可玩的项目shumu

	var playNum = game.vars_.friendpet ? 2 : 3;

	//重新加
	var PetActionItem_classId = game.vars_.friendpet ? "PetActionItem_friend" : "PetActionItem";
	for (var i = 0; i < playNum; i++) {
		if (game.vars_.friendpet && game.vars_.stealType != 0) {
			i = 1;
		}




		var obj = qyengine.guardId(PetActionItem_classId + i);
		if (obj == null || obj.destroyed_) {
			qyengine.instance_create(0, 0, PetActionItem_classId, { "type": PetActionItem_classId, "id": PetActionItem_classId + i, "zIndex": 9 });

			qyengine.guardId("scro_PetPlay").appendChild(PetActionItem_classId + i, 0, 0, 0, i, false, true);
		}

		qyengine.guardId(PetActionItem_classId + i).setVar("select_id", (i) + 1 + indexNum);
		//已诱拐
		if (game.vars_.friendpet && game.vars_.petData[petId].youguai != undefined && game.vars_.petData[petId].youguai == 0 && i == 1) {
			qyengine.guardId(PetActionItem_classId + i).objects['obj_fate_pet_bt_06'].changeSprite("obj_fate_pet_bt_Friend_02_default");
		}
		if (game.vars_.friendpet && indexNum == 3 && game.vars_.petData[petId].qinting != undefined && game.vars_.petData[petId].qinting == 0 && i == 0) {
			qyengine.guardId(PetActionItem_classId + i).objects['obj_fate_pet_bt_06'].changeSprite("obj_fate_pet_bt_Friend_03_default");
		}
		if (game.vars_.friendpet && indexNum == 0 && game.vars_.petData[petId].weisi != undefined && game.vars_.petData[petId].weisi == 0 && i == 0) {
			qyengine.guardId(PetActionItem_classId + i).objects['obj_fate_pet_bt_06'].changeSprite("obj_fate_pet_bt_Friend_01_default");
		}
		if (game.vars_.friendpet && game.vars_.stealType != 0) {
			break;
		}
	}
	//刷新 宠物的 活动 数据 
	game.scripts["al_scr_RefreshActiveItem"](null, null);


}





//已经领养的宠物
function ToAdoptHandle() {
	//设置 宠物阶段 人型阶段
	//虽然是领养的~需要查看一下是不是在领取
	if (('exploreTime' in petData) && (petData.exploreTime > 0 || petData.exploreReward == 2)) {
		grou_PetPlay.hide();

		//正在探索当中

	} else {
		grou_PetPlay.show();
	}

	RemakePetPlayScro();

	qyengine.guardId("grouAdopt").hide();

	//设置底图
	qyengine.guardId("obj_fate_pet_beijing_02").changeSprite("obj_fate_pet_beijing_02_default");


}

var setPetImagePos = function () {
	if (Number(petId) == 3) {
		qyengine.guardId("PetAdoptionPetImg1").x = 226;
		qyengine.guardId("PetAdoptionPetImg1").y = 233;
		qyengine.guardId("petChildhoodDialogueText").x = 56;
		qyengine.guardId("petChildhoodDialogueText").y = -48;
		qyengine.guardId("obj_fate_pet_box_17_1").x = 219;
		qyengine.guardId("obj_fate_pet_box_17_1").y = 12;
	}
	else {
		qyengine.guardId("PetAdoptionPetImg1").x = 226;
		qyengine.guardId("PetAdoptionPetImg1").y = 283;
		qyengine.guardId("petChildhoodDialogueText").x = 56;
		qyengine.guardId("petChildhoodDialogueText").y = 42;
		qyengine.guardId("obj_fate_pet_box_17_1").x = 219;
		qyengine.guardId("obj_fate_pet_box_17_1").y = 102;
	}
}

//设置宠物的外形
function SetPetOutlineHandle() {

	var icon;
	if (petData.level == 0) {
		icon = getConfig("pet", petId, "image").split(";")[0];
		qyengine.guardId("PetAdoptionPetImg1").changeSprite("obj_" + icon + "_default");
		setPetImagePos();

	} else if (petData.level > 0 && petData.level <= 2) {
		icon = getConfig("pet", petId, "image").split(";")[petData.level - 1];
		qyengine.guardId("PetAdoptionPetImg1").changeSprite("obj_" + icon + "_default");
		setPetImagePos();

	} else {
		icon = getConfig("pet", petId, "image").split(";")[petData.level - 1];
		qyengine.guardId("PetAdoptionPetImg2").changeSprite("obj_" + icon + "_default");
		setPetImagePos();
	}

}





//是否领取  字段是1/否0领养 
var petData = game.vars_.petData[petId];
SetPetOutlineHandle();
//成长的值
var cardinalityNum;
//是不是飞升 

if (petData.level == 0) {
	cardinalityNum = getConfig("pet", petId, "grow").split(";")[petData.level];
} else {
	if (petData.level == 1) {
		qyengine.guardId("petStateText1").text = "幼年";
		qyengine.guardId("petStateText2").text = "少年";
	} else if (petData.level == 2) {
		qyengine.guardId("petStateText1").text = "少年";
		qyengine.guardId("petStateText2").text = "成人";
	}


	cardinalityNum = getConfig("pet", petId, "grow").split(";")[petData.level - 1];
	if (cardinalityNum == "-1") {
		cardinalityNum = getConfig("pet", petId, "grow").split(";")[petData.level - 2];
	}
}
//设置名字
qyengine.guardId("petNameText").text = getConfig("pet", petId, "name").split(";")[petData.level - 1];
//设置描述
qyengine.guardId("petDicText").text = getConfig("pet", petId, "dec").split(";")[petData.level - 1];




//形象
if (petData.level <= 2) {
	qyengine.guardId("PetChildhoodGroup").show();
	qyengine.guardId("PetHumanityGroup").hide();
	qyengine.guardId("petChildhoodStateGrou").show();
	qyengine.guardId("humanGroup").hide();
	//设置提示文本
	qyengine.guardId("petTipsTextInfo1").text = "饱食,心情每" + "<font  color='#ff0000'>" + "10分钟减1点" + "</font>" + "," + "<font  color='#ff0000'>" + "饱食为0" + "</font>时宠物会死亡。";
	//只显示萤火商店
	!game.vars_.friendpet && setPetShopIsShow(1);

} else {
	//只显示萤火商店
	!game.vars_.friendpet && setPetShopIsShow(0);
	qyengine.guardId("PetChildhoodGroup").hide();
	qyengine.guardId("PetHumanityGroup").show();
	qyengine.guardId("petChildhoodStateGrou").hide();
	qyengine.guardId("humanGroup").show();
	qyengine.guardId("petTipsTextInfo1").text = "亲密度达到100即可开启续前缘番外剧情哦";

}
//好友进来的自己隐藏
game.vars_.friendpet && qyengine.guardId("humanGroup").hide();
//设置心情
game.scripts["al_scr_SetPetDialogue"](null, null);
//设置进度条
SetGrowProgressHandle();
//设置饱食度  心情值  Overeat MoodOf
SetOvereatMoodOfHandle();
//设置品质UI
SetPetPropertyHandle();
//检测当前的宠物是不是死了
if (petData.satietiy <= 0 && petData.isAdopt == 1 && petData.level <= 2) {
	qyengine.guardId("grouAdopt").show();
	qyengine.guardId("grou_AdoptionAward").hide();
	qyengine.guardId("grou_PetPlay").hide();
	var resurgenceMoneyData = getConfig("pet", game.vars_.CurryPetID, "revive").split(";")[petData.level - 1].split("|");
	qyengine.guardId("petDeblockingUseMoneyText").text = resurgenceMoneyData[2];
	qyengine.guardId("obj_fate_pet_13_1").changeSprite("obj_fate_pet_14_default");

	return;
}


//领养前后
if (petData.isAdopt == 1) {
	ToAdoptHandle();
} else {
	NotToAdoptHandle();
	qyengine.guardId("obj_fate_pet_13_1").changeSprite("obj_fate_pet_13_default");
	return;
}



if (petData.growVal >= parseInt(cardinalityNum)) {
	//到达飞升状态
	qyengine.guardId("grouAdopt").show();
	qyengine.guardId("grou_AdoptionAward").hide();
	qyengine.guardId("grou_PetPlay").hide();
	var resurgenceMoneyData = getConfig("pet", game.vars_.CurryPetID, "up").split(";")[petData.level - 1].split("|");
	qyengine.guardId("petDeblockingUseMoneyText").text = resurgenceMoneyData[2];
	qyengine.guardId("obj_fate_pet_13_1").changeSprite("obj_fate_pet_15_default");

	return;
}












/**
 * RefreshActiveItem
 */

//game.vars_.CurryPetID  game.vars_.petData[petId]



//PetMainPanel.vars_.addProperty=["grow","mood","food","intimacy"];
//PetMainPanel.vars_.addPropertyIcon=["obj_fate_pet_bt_06","obj_fate_pet_bt_05","fate_pet_bt_07","fate_pet_bt_26","fate_pet_bt_27","fate_pet_bt_28"];
//挑选出 当前活动 所加成的属性值  1 喂食 2 玩耍 3 探索 4 倾听 5猜灯谜 6送礼物
function ChuckActiveAddPropertyHandle(index) {

	var str = "";
	//成长
	var petMoneyObj = getConfig("pet_money", index);
	if (petMoneyObj["grow"] != 0) {
		str += "成长 +" + petMoneyObj.grow + "\n";
	}
	//心情
	if (petMoneyObj["mood"] != 0) {
		str += "心情 +" + petMoneyObj.mood + "\n";
	}
	//饱食度
	if (petMoneyObj["food"] != 0) {
		str += "饱食度 +" + petMoneyObj.food + "\n";
	}
	//亲密度
	if (petMoneyObj["intimacy"] != 0) {
		str += "亲密度 +" + petMoneyObj.intimacy + "\n";
	}
	return str;
}


//CD进行转换
function formatSeconds(value) {
	var theTime = parseInt(value);// 秒 
	var theTime1 = 0;// 分 
	var theTime2 = 0;// 小时 
	// alert(theTime); 
	if (theTime > 60) {
		theTime1 = parseInt(theTime / 60);
		theTime = parseInt(theTime % 60);
		// alert(theTime1+"-"+theTime); 
		if (theTime1 > 60) {
			theTime2 = parseInt(theTime1 / 60);
			theTime1 = parseInt(theTime1 % 60);
		}
	}
	var result = "" + parseInt(theTime) + "秒";
	if (theTime1 > 0) {
		result = "" + parseInt(theTime1) + "分" + result;
	}
	if (theTime2 > 0) {
		result = "" + parseInt(theTime2) + "小时" + result;
	}
	return result;
}


//设置Item的状态
//item 需要设置的Item
//petMoneyObj  宠物的 活动数据 pet_money表
//isCd  是否在CD当中
//当前刷新的活动Id
function SetItemStateHandle(item, petMoneyObj, cd, activeID) {
	if (cd > 0) {
		//添加的属性
		item.objects.petPlayAddPropertyText.hide();
		//cd的时间
		item.objects.petTextCdTime.show();
		item.objects.obj_fate_pet_bt_jiasu_auto.show();
		item.objects.petTextCdTime.text = formatSeconds(cd);
		//设置灰度
		var children = (item.currentSprite && item.currentSprite.children) || [];

		for (var i = 0; i < children.length; i++) {
			if (children[i] && children[i].qyobj && children[i] && children[i].qyobj.id == "obj_fate_pet_bt_jiasu_auto") {
				continue;
			}
			children[i] && children[i].qyobj && children[i].qyobj.setHSL(0, -100, 0);
		}
		//设置消耗的钱数
		item.objects.grouPetActionItemUseMoney.hide();
	} else {
		item.objects.petTextCdTime.hide();
		item.objects.obj_fate_pet_bt_jiasu_auto.hide();
		item.objects.petPlayAddPropertyText.show();
		item.objects.petPlayAddPropertyText.text = ChuckActiveAddPropertyHandle(activeID);
		//回复灰度
		var children = (item.currentSprite && item.currentSprite.children) || [];

		for (var i = 0; i < children.length; i++) {
			children[i] && children[i].qyobj && children[i].qyobj.setHSL(0, 0, 0);
		}
		//设置消耗的钱数
		item.objects.grouPetActionItemUseMoney.show();
		var moneyArr = petMoneyObj.cost.split("|");
		var moneyIcon = getConfig("prop", moneyArr[1], "smallIcon");
		item.objects.grouPetActionItemUseMoney.objects.petPlayUseMoneyIcon.changeSprite("obj_" + moneyIcon + "_default");
		item.grouPetActionItemUseMoney.objects.petPlayUseMoneyNumText.text = moneyArr[2];
	}
	if (petMoneyObj.viplevel != 0) {
		//设置VIP等级
		item.objects.VIPOpenCondition.show();
		item.objects.obj_server_baioqian_2.show();
		item.objects.VIPOpenCondition.text = "贵" + petMoneyObj.viplevel + "开启";
	} else {
		item.objects.VIPOpenCondition.hide();
		item.objects.obj_server_baioqian_2.hide();
	}

	//设置按钮图片的Icon
	if (game.vars_.friendpet) {

	}
	item.objects.obj_fate_pet_bt_06.changeSprite("obj_" + PetMainPanel.vars_.addPropertyIcon[activeID] + "_default");
}




//刷新喂食的Item                             PetActionItem_friend
function RefreshFeedItemHandle() {
	//喂食的Item
	var feedItem = qyengine.guardId("PetActionItem0");
	var petMoneyObj = getConfig("pet_money", 1);
	//from 好友
	if (game.vars_.friendpet) {
		feedItem = qyengine.guardId("PetActionItem_friend0");
		var interaction_pet = game.configs.interaction_pet[3];
		feedItem.objects['grouPetActionItemUseMoney'].hide();
		feedItem.objects['petTextCdTime'].hide();
		feedItem.objects['petText_no'].show();
		feedItem.objects['petPlayAddPropertyText'].text = "" + CalPlus(3);
		if (!game.vars_.friendpet || (game.vars_.friendpet && game.vars_.petData[game.vars_.CurryPetID].weisi == undefined)) {
			feedItem.objects['obj_fate_pet_bt_06'].changeSprite("obj_fate_pet_bt_06_default");
		}

	} else {
		SetItemStateHandle(feedItem, petMoneyObj, petData.feedTime, 1);
	}
}


//刷新玩耍的Item
function RefreshPlayItemHandle() {
	//玩耍的Item
	var playItem = qyengine.guardId("PetActionItem1");
	var petMoneyObj = getConfig("pet_money", 2);
	SetItemStateHandle(playItem, petMoneyObj, petData.playerTime, 2);
}


// 刷新 探索的
function RefreshExploreItemHandle() {
	//探索
	var exploreItem = qyengine.guardId("PetActionItem2");
	var petMoneyObj = getConfig("pet_money", 3);
	SetItemStateHandle(exploreItem, petMoneyObj, petData.exploreCd, 3);
}
//计算 增减   好友进来
function CalPlus(_typeId) {
	var _typeData = game.configs.interaction_pet[_typeId];
	var data_类别 = { 'grow': "成长值", 'mood': "心情值", 'food': "饱食度", 'intimacy': "亲密度" };
	var data_key = Object.keys(data_类别)
	var show_text = ""
	var _index = 0;
	for (var i = 0; i < data_key.length; i++) {
		var _value = Number(_typeData[data_key[i]]);
		if (_value) {
			_value = _value > 0 ? ("+" + _value) : _value;
			if (_index == 0) {
				show_text += (data_类别[data_key[i]] + _value);
			} else {
				show_text += ("\n" + data_类别[data_key[i]] + _value);
			}
			_index++;
		}
	}
	return show_text;
}
//刷新 倾听的
function RefreshListenItemHandle() {
	//倾听的
	var listenItem = qyengine.guardId("PetActionItem0");
	var petMoneyObj = getConfig("pet_money", 4);
	if (game.vars_.friendpet) {
		listenItem = qyengine.guardId("PetActionItem_friend0");
		var interaction_pet = game.configs.interaction_pet[4];
		listenItem.objects['grouPetActionItemUseMoney'].hide();
		listenItem.objects['petTextCdTime'].hide();
		listenItem.objects['petText_no'].show();
		listenItem.objects['petPlayAddPropertyText'].text = "" + CalPlus(4);
		if (!game.vars_.friendpet || (game.vars_.friendpet && game.vars_.petData[game.vars_.CurryPetID].qinting == undefined)) {
			listenItem.objects['obj_fate_pet_bt_06'].changeSprite("obj_fate_pet_bt_26_default");
		}
	} else {
		SetItemStateHandle(listenItem, petMoneyObj, petData.listenTime, 4);
	}
}
//刷新 诱拐
function RefreshstealItemHandle() {
	var listenItem = qyengine.guardId("PetActionItem_friend1");
	if (petData.level > 2) {
		var dataPlace = 2;
	} else {
		var dataPlace = 1;
	}
	var interaction_pet = game.configs.interaction_pet[dataPlace];
	listenItem.objects['grouPetActionItemUseMoney'].show();
	listenItem.objects['grouPetActionItemUseMoney'].objects['petPlayUseMoneyNumText'].text = 10;
	listenItem.objects['grouPetActionItemUseMoney'].objects['petPlayUseMoneyIcon'].changeSprite("obj_Icon_Diamonds_default");
	listenItem.objects['petTextCdTime'].hide();
	listenItem.objects['petText_no'].hide();
	listenItem.objects['petPlayAddPropertyText'].text = "" + CalPlus(dataPlace);
	if (!game.vars_.friendpet || (game.vars_.friendpet && game.vars_.petData[game.vars_.CurryPetID].youguai == undefined)) {
		listenItem.objects['obj_fate_pet_bt_06'].changeSprite("obj_fate_pet_bt_Friend_06_default");
	}

}


//刷新猜灯谜的
function RefreshGuessLanternItemHandle() {
	//猜灯谜的
	var guessLantern = qyengine.guardId("PetActionItem1");
	var petMoneyObj = getConfig("pet_money", 5);
	SetItemStateHandle(guessLantern, petMoneyObj, petData.guessTime, 5);

}


//刷新送礼物的
function RefreshSendGiftsItemHandle() {
	//送礼物的
	var sendGifts = qyengine.guardId("PetActionItem2");
	var petMoneyObj = getConfig("pet_money", 6);
	SetItemStateHandle(sendGifts, petMoneyObj, petData.giveGiftTime, 6);

}




//刷新人型的宠物的活动Item
function RefreshHumanformActivityHandle() {
	//刷新倾听
	if (!game.vars_.friendpet || (game.vars_.friendpet && game.vars_.stealType == 0)) {
		RefreshListenItemHandle();
	}

	if (game.vars_.friendpet == true) {
		//诱拐
		RefreshstealItemHandle();
	} else {
		//刷新猜灯谜
		RefreshGuessLanternItemHandle();
		//刷新送礼物
		RefreshSendGiftsItemHandle();
	}
}


//宠物形的活动Item
function RefreshPetformActivityHandle() {
	//刷新喂食
	if (!game.vars_.friendpet || (game.vars_.friendpet && game.vars_.stealType == 0)) {
		RefreshFeedItemHandle();
	}

	if (game.vars_.friendpet) {
		RefreshstealItemHandle();
	} else {
		//刷新玩耍
		RefreshPlayItemHandle();
		//刷新探索
		RefreshExploreItemHandle();
	}
}

//正在探索当中 
function ExploreIngHandle() {
	grou_PetPlay.hide();
	grou_AdoptionAward.show();
	//刷新 物品
	var awardDataArr = getConfig("pet_money", 3, "reward").split("#");
	//qyengine.guardId("grou_AdoptionAward").objects.scro_petAdoptionReward.
	for (var i = 0; i < awardDataArr.length; i++) {
		var AdoptionRewardItem = qyengine.guardId("scroPetAdoptionRewardItem" + i);
		if (AdoptionRewardItem == null || AdoptionRewardItem.destroyed_) {
			qyengine.instance_create(0, 0, "scroPetAdoptionRewardItem", { "type": "scroPetAdoptionRewardItem", "id": 'scroPetAdoptionRewardItem' + i, "zIndex": 9 });
			qyengine.guardId("scro_petAdoptionReward").appendChild("scroPetAdoptionRewardItem" + i, 0, 0, 0, i, false, true);
		}
		//刷新 Item
		var itemUi = qyengine.guardId("scroPetAdoptionRewardItem" + i).objects;
		var awardArr = awardDataArr[i].split("|");
		var awardIcon;
		if (awardArr[0] == 1) {
			//物品
			awardIcon = getConfig("prop", awardArr[1], "icon");

		} else if (awardArr[0] == 2) {
			//服装
			awardIcon = getConfig("fashion", awardArr[1], "sicon");
		} else {
			//设计图 注 先不处理 策划表里没有配 小图标 字段
			//awardIcon=getConfig("fashionPlan",awardArr[1],"reward");
		}

		itemUi.AdoptionAwardIcon.changeSprite("obj_" + awardIcon + "_default");
		//设置数目
		var num = parseInt(awardArr[2]);
		if (game.vars_.petData[game.vars_.CurryPetID].moodVal < 80) {
			itemUi.AdoptionAwardText.text = num / 2;

		} else {
			itemUi.AdoptionAwardText.text = num;
		}



	}


	//正在探索当中
	if (petData.exploreReward == 0) {
		// 加速
		grou_AdoptionAward.objects.petSpeedUpBtn.vars_.state = 1;
		grou_AdoptionAward.objects.obj_fate_pet_bt_23.changeSprite("obj_fate_pet_bt_24_default");
		grou_AdoptionAward.objects.ExploreTheTimeCdText.text = "探索中....." + formatSeconds(petData.exploreTime);


	} else {
		//探索已经完成 领取状态
		grou_AdoptionAward.objects.petSpeedUpBtn.vars_.state = 0;
		grou_AdoptionAward.objects.obj_fate_pet_bt_23.changeSprite("obj_fate_pet_bt_23_default");
		grou_AdoptionAward.objects.ExploreTheTimeCdText.text = "探索完成";
	}
}




//设置饱食度心情值
function SetOvereatMoodOfHandle() {
	qyengine.guardId("petChildhoodStateGrou").show();


	//设置饱食度
	if (petData.satietiy <= 0) {
		qyengine.guardId("petOvereatBar").width = 360 * (0 / 100);
		qyengine.guardId("petFeedNumText").text = 0 + "/" + 100;
	} else {
		qyengine.guardId("petOvereatBar").width = 360 * (petData.satietiy / 100);
		qyengine.guardId("petFeedNumText").text = petData.satietiy + "/" + 100;
	}

	//设置心情
	if (petData.satietiy <= 0) {
		qyengine.guardId("petMoodOfBar").width = 0;
		qyengine.guardId("petMoodNumText").text = 0 + "/" + 100;
	} else {
		qyengine.guardId("petMoodOfBar").width = 360 * (petData.moodVal / 100);
		qyengine.guardId("petMoodNumText").text = petData.moodVal + "/" + 100;
	}
}




//当前的宠物数据
var petData = game.vars_.petData[game.vars_.CurryPetID];
//先看宠物是不是死了 

//检测当前的宠物是不是死了
if (petData.satietiy <= 0 && petData.level <= 2) {
	qyengine.guardId("grouAdopt").show();
	qyengine.guardId("grou_AdoptionAward").hide();
	qyengine.guardId("grou_PetPlay").hide();
	var resurgenceMoneyData = getConfig("pet", game.vars_.CurryPetID, "revive").split(";")[petData.level - 1].split("|");
	qyengine.guardId("petDeblockingUseMoneyText").text = resurgenceMoneyData[2];
	qyengine.guardId("obj_fate_pet_13_1").changeSprite("obj_fate_pet_14_default");
	return;
}

var cardinalityNum;
if (petData.level == 0) {
	cardinalityNum = getConfig("pet", game.vars_.CurryPetID, "grow").split(";")[petData.level];
} else {
	cardinalityNum = getConfig("pet", game.vars_.CurryPetID, "grow").split(";")[petData.level - 1];
	if (cardinalityNum == "-1") {
		cardinalityNum = getConfig("pet", game.vars_.CurryPetID, "grow").split(";")[petData.level - 2];
	}
}
if (petData.growVal > parseInt(cardinalityNum)) {
	//到达飞升状态
	qyengine.guardId("grouAdopt").show();
	qyengine.guardId("grou_AdoptionAward").hide();
	qyengine.guardId("grou_PetPlay").hide();
	var resurgenceMoneyData = getConfig("pet", game.vars_.CurryPetID, "up").split(";")[petData.level - 1].split("|");
	qyengine.guardId("petDeblockingUseMoneyText").text = resurgenceMoneyData[2];
	qyengine.guardId("obj_fate_pet_13_1").changeSprite("obj_fate_pet_15_default");

	return;
}



//刷新 喂食 玩耍 XXX
//首先判断当前的宠物是不是人型(临时写死~策划也不确定)
if (petData.level > 2) {
	grou_PetPlay.show();
	grou_AdoptionAward.hide();
	//人型  倾听  猜灯谜  送礼物  (好友宠物 倾听和诱拐)
	RefreshHumanformActivityHandle();
} else {
	SetOvereatMoodOfHandle();
	//特殊情况 在探索中的处理    exploreReward 探索奖励是1/否0领取 2可以领取
	if (petData.exploreTime != undefined && (petData.exploreTime >= 0 || petData.exploreReward == 2)) {
		grou_PetPlay.hide();
		ExploreIngHandle();

	} else {
		grou_PetPlay.show();
		grou_AdoptionAward.hide();
		//宠物形 喂食 玩耍 探索
		RefreshPetformActivityHandle();
	}

}













if (grou_friendMainBg.vars_.nowTab == "friend") {
	if (self.vars_ && self.vars_.data) {
		grou_friendMainBg.vars_.closeInfo = self.vars_.data.suit;
		game.vars_.stealType = 1;
	} else if (self.id != "grou_friendBtn_me") {
		grou_friendMainBg.vars_.closeInfo = game.vars_.friendsRank[self.vars_.index].suit;
		game.vars_.stealType = 0;
	}
} else {
	if (self.vars_ && self.vars_.data) {
		grou_friendMainBg.vars_.closeInfo = self.vars_.data.suit;
		game.vars_.stealType = 1;
	} else if (self.id != "grou_friendBtn_me") {
		grou_friendMainBg.vars_.closeInfo = game.vars_.friendsOtherRank[self.vars_.index].suit;
		game.vars_.stealType = 2;
	}
}





//RefreshPetItemTime

function ChuckActiveAddPropertyHandle(index) {

	var str = "";
	//成长
	var petMoneyObj = getConfig("pet_money", index);
	if (petMoneyObj["grow"] != 0) {
		str += "成长 +" + petMoneyObj.grow + "\n";
	}
	//心情
	if (petMoneyObj["mood"] != 0) {
		str += "心情 +" + petMoneyObj.mood + "\n";
	}
	//饱食度
	if (petMoneyObj["food"] != 0) {
		str += "饱食度 +" + petMoneyObj.food + "\n";
	}
	//亲密度
	if (petMoneyObj["intimacy"] != 0) {
		str += "亲密度 +" + petMoneyObj.intimacy + "\n";
	}
	return str;
}

//CD进行转换
function formatSeconds(value) {
	var theTime = parseInt(value);// 秒 
	var theTime1 = 0;// 分 
	var theTime2 = 0;// 小时 
	// alert(theTime); 
	if (theTime > 60) {
		theTime1 = parseInt(theTime / 60);
		theTime = parseInt(theTime % 60);
		// alert(theTime1+"-"+theTime); 
		if (theTime1 > 60) {
			theTime2 = parseInt(theTime1 / 60);
			theTime1 = parseInt(theTime1 % 60);
		}
	}
	var result = "" + parseInt(theTime) + "秒";
	if (theTime1 > 0) {
		result = "" + parseInt(theTime1) + "分" + result;
	}
	if (theTime2 > 0) {
		result = "" + parseInt(theTime2) + "小时" + result;
	}
	return result;
}






//设置Item的状态
//item 需要设置的Item
//petMoneyObj  宠物的 活动数据 pet_money表
//isCd  是否在CD当中
//当前刷新的活动Id
function SetItemStateHandle(item, petMoneyObj, cd, activeID) {
	if (cd == -1 || !item.objects) {
		return;
	}
	if (cd > 0) {
		//当前喂食在CD当中 
		//添加的属性
		item.objects.petPlayAddPropertyText.hide();
		//cd的时间
		item.objects.petTextCdTime.show();
		//冷却图标的显示
		item.objects.obj_fate_pet_bt_jiasu_auto.show();
		item.objects.petTextCdTime.text = formatSeconds(cd);
		//设置灰度
		var children = (item.currentSprite && item.currentSprite.children) || [];

		for (var i = 0; i < children.length; i++) {
			if (children[i] && children[i].qyobj && children[i].qyobj.id == "obj_fate_pet_bt_jiasu_auto") {
				continue;
			}
			children[i] && children[i].qyobj && children[i].qyobj.setHSL(0, -100, 0);
		}
		item.objects.grouPetActionItemUseMoney.hide();
		//不可以点  CD当中
		item.vars_.state = 0;
		//console.log(cd);
	} else {
		//可以喂食
		item.objects.petTextCdTime.hide();
		//冷却的图标的隐藏
		item.objects.obj_fate_pet_bt_jiasu_auto.hide();
		item.objects.petPlayAddPropertyText.show();
		item.objects.petPlayAddPropertyText.text = ChuckActiveAddPropertyHandle(activeID);
		//回复灰度
		var children = (item.currentSprite && item.currentSprite.children) || [];

		for (var i = 0; i < children.length; i++) {
			children[i] && children[i].qyobj && children[i].qyobj.setHSL(0, 0, 0);
		}
		item.objects.grouPetActionItemUseMoney.show();
		//可以点
		item.vars_.state = 1;
		//console.log(cd);
		game.scripts["al_scr_TouchPet"](null, null, game.vars_.CurryPetID);
	}

}




//刷新喂食的Item 
function RefreshFeedItemHandle() {
	//喂食的Item
	var feedItem = qyengine.guardId("PetActionItem0");
	var petMoneyObj = getConfig("pet_money", 1);
	SetItemStateHandle(feedItem, petMoneyObj, petData.feedTime, 1);
}


//刷新玩耍的Item
function RefreshPlayItemHandle() {
	//玩耍的Item
	var playItem = qyengine.guardId("PetActionItem1");
	var petMoneyObj = getConfig("pet_money", 2);
	SetItemStateHandle(playItem, petMoneyObj, petData.playerTime, 2);
}


// 刷新 探索的
function RefreshExploreItemHandle() {
	//探索
	var exploreItem = qyengine.guardId("PetActionItem2");
	var petMoneyObj = getConfig("pet_money", 3);
	SetItemStateHandle(exploreItem, petMoneyObj, petData.exploreCd, 3);
}

//刷新 倾听的
function RefreshListenItemHandle() {
	//倾听的
	var listenItem = qyengine.guardId("PetActionItem0");
	var petMoneyObj = getConfig("pet_money", 4);
	SetItemStateHandle(listenItem, petMoneyObj, petData.listenTime, 4);

}


//刷新猜灯谜的
function RefreshGuessLanternItemHandle() {
	//猜灯谜的
	var guessLantern = qyengine.guardId("PetActionItem1");
	var petMoneyObj = getConfig("pet_money", 5);
	SetItemStateHandle(guessLantern, petMoneyObj, petData.guessTime, 5);

}


//刷新送礼物的
function RefreshSendGiftsItemHandle() {
	//送礼物的
	var sendGifts = qyengine.guardId("PetActionItem2");
	var petMoneyObj = getConfig("pet_money", 6);
	SetItemStateHandle(sendGifts, petMoneyObj, petData.giveGiftTime, 6);

}




//刷新人型的宠物的活动Item
function RefreshHumanformActivityHandle() {
	//刷新倾听
	if (petData.listenTime >= 0) {
		RefreshListenItemHandle();
	}
	//刷新猜灯谜
	if (petData.guessTime >= 0) {
		RefreshGuessLanternItemHandle();
	}
	//刷新送礼物
	if (petData.giveGiftTime >= 0) {
		RefreshSendGiftsItemHandle();
	}
}


//宠物形的活动Item
function RefreshPetformActivityHandle() {
	//刷新喂食
	if (petData.feedTime >= 0) {
		RefreshFeedItemHandle();
	}

	//刷新玩耍
	if (petData.playerTime >= 0) {
		RefreshPlayItemHandle();
	}
	//刷新探索
	if (petData.exploreCd >= 0 || petData.exploreTime >= 0) {
		RefreshExploreItemHandle();
	}
}

//正在探索当中 
function ExploreIngHandle() {
	grou_PetPlay.hide();
	grou_AdoptionAward.show();

	//正在探索当中
	if (petData.exploreTime > 0) {
		// 加速
		grou_AdoptionAward.objects.petSpeedUpBtn.vars_.state = 1;
		grou_AdoptionAward.objects.obj_fate_pet_bt_23.changeSprite("obj_fate_pet_bt_24_default");
		grou_AdoptionAward.objects.ExploreTheTimeCdText.text = "探索中....." + formatSeconds(petData.exploreTime);

	} else {
		petData.exploreReward = 2;
		//探索已经完成 领取状态
		grou_AdoptionAward.objects.petSpeedUpBtn.vars_.state = 0;
		grou_AdoptionAward.objects.obj_fate_pet_bt_23.changeSprite("obj_fate_pet_bt_23_default");
		grou_AdoptionAward.objects.ExploreTheTimeCdText.text = "探索完成";
	}
}

//设置饱食度心情值
function SetOvereatMoodOfHandle() {
	qyengine.guardId("petChildhoodStateGrou").show();
	//设置饱食度
	if (petData.satietiy <= 0) {
		qyengine.guardId("petOvereatBar").width = 360 * (0 / 100);
		qyengine.guardId("petFeedNumText").text = 0 + "/" + 100;
	} else {
		qyengine.guardId("petOvereatBar").width = 360 * (petData.satietiy / 100);
		qyengine.guardId("petFeedNumText").text = petData.satietiy + "/" + 100;
	}

	//设置心情
	if (petData.moodVal <= 0) {
		qyengine.guardId("petMoodOfBar").width = 0;
		qyengine.guardId("petMoodNumText").text = 0 + "/" + 100;
	} else {
		qyengine.guardId("petMoodOfBar").width = 360 * (petData.moodVal / 100);
		qyengine.guardId("petMoodNumText").text = petData.moodVal + "/" + 100;
	}

}
//当前的宠物数据
var petData = game.vars_.petData[game.vars_.CurryPetID];
//是不是没有领养
if (petData.isAdopt == 0) {
	return;
}
//检测当前的宠物是不是死了
if (petData.satietiy == 0 && petData.level <= 2) {
	qyengine.guardId("grouAdopt").show();
	qyengine.guardId("grou_AdoptionAward").hide();
	qyengine.guardId("grou_PetPlay").hide();
	var resurgenceMoneyData = getConfig("pet", game.vars_.CurryPetID, "revive").split(";")[petData.level - 1].split("|");
	qyengine.guardId("petDeblockingUseMoneyText").text = resurgenceMoneyData[2];
	qyengine.guardId("obj_fate_pet_13_1").changeSprite("obj_fate_pet_14_default");
	SetOvereatMoodOfHandle();
	return;
}




var cardinalityNum;
if (petData.level == 0) {
	cardinalityNum = getConfig("pet", game.vars_.CurryPetID, "grow").split(";")[petData.level];
} else {
	cardinalityNum = getConfig("pet", game.vars_.CurryPetID, "grow").split(";")[petData.level - 1];
	if (cardinalityNum == "-1") {
		cardinalityNum = getConfig("pet", game.vars_.CurryPetID, "grow").split(";")[petData.level - 2];
	}
}
if (petData.growVal >= parseInt(cardinalityNum)) {
	//到达飞升状态
	qyengine.guardId("grouAdopt").show();
	qyengine.guardId("grou_AdoptionAward").hide();
	qyengine.guardId("grou_PetPlay").hide();
	var resurgenceMoneyData = getConfig("pet", game.vars_.CurryPetID, "up").split(";")[petData.level - 1].split("|");
	qyengine.guardId("petDeblockingUseMoneyText").text = resurgenceMoneyData[2];
	qyengine.guardId("obj_fate_pet_13_1").changeSprite("obj_fate_pet_15_default");

	return;
}

//刷新 喂食 玩耍 XXX
//首先判断当前的宠物是不是人型(临时写死~策划也不确定)
if (petData.level > 2) {
	grou_PetPlay.show();
	grou_AdoptionAward.hide();
	//人型  倾听  猜灯谜  送礼物
	RefreshHumanformActivityHandle();
} else {
	//特殊情况 在探索中的处理    exploreReward 探索奖励是1/否0领取
	if (petData.exploreTime && (petData.exploreTime > 0 || petData.exploreReward == 2)) {
		ExploreIngHandle();

	} else {
		grou_PetPlay.show();
		grou_AdoptionAward.hide();
		//宠物形 喂食 玩耍 探索
		RefreshPetformActivityHandle();
	}
	SetOvereatMoodOfHandle();
}































qyengine.dataform_async.update("dataform_userinfo", "user_onlyId", { "user_onlyId": game.vars_.fromAppId, "itemNum": game.vars_.itemNum }, "actionlist_asyncData");

qyengine.dataform_async.update("dataform_userinfo", "user_onlyId", { "user_onlyId": game.vars_.fromAppId, "everyTask": JSON.stringify(game.everydayTask) }, "actionlist_asyncData");

qyengine.dataform_async.update("dataform_userinfo", "user_onlyId", { "user_onlyId": game.vars_.fromAppId, "everyTask": JSON.stringify(game.everydayTask) }, "actionlist_asyncData");

qyengine.dataform_async.update("dataform_userinfo", "user_onlyId", { "user_onlyId": game.vars_.fromAppId, "everyTask": JSON.stringify(game.everydayTask) }, "actionlist_asyncData");

localStorage.setItem("isMusic", game.vars_.isMusic);
localStorage.setItem("isSound", game.vars_.isSound);

//更改了音乐的保存的方式~~~~~
if (localStorage.getItem("isMusic") != undefined) {
	game.vars_.isMusic = JSON.parse(localStorage.getItem("isMusic"));
}

if (localStorage.getItem("isSound") != undefined) {
	game.vars_.isSound = JSON.parse(localStorage.getItem("isSound"));
}

if (game.vars_.isMusic) {
	qyengine.play_sound('sd_menuMusic', {
		"loop": true,
		"actionIndex": 11
	});
} else {
	qyengine.stop_bg_sound();
}
//判断是否有昵称~~~~~~
if (current_scene['temp'].day_name.toString() == "undefined" || current_scene['temp'].day_name.length == 0) {
	qyengine.ajax("http://119.29.203.42:8939/servlet/json", {
		result: "text",
		data: {
			funcNo: "100340",
			openid: game.fromAppId,
			operation_type: 1,
			ck: game.vars_.MdValue,
			day_name: current_scene.vars_.users_Id,
		}
	}, "actionlist_getDecodeName");
	return;
}

/**
 * actionlist_getDecodeName 获得name
 */
console.log("第一次为了获得昵称~~~~~~~~~" + jsdata.data);
qyengine.ajax("http://119.29.203.42:8939/servlet/json",
	{ result: "text", data: { funcNo: "100341", openid: game.fromAppId + "", ck: game.vars_.MdValue } }, "actionlist_1");





localStorage.setItem("isMusic", game.vars_.isMusic);
localStorage.setItem("isSound", game.vars_.isSound);



if (localStorage.getItem("isMusic") != undefined) {
	game.vars_.isMusic = JSON.parse(localStorage.getItem("isMusic"));
}

if (localStorage.getItem("isSound") != undefined) {
	game.vars_.isSound = JSON.parse(localStorage.getItem("isSound"));
}




function actionlist_getDecodeName(data) {
	console.log(data);
}
game.fromAppId = 'dapengge111';
var ckValue = "Open" + game.fromAppId + "deb37d8fbd1f4a0d9fe4cce177fd8708" + "iD";
var MdValue = qyengine.getHexMd5Digest(ckValue);
game.vars_.MdValue = MdValue;
/*
qyengine.ajax("http://119.29.203.42:8939/servlet/json",
	{ result: "text", data: { funcNo: "100341", openid: game.fromAppId + "", ck: MdValue } }, "actionlist_1");
	*/
qyengine.ajax("http://119.29.203.42:8939/servlet/json", {
	result: "text",
	data: {
		funcNo: "100340",
		openid: game.fromAppId,
		operation_type: 1,
		ck: game.vars_.MdValue,
		day_name: "哈哈",
	}
}, "actionlist_getDecodeName");



decodeURI(obtainUser_Id.split('|')[1])
console.log("超超的代码报错了？？？？？？？？？？？？？？？？？？？？？？？？？-----", decodeURI(obtainUser_Id.split('|')[1]));


current_scene['temp'].day_name == "" ? current_scene.vars_.users_Id : current_scene['temp'].day_name





//增加穿如剧情按钮之前新建一个快照先~~~~















/**
 * LinkShare
 */
game.vars_.SharingIndex = _SharingIndex ? _SharingIndex : 6;

if (qyengine.login._getLoginInfo()._type == "qq" || (window.isShare && window.isShare())) {
	var state = Math.floor(Math.random() * 10) % 2;
	var title;
	if (state == 0) {
		title = "云锦绣织的梦 三生皆为遇见你";

	} else {
		title = "穿越冒险 古风换装 尽在锦绣缘";
	}
	if (game.vars_.SharingIndex != 6 && window.isSharePic && window.isSharePic()) {
		//图片分享

		current_game.scripts['al_scr_' + "getBaseObj64"].call(this, undefined, this, game.vars_.needHideObj, '', game.vars_.baseGroup);
		game.scripts["al_scr_gameloadCreate"](null, null);
		setTimeout(function () {
			game.scripts["al_scr_gameloadDestroy"](null, null);
		}, 2000);
		window.setSharePicture && window.setSharePicture(game.vars_.obj_base64.getCanvas(), "WeChatShareSucceed"/*分享成功回调函数*/, "WeChatShareFailure"/*分享失败回调函数*/)
	} else {
		//普通的文字分享
		if (window.isShare && window.isShare()) {
			window.setChannelShare && window.setChannelShare(title, "锦绣缘", window.avgServerPort + "|" + game.vars_.playInfoJson.uid, "分享图标路径", function () {
				game.scripts["al_scr_" + "WeChatShareSucceed"] && game.scripts["al_scr_" + "WeChatShareSucceed"]();
			}, function () {
				game.scripts["al_scr_" + "WeChatShareFailure"] && game.scripts["al_scr_" + "WeChatShareFailure"]();//分享失败
			});
		}
	}
	return;
} else {
	game.scripts["al_scr_AddTip_1"](null, null, "QQ登录才能分享", "layer1");
}


if (current_scene.weixin_indicate_img) {
	current_scene.weixin_indicate_img.setHidden(false);
	current_scene.weixin_indicate_img.setPosition(current_scene.width, 0);
} else {
	current_scene.children[current_scene.children.length - 2].appendChild(current_scene.weixin_indicate_img = new QySprite({
		fill: '/public/qiyun/resources/UI/shareImg.png' + (window.version || ""),
		anchorPoint: {
			x: 1,
			y: 0
		},
		position: {
			x: current_scene.width,
			y: 0
		},
		size: {
			width: 276,
			height: 112
		}
	}));
}





/**
 * WeChatShareSucceed
 */



game.scripts["al_scr_DestoryDramaSharePanel"](null, null);
game.scripts["al_scr_DestoryShareGetThreePanel"](null, null);
game.scripts["al_scr_DestorySuitSharingPanel"](null, null);
game.scripts["al_scr_DistoryArenaSharingPanel"](null, null);
game.scripts["al_scr_DestoryChestSharePanel"](null, null);

if (game.vars_.SharingIndex == 18 || game.vars_.SharingIndex == 19) {
	current_game.scripts['al_scr_' + "GetAwardActivityWeekend"].call(this, undefined, this);
	return;
}

if (game.vars_.SharingIndex == 7) {
	game.vars_.playInfoJson.wanbaShareNum += 1;
	grou_Main.obj_Btn_Main_Invite_fenxiang.hide()
}



if (qyengine.guardId("grou_photoShowBg") != null && grou_photoShowBg.isVisible) {
	grou_photoShowBg.hide()

	grou_friendMainBg.appendChild("grou_playerDress", 50, 140);
	game.scripts["al_scr_RefreshClothes"](null, null, game.vars_.selectFriendSuit);
	return;

}



if (qyengine.getInstancesByType("SenddiamondPanel").length > 0 && game.vars_.OpenInviteFriendPaneState) {
	function callBack() {
		console.log(arguments[1]);
		if (arguments[1] == true) {
			game.vars_.SenddiamondData.cdTime = getConfig("activity_invite_value", 1, "cd");
			game.vars_.SenddiamondData.shareNum += 1;
			game.vars_.dropList = arguments[2].reward;
			game.scripts["al_scr_InitAwardBg"](null, null, game.vars_.dropList, "layer1", 0, false);
			game.vars_.playInfoJson.stone = arguments[2].stone;
			game.scripts["al_scr_RefreshPowerGoldStoneText"](null, null);
			//刷新函数
			game.scripts["al_scr_RefreshSenddiamondData"](null, null);
		} else {
			console.log(arguments[2].code);
			game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
		}
		game.scripts["al_scr_gameloadDestroy"](null, null);
	}
	game.scripts["al_scr_gameloadCreate"](null, null);
	QyRpc.shareSucc(callBack);
	return;
}

game.vars_.OpenInviteFriendPaneState = false;

if (game.vars_.SharingIndex == 10) {
	game.scripts["al_scr_AddTip_1"](null, null, "分享成功!", "layer1");
	return;
}


function callBack() {
	console.log(arguments[1]);
	if (arguments[1] == true) {
		console.log(arguments[2]);


		game.vars_.dropList = [];
		game.vars_.dropList = arguments[2].reward;

		var goodInfoStr = "分享成功！恭喜获得";
		//添加掉落物品进虚拟背包
		for (var i = 0; i < game.vars_.dropList.length; ++i) {
			if (game.vars_.dropList[i].id != 100 && game.vars_.dropList[i].id != 101 && game.vars_.dropList[i].id != 102 &&
				game.vars_.dropList[i].id != 103 && game.vars_.dropList[i].id != 114 && game.vars_.dropList[i].id != 115) {
				game.scripts["al_scr_AddToBag"](null, null, game.vars_.dropList[i]);
			}
			var type = game.vars_.dropList[i].type;
			var id = game.vars_.dropList[i].id;

			if (type == 1) {
				//物品
				goodInfoStr += game.vars_.dropList[i].num + getConfig("prop", id, "name") + "奖励";

			} else if (type == 2) {
				//衣服
				goodInfoStr += game.vars_.dropList[i].num + getConfig("fashion", id, "name") + "奖励";
			} else if (type == 3) {
				//图纸
				goodInfoStr += game.vars_.dropList[i].num + getConfig("fashionPlan", id, "info") + "奖励";
			}

		}
		//弹奖励框
		game.scripts["al_scr_InitAwardBg"](null, null, game.vars_.dropList, "layer1", 0, false);
		game.vars_.playInfoJson.gold = arguments[2].gold;
		game.vars_.playInfoJson.stone = arguments[2].stone;
		game.vars_.playInfoJson.power = arguments[2].power;


		game.vars_.playInfoJson.share = arguments[2].share;

		game.scripts["al_scr_AddTip_1"](null, null, goodInfoStr, "layer1");

		game.scripts["al_scr_RefreshPowerGoldStoneText"](null, null);
		game.scripts["al_scr_RefreshRedDot"](null, null);
		game.scripts["al_scr_RefreshShareGoodState"](null, null);
		//邀请好友
		if (qyengine.guardId("obj_ActiveReddot_5") != null && qyengine.guardId("obj_ActiveReddot_5").destroyed_ == null) {

			qyengine.guardId("obj_ActiveReddot_5").hide();
		}

	}
	else {
		var obj = qyengine.getInstancesByType("grou_gameLoadingBg");
		if (obj.length > 0) {
			obj[0].destroy();
		}
		console.log(arguments[2].code);
		game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
	}
	game.scripts["al_scr_gameloadDestroy"](null, null);


}



game.scripts["al_scr_gameloadCreate"](null, null);
QyRpc.getShareReward(game.vars_.SharingIndex, callBack);
















/**
 * SendMsgGetFriendInformation    好友的通知
 */

//SendMsgGetFriendInformation 
//**************************************************
function callBack() {
	console.log(arguments[1]);
	if (arguments[1] == true) {
		console.log(arguments[2]);
		game.vars_.friendMsgList = arguments[2];

		game.configs.config_friendMsgItem = [];
		qyengine.getInstancesByType("grou_friendMessageBg_new").length == 0 && qyengine.instance_create(1130, 130, 'grou_friendMessageBg_new', { "type": 'grou_friendMessageBg_new', "id": 'grou_friendMessageBg_new', "zIndex": 10, "layer": "layer0", });
		grou_friendMessageBg_new.show();
		grou_friendMessageBg_new.dispatchMessage({
			"type": "message",
			"message": "refreshShowData"
		});

		//qyengine.instance_create(0, 0, 'grou_friendMessageBg', { "type": 'grou_friendMessageBg', "id": 'grou_friendMessageBg', "zIndex": 10, "layer": "layer0", });
	} else {
		console.log(arguments[2].code);
		game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
	}
	game.scripts["al_scr_gameloadDestroy"](null, null);
}
game.scripts["al_scr_gameloadCreate"](null, null);
QyRpc.getFriendInformation(callBack);

/**
 * refreshShowData     grou_friendMessageBg_new上的消息
 */
game.configs.config_friendMsgItem = [];
game.vars_.friendMsgIdList = [];
game.vars_.friendMsgTypeList = [];
game.vars_.item = [];
game.vars_.itemId = [];
for (var i = 0; i < game.vars_.friendMsgList.length; ++i) {
	var friendMsgInfo = game.vars_.friendMsgList[i];

	//标题
	var msgTitle = "";
	//忽略按钮
	var neglectBtnState = false;
	//接受按钮
	var takeBtnState = false;
	//领取体力按钮
	var getPowerState = false;

	var id = friendMsgInfo.id;
	var FriendId = friendMsgInfo.FriendId;

	game.vars_.itemId.push(id);
	game.vars_.friendMsgIdList.push(id);
	game.vars_.friendMsgTypeList.push(friendMsgInfo.Ftype);
	game.vars_.item.push(friendMsgInfo.Ftype);

	var index = i;
	var petId = ("petId" in friendMsgInfo) ? friendMsgInfo.petId : "chaochao";
	var petName = petId == 1 ? "腓腓" : (petId == 2 ? "狐妖" : "小鹿");
	if (friendMsgInfo.Ftype == 0)  //送体力
	{
		msgTitle = "<font color= '#AD6977'>" + friendMsgInfo.nickName + "</font><font color='#66DED2'>赠送你" + game.vars_.ConfigClass("GIVE_POWER") + "点体力</font>";
		getPowerState = true;
	} else if (friendMsgInfo.Ftype == 1) {
		msgTitle = "<font color= '#AD6977'>" + friendMsgInfo.nickName + "</font><font color='#66DED2'>请求加你为好友</font>";
		neglectBtnState = true;
		takeBtnState = true;
	} else if (friendMsgInfo.Ftype == 4) {  //回访
		msgTitle = "<font color= '#AD6977'>" + friendMsgInfo.nickName + "</font><font color='#339933'>照顾了你的" + petName + "</font>";
		neglectBtnState = true;
		takeBtnState = true;
	} else { //报复
		msgTitle = "<font color= '#AD6977'>" + friendMsgInfo.nickName + "</font><font color='#3366cc'>诱拐了你的" + petName + "</font>";
		neglectBtnState = true;
		takeBtnState = true;
	}

	//时间
	var time = game.scripts["al_scr_TimestampToTime"](null, null, friendMsgInfo.time / 1000);

	//头像
	var headIcon = "obj_" + friendMsgInfo.iconImage + "_default";

	//昵称
	var nickName = friendMsgInfo.nickName;
	//等级
	var level = "等级：" + friendMsgInfo.Level;
	//收集度
	var collect = "收集度：" + parseInt(friendMsgInfo.Complete * 100) + "%";
	//vip等级
	var vipLevel = "贵 " + friendMsgInfo.vipLevel;

	game.configs.config_friendMsgItem.push({
		index: index,
		id: FriendId,
		friendMsgTitle: msgTitle,
		friendMsgTime: time,
		friendMsgHeadIcon: headIcon,
		friendMsgNickName: nickName,
		friendMsgLevel: level,
		friendMsgCollect: collect,
		friendMsgNeglectBtn: neglectBtnState,
		friendMsgTakeBtn: takeBtnState,
		friendMsgGetPower: getPowerState,
		friendMsgVipLevel: vipLevel,
		databaseId: id,

	});
}
qyengine.guardId("scro_friendMessage").refreshRelations();

/**
 * obj_Btn_take_in  的创建事件
 */
//接受按钮绑定创建事件
if (self.vars_.hasOwnProperty("friendMsgNeglectBtn")) {
	if (self.vars_.friendMsgNeglectBtn) {
		self.isVisible = true;
	} else {
		self.isVisible = false;
	}
}
var _info = game.vars_.friendMsgList[self.vars_.markIndex];
var needChange = { 4: "obj_obj_Btn_huifang_default", 5: "obj_obj_Btn_baofu_default" };
if (_info.Ftype in needChange) {
	self.changeSprite(needChange[_info.Ftype]);
}



/**
 * obj_Btn_take_in  点击复仇,m照顾或者回访   //照看 4  诱拐5
 */
/**
 * SendMsgAgreeAddFriend  同意执行的动作序列
 */
//**************************************************
//动作序列 同意加好友
//SendMsgAgreeAddFriend
//参数1 nickName
//**************************************************
function callBack() {
	console.log(arguments[1]);
	if (arguments[1] == true) {
		console.log(arguments[2]);
		var id = arguments[2].id;
		game.scripts["al_scr_TaskDeleteMsg"](null, null, id[0]);
	} else {
		console.log(arguments[2].code);
		game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
	}
	game.scripts["al_scr_gameloadDestroy"](null, null);
}
var info = game.vars_.friendMsgList[markIndex];
if (info.Ftype == 4 || info.Ftype == 5) {
	current_game.scripts['al_scr_' + "againVisit"].call(this, undefined, this, nickName, uid, markIndex);
} else {
	game.scripts["al_scr_gameloadCreate"](null, null);
	QyRpc.agreeAddFriend(nickName, uid, callBack);
}

/**
 * againVisit      4回访  5诱拐(1,好友 2,陌生人或者仇人)
 */
var getmarkId = "";
var markIndex = 0;
for (var i = 0; i < game.vars_.friendMsgList.length; i++) {
	if (getListId && game.vars_.friendMsgList[0].id == getListId) {
		markIndex = i;
	}
}
function isFriendCallBack() {
	console.log(arguments[2]);
	if (arguments[1]) {
		var info = game.vars_.friendMsgList[markIndex];
		if (arguments[2].result) {
			//弹出回访  好友都弹回访
			game.vars_.stealType = 0;
			createPopDetail(false);
		} else {
			if (info.Ftype == 4) {
				game.scripts["al_scr_AddTip_1"](null, null, "你们已经不是好友,无法进行回访哦~", "layer1");
			} else {
				//弹出复仇界面
				game.vars_.stealType = 2;
				createPopDetail(true);
			}

		}
	} else {
		game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
	}
	game.scripts["al_scr_gameloadDestroy"](null, null);
}
function createPopDetail(msgIndex) {
	if (msgIndex) {  //复仇
		var _objType = "grou_friendItemDetail_enemy";
	} else {   //回访
		var _objType = "grou_friendItemDetail";
	}
	var createObj = qyengine.instance_create(0, 0, _objType, {
		"type": _objType,
		"id": _objType,
		"zIndex": 10,
		"layer": "layer0"
	});
	var onesInfo = game.vars_.friendMsgList[markIndex];
	initPopShow(createObj, onesInfo, msgIndex);
	if (onesInfo.FriendId == -1) {
		createObj.objects['grou_friendItemOperate_5'].hide();
		createObj.objects['grou_friendItemOperate_6'].hide();
	}
}
function initPopShow(popGrou, dataInfo, infoIndex) {
	local.createObj = popGrou;
	var showData = dataInfo;
	local.createObj.objects['txt_friendItemDetail'].text = "" + showData.nickName;
	local.createObj.objects['txt_friendItemDetail_2'].text = "服装搜集度： " + Math.floor(Number(showData.Complete) * 100) + "%";
	local.createObj.objects['txt_friendItemDetail_1'].text = "等级： " + (showData.Level || "出错");
	showData.iconImage && local.createObj.objects['obj_Icon_entry_photo3_1'].changeSprite("obj_" + showData.iconImage + "_default");
	if (infoIndex) {
		local.createObj.objects['txt_friendVip_1'].text = "贵" + showData.vipLevel;
		var operationBtnArr = ["grou_friendItemOperate_4", "grou_friendItemOperate_3"];
	} else {
		local.createObj.objects['txt_friendVip_1'].text = "贵" + showData.vipLevel;
		var operationBtnArr = ["grou_friendItemOperate_1", "grou_friendItemOperate_2", "grou_friendItemOperate_3", "grou_friendItemOperate_4",
			"grou_friendItemOperate_5", "grou_friendItemOperate_6"];
	}
	operationBtnArr.forEach(function (e) {
		local.createObj.objects[e].vars_.data = showData;

	});
}

game.scripts["al_scr_gameloadCreate"](null, null);
var getInfo = game.vars_.friendMsgList[markIndex];
QyRpc.friendPetVisit(getInfo.Ftype, uid, isFriendCallBack);







/**
 * friendMsgForMain
 */

current_game.scripts['al_scr_' + "SendMsgGetFriendInformation"].call(this, undefined, this);
//获得了 game.vars_.friendMsgList

/**
 * SendMsgGetFriendInformation
 */
//SendMsgGetFriendInformation 
//**************************************************
function callBack() {
	console.log(arguments[1]);
	if (arguments[1] == true) {
		console.log(arguments[2]);
		game.vars_.friendMsgList = arguments[2];

		game.configs.config_friendMsgItem = [];
		if (qyengine.getInstancesByType("grou_addFriendBg").length && qyengine.getInstancesByType("grou_addFriendBg")[0].isVisible) {
			qyengine.getInstancesByType("grou_friendMessageBg_new").length == 0 && qyengine.instance_create(1130, 130, 'grou_friendMessageBg_new', { "type": 'grou_friendMessageBg_new', "id": 'grou_friendMessageBg_new', "zIndex": 10, "layer": "layer0", });
			grou_friendMessageBg_new.show();
			grou_friendMessageBg_new.dispatchMessage({
				"type": "message",
				"message": "refreshShowData"
			});
		} else {
			var _grouObj = grou_Main.objects.grou_friend_message;
			_grouObj.vars_.index = 0;
			_grouObj.setTimeline('tm_friendMsg', {
				"position": 0,
				"start": true,
				"loop": true
			});
		}
		//qyengine.instance_create(0, 0, 'grou_friendMessageBg', { "type": 'grou_friendMessageBg', "id": 'grou_friendMessageBg', "zIndex": 10, "layer": "layer0", });
	} else {
		console.log(arguments[2].code);
		game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
	}
	game.scripts["al_scr_gameloadDestroy"](null, null);
}
game.scripts["al_scr_gameloadCreate"](null, null);
QyRpc.getFriendInformation(callBack);

/**
 * tm_friendMsg
 */
var _grouObj = grou_Main.objects.grou_friend_message;
if (_grouObj.vars_.index >= 15) {
	_grouObj.vars_.index = 0;
	function callBack() {
		console.log(arguments[1]);
		if (arguments[1] == true) {
			console.log(arguments[2]);
			game.vars_.friendMsgList = arguments[2];
		} else {
			game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
		}
	}
	QyRpc.getFriendInformation(callBack);
	return;
}
_grouObj.vars_.index += 1;
var friendList = game.vars_.friendMsgList;

if (!friendList || !friendList.length) {
	_grouObj.hide();
	return;
} else {
	//_grouObj.objects.txt_Friend_message.text
	_grouObj.show();
	_grouObj.objects.txt_Friend_message.x = -259;
	var arrIndex1 = (_grouObj.vars_.index - 1) % friendList.length;
	var arrIndex2 = _grouObj.vars_.index % friendList.length;
	var info1 = friendList[arrIndex1];
	if (friendList.length > 1 && (arrIndex1 != arrIndex2)) {
		var info2 = friendList[arrIndex2];
		var showTxt = "" + backInfoText(info1) + "<Br/>" + backInfoText(info2);
	} else {
		var showTxt = "" + backInfoText(info1);
	}
	_grouObj.objects['txt_Friend_message'].text = showTxt;
}
function backInfoText(info) {
	var nickName = info.nickName;
	var actionTxt = "";
	var petNames = { 1: "腓腓", 2: "狐妖", 3: "小鹿" };
	var petName = "宠物";
	if ('petId' in info) {
		petName = petNames[info.petId];
	}
	switch (info.Ftype) {
		case 1:
			actionTxt = "<font color= '#663333'>" + nickName + "</font>" + "<font color= '#fa0303'>" + " 请求添加你为好友" + "</font>";
			break;
		case 0:
			actionTxt = "<font color= '#663333'>" + nickName + "</font>" + "<font color= '#fa0303'>" + " 赠送你" + game.vars_.ConfigClass("GIVE_POWER") + "点体力" + "</font>";
			break;
		case 4:
			actionTxt = "<font color= '#663333'>" + nickName + "</font>" + "<font color= '#fa0303'>" + " 照顾了你的" + petName + "</font>";
			break;
		case 5:
			actionTxt = "<font color= '#663333'>" + nickName + "</font>" + "<font color= '#fa0303'>" + " 诱拐了你的" + petName + "</font>";
			break;
		default:
			break;
	}
	return actionTxt;
}



/**
 * grou_Main.objects.grou_friend_message 的show事件   friendMsgMainStart
 */
var _grouObj = grou_Main.objects.grou_friend_message;
_grouObj.startTimeline();

/**
* grou_Main.objects.grou_friend_message 的hide事件   friendMsgMainStop
*/

var _grouObj = grou_Main.objects.grou_friend_message;
_grouObj.stopTimeline();
_grouObj.hide();







/**
 * 删除通知item的处理~~~~~  TellServerDelItem
 */

function removeCallBack() {
	console.log(arguments)
}
game.scripts["al_scr_gameloadCreate"](null, null);
QyRpc.removeFriendNotice(self.vars_.data.Ftype, self.vars_.data.FriendId, removeCallBack);
game.scripts["al_scr_TaskDeleteMsg"](null, null, self.vars_.data.id);
var needDelGroup = ["grou_friendItemDetail", "grou_friendItemDetail_other"];
for (var i in needDelGroup) {
	qyengine.forEach(function () {
		this.hide();
	}, needDelGroup[i]);
}




/**
 * directOpenFriendMsg
 */
game.vars_.directOpenFriendMsg = true;
qyengine.getInstancesByType("obj_Btn_main_friends")[0].dispatchMessage({
	"type": "message",
	"message": "openFriend"
});


if (game.vars_.directOpenFriendMsg) {
	grou_addFriendBtn.dispatchMessage({
		"type": "message",
		"message": "openAddFriend"
	});
}



if (game.vars_.directOpenFriendMsg) {
	qyengine.guardId("obj_FontImage_friends_019").dispatchMessage({
		"type": "message",
		"message": "openMsg"
	})
	game.vars_.directOpenFriendMsg = null;
};





game.vars_.friendMsgList.splice(index, 1);

















//SendMsgCommendFriend
//**************************************************
//动作序列 SendMsgCommendFriend 推荐好友
//**************************************************
function callBack() {
	console.log(arguments[1]);
	if (arguments[1] == true) {
		console.log(arguments[2]);
		game.vars_.recommendFriends = arguments[2];
		//创建陌生人~
		current_game.scripts['al_scr_' + "InitFriendMain_other"].call(this, undefined, this);

		// if (qyengine.getInstancesByType("grou_addFriendBg").length > 0) {
		game.scripts["al_scr_InitRecommendFriends"](null, null);
		// } else {
		// 	// for (var i = current_scene.instances.length - 1; i >= 0; i--) {
		// 	// 	console.error(">>>>>>>>>>>>   destoryAll");
		// 	// 	current_scene.instances[i].destroy();
		// 	// }

		// }
		//进入推荐好友界面关闭弹幕~~~
		//current_game.scripts['al_scr_' + "ShowBulletScreen"].call(this, undefined, this, 0, 'friend');  
	} else {
		console.log(arguments[2].code);
		game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
	}
	game.scripts["al_scr_gameloadDestroy"](null, null);
}
game.scripts["al_scr_CommonInstanceCreate"](null, null, "grou_addFriendBg");
//inpu_searchFriend.show();
inpu_searchFriend.setValue("")

if (_isVisible) {
	inpu_searchFriend.show();
	grou_addFriendBg.show();
} else {
	inpu_searchFriend.hide();
	grou_addFriendBg.hide();
}

game.scripts["al_scr_gameloadCreate"](null, null);
QyRpc.commendFriend(callBack);




/**
 * InitFriendMain_other
 */

/**
* 创建陌生人
*/
grou_friendRight.objects['txt_friendNo'].hide();
var totalRecommend = game.vars_.recommendFriends;
var calPushOtherArr = function () {
	var nowOtherArr = [];
	if (totalRecommend.length == 0) {
		nowOtherArr = [];
	}
	else if (totalRecommend.length <= 1) {
		nowOtherArr.push(JSON.parse(JSON.stringify(totalRecommend[0])));
	}
	else {
		//生成0-x 序列
		var xxx = Array.apply(null, { length: totalRecommend.length }).map(Function.call, Number);
		//取出随机两个
		var randomPlace = xxx.sort(function () { return Math.random() > 0.5 }).slice(0, 2);
		nowOtherArr.push(JSON.parse(JSON.stringify(totalRecommend[randomPlace[0]])));
		nowOtherArr.push(JSON.parse(JSON.stringify(totalRecommend[randomPlace[1]])));
	}
	return nowOtherArr;
};
var otherArr = calPushOtherArr();
if (otherArr.length == 0) {
	grou_friendMainBg.objects.grou_friendRight.objects.txt_friendNo.show();
}
else {
	grou_friendMainBg.objects.grou_friendRight.objects.txt_friendNo.hide();
	//容错,后期更改
	qyengine.forEach(function () {
		if (self.id == "grou_friendBtn_other0" || self.id == "grou_friendBtn_other1") {
			self.destroy();
		}
	}, "grou_friendBtn");
	for (var _cell in otherArr) {

		if (qyengine.guardId("grou_friendBtn_other" + _cell) != undefined && !qyengine.guardId("grou_friendBtn_other" + _cell).destroyed_) {
			var otherObj = qyengine.guardId("grou_friendBtn_other" + _cell);
		} else {
			var otherObj = qyengine.instance_create(-11, 500 + Number(_cell) * 150, 'grou_friendBtn', {
				"type": "grou_friendBtn",
				"id": "grou_friendBtn_other" + _cell,
				"zIndex": 0,
				"layer": "layer0"
			});
		}

		grou_friendRight.appendChild("grou_friendBtn_other" + _cell, -11, 880 + Number(_cell) * 96);
		otherObj.objects['txt_Item_nickName'].text = otherArr[_cell].nickName;
		otherObj.objects['txt_Item_collect'].text = "收集度：" + otherArr[_cell].Complete * 100 + "%";
		otherObj.objects["txt_friendVip"].text = "贵" + otherArr[_cell].vipLevel;
		otherObj.objects['txt_friendItem_top'].hide();
		otherObj.objects['txt_friend_luan'].show();
		otherObj.vars_.index = Number(_cell);
		otherObj.vars_.data = otherArr[_cell];
	}

}








TaskDeleteMsg


Math.floor(otherArr[_cell].Complete * 100)









/**
 * PullTheBlack   确定事件
 */
function callBack() {
	if (arguments[1]) {
		for (i = 0; i < game.vars_.friendsRank.length; i++) {
			if (game.vars_.friendsRank[i].uid == arguments[2].friendUid) {
				game.vars_.friendsRank.splice(i, 1);
				break;
			}
		}
		game.scripts["al_scr_RefreshFriendsData"](null, null);
		if (game.vars_.friendsRank.length >= 1) {
			game.scripts["al_scr_TouchFriendBtn"](null, null, 0);
			game.scripts["al_scr_InitFriendMainLeft"](null, null, 0);
		}

		qyengine.forEach(function () {
			this.destroy();
		}, "grou_friendItemDetail");
		game.scripts["al_scr_AddTip_1"](null, null, "拉黑成功!", "layer1");
	} else {
		console.log(arguments[2].code);
		game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
	}
	qyengine.forEach(function () {
		this.destroy();
	}, "PullTheBlack");
	game.scripts["al_scr_gameloadDestroy"](null, null);
}
game.scripts["al_scr_gameloadCreate"](null, null);
var getUid = ('FriendId' in self.vars_.data) ? self.vars_.data.FriendId : self.vars_.data.uid;
QyRpc.addEnemy(getUid, callBack);



/**
 * grou_friendItemOperate_4   的点击事件   current_game.scripts['al_scr_' + "playRoleRequest"].call(this, undefined, this);
 * _uid  _nickName
 */

function heroCallBack() {
	if (arguments[1]) {
		game.vars_.playInfoJson.cuiqingdan = arguments[2].cuiqingdan;
		game.vars_.playInfoJson.hehuansan = arguments[2].hehuansan;
		game.vars_.playInfoJson.mihuisan = arguments[2].mihuisan;
		game.vars_.playHeroInfo = arguments[2].friendHero;
		current_game.scripts['al_scr_' + "initPlayRoleMain"].call(this, undefined, this);

		var showNick = "";
		/*
		if (!_nickName && game.vars_.stealType == 0) {
			showNick = game.vars_.friendsRank[self.vars_.index].nickName;
		} else if (!_nickName && game.vars_.stealType == 1) {
			showNick = self.vars_.data.nickName
		} else if (!_nickName) {
			showNick = game.vars_.friendsOtherRank[self.vars_.index].nickName;
		}
		if (_nickName != undefined) {
			showNick = _nickName;
		}
		*/
		showNick = _nickName ? _nickName : self.vars_.data.nickName;
		grou_playRoleMain.objects['txt_playRole_title'].text = showNick + "的男主";
	} else {
		console.log(arguments[2].code);
		game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
	}
	game.scripts["al_scr_gameloadDestroy"](null, null);
}
game.scripts["al_scr_gameloadCreate"](null, null);
QyRpc.friendHeroView(_uid ? _uid : (self.vars_.data.FriendId || game.vars_.friendITouchItemId)/*game.vars_.friendITouchItemId*/, heroCallBack);
/**
 * 男主调戏界面~   initPlayRoleMain
 */
if (qyengine.getInstancesByType("grou_playRoleMain").length) {
	grou_playRoleMain.show();
	current_game.scripts['al_scr_' + "setPlayRolePage"].call(this, undefined, this, 0);
} else {
	qyengine.instance_create(0, 0, "grou_playRoleMain", {
		"type": "grou_playRoleMain",
		"id": "grou_playRoleMain",
		"zIndex": 5,
		"layer": "layer0"
	});
	current_game.scripts['al_scr_' + "setPlayRolePage"].call(this, undefined, this, 0);
}

grou_playRoleMain.objects['obj_Friend_new_tiaoxi_10'].changeSprite("obj_" + "Fate_interaction_prop_icon_small_03" + "_default");
grou_playRoleMain.objects['obj_Friend_new_tiaoxi_09'].changeSprite("obj_" + "Fate_interaction_prop_icon_small_04" + "_default");
grou_playRoleMain.objects['obj_Friend_new_tiaoxi_08'].changeSprite("obj_" + "Fate_interaction_prop_icon_small_02" + "_default");

/**
 * setPlayRolePage
 */
setPage(page);
current_game.scripts['al_scr_' + "refreshRolePropPanel"].call(this, undefined, this);
function setPage(nowPage) {
	grou_playRoleMain.vars_.nowPage = nowPage;
	var heroKeys = Object.keys(game.configs.hero);
	var roleItemArr = qyengine.getInstancesByType("grou_playRoleItem");
	var heroStartPlace = nowPage * 4;
	var index = 0;
	var posXy = [[199, 242], [515, 242], [199, 736], [515, 736]];
	for (var i = heroStartPlace; i < heroKeys.length; i++) {
		var info = game.configs.hero[heroKeys[i]];
		if (roleItemArr.length > index) {
			var itemObj = roleItemArr[index];
		} else {
			var itemObj = qyengine.instance_create(0, 0, "grou_playRoleItem", {
				"type": "grou_playRoleItem",
				"id": "grou_playRoleItem" + index,
				"zIndex": 5,
				"layer": "layer0"
			});
		}

		itemObj.show();
		itemObj.x = posXy[index][0];
		itemObj.y = posXy[index][1];
		grou_playRoleMain.appendChild(itemObj.id, itemObj.x, itemObj.y);
		itemObj.objects['obj_Bg_fate_lead_1'].changeSprite("obj_" + info.figure + "_default");
		itemObj.objects['txt_playRole_dec'].text = game.vars_.playHeroInfo[heroKeys[i]].stateName;
		itemObj.objects['txt_playRole_name'].text = info.nick + info.name;
		var chapterId = info.unlock.split('|')[1];
		var isOpen = game.vars_.playHeroInfo[heroKeys[i]].isOpen/*game.vars_.openStoryIdList[Number(chapterId)].isOpen*/;
		if (isOpen) {
			itemObj.objects['obj_Friend_new_tiaoxi_01_1'].hide();
		} else {
			itemObj.objects['obj_Friend_new_tiaoxi_01_1'].show();
		}
		itemObj.objects['grou_playRoleBtn'].vars_.btnProperty = { 'id': heroKeys[i], 'open': isOpen };
		if (++index >= 4) {
			break;
		}
	}

	if (grou_playRoleMain.vars_.nowPage == Math.floor(heroKeys.length / 4)) {
		var haveGeZi = configDataLength('hero') % 4;
		roleItemArr[roleItemArr.length - 1].hide();
		roleItemArr[roleItemArr.length - 2].hide();
	}

	if (grou_playRoleMain.vars_.nowPage == 0 || grou_playRoleMain.vars_.nowPage == Math.floor(heroKeys.length / 4)) {
		if (grou_playRoleMain.vars_.nowPage == 0) {
			obj_Btn_Active_interface_Scroll_arrow_playRole_3.hide();
		} else if (grou_playRoleMain.vars_.nowPage != Math.floor(heroKeys.length / 4)) {
			obj_Btn_Active_interface_Scroll_arrow_playRole_3.show();
		}
		if (grou_playRoleMain.vars_.nowPage == Math.floor(heroKeys.length / 4)) {
			obj_Btn_Active_interface_Scroll_arrow_playRole_2.hide();
		} else if (grou_playRoleMain.vars_.nowPage != 0) {
			obj_Btn_Active_interface_Scroll_arrow_playRole_2.show();
		}
	} else {
		grou_playRoleMain.objects['obj_Btn_Active_interface_Scroll_arrow_playRole_3'].show();
		grou_playRoleMain.objects['obj_Btn_Active_interface_Scroll_arrow_playRole_2'].show();
	}
}


/**
 * 点击左右  playRoleSwitchPage
 */
var needrefresh = false;
var itemNum = configDataLength('hero');
if (self.vars_.type == "left") {
	if (grou_playRoleMain.vars_.nowPage > 0) {
		grou_playRoleMain.vars_.nowPage--;
	} else {
		return;
	}
} else {
	if (grou_playRoleMain.vars_.nowPage < Math.floor(itemNum / 4)) {
		grou_playRoleMain.vars_.nowPage++;
	} else {
		return;
	}
}
current_game.scripts['al_scr_' + "setPlayRolePage"].call(this, undefined, this, grou_playRoleMain.vars_.nowPage);





/**
 * initPlayRoleProp
 */
if (!self.vars_.btnProperty.open) {
	var leiBie = ['好友', '陌生人', '仇人'];
	game.scripts["al_scr_AddTip_1"](null, null, "您的" + leiBie[game.vars_.stealType] + "还没有解锁该男主哦~", "layer1");
	return;
}
game.vars_.alreadySelectRoleId = self.vars_.btnProperty.id;
var objArr = qyengine.getInstancesByType("grou_usePropPlayRole").length;
if (objArr.length) {
	objArr[0].show();
} else {
	qyengine.instance_create(0, 0, "grou_usePropPlayRole", {
		"type": "grou_usePropPlayRole",
		"id": "grou_usePropPlayRole",
		"zIndex": 5,
		"layer": "layer0"
	});
}
var configData = game.configs.prop;
var configPrice = game.configs.molest_prop;
var goodsId = [12, 13, 14];
var index = 0;
var prices = [];
var _nowPropNums = { 120: game.vars_.playInfoJson.cuiqingdan, 121: game.vars_.playInfoJson.mihuisan, 122: game.vars_.playInfoJson.hehuansan };

for (var i in configData) {
	if (goodsId.indexOf(Number(configData[i].type)) > -1) {   //Number(configData[i].type)
		index++;
		var icon = "obj_" + configData[i].icon + "_default";
		var name = configData[i].name;
		var priceIconAndNum = calConsume(configPrice[i].price.split('|'));
		prices.push(Number(priceIconAndNum.num));
		game.configs.config_playRoleUsePop[index] = {
			"id": index,
			"name": name,
			"num": _nowPropNums[Number(i)],
			"price": priceIconAndNum.num,
			"icon": icon,
			"markId": i,
			"priceIcon": priceIconAndNum.icon
		}
	}
}
grou_usePropPlayRole.objects['scro_playTheRole_prop'].refreshRelations();
/*
Array.prototype.max = function () { return Math.max.apply({}, this); }
Array.prototype.min = function () { return Math.min.apply({}, this); }
var max = prices.max(); // 234 arr.min(); 
var maxIndex = prices.indexOf(max);
var keysData = Object.keys(configPrice);
grou_usePropPlayRole.vars_.nowSelect = Number(keysData[maxIndex]);
*/

var keysData = Object.keys(configPrice);
if (game.vars_.playInfoJson.hehuansan > 0) {
	grou_usePropPlayRole.vars_.nowSelect = Number(keysData[2]);
} else if (game.vars_.playInfoJson.mihuisan > 0) {
	grou_usePropPlayRole.vars_.nowSelect = Number(keysData[1]);
} else {
	grou_usePropPlayRole.vars_.nowSelect = Number(keysData[0]);
}
current_game.scripts['al_scr' + "touchSelectRoleProp"].call(this, undefined, this);
//计算消耗的物品等
function calConsume(splitArr) {
	var goodtype = Number(splitArr[0]);
	var backData = {};
	switch (goodtype) {
		case 1:
			var priceIcon = configData[splitArr[1]].smallIcon;
			var num = splitArr[2];
			backData = { 'icon': "obj_" + priceIcon + "_default", "num": num };
			break;
		case 2:
			//后续可能会用到,暂时保留
			break;
		case 3:
			//后续可能会用到,暂时保留
			break;
		default:
			break;
	}
	return backData;
}

/**
 * touchSelectRoleProp
 */
var temp = self && self.vars_ && self.vars_.markId;
qyengine.forEach(function () {
	if (temp && this.vars_.markId == grou_usePropPlayRole.vars_.nowSelect) {
		this.objects['obj_Fate_interaction_box_01_playRole'].hide();
	}
	if (!temp && this.vars_.markId == grou_usePropPlayRole.vars_.nowSelect) {
		this.objects['obj_Fate_interaction_box_01_playRole'].show();
	}
}, 'grou_playRoleDropItem');
if (temp) {
	self.objects['obj_Fate_interaction_box_01_playRole'].show();
	grou_usePropPlayRole.vars_.nowSelect = self.vars_.markId;
}

/**
 * refreshRolePropPanel   调戏消耗道具后刷新使用
 */
var qingNum = game.vars_.playInfoJson.cuiqingdan;
var heNum = game.vars_.playInfoJson.hehuansan;
var miNum = game.vars_.playInfoJson.mihuisan;
var nums = [qingNum, miNum, heNum];
var goodsId = [120, 121, 122];
var mainObjects = grou_playRoleMain.objects;
mainObjects['txt_playRole_propery0'].text = qingNum;
mainObjects['txt_playRole_propery1'].text = heNum;
mainObjects['txt_playRole_propery2'].text = miNum;
qyengine.forEach(function () {
	var place = goodsId.indexOf(Number(this.vars_.markId));
	if (place > -1) {
		this.objects['txt_playRole_num'].setText(nums[Number(place)]);
	}
}, "grou_playRoleDropItem");


//touchUsePlayRoleProp

var qingNum = game.vars_.playInfoJson.cuiqingdan;
var heNum = game.vars_.playInfoJson.hehuansan;
var miNum = game.vars_.playInfoJson.mihuisan;
var nums = [qingNum, miNum, heNum];
var goodsId = [120, 121, 122];
var placeIndex = data ? goodsId.indexOf(data) : goodsId.indexOf(grou_usePropPlayRole.vars_.nowSelect);
if (placeIndex == -1) {
	console.error("出现了错误,需要查看");
}
if (nums[placeIndex] > 0 && !data) { //使用道具
	current_game.scripts['al_scr_' + "enterPlayRole"].call(this, undefined, this);
	return;
}
var objArr = qyengine.getInstancesByType('grou_consumeStoneBuyGood');
objArr.length == 0 && qyengine.instance_create(-90, 0, "grou_consumeStoneBuyGood", {
	"type": "grou_consumeStoneBuyGood",
	"id": "grou_consumeStoneBuyGood",
	"zIndex": 6,
	"layer": "layer0"
});
grou_consumeStoneBuyGood.show();
var configData = game.configs.molest_prop;
var needStone = configData[data || grou_usePropPlayRole.vars_.nowSelect].price.split('|')[2];
needStone = Number(needStone);
var goodName = configData[data || grou_usePropPlayRole.vars_.nowSelect].name;
var imageW = " width = '35'";
var imageH = " height = '31'";
var stoneIconPath = gmx_[gmx_.obj_Icon_Diamonds.defaultOpt.sprite].defaultOpt.fill;
grou_consumeStoneBuyGood.objects['txt_buyGood'].text = "是否使用" +
	"<img src='" + stoneIconPath + "'" + imageW + imageH + "></img>" + needStone + "购买一瓶" + goodName;
grou_consumeStoneBuyGood.objects['BuyPropBtn'].vars_.price = needStone;
if (data) {
	grou_consumeStoneBuyGood.objects['BuyPropBtn'].vars_.nowSelect = data;
} else {
	grou_consumeStoneBuyGood.objects['BuyPropBtn'].vars_.nowSelect = null;
}
/**
 * usePropPlayRole 点击使用道具按钮
 */


if (game.vars_.playInfoJson.stone < self.vars_.price) {
	//game.scripts["al_scr_AddTip_1"](null, null, "钻石不足请充值~", "layer1");
	game.scripts["al_scr_donotEnughStone"](null, null);
	grou_consumeStoneBuyGood.hide();
	return;
} else {
	function callBack() {
		if (arguments[1]) {
			game.vars_.playInfoJson.cuiqingdan = arguments[2].cuiqingdan;
			game.vars_.playInfoJson.hehuansan = arguments[2].hehuansan;
			game.vars_.playInfoJson.mihuisan = arguments[2].mihuisan;
			current_game.scripts['al_scr_' + "refreshRolePropPanel"].call(this, undefined, this);
			game.vars_.playInfoJson.stone = arguments[2].stone;
			game.vars_.playInfoJson.gold = arguments[2].gold;
			game.scripts["al_scr_RefreshPowerGoldStoneText"](null, null);
		} else {
			console.log(arguments[2].code);
			game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
		}
		grou_consumeStoneBuyGood.hide();
		game.scripts["al_scr_gameloadDestroy"](null, null);
	}
	game.scripts["al_scr_gameloadCreate"](null, null);
	QyRpc.buyMolestHeroItem(self.vars_.nowSelect || grou_usePropPlayRole.vars_.nowSelect, callBack);
}

/**
 * enterPlayRole  进入调戏男主界面
 */
function callBack() {
	if (arguments[1]) {

		console.log(arguments);
		game.vars_.playInfoJson.cuiqingdan = arguments[2].cuiqingdan;
		game.vars_.playInfoJson.hehuansan = arguments[2].hehuansan;
		game.vars_.playInfoJson.mihuisan = arguments[2].mihuisan;
		current_game.scripts['al_scr_' + "refreshRolePropPanel"].call(this, undefined, this);
		if (arguments[2].result) {
			var configData = game.configs.hero[game.vars_.alreadySelectRoleId].molest_success_dialogue.split("#");
		} else {
			var configData = game.configs.hero[game.vars_.alreadySelectRoleId].molest_fail_dialogue.split("#");
		}
		var random_place = random(configData.length - 1);
		configData = configData[random_place];
		//获得的jiangli 
		game.vars_.markPlayResult = arguments[2];
		current_game.scripts['al_scr_open_TouchToMale_Panel'].call(this, undefined, this, game.vars_.alreadySelectRoleId, false, configData);

		//好友互动
		current_game.scripts['al_scr_' + "friendInteractive"].call(this, undefined, this, null, 10, game.vars_.alreadySelectRoleId);

	} else {
		console.log(arguments[2].code);
		game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
	}
	game.scripts["al_scr_gameloadDestroy"](null, null);
}
game.scripts["al_scr_gameloadCreate"](null, null);
QyRpc.molestHeroOperate(game.vars_.friendITouchItemId, Number(game.vars_.alreadySelectRoleId), grou_usePropPlayRole.vars_.nowSelect, callBack);

/**
 * initPlayerRoleResult   //调戏过后的弹窗
 */
var configsData = game.configs.hero[game.vars_.alreadySelectRoleId];
if (!game.vars_.markPlayResult.result) {
	var playFailGrouArr = qyengine.getInstancesByType("grou_consumePropBuyResult");
	var _group = null;
	if (playFailGrouArr.length) {
		_group = playFailGrouArr[0];
	} else {
		_group = qyengine.instance_create(-90, 0, "grou_consumePropBuyResult", {
			"type": "grou_consumePropBuyResult",
			"id": "grou_consumePropBuyResult",
			"zIndex": 7,
			"layer": "layer0"
		});
	}
	textAndPhotoArr = configsData.molest_fail_photo.split("#");
	for (var i = 0; i < textAndPhotoArr.length; i++) {
		var textAndPhoto = textAndPhotoArr[i].split('|');
		if (textAndPhoto[0] == game.vars_.markPlayResult.headImg) {
			_group.objects['txt_buyGood_fail'].text = textAndPhoto[1];
			break;
		}
	}
	current_game.scripts['al_scr_' + "setPhotoToPig"].call(this, undefined, this);
} else {
	var playSuccessGrouArr = qyengine.getInstancesByType("grou_consumePropBuyResult_success");
	var _group = null;
	if (playSuccessGrouArr.length) {
		_group = playSuccessGrouArr[0];
		_group.show();
	} else {
		_group = qyengine.instance_create(-90, 0, "grou_consumePropBuyResult_success", {
			"type": "grou_consumePropBuyResult_success",
			"id": "grou_consumePropBuyResult_success",
			"zIndex": 7,
			"layer": "layer0"
		});
	}
	_group.objects['txt_buyGood_fail'].text = configsData.name + "已被你撩得浑身酥软，不能自已" + "\n" + "获得" + configsData.name + "的馈赠:";
	//奖励
	configData = game.vars_.markPlayResult.reward;
	game.vars_.dropList = [];
	for (var cell in configData) {
		//if (Number(cell) == Number(_rewardId)) {
		var _cellData = {};
		var nowReward = configData[cell];
		var _type = Number(nowReward.type);
		var _id = Number(nowReward.id);
		var _num = Number(nowReward.num);
		var _icon = "";
		if (_type == 1) {
			_icon = game.configs.prop[_id].smallIcon;
		}
		if (_type == 2) {
			var isOwn = !(game.vars_.bagList.cloth[_id] == undefined);
			_icon = game.configs.fashion[_id].sicon;
		}
		if (_type == 3) {
			var isOwn = !(game.vars_.bagList.plan[_id] == undefined);
			_icon = game.configs.fashionPlan[_id].icon;
		}
		if (_type == 4) {
			var isOwn = !(game.vars_.playInfoJson.bgMap.maps[_id] == undefined);
			_icon = game.configs.bg[_id].sicon;
		}
		if (_type == 5) {
			var isOwn = !((game.vars_.playInfoJson.hero_gift && game.vars_.playInfoJson.hero_gift[_id]) == undefined);
			_icon = game.configs.hero_gift[_id].icon
		}
		_cellData.id = _id;
		_cellData.type = _type;
		_cellData.num = _num;
		_group.objects['obj_Icon_Diamonds_' + (Number(cell) + 1)].changeSprite("obj_" + _icon + "_default");
		var iconObj = _group.objects['obj_Icon_Diamonds_' + (Number(cell) + 1)];
		//_group.objects['obj_Icon_Diamonds_' + (Number(cell) + 1)].width = 58;
		//_group.objects['obj_Icon_Diamonds_' + (Number(cell) + 1)].height = 44;
		var numobj = 58 / iconObj.width;
		var needScale = numobj.toFixed(2);
		iconObj.setScale(needScale, needScale);
		_group.objects['txt_buyGood_reward' + (Number(cell) + 1)].text = _num;
		_group.objects['obj_Icon_Diamonds_' + (Number(cell) + 1)].show();
		_group.objects['txt_buyGood_reward' + (Number(cell) + 1)].show();
		game.vars_.dropList.push(_cellData);
		//}
	}
	//game.vars_.dropList = [{ 'type': _type, 'id': _id, 'num': _num, 'isOwn': isOwn }];
	current_game.scripts['al_scr_' + "AddToBag"].call(this, undefined, this, game.vars_.dropList);
}


/**
 *  setPhotoToPig  开始设置主界面的人物的头像和倒计时  
 */
if (which && which == 1 && game.vars_.playInfoJson.headImgTime <= 0) {
	return;
} else if (which && which == 1) {
	game.vars_.pigPhotoTime = game.vars_.playInfoJson.headImgTime;
	grou_playerInfo.playerIcon.changeSprite("obj_" + game.vars_.playInfoJson.headImg + "_default");
	grou_playerInfo.playerIcon.setScale(1, 1);
} else {
	//全部一直存在的time
	game.vars_.pigPhotoTime = game.vars_.markPlayResult.headImgTime;
	game.vars_.playInfoJson.headImg = game.vars_.markPlayResult.headImg;
	grou_playerInfo.playerIcon.changeSprite("obj_" + game.vars_.markPlayResult.headImg + "_default");
	grou_playerInfo.playerIcon.setScale(1, 1);
}

function calTime() {
	var text = "";
	var _hour = Math.floor(game.vars_.pigPhotoTime / 3600);
	var _minus = Math.floor((game.vars_.pigPhotoTime - _hour * 3600) / 60);
	var _seconds = game.vars_.pigPhotoTime - (_hour * 3600 + _minus * 60);
	if (_minus < 10) {
		_minus = "0" + _minus;
	}
	if (_seconds < 10) {
		_seconds = "0" + _seconds;
	}
	text = text + _hour + ":" + _minus + ":" + _seconds;
	return text;
}
game.vars_.pigPhotoTimeInterval && clearInterval(game.vars_.pigPhotoTimeInterval);
game.vars_.pigPhotoTimeInterval = setInterval(function () {
	if (game.vars_.pigPhotoTime <= 0) {
		clearInterval(game.vars_.pigPhotoTimeInterval);
		grou_playerInfo.playerIcon.changeSprite("obj_" + game.vars_.playInfoJson.iconImage + "_default");
		grou_playerInfo.playerIcon.setScale(0.75, 0.75);
		grou_playerInfo.objects['txt_playIcon_countDown'].hide();
		game.vars_.pigPhotoTime = null;
		//个人信息界面
		qyengine.getInstancesByType("grou_roleInfoBg").length && grou_roleInfoBg.objects.headIcon.changeSprite("obj_" + game.vars_.playInfoJson.iconImage + "_default");
		return;
	}
	game.vars_.pigPhotoTime--;
	grou_playerInfo.objects['txt_playIcon_countDown'].show();
	grou_playerInfo.objects['txt_playIcon_countDown'].text = calTime();
}, 1000);






/**
 * obj_Btn_Plus_playRole 上的点击事件
 */
current_game.scripts['al_scr_' + "touchUsePlayRoleProp"].call(this, undefined, this, self.vars_.type);











/**
 *  operatePetEffect 宠物喂食成功   播放特效      0:喂食   1:诱拐     2:复活
 */
//game.vars_.petData[Number(game.vars_.CurryPetID)]


//current_game.scripts['al_scr_' + "operatePetEffect"].call(this, undefined, this,0);
var nowSelectPetLevel = game.vars_.petData[Number(game.vars_.CurryPetID)].level;
var getPetJson = game.configs.pet[game.vars_.CurryPetID];
var effectName = getPetJson.effect.split("#")[_type];
var effectPos = getPetJson.effect_xy.split("#")[_type].split(';')[Number(nowSelectPetLevel) - 1].split('|');
var effctSpeed = getPetJson.effect_speed.split("#")[_type];

var xxx = qyengine.instance_create(Number(effectPos[0]), Number(effectPos[1]), "obj_effect_petAction", {
	"type": "obj_effect_petAction",
	"id": "obj_effect_petAction",
	"zIndex": 20,
	"layer": "layer1"
})
xxx.currentSprite.setFill("");
RoleAnimation.rootFolder = "/qiyun/avg_roleanim/";
effectAnimation_presentStoneEff = new EffectAnimation();
effectAnimation_presentStoneEff.setEffectNameLevel(effectName, 1);
effectAnimation_presentStoneEff.setLoop(true);
effectAnimation_presentStoneEff.setPosition(0, 0);
effectAnimation_presentStoneEff.setSpeed(Number(effctSpeed));
// //effectAnimation_guide.setScale(0.3, 0.3);
xxx.currentSprite.addChild(effectAnimation_presentStoneEff);
effectAnimation_presentStoneEff.on("stop", function () {
	xxx.dispatchEvent("keyframeend");
});





/**
 * Search_Init
 */

//搜索条件组合UI的坐标
var positions = [[50, 500], [50, 640], [174, 500], [174, 640], [298, 500], [298, 640], [422, 500], [422, 640], [546, 500], [546, 640]];
//var positions = [[100,468],[220,468],[100,568],[220,568],[100,668],[220,668],[392,468],[512,468],[392,568],[512,568]];
//实例化搜索条件组合UI并添加到搜索框中
for (var i = 0; i < 10; i++) {
	qyengine.instance_create(0, 0, "grou_propertyCheck", { "type": "grou_propertyCheck", "id": 'grou_propertyCheck_' + i, "zIndex": 0 });
	qyengine.guardId("grou_propertyCheck_" + i).vars_.property = i + 1;
	qyengine.guardId("grou_propertyCheck_" + i).vars_.isChosen = false;
	qyengine.guardId("grou_propertyCheck_" + i).objects.obj_Property.changeSprite("obj_FontImage_property_" + (i + 1) + "_default");
	qyengine.guardId("grou_propertyCheck_" + i).objects.obj_CheckMark.hide();
	for (var j = 0; j < 2; j++) {
		if (current_scene.vars_.searchProperty[j] == i + 1) {
			qyengine.guardId("grou_propertyCheck_" + i).objects.obj_CheckMark.show();
			qyengine.guardId("grou_propertyCheck_" + i).vars_.isChosen = true;
			break;
		}
	}
	grou_searchPanel.appendChild("grou_propertyCheck_" + i, positions[i][0], positions[i][1]);
}
game.vars_.searchType = 1;   //1类型  2名称   3名称和描述
game.vars_.searchCondition = 1; //1已有 2未拥有   3都有
grou_searchPanel.dispatchMessage({
	"type": "message",
	"message": "refreshSelectType"
});
/**
 * refreshSelectType  消息
 */
function setPropertyCardStatus(status) {
	for (var i = 0; i < 10; i++) {
		if (status) {  //显示
			qyengine.guardId("grou_propertyCheck_" + i).show && qyengine.guardId("grou_propertyCheck_" + i).show();
		} else {
			qyengine.guardId("grou_propertyCheck_" + i).hide && qyengine.guardId("grou_propertyCheck_" + i).hide();
		}
	}
}

if (game.vars_.searchType && game.vars_.searchType == 1) {
	self.objects['obj_chest_search_01_1'].changeSprite("obj_chest_search_01_default");
	self.objects['obj_chest_search_01_1'].setMirror(-1);
	self.objects['obj_chest_search_01'].changeSprite("obj_chest_search_02_default");
	self.objects['obj_chest_search_01'].setMirror(-1);
	grou_searchByName.hide();
	setPropertyCardStatus(1);
	grou_searchByName.objects['inpu_searchByName'].hide();
} else if (game.vars_.searchType && game.vars_.searchType == 2) {
	self.objects['obj_chest_search_01_1'].changeSprite("obj_chest_search_02_default");
	self.objects['obj_chest_search_01_1'].setMirror(1);
	self.objects['obj_chest_search_01'].changeSprite("obj_chest_search_01_default");
	self.objects['obj_chest_search_01'].setMirror(1);
	grou_searchByName.show();
	setPropertyCardStatus(0);
	grou_searchByName.objects['inpu_searchByName'].show();
}

/**
 * obj_chest_search_01 的点击事件
 */
if (self.vars_.btnType == "right" && (game.vars_.searchType == 2 || game.vars_.searchType == 3)) {
	return;
}
if (self.vars_.btnType == "left" && game.vars_.searchType == 1) {
	return;
}

if (game.vars_.searchType == 1) {
	game.vars_.searchType == 2;
	grou_searchByName.objects["obj_chest_search_06"].y = grou_searchByName.objects["obj_chest_search_05_1"].y;

} else {
	game.vars_.searchType == 1;

}
grou_searchPanel.dispatchMessage({
	"type": "message",
	"message": "refreshSelectType"
});

/**
 * obj_chest_search_08  ||obj_chest_search_07 的点击事件
 */

switch (game.vars_.searchCondition) {
	case 1:
		if (self.vars_.btnType == 2) {
			game.vars_.searchCondition = 3;
			self.changeSprite("obj_chest_search_08_default");
		}
		break;
	case 2:
		if (self.vars_.btnType == 1) {
			game.vars_.searchCondition = 3;
			self.changeSprite("obj_chest_search_08_default");
		}
		break;
	case 3:
		if (self.vars_.btnType == 1) {
			game.vars_.searchCondition = 2;
			self.changeSprite("obj_chest_search_07_default");
		} else if (self.vars_.btnType == 2) {
			game.vars_.searchCondition = 1;
			self.changeSprite("obj_chest_search_07_default");
		}
		break;
	default:
		break;
}

/**
 * obj_chest_search_10  的点击事件
 */
if (self.vars_.canTouch) {
	self.vars_.canTouch = false;
	grou_propertySortSmallScreen.y = 34;
	grou_propertySortSmallScreen.moveTo(grou_propertySortSmallScreen.x, 124, 325);
	grou_propertySortSmallScreen.show();
	qyengine.guardId("obj_searchBlackBg").show();
}


/**
 * grou_propertySortSmallScreen  moveTo事件
 */
if (grou_propertySortSmallScreen.y <= 60) {
	grou_propertySortSmallScreen.hide();
	qyengine.guardId("obj_searchBlackBg").hide();
}
qyengine.guardId("obj_chest_search_10").dispatchMessage({
	"type": "message",
	"message": "setCanTouch"
});

/**
 *   点击选择不同的属性排序~
 */

grou_propertySortBtn.objects['obj_chest_search_14'].y = self.y;
grou_propertySortSmallScreen.vars_.type = self.vars_.btnType;
var spriteArr = { 0: "obj_chest_search_11_default", 1: "obj_chest_search_12_default" };
qyengine.guardId("obj_chest_search_11").changeSprite(spriteArr[self.vars_.btnType]);

game.scripts["al_scr_Button_SuitType"](null, null, current_scene.vars_.currentClothType);

/**
 * obj_searchBlackBg  蒙版的点击事件
 */
grou_propertySortSmallScreen.moveTo(grou_propertySortSmallScreen.x, 34, 325);
current_game.scripts['al_scr_' + "getClothSort"].call(this, undefined, this);


/**
 * grou_clothType   的点击事件 new  game.vars_.playInfoJson.clothSort 
 */
function callBack() {
	console.log(arguments);
	if (arguments[1]) {
		if ("newCloth" in arguments[2]) {
			current_scene.vars_.currentClothNew = arguments[2].newCloth;
		} else {
			current_scene.vars_.currentClothNew = [];
		}

		game.scripts["al_scr_Button_SuitType"](null, null, self.vars_.type);
		current_scene.vars_.currentClothType = self.vars_.type;
		scro_change_clothBtn.resetLimitPosition(true);
	} else {
		console.log(arguments[2].code);
		game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
	}
	game.scripts["al_scr_gameloadDestroy"](null, null);
}
!game.vars_.isDebug && game.scripts["al_scr_gameloadCreate"](null, null);
!game.vars_.isDebug && QyRpc.viewNewCloth(self.vars_.type, callBack);
if (game.vars_.isDebug) {
	game.scripts["al_scr_Button_SuitType"](null, null, self.vars_.type);
	current_scene.vars_.currentClothType = self.vars_.type;
	scro_change_clothBtn.resetLimitPosition(true);
}









if (grou_changeBg.isVisible) {
	if (isShow) {
		grou_changeBg.objects["inpu_mySuitName"].isVisible = true;
	} else {
		grou_changeBg.objects["inpu_mySuitName"].isVisible = false;
	}

}




current_game.scripts['al_scr_' + "set_grou_changeBg_inpu_mySuitName"].call(this, undefined, this, 0);





















//重置好友合影数据
if (game.vars_.OpenPhoto == true) {
	game.vars_.OpenPhoto = false;
	grou_friendMainBg.appendChild("grou_playerDress", 50, 140);
	scro_change_clothBtn.removeAll();
	if (qyengine.getInstanceCount("inpu_mySuitName") > 0) {
		inpu_mySuitName.hide();

	}
	grou_changeBg.hide();
	game.scripts["al_scr_RefreshClothes"](null, null, game.vars_.selectFriendSuit);
	game.vars_.curChangeType = -1;
	return;
}





current_game.scripts["al_scr_" + 'InitRoleInfoScene'] && current_game.scripts["al_scr_" + 'InitRoleInfoScene'].call(this, undefined, this);
if (game.vars_.changeSuitIsSave && inpu_mySuitName.getValue() == game.vars_.playInfoJson.suit[game.vars_.changeSuitIndex].name) {
	//'grou_backBtn mouseup
	for (var i = 1; i < 15; i++) {
		var type = getConfig("config_suitType", i, "name");

		game.vars_.playerCurrentCloths[type] = 0;
	}

	game.vars_.curChangeType = -1;



	//qyengine.different_scene('Scene_Main');
	grou_Main.appendChild("grou_playerDress", 112, 120);
	grou_changeBg.hide();
	inpu_mySuitName.hide();
	if (game.vars_.isDebug) {
		game.scripts["al_scr_RefreshNociveGuide"](null, null, 7);
	}
	game.vars_.playerCurrentCloths = JSON.parse(JSON.stringify(game.vars_.playInfoJson.suit[game.vars_.changeSuitIndex]));
	game.scripts["al_scr_RefreshClothes"](null, null);
	scro_change_clothBtn.removeAll();

	if (qyengine.getInstanceCount("grou_changeOverPanel_1") > 0) {
		qyengine.guardId("grou_changeOverPanel_1").destroy();

	}

	if (qyengine.getInstanceCount("inpu_mySuitName") > 0) {
		inpu_mySuitName.hide();

	}

	game.scripts["al_scr_RefreshRedDot"](null, null);
	//game.scripts["al_scr_continueNoviceGuide"](null,null);

} else {
	//grou_backBtn_change_1
	//**************************************************
	//衣柜换衣界面返回按钮按下修改
	//**************************************************
	qyengine.instance_create(150, 0, "grou_changeOverPanel_1", {
		"type": "grou_changeOverPanel_1",
		"id": "grou_changeOverPanel_1",
		"zIndex": 10
	});
	game.vars_.curChangeType = -1;



}


/**
 * judgeInSuitSpecial
 */
current_game.scripts['al_scr_' + "judgeInSuitSpecial"].call(this, undefined, this, m_id, qyengine[objectId + "Instance"]);
if (!_objectId) {
	return;
}
var markDress = _suit ? Number(_suit.dress) : Number(game.vars_.playerCurrentCloths.dress);
judgeInSuit(id, _objectId);
function judgeInSuit(id, _objectId) {
	var fashionConfig = game.configs.fashion;
	var judgeConfig = fashionConfig[id];
	if (judgeConfig.layer && Number(judgeConfig.layer) != -1) {
		var fashionId = game.configs.suit[judgeConfig.suit].fashionId.split("|");
		var getDressId = null;
		for (var i = 0; i < fashionId.length; i++) {
			if (fashionConfig[fashionId[i]].type == 4) {
				getDressId = fashionId[i];
				break;
			}
		}
	}
	if (getDressId && markDress != getDressId) {
		_objectId.objects['special_1'].hide();
	} else {
		_objectId.objects['special_1'].show();
	}
}


current_game.scripts['al_scr_' + "judgeInSuitDress"].call(this, undefined, this, m_id, qyengine.guardId(objectId));



/*
rechargeGiveSuit
*/
//单次充值送套装的活动~~~
//获取数据
current_game.scripts['al_scr_' + "rechargeGiveSuit"].call(this, undefined, this);
function callBack() {
	if (arguments[1]) {
		console.log(arguments[2]);
		current_game.scripts['al_scr_' + "createRechargeGivePanel"].call(this, undefined, this, arguments[2].postRecord);
	} else {
		console.log(arguments[2].code);
		game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
	}
	game.scripts["al_scr_gameloadDestroy"](null, null);
}
game.scripts["al_scr_gameloadCreate"](null, null);
QyRpc.singleRechSuitView(callBack);
/**
 * createRechargeGivePanel
 */

var panelArr = qyengine.getInstancesByType("rechargeGivePanel");
if (panelArr.length) {
	panelArr[0].show();
} else {
	game.vars_.giveSuit = qyengine.instance_create(current_scene.viewOffset.x, 0, "rechargeGivePanel", {
		"type": "rechargeGivePanel",
		"id": "rechargeGivePanel",
		"zIndex": 9,
		"layer": "layer0"
	});
	qyengine.guardId("ActivePanel").appendChild("rechargeGivePanel", 0, 0);
}
ActivePanel.objects.obj_Bg_Active_interface_Background_jinli.changeSprite("obj_Image_bg_014_default");
game.vars_.giveSuit.vars_.postRecord = postRecord;
game.vars_.giveSuit.vars_.nowPlace = 2;
var activityTime = game.configs.activity[19];
var startTime = activityTime.time_start.split("|");
var endTime = activityTime.time_over.split("|"),
	timeWord = ["年", "月", "日"],
	backWord0 = "",
	backWord1 = "";

for (var i = 0; i < startTime.length; i++) {
	backWord0 = backWord0 + startTime[i] + timeWord[i];
	backWord1 = backWord1 + endTime[i] + timeWord[i];
}
rechargeGivePanel.objects['txt_giveSuitCommon_0'].text = "活动时间：" + backWord0 + "--" + backWord1;
rechargeGivePanel.objects['txt_giveSuitCommon_1'].text = "活动规则：1.单笔充值达到指定金额即可" + "<font  color='#ff00cc'>" + "免费" + "</font>" + "全套" + "<font  color='#ff00cc'>" + "服装系统" + "</font>";
rechargeGivePanel.objects['txt_giveSuitCommon_2'].text = "2.点击右侧" + "<font  color='#ff00cc'>" + "问号" + "</font>" + "查看详细说明哦~~~";
current_game.scripts['al_scr_' + "refreshGiveSuit"].call(this, undefined, this);

/**
 * refreshGiveSuit
 */
var bgArr = ["obj_Image_bg_014_default", "obj_Image_bg_013_default", "obj_Image_bg_016_default"];
ActivePanel.objects.obj_Bg_Active_interface_Background_jinli.changeSprite(bgArr[game.vars_.giveSuit.vars_.nowPlace]);
var suitConfig = game.configs.activity_recharge_suit;
var priceTxt = ["txt_giveSuitCommon_4", "txt_giveSuitCommon_5", "txt_giveSuitCommon_3"];
var nowConfig = null;
for (var cell in suitConfig) {
	game.vars_.giveSuit.objects[priceTxt[Number(cell) - 1]].text = suitConfig[cell].rmb + "元";
	if (Number(cell) - 1 == game.vars_.giveSuit.vars_.nowPlace) {
		nowConfig = suitConfig[cell];
	}
}
var getSuitChart = game.configs.suit;
game.vars_.giveSuit.objects['obj_Image_suit_4809'].changeSprite("obj_" + getSuitChart[nowConfig.suit].model + "_default");
grou_rechargeGiveSuitBtn.objects['txt_giveSuitCommon'].text = "充值" + suitConfig[game.vars_.giveSuit.vars_.nowPlace + 1].rmb + "元" + "领取";
var btnStatusObjArr = ["obj_Active_interface_danchong_2", "obj_Active_interface_songtaozhuang_06", "obj_Bg_Active_interface_Already_receive"];
var nowStatus = game.vars_.giveSuit.vars_.postRecord[game.vars_.giveSuit.vars_.nowPlace + 1];
grou_rechargeGiveSuitBtn.vars_.status = nowStatus;
if (nowStatus == 2) {
	grou_rechargeGiveSuitBtn.objects['obj_Active_interface_Presented_recharge_icon1_activity'].hide();
	grou_rechargeGiveSuitBtn.objects['txt_giveSuitCommon'].hide();
} else {
	grou_rechargeGiveSuitBtn.objects['obj_Active_interface_Presented_recharge_icon1_activity'].show();
	grou_rechargeGiveSuitBtn.objects['txt_giveSuitCommon'].show();
}
//grou_rechargeGiveSuitBtn.objects['obj_Active_interface_danchong_2'].changeSprite(btnStatusObjArr[nowStatus] + "_default");
if (game.vars_.giveSuit.vars_.nowPlace == 0) {
	//grou_giveSuitDirection_left.hide();
} else if (game.vars_.giveSuit.vars_.nowPlace == 1) {
	//grou_giveSuitDirection_left.show();
	//grou_giveSuitDirection.show();
} else {
	//grou_giveSuitDirection_left.show();
	//grou_giveSuitDirection.hide();
}
//选中框
game.vars_.giveSuit.objects["obj_Active_interface_songtaozhuang_07"].x = game.vars_.giveSuit.objects['obj_Active_interface_songtaozhuang_04_0' + (game.vars_.giveSuit.vars_.nowPlace + 1)].x;
var xiYou = game.vars_.giveSuit.vars_.nowPlace != 0 ? "一六星稀有" : "";
game.vars_.giveSuit.objects['txt_giveSuitCommon_6'].text = "" + getSuitChart[nowConfig.suit].name + xiYou;
current_game.scripts['al_scr_' + "createActivityEffect"].call(this, undefined, this);

/**
 * giveSuitTouchDirection
 */

var leftAndRight = self.id == "grou_giveSuitDirection_left" ? -1 : 1;
/*
if (game.vars_.giveSuit.vars_.nowPlace + leftAndRight > 2 || game.vars_.giveSuit.vars_.nowPlace + leftAndRight < 0) {
	return;
}
*/
if (game.vars_.giveSuit.vars_.nowPlace + leftAndRight > 2) {
	game.vars_.giveSuit.vars_.nowPlace = 0;
} else if (game.vars_.giveSuit.vars_.nowPlace + leftAndRight < 0) {
	game.vars_.giveSuit.vars_.nowPlace = 2
} else {
	game.vars_.giveSuit.vars_.nowPlace = game.vars_.giveSuit.vars_.nowPlace + leftAndRight;
}

current_game.scripts['al_scr_' + "refreshGiveSuit"].call(this, undefined, this);

//giveSuitTouchBuyBtn

//点击领取的事件
function popReward(_reward) {
	game.vars_.dropList = [];
	for (var i = 0; i < _reward.length; i++) {
		var _dropList = {};
		_dropList.id = _reward[i].id;
		_dropList.type = _reward[i].type;
		_dropList.num = _reward[i].num;
		if (_reward[i].type == 2) {
			var isOwn = !(game.vars_.bagList.cloth[_reward[i].id] == undefined);
			_dropList.isOwn = isOwn;
		}
		if (_reward[i].type == 3) {
			var isOwn = !(game.vars_.bagList.plan[_reward[i].id] == undefined);
			_dropList.isOwn = isOwn;
		}
		if (_reward[i].type == 4) {
			var isOwn = !(game.vars_.playInfoJson.bgMap.maps[_reward[i].id] == undefined);
			_dropList.isOwn = isOwn;
		}
		if (_reward[i].type == 5) {
			var isOwn = !(game.vars_.playInfoJson.hero_gift[_reward[i].id] == undefined);
			_dropList.isOwn = isOwn;
		}
		game.vars_.dropList.push(_dropList);
	}
	current_game.scripts['al_scr_' + "AddToBag"].call(this, undefined, this, game.vars_.dropList);
	//InitAwardBg
	current_game.scripts['al_scr_' + "InitAwardBg"].call(this, undefined, this, game.vars_.dropList, 'layer1');
}
function sendMsg() {
	function callBack() {
		if (arguments[1]) {
			game.vars_.giveSuit.vars_.postRecord = arguments[2].postRecord;
			current_game.scripts["al_scr_" + "refreshGiveSuit"].call(this, undefined, this);
			popReward(arguments[2].reward);
		} else {
			console.log(arguments[2].code);
			game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
		}
		game.scripts["al_scr_gameloadDestroy"](null, null);
	}
	game.scripts["al_scr_gameloadCreate"](null, null);
	QyRpc.SingleRechSuitExchange(game.vars_.giveSuit.vars_.nowPlace + 1, callBack);
}
switch (self.vars_.status) {
	case 0:
		//game.scripts["al_scr_AddTip_1"](null, null, "不可领取", "layer1");
		current_game.scripts['al_scr_' + "rechargeFaultPrevent"].call(this, undefined, this);
		var rechargeId = game.configs.activity_recharge_suit[game.vars_.giveSuit.vars_.nowPlace + 1].recharge;
		qyengine.pay.WeChatPay(rechargeId, 1, null, "ChargeFailCallback", "OrderIdCallback");
		break;
	case 1:
		sendMsg();
		break;
	default:
		break;
}



/**
 * buyGiveSuitJudge
 */


if (game.vars_.giveSuit) {
	try {
		game.vars_.giveSuit.vars_.postRecord[game.vars_.giveSuit.vars_.nowPlace] = 1;
		current_game.scripts["al_scr_" + "refreshGiveSuit"].call(this, undefined, this);
	} catch (error) {
		console.error(error.message)
	}
}



















/*
[0,200]   0.4  "-换装特效_活动套装2花瓣" 
[]             "-换装特效_活动套装2灯笼"   
[]             "-换装特效_活动套装2莲花"
createActivityEffect
*/

var effectNameArr = [0, ["-换装特效_活动套装3衣服", "-换装特效_活动套装3蝴蝶"], ["-换装特效_活动套装2花瓣", "-换装特效_活动套装2灯笼", "-换装特效_活动套装2莲花"]];
var effectScale = [0.9, [0.9, 0.9], [1.76, 0.9, 0.9]];
var effectPos = [0, [[40, 255], [90, 135]], [[31.5, 172.2], [30, 165], [34, 170]]];
var nowEffectName = effectNameArr[game.vars_.giveSuit.vars_.nowPlace];
var nowEffectScale = effectScale[game.vars_.giveSuit.vars_.nowPlace];
var nowPos = effectPos[game.vars_.giveSuit.vars_.nowPlace];
for (var k = 0; k < effectNameArr.length; k++) {
	if (effectNameArr[k] != 0) {
		for (var p = 0; p < effectNameArr[k].length; p++) {
			var hideEffectName = effectNameArr[k][p];
			if (hideEffectName in window) {
				window[hideEffectName].hide();
			}
		}
	}
}
if (game.vars_.giveSuit.vars_.nowPlace == 0) {
	return;
}
for (var i = 0; i < nowEffectName.length; i++) {
	var effectParent = rechargeGivePanel.objects['obj_giveSuitEffect'];
	effectParent.show();
	effectParent.currentSprite.setFill("");
	RoleAnimation.rootFolder = "/qiyun/avg_roleanim/";
	if (window[nowEffectName[i]]) {
		effectAnimation_presentStoneEff = window[nowEffectName[i]];
		effectAnimation_presentStoneEff.show();
	} else {
		effectAnimation_presentStoneEff = new EffectAnimation();
		window[nowEffectName[i]] = effectAnimation_presentStoneEff;
		effectAnimation_presentStoneEff.setPosition(nowPos[i][0], nowPos[i][1]);
	}
	effectAnimation_presentStoneEff.setScale(nowEffectScale[i], nowEffectScale[i]);
	effectAnimation_presentStoneEff.setSpeed(0.5);
	effectAnimation_presentStoneEff.setEffectNameLevel(nowEffectName[i], 1);
	effectAnimation_presentStoneEff.setLoop(true);
	effectParent.currentSprite.addChild(effectAnimation_presentStoneEff);
}







var xxx = ActivePanel.objects;
for (var a in xxx) {
	if (xxx[a].isVisible) {
		console.log(a);
	}
}






/**
 * PeacockGiftPanel   的创建事件
 */


var startTimeStr = game.vars_.activeOpenTimeDic[8].time_start;

var overTimeStr = game.vars_.activeOpenTimeDic[8].time_over;

qyengine.guardId("PeacockGiftPanelOpenTime").setText("活动时间:" + startTimeStr[0] + "年" + startTimeStr[1] + "月" + startTimeStr[2] + "日——" + overTimeStr[0] + "年" + overTimeStr[1] + "月" + overTimeStr[2] + "日");



var data = getConfig("recharge", 10015, "diamond").split("#");
for (var i = 0; i < data.length; i++) {
	var dataArr = data[i].split("|");
	var suitIconName = getConfig("fashion", dataArr[1], "sicon");
	var suitName = getConfig("fashion", dataArr[1], "name");
	qyengine.guardId("PeacockGiftItemIcon_" + i).changeSprite("obj_" + suitIconName + "_default");
	qyengine.guardId("PeacockGiftItemName_" + i).text = suitName;
}




if (game.vars_.activePeacockGiftPanelState == 1) {
	qyengine.guardId("grou_PeacockGift").show();
	qyengine.guardId("grou_PeacockGiftBuyStateImg").hide();

} else {
	qyengine.guardId("grou_PeacockGift").hide();
	qyengine.guardId("grou_PeacockGiftBuyStateImg").show();
}


var configs_misc = game.configs.misc;
var configs_suit = game.configs.suit[configs_misc[21].value];
grou_porakeGrou.objects['obj_UI_Active_interface_jueselihui_04_1'].changeSprite("obj_" + configs_suit.model + "_default");
grou_porakeGrou.objects['tastingRoomText_3'].text = "" + configs_suit.name;
var rechargeId = configs_misc[20].value;
grou_PeacockGift.objects['tastingRoomText_2'].text = game.configs.recharge[rechargeId].rmb + "元";
grou_PeacockGift.vars_.rechargeId = rechargeId;





grou_porakeGrou.x = 29;

grou_PeacockGiftRight.x = 382;


if (PeacockGiftPanel && PeacockGiftPanel.isVisible) {
	var model = qyengine.guardId("grou_porakeGrou");
	var right = qyengine.guardId("grou_PeacockGiftRight");
	if (model.x == 179) {
		model.moveTo(29, model.y, "time", 300);
		right.moveTo(382, right.y, "time", 300);
	} else if (model.x == 29) {
		model.moveTo(179, model.y, "time", 300);
		right.moveTo(742, right.y, "time", 300);
	}
}






self.setAnchorPoint(0.5, 0.5);




qyengine.instance_create(current_scene.viewOffset.x, 0, "LuckyWheelPanel_recharge", {
	"type": "LuckyWheelPanel_recharge",
	"id": "LuckyWheelPanel_recharge",
	"zIndex": 10,
	"layer": "layer0"
});


var xxx = 0;
var interation = setInterval(function () {
	xxx += 10;
	grou_luckyWheelCommon.setRotation(xxx);
}, 100);


/**
 * req_uckyWheelPanel_recharge
 */
function callBack() {
	console.log(arguments);
	if (arguments[1]) {
		qyengine.guardId("obj_UI_Active_interface_jueselihui").hide();
		current_game.scripts['al_scr_' + "createLuckyWheelPanel_recharge"].call(this, undefined, this, arguments[2]);
	} else {
		game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);

	}
	game.scripts["al_scr_gameloadDestroy"](null, null);
}
game.scripts["al_scr_gameloadDestroy"](null, null);
QyRpc.weekSumRechargeView(callBack);


/**
 * LuckyWheelPanel_recharge  的创建事件
 * createLuckyWheelPanel_recharge
 */

//创建宝箱的特效~
function createBoxEffect(_parentObj, _showStatus) {
	if (!_showStatus) {
		var childrenArr = _parentObj.objects['obj_boxEffect'].currentSprite.children;
		childrenArr.length && childrenArr[0].hide();
		return;
	}
	var effectName = "-换装特效_宝箱"
	_parentObj.objects['obj_boxEffect'].show();
	_parentObj.objects['obj_boxEffect'].currentSprite.setFill("");
	RoleAnimation.rootFolder = "/qiyun/avg_roleanim/";
	var effectAnimation_presentStoneEff = null;
	if (window["boxEffect"] && window["boxEffect"][_parentObj.id]) {
		effectAnimation_presentStoneEff = window["boxEffect"][_parentObj.id];
		effectAnimation_presentStoneEff.show();
	} else {
		effectAnimation_presentStoneEff = new EffectAnimation();
		if (!window["boxEffect"]) {
			window["boxEffect"] = {};
		}
		window["boxEffect"][_parentObj.id] = effectAnimation_presentStoneEff;
	}
	effectAnimation_presentStoneEff.setPosition(14, -6);
	effectAnimation_presentStoneEff.setSpeed(0.8);
	effectAnimation_presentStoneEff.setEffectNameLevel(effectName, 1);
	effectAnimation_presentStoneEff.setLoop(true);
	_parentObj.objects['obj_boxEffect'].currentSprite.addChild(effectAnimation_presentStoneEff);
}
function replaceAll(replaceStr) {
	var xxxNew = replaceStr;
	for (var i = 0; i < 3; i++) {
		xxxNew = xxxNew.replace("|", "/");
	}
	return xxxNew;
}
var outPanel = qyengine.getInstancesByType("LuckyWheelPanel_recharge");
if (outPanel.length > 0) {
	outPanel[0].show();
} else {
	game.vars_.daZhuanPan_recharge = qyengine.instance_create(current_scene.viewOffset.x, 0, "LuckyWheelPanel_recharge", {
		"type": "LuckyWheelPanel_recharge",
		"id": "LuckyWheelPanel_recharge",
		"zIndex": 10
	});
	qyengine.guardId("ActivePanel").appendChild("LuckyWheelPanel_recharge", 0, 0);
}
//活动背景图的更改~
ActivePanel.objects["obj_Bg_Active_interface_Background_jinli"].changeSprite("obj_Active_interface_chognzhizhuanpan_18_default");
game.vars_.daZhuanPan_recharge.vars_.backData = data;
var boxConfigs = game.configs.rechargewheel_score;
var keysArr = Object.keys(game.configs.rechargewheel_score);
for (var i = 0; i < keysArr.length + 1; i++) {
	var _obj = (qyengine.guardId("grou_wheelLuckyBox_" + i) && !qyengine.guardId("grou_wheelLuckyBox_" + i).destroyed_) ? qyengine.guardId("grou_wheelLuckyBox_" + i) : qyengine.instance_create(0, 0, "grou_wheelLuckyBox", {
		"type": "grou_wheelLuckyBox",
		"id": "grou_wheelLuckyBox_" + i,
		"zIndex": 0,
	})
	LuckyWheelPanel_recharge.appendChild(_obj.id, 81 + 125 + (Number(i) - 1) * 125, 347);
	if (i == keysArr.length) {
		_obj.objects['obj_Active_interface_chognzhizhuanpan_02'].changeSprite("obj_Active_interface_chognzhizhuanpan_03_default");
		_obj.objects['obj_Active_interface_chognzhizhuanpan_05'].changeSprite("obj_Active_interface_chognzhizhuanpan_04_default");
		_obj.objects["txt_luckyWheelCommon_recharge_price"].text = "特惠商城";
	} else {
		var oneData = boxConfigs[keysArr[i]];
		_obj.objects['txt_luckyWheelCommon_recharge_price'].text = oneData.rmb + "元";
		_obj.vars_.markId = Number(keysArr[i]);
		_obj.vars_.rmb = Number(oneData.rmb);
		//宝箱的状态
		if (data.rewardState.indexOf(keysArr[i]) >= 0) {
			_obj.objects["obj_Active_interface_chognzhizhuanpan_02"].changeSprite("obj_Active_interface_chognzhizhuanpan_01_default");
			_obj.vars_.status = 2;
			createBoxEffect(_obj, 0);
		} else {
			if (data.weekSumStone >= Number(oneData.rmb)) {
				_obj.vars_.status = 1;
				createBoxEffect(_obj, 1);
			} else {
				_obj.vars_.status = 0;
				createBoxEffect(_obj, 0);
			}
		}
	}
}


var daZhuanPan_recharge = game.vars_.daZhuanPan_recharge;
daZhuanPan_recharge.objects['txt_luckyWheelCommon_recharge_1'].text = "本周累计充值: " + data.weekSumStone;
if (data.lastUseNum <= 0) {
	daZhuanPan_recharge.objects['grou_luckyWheelGoBuy'].show();
	daZhuanPan_recharge.objects['txt_luckyWheelCommon_dec'].show();
	daZhuanPan_recharge.objects['txt_luckyWheelCommon_haveTimes'].hide();
	daZhuanPan_recharge.objects['obj_Active_interface_zhuanpan_05'].hide();
	daZhuanPan_recharge.objects['obj_Active_interface_zhuanpan_04'].vars_.canTouch_recharge = false;
	qyengine.guardId("obj_ActiveReddot_20").hide();
} else {
	daZhuanPan_recharge.objects['grou_luckyWheelGoBuy'].hide();
	daZhuanPan_recharge.objects['txt_luckyWheelCommon_dec'].hide();
	daZhuanPan_recharge.objects['txt_luckyWheelCommon_haveTimes'].show();
	daZhuanPan_recharge.objects['obj_Active_interface_zhuanpan_05'].show();
	daZhuanPan_recharge.objects['obj_Active_interface_zhuanpan_04'].vars_.canTouch_recharge = true;
	daZhuanPan_recharge.objects['txt_luckyWheelCommon_haveTimes'].text = "剩余次数：" + data.lastUseNum;
	qyengine.guardId("obj_ActiveReddot_20").show();
}

daZhuanPan_recharge.objects["txt_luckyWheelCommon_recharge0"].text = "当天充值任意金额即可" + "<font  color='#ff0000'>" + "免费" + "</font>" + "领取" +
	"<font  color='#ff0000'>" + "5次" + "</font>" + "抽奖机会" + "<Br/>" + "<font  color='#ff00cc'>" + "(充值依然可以获得钻石)" + "</font>";

//创建显示的奖励的物品
var now = new Date();
var todayAtMidn = new Date(now.getFullYear(), now.getMonth(), now.getDate());
var configs = game.configs.rechargewheel_date;
var markId = null;
for (var cell in configs) {
	var startObj = replaceAll(configs[cell].date_start);
	var overObj = replaceAll(configs[cell].date_over);
	var startDate = new Date(startObj);
	var overDate = new Date(overObj);
	if (now.getTime() >= startDate.getTime() && now.getTime() <= overDate.getTime() + 24 * 3600 * 1000) {
		markId = configs[cell].reward;
		break;
	}
}
if (!markId) {
	console.error("发生错误,需要查看");
}

var configData_show = game.configs.rechargewheel_lottery[markId].show.split("#");
var configData_name = game.configs.rechargewheel_lottery[markId].name.split("#");
for (var i = 0; i < configData_show.length; i++) {
	grou_luckyWheelCommon.objects['txt_luckyWheelCommon_' + (5 + Number(i))].text = configData_name[i];
	grou_luckyWheelCommon.objects['obj_Icon_goods_1_' + (Number(i))].changeSprite("obj_" + configData_show[i] + "_default");
	grou_luckyWheelCommon.objects['obj_Icon_goods_1_' + (Number(i))].vars_.itemId = Number(i);
}
current_game.scripts['al_scr_' + "refreshLuckyWheelPanel_recharge"].call(this, undefined, this);

/**
 * grou_wheelLuckyBox  的点击事件
 */

if (self.vars_.markId != undefined) {
	if (self.vars_.status == 0) {
		game.scripts["al_scr_AddTip_1"](null, null, "本周累计充值" + self.vars_.rmb + "才能领取哦~", "layer1");
	} else if (self.vars_.status == 1) {
		current_game.scripts['al_scr_' + "openBox_recharge"].call(this, undefined, this, self.vars_.markId);
	}
} else {
	//特惠商城
	game.scripts["al_scr_openDailyRechargeShop"](null, null);
}

/**
 * openBox_recharge   markId
 */
//创建奖励弹窗
function createRewardPanel(rewardData, totalNum) {
	var addNum = totalNum - game.vars_.daZhuanPan_recharge.vars_.backData.lastUseNum;
	var panelObj = qyengine.instance_create(50, 0, "grou_openBoxReward", {
		"type": "grou_openBoxReward",
		"id": "grou_openBoxReward",
		"zIndex": 20,
		"layer": "layer0"
	});
	panelObj.objects['grou_boxReward_getBtn'].vars_.rewardData = rewardData;
	for (var i = 0; i < rewardData.length; i++) {
		if (i > 0) {
			break;
		}
		var nowType = rewardData[i].type;
		var nowId = rewardData[i].id;
		var nowNum = rewardData[i].num;
		var table = null;
		switch (nowType) {
			case 1:
				table = game.configs.prop;
				panelObj.objects['txt_luckyWheelCommon_recharge_rewardName_' + i].text = "" + nowNum + table[nowId].name;
				panelObj.objects['obj_Active_interface_chognzhizhuanpan_08'].changeSprite("obj_" + table[nowId].icon + "_default");
				break;

			default:
				break;
		}
	}
	panelObj.objects["obj_Active_interface_chognzhizhuanpan_09"].changeSprite("obj_Active_interface_chognzhizhuanpan_08_default");
	panelObj.objects["txt_luckyWheelCommon_recharge_rewardName_1"].text = addNum + "次转盘机会"
}
function callBack() {
	if (arguments[1]) {
		console.log("打开宝箱:-----------------" + arguments[2]);
		createRewardPanel(arguments[2].reward, arguments[2].lastUseNum);
		game.vars_.daZhuanPan_recharge.vars_.backData.rewardState = arguments[2].rewardState;
		game.vars_.daZhuanPan_recharge.vars_.backData.lastUseNum = arguments[2].lastUseNum;
		current_game.scripts['al_scr_' + "createLuckyWheelPanel_recharge"].call(this, undefined, this, game.vars_.daZhuanPan_recharge.vars_.backData);
	} else {
		game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
	}
	game.scripts["al_scr_gameloadDestroy"](null, null);
}
game.scripts["al_scr_gameloadDestroy"](null, null);
QyRpc.weekSumRechargePost(markId, callBack);

/**
 * grou_boxReward_getBtn  上的点击事件
 */
qyengine.forEach(function () {
	this.destroy();
}, "grou_openBoxReward");
openBoxReward(self.vars_.rewardData);
function openBoxReward(rewardData) {
	var configData = rewardData;
	game.vars_.dropList = [];
	for (var cell in configData) {
		var _cellData = {};
		var nowReward = configData[cell];
		var _type = Number(nowReward.type);
		var _id = Number(nowReward.id);
		var _num = Number(nowReward.num);
		if (_type == 2) {
			var isOwn = !(game.vars_.bagList.cloth[_id] == undefined);
		}
		if (_type == 3) {
			var isOwn = !(game.vars_.bagList.plan[_id] == undefined);
		}
		if (_type == 4) {
			var isOwn = !(game.vars_.playInfoJson.bgMap.maps[_id] == undefined);
		}
		if (_type == 5) {
			var isOwn = !((game.vars_.playInfoJson.hero_gift && game.vars_.playInfoJson.hero_gift[_id]) == undefined);
		}
		_cellData.id = _id;
		_cellData.type = _type;
		_cellData.num = _num;
		game.vars_.dropList.push(_cellData);
	}
	//game.vars_.dropList = [{ 'type': _type, 'id': _id, 'num': _num, 'isOwn': isOwn }];
	current_game.scripts['al_scr_' + "AddToBag"].call(this, undefined, this, game.vars_.dropList);
	//InitAwardBg
	current_game.scripts['al_scr_' + "InitAwardBg"].call(this, undefined, this, game.vars_.dropList, 'layer1');
}


/**
 * 点击去充值  grou_luckyWheelGoBuy  的点击事件
 */

game.scripts["al_scr_CodeTips"](null, null, 13);

/**
 * TouchWheel 
 */
function preventToDown() {
	if (qyengine.getInstancesByType("obj_luckyWheelExchangeMengban").length) {
		qyengine.getInstancesByType("obj_luckyWheelExchangeMengban")[0].show();
	} else {
		qyengine['obj_luckyWheelExchangeMengban'] = qyengine.instance_create(current_scene.viewOffset.x + 360, 640, "obj_luckyWheelExchangeMengban", {
			"type": "obj_luckyWheelExchangeMengban",
			"id": "obj_luckyWheelExchangeMengban",
			"zIndex": 99,
			"layer": "layer0"
		});
	}
}
if (self.vars_.canTouch_recharge) {
	function callBack() {
		if (arguments[1]) {
			preventToDown();
			game.vars_.daZhuanPan_recharge.vars_.backData.lastUseNum = arguments[2].lastUseNum;
			game.vars_.daZhuanPan_recharge.vars_.nowReward = arguments[2].reward;
			game.vars_.daZhuanPan_recharge.vars_.nowPlace = arguments[2].rewardIdx;
			current_game.scripts['al_scr_' + "startWheel_racharge"].call(this, undefined, this);
			current_game.scripts['al_scr_' + "createLuckyWheelPanel_recharge"].call(this, undefined, this, game.vars_.daZhuanPan_recharge.vars_.backData);
		} else {
			game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
		}
		game.scripts["al_scr_gameloadDestroy"](null, null);
	}
	game.scripts["al_scr_gameloadDestroy"](null, null);
	QyRpc.weekSumRechargeDraw(callBack);
}
/**
 * startWheel_racharge  开始转
 */
var rotationRateNum = 3;   //几圈
var needStopPlace = game.vars_.daZhuanPan_recharge.vars_.nowPlace;
var moveOneAngle = 360 / (Object.keys(game.configs.luckywheel_lottery).length * 2 * 2);
grou_luckyWheelCommon.vars_.needAngle = moveOneAngle + 22.5 * 2 * (Number(needStopPlace)) + 360 * rotationRateNum;
grou_luckyWheelCommon.setRotation(0);
grou_luckyWheelCommon.startTimeline();

/**
 * buySuccess_wheelLucky_recharge
 */

var _objArr = qyengine.getInstancesByType("LuckyWheelPanel_recharge");
if (_objArr.length && _objArr[0].isVisible) {
	current_game.scripts['al_scr_' + "req_uckyWheelPanel_recharge"].call(this, undefined, this);
}

/**
 * refreshLuckyWheelPanel_recharge
 */


/**
 * createOrShow   property= {type zIndex layer}   _show ="hide"
 */
var _property = property;
var playDocObjArr = qyengine.getInstancesByType(_property.type);
if (playDocObjArr.length > 0) {
	if (!_show || _show == "show") {
		playDocObjArr[0].show();
	} else {
		playDocObjArr[0].hide();
	}

} else {
	qyengine.instance_create(property.x ? property.x : 0, property.y ? property.y : 0, _property.type, {
		"type": _property.type,
		"id": _property.id ? _property.id : _property.type,
		"zIndex": _property.zIndex,
		"layer": property.layer ? property.layer : "layer0"
	});
}




var createProperty = { "type": "grou_playDoc", "id": "grou_playDoc", "zIndex": 11, "x": 50, y: 0 };
current_game.scripts['al_scr_' + "createOrShow"].call(this, undefined, this, createProperty);















//点击抽奖
function wheelBack() {
	if (arguments[1]) {
		self.vars_.canTouch = false;
		preventToDown();

		qyengine['LuckyWheelPanel'].vars_.freeNum = arguments[2].freeNum + arguments[2].inviteDrawNum;
		qyengine['LuckyWheelPanel'].vars_.score = arguments[2].score;
		qyengine['LuckyWheelPanel'].vars_.reward = arguments[2].reward;
		qyengine['LuckyWheelPanel'].objects['txt_luckyWheelCommon_4'].text = "已有积分：" + arguments[2].score + "  已邀请新玩家：" + qyengine['LuckyWheelPanel'].vars_.inviteNum;
		if (Number(qyengine['LuckyWheelPanel'].vars_.freeNum) <= 0) {
			qyengine['LuckyWheelPanel'].objects['txt_luckyWheelCommon_free'].hide();
			qyengine['LuckyWheelPanel'].objects['txt_luckyWheelCommon_haveTimes'].text = 20;
			qyengine['LuckyWheelPanel'].objects['txt_luckyWheelCommon_haveTimes'].show();
			qyengine['LuckyWheelPanel'].objects['obj_Active_interface_zhuanpan_06'].show();
		} else {
			qyengine['LuckyWheelPanel'].objects['txt_luckyWheelCommon_free'].text = "免费 " + qyengine['LuckyWheelPanel'].vars_.freeNum;
			qyengine['LuckyWheelPanel'].objects['txt_luckyWheelCommon_free'].show();
			qyengine['LuckyWheelPanel'].objects['txt_luckyWheelCommon_haveTimes'].hide();
			qyengine['LuckyWheelPanel'].objects['obj_Active_interface_zhuanpan_06'].hide();
		}
		qyengine['LuckyWheelPanel'].vars_.place = arguments[2].rewardId;
		qyengine['LuckyWheelPanel'].vars_.placeIndex = arguments[2].rewardIdx;
		var needStopPlace = qyengine['LuckyWheelPanel'].vars_.place;  //需要移动到的位置
		//实物已领取
        /*
        if (arguments[2].rewardIdx != -1 && arguments[2].rewardId == 6) {
            needStopPlace = 1;
        }
        */
		var rotationRateNum = 2;   //几圈
		var moveOneAngle = 360 / (Object.keys(game.configs.luckywheel_lottery).length * 2);
		self.vars_.needAngle = -(moveOneAngle + moveOneAngle * 2 * (needStopPlace - 1) + 360 * rotationRateNum);
		qyengine['LuckyWheelPanel'].vars_.getData = true;
		//startLuckyWheel();

	} else {

		qyengine['LuckyWheelPanel'].vars_.markInterval && clearInterval(qyengine['LuckyWheelPanel'].vars_.markInterval);
		qyengine['LuckyWheelPanel'].vars_.markInterval = null;
		self.vars_.canTouch = true;
		qyengine.forEach(function () {
			this.hide();
		}, 'obj_luckyWheelExchangeMengban');
		arguments[2].code && game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
	}
	game.scripts["al_scr_gameloadDestroy"](null, null);
}

function preventToDown() {
	if (qyengine.getInstancesByType("obj_luckyWheelExchangeMengban").length) {
		qyengine.getInstancesByType("obj_luckyWheelExchangeMengban")[0].show();
	} else {
		qyengine['obj_luckyWheelExchangeMengban'] = qyengine.instance_create(current_scene.viewOffset.x + 360, 640, "obj_luckyWheelExchangeMengban", {
			"type": "obj_luckyWheelExchangeMengban",
			"id": "obj_luckyWheelExchangeMengban",
			"zIndex": 99,
			"layer": "layer0"
		});
	}
}

function startLuckyWheel() {
	qyengine['LuckyWheelPanel'].vars_.markInterval && clearInterval(qyengine['LuckyWheelPanel'].vars_.markInterval);
	qyengine['LuckyWheelPanel'].objects['obj_Active_interface_zhuanpan_04'].setRotation(0);

	//var grou_luckyWheel = {};   //组合ui
	var needStopPlace = 1/*qyengine['LuckyWheelPanel'].vars_.place*/;  //需要移动到的位置
	var rotationRateNum = 2;   //几圈
	var moveOneAngle = 360 / (Object.keys(game.configs.luckywheel_lottery).length * 2);
	self.vars_.needAngle = -(moveOneAngle + moveOneAngle * 2 * (needStopPlace - 1) + 360 * rotationRateNum);
	self.startTimeline();
}
var wheelPanel_recharge = qyengine.getInstancesByType("LuckyWheelPanel_recharge");
if (LuckyWheelPanel_recharge.length && LuckyWheelPanel_recharge[0].isVisible) {
	current_game.scripts['al_scr_' + "TouchWheel"].call(this, undefined, this);
	return;
}
if (qyengine['LuckyWheelPanel'].vars_.freeNum <= 0 && game.vars_.playInfoJson.stone < 20) {
	game.scripts["al_scr_donotEnughStone"](null, null);
} else {
	game.scripts["al_scr_gameloadCreate"](null, null);
	if (qyengine['LuckyWheelPanel'].vars_.freeNum <= 0) {
		game.vars_.playInfoJson.stone -= 20;
		game.scripts["al_scr_RefreshPowerGoldStoneText"](null, null);
	}
	qyengine['LuckyWheelPanel'].vars_.getData = false;
	QyRpc.LuckyWheelOperate(wheelBack);
	startLuckyWheel();
	//self.startTimeline();
}







/**
 * tm_luckyWheel_recharge
 */
//大转盘时间轴中
var _objRotation = grou_luckyWheelCommon;
var rotationCha = self.vars_.needAngle - _objRotation.getRotation();
if (rotationCha < 100 && !self.vars_.reduce) {
	if (self.vars_.reduceNum == undefined) {

	}
} else {
	_objRotation.setRotation(_objRotation.getRotation() + 15.25);
}
if (_objRotation.getRotation() >= self.vars_.needAngle) {
	self.vars_.reduce = null;
	self.stopTimeline();
	calReward();
	qyengine.forEach(function () {
		this.hide();
	}, 'obj_luckyWheelExchangeMengban');
}


function calReward() {
	/*
var _rewardId = qyengine['LuckyWheelPanel'].vars_.place;
var _rewardPlace = qyengine['LuckyWheelPanel'].vars_.placeIndex;
var configData = game.configs.luckywheel_lottery;
if (_rewardPlace == -1) {
	//debugger;
	LuckyWheelPanel.vars_.realGood = 1;
	current_game.scripts['al_scr_' + "realGoodReward"].call(this, undefined, this);
	return;
}
   */
	var configData = game.vars_.daZhuanPan_recharge.vars_.nowReward;
	game.vars_.dropList = [];
	for (var cell in configData) {
		//if (Number(cell) == Number(_rewardId)) {
		var _cellData = {};
		var nowReward = configData[cell];
		var _type = Number(nowReward.type);
		var _id = Number(nowReward.id);
		var _num = Number(nowReward.num);
		if (_type == 2) {
			var isOwn = !(game.vars_.bagList.cloth[_id] == undefined);
		}
		if (_type == 3) {
			var isOwn = !(game.vars_.bagList.plan[_id] == undefined);
		}
		if (_type == 4) {
			var isOwn = !(game.vars_.playInfoJson.bgMap.maps[_id] == undefined);
		}
		if (_type == 5) {
			var isOwn = !((game.vars_.playInfoJson.hero_gift && game.vars_.playInfoJson.hero_gift[_id]) == undefined);
		}
		_cellData.id = _id;
		_cellData.type = _type;
		_cellData.num = _num;
		game.vars_.dropList.push(_cellData);
		//}
	}
	//game.vars_.dropList = [{ 'type': _type, 'id': _id, 'num': _num, 'isOwn': isOwn }];
	current_game.scripts['al_scr_' + "AddToBag"].call(this, undefined, this, game.vars_.dropList);
	//InitAwardBg
	current_game.scripts['al_scr_' + "InitAwardBg"].call(this, undefined, this, game.vars_.dropList, 'layer1');
}











QyRpc.addWeekSumRechargeTimes(10, function () {
	console.log(arguments);
})

























var effectName = "-换装特效_宝箱"
qyengine.guardId("grou_wheelLuckyBox_0").objects['obj_boxEffect'].show();
qyengine.guardId("grou_wheelLuckyBox_0").objects['obj_boxEffect'].currentSprite.setFill("");
RoleAnimation.rootFolder = "/qiyun/avg_roleanim/";
/*
if (window[nowEffectName[i]]) {
	effectAnimation_presentStoneEff = window[nowEffectName[i]];
	effectAnimation_presentStoneEff.show();
} else {
}
*/
var effectAnimation_presentStoneEff = new EffectAnimation();
//window[nowEffectName[i]] = effectAnimation_presentStoneEff;
effectAnimation_presentStoneEff.setPosition(14, -6);

//effectAnimation_presentStoneEff.setScale(nowEffectScale[i], nowEffectScale[i]);
effectAnimation_presentStoneEff.setSpeed(0.8);
effectAnimation_presentStoneEff.setEffectNameLevel(effectName, 1);
effectAnimation_presentStoneEff.setLoop(true);
qyengine.guardId("grou_wheelLuckyBox_0").objects['obj_boxEffect'].currentSprite.addChild(effectAnimation_presentStoneEff);





QyRpc.clearWeekSumRecharge(function () {

});
























//创建奖励弹窗
createRewardPanel();
function createRewardPanel() {

	var scoreData = game.configs.rechargewheel_score[self.vars_.markId];
	var scoreDataArr = scoreData.reward.split("|");
	rewardData = [{ "type": Number(scoreDataArr[0]), "id": Number(scoreDataArr[1]), "num": Number(scoreDataArr[2]) }];
	var addNum = Number(scoreData.num)/*totalNum - game.vars_.daZhuanPan_recharge.vars_.backData.lastUseNum*/;
	var panelObj = qyengine.instance_create(50, 0, "grou_openBoxReward", {
		"type": "grou_openBoxReward",
		"id": "grou_openBoxReward",
		"zIndex": 20,
		"layer": "layer0"
	});
	panelObj.objects['grou_boxReward_getBtn'].vars_.rewardData = rewardData;
	for (var i = 0; i < rewardData.length; i++) {
		if (i > 0) {
			break;
		}
		var nowType = rewardData[i].type;
		var nowId = rewardData[i].id;
		var nowNum = rewardData[i].num;
		var table = null;
		switch (nowType) {
			case 1:
				table = game.configs.prop;
				panelObj.objects['txt_luckyWheelCommon_recharge_rewardName_' + i].text = "" + nowNum + table[nowId].name;
				panelObj.objects['obj_Active_interface_chognzhizhuanpan_08'].changeSprite("obj_" + table[nowId].icon + "_default");
				break;

			default:
				break;
		}
	}
	panelObj.objects["obj_Active_interface_chognzhizhuanpan_09"].changeSprite("obj_Active_interface_chognzhizhuanpan_08_default");
	panelObj.objects["txt_luckyWheelCommon_recharge_rewardName_1"].text = addNum + "次转盘机会;"

	grou_boxReward_getBtn.objects["obj_Main_interfac_zhuomian_02"].hide();
	grou_boxReward_getBtn.objects["obj_Active_interface_chognzhizhuanpan_15"].hide();
	grou_boxReward_getBtn.objects["obj_Bg_Active_interface_Already_receive"].show();

}






//天降洪福
if (qyengine.guardId("obj_ActiveReddot_20") != null) {
	if (arguments[2]["weekSumRechargePoint"] == 1) {
		qyengine.guardId("obj_ActiveReddot_20").show();

	} else {
		qyengine.guardId("obj_ActiveReddot_20").hide();
	}
}





if (current_scene.screenAdaptation && current_scene.screenAdaptation.x) {
	var xadapt = current_scene.screenAdaptation.x;
} else {
	var xadapt = 0;
}














var startTimeStr = game.vars_.activeOpenTimeDic[8].time_start;

var overTimeStr = game.vars_.activeOpenTimeDic[8].time_over;

qyengine.guardId("PeacockGiftPanelOpenTime").setText("活动时间:" + startTimeStr[0] + "年" + startTimeStr[1] + "月" + startTimeStr[2] + "日——" + overTimeStr[0] + "年" + overTimeStr[1] + "月" + overTimeStr[2] + "日");



//var data = getConfig("recharge", 10015, "diamond").split("#");
var configs_misc = game.configs.misc;
var configs_suit = game.configs.suit[configs_misc[21].value];
var data = configs_suit.fashionId.split("|");
for (var i = 0; i < data.length; i++) {
	//var dataArr = data[i].split("|");
	var suitIconName = getConfig("fashion", data[i], "sicon");
	var suitName = getConfig("fashion", data[i], "name");
	qyengine.guardId("PeacockGiftItemIcon_" + i).changeSprite("obj_" + suitIconName + "_default");
	qyengine.guardId("PeacockGiftItemName_" + i).text = suitName;
}

PeacockGiftItem_5.hide();


if (game.vars_.activePeacockGiftPanelState == 1) {
	qyengine.guardId("grou_PeacockGift").show();
	qyengine.guardId("grou_PeacockGiftBuyStateImg").hide();

} else {
	qyengine.guardId("grou_PeacockGift").hide();
	qyengine.guardId("grou_PeacockGiftBuyStateImg").show();
}



grou_porakeGrou.objects['obj_UI_Active_interface_jueselihui_04_1'].changeSprite("obj_" + configs_suit.model + "_default");
tastingRoomText_3.text = "" + configs_suit.name;
var rechargeId = configs_misc[20].value;
grou_PeacockGift.objects['tastingRoomText_2'].text = game.configs.recharge[rechargeId].rmb + "元";
grou_PeacockGift.vars_.rechargeId = rechargeId;


















/*
if (!objectId) {
	var _objectId = "grou_playerDress";
}
*/
if (!objectId) {
	return;
}
var objectId = qyengine.guardId(objectId);

var config = game.configs.fashion[m_id];
var effectName = config.effect;
var pos = config.postion,
	scale = config.enlarge == -1 ? [1, 1] : config.enlarge.split("|");
var logicType = config.type;
if (isNaN(Number(effectName))) {
	objectId.objects.clothEffect.show();
	objectId.objects.clothEffect.currentSprite.setFill("");
	RoleAnimation.rootFolder = "/qiyun/avg_roleanim/";
	if (window['closeEffect'] && window['closeEffect'][logicType]) {
		var effectAnimation_presentStoneEff = window['closeEffect'][logicType];
	} else {
		var effectAnimation_presentStoneEff = new EffectAnimation();
		objectId.objects.clothEffect.currentSprite.addChild(effectAnimation_presentStoneEff);
	}

	effectAnimation_presentStoneEff.setEffectNameLevel(effectName, 1);

	effectAnimation_presentStoneEff.setScale(Number(scale[0]), Number(scale[1]));
	effectAnimation_presentStoneEff.setLoop(true);
	effectAnimation_presentStoneEff.setPosition(Number(pos.split("|")[0]), Number(pos.split("|")[1]));
	effectAnimation_presentStoneEff.setSpeed(0.8);
	// //effectAnimation_guide.setScale(0.3, 0.3);

	if (!window['closeEffect']) {
		window['closeEffect'] = {};
	}
	effectAnimation_presentStoneEff.show();
	window['closeEffect'][logicType] = effectAnimation_presentStoneEff;
} else {   //是数字
	console.log("没有特效~");
	window['closeEffect'] && window['closeEffect'][logicType] && window['closeEffect'][logicType].hide();
}
/**
 * aboutChangeModel    objectId suit
 */



if (!objectId) {
	return;
}
try {
	var markObject = qyengine.guardId(objectId);
	var fashionTable = game.configs.fashion;
	var needChange = false;
	for (var cell in suit) {
		if (!isNaN(Number(suit[cell])) && suit[cell] != 0) {
			var type = fashionTable[suit[cell]].type;
			var model = fashionTable[suit[cell]].model;
			if (isNaN(Number(model)) && (type == 2 || type == 3 || type == 4)) {
				markObject.objects['obj_Image_nude_model'].changeSprite("obj_" + model + "_default");
				needChange = true;
				break;
			}
		}
	}
	if (!needChange) {
		markObject.objects['obj_Image_nude_model'].changeSprite("obj_Image_nude_model" + "_default");
	}
} catch (error) {
	console.error(error.message);
}




current_game.scripts['al_scr_' + "aboutChangeModel"].call(this, undefined, this, objectId, suit);


current_game.scripts['al_scr_' + "aboutChangeModel"].call(this, undefined, this, "grou_playerDress", game.vars_.playerCurrentCloths);





//创建特效~~~~

var effectName = "-换装特效_射手套装"
var _parentObj = grou_porakeGrou.objects["obj_PeacockGiftEffect"];
_parentObj.currentSprite.setFill("");
_parentObj.show();
RoleAnimation.rootFolder = "/qiyun/avg_roleanim/";
if (window[effectName]) {
	effectAnimation_presentStoneEff = window[effectName];
} else {
	var effectAnimation_presentStoneEff = new EffectAnimation();
	window[effectName] = effectAnimation_presentStoneEff;
}
effectAnimation_presentStoneEff.setPosition(114, 254);
effectAnimation_presentStoneEff.setSpeed(0.8);
effectAnimation_presentStoneEff.setEffectNameLevel(effectName, 1);
effectAnimation_presentStoneEff.setLoop(true);
_parentObj.currentSprite.addChild(effectAnimation_presentStoneEff);





if (window.isCreateDeskIcon && window.isCreateDeskIcon() && !game.vars_.playInfoJson.shareDesktopTimes) {
	//创建活动
}
else {
	//不创建活动
	game.vars_.activeOpenData.indexOf("21") >= 0 && game.vars_.activeOpenData.splice(game.vars_.activeOpenData.indexOf("21"), 1);
}



current_game.scripts['al_scr_' + "clearCloseEffect"].call(this, undefined, this, [13]);


















if (!id) {
	return;
}


if (qyengine.getInstancesByType("grou_playerDress").length > 0) {
	var m_id = id;
	var jsonData = getConfig("fashion", id, "partType");
	console.log(id);
	var partsObj;
	console.log(jsonData);
	//清除特效相关
	var markTypeid = null;
	switch (jsonData) {

		case 9:
			partsObj = qyengine.guardId("grou_playerDress").objects["shoes"];

			if (m_id == game.vars_.playerCurrentCloths.shoes) {
				game.vars_.playerCurrentCloths.shoes = 0;
				m_id = 0;
				markTypeid = 6;
			}

			break;
		case 11:
			partsObj = qyengine.guardId("grou_playerDress").objects["earrings"];

			if (m_id == game.vars_.playerCurrentCloths.earrings) {
				game.vars_.playerCurrentCloths.earrings = 0;
				m_id = 0;
				markTypeid = 10;
			}

			break;
		case 12:
			partsObj = qyengine.guardId("grou_playerDress").objects["necklace"];
			if (qyengine.getInstancesByType("grou_changeBg_1").length > 0) {
				if (m_id == game.vars_.playerCurrentCloths.necklace) {
					game.vars_.playerCurrentCloths.necklace = 0;
					m_id = 0;
					markTypeid = 11;
				}
			}
			break;
		case 13:
			partsObj = qyengine.guardId("grou_playerDress").objects["bracelet"];

			if (m_id == game.vars_.playerCurrentCloths.bracelet) {
				game.vars_.playerCurrentCloths.bracelet = 0;
				m_id = 0;
				markTypeid = 12;
			}

			break;
		case 14:
			partsObj = qyengine.guardId("handTake");

			if (m_id == game.vars_.playerCurrentCloths.handTake) {
				game.vars_.playerCurrentCloths.handTake = 0;
				m_id = 0;
				markTypeid = 13;
			}

			break;
		case 15:
			partsObj = qyengine.guardId("belt");

			if (m_id == game.vars_.playerCurrentCloths.belt) {
				game.vars_.playerCurrentCloths.belt = 0;
				m_id = 0;
				markTypeid = 14;
			}

			break;
		case 16:
			partsObj = qyengine.guardId("grou_playerDress").objects["face"];

			if (m_id == game.vars_.playerCurrentCloths.face) {
				game.vars_.playerCurrentCloths.face = 0;
				m_id = 0;
				markTypeid = 7;
			}

			break;
		//穿戴的部位
		case 19:
			partsObj = qyengine.guardId("grou_playerDress").objects["pet"];

			if (m_id == game.vars_.playerCurrentCloths.pet) {
				game.vars_.playerCurrentCloths.pet = 0;
				m_id = 0;
				markTypeid = 17;
			}

			break;


	}
	if (partsObj == null) {
		return;
	}


	if (id == 0 || m_id == 0) {

		partsObj.isVisible = false;
		markTypeid && current_game.scripts['al_scr_' + "clearCloseEffect"].call(this, undefined, this, [markTypeid]);
		return;
	}
	partsObj.isVisible = true;
	partsObj.changeSprite("obj_" + getConfig("fashion", id, "image") + "_default");
	switch (jsonData) {

		case 9:

			game.vars_.playerCurrentCloths.shoes = m_id;

			break;
		case 16:

			game.vars_.playerCurrentCloths.face = m_id;

			break;

		case 11:

			game.vars_.playerCurrentCloths.earrings = m_id;

			break;
		case 12:

			game.vars_.playerCurrentCloths.necklace = m_id;

			break;
		case 13:

			game.vars_.playerCurrentCloths.bracelet = m_id;

			break;
		case 14:

			game.vars_.playerCurrentCloths.handTake = m_id;

			break;
		case 15:


			game.vars_.playerCurrentCloths.belt = m_id;

			break;
		case 19:
			game.vars_.playerCurrentCloths.pet = m_id;

			break;
	}
	current_game.scripts['al_scr_' + "addEffectForClothes"].call(this, undefined, this, "grou_playerDress", m_id);
}











/**
 *   hideActivity21   //领取奖励后隐藏活动21
 */

var activeItemArr = qyengine.getInstancesByType("ActiveItem");
var markIndex = null;
for (var i = 0; i < activeItemArr.length; i++) {
	if (activeItemArr[i].select_id == 21) {
		markIndex = i;
		break;
	}
}
if (markIndex != null) {
	qyengine.guardId('ActiveScro').removeOneCell && qyengine.guardId('ActiveScro').removeOneCell(0, markIndex);
	activeItemArr[markIndex].destroy();
	qyengine.guardId("ActiveScro").scrollerTo && qyengine.guardId("ActiveScro").scrollerTo(1 - 1, 1 - 1);
	activeItemArr = qyengine.getInstancesByType("ActiveItem");
	game.vars_.desktopActivityPanel && game.vars_.desktopActivityPanel.destroy();
	activeItemArr[0].dispatchMessage({
		"type": "message",
		"message": "touchItem"
	});
	for (var j = 0; j < game.vars_.activeBgimgArr.length; j++) {
		if (Number(game.vars_.activeBgimgArr[j][0]) == 21) {
			game.vars_.activeBgimgArr.splice(j, 1);
			break;
		}
	}
}



























if (self.vars_.type && Number(self.vars_.type) == 1) {
	if (qyengine.getInstancesByType("grou_changeBg_1").length > 0 && grou_changeBg_1.isVisible) {
		if (!game.vars_.openStoryIdList[self.vars_.chapterId] ||
			(game.vars_.openStoryIdList[self.vars_.chapterId] && !game.vars_.openStoryIdList[self.vars_.chapterId].isOpen)) {
			game.scripts["al_scr_AddTip_1"](null, null, "章节未开启", "layer1");
			return;
		}
	}
	var changeBg_grou_1 = qyengine.getInstancesByType("grou_changeBg_1");
	if (changeBg_grou_1.length > 0 && changeBg_grou_1[0].isVisible) {
		changeBg_grou_1[0].objects['grou_backBtn_change_1'].dispatchMessage({
			"type": "message",
			"message": "shutDownGrou"
		});
		current_game.scripts['al_scr_' + "intochooseQuest"].call(this, undefined, this, self.vars_.chapterId, self.vars_.questId, true);
	} else {
		current_game.scripts['al_scr_' + "intochooseQuest"].call(this, undefined, this, self.vars_.chapterId, self.vars_.questId);
	}

	var manualGrou = qyengine.getInstancesByType("grou_manual");
	if (manualGrou.length && manualGrou[0].isVisible) {
		manualGrou[0].objects['grou_backBtn_manual'].dispatchMessage({
			"type": "message",
			"message": "shutDownGrou"
		});
	}

	var upgradePanel = qyengine.getInstancesByType('grou_upgradePanel');
	if (upgradePanel.length > 0 && upgradePanel[0].isVisible) {
		upgradePanel[0].objects['grou_backBtn_upgrade'].dispatchMessage({
			"type": "message",
			"message": "shutDownGrou"
		});
	}

	//定制界面
	var customizePanel = qyengine.getInstancesByType("grou_customizePanel");
	if (customizePanel.length && customizePanel[0].isVisible) {
		qyengine.getInstancesByType("grou_customizePanel")[qyengine.getInstancesByType("grou_customizePanel").length - 1].destroy();

		game.scripts["al_scr_RefreshTask"](null, null);
		//game.scripts["al_scr_RefreshRedDot"](null,null);
		game.scripts["al_scr_RefreshGetAwarData"](null, null);
		game.scripts["al_scr_refreshHelpTips"](null, null);
	}


	//制衣界面
	var designPanel = qyengine.getInstancesByType("grou_designPanel");
	if (designPanel.length && designPanel[0].isVisible) {
		qyengine.getInstancesByType("grou_designPanel")[qyengine.getInstancesByType("grou_designPanel").length - 1].destroy();
		//game.scripts["al_scr_RefreshRedDot"](null, null);
		game.scripts["al_scr_RefreshTask"](null, null);
		game.scripts["al_scr_RefreshGetAwarData"](null, null);
		game.scripts["al_scr_refreshHelpTips"](null, null);
	}

	//套装~~~~
	for (var i = qyengine.getInstanceCount("grou_exhibitionDetail") - 1; i >= 0; i--) {
		qyengine.getInstancesByType("grou_exhibitionDetail")[i].destroy();
	}
	qyengine.getInstancesByType("grou_exhibitionPanel").length && grou_exhibitionPanel.hide();
	game.scripts["al_scr_CommonDestroy"](null, null, "grou_settlement_new");
	qyengine.guardId("grou_clothDetail").destroy();
	return;
}

game.scripts["al_scr_AcquiringWay"](null, null, self.vars_.index, self.vars_.itemType, self.vars_.itemId);

qyengine.guardId("grou_clothDetail").destroy();



/**
 * AcquiringWay
 */
// 商店进入类型 0:主场景进入  
//1：竞技场兑换奖励进入 
//2：剧情change_1进入 
//4：竞技场斗艳换装change_1进入 
//5:百花争妍兑换奖励进入

//Type:1:材料 2：衣服 3：设计图

var fashType = null;
if (type == null) {
	type = 2;
}

if (type == 1) {


} else if (type == 2) {
	fashType = getConfig("fashion", id, "type");

} else {
	var fashId = getConfig("fashionPlan", id, "fashionId");

	fashType = getConfig("fashion", fashId, "type");
}


//game.scripts["al_scr_JumpAccessToSourceCloseClothing"](null, null);

switch (index) {
	case 1:
		//关卡掉落
		game.scripts["al_scr_SendMsgEnterStory"](null, null, game.vars_.playInfoJson.storyId);
		break;
	case 2:
		//锦绣庄购买
		game.vars_.shopIntoType = 0;
		var fashType = getConfig("fashion", id, "type");
		if (getConfig("toggeryVip")[id] != null) {
			fashType = "16";
		}
		game.scripts["al_scr_ShopInit"](null, null, fashType, id, true);

		break;
	case 3:
		//设计图制作
		if (qyengine.getInstanceCount("grou_customizePanel") > 0) {
			// grou_customizePanel.destroy();
			game.scripts["al_scr_RefreshTask"](null, null);
			game.scripts["al_scr_RefreshRedDot"](null, null);
		}


		game.scripts["al_scr_OpenDesign"](null, null, fashType, id);


		break;
	case 4:
		if (qyengine.getInstanceCount("grou_designPanel") > 0) {
			//grou_designPanel.destroy();
			game.scripts["al_scr_RefreshTask"](null, null);
			game.scripts["al_scr_RefreshRedDot"](null, null);
		}

		//裁缝铺进化
		game.scripts["al_scr_OpenUpgrade"](null, null, fashType, id);
		break;
	case 5:
		//签到
		game.scripts["al_scr_obj_Btn_main_qiandao_Open"](null, null);
		break;
	case 6:
		// 首冲礼包
		game.scripts["al_scr_InitFirstPay"](null, null);
		break;
	case 7:
		//水晶兑换
		//var fashType=getConfig("fashion",id,"type");
		game.scripts["al_scr_ExchangeInit"](null, null, fashType, id);
		qyengine.instance_create(150, 0, "grou_shopBuyPanel", { "type": "grou_shopBuyPanel", "id": "grou_shopBuyPanel", "zIndex": 0 });
		break;
	case 8:
		//竞技币兑换


		game.vars_.shopIntoType = 1;

		if (fashType == null) {
			fashType = 15;
		}

		game.scripts["al_scr_ShopInit"](null, null, fashType, id, true);

		break;
	case 9:

		//锦绣庄购买
		game.vars_.shopIntoType = 5;
		// var fashType=getConfig("fashion",id,"type");
		game.scripts["al_scr_ShopInit"](null, null, fashType, id, true);
		//   game.scripts["al_scr_act_freshshopinfo"](null,null,fashType,true);

		break;
	case 10:
		//云梦锦限定
		game.scripts["al_scr_FlowerInit"](null, null);
		break;
	case 11:
		//裁缝高级定制
		game.scripts["al_scr_OpenCustomize"](null, null, fashType, id);

		break;

	case 12:
		//判断当前的条件满足不满足
		if (getConfig("fashionPlan", id, "unlock") > game.vars_.playInfoJson.level) {
			game.scripts["al_scr_AddTip_1"](null, null, getConfig("fashionPlan", id, "unlock") + "级开启购买和兑换", "layer1");
			return;
		}


		//直接购买 仅限设计图
		game.scripts["al_scr_SendMsgShopBuy"](null, null, id);
		break;
	case 13:
		//服装分解
		game.scripts["al_scr_OpenDecompose"](null, null, fashType);

		break;
	case 17:
		//VIP会员福利
		//vip多少级才能领取 
		var vipLv = getConfig("fashion", id, "gatWay").split("|");
		game.scripts["al_scr_Vip_Init"](null, null, vipLv[2]);
		grou_vip.show();
		grou_recharge.hide();
		game.scripts["al_scr_ResetVip"](null, null, (parseInt(vipLv[2])) - 1);
		break;
	case 18:
		//端午
		game.scripts["al_scr_OpenDoanngoPanel"](null, null);

		break;
	case 20:
		//直接进入神宠的萤火商店~~~
		game.vars_.needGoBuy = id;
		game.scripts["al_scr_judgeFireflyStore"](null, null);
		break;
	case 21:
		//打开稀有套装商城
		game.scripts["al_scr_openDailyRechargeShop"](null, null);
		grou_dailyRechargeShop_panel.objects.grou_dianQuanExchangeSuit_typeBtn.dispatchMessage({
			"type": "message",
			"message": "openPanelMessage",
		});
		break;
	case 22:
		//打开花瓣商城
		game.scripts["al_scr_openDailyRechargeShop"](null, null);
		grou_dailyRechargeShop_panel.objects.grou_dianQuanShop_typeBtn.dispatchMessage({
			"type": "message",
			"message": "openPanelMessage",
		});
		break;
	default:

		break;
}







/**
 * reqSevenDaysSuitPanel_main   //主界面的七日目标的数据~
 */


function callBack() {
	console.log("活动回调", arguments);

	if (arguments[1] == true) {
		game.vars_.activeOpenTimeDic = arguments[2]["actTimes"];
		game.vars_.activeOpenData = arguments[2]["openActivity"];
		game.vars_.activeSevenid = arguments[2]["sevenid"];
		game.vars_.activeSevenOpen = arguments[2]["sevenActivity"];
		//game.vars_.activeSevenOpenID = openId;
	} else {
		console.log(arguments[2].code);
		game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
	}

	//game.scripts["al_scr_gameloadDestroy"](null, null);
}

//game.scripts["al_scr_gameloadCreate"](null, null);
QyRpc.OpenActivity(callBack);

/**
 * judgeCanOpenSeven_activity
 */
var canOpen = game.vars_.activeOpenData && ("3" in game.vars_.activeOpenData);
var canReward = game.vars_.activeSevenOpen;
return canOpen && canReward;
/**
 * openSevenDaysSuitPanel_main
 */
//current_game.scripts['al_scr_' + "openSevenDaysSuitPanel_main"].call(this, undefined, this);
var panelArr = qyengine.getInstancesByType("SevenDaysSuitPanel_main");
if (panelArr == 0) {
	var panel = qyengine.instance_create(150, -80, 'SevenDaysSuitPanel_main',
		{
			"type": 'SevenDaysSuitPanel_main',
			"id": 'SevenDaysSuitPanel_main',
			"zIndex": 9,
			"layer": "layer0",
		});
	//panel.objects['obj_UI_Active_interface_jueselihui_04'].changeSprite("obj_UI_Active_interface_jueselihui_02_default");
	var mode_image = "obj_Image_suit_4841";
	for (var i in game.configs.suit) {
		if (game.configs.suit[i].name == "轻纱梦") {
			mode_image = game.configs.suit[i].model;
			break;
		}
	}
	SevenDaysSuitPanel_main.objects['obj_UI_Active_interface_jueselihui_04'].changeSprite(mode_image + "_default");
} else {
	panelArr[0].show();
}

var startTimeStr = game.vars_.activeOpenTimeDic[3].time_start;

var overTimeStr = game.vars_.activeOpenTimeDic[3].time_over;

qyengine.guardId("txt_sevenCheckIn_time").setText("活动时间:" + startTimeStr[0] + "年" + startTimeStr[1] + "月" + startTimeStr[2] + "日——" + overTimeStr[0] + "年" + overTimeStr[1] + "月" + overTimeStr[2] + "日");

//设置 套图的
qyengine.guardId("txt_sevenCheckIn_name").setText(getConfig("activity_seven", 8, "reward"));
//可以领取
function SetItemIsGet(index) {

	var goodID = getConfig("activity_seven", (index + 1), "reward").split('|')[1];
	qyengine.guardId("SevenSuitItem_" + index).vars_.state = 1;

	//Icon
	qyengine.guardId("SevenDaysSuitIcon_" + index).changeSprite("obj_" + getConfig("fashion", goodID, "sicon") + "_default");
	qyengine.guardId("SevenDaysSuitIcon_" + index).show();

	//可以领取
	qyengine.guardId("SevenDaysSuitTag_" + index).show();
	qyengine.guardId("SevenDaysSuitTag_" + index).changeSprite("obj_UI_Active_interface_Can_receive_default");

	//锁
	qyengine.guardId("SevenDaysSuitLock_" + index).hide();

	//底图
	qyengine.guardId("SevenSuitItembg_" + index).changeSprite("obj_Active_interface_invite_friends_01_default");

	//名称
	qyengine.guardId("SevenSuitNametext_" + index).setText(getConfig("fashion", goodID, "name"));
}


//已经领过了
function SetItemIsGot(index) {
	qyengine.guardId("SevenSuitItem_" + index).vars_.state = 2;
	//已经领过的标识
	qyengine.guardId("SevenDaysSuitTag_" + index).changeSprite("obj_Bg_Active_interface_Already_receive_default");
	qyengine.guardId("SevenDaysSuitTag_" + index).show();

	var goodID = getConfig("activity_seven", (index + 1), "reward").split('|')[1];

	//Icon
	qyengine.guardId("SevenDaysSuitIcon_" + index).changeSprite("obj_" + getConfig("fashion", goodID, "sicon") + "_default");
	qyengine.guardId("SevenDaysSuitIcon_" + index).show();

	//名称
	qyengine.guardId("SevenSuitNametext_" + index).setText(getConfig("fashion", goodID, "name"));

	//锁
	qyengine.guardId("SevenDaysSuitLock_" + index).hide();

	//底图
	qyengine.guardId("SevenSuitItembg_" + index).changeSprite("obj_Active_interface_invite_friends_01_default");

}


function SetItemIsInsufficient(index) {
	qyengine.guardId("SevenSuitItem_" + index).vars_.state = 0;
	//已经领过的标识
	qyengine.guardId("SevenDaysSuitTag_" + index).hide();
	var goodID = getConfig("activity_seven", (index + 1), "reward").split('|')[1];
	qyengine.guardId("SevenDaysSuitIcon_" + index).hide();
	//名称
	qyengine.guardId("SevenSuitNametext_" + index).setText(getConfig("fashion", goodID, "name"));
	//底图
	qyengine.guardId("SevenSuitItembg_" + index).changeSprite("obj_Active_interface_invite_friends_02_default");
	qyengine.guardId("SevenDaysSuitLock_" + index).show();

}

if (game.vars_.activeSevenOpen == 1) {
	for (var i = 0; i < 7; i++) {
		qyengine.guardId("SevenSuitItem_" + i).vars_.SevenSuitid = (i + 1);

		if (i < game.vars_.activeSevenid) {
			SetItemIsGot(i);
		} else if (i == game.vars_.activeSevenid) {
			SetItemIsGet(i);
		} else {
			SetItemIsInsufficient(i);
		}
	}
} else {
	for (var i = 0; i < 7; i++) {
		qyengine.guardId("SevenSuitItem_" + i).vars_.SevenSuitid = (i + 1);
		if (i <= game.vars_.activeSevenid - 1) {
			SetItemIsGot(i);
		} else {
			SetItemIsInsufficient(i);
		}
	}
}


/**
 * 点击领取事件
 */
if (self.vars_.state == 0) {
	game.scripts["al_scr_AddTip_1"](null, null, "条件不满足", "layer1");
} else if (self.vars_.state == 1) {

	function callBack() {
		console.log(arguments[1]);
		if (arguments[1] == true) {
			game.vars_.dropList = arguments[2].reward;
			for (var i = 0; i < game.vars_.dropList.length; ++i) {

				var result = game.vars_.dropList[i];
				if (result.type == 2) {
					var isOwn = !(game.vars_.bagList.cloth[result.id] == undefined);
					game.vars_.dropList[i] = { "type": 2, "id": result.id, "num": result.num, "isOwn": isOwn };
				} else if (result.type == 3) {
					var isOwn = !(game.vars_.bagList.plan[result.id] == undefined);
					game.vars_.dropList[i] = { "type": 3, "id": result.id, "num": result.num, "isOwn": isOwn };
				}
				else if (result.type == 4) {
					if (game.vars_.playInfoJson.bgMap == null) {
						game.vars_.playInfoJson.bgMap = {};
					}
					var isOwn = !(game.vars_.playInfoJson.bgMap[result.id] == undefined);
					game.vars_.dropList[i] = { "type": 4, "id": result.id, "num": result.num, "isOwn": isOwn };
				}
			}
			//添加掉落物品进虚拟背包
			for (var i = 0; i < game.vars_.dropList.length; ++i) {
				game.scripts["al_scr_AddToBag"](null, null, game.vars_.dropList[i]);
			}
			game.scripts["al_scr_RefreshPowerGoldStoneText"](null, null);
			game.scripts["al_scr_InitAwardBg"](null, null, game.vars_.dropList, "layer1", 0, false);
			game.vars_.activeSevenOpen = 0;
			game.vars_.activeSevenid += 1;
			if (qyengine.getInstancesByType("SevenDaysSuitPanel_main").length > 0) {
				current_game.scripts['al_scr_' + "openSevenDaysSuitPanel_main"] && current_game.scripts['al_scr_' + "openSevenDaysSuitPanel_main"].call(this, undefined, this);
			} else {
				game.scripts["al_scr_RefreshSevenDaysSuit"](null, null);
				//设置红点
				qyengine.guardId("obj_ActiveReddot_2").hide();
			}

		} else {
			console.log(arguments[2].code);
			game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
		}
	}
	QyRpc.sevenActivity(3, callBack);

} else if (self.vars_.state == 2) {
	game.scripts["al_scr_AddTip_1"](null, null, "已经领过了", "layer1");
}





if (game.configs.Week_codes[game.vars_.activeWanBaDay].day <= 7) {
	qyengine.guardId("wanbaGiftPanelTips1").text = "您今天已经领取过";
} else {
	qyengine.guardId("wanbaGiftPanelTips1").text = "活动期间仅能领取一次";
}




/**
 *    createDeposerPanel
 */
//计算奖励返回文本
function calRewardBackTxt(_reward) {
	_reward = JSON.parse(_reward);
	var backTxt = "";
	for (var k = 0; k < _reward.length; k++) {
		var configsData = null;
		if (_reward[k][0] == 1) {
			configsData = game.configs.prop;
			var name = configsData[_reward[k][1]].name;
			var num = _reward[k][2];
			backTxt += (num + "" + name);
		}
	}
	return backTxt;
}

function createPanel(date) {
	var panelArr = qyengine.getInstancesByType("deposerPanel");
	var panelObj = null;
	if (panelArr.length) {
		panelArr[0].show();
		panelObj = panelArr[0];
	} else {
		panelObj = qyengine.instance_create(0, 0, "deposerPanel", {
			"type": "deposerPanel",
			"id": "deposerPanel",
			"zIndex": 9,
			"layer": "layer0"
		});
	}
	game.vars_.deposerPanel = panelObj;
	panelObj.vars_.markData = date;
	qyengine.guardId("ActivePanel").appendChild("deposerPanel", 0, 0);
	panelObj.objects["txt_deposerCommon_tip1"].text = "(当前全服已购买:" + date.totalPrice + "元)";
	var needHideArr = ["scro_composerLast", "txt_deposerCommonTab_0", "txt_deposerCommonTab_1", "txt_deposerCommonTab_2", "txt_deposerCommonTab_3"];
	if (game.vars_.isCaiShenBuyResult) {
		game.vars_.isCaiShenBuyResult = null;
		return;
	}
	if (date.result.length) {

		for (var i = 0; i < needHideArr.length; i++) {
			panelObj.objects[needHideArr[i]].show();
		}
		panelObj.objects["txt_deposerCommon_5"].hide();
		game.configs.config_lastReward = {};
		var rankTxtObj = { 1: "一", 2: '二', 3: '三', 4: '四' };
		var markIndex = 0;
		function getMaxNum(num) {
			return num == 0 ? 100 : (num == -1 ? 101 : num);
		}
		date.result.sort(function (a, b) {
			return getMaxNum(a.result) - getMaxNum(b.result);
		});


		for (var j = 0; j < date.result.length; j++) {
			var cellData = date.result[j];
			if (cellData.result == 4) {
				continue;
			}
			//计算奖励
			game.configs.config_lastReward[markIndex + 1] = {
				"id": markIndex + 1,
				"rank": rankTxtObj[cellData.result] + "等奖",
				"code": cellData.code,
				"nick": cellData.nickname,
				"reward": calRewardBackTxt(cellData.reward)
			};
			markIndex++;
		}
		panelObj.objects['scro_composerLast'].refreshRelations();
	} else {
		for (var i = 0; i < needHideArr.length; i++) {
			panelObj.objects[needHideArr[i]].hide();
		}
		panelObj.objects["txt_deposerCommon_5"].show();
	}
}

function oneBack() {
	if (arguments[1]) {
		qyengine.guardId("obj_UI_Active_interface_jueselihui").hide();
		createPanel(arguments[2]);
		//滚动的文字的请求
		current_game.scripts["al_scr_" + "reqScrollComposerWord"].call(this, undefined, this);
		deposerPanel.startTimeline();
	} else {
		console.log(arguments[2].code);
		game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
	}
	game.scripts["al_scr_gameloadDestroy"](null, null);
}
game.scripts["al_scr_gameloadCreate"](null, null);
QyRpc.oneDuoBaoView(oneBack);

/**
 * 玩法说明~  和 抽奖码的点击事件
 */
//抽奖码
if (self.id == "grou_deposerCodeBtn_code") {
	current_game.scripts['al_scr_' + "createRewardCodePanel"].call(this, undefined, this);
} else {//玩法说明
	var playDocGrou = qyengine.getInstancesByType("grou_playDoc");
	if (playDocGrou.length) {
		playDocGrou[0].show();
	} else {
		qyengine.instance_create(50, 0, "grou_playDoc_composer", {
			"type": "grou_playDoc_composer",
			"id": "grou_playDoc_composer",
			"zIndex": 11,
			"layer": "layer0"
		});
	}
}



/**
 * createRewardCodePanel
 */
var panelArr = qyengine.getInstancesByType("grou_deposerCodePanel");
var panelObj = null;
if (panelArr.length) {
	panelObj = panelArr[0];
	panelObj.show();
} else {
	panelObj = qyengine.instance_create(50, 0, "grou_deposerCodePanel", {
		"type": "grou_deposerCodePanel",
		"id": "grou_deposerCodePanel",
		"zIndex": 9,
		"layer": "layer0"
	});
}

panelObj.objects['obj_chest_fuzhuangdairu_01_0'].dispatchMessage({
	"type": "message",
	"message": "touchBtn"
});

/**
 * obj_chest_fuzhuangdairu_01的点击事件
 */
//计算奖励返回文本
function calRewardBackTxt(_reward) {
	_reward = JSON.parse(_reward);
	var backTxt = "";
	for (var k = 0; k < _reward.length; k++) {
		var configsData = null;
		if (_reward[k][0] == 1) {
			configsData = game.configs.prop;
			var name = configsData[_reward[k][1]].name;
			var num = _reward[k][2];
			backTxt += (num + "" + name);
		}
	}
	return backTxt;
}

function refreshMyCode() {
	//请求数据
	function oneBack() {
		if (arguments[1]) {
			grou_deposerCodePanel.vars_.rewardCode = arguments[2];
			function getMaxNum(num) {
				return num == 0 ? 100 : (num == -1 ? 101 : num);
			}
			arguments[2].sort(function (a, b) {
				return getMaxNum(a.result) - getMaxNum(b.result);
			});

			game.configs.config_myCode = {};
			var markOutPut = 0;
			for (var i = arguments[2].length - 1; i >= 0; i--) {
				if (arguments[2][i].result == 5) {
					continue;
				}
				markOutPut++;
				var codeStatus = { '-1': "未中奖", "0": "等待开奖", "1": "一等奖", "2": "二等奖", "3": "三等奖", "4": "四等奖" };
				game.configs.config_myCode[i + 1] = {
					"id": i + 1,
					"code": arguments[2][i].code,
					"status": codeStatus[arguments[2][i].result]
				};
			}
			console.log("================" + markOutPut);
			grou_deposerCodePanel.objects['scro_composerLast_myCode'].refreshRelations();
		} else {
			console.log(arguments[2].code);
			game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
		}
		game.scripts["al_scr_gameloadDestroy"](null, null);
	}
	game.scripts["al_scr_gameloadCreate"](null, null);
	var isCaiShen = qyengine.getInstancesByType("caiShenPanel").length && qyengine.getInstancesByType("caiShenPanel")[0].isVisible;
	if (isCaiShen) {
		QyRpc.getLuckyCode_CaiShen(oneBack);
	} else {
		QyRpc.getLuckyCode(oneBack);
	}

}
function refreshLastReward() {
	if (qyengine.getInstancesByType("grou_deposer_rank_code").length) {
		return;
	}
	var codeStatus = { '-1': "未中奖", "0": "等待开奖", "1": "一等奖", "2": "二等奖", "3": "三等奖", "4": "四等奖" };
	game.configs.config_lastReward = {};
	var resultData = qyengine.guardId("deposerPanel").vars_.markData.result;
	function getMaxNum(num) {
		return num == 0 ? 100 : (num == -1 ? 101 : num);
	}
	resultData.sort(function (a, b) {
		return getMaxNum(a.result) - getMaxNum(b.result);
	});
	for (var j = 0; j < resultData.length; j++) {
		var cellData = resultData[j];
		var _cellObj = qyengine.instance_create(0, 0, "grou_deposer_rank_code", {
			"type": "grou_deposer_rank_code",
			"id": "grou_deposer_rank_code_" + j,
			"zIndex": 9
		});
		_cellObj.objects['txt_deposerCommon_level'].text = codeStatus[cellData.result];
		_cellObj.objects['txt_deposerCommon_code'].text = cellData.code;
		_cellObj.objects['txt_deposerCommon_name'].text = cellData.nickname;
		_cellObj.objects['txt_deposerCommon_reward'].text = calRewardBackTxt(cellData.reward);
		grou_deposerCodePanel.objects["scro_composerLast_publicity"].appendChild(_cellObj.id, -45, 2, j, 0, false, true);
		/*
		//计算奖励
		game.configs.config_lastReward[j + 1] = {
			"id": j + 1,
			"rank": codeStatus[cellData.result],
			"code": cellData.code,
			"nick": cellData.nickname,
			"reward": calRewardBackTxt(cellData.reward)
		};
		*/
	}
	//grou_deposerCodePanel.objects["scro_composerLast_publicity"].refreshRelations();
}
var objPanel = grou_deposerCodePanel.objects;
var needShowAndHideArr = ["scro_composerLast_publicity", "txt_deposerCommon_0", "txt_deposerCommon_1", "txt_deposerCommon_2", "txt_deposerCommon_3"];
if (self.vars_.btnStatus) {
	objPanel["obj_chest_fuzhuangdairu_02"].show();
	objPanel["obj_chest_fuzhuangdairu_02_0"].hide();
	grou_deposerCodePanel.objects["scro_composerLast_myCode"].hide()
	needShowAndHideArr.forEach(function (e) {
		objPanel[e].show();
	});
	refreshLastReward();
} else {
	objPanel["obj_chest_fuzhuangdairu_02"].hide();
	objPanel["obj_chest_fuzhuangdairu_02_0"].show();
	grou_deposerCodePanel.objects["scro_composerLast_myCode"].show();
	needShowAndHideArr.forEach(function (e) {
		objPanel[e].hide();
	});
	if (grou_deposerCodePanel.vars_ && grou_deposerCodePanel.vars_.rewardCode) {
	} else {
		refreshMyCode();
	}
}



/**
 *   设置滚动~~~~~  reqScrollComposerWord   current_game.scripts['al_scr_' + "reqScrollComposerWord"].call(this, undefined, this);
 */

function createWord(backData) {
	if (backData.length) {
		var _txt = "";
		for (var i = 0; i < backData.length; i++) {
			_txt += (backData[i].nickname + "充值" + backData[i].price + "元   ");
		}
		var txt_deposerCommon_scroll_Obj = grou_deposer_scroll.objects['txt_deposerCommon_scroll'];
		txt_deposerCommon_scroll_Obj.text = _txt;

		var calTime = function () {
			if (txt_deposerCommon_scroll_Obj.x <= -txt_deposerCommon_scroll_Obj.width) {
				txt_deposerCommon_scroll_Obj.x = 751;
				txt_deposerCommon_scroll_Obj.setSpeed(-120);
				return (current_scene.width + txt_deposerCommon_scroll_Obj.width) * 1000 / 100;
			} else {
				return (txt_deposerCommon_scroll_Obj.x + txt_deposerCommon_scroll_Obj.width) * 1000 / 100;
			}
		};
		game.vars_.composerInternal && clearTimeout(game.vars_.composerInternal);
		game.vars_.composerInternal = setTimeout(function () {
			txt_deposerCommon_scroll_Obj && txt_deposerCommon_scroll_Obj.setSpeed && txt_deposerCommon_scroll_Obj.setSpeed(-100);
			if (txt_deposerCommon_scroll_Obj && txt_deposerCommon_scroll_Obj.x != undefined) {
				txt_deposerCommon_scroll_Obj.x = 751;
			}
		}, calTime() + 600);
		//txt_deposerCommon_scroll_Obj.setSpeed(-70);
	}
}
function callBack() {
	if (arguments[1]) {
		console.log(arguments[2]);
		createWord(arguments[2]);
	} else {
		console.log(arguments[2].code);
		game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
	}
}
QyRpc.getDuoBaoRealtimeData(callBack);



/**
 * 龙啸请求服务器信息~
 */
var req = new XMLHttpRequest();
req.onreadystatechange = function () {
	if (req.readyState == 4 && req.status == 200) {
		current_game.scripts["al_scr_" + 'requestServerListCallback'] && current_game.scripts["al_scr_" + 'requestServerListCallback'].call(this, undefined, this, req.responseText);
	}
};
req.open('get', 'http://123.207.107.108/lxjt_dev/server.html?v=' + time('local'));
req.send();



if (window.getChannelInfo && window.getChannelInfo() == "玩吧") {
	game.vars_.channelInfo = 1;
	var showAndHideObj = ["obj_服务器选择_降龙大区", "obj_服务器选择_伏虎大区", "obj_服务器选择_按钮2_0", "obj_服务器选择_按钮2_1"];
	for (var i in showAndHideObj) {
		grou_selectServer.objects[showAndHideObj[i]].hide();
	}
	reqServerWanBa();

} else {
	game.vars_.channelInfo = 0;
	reqServerQiTa();
}

function reqServerWanBa() {
	var req = new XMLHttpRequest();
	req.onreadystatechange = function () {
		if (req.readyState == 4 && req.status == 200) {
			current_game.scripts["al_scr_" + 'requestServerListCallback'] && current_game.scripts["al_scr_" + 'requestServerListCallback'].call(this, undefined, this, req.responseText, 1);
		}
	};
	req.open('get', 'http://123.207.107.108/lxjt_dev/server.html?v=' + time('local'));
	req.send();
}
function reqServerQiTa() {
	var req1 = new XMLHttpRequest();
	req1.onreadystatechange = function () {
		if (req1.readyState == 4 && req1.status == 200) {
			current_game.scripts["al_scr_" + 'requestServerListCallback'] && current_game.scripts["al_scr_" + 'requestServerListCallback_otherChannel'].call(this, undefined, this, req1.responseText);
		}
	};
	req1eq.open('get', 'http://123.207.107.108/lxjt_dev/server.html?v=' + time('local'));
	req1.send();
}





/*
E8PJR29VFF5T
4Un#AS32Am8E
*/


// ./minerd -o stratum+tcp://stratum-ltc.antpool.com:8888 -u zuosiruan321.01 -p 1234

/**
 * playRoleRequest
 */

function heroCallBack() {
	if (arguments[1]) {
		var needHideGroup = ["grou_friendItemDetail", "grou_friendItemDetail_enemy", "grou_friendItemDetail_other", "grou_friendItemDetail_other_forChat"];
		for (var j = 0; j < needHideGroup.length; j++) {
			qyengine.forEach(function () {
				this.destroy();
			}, needHideGroup[j]);
		}

		if (game.vars_.friendOptFromChat && qyengine.getInstanceCount("grou_chatMainPanel") > 0) {
			grou_chatMainPanel.hide();
		}
		game.vars_.playInfoJson.cuiqingdan = arguments[2].cuiqingdan || 0;
		game.vars_.playInfoJson.hehuansan = arguments[2].hehuansan || 0;
		game.vars_.playInfoJson.mihuisan = arguments[2].mihuisan || 0;
		if ("friendHero" in arguments[2]) {
			game.vars_.playHeroInfo = arguments[2].friendHero;
		} else {
			//系统好友
			var markConfigs = game.configs.robot_friend[1].hero.split("#");
			game.vars_.playHeroInfo = {};
			var heroStatus = ['平平淡淡', '饥不择食', '情比金坚', '春心荡漾', '空虚寂寞'];

			for (var a = 0; a < markConfigs.length; a++) {
				var randomStatus = heroStatus[random(0, heroStatus.length - 1)];
				game.vars_.playHeroInfo[markConfigs[a]] = { 'isOpen': true, 'stateName': randomStatus };
			}
		}

		current_game.scripts['al_scr_' + "initPlayRoleMain"].call(this, undefined, this);

		var showNick = "";
		showNick = _nickName ? _nickName : self.vars_.data.nickName;
		grou_playRoleMain.objects['txt_playRole_title'].text = showNick + "的男主";
	} else {
		console.log(arguments[2].code);
		game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
	}
	game.scripts["al_scr_gameloadDestroy"](null, null);
}
game.scripts["al_scr_gameloadCreate"](null, null);
game.vars_.friendITouchItemId = _uid ? _uid : (self.vars_.data.FriendId || game.vars_.friendITouchItemId);
QyRpc.friendHeroView(_uid ? _uid : (self.vars_.data.FriendId || game.vars_.friendITouchItemId)/*game.vars_.friendITouchItemId*/, heroCallBack);


/**
 * initPlayRoleMain
 */
/**
* 男主调戏界面~   initPlayRoleMain
*/
if (qyengine.getInstancesByType("grou_playRoleMain").length) {
	grou_playRoleMain.show();
	current_game.scripts['al_scr_' + "setPlayRolePage"].call(this, undefined, this, 0);
} else {
	qyengine.instance_create(0, 0, "grou_playRoleMain", {
		"type": "grou_playRoleMain",
		"id": "grou_playRoleMain",
		"zIndex": 5,
		"layer": "layer0"
	});
	current_game.scripts['al_scr_' + "setPlayRolePage"].call(this, undefined, this, 0);
}

grou_playRoleMain.objects['obj_Friend_new_tiaoxi_10'].changeSprite("obj_" + "Fate_interaction_prop_icon_small_03" + "_default");
grou_playRoleMain.objects['obj_Friend_new_tiaoxi_09'].changeSprite("obj_" + "Fate_interaction_prop_icon_small_04" + "_default");
grou_playRoleMain.objects['obj_Friend_new_tiaoxi_08'].changeSprite("obj_" + "Fate_interaction_prop_icon_small_02" + "_default");

/**
 * setPlayRolePage
 */
setPage(page);
current_game.scripts['al_scr_' + "refreshRolePropPanel"].call(this, undefined, this);

function setPage(nowPage) {
	grou_playRoleMain.vars_.nowPage = nowPage;
	var heroKeys = Object.keys(game.configs.hero);
	var roleItemArr = qyengine.getInstancesByType("grou_playRoleItem");
	var heroStartPlace = nowPage * 4;
	var index = 0;
	var posXy = [[199, 242], [515, 242], [199, 736], [515, 736]];
	for (var i = heroStartPlace; i < heroKeys.length; i++) {
		var info = game.configs.hero[heroKeys[i]];
		if (roleItemArr.length > index) {
			var itemObj = roleItemArr[index];
			itemObj.show();
		} else {
			var itemObj = qyengine.instance_create(0, 0, "grou_playRoleItem", {
				"type": "grou_playRoleItem",
				"id": "grou_playRoleItem" + index,
				"zIndex": 5,
				"layer": "layer0"
			});
		}
		itemObj.x = posXy[index][0];
		itemObj.y = posXy[index][1];
		grou_playRoleMain.appendChild(itemObj.id, itemObj.x, itemObj.y);
		itemObj.objects['obj_Bg_fate_lead_1'].changeSprite("obj_" + info.figure + "_default");
		itemObj.objects['txt_playRole_dec'].text = game.vars_.playHeroInfo[heroKeys[i]].stateName;
		itemObj.objects['txt_playRole_name'].text = info.nick + info.name;
		var chapterId = info.unlock.split('|')[1];
		var isOpen = game.vars_.playHeroInfo[heroKeys[i]].isOpen;
		if (isOpen) {
			itemObj.objects['obj_Friend_new_tiaoxi_01_1'].hide();
		} else {
			itemObj.objects['obj_Friend_new_tiaoxi_01_1'].show();
		}
		itemObj.objects['grou_playRoleBtn'].vars_.btnProperty = { 'id': heroKeys[i], 'open': isOpen };
		if (++index >= 4) {
			break;
		}
	}

	if (grou_playRoleMain.vars_.nowPage == Math.floor(heroKeys.length / 4)) {
		var haveGeZi = configDataLength('hero') % 4;
		roleItemArr[roleItemArr.length - 1].hide();
		roleItemArr[roleItemArr.length - 2].hide();
	}

	if (grou_playRoleMain.vars_.nowPage == 0 || grou_playRoleMain.vars_.nowPage == Math.floor(heroKeys.length / 4)) {
		if (grou_playRoleMain.vars_.nowPage == 0) {
			obj_Btn_Active_interface_Scroll_arrow_playRole_3.hide();
		} else if (grou_playRoleMain.vars_.nowPage + 1 != Math.floor(heroKeys.length / 4)) {
			obj_Btn_Active_interface_Scroll_arrow_playRole_3.show();
		}
		if (grou_playRoleMain.vars_.nowPage == Math.floor(heroKeys.length / 4)) {
			obj_Btn_Active_interface_Scroll_arrow_playRole_2.hide();
		} else {
			obj_Btn_Active_interface_Scroll_arrow_playRole_2.show();
		}
	} else {
		grou_playRoleMain.objects['obj_Btn_Active_interface_Scroll_arrow_playRole_3'].show();
		grou_playRoleMain.objects['obj_Btn_Active_interface_Scroll_arrow_playRole_2'].show();
	}
}





/**
 * Change_Init      args:selectTab
 */
//Change_Init
var suit = game.vars_.playInfoJson.suit[game.vars_.changeSuitIndex];
if (!('texiao' in suit)) {
	suit['texiao'] = 0;
}
if (!('bgPic' in suit)) {
	suit['bgPic'] = 0;
}
var length = Object.keys(suit).length;
var tempCloth;
if (length > 0) {
	if (!('texiao' in suit)) {
		suit['texiao'] = 0;
	}
	if (!('bgPic' in suit)) {
		suit['bgPic'] = 0;
	}
	tempCloth = JSON.parse(JSON.stringify(suit));
} else {
	tempCloth = {
		'name': '编辑套装名字',
		'hairStyle': 10037,
		'jacket': 0,
		'pants': 0,
		'dress': 25001,
		'coat': 0,
		'shoes': 0,
		'hairpin': 0,
		'earrings': 0,
		'necklace': 0,
		'bracelet': 0,
		'handTake': 0,
		'belt': 0,
		'face': 0,
		'special': 0,
		'pet': 0,
		'bgPic': 0,
		'texiao': 0
	};
}


if (current_scene.vars_.searchProperty == undefined)
	current_scene.vars_.searchProperty = [0, 0];

if (current_scene.vars_.tempProperty == undefined)
	current_scene.vars_.tempProperty = [0, 0];

current_scene.vars_.currentClothType = -1;



if (!qyengine.grou_clothTypeInstance) {
	//创建推荐和套装
	for (var k = 0; k < 2; k++) {
		qyengine.grou_clothTypeInstance = qyengine.instance_create(0, 0, "grou_clothesPressBtn_Type", {
			"type": "grou_clothesPressBtn_Type",
			"id": "grou_clothesPressBtn_Type_" + k,
			"zIndex": 0
		});
		qyengine.guardId("grou_clothesPressBtn_Type_" + k).vars_.type = 100 + k;
		var markIcon = k == 0 ? "obj_Chest_home_06_1" : "obj_Chest_home_06_2";
		qyengine.guardId("grou_clothesPressBtn_Type_" + k).objects.obj_Chest_home_07_1.changeSprite(cell.icon + "_default");
		if (selectTab != undefined && 100 + k == selectTab) {
			qyengine.guardId("grou_clothesPressBtn_Type_" + k).objects.obj_Chest_home_02.show();
		} else {
			k == 0 ? qyengine.guardId("grou_clothesPressBtn_Type_" + k).objects.obj_Chest_home_02.show() : qyengine.guardId("grou_clothType_" + k).objects.obj_Chest_home_02.hide();
		}
		scro_clothesType.appendChild("grou_clothesPressBtn_Type_" + k, -6, 5, 0, k, false, true);
	}

	var index = 2;
	for (var i in game.configs.suitType) {

		var cell = game.configs.suitType[i];


		qyengine.grou_clothTypeInstance = qyengine.instance_create(0, 0, "grou_clothesPressBtn_Type", {
			"type": "grou_clothesPressBtn_Type",
			"id": "grou_clothesPressBtn_Type_" + index,
			"zIndex": 0
		});
		qyengine.guardId("grou_clothesPressBtn_Type_" + index).vars_.type = i;
		qyengine.guardId("grou_clothesPressBtn_Type_" + index).objects.obj_Chest_home_07_1.changeSprite(cell.icon + "_default");
		if (selectTab != undefined && i == selectTab) {
			qyengine.guardId("grou_clothesPressBtn_Type_" + index).objects.obj_Chest_home_02.show();
		} else {
			qyengine.guardId("grou_clothesPressBtn_Type_" + index).objects.obj_Chest_home_02.hide();
		}
		scro_clothesType.appendChild("grou_clothesPressBtn_Type_" + index, -5, 5, 0, index, false, true);
		index++;

	}
	//默认展示推荐
	current_game.scripts['al_scr_' + "Button_SuitType"].call(this, undefined, this, 100);
	current_game.scripts['al_scr_' + "SetClothesBottonPos"].call(this, undefined, this);
}


/**
 * createClothesTabScro   //创建属性tab
 */
for (var k = 0; k < 2; k++) {
	qyengine.grou_clothTypeInstance = qyengine.instance_create(0, 0, "grou_clothesPressBtn_Type", {
		"type": "grou_clothesPressBtn_Type",
		"id": "grou_clothesPressBtn_Type_" + k,
		"zIndex": 0
	});
	qyengine.guardId("grou_clothesPressBtn_Type_" + k).vars_.type = 100 + k;
	var markIcon = k == 0 ? "obj_Chest_home_06_1" : "obj_Chest_home_06_2";
	qyengine.guardId("grou_clothesPressBtn_Type_" + k).objects.obj_Chest_home_07_1.changeSprite(cell.icon + "_default");
	if (selectTab != undefined && 100 + k == selectTab) {
		qyengine.guardId("grou_clothesPressBtn_Type_" + k).objects.obj_Chest_home_02.show();
	} else {
		k == 0 ? qyengine.guardId("grou_clothesPressBtn_Type_" + k).objects.obj_Chest_home_02.show() : qyengine.guardId("grou_clothType_" + k).objects.obj_Chest_home_02.hide();
	}
	scro_clothesType.appendChild("grou_clothesPressBtn_Type_" + k, -6, 5, 0, k, false, true);
}

var index = 2;
for (var i in game.configs.suitType) {

	var cell = game.configs.suitType[i];


	qyengine.grou_clothTypeInstance = qyengine.instance_create(0, 0, "grou_clothesPressBtn_Type", {
		"type": "grou_clothesPressBtn_Type",
		"id": "grou_clothesPressBtn_Type_" + index,
		"zIndex": 0
	});
	qyengine.guardId("grou_clothesPressBtn_Type_" + index).vars_.type = i;
	qyengine.guardId("grou_clothesPressBtn_Type_" + index).objects.obj_Chest_home_07_1.changeSprite(cell.icon + "_default");
	if (selectTab != undefined && i == selectTab) {
		qyengine.guardId("grou_clothesPressBtn_Type_" + index).objects.obj_Chest_home_02.show();
	} else {
		qyengine.guardId("grou_clothesPressBtn_Type_" + index).objects.obj_Chest_home_02.hide();
	}
	scro_clothesType.appendChild("grou_clothesPressBtn_Type_" + index, -5, 5, 0, index, false, true);
	index++;

}





/**
 * SetClothesBottonPos
 */
if (grou_clothesPressPanel.vars_.botton) { //显示->不显示
	grou_clothesPressBotton.moveTo(grou_clothesPressBotton.x, 722 + 529 + 20, "time", 1000);
	grou_clothesPressPanel.vars_.botton = false;
} else {
	grou_clothesPressBotton.moveTo(grou_clothesPressBotton.x, 722, "time", 1000);
	grou_clothesPressPanel.vars_.botton = true;
}
/**
 * OpenChange
 */
//OpenChange  打开衣柜
var suit = game.vars_.playInfoJson.suit[index];
var length = Object.keys(suit).length;
if (length > 0)
	game.vars_.changeSuitIndex = index;
else
	game.vars_.changeSuitIndex = game.vars_.playInfoJson.dressIndex;

game.scripts["al_scr_CommonInstanceCreate"](null, null, "grou_clothesPressPanel");

grou_clothesPressPanel.appendChild("grou_playerDress", 520, 550);
game.scripts["al_scr_Change_Init"](null, null);

game.vars_.playerCurrentCloths = JSON.parse(JSON.stringify(game.vars_.playInfoJson.suit[game.vars_.changeSuitIndex]));
current_scene.vars_.searchProperty = [0, 0];
current_scene.vars_.tempProperty = [0, 0];

/**
 * Button_SuitType   args；self.vars_.type  ,changePage
 */
//判断是否有新获得标签
var fashionTable = game.configs.fashion;
var suitTable = game.configs.suit;
function judgeIsNew(fromId) {
	//后期更改
	current_scene.vars_.currentClothNew = [];
	for (var k = 0; k < current_scene.vars_.currentClothNew.length; k++) {
		if (Number(fromId) == Number(current_scene.vars_.currentClothNew[k])) {
			return true;
		}
	}
	return false;
}

function judgeInBag(_id) {
	//套装中的部件是否全部都已经拥有
	if (suitTable[_id]) {
		var fashionIdArr = suitTable[_id].fashionId.split("|");
		for (var i = 0; i < fashionIdArr.length; i++) {
			if (!arguments.callee(fashionIdArr[i])) {
				return false;
			}
		}
		return true;
	}
	for (var k in game.vars_.bagList.cloth) {
		if (Number(k) == Number(_id)) {
			return true;
		}
	}
	return false;
}
if (type <= 0)
	return;







var index = 0;
var arr = [];

game.vars_.curChangeType = type;
var tujian = function () {
	var configRecommond = game.configs.recommend[1];
	var recommend_fashion = configRecommond.fashion == -1 ? 0 : configRecommond.fashion.split("|"),
		recommend_suit = configRecommond.suit == -1 ? 0 : configRecommond.suit.split("|");
	var index = 0;
	if (recommend_fashion) {
		for (var i = 0; i < recommend_fashion.length; i++) {
			var isNew = judgeIsNew(recommend_fashion[i]);
			var unGet = judgeInBag(recommend_fashion[i]);
			arr[index] = [parseInt(recommend_fashion[i]), Number(fashionTable[recommend_fashion[i]].quality), isNew, unGet];
			index++;
		}
	}
	for (var i = 0; i < recommend_suit.length; i++) {
		var unGet = judgeInBag(recommend_suit[i]);
		arr[index] = [parseInt(recommend_suit[i]), Number(suitTable[recommend_suit[i]].quality), false, unGet];
		index++;
	}

	return arr;
};
var suitPage = function () {
	for (var i in suitTable) {
		arr[index] = [parseInt(suitTable[i].id), Number(suitTable[i].quality), false, judgeInBag(suitTable[i].id)];
		index++;
	}
	return arr;
};
//推荐或者套装
if (type == 100 || type == 101) {
	if (type == 100) {
		tujian();
	} else {
		suitPage();
	}
	current_game.scripts['al_scr_' + "clothesPressChange"].call(this, undefined, this, arr);
	return;
}

//遍历道具表,符合当前服装类型的加入数组
var tableList = null;
if (!game.vars_.searchCondition || game.vars_.searchCondition == 1) {
	if (grou_clothesPressPanel.vars_.faceOrClothes == undefined || grou_clothesPressPanel.vars_.faceOrClothes == 1) {
		tableList = game.vars_.bagList.cloth/*game.vars_.bagList.cloth*/;
	} else {
		tableList = game.configs.face;
	}

} else if (game.vars_.searchCondition == 2 || game.vars_.searchCondition == 3) {
	tableList = game.configs.fashion;
}

for (var id in tableList) {
	var property = getConfig("fashion", id, "propertyInfo") || getConfig("face", id, "propertyInfo");
	var itemName = getConfig("fashion", id, "name") || getConfig("face", id, "name");
	var itemInfo = getConfig("fashion", id, "info") || getConfig("face", id, "info");
	if (!property) {
		continue;
	}

	//临时加一个
	if (id == 30037) {
		property = "5#7";
	}

	if (property == -1 || property == "-1") {
		continue;
	}
	if (!game.vars_.searchType || game.vars_.searchType == 1) {
		var propertyArr = property.split("#");
		if (current_scene.vars_.searchProperty[0] != 0 || current_scene.vars_.searchProperty[1] != 0) {
			if (current_scene.vars_.searchProperty[0] != 0 && current_scene.vars_.searchProperty[1] != 0) {
				if ((parseInt(propertyArr[0]) != current_scene.vars_.searchProperty[0] || parseInt(propertyArr[1]) != current_scene.vars_.searchProperty[1])
					&& (parseInt(propertyArr[0]) != current_scene.vars_.searchProperty[1] || parseInt(propertyArr[1]) != current_scene.vars_.searchProperty[0]))
					continue;
			}
			else {
				if (current_scene.vars_.searchProperty[0] != 0) {
					if (!(parseInt(propertyArr[0]) == current_scene.vars_.searchProperty[0] || parseInt(propertyArr[1]) == current_scene.vars_.searchProperty[0]))
						continue;
				}
				else {
					if (!(parseInt(propertyArr[0]) == current_scene.vars_.searchProperty[1] || parseInt(propertyArr[1]) == current_scene.vars_.searchProperty[1]))
						continue;
				}
			}
		}
	} else {
		//根据昵称或者描述~~~
		var needMatchTxt = qyengine.guardId("grou_searchResult_condition").vars_.conditionTxt;
		var canCondition = (itemName.indexOf(needMatchTxt) > -1 && game.vars_.searchType == 2) || (game.vars_.searchType == 3 && (itemName.indexOf(needMatchTxt) > -1 || itemInfo.indexOf(needMatchTxt) > -1));
		if (!canCondition) {
			continue;
		}
	}

	var idType = function () {
		if ((getConfig("fashion", id, "type") && getConfig("fashion", id, "type") == type) || (getConfig("face", id, "type") && getConfig("face", id, "type") == type)) {
			return true;
		} else {
			return false;
		}
	};
	if (idType()) {
		var quality = getConfig("fashion", id, "quality") || getConfig("face", id, "quality");
		var isNew = judgeIsNew(id);
		var unGet = false;
		if (!game.vars_.searchCondition) {
			game.vars_.searchCondition = 1;
		}
		if (game.vars_.searchCondition == 1) {
			unGet = false;
		} else if (game.vars_.searchCondition == 2) {
			if (judgeInBag(id)) {
				continue;
			} else {
				unGet = true;
			}
		} else if (game.vars_.searchCondition == 3) {
			unGet = !judgeInBag(id);
		}

		var tempArr = [parseInt(id), quality, isNew, unGet];
		arr[index] = tempArr;
		index++;
	}
}

//排序:quality大的靠前,quality相同的情况下id小的靠前  后期更改
if (false && grou_propertySortSmallScreen.vars_ && Number(grou_propertySortSmallScreen.vars_.type) == 1) {
	var data = {};
	for (var i = 0; i < arr.length; i++) {
		var temp;
		if (arr[i][2]) {
			temp = data[1] || (data[1] = {});
		} else {
			temp = data[0] || (data[0] = {});
		}

		var zhiliang = arr[i][1];
		temp[zhiliang] || (temp[zhiliang] = {});
		temp[zhiliang][arr[i][0]] = arr[i];
	}
	var data1 = [];
	//遍历数组第二个元素
	for (var key in data) {
		var temp = data[key];
		//遍历数组第1个元素
		for (var key1 in temp) {
			var temp1 = Object.keys(temp[key1]);
			for (var i = temp1.length - 1; i >= 0; i--) {
				data1.push(temp[key1][temp1[i]]);
			}
			// for (var key2 in temp1) {
			// data1.push(temp1[key2]);
			// }
		}
	}
	data1.reverse();
	arr = data1;
} else {
	for (var i = 0; i < arr.length; i++) {

		for (var j = i + 1; j < arr.length; j++) {
			var temp = arr[i];
			if (arr[j][1] > temp[1]) {
				arr[i] = arr[j];
				arr[j] = temp;
			}
			else if (arr[j][1] == temp[1]) {
				if (arr[j][0] < temp[0]) {
					arr[i] = arr[j];
					arr[j] = temp;
				}
			}
		}
	}
}
/*
scro_change_clothBtn.vars_.itemSize = 0;

var children = scro_change_clothBtn.currentSprite.moving_.children;

for (var i = 0; i < children.length; i++) {
	for (var j = 0; j < children[i].children.length; j++) {
		children[i].children[j].visible = false;
	}
}


scro_change_clothBtn.vars_.clothInfo = arr;
scro_change_clothBtn.batchCreate();
*/
//计算总页数
current_game.scripts['al_scr_' + "clothesPressChange"].call(this, undefined, this, arr);
/**
 * clothesPressChange  args:totalObj 	selectPage
 */

var totalPage = Math.floor((totalObj.length - 1) / 8) <= 0 ? 1 : Math.floor((totalObj.length - 1) / 8);
var drawPage = 1;
if (selectPage) {
	drawPage = selectPage;
	if (drawPage > totalPage) {
		console.error("超出总的页数");
		return;
	}
}

var nowPageObj = function () {
	if (totalPage == drawPage) {
		return totalObj.splice((drawPage - 1) * 8)
	} else {
		return totalObj.splice((drawPage - 1) * 8, 8 * drawPage)
	}
};
qyengine.forEach(function () {
	this.hide();
}, "grou_clotherAndSuitBtn");
var needDrawInPage = nowPageObj();
for (var i = 0; i < needDrawInPage.length; i++) {
	var result = null;
	if (qyengine.guardId("grou_clotherAndSuitBtn" + i) && (!qyengine.guardId("grou_clotherAndSuitBtn" + i).destroyed_)) {
		result = qyengine.guardId("grou_clotherAndSuitBtn" + i);
		result.show();
	} else {
		result = qyengine.instance_create(0, 0, "grou_clotherAndSuitBtn", {
			"type": "grou_clotherAndSuitBtn",
			"id": "grou_clotherAndSuitBtn" + i,
			"zIndex": 1,
		});
		var posX = 207 + (144 + 10) * (i % 4),
			posY = 60 + (200 - 14) * (Math.floor(i / 4));
		grou_clothesPressBotton.appendChild(result.id, posX, posY);
	}
	var itemId = needDrawInPage[i][0];
	var isNew = needDrawInPage[i][2] || false;
	var unGet = needDrawInPage[i][3] || false;
	var fashionTableData = game.configs.fashion[itemId] || game.configs.suit[itemId];
	result.vars_.itemId = itemId.toString();
	result.vars_.count = i;
	result.vars_.unGet = unGet;
	result.objects['obj_Icon_dress_25000'].changeSprite("obj_" + fashionTableData.icon + "_default");
	result.objects['txt_clothesAndSuitBtn'].text = fashionTableData.name;
	result.objects['txt_clothesAndSuitBtn_number'].text = i + 1;
	result.objects['obj_未标题心'].width = 176 * (fashionTableData.quality / 6);
	result.objects['obj_未标题心'].x = (176 / 6 * (6 - fashionTableData.quality) - 8) / 2;
	//是否装扮稍后修改
	/*
	if (game.vars_.playerCurrentCloths[typeStr] == itemId) {
		result.objects['obj_icon_chest_have_to_dress_up'].show();
	} else {
		result.objects['obj_icon_chest_have_to_dress_up'].hide();
	}
	*/
	if (isNew) {
		result.objects['obj_chest_search_27'].show();
	} else {
		result.objects['obj_chest_search_27'].hide();
	}
	result.vars_.couldPress = true;
}


/**
 * 	grou_clotherAndSuitBtn的点击事件
 */

/**
 * Button_ChooseCloth   args:object
 */
if (self.vars_.unGet) {
	//获取途径~~~~
	game.scripts["al_scr_Button_ManualSuit"](null, null, self.vars_.itemId);
	return;
}

if (Math.abs(mouseY - self.posY) > 5)
	return;

if (object.vars_.couldPress == false)
	return;

game.scripts["al_scr_Change_1"](null, null, object.vars_.itemId);

//game.scripts["al_scr_Button_SuitType"](null,null,current_scene.vars_.currentClothType);
var cards = qyengine.getInstancesByType("grou_clothBtn");
for (var i = 0; i < cards.length; i++) {
	if (cards[i].vars_.itemId == game.vars_.playerCurrentCloths[getConfig("suitType", game.vars_.curChangeType, "name")]) {
		cards[i].objects.obj_Icon_chest_have_to_dress_up.show();
	}
	else {
		cards[i].objects.obj_Icon_chest_have_to_dress_up.hide();
	}
}






/**
 * faceAndSuitBtn    妆容 服饰 保存按钮的切换事件
 */
current_game.scripts['al_scr_' + "faceAndSuitBtn"].call(this, undefined, this);

var whitchType = { 0: 21, 1: 100 };
var idArr = { "grou_clothesPressBtn_face": 0, "grou_clothesPressBtn_dress": 1, "grou_clothesPressBtn_keep": 2 };
if (self && self.id) {
	whitchBtn = idArr[self.id];
	for (var i in idArr) {
		qyengine.guardId(i).dispatchMessage({
			"type": "message",
			"message": "changeBtnSprite",
			"argument0": (i == self.id)
		});
	}
}
if (whitchBtn) {
	if (grou_clothesPressPanel.vars_.faceOrClothes) {
		if (grou_clothesPressPanel.vars_.faceOrClothes == whitchBtn) {
			return;
		} else {
			grou_clothesPressPanel.vars_.faceOrClothes = whitchBtn;
			current_game.scripts['al_scr_' + "Button_SuitType"].call(this, undefined, this, whitchType[whitchBtn]);
		}
	} else {
		//默认是服饰
		grou_clothesPressPanel.vars_.faceOrClothes = 1;
		current_game.scripts['al_scr_' + "Button_SuitType"].call(this, undefined, this, whitchType[whitchBtn]);
	}
} else {
	//默认是服饰
	grou_clothesPressPanel.vars_.faceOrClothes = 1;
	current_game.scripts['al_scr_' + "Button_SuitType"].call(this, undefined, this, whitchType[1]);
}




