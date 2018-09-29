/**
 * Button_SuitType
 */

/**
* Button_SuitType   args；self.vars_.type  ,changePage
*/
//判断是否有新获得标签
var fashionTable = game.configs.fashion;
var faceTable = game.configs.face;
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
        var fashionIdArr = suitTable[_id].fashionId.toString().split("|");
        for (var i = 0; i < fashionIdArr.length; i++) {
            if (!arguments.callee(fashionIdArr[i])) {
                return 0;
            }
        }
        return 1;
    }

    return game.vars_.bagList.cloth[_id] ? game.vars_.bagList.cloth[_id] : 0;
}
//是否是新手服装
function judgeInNewMan(_id) {
    var newManSuit = JSON.parse(game.configs.misc[1].value);
    return (newManSuit[getConfig("suitType", game.vars_.curChangeType, "name")] == _id) || newManSuit[getConfig("suitType_face", game.vars_.curChangeType, "name")] == _id;
}

if (type <= 0)
    return;






var index = 0;
var arr = [];

game.vars_.curChangeType = type;
if (game.vars_.curChangeType != 101) {
    var suitArr = ["grou_mySuitBtn", "grou_mySuitEmpty", "grou_ChangeSuitLock"];
    for (var k = 0; k < suitArr.length; k++) {
        qyengine.forEach(function () {
            this.destroy();
        }, suitArr[k]);
    }
}
var tujian = function () {
    var configRecommond = game.configs.recommend[1];
    var recommend_fashion = configRecommond.fashion == -1 ? 0 : configRecommond.fashion.split("|"),
        recommend_suit = configRecommond.suit == -1 ? 0 : configRecommond.suit.split("|");
    if (recommend_fashion) {
        for (var i = 0; i < recommend_fashion.length; i++) {
            var property = getConfig("fashion", recommend_fashion[i], "propertyInfo");
            var itemName = getConfig("fashion", recommend_fashion[i], "name");
            var itemInfo = getConfig("fashion", recommend_fashion[i], "info");
            var isSearchCondition = current_game.scripts['al_scr_' + "filterClothesByTextOrProperty"].call(this, undefined, this, property, itemName, itemInfo);
            if (!isSearchCondition) {
                continue;
            }

            var isNew = judgeIsNew(recommend_fashion[i]);
            var unGet = judgeInBag(recommend_fashion[i]);
            arr[index] = [parseInt(recommend_fashion[i]), Number(fashionTable[recommend_fashion[i]].quality), isNew, unGet];
            index++;
        }
    }
    for (var i = 0; i < recommend_suit.length; i++) {
        var property = getConfig("suit", recommend_suit[i], "propertyInfo");
        var itemName = getConfig("suit", recommend_suit[i], "name");
        var itemInfo = getConfig("suit", recommend_suit[i], "dec");
        var isSearchCondition = current_game.scripts['al_scr_' + "filterClothesByTextOrProperty"].call(this, undefined, this, property, itemName, itemInfo);
        if (!isSearchCondition) {
            continue;
        }
        var unGet = 0;//judgeInBag(recommend_suit[i]);
        arr[index] = [parseInt(recommend_suit[i]), Number(suitTable[recommend_suit[i]].quality), false, unGet];
        index++;
    }

    return arr;
};
var suitPage = function () {
    for (var i in suitTable) {
        if (parseInt(suitTable[i].id) == 4802) {
            continue;
        }
        var property = getConfig("suit", suitTable[i].id, "propertyInfo");
        var itemName = getConfig("suit", suitTable[i].id, "name");
        var itemInfo = getConfig("suit", suitTable[i].id, "dec");
        var isSearchCondition = current_game.scripts['al_scr_' + "filterClothesByTextOrProperty"].call(this, undefined, this, property, itemName, itemInfo);
        if (!isSearchCondition) {
            continue;
        }

        var suitType = suitTable[i].type;
        if (type == 101 && suitType == 1) {
            arr[index] = [parseInt(suitTable[i].id), Number(suitTable[i].quality), false, 0];
            index++;
        } else if (type == 103 && suitType == 2) {
            arr[index] = [parseInt(suitTable[i].id), Number(suitTable[i].quality), false, 0];
            index++;
        }
    }
    return arr;
};

var tuijian_face = function () {
    var configRecommond = game.configs.recommend[2],
        recommend_fashion = configRecommond.face.split("|");
    if (recommend_fashion) {
        for (var i = 0; i < recommend_fashion.length; i++) {
            var property = getConfig("face", recommend_fashion[i], "propertyInfo");
            var itemName = getConfig("face", recommend_fashion[i], "name");
            var itemInfo = getConfig("face", recommend_fashion[i], "info");
            var isSearchCondition = current_game.scripts['al_scr_' + "filterClothesByTextOrProperty"].call(this, undefined, this, property, itemName, itemInfo);
            if (!isSearchCondition) {
                continue;
            }
            var isNew = judgeIsNew(recommend_fashion[i]);
            var unGet = judgeInBag(recommend_fashion[i]);
            arr[index] = [Number(recommend_fashion[i]), Number(faceTable[recommend_fashion[i]].quality), isNew, unGet];
            index++;
        }
    }

};

//推荐或者套装
if (type >= 100) {
    switch (type) {
        case 100:
            tujian();
            current_game.scripts['al_scr_' + "clothesPressChange"].call(this, undefined, this, arr);
            break;
        case 101:
            current_game.scripts['al_scr_' + "Button_MySuit"].call(this, undefined, this);
            //suitPage();
            break;
        case 102:
            tuijian_face();
            current_game.scripts['al_scr_' + "clothesPressChange"].call(this, undefined, this, arr);
            break;
        case 103:
            suitPage();
            break;
        default:
            break;
    }

    return;
}

//遍历道具表,符合当前服装类型的加入数组
var tableList = null;
if (grou_clothesPressPanel.vars_.faceOrClothes == undefined || grou_clothesPressPanel.vars_.faceOrClothes == 1) {
    tableList = game.configs.fashion/*game.vars_.bagList.cloth*/;
} else {
    tableList = game.configs.face;
}

for (var id in tableList) {
    var property = getConfig("fashion", id, "propertyInfo") || getConfig("face", id, "propertyInfo");
    var itemName = getConfig("fashion", id, "name") || getConfig("face", id, "name");
    var itemInfo = getConfig("fashion", id, "info") || getConfig("face", id, "info");
    var itemType = getConfig("fashion", id, "type") || getConfig("face", id, "type");
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

    var isSearchCondition = current_game.scripts['al_scr_' + "filterClothesByTextOrProperty"].call(this, undefined, this, property, itemName, itemInfo);

    if (!isSearchCondition) {
        continue;
    }

    var idType = function () {
        if ((getConfig("fashion", id, "type") && getConfig("fashion", id, "type") == type) || (getConfig("face", id, "type") && getConfig("face", id, "type") == type)) {
            return true;
        } else {
            return false;
        }
    };

    if (idType()) {
        if (judgeInNewMan(id)) {
            continue;
        }
        var quality = getConfig("fashion", id, "quality") || getConfig("face", id, "quality");
        var isNew = judgeIsNew(id);
        var unGet = judgeInBag(id);
        if (game.vars_.searchCondition == 1 && !unGet) {
            continue;
        }
        if (game.vars_.searchCondition == 2 && unGet) {
            continue;
        }

        var tempArr = [parseInt(id), quality, isNew, unGet];
        arr[index] = tempArr;
        index++;
    }
}

