/**
 * PetActionItem_friend
 */



if (self.state == 0) {
    var nameStr;
    if (self.select_id == 1) {
        nameStr = "喂食";
    } else if (self.select_id == 2) {
        nameStr = "玩耍";
    } else if (self.select_id == 3) {
        nameStr = "探索";
    } else if (self.select_id == 4) {
        nameStr = "倾听";
    } else if (self.select_id == 5) {
        nameStr = "猜灯谜";
    } else if (self.select_id == 6) {
        nameStr = "送礼物";
    }
    game.scripts["al_scr_AddTip_1"](null, null, nameStr + "冷却中", "layer1");
    return;
}




//刷新钱数
function RefreshPowerGoldStoneHandle(stone, gold) {

    game.scripts["al_scr_TouchPet"](null, null, game.vars_.CurryPetID);
    if (stone) {
        game.vars_.playInfoJson.stone = stone;
    }
    if (gold) {
        game.vars_.playInfoJson.gold = gold;
    }
    game.scripts["al_scr_RefreshPowerGoldStoneText"](null, null);
}
//计算在帮好友喂养倾听后 增加的属性
function CalPlus(_typeId) {
    var _typeData = game.configs.interaction_pet[_typeId];
    var data_类别 = { 'grow': "成长值", 'mood': "心情值", 'food': "饱食度", 'intimacy': "亲密度" };
    var data_key = Object.keys(data_类别)
    var show_text = [];
    var _index = 0;
    for (var i = 0; i < data_key.length; i++) {
        var _value = Number(_typeData[data_key[i]]);
        if (_value) {
            if (_index == 0) {
                show_text.push(data_类别[data_key[i]] + "+" + "<font  color='#fa0505'>" + _value + "</font>" + "点 ");
            } else {
                show_text.push(data_类别[data_key[i]] + "+" + "<font  color='#fa0505'>" + _value + "</font>" + "点");
            }
            _index++;
        }
    }
    return show_text;
}

// 诱拐  等获得的奖励
function CalPlus_reward(_rewardData, _actionObj) {
    //game.vars_.dropList = [];
    var configProp = game.configs.prop;
    for (var i in _rewardData) {
        //var _temp = {};
        var _type = Number(_rewardData[i].type);
        var _id = Number(_rewardData[i].id);
        var _num = Number(_rewardData[i].num);
        _temp.id = _id;
        _temp.type = _type;
        _temp.num = _num;
        //game.vars_.dropList.push(_temp);
        if (i == 0) {
            _actionObj.objects['txt_friendPet_4'].text = _num;
            _actionObj.objects['obj_Icon_Gold_1'].changeSprite("obj_" + configProp[_id].smallIcon + "_default");
        } else {
            _actionObj.objects['txt_friendPet_3'].text = _num;
            _actionObj.objects['obj_Icon_Gold'].changeSprite("obj_" + configProp[_id].smallIcon + "_default");
        }
        if (_id == 100) {
            game.vars_.playInfoJson.gold = _num;
        }
        if (_id == 114) {
            game.vars_.playInfoJson.currency = _num;
        }
        if (_id == 115) {
            game.vars_.playInfoJson.flowergold = _num;
        }
    }
    game.scripts["al_scr_RefreshPowerGoldStoneText"](null, null);
}
//好友    喂养 诱拐等弹出 
function popReward_action(whichAction, rewardData) {
    var groupName = ['PetActionRemind_food', 'PetActionRemind_steal', 'PetActionRemind_listen', 'PetActionRemind_fail'];
    var actionObj = qyengine.instance_create(0, 0, groupName[whichAction], {
        "type": groupName[whichAction],
        "id": groupName[whichAction],
        "zIndex": 10,
        "layer": "layer0"
    });
    switch (whichAction) {
        case 0: //喂养
            var text_feed = CalPlus[3];
            var showtext1 = "好友宠物";
            if (text_feed.length == 1) {
                showtext1 = showtext1 + text_feed[0];
            } else {
                showtext1 = showtext1 + text_feed[0] + text_feed[1];
            }
            actionObj.objects['txt_friendPet_1'].text = showtext1;
            CalPlus_reward(rewardData, actionObj);
            break;
        case 1:   //诱拐

            break;
        case 2:   //倾听
            break;
        case 3:   //失败
            break;
        default:
            break;
    }
}

