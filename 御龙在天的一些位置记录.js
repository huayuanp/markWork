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










	var sH = grou_arena.vars_.nowFightType == 1 ? game.vars_.userInfo.prestigeNum : KBEngine.app.player().sportHonor,
		price = grou_arena.vars_.nowFightType == 1 ? getConfig("shop_pk_rank", arena_shop_buy_btn.vars_.item_id, "price") : getConfig("shop_pk", arena_shop_buy_btn.vars_.item_id, "price"),
		getN = Math.floor(sH / price);

	if (getN <= grou_arena_shop_buy.vars_.countMax) {
		grou_arena_shop_buy.vars_.count = getN;
	} else {
		grou_arena_shop_buy.vars_.count = grou_arena_shop_buy.vars_.countMax;
	}

	arena_shop_buy_count.text = grou_arena_shop_buy.vars_.count + "";
	if (grou_arena.vars_.nowFightType == 1) {
		arena_shop_buy_honor.text = grou_arena_shop_buy.vars_.count * getConfig("shop_pk_rank", arena_shop_buy_btn.vars_.item_id, "price");
	} else {
		arena_shop_buy_honor.text = grou_arena_shop_buy.vars_.count * getConfig("shop_pk", arena_shop_buy_btn.vars_.item_id, "price");
	}


	//商店购买按钮上的逻辑
	if (grou_arena.vars_.nowFightType == 1) {   //跨服竞技场
		if (grou_arena_shop_buy.vars_.count * getConfig("shop_pk_rank", arena_shop_buy_btn.vars_.item_id, "price") > game.vars_.userInfo.prestigeNum) {
			game.scripts["al_scr_" + "createCommonFlutterTxt_other"](null, null, "威望不足");
			return;
		}
	} else {
		if (grou_arena_shop_buy.vars_.count * getConfig("shop_pk", arena_shop_buy_btn.vars_.item_id, "price") > KBEngine.app.player().sportHonor) {
			game.scripts["al_scr_" + "showText"](null, null, "荣誉不足");
			return;
		}
	}
	if (grou_arena.vars_.nowFightType == 1) {
		KBEngine.app.player().baseCall("reqCrossServerBuyShop", self.vars_.item_id, grou_arena_shop_buy.vars_.count);

	} else {
		KBEngine.app.player().baseCall("reqPvpBuySportShopGood", self.vars_.item_id, grou_arena_shop_buy.vars_.count);
	}

	grou_arena.vars_.buyId = self.vars_.item_id;

	grou_arena.vars_.buyCount = grou_arena_shop_buy.vars_.count;

	qyengine.instance_destroy(grou_arena_shop_buy);
	//购买的回调
	current_game.scripts["al_scr_" + "actionlist_destroyLoadingCircle"].call(this, undefined, this);

	var markBackStatus = ["购买失败", "购买成功", "威望值不够", "购买超过限制"];

	current_game.scripts['al_scr_' + "createCommonFlutterTxt_other"].call(this, undefined, this, markBackStatus[data]);
	if (data == 1) {
		KBEngine.app.player().baseCall("reqCrossServerShop");
	}

	//匹配:请求匹配数据
	KBEngine.app.player().baseCall("reqCrossServerMatchPlayer");


	game.vars_.enemyType = "CROSS_ARENA";

	game.vars_.timeOutHander && game.vars_.timeOutHander.forEach(function (hd) {
		window.clearTimeout(hd);
	})

	game.vars_.respPvpFightingEnemys = data;
	grou_crossServerFight.vars_.alreadyGetOtherData = true;
	current_game.scripts['al_scr_' + "main_sceneBattleInfoInit"].call(this, undefined, this, 1);



	//跨服竞技场的回调
	var data_胜场等 = data[2];
	function pk_rank_score_backId(scores) {   //积分返回id
		for (cell in game.configs.pk_rank_score) {
			if (Number(game.configs.pk_rank_score[cell].score) > scores) {
				return (cell - 1);
			}
		}
		return configDataLength("pk_rank_score");
	}
	grou_crossServerFight.objects['txt_crossServerFightRank_0'].text = data[1] == 0 ? "我的排名:1000名之后" : "我的排名:" + data[1];
	grou_crossServerFight.vars_.myRank = data[1];
	//总场次
	grou_crossServerFight.objects['txt_crossServerFightRank_1'].text = "总场次：" + data_胜场等.allsession;
	grou_crossServerFight.objects['txt_crossServerFightRank_2'].text = "胜场：" + data_胜场等.winsession;
	var rate_胜率 = 0;
	if (Number(data_胜场等.allsession)) {
		var rate = data_胜场等.winsession / data_胜场等.allsession;
		rate_胜率 = 100 * rate.toFixed(2);
	}
	grou_crossServerFight.objects['txt_crossServerFightRank_3'].text = "胜率：" + rate_胜率 + "%";
	//积分
	var score = Number(data_胜场等.socre);
	grou_crossServerFight.objects['txt_crossServerFightIntegration'].text = "当前积分：" + score;
	//段位:
	var my_段位 = "青铜V5";
	my_段位 = calDuanWei(score);
	var icon_段位 = game.configs.pk_rank_score[pk_rank_score_backId(score)].icon;

	grou_crossServerFight.objects['obj_icon_by'].changeSprite("obj_" + icon_段位 + "_default");

	grou_crossServerFight.objects['txt_crossServerFightLevel'].text = my_段位;
	//上周三强
	var info_上周三强 = data[0];
	var info_膜拜 = data[3];
	var photoObj_上周三强 = [grou_arena.objects['grou_crossServerFightPhoto' + 1],
	grou_arena.objects['grou_crossServerFightPhoto' + 0],
	grou_arena.objects['grou_crossServerFightPhoto' + 2]];
	var daXieNum = ['一', '二', '三'];
	if (info_上周三强.length == 0) {//未产生三强
		for (item in photoObj_上周三强) {
			photoObj_上周三强[item].objects['txt_crossServerFightFirst'].text = "第" + daXieNum[item] + "名";
			photoObj_上周三强[item].objects['obj_通用_方形头像0_crossServerFight'].hide();
			photoObj_上周三强[item].objects['txt_crossServerFightFirst_1'].text = "虚位以待";
			//状态:0,未产生、1，可膜拜 2、已经膜拜
			photoObj_上周三强[item].objects['obj_通用_方形头像框0_crossServerFight'].vars_.nowStatus = 0;
		}
	} else {
		for (item in photoObj_上周三强) {
			if (item >= info_上周三强.length) {
				photoObj_上周三强[item].objects['txt_crossServerFightFirst'].text = "第" + daXieNum[item] + "名";
				photoObj_上周三强[item].objects['obj_通用_方形头像0_crossServerFight'].hide();
				photoObj_上周三强[item].objects['txt_crossServerFightFirst_1'].text = "虚位以待";
				//状态:0,未产生、1，可膜拜 2、已经膜拜
				photoObj_上周三强[item].objects['obj_通用_方形头像框0_crossServerFight'].vars_.nowStatus = 0;
			} else {
				photoObj_上周三强[item].objects['txt_crossServerFightFirst'].text = "第" + daXieNum[item] + "名";

				photoObj_上周三强[item].objects['obj_通用_方形头像0_crossServerFight'].changeSprite("selectRole_photo_" + info_上周三强[item].profession + "_default");
				photoObj_上周三强[item].objects['txt_crossServerFightFirst_1'].text = info_上周三强[item].nick;
			}
		}
		info_膜拜.length > 0 && info_膜拜.forEach(function (e) {
			photoObj_上周三强[e - 1].objects['obj_通用_方形头像框0_crossServerFight'].vars_.nowStatus = 2;
		});
	}
	//挑战次数
	var fightNum = data[4];
	grou_crossServerFight.objects['txt_crossServerFightNum'].text = "挑战次数 " + fightNum + "/" + 20;
	if (fightNum >= 20) {
		grou_crossServerFight.objects['txt_crossServerFightNum_1'].show();
	} else {
		grou_crossServerFight.objects['txt_crossServerFightNum_1'].hide();
	}

	//已经购买的次数
	var alreadyBuyNum = data[5];
	grou_crossServerFight.vars_.alreadyBuyNum = alreadyBuyNum;
	//匹配按钮设置已经挑战次数
	grou_crossServerFight.objects['obj_兑换排行榜排名奖励_按钮_crossServerFight_4'].vars_.plusFightNum = fightNum;
	function calDuanWei(myScore) {
		for (cell in game.configs.pk_rank_score) {
			var _scores = game.configs.pk_rank_score[cell].score;
			if (myScore < _scores) {
				my_段位 = game.configs.pk_rank_score[cell - 1].name;
				return my_段位;
			}
		}
		return "王者V1";
	}


	//上周三强的点击事件
	if (self.currentSprite.parent.qyobj.id == "grou_arena") {
		//0，未产生 2已经膜拜
		var rankTxt = ["二", '一', '三'];
		var rankSendMessage = [2, 1, 3];
		if (self.vars_.nowStatus == 0) {
			var index = self.id.slice(self.id.length - 1, self.id.length);
			current_game.scripts['al_scr_' + "createCommonFlutterTxt_other"].call(this, undefined, this, "尚未产生第" + rankTxt[Number(index)] + "名,无法膜拜哦~~~");
			return;
		} else if (self.vars_.nowStatus == 2) {
			current_game.scripts['al_scr_' + "createCommonFlutterTxt_other"].call(this, undefined, this, "您已经膜拜过第" + rankTxt[Number(index)] + "名了,明日再来吧~");
		} else {
			current_game.scripts["al_scr_" + 'actionlist_createLoadingCircle'] && current_game.scripts["al_scr_" + 'actionlist_createLoadingCircle'].call(this, undefined, this);
			KBEngine.app.player().baseCall("reqClickThereTop", rankSendMessage[Number(index)]);
		}
	}


	//膜拜的回调
	current_game.scripts["al_scr_" + "actionlist_destroyLoadingCircle"].call(this, undefined, this);

	if (data == 1) {
		current_game.scripts['al_scr_' + "createCommonFlutterTxt"].call(this, undefined, this, "膜拜成功");
		KBEngine.app.player().baseCall("reqCrossServerJJC");
		current_game.scripts['al_scr_' + "createMoBaiReward"].call(this, undefined, this);
	} else {
		current_game.scripts['al_scr_' + "createCommonFlutterTxt"].call(this, undefined, this, "膜拜失败");
	}




	//匹配点击 挑战次数不足
	if (self.vars_.plusFightNum >= 20) {
		qyengine.instance_create(-100, 0, "grou_crossServiceFightTip", {
			"type": "grou_crossServiceFightTip",
			"id": "grou_crossServiceFightTip",
			"zIndex": 5,
			"layer": "layer_headerfeet"
		});
		grou_crossServiceFightTip.objects['txt_crossServiceFightTip'].text = "  今日跨服竞技场挑战免费次数已用完，是否花费" + "<font  color='#ffe57a'>" + "50金子" + "</font>" + "购买一次?(已购买" + grou_crossServerFight.vars_.alreadyBuyNum + "次)\n（VIP0可购买2次,VIP等级越高购买次数越多）";
	}

	//购买挑战次数的按钮  
	var consumeGold = game.configs.misc['pk_rank_gold'].value;
	if (game.vars_.userInfo.gold >= Number(consumeGold)) {
		//current_game.scripts['al_scr_' + "createCrossMatching"].call(this, undefined, this);
		current_game.scripts["al_scr_" + 'actionlist_createLoadingCircle'] && current_game.scripts["al_scr_" + 'actionlist_createLoadingCircle'].call(this, undefined, this);
		KBEngine.app.player().baseCall("reqCrossServerJJCBuyTime");
	} else {
		qyengine.getInstancesByType("grou_crossServiceFightTip")[0].destroy();
		current_game.scripts['al_scr_' + "popRechargeUI"].call(this, undefined, this);
	}






	//购买跨服竞技场次数的回调
	current_game.scripts["al_scr_" + "actionlist_destroyLoadingCircle"].call(this, undefined, this);
	if (data == 1) {
		current_game.scripts['al_scr_' + "createCommonFlutterTxt"].call(this, undefined, this, '购买成功');
		qyengine.getInstancesByType("grou_crossServiceFightTip").forEach(function (e) {
			e.destroy();
		});
		current_game.scripts['al_scr_' + "createCrossMatching"].call(this, undefined, this);
	} else {
		current_game.scripts['al_scr_' + "createCommonFlutterTxt"].call(this, undefined, this, "购买失败");
	}


	//创建pk之前的vs界面
	//grou_crossServerFightPk的创建事件
	var _pos = [[198, 575], [573, 575]];
	for (var i = 4; i < 6; i++) {
		qyengine.instance_create(_pos[i - 4][0], _pos[i - 4][1], "grou_crossServerFightPhoto", {
			"type": "grou_crossServerFightPhoto",
			"id": "grou_crossServerFightPhoto" + i,
			"zIndex": 5,
			"layer": "layer_headerfeet"
		});
		grou_crossServerFightPk.appendChild("grou_crossServerFightPhoto" + i, _pos[i - 4][0], _pos[i - 4][1]);
	}

	var myPhotoObj = grou_crossServerFightPk.objects['grou_crossServerFightPhoto' + 4];
	var otherPhotoObj = grou_crossServerFightPk.objects['grou_crossServerFightPhoto' + 5];
	myPhotoObj.objects['txt_crossServerFightFirst'].text = grou_crossServerFight.objects['txt_crossServerFightLevel'].text;
	myPhotoObj.objects['txt_crossServerFightFirst_1'].text = game.vars_.userInfo.nick;
	myPhotoObj.objects['obj_通用_方形头像0_crossServerFight'].changeSprite("selectRole_photo_" + game.vars_.userInfo.profession + "_default");
	//var otherDuanWei = current_game.scripts['al_scr_' + "calDuanWeiByJiFen"].call(this, undefined, this, game.vars_.respPvpFightingEnemys[7]);
	var otherDuanWei = game.configs.pk_rank_score[game.vars_.respPvpFightingEnemys[7]].name;
	otherHeroObj.objects['txt_crossServerFightFirst'].text = otherDuanWei;
	otherHeroObj.objects['txt_crossServerFightFirst_1'].text = "" + game.vars_.respPvpFightingEnemys[2];
	var otherProfession = game.vars_.respPvpFightingEnemys[5][0].profession;
	otherHeroObj.objects['obj_通用_方形头像0_crossServerFight'].changeSprite("selectRole_photo_" + otherProfession + "_default");


	//进入战斗
	game.vars_.enemyType = "CROSS_ARENA";

	game.vars_.timeOutHander && game.vars_.timeOutHander.forEach(function (hd) {
		window.clearTimeout(hd);
	})
	current_game.scripts['al_scr_' + "main_sceneBattleInfoInit"].call(this, undefined, this, 1);




	//跨服家族战胜利或者失败后的处理   createCrossFightResult
	//0 失败 1胜利
	current_game.scripts['al_scr_' + "createCrossFightResult"].call(this, undefined, this, 0);
	KBEngine.app.player().baseCall("reqCrossServerMatchPlayerResult", 0, game.vars_.respPvpFightingEnemys[2]);


	//创建跨服竞技场的胜利失败界面
	qyengine.instance_create(-100, 0, "grou_crossFightResult", {
		"type": "grou_crossFightResult",
		"id": "grou_crossFightResult",
		"zIndex": 5,
		"layer": "layer_headerfeet",
		"scene": "main_scene"
	});
	function pk_rank_score_backId(scores) {
		for (cell in game.configs.pk_rank_score) {
			if (Number(game.configs.pk_rank_score[cell].score) > scores) {
				return (cell - 1);
			}
		}
		return configDataLength("pk_rank_score");
	}
	var scoreid = pk_rank_score_backId(game.vars_.userInfo.fightCrossScore),
		original_段位 = game.configs.pk_rank_score[scoreid].name;
	//暂且隐藏排名
	grou_crossFightResult.objectsp['txt_crossFightResultNameAndFight_5'].hide();
	if (data == 1) {  //胜利
		//获得威望
		grou_crossFightResult.objects['txt_crossFightResultNameAndFight_6'].text = "威望 +" + game.configs.pk_rank_score[scoreid].victory_reward;
		grou_crossFightResult.objects['grou_crossFightResultUpdate'].hide();
		grou_crossFightResult.objects['obj_失败_装饰'].changeSprite("obj_胜利_装饰_default");
		grou_crossFightResult.objects['obj_失败_字'].changeSprite("obj_胜利_字_default");
		//胜利积分
		//game.vars_.userInfo.fightCrossScore       game.vars_.respPvpFightingEnemys[7]   
		//game.configs.pk_rank_score
		//胜利基础分
		var successBaseScore = game.configs.pk_rank_score[scoreid].victory_score + (pk_rank_score_backId(game.vars_.respPvpFightingEnemys[7]) - scoreid);
		game.vars_.userInfo.fightCrossScore += successBaseScore;
		var nowId = pk_rank_score_backId(game.vars_.userInfo.fightCrossScore);
		var now_段位 = game.configs.pk_rank_score[nowId].name;
		if (scoreid == nowId) {  //未晋级
			grou_crossFightResult.objects['txt_crossFightResultRankUp'].hide();
			grou_crossFightResult.objects['txt_crossFightResultNameAndFight_4'].hide();
		} else {  //晋级
			grou_crossFightResult.objects['txt_crossFightResultRankUp'].text = "" + original_段位 + " --------->" + now_段位;
			grou_crossFightResult.objects['txt_crossFightResultNameAndFight_4'].text = "晋级";
		}
	} else {
		//威望
		grou_crossFightResult.objects['txt_crossFightResultNameAndFight_6'].text = "威望 +" + game.configs.pk_rank_score[scoreid].fail_reward;
		var failBaseScore = game.configs.pk_rank_score[scoreid].fail_score + (-pk_rank_score_backId(game.vars_.respPvpFightingEnemys[7]) + scoreid);
		game.vars_.userInfo.fightCrossScore -= failBaseScore;
		var nowId = pk_rank_score_backId(game.vars_.userInfo.fightCrossScore);
		var now_段位 = game.configs.pk_rank_score[nowId].name;
		if (scoreid == nowId) {  //未降级
			grou_crossFightResult.objects['txt_crossFightResultRankUp'].hide();
			grou_crossFightResult.objects['txt_crossFightResultNameAndFight_4'].hide();
		} else {  //晋级
			grou_crossFightResult.objects['txt_crossFightResultRankUp'].text = "" + original_段位 + " --------->" + now_段位;
			grou_crossFightResult.objects['txt_crossFightResultNameAndFight_4'].text = "降级";
		}
	}

	//头像昵称等
	grou_crossFightResult.objects['obj_通用_方形头像0_crossServerFight_0'].changeSprite("selectRole_photo_" + game.vars_.userInfo.profession + "_default");
	grou_crossFightResult.objects['obj_通用_方形头像0_crossServerFight_0'].setScale(0.63, 0.63);
	grou_crossFightResult.objects['txt_crossFightResultNameAndFight'].text = game.vars_.userInfo.serverName + " " + game.vars_.userInfo.nick;
	//grou_crossFightResult.objects['txt_crossFightResultNameAndFight_1'].text = "战斗力： " + KBEngine.app.player().fighting;
	grou_crossFightResult.objects['txt_crossFightResultNameAndFight_1'].hide();
	//其它玩家的头像昵称
	var otherProfession = game.vars_.respPvpFightingEnemys[5][i].profession;
	grou_crossFightResult.objects['obj_通用_方形头像0_crossServerFight_1'].changeSprite("selectRole_photo_" + otherProfession + "_default");
	grou_crossFightResult.objects['obj_通用_方形头像0_crossServerFight_1'].setScale(0.63, 0.63);
	grou_crossFightResult.objects['txt_crossFightResultNameAndFight_2'].text = game.vars_.respPvpFightingEnemys[8] + "" + game.vars_.respPvpFightingEnemys[2];
	grou_crossFightResult.objects['txt_crossFightResultNameAndFight_3'].hide();

	//跨服竞技场排行榜
	var pos = getConfig('UIConfig', 'grou_arena_rank', 'position').split(',');
	var zIndex = getConfig('UIConfig', 'grou_arena_rank', 'zIndex');
	var layer = getConfig('UIConfig', 'grou_arena_rank', 'layer');

	qyengine.instance_create(pos[0], pos[1], 'grou_crossArena_rank', {
		"id": 'grou_crossArena_rank',
		"layer": layer,
		"zIndex": zIndex
	});
	//根据积分求关键字
	function pk_rank_score_backId(scores) {
		for (_cell in game.configs.pk_rank_score) {
			if (Number(game.configs.pk_rank_score[_cell].score) > scores) {
				return (_cell - 1);
			}
		}
		return configDataLength("pk_rank_score");
	}
	for (cell in data) {
		var photoIcon = "selectRole_photo_" + data[cell][2] + "_default";
		var score = data[cell][6];
		var duanWeiIcon = "obj_" + game.configs.pk_rank_score[pk_rank_score_backId(score)].icon + "_small_default";
		var duanWeiWord = current_game.scripts['al_scr_' + "calDuanWeiByJiFen"].call(this, undefined, this, score);
		game.configs.crossServerFightRank[cell + 1] = {
			"id": Number(cell) + 1,
			"icon": photoIcon,
			"vip": "vip" + data[cell][5],
			"server": data[cell][3],
			"monthCard": 0,
			"nick": "" + data[cell][3] + " " + data[cell][1],
			"score": data[cell][6],
			"level": "lv" + data[cell][4],
			"rankIndex": cell + 1,
			"duanWeiIcon": duanWeiIcon,
			"duanWeiWord": duanWeiWord
		}
	}
	scro_arena_rank_list.refreshRelations();











	if (Number(event.argument0) === grou_activityMain_new.vars_.nowAtTab) {
		return;
	} else {
		//var allActivityTab = ["grou_activityInTest", "grou_activityConsume", "grou_levelgift", "grou_activityCharts", "grou_activityLuckyWheel", "grou_leichonggift"];
		var allActivityTab = ["grou_activitySingleTimeBack", "grou_activityLuckyWheel", "grou_activityConsume", "grou_activityCharts", "grou_leichonggift", "grou_levelgift", "grou_activityInTest", "grou_activityLimitTime"];
		var whichGroup = allActivityTab[grou_activityMain_new.vars_.nowAtTab];
		var nextCreateGroup = allActivityTab[Number(event.argument0)];
		//qyengine.guardId(whichGroup).length > 0 && qyengine.guardId(whichGroup).destroy();
		var selectSprite = ["obj_活动_单充回馈2", "obj_活动_积分转轮2", "obj_活动_累计消耗2", "obj_活动_王者争霸2", "obj_活动_累计充值2", "obj_活动_等级礼包2", "obj_活动_封测特权2", "obj_活动_限时折扣2"];
		//var selectSprite = ["obj_活动_封测特权2", "obj_活动_累计消耗2", "obj_活动_等级礼包2", "obj_活动_王者争霸2", "obj_活动_积分转轮2", "obj_活动_累计充值2"];
		//var initSprite = ["obj_活动_封测特权1_activiy_new", "obj_活动_累计消耗1", "obj_活动_等级礼包1", "obj_活动_王者争霸1", "obj_活动_积分转轮1", "obj_活动_累计充值1","obj_活动_限时折扣1"];
		var initSprite = ["obj_活动_单充回馈1", "obj_活动_积分转轮1", "obj_活动_累计消耗1", "obj_活动_王者争霸1", "obj_活动_累计充值1", "obj_活动_等级礼包1", "obj_活动_封测特权1_activiy_new", "obj_活动_限时折扣1"];
		qyengine.guardId("grou_activityMainTab_cell_" + grou_activityMain_new.vars_.nowAtTab).objects["obj_活动_封测特权1"].changeSprite(initSprite[grou_activityMain_new.vars_.nowAtTab] + "_default");
		qyengine.guardId("grou_activityMainTab_cell_" + grou_activityMain_new.vars_.nowAtTab).objects["obj_活动_框未选中"].changeSprite("obj_活动_框未选中_activity_new_default");
		qyengine.guardId("grou_activityMainTab_cell_" + Number(event.argument0)).objects["obj_活动_封测特权1"].changeSprite(selectSprite[Number(event.argument0)] + "_default");
		qyengine.guardId("grou_activityMainTab_cell_" + Number(event.argument0)).objects["obj_活动_框未选中"].changeSprite("obj_活动_框已选中_default");

		qyengine.getInstancesByType(whichGroup)[0].destroy();
		grou_activityMain_new.vars_.nowAtTab = Number(event.argument0);

		if (Number(event.argument0) == 4 + 1 || Number(event.argument0) == 3 + 1) {  //等级礼包和累计充值
			if (Number(event.argument0) == 3 + 1) {
				current_game.scripts['al_scr_' + "reqActivitySix"].call(this, undefined, this);
			} else {
				current_game.scripts['al_scr_' + "act_levelgift_open"].call(this, undefined, this);
			}
		} else {
			qyengine.instance_create(176, 436, nextCreateGroup, {
				"type": nextCreateGroup,
				"id": nextCreateGroup,
				"zIndex": 5,
				"scene": "main_scene",
				"layer": "layer_headerfeet"
			});
			grou_activityMain_new.appendChild(nextCreateGroup, 176, 436);
			console.log("ahehehehheheheheh");
		}
	}











	if (Number(event.argument0) === grou_activityMain_new.vars_.nowAtTab) {
		return;
	} else {
		//var allActivityTab = ["grou_activityInTest", "grou_activityConsume", "grou_levelgift", "grou_activityCharts", "grou_activityLuckyWheel", "grou_leichonggift"];
		var allActivityTab = ["grou_activitySingleTimeBack", "grou_activityLimitTime", "grou_activityLuckyWheel", "grou_activityConsume", "grou_activityCharts", "grou_leichonggift", "grou_levelgift", "grou_activityInTest", "grou_activityLimitTime"];
		var whichGroup = allActivityTab[grou_activityMain_new.vars_.nowAtTab];
		var nextCreateGroup = allActivityTab[Number(event.argument0)];
		//qyengine.guardId(whichGroup).length > 0 && qyengine.guardId(whichGroup).destroy();
		var selectSprite = ["obj_活动_单充回馈2", "obj_活动_限时折扣2", "obj_活动_积分转轮2", "obj_活动_累计消耗2", "obj_活动_王者争霸2", "obj_活动_累计充值2", "obj_活动_等级礼包2", "obj_活动_封测特权2", "obj_活动_限时折扣2"];
		//var selectSprite = ["obj_活动_封测特权2", "obj_活动_累计消耗2", "obj_活动_等级礼包2", "obj_活动_王者争霸2", "obj_活动_积分转轮2", "obj_活动_累计充值2"];
		//var initSprite = ["obj_活动_封测特权1_activiy_new", "obj_活动_累计消耗1", "obj_活动_等级礼包1", "obj_活动_王者争霸1", "obj_活动_积分转轮1", "obj_活动_累计充值1","obj_活动_限时折扣1"];
		var initSprite = ["obj_活动_单充回馈1", "obj_活动_限时折扣1", "obj_活动_积分转轮1", "obj_活动_累计消耗1", "obj_活动_王者争霸1", "obj_活动_累计充值1", "obj_活动_等级礼包1", "obj_活动_封测特权1_activiy_new", "obj_活动_限时折扣1"];
		qyengine.guardId("grou_activityMainTab_cell_" + grou_activityMain_new.vars_.nowAtTab).objects["obj_活动_封测特权1"].changeSprite(initSprite[grou_activityMain_new.vars_.nowAtTab] + "_default");
		qyengine.guardId("grou_activityMainTab_cell_" + grou_activityMain_new.vars_.nowAtTab).objects["obj_活动_框未选中"].changeSprite("obj_活动_框未选中_activity_new_default");
		qyengine.guardId("grou_activityMainTab_cell_" + Number(event.argument0)).objects["obj_活动_封测特权1"].changeSprite(selectSprite[Number(event.argument0)] + "_default");
		qyengine.guardId("grou_activityMainTab_cell_" + Number(event.argument0)).objects["obj_活动_框未选中"].changeSprite("obj_活动_框已选中_default");

		qyengine.getInstancesByType(whichGroup)[0].destroy();
		grou_activityMain_new.vars_.nowAtTab = Number(event.argument0);

		if (Number(event.argument0) == 4 + 2 || Number(event.argument0) == 3 + 2) {  //等级礼包和累计充值
			if (Number(event.argument0) == 3 + 2) {
				current_game.scripts['al_scr_' + "reqActivitySix"].call(this, undefined, this);
			} else {
				current_game.scripts['al_scr_' + "act_levelgift_open"].call(this, undefined, this);
			}
		} else {
			qyengine.instance_create(176, 436, nextCreateGroup, {
				"type": nextCreateGroup,
				"id": nextCreateGroup,
				"zIndex": 5,
				"scene": "main_scene",
				"layer": "layer_headerfeet"
			});
			grou_activityMain_new.appendChild(nextCreateGroup, 176, 436);
			console.log("ahehehehheheheheh");
		}
	}







	//创建主角,初始化主角模块
	var rolesInfo = game.vars_.userInfo.roles;
	var rolesNameJson = { "10001": "男战士", "10002": "女战士", "10003": "男法师", "10004": "女法师", "10005": "男道士", "10006": "女道士" };

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


		//先只有法杖
		if (rolesInfo[i].id == 10003) {
			heroObj.currentSprite.setFill("");
			RoleAnimation.rootFolder = "/qiyun/lxjt_roleanim/";
			roleAnimation = new RoleAnimation(rolesNameJson[10003]);
			roleAnimation.setAction("待机");
			//设置方向
			roleAnimation.setCostume(1).setWeapon(1).setDirection(5);
			roleAnimation.setPosition(160, 150);
			heroObj.currentSprite.addChild(roleAnimation);
			roleAnimation.stop();
			roleAnimation.setLoop(true);
			roleAnimation.play();
		}
		game.scripts["al_scr_sceneSetHeroInfo"](null, null, heroObj, rolesInfo[i]);

		current_scene.vars_.heroObjArr.push(heroObj);

		//换装
		if (rolesInfo[i].id != 10003) {

			game.scripts["al_scr_changeObjModel"](null, null, rolesInfo[i], heroObj);
		}


	}






	//创建主角,初始化主角模块
	var rolesInfo = game.vars_.userInfo.roles;
	var rolesNameJson = { "10001": "男战士", "10002": "女战士", "10003": "男法师", "10004": "女法师", "10005": "男道士", "10006": "女道士" };
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
		heroObj.currentSprite.setFill('');
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
			RoleAnimation.rootFolder = "/qiyun/lxjt_roleanim/";
			roleAnimation = new RoleAnimation(rolesNameJson[rolesInfo[i].id]);
			heroObj.currentAnim = roleAnimation;
			roleAnimation.setAction("待机");
			roleAnimation.setPosition(160, 150);
			//设置方向武器等
			//roleAnimation.setCostume(1).setWeapon(1).setDirection(5);
			heroObj.currentSprite.appendChild(roleAnimation)
			roleAnimation.setLoop(true);
			roleAnimation.play();
		}

		game.scripts["al_scr_sceneSetHeroInfo"](null, null, heroObj, rolesInfo[i]);

		current_scene.vars_.heroObjArr.push(heroObj);

		//换装
		game.scripts["al_scr_changeObjModel"](null, null, rolesInfo[i], heroObj);

	}

	//时间轴   heroSearchEnemy


	if (self.vars_.skillCdList[self.vars_.currentSkillIndex] == 0) {

		self.vars_.skillCdList[self.vars_.currentSkillIndex] = Number(getConfig("skill", self.vars_.currentSkillID, "cd"));

		if (self.vars_.currentState != "攻击") {

			self.currentAnim.setSliceAnimationAction(getConfig("heroAction", self.vars_.currentDirection, "attack"), true);
			self.current_game.setSpeed(2);
			self.vars_.currentState = "攻击";
		}

		if (self.vars_.currentSkillIndex == 0) {

			self.vars_.currentSkillNum++;

		} else {

			self.vars_.oldSkillID = self.vars_.currentSkillIndex;

			self.vars_.currentSkillNum = 0;
		}

		game.scripts["al_scr_calculateHurt"].call(self, null, null, self.vars_.currentSkillID, 1);
	}

	//     calculateHurt


















	//切换方向和动作
	//切换方向和动作
	if (endPos[1] == startPos[1]) {

		endPos[1] += 1;
	}

	if (endPos[0] == startPos[0]) {

		endPos[0] += 1;
	}

	var angle = Math.ceil(360 * Math.atan((endPos[1] - startPos[1]) / (endPos[0] - startPos[0])) / (2 * Math.PI));


	//右边区域
	if (endPos[0] > startPos[0]) {

		angle += 90;

	} else {

		angle += 270;
	}

	var configList = game.configs.heroAction;

	local.currentDirection = self.vars_.currentDirection;

	local.currentAction = action;

	local.currentDirectionNum = null;

	for (var item in configList) {

		var angleInfo = configList[item].directionEnum.split(",");

		if (angle > Number(angleInfo[0])) {

			if (angle < Number(angleInfo[1])) {

				local.currentDirectionNum = configList[item].directionNum;

				local.currentDirection = item;

				break;
			}
		}
	}


	if (local.currentDirectionNum == null) {

		local.currentDirectionNum = configList["back"].directionNum;

		local.currentDirection = "back";
	}


	if (self.vars_.currentDirection == local.currentDirection) {

		if (self.vars_.currentState != local.currentAction) {

			self.currentAnim.setAction(local.currentAction);

			self.vars_.currentState = local.currentAction;
		}

	} else {

		self.currentAnim.setAction(local.currentAction);

		self.vars_.currentState = local.currentAction;
	}

	self.currentAnim.setDirection(local.currentDirectionNum);

	self.currentAnim.setSpeed(self.vars_.currentActionSpeed);

	self.vars_.currentDirection = local.currentDirection;




	self.currentAnim.setDirection(game.configs.heroAction[self.vars_.currentDirection].directionNum);
	self.currentAnim.setAction("待机");
	self.currentAnim.setSpeed(2);
	self.vars_.currentState = "待机";










	//createSceneOtherPlayerShow


	//基金活动的数据绑定   按钮状态  未购买0  未达成1  未领取:2 已领取:3
	var fundInfo = game.configs.activity_fund[(grou_activityGrowthGold.vars_.nowTab + 1)];
	if (grou_activityGrowthGold.vars_.nowTab != 3) {
		var needvip = Number(fundInfo.viplevel);
		grou_activityGrowthGold.vars_.needRmb = Number(fundInfo.price);
		fundInfo = fundInfo.gold_level.split(";");
		for (cell in fundInfo) {
			var levelAndGold = fundInfo[cell].split("|"),
				needLevel = Number(levelAndGold[0]),
				gold = Number(levelAndGold[1]),
				needlevelDec = "等级达到" + needLevel + "级可领取",
				receivepic = "obj_活动_领取奖励_1_inTest_default",
				buttonstatus = 0;

			if (grou_activityGrowthGold.vars_.isBuy) {  //是否已经购买
				if (needLevel > game.vars_.userInfo.level) {  //等级不够
					receivepic = "obj_活动_未达成_default";
					buttonstatus = 1;
				} else {
					//这里需要判断是否已经领取
				}
			} else {
				receivepic = "obj_成长基金_未购买_字_default";
				buttonstatus = 0;
			}
			game.configs.config_activityGrowthGold[Number(cell) + 1] = {
				"id": Number(cell) + 1,
				"goldnum": gold,
				"needlevel": needLevel,
				"singleneedvip": 0,
				"needlevelDec": needlevelDec,
				"needpeople": 0,
				"singleneedvipdec": 0,
				"receivepic": "",
				"buttonstatus": buttonstatus
			}
		}
	} else {  //全民福利

	}