//排序:quality大的靠前,quality相同的情况下id小的靠前   后期更改
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

//计算总页数
current_game.scripts['al_scr_' + "clothesPressChange"].call(this, undefined, this, arr);




if (self.id.indexOf("txt_cropParkShiFei_time")) {
    self.currentSprite.style.font = "normal 800 24px/1.1 serif";
    self.setStroke("#663300", 4);
} else {
    self.currentSprite.style.font = "normal 800 24px/1.1 serif";
    self.setStroke("#663300", 4);
}


/**
 * whenStatusIsOne
 */
var table = game.configs.prop;
//先创建黑色的蒙版
qyengine.instance_create(510, 640, "obj_landBlackBg", {
    "type": "obj_landBlackBg",
    "id": "obj_landBlackBg",
    "zIndex": grou_cropParkPanel.zIndex + 1,
    "layer": "layer0"
});
var posX = self.currentSprite.worldTransform.tx + self.width / 2; //- gmx_.grou_fertilizeInLandPanel.defaultOpt.size.width/2 ;
var posY = grou_fertilizeInLandPanel.y = grou_cropLandItem_8.currentSprite.worldTransform.ty - grou_fertilizeInLandPanel.height;
var resultObj = qyengine.instance_create(posX, posY, "grou_fertilizeInLandPanel", {
    "type": "grou_fertilizeInLandPanel",
    "id": "grou_fertilizeInLandPanel",
    "zIndex": grou_cropParkPanel.zIndex + 1,
    "layer": "layer0"
});
var iconObj = qyengine.guardId("grou_fertilizeInLand").objects['obj_fertilize_0'];
var iconObj_1 = qyengine.guardId("grou_fertilizeInLand_1").objects['obj_plantation_home_14_1_1'];
var iconObj_2 = qyengine.guardId("grou_fertilizeInLand_2").objects['obj_plantation_home_14_1_2'];
var idTo = { 120: iconObj, 121: iconObj_1, 129: iconObj_2 };
for (var j in idTo) {
    idTo[j].changeSprite("obj_" + table[j].icon + "_default");
}
resultObj.vars_.touchLandId = self.vars_.itemId;


var propIdArr = [120, 121, 129];
for (var i = 0; i < 3; i++) {
    if (i == 0) {
        var parentObj = resultObj.objects['grou_fertilizeInLand'];
        var numObj = parentObj.objects['txt_cropParkShiFei'];
        var timeObj = parentObj.objects['txt_cropParkShiFei_time'];
    } else {
        var parentObj = resultObj.objects['grou_fertilizeInLand_' + i];
        var numObj = parentObj.objects['txt_cropParkShiFei_' + i];
        var timeObj = parentObj.objects['txt_cropParkShiFei_time_' + i];
    }
    var num = 0;
    if (game.vars_.playInfoJson.propItem[propIdArr[i]]) {
        num = game.vars_.playInfoJson.propItem[propIdArr[i]];
    }
    numObj.text = num;
    var time = Number(table[propIdArr[i]].time3) / 3600;
    timeObj.text = time + "小时";
}


qyengine.pay.WeChatPay



current_game.scripts['al_scr_' + "hideRechargeTip"].call(this, undefined, this);
return;




//notGoodStateBySeed
//obj_plantation_home_14_2


/**
 * notGoodStateBySeed
 */


/**
 * notGoodStateBySeed   obj   envirState
 */

var envirStateSprite = { "-1": "plantation_home_06", 0: "plantation_home_06_2", 1: "plantation_home_06_1" };
obj.objects['obj_plantation_home_06'].changeSprite("obj_" + envirStateSprite[envirState] + "_default");
switch (Number(envirState)) {
    case -1:
        obj.objects['grou_wateringBtn'].hide();
        break;
    case 0:  //杂草
        obj.objects['grou_wateringBtn'].show();
        obj.objects['grou_wateringBtn'].objects['obj_plantation_home_14_6'].changeSprite("obj_plantation_home_14_5_default");
        break;
    case 1:
        obj.objects['grou_wateringBtn'].show();
        obj.objects['grou_wateringBtn'].objects['obj_plantation_home_14_6'].changeSprite("obj_plantation_home_14_6_default");
        break;
    default:
        break;
}

if (state && state == 2) {
    obj.objects['grou_wateringBtn'].show();
    obj.objects['grou_wateringBtn'].objects['obj_plantation_home_14_6'].changeSprite("obj_plantation_home_14_4_default");
}

obj.objects['grou_wateringBtn'].vars_.parentObj = obj;






/**
 * faceAndSuitBtn
 */
/**
 * faceAndSuitBtn    妆容 服饰 保存按钮的切换事件
 */

var whitchType = { 0: 21, 1: 100 };
var idArr = { "grou_clothesPressBtn_face": 0, "grou_clothesPressBtn_dress": 1, "grou_clothesPressBtn_keep": 2 };
var whitchBtn = 1;
whitchBtn = idArr[self.id];
if (self && self.id && grou_clothesPressPanel.vars_.faceOrClothes != whitchBtn && whitchBtn != 2) {

    for (var i in idArr) {
        qyengine.guardId(i).dispatchMessage({
            "type": "message",
            "message": "changeBtnSprite",
            "argument0": (i == self.id)
        });
    }
}

if (grou_clothesPressPanel.vars_.faceOrClothes == whitchBtn && whitchBtn != 2) {
    return;
} else {
    //grou_clothesPressPanel.vars_.faceOrClothes = whitchBtn;
    if (whitchBtn == 2) {
        current_game.scripts['al_scr_' + "saveSuit"].call(this, undefined, this);
    } else {
        grou_clothesPressPanel.vars_.faceOrClothes = whitchBtn;
        current_game.scripts['al_scr_' + "Change_Init"].call(this, undefined, this);
    }
}


/**
 * Change_Init
 */

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