//喂养宠物 
function FeetPetHandle() {
    function callBack() {
        console.log(arguments[1]);
        if (arguments[1] == true) {
            game.scripts["al_scr_SetTipsPanel"](null, null, 1, arguments[2]);
            if ('feedTime' in arguments[2]) {
                game.vars_.petData[game.vars_.CurryPetID]["feedTime"] = arguments[2].feedTime;
            }
            game.vars_.petData[game.vars_.CurryPetID]["growVal"] = arguments[2].growVal;
            if ('moodVal' in arguments[2]) {
                game.vars_.petData[game.vars_.CurryPetID]["moodVal"] = arguments[2].moodVal;
            }
            game.vars_.petData[game.vars_.CurryPetID]["satietiy"] = arguments[2].satietiy;
            RefreshPowerGoldStoneHandle(arguments[2].stone, arguments[2].gold);
            //game.scripts["al_scr_SetTipsPanel"](null, null,1);
            //来自friend
            if (game.vars_.friendpet) {
                popReward_action(0, arguments[2].reward);

            }
            game.scripts["al_scr_SetPetDialogue"](null, null, 1);
        } else {
            console.log(arguments[2].code);
            game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
        }
        game.scripts["al_scr_gameloadDestroy"](null, null);
    }
    game.scripts["al_scr_gameloadCreate"](null, null);
    if (game.vars_.friendpet) {
        QyRpc.friendPetFeed(game.vars_.nowFriendUid, game.vars_.CurryPetID, callBack);
    } else {
        QyRpc.feedPet(game.vars_.CurryPetID, callBack);
    }

}


//玩耍
function PlayPetHandle() {
    function callBack() {
        console.log(arguments[1]);
        if (arguments[1] == true) {
            game.scripts["al_scr_SetTipsPanel"](null, null, 2, arguments[2]);
            game.vars_.petData[game.vars_.CurryPetID]["playerTime"] = arguments[2].playerTime;
            game.vars_.petData[game.vars_.CurryPetID]["growVal"] = arguments[2].growVal;
            game.vars_.petData[game.vars_.CurryPetID]["moodVal"] = arguments[2].moodVal;
            game.vars_.petData[game.vars_.CurryPetID]["satietiy"] = arguments[2].satietiy;
            RefreshPowerGoldStoneHandle(arguments[2].stone, arguments[2].gold);

            game.scripts["al_scr_SetPetDialogue"](null, null, 2);

        } else {
            console.log(arguments[2].code);
            game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
        }
        game.scripts["al_scr_gameloadDestroy"](null, null);
    }
    game.scripts["al_scr_gameloadCreate"](null, null);
    QyRpc.palyerPet(game.vars_.CurryPetID, callBack);
}



//探索
function ExplorePetHandle() {


    function callBack() {
        console.log(arguments[1]);
        if (arguments[1] == true) {

            game.scripts["al_scr_SetTipsPanel"](null, null, 3, arguments[2]);
            game.vars_.petData[game.vars_.CurryPetID]["exploreTime"] = arguments[2].exploreTime;

            game.vars_.petData[game.vars_.CurryPetID]["satietiy"] = arguments[2].satietiy;
            game.vars_.petData[game.vars_.CurryPetID]["growVal"] = arguments[2].growVal;
            game.vars_.petData[game.vars_.CurryPetID].exploreReward = 0;
            RefreshPowerGoldStoneHandle(arguments[2].stone, arguments[2].gold);

        } else {
            console.log(arguments[2].code);
            game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
        }
        game.scripts["al_scr_gameloadDestroy"](null, null);
    }
    game.scripts["al_scr_gameloadCreate"](null, null);
    QyRpc.explorePet(game.vars_.CurryPetID, callBack);
}


