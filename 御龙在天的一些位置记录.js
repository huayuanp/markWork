跨服家族战
//家族主界面和跨服家族战的主界面(包括数据) 10/13
//黄金组、白银组、青铜组的家族、族长和个人排名(包括数据、全部功能) 10/15
//黄金组、白银组、青铜组的家族、族长和个人奖励(包括数据、全部功能) 10/17
//报名后,到达活动时间的跨服家族战界面(包括数据、全部功能);         10/20   
//跨服家族战的防守记录;                                  10/21
//攻击城门界面(包括数据全部功能);                                10/21
//家族战战斗界面                                         10/24                                                         
//胜利失败的界面以及调用升星、宝石、翅膀和刷装备等;      10/22
10 / 26

护国寺与偷金
//护国寺与偷金     10/18 

以上如果服务器不能按时提供接口, 前端提前和服务端约定格式;





Number(game.configs.UIConfig['grou_factionModifySet'].position.split(',')[0])
Number(game.configs.UIConfig['grou_factionModifySet'].zIndex)

qyengine.guardId("grou_packageBig").objects['obj_packSaleWord'].hide();
qyengine.guardId("grou_packageBig").objects['obj_packFusionWord'].hide();

obj_pkBackButton(650, 187)(640, 327)





//(帮派加入、 帮派查找、 帮派创建、 帮派主界面、 帮派任务(上香、 野外、 击杀炼狱boss))

//以下拆开
//1, 帮派会员
//2， 帮派排行榜
//3， 帮派宝库和帮派大旗
//4， 帮派管理


//御龙在天添加物品:
KBEngine.app.player().baseCall('reqTestAddGoods', 90002, 2);


qyengine.guardId("grou_packagePopUp_Box").objects['cont_packagePopUp_Box'].objects['obj_equipImage'].
	changeSprite("obj_" + game.configs.equipment[current_scene['nowSaleButton'].vars_.allProperty.Id].icon);


Number(game.configs.UIConfig['grou_factionApplyItem'].position.split(",")[0])


//grou_factionDailyActivity grou_factionManageMent
qyengine.guardId("grou_factionDailyActivity").destroy();
qyengine.guardId("grou_factionManageMent").destroy();


//grou_factionTaskItem obj_通用_按钮_04_peng
qyengine.guardId("grou_factionTaskItem" + repeatTime).objects['obj_通用_按钮_04_peng'].vars_.taskType = repeatTime + 1;

txt_incenseContributionNum_1
qyengine.guardId("grou_factionTaskItem" + repeatTime).objects['txt_incenseContributionNum_1'].setText('' + game.vars_.backFaction[0].upperLimitFaction[current_scene['markTaskType'] - 1]); //任务的完成度



//任务界面的一些初始化
qyengine.guardId('txt_factionTaskFactionLevel').setText('Lv.' + game.vars_.backFaction[0].level);
qyengine.guardId('txt_factionTaskVip').setText(game.vars_.backFaction[1][1] + '级会员:' + '384/400');
qyengine.guardId('txt_factionTaskContributionWord').setText("我的贡献:" + 350);
qyengine.guardId('txt_factionTaskIntegrate').setText("我的积分:" + game.vars_.backFaction[1][3]);



qyengine.guardId("grou_factionTaskItem" + repeatTime).objects['obj_通用_按钮_04_peng'].vars_.taskType = repeatTime + 1;
qyengine.guardId("grou_factionTaskItem" + repeatTime).objects['obj_通用_按钮_04_peng'].vars_.dayLimit = dayLimit;
qyengine.guardId("grou_factionTaskItem" + repeatTime).objects['obj_通用_按钮_04_peng'].vars_.contributionNum = contributionNum;
qyengine.guardId("grou_factionTaskItem" + repeatTime).objects['obj_通用_按钮_04_peng'].vars_.integrationNum = integrationNum;
qyengine.guardId("grou_factionTaskItem" + repeatTime).objects['txt_incenseContributionNum_1'].setText('' + game.vars_.backFaction[0].upperLimitFaction[repeatTime]);



qyengine.guardId("txt_factionSilver").setText("" + game.vars_.userInfo.silver);
qyengine.guardId("txt_factionGold").setText("" + game.vars_.userInfo.gold);


obj_factionEnterWord
qyengine.guardId('grou_factionListItem').objects['obj_factionEnterWord'].changeSprite('obj_factionEnterWord_A1');
qyengine.guardId(current_scene['markOnlyId']).changeSprite('obj_factionEnterWord_A1');


//帮派中的一些属性
game.vars_.backFaction[0].level
game.vars_.backFaction[0].nobility
guild_up(人数上限表)

var str = current_scene['markOnlyId'];
qyengine.guardId('grou_factionListItem' + Number(str.replace(/[^0-9]+/g, ''))).objects['obj_factionEnterWord'].changeSprite('obj_factionEnterWord_A1');


game.configs.guild_up[game.vars_.backFaction[0].level].people //帮派的人数的上限。
game.vars_.backFaction[1][4] //贡献的值
game.configs.guild_up[game.vars_.backFaction[0].level].exp //升级所需要的积分

updataFaction();
var markX = game.vars_.backFaction[1][4] * 474 / (game.configs.guild_up[game.vars_.backFaction[0].level + 1].exp);
qyengine.guardId('obj_factionLevelBarOut').setSize(markX, 32);
qyengine.guardId('txt_factionTaskFactionLevel').setText('Lv.' + game.vars_.backFaction[0].level);
qyengine.guardId('txt_factionTaskContributionWord').setText("我的贡献" + game.vars_.backFaction[1][4]);
qyengine.guardId('txt_factionTaskIntegrate').setText("我的积分" + game.vars_.backFaction[1][3]);
qyengine.guardId('txt_factionSilver').setText('' + game.vars_.userInfo.silver);
qyengine.guardId('txt_factionGold').setText('' + game.vars_.userInfo.gold);

function updataFaction() {
	for (var i = 1; i < configDataLength('guild_up'); i++) {
		if (game.vars_.backFaction[1][4] >= game.configs.guild_up[i].exp) {

		} else {
			game.vars_.backFaction[0].level = i;
		}
	}
}


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
grou_factionFightMainFighting.objects["txt_factionFightMian_fightMianScene2_1"] =
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


if(qyengine.getInstancesByType("grou_pkNearbyPlayerInfo").length>0){
	qyengine.guardId('grou_pkNearbyPlayerInfo').objects['txt_pkSecretPlayer'].setFontColor("#f3d51d");
}

calRedPointColor
current_game.scripts['al_scr_'+"calRedPointColor"].call(this,undefined,this,1);



if (Number(game.vars_.respPvpFightingEnemys[6]) >= 60 && Number(game.vars_.respPvpFightingEnemys[6]) < 100) {
	qyengine.guardId('grou_pkNearbyPlayerInfo').objects['txt_pkSecretPlayer'].setFontColor('#f3d51d');
} else if (Number(game.vars_.respPvpFightingEnemys[6]) >= 100) {
	qyengine.guardId('grou_pkNearbyPlayerInfo').objects['txt_pkSecretPlayer'].setFontColor('#fd4242');
} else {
	qyengine.guardId('grou_pkNearbyPlayerInfo').objects['txt_pkSecretPlayer'].setFontColor('#ffffff');
}