//装容||服饰
var tabStartValue = true;//2;
var tableSort = game.configs.wardrobe;
var tableConfig = game.configs.suitType
if (grou_clothesPressPanel.vars_.faceOrClothes != undefined && grou_clothesPressPanel.vars_.faceOrClothes == 0) {
    tabStartValue = false;//1;
    tableConfig = game.configs.suitType_face;
}
//创建推荐和套装
function createClothesTabScro() {

    for (var k = 0; k < 2; k++) {
        if (qyengine.guardId("grou_clothesPressBtn_Type_" + k) && !qyengine.guardId("grou_clothesPressBtn_Type_" + k).destroyed_) {
            qyengine.grou_clothTypeInstance = qyengine.guardId("grou_clothesPressBtn_Type_" + k);
        } else {
            qyengine.grou_clothTypeInstance = qyengine.instance_create(0, 0, "grou_clothesPressBtn_Type", {
                "type": "grou_clothesPressBtn_Type",
                "id": "grou_clothesPressBtn_Type_" + k,
                "zIndex": 0
            });
        }
        qyengine.grou_clothTypeInstance.show();
        if (!tabStartValue) {
            qyengine.guardId("grou_clothesPressBtn_Type_" + k).vars_.type = 102 + k;
        } else {
            qyengine.guardId("grou_clothesPressBtn_Type_" + k).vars_.type = 100 + k;
        }

        var markIcon = k == 0 ? "obj_Chest_home_06_1" : "obj_Chest_home_06_2";
        qyengine.guardId("grou_clothesPressBtn_Type_" + k).objects.obj_Chest_home_07_1.changeSprite(markIcon + "_default");
        var textTypeName = ["推荐", "套装"];
        qyengine.guardId("grou_clothesPressBtn_Type_" + k).objects.txt_closeDress_common_typeName.text = textTypeName[k];
        if (selectTab != undefined && 100 + k == selectTab) {
            qyengine.guardId("grou_clothesPressBtn_Type_" + k).objects.obj_Chest_home_02.show();
            qyengine.guardId("grou_clothesPressBtn_Type_" + k).objects['txt_closeDress_common_typeName'].hide();
            qyengine.guardId("grou_clothesPressBtn_Type_" + k).objects.obj_Chest_home_07_1.show();
        } else {
            if (k == 0) {
                qyengine.guardId("grou_clothesPressBtn_Type_" + k).objects.obj_Chest_home_02.show();
                qyengine.guardId("grou_clothesPressBtn_Type_" + k).objects.obj_Chest_home_07_1.show();
                qyengine.guardId("grou_clothesPressBtn_Type_" + k).objects['txt_closeDress_common_typeName'].hide();
            } else {
                qyengine.guardId("grou_clothesPressBtn_Type_" + k).objects.obj_Chest_home_02.hide();
                qyengine.guardId("grou_clothesPressBtn_Type_" + k).objects.obj_Chest_home_07_1.hide();
                qyengine.guardId("grou_clothesPressBtn_Type_" + k).objects['txt_closeDress_common_typeName'].show();
            }
        }
        scro_clothesType.appendChild("grou_clothesPressBtn_Type_" + k, 1, -1, 0, k, false, true);

    }

    var index = k;
    for (var i in tableSort) {
        if (i == 1 || i == 2) {
            continue;
        }

        var markType = tabStartValue ? tableSort[i].fashion : tableSort[i].face;
        if (tableConfig[markType].type == 5) {
            //continue;
        }
        var cell = tableConfig[markType];

        if (qyengine.guardId("grou_clothesPressBtn_Type_" + index) && !qyengine.guardId("grou_clothesPressBtn_Type_" + index).destroyed_) {
            qyengine.grou_clothTypeInstance = qyengine.guardId("grou_clothesPressBtn_Type_" + index);
        } else {
            qyengine.grou_clothTypeInstance = qyengine.instance_create(0, 0, "grou_clothesPressBtn_Type", {
                "type": "grou_clothesPressBtn_Type",
                "id": "grou_clothesPressBtn_Type_" + index,
                "zIndex": 0
            });
        }
        qyengine.grou_clothTypeInstance.show();
        qyengine.guardId("grou_clothesPressBtn_Type_" + index).vars_.type = markType;
        qyengine.guardId("grou_clothesPressBtn_Type_" + index).objects.obj_Chest_home_07_1.changeSprite(cell.icon + "_default");
        if (selectTab != undefined && markType == selectTab) {
            qyengine.guardId("grou_clothesPressBtn_Type_" + index).objects.obj_Chest_home_02.show();
            qyengine.guardId("grou_clothesPressBtn_Type_" + index).objects.obj_Chest_home_07_1.show();
            qyengine.guardId("grou_clothesPressBtn_Type_" + index).objects['txt_closeDress_common_typeName'].hide();
        } else {
            qyengine.guardId("grou_clothesPressBtn_Type_" + index).objects.obj_Chest_home_02.hide();
            qyengine.guardId("grou_clothesPressBtn_Type_" + index).objects.obj_Chest_home_07_1.hide();
            qyengine.guardId("grou_clothesPressBtn_Type_" + index).objects['txt_closeDress_common_typeName'].show();
        }
        qyengine.guardId("grou_clothesPressBtn_Type_" + index).objects['txt_closeDress_common_typeName'].text = cell.comment;
        scro_clothesType.appendChild("grou_clothesPressBtn_Type_" + index, 1, -1, 0, index, false, true);
        index++;

    }
}

qyengine.forEach(function () {
    this.hide();
}, "grou_clothesPressBtn_Type");
createClothesTabScro();
//默认展示推荐
current_game.scripts['al_scr_' + "Button_SuitType"].call(this, undefined, this, !tabStartValue ? 102 : 100);
if (grou_clothesPressPanel.vars_.faceOrClothes == undefined) {
    current_game.scripts['al_scr_' + "SetClothesBottonPos"].call(this, undefined, this);
    grou_clothesPressPanel.vars_.faceOrClothes = 1;
}






if (window.adapt && window.adapt.isCanJoinQQGroup) {
    window.adapt.JoinQQGroup();
}


if (self.currentSprite.parent.qyobj.id != "grou_cropLandItem_guide") {

}




/**
 * overLevelCondition
 */


/**
 * overLevelCondition  tab通关条件相关~   1畅玩卡 2制作
 */