//倾听
function ListenPetHandle() {
    function callBack() {
        console.log(arguments[1]);
        if (arguments[1] == true) {
            game.scripts["al_scr_AddTip_1"](null, null, "亲密度+" + (arguments[2].intimacy - game.vars_.petData[game.vars_.CurryPetID]["intimacyVal"]), "layer1");
            game.vars_.petData[game.vars_.CurryPetID]["listenTime"] = getConfig("pet_money", 4, "cd");
            game.vars_.petData[game.vars_.CurryPetID]["intimacyVal"] = arguments[2].intimacy;
            RefreshPowerGoldStoneHandle(arguments[2].stone, arguments[2].gold);
            game.scripts["al_scr_SetPetDialogue"](null, null, 4);

        } else {
            console.log(arguments[2].code);
            game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
        }
        game.scripts["al_scr_gameloadDestroy"](null, null);
    }
    game.scripts["al_scr_gameloadCreate"](null, null);
    QyRpc.listenPet(game.vars_.CurryPetID, callBack);
}



//猜灯谜
function GuessPetHandle() {
    if (game.vars_.petData[game.vars_.CurryPetID].guessTime > 0) {
        game.scripts["al_scr_AddTip_1"](null, null, "猜灯谜冷却中!", "layer1");
        return;
    }
    var needGoldText = self.objects.grouPetActionItemUseMoney.objects.petPlayUseMoneyNumText.text;
    if (needGoldText && game.vars_.playInfoJson.gold < Number(needGoldText)) {
        game.scripts["al_scr_AddTip_1"](null, null, "金币不足！", "layer1");
        return;
    }

    qyengine.instance_create(150, 0, 'PetGuessPanel', { "type": 'PetGuessPanel', "id": 'PetGuessPanel', "zIndex": 9, "layer": "layer0", });
    game.scripts["al_scr_PetGuessPanelInit"](null, null);

}



//送礼物
function GivePetHandle() {
    function callBack() {
        console.log(arguments[1]);
        if (arguments[1] == true) {
            game.scripts["al_scr_AddTip_1"](null, null, "亲密度+" + (arguments[2].intimacy - game.vars_.petData[game.vars_.CurryPetID]["intimacyVal"]), "layer1");
            game.vars_.petData[game.vars_.CurryPetID]["intimacyVal"] = arguments[2].intimacy;
            game.vars_.petData[game.vars_.CurryPetID]["giveGiftTime"] = getConfig("pet_money", 6, "cd");
            RefreshPowerGoldStoneHandle(arguments[2].stone, arguments[2].gold);
            game.scripts["al_scr_SetPetDialogue"](null, null, 5);

        } else {
            console.log(arguments[2].code);
            game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
        }
        game.scripts["al_scr_gameloadDestroy"](null, null);
    }
    game.scripts["al_scr_gameloadCreate"](null, null);
    QyRpc.giveGiftPet(game.vars_.CurryPetID, callBack);
}

/*
var needVipLv = getConfig("pet_money", self.select_id, "viplevel");
if (game.vars_.playInfoJson.vipLevel < needVipLv) {
    var activeName = getConfig("pet_money", self.select_id, "name");
    game.scripts["al_scr_AddTip_2"](null, null, "贵族" + needVipLv + "开启" + activeName + "功能,是否前往充值？", "layer1", "obj_ChestPrepaidBtn", "obj_ChestPrepaidBtn", "去充值");
    return;
}
*/

if (self.select_id == 1) {
    FeetPetHandle();

} else if (self.select_id == 2) {
    PlayPetHandle();

} else if (self.select_id == 3) {

    if (game.vars_.petData[game.vars_.CurryPetID].exploreCd > 0) {
        game.scripts["al_scr_AddTip_1"](null, null, "探索冷却中!", "layer1");
        return;
    }

    //心情
    if (game.vars_.petData[game.vars_.CurryPetID].moodVal <= 50) {
        game.scripts["al_scr_AddTip_1"](null, null, "宠物心情值大于50才能探索！", "layer1");
        return;
    } else if (game.vars_.petData[game.vars_.CurryPetID].moodVal > 50 && game.vars_.petData[game.vars_.CurryPetID].moodVal < 80) {
        qyengine.instance_create(150, 0, 'grou_exploreTipsPanel', { "type": 'grou_exploreTipsPanel', "id": 'grou_exploreTipsPanel', "zIndex": 9, "layer": "layer0", });
        return;
    } else {
        ExplorePetHandle();

        return;
    }



} else if (self.select_id == 4) {
    ListenPetHandle();

} else if (self.select_id == 5) {
    GuessPetHandle();

} else if (self.select_id == 6) {
    GivePetHandle();

}