if (tab == 1) {
    grou_overLevelCondition.objects['obj_Chest_hint_02_1'].x = 397;
    grou_overLevelCondition.objects.grou_goodPlay.show();
    grou_overLevelMake.hide();
    var tab = game.configs.suit;
    var index = 0;
    for (var i in tab) {
        if (tab[i].card == 1) {
            index++;
            game.configs.config_goodPlayCard[index] = {
                "id": index,
                "icon": "obj_" + tab[i].icon + "_default",
                "itemId": i,
                "name": tab[i].name
            };
        }
    }
    qyengine.guardId("scro_goodPlay").refreshRelations();
    grou_overLevelCondition.vars_.itemLength = index;
    if (index > 3) {
        grou_overLevelCondition.startTimeline();
    }
    if (game.vars_.playInfoJson.questCard) {
        qyengine.guardId("grou_oneKeyPlayBtn").objects['txt_closeDress_common_oneKey'].text = "已开卡";
    }

} else {
    grou_overLevelCondition.objects['obj_Chest_hint_02_1'].x = 622;
    grou_overLevelCondition.objects.grou_goodPlay.hide();
    grou_overLevelMake.show();
    //var overLevelData = game.configs.quest[game.vars_.selectQuestId];
    var overLevelData = game.configs.quest[grou_clothesPressPanel.vars_.selectQuestId];

    if (overLevelData.successTip == -1) {
        game.configs.config_overLevelMust = {};
    } else {
        var overLevelClothes = overLevelData.successTip.toString().split("#");
        var isSuit = null;
        for (var i = 0; i < overLevelClothes.length; i++) {
            if (game.configs.suit[overLevelClothes[i]]) {
                var clothesTable = game.configs.suit[overLevelClothes[i]];
                isSuit = 1;
            } else {
                var clothesTable = game.configs.fashion[overLevelClothes[i]] || game.configs.face[overLevelClothes[i]];
                isSuit = 0;
            }
            var getWayText = current_game.scripts['al_scr_' + "getClothTapText"].call(this, undefined, this, overLevelClothes[i]);

            game.configs.config_overLevelMust[i + 1] = {
                "id": i + 1,
                "name": clothesTable.name,
                "icon": "obj_" + clothesTable.icon + "_default",
                "getWayText": isSuit ? "" : getWayText,
                "getWay": isSuit,
                "itemId": overLevelClothes[i]
            }
        }
    }
    qyengine.guardId("scro_overLevelMust").refreshRelations();
    if (overLevelData.perfectTip == -1) {
        game.configs.config_overLevelPerfect = {};
    } else {
        var overLevelClothes = overLevelData.perfectTip.toString().split("#");
        for (var i = 0; i < overLevelClothes.length; i++) {
            var clothesTable = game.configs.fashion[overLevelClothes[i]] || game.configs.face[overLevelClothes[i]] || game.configs.suit[overLevelClothes[i]];
            var getNum = getclothesNum(overLevelClothes[i]);
            var getWayText = "";
            if (!getNum) {
                getWayText = current_game.scripts['al_scr_' + "getClothTapText"].call(this, undefined, this, overLevelClothes[i]);
            }
            game.configs.config_overLevelPerfect[i + 1] = {
                "id": i + 1,
                "name": clothesTable.name,
                "icon": "obj_" + clothesTable.sicon + "_default",
                "num": getNum ? getNum : "",
                "getWayText": getWayText,
                "getWay": overLevelClothes[i],
                "itemId": overLevelClothes[i]
            }
        }
        qyengine.guardId("scro_overlevelPerfect").refreshRelations();
    }
}

function getclothesNum(_markId) {
    var needLookNumTab = game.configs.fashion[overLevelClothes[i]] || game.configs.face[overLevelClothes[i]];
    if (needLookNumTab) {
        if (game.vars_.playInfoJson.bagList.cloth[_markId]) {
            return game.vars_.playInfoJson.bagList.cloth[_markId].num;
        } else {
            return 0;
        }
    } else {
        return 0;
    }
}




/**
 * OpenChange
 */

//OpenChange  打开衣柜

console.time("衣柜");
qyengine.instance_create(0, 0, "grou_gameLoadingBg", { "type": "grou_gameLoadingBg", "id": "grou_gameLoadingBg", "zIndex": 10000, "layer": "layer1" });
setTimeout(function () {
    var obj = qyengine.getInstancesByType("grou_gameLoadingBg");
    if (obj.length > 0) {
        obj[0].destroy();
    }

}, 600);

var suit = game.vars_.playInfoJson.suit[index];
var length = Object.keys(suit).length;
if (length > 0)
    game.vars_.changeSuitIndex = index;
else
    game.vars_.changeSuitIndex = game.vars_.playInfoJson.dressIndex;

game.scripts["al_scr_CommonInstanceCreate"](null, null, "grou_clothesPressPanel");
//10衣柜   0剧情换装
if (game.vars_.intoChangeType == 10) {
    grou_clothesPressPanel.objects['grou_clothesPressBack_hint'].hide();

} else {
    grou_clothesPressPanel.objects['grou_clothesPressBack_hint'].show();
    //记录关卡 退出清零
    if (!grou_clothesPressPanel.vars_.selectQuestId) {
        grou_clothesPressPanel.vars_.selectQuestId = game.vars_.selectQuestId;
    }
}
grou_clothesPressPanel.appendChild("grou_playerDress", 520, 550);
grou_playerDress.setScale(0.46, 0.46);
grou_playerDress.show();
game.scripts["al_scr_Change_Init"](null, null);

game.vars_.playerCurrentCloths = JSON.parse(JSON.stringify(game.vars_.playInfoJson.suit[game.vars_.changeSuitIndex]));
current_scene.vars_.searchProperty = [0, 0];
current_scene.vars_.tempProperty = [0, 0];

console.timeEnd("衣柜");







/**
 * grou_seedItem
 */
console.log("释放~~~~~~~");


var tabType = qyengine.guardId("grou_cropBotton_left").vars_.nowTab;
if (self.vars_.isLongPress) {
    judgeRelease();
    qyengine.guardId("grou_seedItem_grow").destroy && qyengine.guardId("grou_seedItem_grow").destroy();
    self.vars_.isLongPress = false;
}

function judgeRelease() {
    var growObj = qyengine.guardId("grou_seedItem_grow");
    var landObj = null;

    qyengine.forEach(function () {
        //console.log("growObjX-----", growObj.currentSprite.worldTransform.tx);
        //console.log("growObjY-----", growObj.currentSprite.worldTransform.ty);
        var judgeX = (growObj.currentSprite.worldTransform.tx + growObj.width / 2) >= this.currentSprite.worldTransform.tx && (growObj.currentSprite.worldTransform.tx + growObj.width / 2) <= (this.currentSprite.worldTransform.tx + this.width);
        var judgeY = (growObj.currentSprite.worldTransform.ty + growObj.height / 2) >= this.currentSprite.worldTransform.ty && (growObj.currentSprite.worldTransform.ty + growObj.height / 2) <= (this.currentSprite.worldTransform.ty + this.height);
        if (judgeX && judgeY) {
            landObj = this;
            game.vars_.landObj = landObj;
            console.log(this.vars_);
            return;
        }
    }, "grou_cropLandItem");

    if (landObj) {
        if (tabType == 4 && game.vars_.lastSelectObj.vars_.itemId == 122 && landObj.vars_.status == 0) {
            current_game.scripts['al_scr_' + "AddTip_1"].call(this, undefined, this, "没用种植不能铲除!");
            return;
        }
        //判断是否是可操作的道具
        var isCanOperate = function () {
            var miscTable = game.configs.misc[23].value.split("|");
            if (miscTable.indexOf(game.vars_.lastSelectObj.vars_.itemId.toString()) > -1) {
                return true;
            } else {
                return false;
            }
        };

        //可种植
        if (landObj.vars_.status == 0 && tabType == 5) {
            function callBack() {
                if (arguments[1]) {
                    current_game.scripts['al_scr_' + "growOneLand"].call(this, undefined, this, game.vars_.landObj, arguments[2].cellId, arguments[2].seedId);
                    //原种子数量需要减少1
                    var lastTextObj = game.vars_.lastSelectObj.objects['txt_cropParkCommon'];
                    var nowText = Number(lastTextObj.text) - 1;
                    if (nowText) {
                        lastTextObj.text = nowText;
                    } else {
                        lastTextObj.text = "";
                    }
                    game.vars_.lastSelectObj.vars_.num = nowText;

                    game.vars_.lastSelectObj.dispatchEvent({
                        "type": "message",
                        "message": "judgeHSL"
                    });

                    //稍后等陈政封装
                    current_game.scripts['al_scr_' + "RemoveFromBag"].call(this, undefined, this, arguments[2].seedId, 1, 1);

                } else {
                    console.log(arguments[2].code);
                    game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
                }
                game.scripts["al_scr_gameloadDestroy"](null, null);
            }
            game.scripts["al_scr_gameloadCreate"](null, null);
            QyRpc.growPlant(landObj.vars_.itemId, game.vars_.lastSelectObj.vars_.itemId, callBack);
        } else if (landObj.vars_.status == 1 && tabType == 4 && isCanOperate) {
            //使用道具 施肥或者铲除
            useProp();
        }
        //不可种植提示
        var tipSeed = { 3: "此土地已有作物", 2: "土地未解锁,请先解锁", 1: "此土地已有种子" };
        tipSeed[landObj.vars_.status] && tabType == 5 && current_game.scripts['al_scr_' + "AddTip_1"].call(this, undefined, this, tipSeed[landObj.vars_.status]);
        //不可施肥提示
        someTip(landObj.vars_.status, tabType, landObj, game.vars_.lastSelectObj.vars_.itemId);
    }

}

function someTip(objStatus, tabType, landObj, objSeedId) {
    var tipSeed_铲除 = { 3: "不能铲除！", 0: "请先种植", 2: '土地未解锁,请先解锁' };
    var tipSeed_施肥 = { 3: "作物已经成熟,不需要施肥！", 0: "请先种植", 2: '土地未解锁,请先解锁' };
    if (objSeedId == 122) {
        tipSeed_铲除[landObj.vars_.status] && tabType == 4 && current_game.scripts['al_scr_' + "AddTip_1"].call(this, undefined, this, tipSeed_铲除[landObj.vars_.status]);
    } else {
        tipSeed_施肥[landObj.vars_.status] && tabType == 4 && current_game.scripts['al_scr_' + "AddTip_1"].call(this, undefined, this, tipSeed_施肥[landObj.vars_.status]);
    }
}

function useProp() {
    var killPlant = true;
    var allData = qyengine['grou_cropParkPanelInstance'].vars_.data[game.vars_.landObj.vars_.itemId];
    function propBack() {
        if (arguments[1]) {
            if (killPlant) {
                allData.envirState = -1;
                allData.seedId = -1;
                allData.state = 0;
                allData.time = 0;
            } else {
                //施肥
                for (var i in arguments[2]) {
                    allData[i] = arguments[2][i];
                }

                var useItemId = game.vars_.lastSelectObj.vars_.itemId;
                var jianShaoTime = game.configs.prop[useItemId].time3 / 3600;
                current_game.scripts['al_scr_' + "createCommonHint"].call(this, undefined, this, false, "施肥成功，药草成熟时间\n缩短" + jianShaoTime + "小时");
                //稍后等陈政封装
                current_game.scripts['al_scr_' + "RemoveFromBag"].call(this, undefined, this, game.vars_.lastSelectObj.vars_.itemId, 1, 1);
            }

            current_game.scripts['al_scr_' + "initLandInfo"].call(this, undefined, this);
            var lastTextObj = game.vars_.lastSelectObj.objects['txt_cropParkCommon'];
            var nowText = Number(lastTextObj.text) - 1;
            if (nowText) {
                lastTextObj.text = nowText;
            } else {
                lastTextObj.text = "";
            }
        } else {
            console.log(arguments[2].code);
            game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
        }
        game.scripts["al_scr_gameloadDestroy"](null, null);
    }
    game.scripts["al_scr_gameloadCreate"](null, null);
    if (game.vars_.lastSelectObj.vars_.itemId == 122) {
        QyRpc.killPlant(game.vars_.landObj.vars_.itemId, propBack);
    } else {
        killPlant = false;
        var state = allData.state;
        QyRpc.applyFertilizer(game.vars_.landObj.vars_.itemId, state, game.vars_.lastSelectObj.vars_.itemId, -1, propBack);
    }
}





/**
 * commonBuyGoodsSuccess
 */
var key = game.configs.prop[itemId].gatWay.split("|");

function callBack() {
    console.log(arguments);
    if (arguments[1]) {
        //current_game.scripts['al_scr_' + "AddTip_1"].call(this, undefined, this, "购买成功");
        game.vars_.playInfoJson.stone = arguments[2].stone;
        game.vars_.playInfoJson.gold = arguments[2].gold
        game.scripts["al_scr_RefreshPowerGoldStoneText"](null, null);
        //InitAwardBg
        game.vars_.dropList = [];
        var isOwn = !(game.vars_.playInfoJson.seedItem[arguments[2].propId] || game.vars_.playInfoJson.propItem[arguments[2].propId] || game.vars_.playInfoJson.herbItem[arguments[2].propId]);

        game.vars_.dropList.push({ 'id': arguments[2].propId, 'type': 1, 'num': arguments[2].num, 'isOwn': isOwn });
        game.scripts["al_scr_AddToBag"](null, null, game.vars_.dropList[i]);
        game.scripts["al_scr_InitAwardBg"](null, null, game.vars_.dropList, "layer1", 0, false);
        //是否在种植界面~
        var cropParkArr = qyengine.getInstancesByType("grou_cropParkPanel");
        if (cropParkArr.length && cropParkArr[0].isVisible) {
            var table = game.configs.prop[arguments[2].propId].type;
            var jsonMark = { 4: game.vars_.playInfoJson.propItem, 5: game.vars_.playInfoJson.seedItem };
            qyengine.guardId("grou_cropPropType_" + table).dispatchMessage({
                "type": "message",
                "message": "setSeedTab"
            });
            var fertilizeInLandPanelArr = qyengine.getInstancesByType("grou_fertilizeInLandPanel");
            if (fertilizeInLandPanelArr.length) {
                fertilizeInLandPanelArr.dispatchMessage({
                    "type": "message",
                    "message": "updateData"
                });
            }
        } else {
            current_game.scripts['al_scr_' + "ifBuyGoodPlaySuc"].call(this, undefined, this);
        }

    } else {
        console.log(arguments[2].code);
        game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
    }
    game.scripts["al_scr_gameloadDestroy"](null, null);
}
game.scripts["al_scr_gameloadCreate"](null, null);
QyRpc.buyProp(itemId, num, callBack);