/**
 *               SetPetDialogue
 */
//设置 对话ID  id
//game.vars_.CurryPetID

var randData = Math.ceil(Math.random() * 10);
var dialogueIndex = randData % getConfig("pet_dialogue", 1, "dialogue").split("|").length;
var dialogueMoodOrOvereat = randData % 2;
var dialogueStr = "";

function ChuckDialogueIDHandle() {
    var dialogueID = "";
    if (id != null) {
        dialogueID = id;
        return dialogueID;
    }
    //如果饿死了
    if (game.vars_.petData[game.vars_.CurryPetID].satietiy <= 0) {
        dialogueID = 12;
        return dialogueID;
    }

    var cardinalityNum = getConfig("pet", game.vars_.CurryPetID, "grow").split(";")[game.vars_.petData[game.vars_.CurryPetID].level - 1];
    if (cardinalityNum == "-1") {
        cardinalityNum = getConfig("pet", game.vars_.CurryPetID, "grow").split(";")[game.vars_.petData[game.vars_.CurryPetID].level - 2];
    }

    //如果可以升级
    if (game.vars_.petData[game.vars_.CurryPetID].growVal > parseInt(cardinalityNum)) {
        dialogueID = 13;
        return dialogueID;
    }
    //判断是不是人型
    if (game.vars_.petData[game.vars_.CurryPetID].level >= 3) {
        if (dialogueMoodOrOvereat == 1) {
            dialogueID = 4;
        } else {
            dialogueID = 5;
        }

        return dialogueID;

    }



    if (dialogueMoodOrOvereat) {
        //心情对话
        if (game.vars_.petData[game.vars_.CurryPetID].moodVal && game.vars_.petData[game.vars_.CurryPetID].moodVal > 80) {
            dialogueID = 9;
            return dialogueID;
        } else if (game.vars_.petData[game.vars_.CurryPetID].moodVal && game.vars_.petData[game.vars_.CurryPetID].moodVal > 50 && game.vars_.petData[game.vars_.CurryPetID].moodVal <= 80) {
            dialogueID = 10;
            return dialogueID;
        } else if (game.vars_.petData[game.vars_.CurryPetID].moodVal != undefined && game.vars_.petData[game.vars_.CurryPetID].moodVal >= 0 && game.vars_.petData[game.vars_.CurryPetID].moodVal <= 50) {
            dialogueID = 11;
            return dialogueID;
        }
    } else {

        //饱食度对话
        if (game.vars_.petData[game.vars_.CurryPetID].satietiy > 80) {
            dialogueID = 6;
            return dialogueID;
        } else if (game.vars_.petData[game.vars_.CurryPetID].satietiy > 50 && game.vars_.petData[game.vars_.CurryPetID].satietiy <= 80) {
            dialogueID = 7;
            return dialogueID;
        } else if (game.vars_.petData[game.vars_.CurryPetID].satietiy > 0 && game.vars_.petData[game.vars_.CurryPetID].satietiy <= 50) {
            dialogueID = 8;
            return dialogueID;
        }

    }
    return 3;
}
if (game.vars_.petData[game.vars_.CurryPetID].isAdopt == 0) {
    qyengine.guardId("petChildhoodDialogueText").text = "我这么可爱,你还不赶紧领回家？";
    qyengine.guardId("petAdultDialogueText").text = "我这么可爱,你还不赶紧领回家？";
    qyengine.guardId("petDicText").text = "我这么可爱,你还不赶紧领回家？";
} else {
    var diaID = ChuckDialogueIDHandle();
    console.log("*****" + diaID);
    console.log("*****" + dialogueIndex);
    dialogueStr = getConfig("pet_dialogue", diaID, "dialogue").split("|")[dialogueIndex];
    qyengine.guardId("petChildhoodDialogueText").text = dialogueStr;
    qyengine.guardId("petAdultDialogueText").text = dialogueStr;
}