/**
 * grou_fertilizeInLandPanel 的updateData消息
 */
current_game.scripts['al_scr_whenStatusIsOne'].call(this, undefined, this);

/**
 * whenStatusIsOne
 */

//先创建黑色的蒙版

qyengine.getInstancesByType("obj_landBlackBg").length == 0 && qyengine.instance_create(510, 640, "obj_landBlackBg", {
    "type": "obj_landBlackBg",
    "id": "obj_landBlackBg",
    "zIndex": grou_cropParkPanel.zIndex + 1,
    "layer": "layer0"
});

if (qyengine.getInstancesByType("grou_fertilizeInLandPanel").length == 0) {
    var posX = current_scene.width / 2; //- gmx_.grou_fertilizeInLandPanel.defaultOpt.size.width/2 ;
    var posY = self.y - gmx_.grou_fertilizeInLandPanel.defaultOpt.size.height;
    var resultObj = qyengine.instance_create(posX, posY, "grou_fertilizeInLandPanel", {
        "type": "grou_fertilizeInLandPanel",
        "id": "grou_fertilizeInLandPanel",
        "zIndex": grou_cropParkPanel.zIndex + 1,
        "layer": "layer0"
    });
    resultObj.vars_.touchLandId = self.vars_.itemId;
} else {
    var resultObj = qyengine.guardId("grou_fertilizeInLandPanel");
}




var table = game.configs.prop;
var propIdArr = [120, 121, 129];
for (var i = 0; i < 3; i++) {
    if (i == 0) {
        var parentObj = resultObj.objects['grou_fertilizeInLand'];
        var numObj = parentObj.objects['txt_cropParkShiFei'];
        var timeObj = parentObj.objects['txt_cropParkShiFei_time'];
    } else {
        var parentObj = resultObj.objects['grou_fertilizeInLand_' + i];
        var numObj = parentObj.objects['txt_cropParkShiFei_' + i];
        var timeObj = parentObj.objects['txt_cropParkShiFei_time_' + i];
    }
    var num = 0;
    if (game.vars_.playInfoJson.propItem[propIdArr[i]]) {
        num = game.vars_.playInfoJson.propItem[propIdArr[i]];
    }
    numObj.text = num;
    var time = Number(table[propIdArr[i]].time3) / 3600;
    timeObj.text = time + "小时";
}






/**
 * AchievementGetBtnClick
 */
game.scripts["al_scr_SendMsgReceiveAchievementAward"](null, null, game.vars_.selectAchievementTabId, id);



//**************************************************
//动作序列 SendMsgReceiveAchievementAward  领取成就奖励
//参数1 成就页签tabId
//参数2 成就id
//**************************************************
function callBack() {
    console.log(arguments[1]);
    if (arguments[1] == true) {
        console.log(arguments[2]);
        //game.scripts["al_scr_SendMsgAchievementDate"](null,null,game.vars_.selectAchievementTabId);	
        game.vars_.dropList = arguments[2].award;
        //game.vars_.playInfoJson.gold = arguments[2].gold;
        game.vars_.playInfoJson.crystal = arguments[2].crystal;
        game.vars_.playInfoJson.power = arguments[2].power;
        //game.vars_.playInfoJson.stone = arguments[2].stone;
        //添加掉落物品进虚拟背包
        for (var i = 0; i < game.vars_.dropList.length; ++i) {
            game.scripts["al_scr_AddToBag"](null, null, game.vars_.dropList[i]);
        }
        game.scripts["al_scr_RefreshPowerGoldStoneText"](null, null);
        game.scripts["al_scr_InitAwardBg"](null, null, game.vars_.dropList, "layer1", 0, false);

        game.vars_.finishAchievementIds.push(Number(id));
        //维护数据 
        game.vars_.achievementData.hasdone = game.vars_.finishAchievementIds;
        game.scripts["al_scr_CommonInstanceCreate"](null, null, "grou_achievementListBg");
        game.scripts["al_scr_InitAchievementList"](null, null);


    } else {
        console.log(arguments[2].code);
        game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
    }

    game.scripts["al_scr_gameloadDestroy"](null, null);
}
game.scripts["al_scr_gameloadCreate"](null, null);
QyRpc.receiveAchievementAward(tabId, id, callBack);




/**
 * InitAchievementList
 */

//**************************************************
//初始化成就列表页
//动作序列 InitAchievementList
//**************************************************
qyengine.guardId("AchievementListTitle").changeSprite("obj_" + getConfig("achievementTabs", game.vars_.selectAchievementTabId, "titleIcon") + "_default");

var achievementIdList = getConfig("achievementTabs", game.vars_.selectAchievementTabId, "achievementId");
if (achievementIdList.indexOf("|") > 0) {
    var items = achievementIdList.split("|");
    achievementIdList = achievementIdList.split("|");


    game.configs.config_achievement = {};

    var canReceiveList = [];

    for (var i = 0; i < achievementIdList.length; ++i) {
        for (var j = 0; j < game.vars_.finishAchievementIds.length; ++j) {
            var finishId = game.vars_.finishAchievementIds[j];
            if (Number(achievementIdList[i]) == finishId) {
                items.splice(items.indexOf(achievementIdList[i]), 1);
                break;
            }
        }
    }

    for (var i = 0; i < achievementIdList.length; ++i) {
        var id = achievementIdList[i];
        var info = getConfig("achievement", id);
        var msgTag = getConfig("config_msg", info.type, "msgTag");
        var msgData = game.vars_.achievementData[msgTag];
        if (game.vars_.finishAchievementIds.indexOf(Number(id)) < 0 && msgData >= info.condition)  //可领取
        {
            items.splice(items.indexOf(id), 1);
            canReceiveList.push(id);
        }
    }

    game.configs.config_achievement = [];
    game.scripts["al_scr_InitScroAchievementData"](null, null, canReceiveList, true, false);
    game.scripts["al_scr_InitScroAchievementData"](null, null, items, false, false);
    game.scripts["al_scr_InitScroAchievementData"](null, null, game.vars_.finishAchievementIds, false, true);

    qyengine.guardId("scro_achievementList").refreshRelations();
}



/**
 * InitScroAchievementData
 */

//**************************************************
//初始化成就列表页
//动作序列 InitScroAchievementData
//参数1 arr 数组
//参数1 getState false不显示  true 显示
//参数2 finishState  false不显示  true显示
//**************************************************
for (var i = 0; i < arr.length; ++i) {
    var achievementInfo = getConfig("achievement", arr[i]);

    //奖励数量
    var award = achievementInfo.award;
    if (award.indexOf("|") > 0) {
        award = award.split("|");
    }

    //数据获取
    var msgTag = getConfig("config_msg", achievementInfo.type, "msgTag");
    var msgData = game.vars_.achievementData[msgTag];

    //进度条
    var barWidth = qyengine.guardType("obj_Ui_progress_bar_04_default").defaultOpt.size.width;

    //获取物品的ICON
    var awardIcon = getConfig("prop", achievementInfo.award.split("|")[1], "icon");
    game.configs.config_achievement.push({
        id: arr[i],
        awardIcon: "obj_" + achievementInfo.awardIcon + "_default",
        num: "×" + award[2],
        title: achievementInfo.title,
        info: achievementInfo.info,
        progress: msgData + "/" + achievementInfo.condition,
        imageWidth: Math.min(msgData / achievementInfo.condition, 1) * barWidth,
        getState: getState,
        finishState: finishState,
        achievementIcon: "obj_" + awardIcon + "_default",
    });
}





/**
 * whenStatusIsOne
 */
var table = game.configs.prop;
//先创建黑色的蒙版
qyengine.getInstancesByType("obj_landBlackBg").length == 0 && qyengine.instance_create(510, 640, "obj_landBlackBg", {
    "type": "obj_landBlackBg",
    "id": "obj_landBlackBg",
    "zIndex": grou_cropParkPanel.zIndex + 1,
    "layer": "layer0"
});

if (qyengine.getInstancesByType("grou_fertilizeInLandPanel").length == 0) {
    var posX = current_scene.width / 2; //- gmx_.grou_fertilizeInLandPanel.defaultOpt.size.width/2 ;
    var posY = self.y - gmx_.grou_fertilizeInLandPanel.defaultOpt.size.height;
    var resultObj = qyengine.instance_create(posX, posY, "grou_fertilizeInLandPanel", {
        "type": "grou_fertilizeInLandPanel",
        "id": "grou_fertilizeInLandPanel",
        "zIndex": grou_cropParkPanel.zIndex + 1,
        "layer": "layer0"
    });
    resultObj.vars_.touchLandId = self.vars_.itemId;

} else {
    var resultObj = qyengine.guardId("grou_fertilizeInLandPanel");
}

current_game.scripts['al_scr_fertilizeInLandUpdate'].call(this, undefined, this);

var propIdArr = [120, 121, 129];
for (var i = 0; i < 3; i++) {
    if (i == 0) {
        var parentObj = resultObj.objects['grou_fertilizeInLand'];
        var numObj = parentObj.objects['txt_cropParkShiFei'];
        var timeObj = parentObj.objects['txt_cropParkShiFei_time'];
    } else {
        var parentObj = resultObj.objects['grou_fertilizeInLand_' + i];
        var numObj = parentObj.objects['txt_cropParkShiFei_' + i];
        var timeObj = parentObj.objects['txt_cropParkShiFei_time_' + i];
    }
    var num = 0;
    if (game.vars_.playInfoJson.propItem[propIdArr[i]]) {
        num = game.vars_.playInfoJson.propItem[propIdArr[i]];
    }
    numObj.text = num;
    var time = Number(table[propIdArr[i]].time3) / 3600;
    timeObj.text = time + "小时";
}



/**
 * fertilizeInLandUpdate
 */
var table = game.configs.prop;
var fertilizeInLandObj = qyengine.guardId("grou_fertilizeInLandPanel");
if (qyengine.getInstancesByType("grou_fertilizeInLandPanel").length && fertilizeInLandObj && !fertilizeInLandObj.destroyed_) {
    var selectLandObj = qyengine.guardId("grou_cropLandItem_" + fertilizeInLandObj.vars_.touchLandId)
    fertilizeInLandObj.objects['txt_cropParkShiFei_calTime'].text = selectLandObj.objects['txt_cropParkCommon_matureTime'].text;
    var seedId = qyengine["grou_cropParkPanelInstance"].vars_.data[selectLandObj.vars_.itemId].seedId;

    if (seedId == -1) {
        console.error("需要查看seedId:", seedId);
        return;
    }
    var childArr = table[seedId].prop.split("|");
    var childName = table[childArr[0]].name;
    fertilizeInLandObj.objects['txt_cropParkShiFei_seedName'].text = childName;
    fertilizeInLandObj.objects['txt_cropParkShiFei_changLiangNum'].text = childArr[1];
}




/**
 * tm_cropPark
 */

/**
* tm_cropPark  时间轴
*/
var needStop = true;
qyengine.forEach(function () {
    if ("matureTime" in this.vars_ && this.vars_.matureTime > 0) {
        var dataObj = qyengine['grou_cropParkPanelInstance'].vars_.data[this.vars_.itemId];
        this.vars_.matureTime--;
        this.objects['txt_cropParkCommon_matureTime'].text = current_game.scripts['al_scr_' + "secondConvertTime"].call(this, undefined, this, this.vars_.matureTime);
        dataObj.time = this.vars_.matureTime;
        needStop = false;

        current_game.scripts['al_scr_fertilizeInLandUpdate'].call(this, undefined, this);
        if (this.vars_.matureTime <= 0) {
            current_game.scripts['al_scr_' + "initCropPark"].call(this, undefined, this, 1);
        }
    }
}, "grou_cropLandItem");

if (needStop) {
    self.stopTimeline();
    //current_game.scripts['al_scr_' + "initCropPark"].call(this, undefined, this, 1);
}













var numObjArr = ["txt_cropParkShiFei", "txt_cropParkShiFei_1", "txt_cropParkShiFei_2"];
if (self.id.indexOf("txt_cropParkShiFei_time")) {
    self.currentSprite.style.font = "normal 800 24px/1.1 serif";
    self.setStroke("#663300", 4);
} else if (numObjArr.indexOf(self.id) > -1) {
    self.currentSprite.style.font = "normal 800 24px/1.1 serif";
    self.setStroke("#663300", 4);
} else if (self.id == "txt_cropParkShiFei_shengYu" || self.id == "txt_cropParkShiFei_changLiang") {
    self.currentSprite.style.font = "normal 800 26px/1.1 serif";
    self.setStroke("#666666", 4);
}






/**
 * scro_makeMedicineItem_cell   的创建事件
 */
//新手引导的唯一标识符 scro_makeMedicineItem_cell_guide
var parentId = self.currentSprite.parent.qyobj.id;

var getItemId = function () {
    if (parentId == "grou_makeMedicineItem_guide") {
        return 1;
    }
    var arr = self.id.split("_");
    return arr[arr.length - 1];
}

var data = game.configs.medicine[getItemId()].prop.split("#");


var propTable = game.configs.prop;
for (var i = 0; i < data.length; i++) {
    if (parentId != "grou_makeMedicineItem_guide" && qyengine.guardId("grou_makeMedicineItem_cell_" + getItemId() + "_" + i) && !qyengine.guardId("grou_makeMedicineItem_cell_" + getItemId() + "_" + i).destroyed_) {
        var result = qyengine.guardId("grou_makeMedicineItem_cell_" + getItemId() + "_" + i);
    } else {
        var result = qyengine.instance_create(0, 0, "grou_makeMedicineItem_cell", {
            "type": "grou_makeMedicineItem_cell",
            "id": "grou_makeMedicineItem_cell_" + getItemId() + "_" + i,
            "zIndex": 1
        });
    }

    self.appendChild(result.id, 0, 5, 0, i, false, true);
    var dataCell = data[i].split("|");
    var haveNum = current_game.scripts["al_scr_" + "getPropNum"].call(this, undefined, this, 1, Number(dataCell[0]));
    result.objects['obj_plantation_home_13_1'].changeSprite("obj_" + propTable[dataCell[0]].icon + "_default");
    result.objects['txt_makeMedi_have'].text = haveNum;
    result.objects['txt_makeMedi_need'].text = "/" + dataCell[1];
    if (i == data.length - 1) {
        result.objects['txt_makeMediPlus'].hide();
    }
    result.vars_.itemId = dataCell[0];
}


/**
 * openMedicinePanel
 */
/**
 * openMedicinePanel
 */
current_game.scripts['al_scr_' + "CommonInstanceCreate"].call(this, undefined, this, 'grou_makeMedicinePanel');
var medicineTable = game.configs.config_makeMedicine;
var medicineTableData = game.configs.medicine;
if (!Object.keys(medicineTable).length) {
    for (var i in medicineTableData) {
        var title = medicineTableData[i].name + "（" + medicineTableData[i].dec + "）";
        medicineTable[i] = {
            "id": i,
            "title": title,
            "level": medicineTableData[i].level,
            "itemId": i,
            "price": medicineTableData[i].price,
            "scroId": "makeMedicineItem_cell_" + i
        };
    }
    qyengine.guardId("scro_makeMedicine").refreshRelations();
} else {
    for (var i in medicineTableData) {
        if (qyengine.guardId("makeMedicineItem_cell_" + i) && !qyengine.guardId("makeMedicineItem_cell_" + i).destroyed_) {
            qyengine.guardId("makeMedicineItem_cell_" + i).dispatchEvent({
                "type": "message",
                "message": "updateMedicineItem_cell"
            });
        }
    }
}

calGailv();
function calGailv() {
    function callBack() {
        console.log(arguments[2]);
        if (arguments[1]) {
            if (qyengine['grou_makeMedicinePanelInstance']) {
                var rate0 = Number(game.configs.misc[26].value);
                rate0 = (rate0.toFixed(4)) * 10000 / 100;
                var rate1 = Number(arguments[2].petRate);
                rate1 = (rate1.toFixed(4)) * 10000 / 100;
                var totalRate = Number(rate0) + Number(rate1);

                qyengine['grou_makeMedicinePanelInstance'].objects['txt_makeMedi_bate'].text = "成功率：" + totalRate + "%（基础" + rate0 + "%+" + "宠物" + rate1 + "%）";
                qyengine['grou_makeMedicinePanelInstance'].objects['txt_makeMedi_bate'].show();
            } else { console.error("需要查看~") }

        } else {
            console.log(arguments[2].code);
            game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
        }
        //game.scripts["al_scr_gameloadDestroy"](null, null);
    }
    //game.scripts["al_scr_gameloadCreate"](null, null);
    QyRpc.getMedicineRate(1, callBack);
}









/**
 * initCropPark
 */

/**
* 	initCropPark		种植园相关
*/
function callBack() {
    if (arguments[1]) {
        console.log(arguments);
        game.vars_.petPanel && grou_PetPanel.hide();
        createParkMovePanel();
        game.scripts["al_scr_CommonInstanceCreate"](null, null, "grou_cropParkPanel");
        //qyengine['createParkMovePanelInstance'].zIndex = qyengine['grou_cropParkPanelInstance'].zIndex;

        qyengine['grou_cropParkPanelInstance'].vars_.data = arguments[2].fieldCells;
        qyengine['grou_cropParkPanelInstance'].vars_.fireFriendId = arguments[2].fireFriendId;
        qyengine['grou_cropParkPanelInstance'].vars_.fireFriendTime = arguments[2].fireFriendTime;

        qyengine['grou_cropParkPanelInstance'].vars_.petRate = arguments[2].petRate;
        qyengine['grou_cropParkPanelInstance'].vars_.petSpeed = arguments[2].petSpeed;

        current_game.scripts['al_scr_' + "initLandInfo"].call(this, undefined, this);

        if (!fromTimeLine) {
            //默认是种子的tab界面
            if (!game.vars_.parkFriendTimeInit) {
                current_game.scripts['al_scr_' + "initSeedInfo"].call(this, undefined, this, 5);
            } else {
                game.vars_.parkFriendTimeInit = null;
            }
            current_game.scripts['al_scr_' + "initCropFriend"].call(this, undefined, this);

            current_game.scripts['al_scr_' + "changeParkPetStatus"].call(this, undefined, this);
        }
        //需要直接打开炼药界面~~
        if (game.vars_.openMedcine) {
            game.vars_.openMedcine = null;
            current_game.scripts['al_scr_' + "openMedicinePanel"].call(this, undefined, this);
        } else {
            qyengine["grou_makeMedicinePanelInstance"] && qyengine["grou_makeMedicinePanelInstance"].hide && qyengine["grou_makeMedicinePanelInstance"].hide();
        }
    } else {
        console.log(arguments[2].code);
        game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
    }
    game.scripts["al_scr_gameloadDestroy"](null, null);
}


game.scripts["al_scr_gameloadCreate"](null, null);
QyRpc.viewPlantGarden(-1, callBack);

function createParkMovePanel() {
    game.scripts["al_scr_CommonInstanceCreate"](null, null, "grou_parkMovePanel");
    qyengine['grou_parkMovePanelInstance'].x = 150 - ((current_scene.screenAdaptation && current_scene.screenAdaptation.x) || 0);
    /*
    if (qyengine['createParkMovePanelInstance']) {
        qyengine['createParkMovePanelInstance'].show();
        //qyengine['createParkMovePanelInstance'].zIndex=qyengine['grou_cropParkPanelInstance'].zIndex;
    } else {
        var info = getConfig("config_groupCreate_1", "grou_cropParkPanel");
        qyengine['createParkMovePanelInstance'] = qyengine.instance_create(info.x + 150, info.y, "grou_parkMovePanel", {
            "id": "grou_parkMovePanel",
            "zIndex": info.zIndex,
            "layer": info.layer
        });
    }
    */

}


