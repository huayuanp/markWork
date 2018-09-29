/**
 * grou_shopBuyPanel   的创建事件  grou_shopPanel.vars_.itemId
 */
game.vars_.shopBuyNum = 1;
//单价
game.vars_.shopBuyPrice = 0;
var itemId = game.vars_.touchBuyId;
var tableOne = game.configs.fashion[itemId] || game.configs.face[itemId];
var icon = tableOne.icon;
var priceArr = tableOne.price.split("|");
game.vars_.shopBuyPrice = Number(priceArr[2]);
qyengine.guardId("obj_shopBuyIcon").changeSprite("obj_" + icon + "_default", null, true);
var moneyIcon = game.configs.prop[priceArr[1]].icon;
qyengine.guardId("obj_shopBuyMoneyIcon").changeSprite("obj_" + moneyIcon + "_default", null, true);
qyengine.guardId("obj_shopBuyMoneyIcon").setScale(0.55, 0.55);

qyengine.guardId("txt_shopBuyNum").text = game.vars_.shopBuyNum;
qyengine.guardId("txt_shopBuyUseMoney").text = game.vars_.shopBuyNum * game.vars_.shopBuyPrice;


/**
 * Button_ShopSuit
 */
//Button_ShopSuit
var total = qyengine.getInstancesByType("grou_card_2").length;

for (var i = 0; i < total; i++) {
	if (qyengine.guardId("grou_shopCard_" + i) != null) {
		if (qyengine.guardId("grou_shopCard_" + i).vars_.itemId == itemId || (itemId == null && i == 0)) {
			itemId = qyengine.guardId("grou_shopCard_" + i).vars_.itemId;
			grou_shopPanel.vars_.itemId = qyengine.guardId("grou_shopCard_" + i).vars_.itemId;
			qyengine.guardId("grou_shopCard_" + i).vars_.isPressed = true;
			qyengine.guardId("obj_Ui_choice_" + i).show();
		} else {
			qyengine.guardId("grou_shopCard_" + i).vars_.isPressed = false;
			qyengine.guardId("obj_Ui_choice_" + i).hide();
		}
	}


}

if (isConfigKeywordExists(grou_shopPanel.vars_.infoName, itemId) && getConfig(grou_shopPanel.vars_.infoName, itemId, "type_prop") == 2) {
	for (var i = 0; i < 5; i++) {
		grou_shopClothInfo.objects["obj_quality_love_" + i].hide();

	}
	grou_shopClothInfo.objects["txt_clothName"].setText(getConfig("prop", itemId, "name"));
	var describe = getConfig("prop", itemId, "info");
	grou_shopClothInfo.objects["txt_clothDetailInfo"].setText(describe);
} else if (getConfig("fashionPlan", itemId)) {
	for (var i = 0; i < 5; i++) {

		grou_shopClothInfo.objects["obj_quality_love_" + i].hide();

	}
	grou_shopClothInfo.objects["txt_clothName"].setText(getConfig("fashionPlan", itemId, "name"));
	var describe = getConfig("fashionPlan", itemId, "info");
	grou_shopClothInfo.objects["txt_clothDetailInfo"].setText(describe);
} else {
	var quality = getConfig("fashion", itemId, "quality");
	for (var i = 0; i < 5; i++) {
		if (i <= quality - 1)
			grou_shopClothInfo.objects["obj_quality_love_" + i].show();
		else
			grou_shopClothInfo.objects["obj_quality_love_" + i].hide();


	}
	grou_shopClothInfo.objects["txt_clothName"].setText(getConfig("fashion", itemId, "name"));
	var describe = getConfig("fashion", itemId, "info");
	grou_shopClothInfo.objects["txt_clothDetailInfo"].setText(describe);
}
game.scripts["al_scr_ClothShowInit"](null, null, itemId);
grou_shopPanel.vars_.itemId = itemId;
game.vars_.touchBuyId = itemId;
grou_shopPanel.vars_.currentPriceType = getConfig(grou_shopPanel.vars_.infoName, itemId, "type");
if (game.vars_.shopIntoType == 1) {
	grou_shopPanel.vars_.currentPriceType = getConfig("pk_shop", itemId, "type");
} else if (game.vars_.shopIntoType == 5) {
	grou_shopPanel.vars_.currentPriceType = getConfig("flower_shop", itemId, "type");
}


/**
 * ShopInit
 */




console.log("shopInit");

if (qyengine.getInstanceCount("grou_shopBg") <= 0) {
	qyengine.instance_create(0, 0, "grou_shopBg", {
		"type": "grou_shopBg",
		"id": "grou_shopBg",
		"zIndex": 9
	});
} else {
	qyengine.guardId("grou_shopBg").show();
	grou_shopPanel.show();
}

game.vars_.shopPanelIsCreat = false;

if (type == null) {
	if (game.vars_.shopIntoType == 1) {
		//竞技场
		type = "1";
		grou_VIPtipsInfo.hide();
		//体验券的值
		qyengine.getInstancesByType("grou_experienceBg").length > 0 && grou_experienceBg.hide();
	} else if (game.vars_.shopIntoType == 5) {
		//百花
		if (openBuy) {
			type = game.configs.fashion[id].type.toString();
		} else {
			type = "1";
		}
		grou_VIPtipsInfo.hide();
		//体验券的值
		//体验券的值
		qyengine.getInstancesByType("grou_experienceBg").length > 0 && grou_experienceBg.hide();
	} else if (game.vars_.shopIntoType == 6) {
		//萤火
		if (openBuy) {
			type = game.configs.fashion[id].type.toString();
		} else {
			type = "1";
		}
		grou_VIPtipsInfo.hide();
		//体验券的值
		qyengine.getInstancesByType("grou_experienceBg").length > 0 && grou_experienceBg.hide();
	}
	else {
		type = "16";
		grou_VIPtipsInfo.show();
		//体验券的值
		if (qyengine.getInstancesByType("grou_experienceBg").length > 0) {
			if (!game.vars_.playInfoJson.vipJuan || game.vars_.playInfoJson.vipJuan <= 0) {
				grou_experienceBg.hide();
			} else {
				grou_experienceBg.show();
				grou_experienceBg.objects['txt_experience'].text = "x" + game.vars_.playInfoJson.vipJuan;
			}
		}
	}
}



//刷新当前页签的类型和种类
if (type != null && qyengine.getInstancesByType("grou_shopPanel").length <= 0) {
	qyengine.guardId("grou_shopPanel").vars_.type = game.vars_.shopIntoType;

	game.scripts["al_scr_RealignmentShopClothType"](null, null);

	//设置跳转的页签
	grou_shopPanel.vars_.currentClothType = type;


	//设置装备类型页签的滚动
	if (getConfig("toggeryType", grou_shopPanel.vars_.currentClothType, "order") >= 8) {
		qyengine.getInstancesByType("scro_shop_clothType")[0].scrollerTo(0, 5);

	} else {
		qyengine.getInstancesByType("scro_shop_clothType")[0].scrollerTo(0, -5);
	}


	//设置 卡片翻页
	var curryItemIndexPage = 0
	//查看当前的数据是在第几页
	curryItemIndexPage = game.scripts["al_scr_GetGoodsInThePageNum"](null, null, id);

	game.scripts["al_scr_SetShopType"](null, null, grou_shopPanel.vars_.currentClothType, curryItemIndexPage);

	//设置 点中的 服装卡
	game.scripts["al_scr_Button_ShopSuit"](null, null, id);
	game.scripts["al_scr_act_freshshopinfo"](null, null, grou_shopPanel.vars_.currentClothType);
	//game.scripts["al_scr_Button_ShopSuitType"](null,null,grou_shopPanel.vars_.currentClothType,id);

	if (openBuy) {
		if (grou_shopPanel.vars_.currentClothType != "16") {
			qyengine.instance_create(150, 0, "grou_shopBuyPanel", { "type": "grou_shopBuyPanel", "id": "grou_shopBuyPanel", "zIndex": 0 });
		} else {
			if (game.vars_.playInfoJson.vipLevel >= 1) {
				qyengine.instance_create(150, 0, "grou_shopBuyPanel", { "type": "grou_shopBuyPanel", "id": "grou_shopBuyPanel", "zIndex": 0 });
			} else {
				if (game.vars_.playInfoJson.vipJuan > 0) {
					current_game.scripts['al_scr_' + "vipQuanBuyGoods"].call(this, undefined, this);
				} else {
					qyengine.instance_create(150, 0, "grouDredgePanel", { "type": "grou_shopBuyPanel", "id": "grouDredgePanel", "zIndex": 0 });
				}
			}
		}
	}

	game.vars_.shopPanelIsCreat = true;
} else if (type != null && qyengine.getInstancesByType("grou_shopPanel").length > 0) {
	//设置跳转的页签
	grou_shopPanel.vars_.currentClothType = type;

	qyengine.guardId("grou_shopPanel").vars_.type = game.vars_.shopIntoType;

	game.scripts["al_scr_RealignmentShopClothType"](null, null);


	//设置装备类型页签的滚动
	if (getConfig("toggeryType", grou_shopPanel.vars_.currentClothType, "order") >= 8) {
		qyengine.getInstancesByType("scro_shop_clothType")[0].scrollerTo(0, 5);

	} else {
		qyengine.getInstancesByType("scro_shop_clothType")[0].scrollerTo(0, -5);
	}


	//设置 卡片翻页
	var curryItemIndexPage = 0
	//查看当前的数据是在第几页
	curryItemIndexPage = game.scripts["al_scr_GetGoodsInThePageNum"](null, null, id);

	game.scripts["al_scr_SetShopType"](null, null, grou_shopPanel.vars_.currentClothType, curryItemIndexPage);

	//设置 点中的 服装卡
	game.scripts["al_scr_Button_ShopSuit"](null, null, id);

	game.scripts["al_scr_act_freshshopinfo"](null, null, grou_shopPanel.vars_.currentClothType);
	//game.scripts["al_scr_Button_ShopSuitType"](null,null,grou_shopPanel.vars_.currentClothType,id);
	game.vars_.shopPanelIsCreat = true;


	if (openBuy) {
		if (grou_shopPanel.vars_.currentClothType != "16") {
			qyengine.instance_create(150, 0, "grou_shopBuyPanel", { "type": "grou_shopBuyPanel", "id": "grou_shopBuyPanel", "zIndex": 0 });

		} else {
			if (game.vars_.playInfoJson.vipLevel >= 1) {
				qyengine.instance_create(150, 0, "grou_shopBuyPanel", { "type": "grou_shopBuyPanel", "id": "grou_shopBuyPanel", "zIndex": 0 });
			} else {
				if (game.vars_.playInfoJson.vipJuan > 0) {
					current_game.scripts['al_scr_' + "vipQuanBuyGoods"].call(this, undefined, this);
				} else {
					qyengine.instance_create(150, 0, "grouDredgePanel", { "type": "grou_shopBuyPanel", "id": "grouDredgePanel", "zIndex": 0 });
				}
			}

		}
	}

} else if (qyengine.getInstancesByType("grou_shopPanel").length > 0) {
	game.scripts["al_scr_RealignmentShopClothType"](null, null);


	if (game.vars_.playInfoJson.vipLevel < 10) {
		grou_VIPtipsInfo.show();

		var vipRebateRes = getConfig("vip", Number(game.vars_.playInfoJson.vipLevel) + 1, "toggeryOff");
		vipRebate = vipRebateRes * 100;
		if (vipRebate % 10 == 0) {
			vipRebate = vipRebate / 10;
		}
		qyengine.guardId("VIPtipsInfoTitle").text = "贵宾" + (Number(game.vars_.playInfoJson.vipLevel) + 1) + "<font  color='#ffffff'>" + "特权商店全商品" + "</font>" + "<font  color='#ffff00'>" + vipRebate + "折" + '</font>' + "<font  color='#ffffff'>" + "优惠" + '</font>';


	} else {
		grou_VIPtipsInfo.hide();
	}

	if (openBuy) {
		if (grou_shopPanel.vars_.currentClothType != "16") {
			qyengine.instance_create(150, 0, "grou_shopBuyPanel", { "type": "grou_shopBuyPanel", "id": "grou_shopBuyPanel", "zIndex": 0 });

		} else {
			if (game.vars_.playInfoJson.vipLevel >= 1) {
				qyengine.instance_create(150, 0, "grou_shopBuyPanel", { "type": "grou_shopBuyPanel", "id": "grou_shopBuyPanel", "zIndex": 0 });
			} else {
				if (game.vars_.playInfoJson.vipJuan > 0) {
					current_game.scripts['al_scr_' + "vipQuanBuyGoods"].call(this, undefined, this);
				} else {
					qyengine.instance_create(150, 0, "grouDredgePanel", { "type": "grou_shopBuyPanel", "id": "grouDredgePanel", "zIndex": 0 });
				}
			}

		}
	}

	game.vars_.shopPanelIsCreat = true

}


/**
 * SetShopType
 */

grou_shopPanel.vars_.currentClothType = type;
grou_shopPanel.vars_.clothIndex = index;
//刷新服装类型按钮
for (var i = 0; i < game.vars_.openToggeryTypeArr.length; i++) {
	if ((game.vars_.openToggeryTypeArr[i] == type && type != 15) || (game.vars_.openToggeryTypeArr[i] == 18 && type == 15)) {
		qyengine.guardId("grou_shop_clothType_" + i).vars_.isPressed = true;
		qyengine.guardId("grou_shop_clothType_" + i).objects.obj_Ui_check_box.show();
	}
	else {
		qyengine.guardId("grou_shop_clothType_" + i).vars_.isPressed = false;
		qyengine.guardId("grou_shop_clothType_" + i).objects.obj_Ui_check_box.hide();
	}

}



//遍历服装表,符合当前服装类型的加入数组
var arr = [];
var configIndex = 0;
var cell = game.configs.toggery;
grou_shopPanel.vars_.infoName = "toggery";
if (game.vars_.shopIntoType == 1) {
	cell = game.configs.pk_shop;
	grou_shopPanel.vars_.infoName = "pk_shop";
} else if (game.vars_.shopIntoType == 5) {
	cell = game.configs.flower_shop;
	grou_shopPanel.vars_.infoName = "flower_shop";
} else if (game.vars_.shopIntoType == 2 && game.vars_.isDebug && game.vars_.startCurGuideId == 14) {
	cell = game.configs.fashionNoviceGuide;
	grou_shopPanel.vars_.infoName = "fashionNoviceGuide";
} else if (game.vars_.shopIntoType == 6) {
	cell = game.configs.pet_shop;
	grou_shopPanel.vars_.infoName = "pet_shop";
}
if (grou_shopPanel.vars_.currentClothType == 16) {

	cell = game.configs.toggeryVip;
	grou_shopPanel.vars_.infoName = "toggeryVip";
}


for (var id in cell) {
	if (type > 14) {
		if (type == 16) {
			//VIP商店
			arr[configIndex] = id;
			configIndex++;
		} else if (getConfig(grou_shopPanel.vars_.infoName, id, "type_prop") == 2 && type != 15) {
			arr[configIndex] = id;
			configIndex++;
		} else if (getConfig(grou_shopPanel.vars_.infoName, id, "type_prop") == 1 && game.configs.fashion[id].type == 15 && type == 15) {
			arr[configIndex] = id;
			configIndex++;
		}
	} else {
		if (getConfig(grou_shopPanel.vars_.infoName, id, "type_prop") == 3) {
			var planId = getConfig("fashionPlan", id, "fashionId");
			if (getConfig("fashion", planId, "type") == type) {
				arr[configIndex] = id;
				configIndex++;
			}
		} else {
			if (getConfig("fashion", id, "type") == type) {
				arr[configIndex] = id;
				configIndex++;
			}
		}
	}
}
grou_shopPanel.vars_.clothInfo = arr;



if (!grou_shopPanel.vars_.clothInfo) {
	grou_shopPanel.vars_.clothInfo = [];
}


if (grou_shopPanel.vars_.clothInfo.length <= 0) {
	for (var i = 0; i < 8; i++) {
		qyengine.guardId("grou_shopCard_" + i).hide();
	}
	var clothShow = qyengine.guardId("grou_clothShow");
	clothShow && clothShow.hide && clothShow.hide();

	var grou_shopClothInfo = qyengine.guardId("grou_shopClothInfo");
	grou_shopClothInfo && grou_shopClothInfo.hide && grou_shopClothInfo.hide();
	return;
}

if (index < 0 || index >= (grou_shopPanel.vars_.clothInfo.length % 8 >= 0 ? grou_shopPanel.vars_.clothInfo.length / 8 : grou_shopPanel.vars_.clothInfo.length / 8 + 1)) {
	return;
} else {

}

for (var i = 0; i < 8; i++) {
	if (grou_shopPanel.vars_.clothInfo.length < grou_shopPanel.vars_.clothIndex * 8 + i + 1) {
		qyengine.guardId("grou_shopCard_" + i).hide();
	} else {
		qyengine.guardId("grou_shopCard_" + i).show();
		var itemId = grou_shopPanel.vars_.clothInfo[grou_shopPanel.vars_.clothIndex * 8 + i];
		qyengine.guardId("grou_shopCard_" + i).vars_.itemId = itemId;
		qyengine.guardId("obj_Ui_choice_" + i).hide();

		if (getConfig(grou_shopPanel.vars_.infoName, itemId, "type_prop") == 2) {
			var iconStr = getConfig("prop", itemId, "icon");
			var nameStr = getConfig("prop", itemId, "name");
		} else if (getConfig(grou_shopPanel.vars_.infoName, itemId, "type_prop") == 3) {
			var iconStr = getConfig("fashionPlan", itemId, "icon");
			var nameStr = getConfig("fashionPlan", itemId, "name");
		} else {
			var iconStr = getConfig("fashion", itemId, "icon");
			var nameStr = getConfig("fashion", itemId, "name");
		}
		qyengine.guardId("obj_Icon_" + i).changeSprite("obj_" + iconStr + "_default");
		qyengine.guardId("txt_card_name_" + i).setText(nameStr);

		var priceType = getConfig(grou_shopPanel.vars_.infoName, itemId, "type");
		var price = getConfig(grou_shopPanel.vars_.infoName, itemId, "price");
		if (priceType == 1) {
			qyengine.guardId("obj_Icon_gold_" + i).show();
			qyengine.guardId("obj_Icon_stone_" + i).hide();
		} else if (priceType == 2) {
			qyengine.guardId("obj_Icon_gold_" + i).hide();
			qyengine.guardId("obj_Icon_stone_" + i).show();
			qyengine.guardId("obj_Icon_stone_" + i).changeSprite("obj_Icon_goods_1_default");
		} else if (priceType == 3) {
			qyengine.guardId("obj_Icon_gold_" + i).hide();
			qyengine.guardId("obj_Icon_stone_" + i).show();
			qyengine.guardId("obj_Icon_stone_" + i).changeSprite("obj_Icon_goods_3_default");
		} else if (priceType == 4) {
			qyengine.guardId("obj_Icon_gold_" + i).hide();
			qyengine.guardId("obj_Icon_stone_" + i).show();
			qyengine.guardId("obj_Icon_stone_" + i).changeSprite("obj_Icon_goods_4_default");
		} else if (priceType == 5) {
			qyengine.guardId("obj_Icon_gold_" + i).hide();
			qyengine.guardId("obj_Icon_stone_" + i).show();
			qyengine.guardId("obj_Icon_stone_" + i).changeSprite("obj_" + getConfig("prop", 118, "icon") + "_default");
		}


		qyengine.guardId("txt_clothPrice_" + i).setText(price);

		if (game.vars_.bagList.cloth[itemId] == undefined) {
			qyengine.guardId("obj_numBg_" + i).hide();
			qyengine.guardId("txt_clothNum_" + i).hide();
		} else {
			try {
				qyengine.guardId("obj_numBg_" + i).show();
				qyengine.guardId("txt_clothNum_" + i).show();
				qyengine.guardId("txt_clothNum_" + i).setText(game.vars_.bagList.cloth[itemId]);
			} catch (error) {
				console.log(error.message);
			}

		}




		if (game.vars_.playInfoJson.vipLevel >= 1 && grou_shopPanel.vars_.currentClothType == "16") {
			var vipRebateRes = getConfig("vip", game.vars_.playInfoJson.vipLevel, "toggeryOff");
			vipRebate = vipRebateRes * 100;
			if (vipRebate % 10 == 0) {
				vipRebate = vipRebate / 10;
			}
			var vipPrice = getConfig("toggeryVip", itemId, "price");

			qyengine.guardId("DiscountToggeryGroup_" + i).show();
			//刷新折扣
			qyengine.guardId("shopVipText_" + i).text = vipRebate + "折";
			//刷新价格
			qyengine.guardId("shopVipTextNow_" + i).text = Math.floor(vipPrice * vipRebateRes);
			qyengine.guardId("shopVipTextRes_" + i).text = vipPrice;
			qyengine.guardId("txt_clothPrice_" + i).hide();
		} else {
			qyengine.guardId("DiscountToggeryGroup_" + i).hide();
			qyengine.guardId("txt_clothPrice_" + i).show();

		}

		//打开的是百花
		if (game.vars_.shopIntoType == 5) {
			var unlock = getConfig("fashionPlan", itemId, "unlock");
			if (unlock > game.vars_.playInfoJson.level) {
				qyengine.guardId("obj_Ui_Level_" + i).show();
				qyengine.guardId("txt_textLevel_" + i).show();
				qyengine.guardId("txt_textLevel_" + i).setText(unlock + "级解锁");
			} else {
				qyengine.guardId("obj_Ui_Level_" + i).hide();
				qyengine.guardId("txt_textLevel_" + i).hide();
			}

		} else {

			var unlock = getConfig("fashionNoviceGuide", itemId, "unlock");
			if (unlock > game.vars_.playInfoJson.level) {
				qyengine.guardId("obj_Ui_Level_" + i).show();
				qyengine.guardId("txt_textLevel_" + i).show();
				qyengine.guardId("txt_textLevel_" + i).setText(unlock + "级解锁");
			} else {
				qyengine.guardId("obj_Ui_Level_" + i).hide();
				qyengine.guardId("txt_textLevel_" + i).hide();
			}
		}
		if (i == 0) {
			!qyengine.guardId("grou_clothShow").destroyed_ && qyengine.guardId("grou_clothShow").show();
			qyengine.guardId("grou_shopClothInfo").show();
			game.scripts["al_scr_Button_ShopSuit"](null, null, itemId);
			qyengine.guardId("obj_Ui_choice_" + i).show();
		}
	}
}


if (index <= 0) {
	grou_shopPanel.objects.grou_shop_arrowLeft.hide();
} else {
	grou_shopPanel.objects.grou_shop_arrowLeft.show();
}



if (grou_shopPanel.vars_.clothInfo.length == 0) {

	grou_shopPanel.objects.grou_shop_arrowRight.show();
}

if (index - Math.ceil(grou_shopPanel.vars_.clothInfo.length / 8) == 0 || index - Math.ceil(grou_shopPanel.vars_.clothInfo.length / 8) == -1) {

	grou_shopPanel.objects.grou_shop_arrowRight.hide();

} else {
	grou_shopPanel.objects.grou_shop_arrowRight.show();
}



/**
 * togetherDelFriend  	
 */
/**
 * togetherDelFriend
 */
var uid = self.vars_.data.uid;
function callBack() {
	if (arguments[1]) {
		current_game.scripts["al_scr_" + "openTogetherPlay"].call(this, undefined, this);
		grou_togetherDelAndUrgePanel.objects["grou_delAndUrgeShutBtn"].dispatchMessage({
			"type": "message",
			"message": "touchBtn"
		});
		game.scripts["al_scr_AddTip_1"](null, null, "删除成功！", "layer1");
	} else {
		console.log(arguments[2].code);
		game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
	}
}
game.scripts["al_scr_gameloadCreate"](null, null);
QyRpc.removePlayer(uid, callBack);


/**
 * Button_ShopSuit
 */
//Button_ShopSuit
var total = qyengine.getInstancesByType("grou_card_2").length;

for (var i = 0; i < total; i++) {
	if (qyengine.guardId("grou_shopCard_" + i) != null) {
		if (qyengine.guardId("grou_shopCard_" + i).vars_.itemId == itemId || (itemId == null && i == 0)) {
			itemId = qyengine.guardId("grou_shopCard_" + i).vars_.itemId;
			grou_shopPanel.vars_.itemId = qyengine.guardId("grou_shopCard_" + i).vars_.itemId;
			qyengine.guardId("grou_shopCard_" + i).vars_.isPressed = true;
			qyengine.guardId("obj_Ui_choice_" + i).show();
		} else {
			qyengine.guardId("grou_shopCard_" + i).vars_.isPressed = false;
			qyengine.guardId("obj_Ui_choice_" + i).hide();
		}
	}


}

if (isConfigKeywordExists(grou_shopPanel.vars_.infoName, itemId) && getConfig(grou_shopPanel.vars_.infoName, itemId, "type_prop") == 2) {
	for (var i = 0; i < 5; i++) {
		grou_shopClothInfo.objects["obj_quality_love_" + i].hide();

	}
	grou_shopClothInfo.objects["txt_clothName"].setText(getConfig("prop", itemId, "name"));
	var describe = getConfig("prop", itemId, "info");
	grou_shopClothInfo.objects["txt_clothDetailInfo"].setText(describe);
} else if (getConfig("fashionPlan", itemId)) {
	for (var i = 0; i < 5; i++) {

		grou_shopClothInfo.objects["obj_quality_love_" + i].hide();

	}
	grou_shopClothInfo.objects["txt_clothName"].setText(getConfig("fashionPlan", itemId, "name"));
	var describe = getConfig("fashionPlan", itemId, "info");
	grou_shopClothInfo.objects["txt_clothDetailInfo"].setText(describe);
} else {
	var quality = getConfig("fashion", itemId, "quality");
	for (var i = 0; i < 5; i++) {
		if (i <= quality - 1)
			grou_shopClothInfo.objects["obj_quality_love_" + i].show();
		else
			grou_shopClothInfo.objects["obj_quality_love_" + i].hide();


	}
	grou_shopClothInfo.objects["txt_clothName"].setText(getConfig("fashion", itemId, "name"));
	var describe = getConfig("fashion", itemId, "info");
	grou_shopClothInfo.objects["txt_clothDetailInfo"].setText(describe);
}
game.scripts["al_scr_ClothShowInit"](null, null, itemId);
grou_shopPanel.vars_.itemId = itemId;
game.vars_.touchBuyId = itemId;
grou_shopPanel.vars_.currentPriceType = getConfig(grou_shopPanel.vars_.infoName, itemId, "type");
if (game.vars_.shopIntoType == 1) {
	grou_shopPanel.vars_.currentPriceType = getConfig("pk_shop", itemId, "type");
} else if (game.vars_.shopIntoType == 5) {
	grou_shopPanel.vars_.currentPriceType = getConfig("flower_shop", itemId, "type");
}


/**
 * ShopInit
 */
console.log("shopInit");

if (qyengine.getInstanceCount("grou_shopBg") <= 0) {
	qyengine.instance_create(0, 0, "grou_shopBg", {
		"type": "grou_shopBg",
		"id": "grou_shopBg",
		"zIndex": 9
	});
} else {
	qyengine.guardId("grou_shopBg").show();
	grou_shopPanel.show();
}

game.vars_.shopPanelIsCreat = false;

if (type == null) {
	if (game.vars_.shopIntoType == 1) {
		//竞技场
		type = "1";
		grou_VIPtipsInfo.hide();
		//体验券的值
		qyengine.getInstancesByType("grou_experienceBg").length > 0 && grou_experienceBg.hide();
	} else if (game.vars_.shopIntoType == 5) {
		//百花
		if (openBuy) {
			type = game.configs.fashion[id].type.toString();
		} else {
			type = "1";
		}
		grou_VIPtipsInfo.hide();
		//体验券的值
		//体验券的值
		qyengine.getInstancesByType("grou_experienceBg").length > 0 && grou_experienceBg.hide();
	} else if (game.vars_.shopIntoType == 6) {
		//萤火
		if (openBuy) {
			type = game.configs.fashion[id].type.toString();
		} else {
			type = "1";
		}
		grou_VIPtipsInfo.hide();
		//体验券的值
		qyengine.getInstancesByType("grou_experienceBg").length > 0 && grou_experienceBg.hide();
	}
	else {
		type = "16";
		grou_VIPtipsInfo.show();
		//体验券的值
		if (qyengine.getInstancesByType("grou_experienceBg").length > 0) {
			if (!game.vars_.playInfoJson.vipJuan || game.vars_.playInfoJson.vipJuan <= 0) {
				grou_experienceBg.hide();
			} else {
				grou_experienceBg.show();
				grou_experienceBg.objects['txt_experience'].text = "x" + game.vars_.playInfoJson.vipJuan;
			}
		}
	}
}



//刷新当前页签的类型和种类
if (type != null && qyengine.getInstancesByType("grou_shopPanel").length <= 0) {
	qyengine.guardId("grou_shopPanel").vars_.type = game.vars_.shopIntoType;

	game.scripts["al_scr_RealignmentShopClothType"](null, null);

	//设置跳转的页签
	grou_shopPanel.vars_.currentClothType = type;


	//设置装备类型页签的滚动
	if (getConfig("toggeryType", grou_shopPanel.vars_.currentClothType, "order") >= 8) {
		qyengine.getInstancesByType("scro_shop_clothType")[0].scrollerTo(0, 5);

	} else {
		qyengine.getInstancesByType("scro_shop_clothType")[0].scrollerTo(0, -5);
	}


	//设置 卡片翻页
	var curryItemIndexPage = 0
	//查看当前的数据是在第几页
	curryItemIndexPage = game.scripts["al_scr_GetGoodsInThePageNum"](null, null, id);

	game.scripts["al_scr_SetShopType"](null, null, grou_shopPanel.vars_.currentClothType, curryItemIndexPage);

	//设置 点中的 服装卡
	game.scripts["al_scr_Button_ShopSuit"](null, null, id);
	game.scripts["al_scr_act_freshshopinfo"](null, null, grou_shopPanel.vars_.currentClothType);
	//game.scripts["al_scr_Button_ShopSuitType"](null,null,grou_shopPanel.vars_.currentClothType,id);

	if (openBuy) {
		if (grou_shopPanel.vars_.currentClothType != "16") {
			qyengine.instance_create(150, 0, "grou_shopBuyPanel", { "type": "grou_shopBuyPanel", "id": "grou_shopBuyPanel", "zIndex": 0 });
		} else {
			if (game.vars_.playInfoJson.vipLevel >= 1) {
				qyengine.instance_create(150, 0, "grou_shopBuyPanel", { "type": "grou_shopBuyPanel", "id": "grou_shopBuyPanel", "zIndex": 0 });
			} else {
				if (game.vars_.playInfoJson.vipJuan > 0) {
					current_game.scripts['al_scr_' + "vipQuanBuyGoods"].call(this, undefined, this);
				} else {
					qyengine.instance_create(150, 0, "grouDredgePanel", { "type": "grou_shopBuyPanel", "id": "grouDredgePanel", "zIndex": 0 });
				}
			}
		}
	}

	game.vars_.shopPanelIsCreat = true;
} else if (type != null && qyengine.getInstancesByType("grou_shopPanel").length > 0) {
	//设置跳转的页签
	grou_shopPanel.vars_.currentClothType = type;

	qyengine.guardId("grou_shopPanel").vars_.type = game.vars_.shopIntoType;

	game.scripts["al_scr_RealignmentShopClothType"](null, null);


	//设置装备类型页签的滚动
	if (getConfig("toggeryType", grou_shopPanel.vars_.currentClothType, "order") >= 8) {
		qyengine.getInstancesByType("scro_shop_clothType")[0].scrollerTo(0, 5);

	} else {
		qyengine.getInstancesByType("scro_shop_clothType")[0].scrollerTo(0, -5);
	}


	//设置 卡片翻页
	var curryItemIndexPage = 0
	//查看当前的数据是在第几页
	curryItemIndexPage = game.scripts["al_scr_GetGoodsInThePageNum"](null, null, id);

	game.scripts["al_scr_SetShopType"](null, null, grou_shopPanel.vars_.currentClothType, curryItemIndexPage);

	//设置 点中的 服装卡
	game.scripts["al_scr_Button_ShopSuit"](null, null, id);

	game.scripts["al_scr_act_freshshopinfo"](null, null, grou_shopPanel.vars_.currentClothType);
	//game.scripts["al_scr_Button_ShopSuitType"](null,null,grou_shopPanel.vars_.currentClothType,id);
	game.vars_.shopPanelIsCreat = true;


	if (openBuy) {
		if (grou_shopPanel.vars_.currentClothType != "16") {
			qyengine.instance_create(150, 0, "grou_shopBuyPanel", { "type": "grou_shopBuyPanel", "id": "grou_shopBuyPanel", "zIndex": 0 });

		} else {
			if (game.vars_.playInfoJson.vipLevel >= 1) {
				qyengine.instance_create(150, 0, "grou_shopBuyPanel", { "type": "grou_shopBuyPanel", "id": "grou_shopBuyPanel", "zIndex": 0 });
			} else {
				if (game.vars_.playInfoJson.vipJuan > 0) {
					current_game.scripts['al_scr_' + "vipQuanBuyGoods"].call(this, undefined, this);
				} else {
					qyengine.instance_create(150, 0, "grouDredgePanel", { "type": "grou_shopBuyPanel", "id": "grouDredgePanel", "zIndex": 0 });
				}
			}

		}
	}

} else if (qyengine.getInstancesByType("grou_shopPanel").length > 0) {
	game.scripts["al_scr_RealignmentShopClothType"](null, null);


	if (game.vars_.playInfoJson.vipLevel < 10) {
		grou_VIPtipsInfo.show();

		var vipRebateRes = getConfig("vip", Number(game.vars_.playInfoJson.vipLevel) + 1, "toggeryOff");
		vipRebate = vipRebateRes * 100;
		if (vipRebate % 10 == 0) {
			vipRebate = vipRebate / 10;
		}
		qyengine.guardId("VIPtipsInfoTitle").text = "贵宾" + (Number(game.vars_.playInfoJson.vipLevel) + 1) + "<font  color='#ffffff'>" + "特权商店全商品" + "</font>" + "<font  color='#ffff00'>" + vipRebate + "折" + '</font>' + "<font  color='#ffffff'>" + "优惠" + '</font>';


	} else {
		grou_VIPtipsInfo.hide();
	}

	if (openBuy) {
		if (grou_shopPanel.vars_.currentClothType != "16") {
			qyengine.instance_create(150, 0, "grou_shopBuyPanel", { "type": "grou_shopBuyPanel", "id": "grou_shopBuyPanel", "zIndex": 0 });

		} else {
			if (game.vars_.playInfoJson.vipLevel >= 1) {
				qyengine.instance_create(150, 0, "grou_shopBuyPanel", { "type": "grou_shopBuyPanel", "id": "grou_shopBuyPanel", "zIndex": 0 });
			} else {
				if (game.vars_.playInfoJson.vipJuan > 0) {
					current_game.scripts['al_scr_' + "vipQuanBuyGoods"].call(this, undefined, this);
				} else {
					qyengine.instance_create(150, 0, "grouDredgePanel", { "type": "grou_shopBuyPanel", "id": "grouDredgePanel", "zIndex": 0 });
				}
			}

		}
	}

	game.vars_.shopPanelIsCreat = true
}



/**
 * Button_ShopSuitType
 */

if (grou_shopPanel.vars_.currentClothType == type && grou_shopPanel.vars_.clothIndex == index) {
	for (var i = 0; i < 8; i++) {
		var cardItemId = qyengine.guardId("grou_shopCard_" + i).vars_.itemId;

		if (game.vars_.bagList.cloth[cardItemId] == undefined/* && game.vars_.playInfoJson.fashionPlan && game.vars_.playInfoJson.fashionPlan[cardItemId] == undefined*/) {
			qyengine.guardId("obj_numBg_" + i).hide();
			qyengine.guardId("txt_clothNum_" + i).hide();
		}
		else {
			qyengine.guardId("obj_numBg_" + i).show();
			qyengine.guardId("txt_clothNum_" + i).show();
			if (grou_shopPanel.vars_.currentClothType != 15) {
				if (game.vars_.bagList.cloth[cardItemId] != undefined) {
					qyengine.guardId("txt_clothNum_" + i).setText(game.vars_.bagList.cloth[cardItemId]);
				} else if (game.vars_.bagList.goods[cardItemId] != undefined) {
					qyengine.guardId("txt_clothNum_" + i).setText(game.vars_.bagList.goods[cardItemId]);
				} else if (game.vars_.bagList.plan[cardItemId] != undefined) {
					qyengine.guardId("txt_clothNum_" + i).setText(game.vars_.bagList.plan[cardItemId]);
				}
			} else {
				if (game.vars_.bagList.cloth[cardItemId] != undefined) {
					qyengine.guardId("txt_clothNum_" + i).setText(game.vars_.bagList.cloth[cardItemId]);
				} else if (game.vars_.bagList.goods[cardItemId] != undefined) {
					qyengine.guardId("txt_clothNum_" + i).setText(game.vars_.bagList.goods[cardItemId]);
				} else if (game.vars_.bagList.plan[cardItemId] != undefined) {
					qyengine.guardId("txt_clothNum_" + i).setText(game.vars_.bagList.plan[cardItemId]);
				}

			}

		}

		if (game.vars_.playInfoJson.vipLevel >= 1 && grou_shopPanel.vars_.currentClothType == "16") {
			continue;
			var vipRebateRes = getConfig("vip", game.vars_.playInfoJson.vipLevel, "toggeryOff");
			vipRebate = vipRebateRes * 100;
			if (vipRebate % 10 == 0) {
				vipRebate = vipRebate / 10;
			}
			var vipPrice = getConfig("toggeryVip", itemId, "price");

			qyengine.guardId("DiscountToggeryGroup_" + i).show();
			//刷新折扣
			qyengine.guardId("shopVipText_" + i).text = vipRebate + "折";
			//刷新价格
			qyengine.guardId("shopVipTextNow_" + i).text = Math.floor(vipPrice * vipRebateRes);
			qyengine.guardId("shopVipTextRes_" + i).text = vipPrice;
			qyengine.guardId("txt_clothPrice_" + i).hide();
		} else {
			qyengine.guardId("DiscountToggeryGroup_" + i).hide();
			qyengine.guardId("txt_clothPrice_" + i).show();

		}

	}

	return;
}
else {
	if (grou_shopPanel.vars_.currentClothType != type) {
		index = 0;
		grou_shopPanel.vars_.currentClothType = type;
		//刷新服装类型按钮
		for (var i = 0; i < game.vars_.openToggeryTypeArr.length; i++) {
			if (game.vars_.openToggeryTypeArr[i] == type) {
				qyengine.guardId("grou_shop_clothType_" + i).vars_.isPressed = true;
				qyengine.guardId("grou_shop_clothType_" + i).objects.obj_Ui_check_box.show();
			}
			else {
				qyengine.guardId("grou_shop_clothType_" + i).vars_.isPressed = false;
				qyengine.guardId("grou_shop_clothType_" + i).objects.obj_Ui_check_box.hide();
			}

		}

		grou_shopPanel.vars_.clothIndex = 0;

		//遍历服装表,符合当前服装类型的加入数组
		var arr = [];
		var configIndex = 0;
		var cell = game.configs.toggery;
		grou_shopPanel.vars_.infoName = "toggery";
		if (game.vars_.shopIntoType == 1) {
			cell = game.configs.pk_shop;
			grou_shopPanel.vars_.infoName = "pk_shop";
		} else if (game.vars_.shopIntoType == 5) {
			cell = game.configs.flower_shop;
			grou_shopPanel.vars_.infoName = "flower_shop";
		} else if (game.vars_.shopIntoType == 2 && game.vars_.isDebug && game.vars_.startCurGuideId == 14) {
			cell = game.configs.fashionNoviceGuide;
			grou_shopPanel.vars_.infoName = "fashionNoviceGuide";
		} else if (game.vars_.shopIntoType == 6) {
			//萤火商店
			cell = game.configs.pet_shop;
			grou_shopPanel.vars_.infoName = "pet_shop";

		}

		//读的是VIP 特权表 
		if (type == 16) {
			cell = game.configs.toggeryVip;
			grou_shopPanel.vars_.infoName = "toggeryVip";
		}

		for (var id in cell) {
			//染料
			if (type == 15) {
				if (getConfig(grou_shopPanel.vars_.infoName, id, "type_prop") == 2) {
					arr[configIndex] = id;
					configIndex++;
				}
			} else if (type == 16) {
				//VIP商店
				arr[configIndex] = id;
				configIndex++;
			}
			else {
				if (getConfig(grou_shopPanel.vars_.infoName, id, "type_prop") == 3) {
					var planId = getConfig("fashionPlan", id, "fashionId");
					if (getConfig("fashion", planId, "type") == type) {
						arr[configIndex] = id;
						configIndex++;
					}
				} else {
					if (getConfig("fashion", id, "type") == type || (getConfig("fashion", id, "type") == 15 && type == 18)) {
						arr[configIndex] = id;
						configIndex++;
					}
				}
			}
		}
		grou_shopPanel.vars_.clothInfo = arr;
	}


	if (!grou_shopPanel.vars_.clothInfo) {
		grou_shopPanel.vars_.clothInfo = [];
	}

	if (index <= 0) {
		grou_shopPanel.objects.grou_shop_arrowLeft.hide();
	} else {
		grou_shopPanel.objects.grou_shop_arrowLeft.show();
	}

	if (grou_shopPanel.vars_.clothInfo.length == 0) {

		grou_shopPanel.objects.grou_shop_arrowRight.show();
	}

	if (index - Math.ceil(grou_shopPanel.vars_.clothInfo.length / 8) == 0 || index - Math.ceil(grou_shopPanel.vars_.clothInfo.length / 8) == -1) {

		grou_shopPanel.objects.grou_shop_arrowRight.hide();

	} else {
		grou_shopPanel.objects.grou_shop_arrowRight.show();
	}
	if (grou_shopPanel.vars_.clothInfo.length <= 0) {
		for (var i = 0; i < 8; i++) {
			qyengine.guardId("grou_shopCard_" + i).hide();
		}
		// var clothShow = qyengine.guardId("grou_clothShow");
		//clothShow && clothShow.hide && clothShow.hide();

		//var grou_shopClothInfo = qyengine.guardId("grou_shopClothInfo");
		// grou_shopClothInfo && grou_shopClothInfo.hide && grou_shopClothInfo.hide();
		return;
	}

	if (index < 0 || index >= (grou_shopPanel.vars_.clothInfo.length % 8 >= 0 ? grou_shopPanel.vars_.clothInfo.length / 8 : grou_shopPanel.vars_.clothInfo.length / 8 + 1)) {
		if (index < 0) {
			game.scripts["al_scr_AddTip_1"](null, null, "已经翻到第一页！", "layer1");
		} else {
			game.scripts["al_scr_AddTip_1"](null, null, "已经翻到最后一页！", "layer1");
		}
		return;
	}
	else {
		grou_shopPanel.vars_.clothIndex = index;
	}

	for (var i = 0; i < 8; i++) {
		if (grou_shopPanel.vars_.clothInfo.length < grou_shopPanel.vars_.clothIndex * 8 + i + 1) {
			qyengine.guardId("grou_shopCard_" + i).hide();
		}
		else {
			qyengine.guardId("grou_shopCard_" + i).show();
			var itemId = grou_shopPanel.vars_.clothInfo[grou_shopPanel.vars_.clothIndex * 8 + i];
			qyengine.guardId("grou_shopCard_" + i).vars_.itemId = itemId;
			qyengine.guardId("obj_Ui_choice_" + i).hide();

			if (getConfig(grou_shopPanel.vars_.infoName, itemId, "type_prop") == 2) {
				var iconStr = getConfig("prop", itemId, "icon");
				var nameStr = getConfig("prop", itemId, "name");
			}
			else if (getConfig(grou_shopPanel.vars_.infoName, itemId, "type_prop") == 3) {
				var iconStr = getConfig("fashionPlan", itemId, "icon");
				var nameStr = getConfig("fashionPlan", itemId, "name");
			}
			else {
				var iconStr = getConfig("fashion", itemId, "icon");
				var nameStr = getConfig("fashion", itemId, "name");
			}
			qyengine.guardId("obj_Icon_" + i).changeSprite("obj_" + iconStr + "_default");
			qyengine.guardId("txt_card_name_" + i).setText(nameStr);

			var priceType = getConfig(grou_shopPanel.vars_.infoName, itemId, "type");
			var price = getConfig(grou_shopPanel.vars_.infoName, itemId, "price");
			if (priceType == 1) {
				qyengine.guardId("obj_Icon_gold_" + i).show();
				qyengine.guardId("obj_Icon_stone_" + i).hide();
			} else if (priceType == 2) {
				qyengine.guardId("obj_Icon_gold_" + i).hide();
				qyengine.guardId("obj_Icon_stone_" + i).show();
				qyengine.guardId("obj_Icon_stone_" + i).changeSprite("obj_Icon_goods_1_default");
			} else if (priceType == 3) {
				qyengine.guardId("obj_Icon_gold_" + i).hide();
				qyengine.guardId("obj_Icon_stone_" + i).show();
				qyengine.guardId("obj_Icon_stone_" + i).changeSprite("obj_Icon_goods_3_default");
			} else if (priceType == 4) {
				qyengine.guardId("obj_Icon_gold_" + i).hide();
				qyengine.guardId("obj_Icon_stone_" + i).show();
				qyengine.guardId("obj_Icon_stone_" + i).changeSprite("obj_Icon_goods_4_default");
			} else if (priceType == 5) {
				qyengine.guardId("obj_Icon_gold_" + i).hide();
				qyengine.guardId("obj_Icon_stone_" + i).show();
				qyengine.guardId("obj_Icon_stone_" + i).changeSprite("obj_" + getConfig("prop", 118, "icon") + "_default");
			}


			qyengine.guardId("txt_clothPrice_" + i).setText(price);

			if (game.vars_.bagList.cloth[itemId] == undefined/* && game.vars_.playInfoJson.fashionPlan && game.vars_.playInfoJson.fashionPlan[itemId] == undefined*/) {
				qyengine.guardId("obj_numBg_" + i).hide();
				qyengine.guardId("txt_clothNum_" + i).hide();
			}
			else {
				qyengine.guardId("obj_numBg_" + i).show();
				qyengine.guardId("txt_clothNum_" + i).show();
				if (game.vars_.bagList.cloth[itemId] != undefined) {

					qyengine.guardId("txt_clothNum_" + i).setText(game.vars_.bagList.cloth[itemId]);
				} else if (game.vars_.bagList.goods[itemId] != undefined) {
					qyengine.guardId("txt_clothNum_" + i).setText(game.vars_.bagList.goods[itemId].num);
				} else if (game.vars_.bagList.plan[itemId] != undefined) {
					qyengine.guardId("txt_clothNum_" + i).setText(game.vars_.bagList.plan[itemId].num);
				}


			}

			//打开的是百花
			if (game.vars_.shopIntoType == 5) {
				var unlock = getConfig("fashionPlan", itemId, "unlock");
				if (unlock > game.vars_.playInfoJson.level) {
					qyengine.guardId("obj_Ui_Level_" + i).show();
					qyengine.guardId("txt_textLevel_" + i).show();
					qyengine.guardId("txt_textLevel_" + i).setText(unlock + "级解锁");
				} else {
					qyengine.guardId("obj_Ui_Level_" + i).hide();
					qyengine.guardId("txt_textLevel_" + i).hide();
				}

			} else {
				var unlock = getConfig("fashionNoviceGuide", itemId, "unlock");
				if (unlock > game.vars_.playInfoJson.level) {
					qyengine.guardId("obj_Ui_Level_" + i).show();
					qyengine.guardId("txt_textLevel_" + i).show();
					qyengine.guardId("txt_textLevel_" + i).setText(unlock + "级解锁");
				}
				else {
					qyengine.guardId("obj_Ui_Level_" + i).hide();
					qyengine.guardId("txt_textLevel_" + i).hide();
				}
			}
			if (game.vars_.playInfoJson.vipLevel >= 1 && grou_shopPanel.vars_.currentClothType == "16") {
				var vipRebateRes = getConfig("vip", game.vars_.playInfoJson.vipLevel, "toggeryOff");
				vipRebate = vipRebateRes * 100;
				if (vipRebate % 10 == 0) {
					vipRebate = vipRebate / 10;
				}
				var vipPrice = getConfig("toggeryVip", itemId, "price");

				qyengine.guardId("DiscountToggeryGroup_" + i).show();
				//刷新折扣
				qyengine.guardId("shopVipText_" + i).text = vipRebate + "折";
				//刷新价格
				qyengine.guardId("shopVipTextNow_" + i).text = Math.floor(vipPrice * vipRebateRes);
				qyengine.guardId("shopVipTextRes_" + i).text = vipPrice;
				qyengine.guardId("txt_clothPrice_" + i).hide();
			} else {
				qyengine.guardId("DiscountToggeryGroup_" + i).hide();
				qyengine.guardId("txt_clothPrice_" + i).show();

			}

			if (i == 0) {
				!qyengine.guardId("grou_clothShow").destroyed_ && qyengine.guardId("grou_clothShow").show();
				qyengine.guardId("grou_shopClothInfo").show();
				game.scripts["al_scr_Button_ShopSuit"](null, null, itemId);
				qyengine.guardId("obj_Ui_choice_" + i).show();
			}
		}
	}
}






var getwList = ["xxx", "免费赠送", "直接购买", "设计图制做", "购买畅玩卡", "花瓣商城购买",
	"文字说明", "钻石购买", "花瓣购买", "花瓣商城购买", "种植获得", "炼药获得", "关卡获得", "购买设计图", "云梦锦获得", "高级定制",
	"服装进化", "水晶兑换", "竞技币兑换", "百花币兑换", "VIP会员福利", "神宠商店兑换"
];



/**
 * Button_ManualSuit
 */
/**
* Button_ManualSuit
*/
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

var price = null;
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
	grou_clothDetail.objects.obj_Icon_cloth.changeSprite("obj_" + getConfig("prop", itemId, "icon") + "_default", null, true);
} else if (itemType == 3) {
	goodsName = getConfig("fashionPlan", itemId, "name");
	quality = getConfig("fashionPlan", itemId, "quality");
	type = null;
	typeStr = null;
	describe = getConfig("fashionPlan", itemId, "info");
	property = null;
	getWay = getConfig("fashionPlan", itemId, "gatWay").split("#");
	propertyDetail = null;
	price = getConfig("fashionPlan", itemId, "price").split("|")[1];
	grou_clothDetail.objects.obj_Icon_cloth.changeSprite("obj_" + getConfig("fashionPlan", itemId, "icon") + "_default", null, true);


} else {
	if (qyengine['grou_clothesPressPanelInstance'] && qyengine['grou_clothesPressPanelInstance'].isVisible) {
		var table = game.configs.prop[itemId] || game.configs.fashion[itemId] || game.configs.face[itemId];
	} else {
		var table = game.configs.fashionPlan[itemId] || game.configs.prop[itemId] || game.configs.fashion[itemId] || game.configs.face[itemId];
	}


	goodsName = table.name;
	quality = table.quality;
	type = table.type;
	typeStr = table.icon;
	describe = table.info;
	property = table.propertyInfo;
	getWay = table.gatWay.toString().split("#");
	propertyDetail = table.property;
	grou_clothDetail.objects.obj_Icon_cloth.changeSprite("obj_" + typeStr + "_default", null, true);
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
        /*
        grou_clothDetail.addOneInstance("obj_Icon_love", 345 + 42 * i, 256, {
            id: "obj_love_" + i
        });
        */
	}

}

txt_manual_clothDescribe.setText("     " + describe);


var propertyArr = [];
if (!property == false) {
	propertyArr = property.split("#");
}


for (var i = 0; i < propertyArr.length; i++) {
	//qyengine.instance_create(0,0,"obj_FontImage_property_"+propertyArr[i],{"type":"obj_FontImage_property_"+propertyArr[i],"id":"obj_manual_property_"+propertyArr[i],"zIndex":0});
	grou_clothDetail.addOneInstance("obj_FontImage_property_" + propertyArr[i], 140 + 90 * i, 580, {
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
21 点券商店的稀有套装
22 点券商店的稀有商品
*/
//获取途径  itemType
/*
var getwList = ["xxx", "免费赠送", "锦绣庄购买", "设计图制做", "购买畅玩卡", "花瓣商城购买",
    "文字说明", "钻石购买", "花瓣购买", "花瓣商城购买", "种植获得", "炼药获得", "过关获得", "直接购买", "服装分解", "七天领取套装活动", "邀请好友赠送套装", "新手引导", "VIP会员福利", "端午活动", "", "神宠-萤火商店获得", "特惠商城", "特惠商城", "翡翠商城"
];
*/
var getwList = ["xxx", "免费赠送", "锦绣庄购买", "设计图制做", "购买畅玩卡", "花瓣商城购买",
	"文字说明", "钻石购买", "花瓣购买", "花瓣商城购买", "种植获得", "炼药获得", "关卡获得", "购买设计图", "云梦锦获得", "高级定制",
	"服装进化", "水晶兑换", "竞技币兑换", "百花币兑换", "VIP会员福利", "神宠商店兑换"
];
for (var i = 0; i < getWay.length; i++) {
	var temp = getWay[i].split("|");

	qyengine.instance_create(0, 0, "grou_accessWay", {
		"type": "grou_accessWay",
		"id": "grou_accessWay_" + i,
		"zIndex": 0
	});
	scro_manual_accessWay.appendChild("grou_accessWay_" + i, 0, 0, i, 0, false, true);
	if (parseInt(temp[0]) == 6) {
		qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWay.setText(temp[1]);
	} else {
		qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWay.setText(getwList[parseInt(temp[0])]);
	}





	switch (parseInt(temp[0])) {
		case 1:

			qyengine.guardId("grou_accessWay_" + i).objects.obj_Icon_Gold.hide();
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setText(getwList[parseInt(temp[0])]);
			//qyengine.guardId("grou_accessWay_" + i).addOneInstance("grou_btnAccessWay_3", 330, 70, {
			//  id: "grou_btnAccessWay_3" + i
			//});
			//qyengine.guardId("grou_btnAccessWay_3" + i).vars_.index = parseInt(temp[0]);

			break;

		case 2:
			qyengine.guardId("grou_accessWay_" + i).objects.obj_Icon_Gold.hide();
			qyengine.guardId("grou_accessWay_" + i).objects.
				txt_manual_accessWayDescribe.setText(getwList[parseInt(temp[0])]);

			if (temp[1] == "-1") {
				break;
			}


			qyengine.guardId("grou_accessWay_" + i).addOneInstance("grou_btnAccessWay_3", 379, 9, {
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
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setText(getwList[parseInt(temp[0])]);
			if (temp[1] == "-1") {
				break;
			}
			qyengine.guardId("grou_accessWay_" + i).addOneInstance("grou_btnAccessWay_2", 379, 9, {
				id: "grou_btnAccessWay_2" + i
			});
			qyengine.guardId("grou_btnAccessWay_2" + i).vars_.index = parseInt(temp[0]);
			qyengine.guardId("grou_btnAccessWay_2" + i).vars_.itemId = itemId;
			qyengine.guardId("grou_btnAccessWay_2" + i).vars_.itemType = itemType;
			break;
		case 4:
			//购买畅玩卡
			qyengine.guardId("grou_accessWay_" + i).objects.obj_Icon_Gold.hide();
			//qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setPosition(14, 90)
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setText(getwList[parseInt(temp[0])]);
			if (temp[1] == "-1") {
				break;
			}
			qyengine.guardId("grou_accessWay_" + i).addOneInstance("grou_btnAccessWay_2", 379, 9, {
				id: "grou_btnAccessWay_2" + i
			});
			qyengine.guardId("grou_btnAccessWay_2" + i).vars_.index = parseInt(temp[0]);
			qyengine.guardId("grou_btnAccessWay_2" + i).vars_.itemId = itemId;
			qyengine.guardId("grou_btnAccessWay_2" + i).vars_.itemType = itemType;
			break;
		case 5:
			//花瓣商城购买
			qyengine.guardId("grou_accessWay_" + i).objects.obj_Icon_Gold.hide();
			//qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setPosition(14, 90)
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setText(getwList[parseInt(temp[0])]);
			if (temp[1] == "-1") {
				break;
			}
			qyengine.guardId("grou_accessWay_" + i).addOneInstance("grou_btnAccessWay_2", 379, 9, {
				id: "grou_btnAccessWay_2" + i
			});
			qyengine.guardId("grou_btnAccessWay_2" + i).vars_.index = parseInt(temp[0]);
			qyengine.guardId("grou_btnAccessWay_2" + i).vars_.itemId = itemId;
			qyengine.guardId("grou_btnAccessWay_2" + i).vars_.itemType = itemType;
			break;
		case 6:
			//qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setPosition(14, 90)
			qyengine.guardId("grou_accessWay_" + i).objects.obj_Icon_Gold.hide();
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setText(temp[1]);
			break;
		case 7:
			//qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setPosition(14, 90)
			qyengine.guardId("grou_accessWay_" + i).objects.obj_Icon_Gold.hide();
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setText(getwList[parseInt(temp[0])]);
			if (temp[1] == "-1") {
				break;
			}
			qyengine.guardId("grou_accessWay_" + i).addOneInstance("grou_btnAccessWay_3", 379, 9, {
				id: "grou_btnAccessWay_3" + i
			});
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.index = parseInt(temp[0]);
			break;
		case 8:
			//qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setPosition(14, 90)
			qyengine.guardId("grou_accessWay_" + i).objects.obj_Icon_Gold.hide();
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setText(getwList[parseInt(temp[0])]);
			if (temp[1] == "-1") {
				break;
			}
			qyengine.guardId("grou_accessWay_" + i).addOneInstance("grou_btnAccessWay_3", 379, 9, {
				id: "grou_btnAccessWay_3" + i
			});
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.index = parseInt(temp[0]);
			//物品ID
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.itemId = itemId;
			//物品类型
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.itemType = itemType;

			break;
		case 9:
			//qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setPosition(14, 90)
			qyengine.guardId("grou_accessWay_" + i).objects.obj_Icon_Gold.hide();
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setText(getwList[parseInt(temp[0])]);
			if (temp[1] == "-1") {
				break;
			}
			qyengine.guardId("grou_accessWay_" + i).addOneInstance("grou_btnAccessWay_3", 379, 9, {
				id: "grou_btnAccessWay_3" + i
			});
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.index = parseInt(temp[0]);
			//物品ID
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.itemId = itemId;
			//物品类型
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.itemType = itemType;

			break;
		case 10:
			//qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setPosition(14, 90)
			qyengine.guardId("grou_accessWay_" + i).objects.obj_Icon_Gold.hide();
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setText(getwList[parseInt(temp[0])]);
			if (temp[1] == "-1") {
				break;
			}
			qyengine.guardId("grou_accessWay_" + i).addOneInstance("grou_btnAccessWay_3", 379, 9, {
				id: "grou_btnAccessWay_3" + i
			});
			//物品ID
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.itemId = itemId;
			//物品类型
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.itemType = itemType;
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.index = parseInt(temp[0]);
			break;
		case 11:
			qyengine.guardId("grou_accessWay_" + i).objects.obj_Icon_Gold.hide();
			//qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setPosition(14, 90)
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setText(getwList[parseInt(temp[0])]);
			if (temp[1] == "-1") {
				break;
			}
			qyengine.guardId("grou_accessWay_" + i).addOneInstance("grou_btnAccessWay_3", 379, 9, {
				id: "grou_btnAccessWay_3" + i
			});

			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.index = parseInt(temp[0]);
			break;
		case 12:
			//qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setPosition(14, 90)
			qyengine.guardId("grou_accessWay_" + i).objects.obj_Icon_Gold.hide();
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setText(getwList[parseInt(temp[0])]);
			if (temp[1] == "-1") {
				break;
			}
			qyengine.guardId("grou_accessWay_" + i).addOneInstance("grou_btnAccessWay_3", 379, 9, {
				id: "grou_btnAccessWay_3" + i
			});

			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.index = parseInt(temp[0]);
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.itemId = itemId;
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.itemType = itemType;
			break;

		case 13:

			var priceType = getConfig("fashionPlan", itemId, "price").split("|");
			if (priceType[0] == 1)
				qyengine.guardId("grou_accessWay_" + i).objects.obj_Icon_Gold.changeSprite("obj_Icon_goods_5_default");
			else
				qyengine.guardId("grou_accessWay_" + i).objects.obj_Icon_Gold.changeSprite("obj_Icon_goods_1_default");
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setText(priceType[1]);

			qyengine.guardId("grou_accessWay_" + i).addOneInstance("grou_btnAccessWay_1", 379, 9, {
				id: "grou_btnAccessWay_1" + i
			});
			qyengine.guardId("grou_btnAccessWay_1" + i).vars_.itemId = itemId;
			qyengine.guardId("grou_btnAccessWay_1" + i).vars_.itemType = itemType;
			qyengine.guardId("grou_btnAccessWay_1" + i).vars_.index = parseInt(temp[0]);
			break;
		case 14:
			//云梦锦获得 
			//qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setPosition(14, 90)
			qyengine.guardId("grou_accessWay_" + i).objects.obj_Icon_Gold.hide();
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setText(getwList[parseInt(temp[0])]);
			if (temp[1] == "-1") {
				break;
			}
			qyengine.guardId("grou_accessWay_" + i).addOneInstance("grou_btnAccessWay_3", 379, 9, {
				id: "grou_btnAccessWay_3" + i
			});
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.index = parseInt(temp[0]);
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.itemId = itemId;
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.itemType = itemType;
			break;
		case 15:
			//qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setPosition(14, 90)
			qyengine.guardId("grou_accessWay_" + i).objects.obj_Icon_Gold.hide();
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setText(getwList[parseInt(temp[0])]);
			if (temp[1] == "-1") {
				break;
			}

			qyengine.guardId("grou_accessWay_" + i).addOneInstance("grou_btnAccessWay_3", 379, 9, {
				id: "grou_btnAccessWay_3" + i
			});
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.index = parseInt(temp[0]);
			break;
		case 16:
			//qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setPosition(14, 90)
			qyengine.guardId("grou_accessWay_" + i).objects.obj_Icon_Gold.hide();
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setText(getwList[parseInt(temp[0])]);
			if (temp[1] == "-1") {
				break;
			}
			qyengine.guardId("grou_accessWay_" + i).addOneInstance("grou_btnAccessWay_3", 379, 9, {
				id: "grou_btnAccessWay_3" + i
			});
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.index = parseInt(temp[0]);

			break;
		case 17:
			//水晶兑换 云梦锦兑换
			//qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setPosition(14, 90)
			qyengine.guardId("grou_accessWay_" + i).objects.obj_Icon_Gold.hide();
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setText(getwList[parseInt(temp[0])]);
			if (temp[1] == "-1") {
				break;
			}
			qyengine.guardId("grou_accessWay_" + i).addOneInstance("grou_btnAccessWay_3", 379, 9, {
				id: "grou_btnAccessWay_3" + i
			});
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.index = parseInt(temp[0]);
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.itemId = itemId;
			break;
		case 18:
			//qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setPosition(14, 90)
			qyengine.guardId("grou_accessWay_" + i).objects.obj_Icon_Gold.hide();
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setText(getwList[parseInt(temp[0])]);
			if (temp[1] == "-1") {
				break;
			}
			qyengine.guardId("grou_accessWay_" + i).addOneInstance("grou_btnAccessWay_3", 379, 9, {
				id: "grou_btnAccessWay_3" + i
			});
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.index = parseInt(temp[0]);
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.itemId = itemId;
			break;
		case 19:
			//qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setPosition(14, 90)
			qyengine.guardId("grou_accessWay_" + i).objects.obj_Icon_Gold.hide();
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setText(getwList[parseInt(temp[0])]);

			break;
		case 20:
			qyengine.guardId("grou_accessWay_" + i).objects.obj_Icon_Gold.hide();
			//qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setPosition(14, 90);
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setText(getwList[parseInt(temp[0])]);
			qyengine.guardId("grou_accessWay_" + i).addOneInstance("grou_btnAccessWay_3", 379, 9, {
				id: "grou_btnAccessWay_3" + i
			});
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.index = parseInt(temp[0]);
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.itemId = itemId;
			break;
		case 21:
			qyengine.guardId("grou_accessWay_" + i).objects.obj_Icon_Gold.hide();
			//qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setPosition(14, 90);
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setText(getwList[parseInt(temp[0])]);
			qyengine.guardId("grou_accessWay_" + i).addOneInstance("grou_btnAccessWay_3", 379, 9, {
				id: "grou_btnAccessWay_3" + i
			});
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.index = parseInt(temp[0]);
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.itemId = itemId;
			break;
		case 22:
			qyengine.guardId("grou_accessWay_" + i).objects.obj_Icon_Gold.hide();
			//qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setPosition(14, 90);
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setText(getwList[parseInt(temp[0])]);
			qyengine.guardId("grou_accessWay_" + i).addOneInstance("grou_btnAccessWay_3", 379, 9, {
				id: "grou_btnAccessWay_3" + i
			});
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.index = parseInt(temp[0]);
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.itemId = itemId;
			break;
		case 23:
			qyengine.guardId("grou_accessWay_" + i).objects.obj_Icon_Gold.hide();
			//qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setPosition(14, 90);
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setText(getwList[parseInt(temp[0])]);
			qyengine.guardId("grou_accessWay_" + i).addOneInstance("grou_btnAccessWay_3", 379, 9, {
				id: "grou_btnAccessWay_3" + i
			});
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.index = parseInt(temp[0]);
			qyengine.guardId("grou_btnAccessWay_3" + i).vars_.itemId = itemId;
			break;
		default:
			//qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setPosition(14, 90)
			qyengine.guardId("grou_accessWay_" + i).objects.obj_Icon_Gold.hide();
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWayDescribe.setText(temp[1]);
			qyengine.guardId("grou_accessWay_" + i).objects.txt_manual_accessWay.setText(temp[1]);
			break;
	}
}




/**
 * AcquiringWay
 */
/**
 * "xxx", "免费赠送", "锦绣庄购买", "设计图制做", "购买畅玩卡", "花瓣商城购买",
	"文字说明", "钻石购买", "花瓣购买", "花瓣商城购买", "种植获得", "炼药获得", "关卡获得", "购买设计图", "云梦锦获得", "高级定制",
	"服装进化", "水晶兑换", "竞技币兑换", "百花币兑换", "VIP会员福利", "神宠商店兑换"
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
		//畅玩卡购买
		game.scripts["al_scr_Vip_Init"](null, null);
		break;
	case 5:
		//花瓣商城
		game.scripts["al_scr_openDailyRechargeShop"](null, null, 1);
		break;
	case 7:
		//钻石直接购买
		var tableId = game.configs.prop[id];
		var price = tableId.getWay.split("|")[1];
		var priceIcon = game.configs.prop[101].icon;
		current_game.scripts['al_scr_' + "createCommonBox"].call(this, undefined, this, id, Number(price), priceIcon, tableId.name, "getWayBuySuccess");
		break;
	case 8:
		//直接购买 花瓣
		var tableId = game.configs.prop[id];
		var price = tableId.getWay.split("|")[1];
		var priceIcon = game.configs.prop[100].icon;
		current_game.scripts['al_scr_' + "createCommonBox"].call(this, undefined, this, id, Number(price), priceIcon, tableId.name, "getWayBuySuccess");
		break;
	case 9:
		//花瓣商城
		game.scripts["al_scr_openDailyRechargeShop"](null, null, 1);
		break;
	case 10:
		//种植获得
		var petArr = qyengine.getInstancesByType("grou_PetPanel");
		if (petArr.length && petArr[0].isVisible) {
			game.vars_.petPanel = true;
		}
		var toId = game.configs.prop[id].gatWay.toString().split("#")[0].split("|")[1];
		game.scripts["al_scr_initCropPark"](null, null, null, null, toId);
		break;
	case 11:
		//炼药获得
		game.vars_.openMedcine = true;
		game.scripts["al_scr_initCropPark"](null, null);

		break;

	case 12:
		//过关获得,跳转到关卡界面
		game.scripts["al_scr_openQuestPanel"](null, null, self.vars_.indexValue);
		break;
	case 13:
		//服装分解
		game.scripts["al_scr_OpenDecompose"](null, null, fashType);

		break;
	case 14:
		//云梦锦获得 跳转到云梦锦界面
		game.scripts["al_scr_FlowerInit"](null, null);

		break;
	case 17:
		//水晶兑换
		game.scripts["al_scr_ExchangeInit"](null, null, fashType, id);
		qyengine.instance_create(150, 0, "grou_shopBuyPanel", { "type": "grou_shopBuyPanel", "id": "grou_shopBuyPanel", "zIndex": 0 });
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
	case 23:
		//打开翡翠商城
		game.vars_.fromGetWay = true;
		game.scripts["al_scr_ExchangeInit"](null, null, fashType, id);
		qyengine.instance_create(150, 0, "grou_shopBuyPanel", {
			"type": "grou_shopBuyPanel",
			"id": "grou_shopBuyPanel",
			"zIndex": 0
		});
		break;
	default:

		break;
}



/**
 * OpenDecompose
 */

if (qyengine.getInstancesByType("grou_decomposePanel").length <= 0) {
	qyengine.instance_create(0, 0, "grou_decomposePanel", { "type": "grou_decomposePanel", "id": "grou_decomposePanel", "zIndex": 10 });
	qyengine.guardId("grou_decomposePanel").setAnchorPoint(0.5, 0);
	qyengine.guardId("grou_decomposePanel").setPosition(current_scene.width / 2 + current_scene.viewOffset.x, 0);


	var grouIndex = 0;

	//初始化服装类型滚轴容器
	for (var i in game.configs.suitType) {
		if (i != 7) {
			var cell = game.configs.suitType[i];
			qyengine.instance_create(0, 0, "grou_tailor_clothType", { "type": "grou_tailor_clothType", "id": "grou_tailor_clothType_" + i, "zIndex": 0 });
			qyengine.guardId("grou_tailor_clothType_" + i).vars_.type = i;
			qyengine.guardId("grou_tailor_clothType_" + i).vars_.isPressed = false;
			qyengine.guardId("grou_tailor_clothType_" + i).objects.obj_Ui_check_box.hide();
			qyengine.guardId("grou_tailor_clothType_" + i).objects.obj_Icon_hairStyle.changeSprite("obj_Icon_" + cell.name + "_default");
			qyengine.guardId("grou_tailor_clothType_" + i).objects.obj_FontImage_hairStyle.changeSprite("obj_FontImage_" + cell.name + "_default");
			grou_decomposePanel.objects.scro_shop_clothType.appendChild("grou_tailor_clothType_" + i, 0, 0, 0, grouIndex, false, true);
			grouIndex++;
		}

	}
}
qyengine.guardId("grou_decomposePanel").show();
grou_decomposePanel.vars_.clothInBag = JSON.parse(JSON.stringify(game.vars_.bagList.cloth));
grou_decomposePanel.vars_.chooseCloth = {};
grou_decomposePanel.vars_.total = 0;
grou_decomposePanel.objects.txt_text_choose.setText(grou_decomposePanel.vars_.total);
if (grou_decomposePanel.vars_.curClothType == undefined)
	grou_decomposePanel.vars_.curClothType = 1;

//筛选:玩家背包里已保存在套装中或只有一件或不可重复获得的衣服不显示
for (var id in grou_decomposePanel.vars_.clothInBag) {
	grou_decomposePanel.vars_.clothInBag[id].num--;
	if (grou_decomposePanel.vars_.clothInBag[id].num <= 0)
		delete (grou_decomposePanel.vars_.clothInBag[id]);
	else
		grou_decomposePanel.vars_.clothInBag[id].chooseNum = 0;
}


if (game.vars_.bagList.goods[113] != null) {
	qyengine.guardId("grou_decomposePanelHasNum").setText(game.vars_.bagList.goods[113].num.toString());

} else {
	qyengine.guardId("grou_decomposePanelHasNum").setText(0);
}



game.scripts["al_scr_Button_DecomposeSuitType"](null, null, grou_decomposePanel.vars_.curClothType);







var table = game.configs.fashion;
for (var i in table) {
	if (table[i].name == "卷珠帘" || table[i].name == "小得盈满") {
		console.log(i);
	}
}
//45020	45021


game.vars_.shopIntoType = 0;
var fashType = getConfig("fashion", id, "type") || getConfig("face", id, "type");
if (getConfig("toggeryVip")[id] != null) {
	fashType = "16";
}
game.scripts["al_scr_ShopInit"](null, null, fashType, id, true);




function setLayer(childObj, zValue) {
	//grou_playerDress.currentSprite.cacheAsBitmap = false;
	if (Number(zValue) == -1) {
		childObj.zIndex = 1;
		childObj.currentSprite.cacheAsBitmapBefore = 0;
	} else {
		childObj.zIndex = -1;
		childObj.currentSprite.cacheAsBitmapBefore = 1;
	}
	//grou_playerDress.currentSprite.cacheAsBitmap = true;
};





/**
 * 试衣间的返回事件
 */
if (qyengine.getInstancesByType("grou_changeBg").length && qyengine.getInstancesByType("grou_changeBg")[0].isVisible) {
	grou_changeBg.objects['obj_Ui_right_margin_label_04'].hide();
}
//重置好友合影数据
if (game.vars_.OpenPhoto == true && !game.vars_.friendOptFromChat) {
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




//'grou_backBtn mouseup



for (var i = 1; i < 15; i++) {
	var type = getConfig("config_suitType", i, "name");

	game.vars_.playerCurrentCloths[type] = 0;
}

game.vars_.curChangeType = -1;



//qyengine.different_scene('Scene_Main');
grou_Main.appendChild("grou_playerDress", 112, 120);
grou_changeBg.hide();
if (qyengine.getInstanceCount("inpu_mySuitName") > 0) {
	inpu_mySuitName.hide();

}
if (game.vars_.isDebug) { game.scripts["al_scr_RefreshNociveGuide"](null, null); }
game.vars_.playerCurrentCloths = JSON.parse(JSON.stringify(game.vars_.playInfoJson.suit[game.vars_.changeSuitIndex]));
game.scripts["al_scr_RefreshClothes"](null, null);
scro_change_clothBtn.removeAll();
grou_changeOverPanel_1.destroy();
//game.scripts["al_scr_continueNoviceGuide"](null,null);






/**
 * addEffectForClothes
 */
/**
 * addEffectForClothes
 */

/*
if (!objectId) {
   var _objectId = "grou_playerDress";
}
*/
if (!objectId) {
	return;
}
var isBaiHua = objectId.indexOf("grou_playerDress_left_") > -1;
if (isBaiHua) {
	//return;
}
var objectId = qyengine.guardId(objectId);

var config = game.configs.fashion[m_id];
var effectName = config.effect;
var logicType = config.type;

if (isNaN(Number(effectName))) {
	local.type = logicType;
	if (local.type == 15) {
		grou_playerDress.currentSprite.cacheAsBitmap = false;
	}
	effectNameArr = effectName.split("#");
	if (isBaiHua) {
		effectNameArr = config.effect_image.split("#");
	}
	var posArr = config.postion.split("#"),
		scaleArr = config.enlarge == -1 ? ["1|1", "1|1", "1|1", "1|1", "1|1", "1|1"] : config.enlarge.toString().split("#"),
		speedArr = config.speed == -1 ? [0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8] : config.speed.toString().split("#"),
		layerArr = config.layer == -1 ? [-1, -1, -1, -1, -1, -1] : config.layer.toString().split("#"),
		zIndexByLayer = { "-1": 1, "1": -1 };


	objectId.objects.clothEffect.show();
	objectId.objects.clothEffect.currentSprite.setFill("");
	objectId.objects.dressEffect.show();
	objectId.objects.dressEffect.currentSprite.setFill("");

	RoleAnimation.rootFolder = "/qiyun/avg_roleanim/";
	for (var i = 0; i < effectNameArr.length; i++) {
		//百花争艳中的特殊处理~
		if (isBaiHua) {
			var effectAnimation_presentStoneEff = new EffectAnimation();
			if (logicType == 15) {
				objectId.objects.dressEffect.currentSprite.addChild(effectAnimation_presentStoneEff);
				setLayer(objectId.objects.dressEffect, layerArr[i]);
			} else {
				objectId.objects.clothEffect.currentSprite.addChild(effectAnimation_presentStoneEff);
				setLayer(objectId.objects.clothEffect, layerArr[i]);
			}
		} else {
			if (window['closeEffect'] && window['closeEffect'][logicType]) {


				var markParent = null;
				if (logicType == 15) {
					if (!window['closeEffect'][logicType][i]) {
						var effectAnimation_presentStoneEff = new EffectAnimation();
					} else {
						var effectAnimation_presentStoneEff = window['closeEffect'][logicType][i];
					}

					markParent = objectId.objects.dressEffect;
					var aleadyEffect = markParent.currentSprite.children.filter(function (item, index, array) {
						return window['closeEffect'][logicType][i] && (item.effectName == window['closeEffect'][logicType][i].effectName);
					});
				} else {
					if (!window['closeEffect'][logicType][i]) {
						var effectAnimation_presentStoneEff = new EffectAnimation();
					} else {
						var effectAnimation_presentStoneEff = window['closeEffect'][logicType][i];
					}

					markParent = objectId.objects.clothEffect;
					var aleadyEffect = markParent.currentSprite.children.filter(function (item, index, array) {
						return window['closeEffect'][logicType][i] && item.effectName == window['closeEffect'][logicType][i].effectName;
					});
				}


				if (aleadyEffect.length == 0) {
					markParent.currentSprite.addChild(effectAnimation_presentStoneEff);
				}
				setLayer(markParent, layerArr[i]);
			} else {
				var effectAnimation_presentStoneEff = new EffectAnimation();
				if (logicType == 15) {
					objectId.objects.dressEffect.currentSprite.addChild(effectAnimation_presentStoneEff);
					setLayer(objectId.objects.dressEffect, layerArr[i]);
				} else {
					objectId.objects.clothEffect.currentSprite.addChild(effectAnimation_presentStoneEff);
					setLayer(objectId.objects.clothEffect, layerArr[i]);
				}

			}
		}
		effectAnimation_presentStoneEff.setEffectNameLevel(effectNameArr[i], 1);
		effectAnimation_presentStoneEff.setScale(Number(scaleArr[i].split("|")[0]), Number(scaleArr[i].split("|")[1]));
		effectAnimation_presentStoneEff.setLoop(true);
		//effectAnimation_presentStoneEff.setPosition(Number(posArr[i].split("|")[0]), Number(posArr[i].split("|")[1]));
		if (isBaiHua) {
			var needSetPos = baiHuaFrame_setPos(m_id, effectAnimation_presentStoneEff);
			if (!needSetPos) {
				effectAnimation_presentStoneEff.setPosition(Number(posArr[i].split("|")[0]), Number(posArr[i].split("|")[1]));
			}
			baiHuaFrame_setScale(m_id, effectAnimation_presentStoneEff);
		} else {
			effectAnimation_presentStoneEff.setPosition(Number(posArr[i].split("|")[0]), Number(posArr[i].split("|")[1]));
		}
		effectAnimation_presentStoneEff.setSpeed(speedArr[i]);
		effectAnimation_presentStoneEff.start();
		if (!window['closeEffect']) {
			window['closeEffect'] = {};
		}
		if (logicType == 15) {
			if (!window['closeEffect'][logicType]) {
				window['closeEffect'][logicType] = [];
			}
			if (!isBaiHua) {
				window['closeEffect'][logicType][i] = effectAnimation_presentStoneEff;
			}

		} else {
			if (!window['closeEffect'][logicType]) {
				window['closeEffect'][logicType] = [];
			}
			if (!isBaiHua) {
				window['closeEffect'][logicType][i] = effectAnimation_presentStoneEff;
			}
		}
		effectAnimation_presentStoneEff.show();

	}
	if (local.type == 15) {
		grou_playerDress.currentSprite.cacheAsBitmap = true;
	}
} else {   //是数字
	console.log("没有特效~");
	if (!isBaiHua && window['closeEffect'] && window['closeEffect'][logicType]) {
		for (var k = 0; k < window['closeEffect'][logicType].length; k++) {
			window['closeEffect'][logicType][k] && window['closeEffect'][logicType][k].parent && window['closeEffect'][logicType][k].hide();
		}
	}
}


function setLayer(childObj, zValue) {
	//grou_playerDress.currentSprite.cacheAsBitmap = false;
	if (Number(zValue) == -1) {
		if (local.type == 15) {
			childObj.zIndex = 2;
		} else {
			childObj.zIndex = 1;
		}

		childObj.currentSprite.cacheAsBitmapBefore = 0;
	} else {
		childObj.zIndex = -1;
		childObj.currentSprite.cacheAsBitmapBefore = 1;
	}
};


function baiHuaFrame_setPos(m_id, effectObj) {
	if (config.postion_flower == -1) {
		return false;
	}
	var pos = config.postion_flower.split("|");
	effectObj.setPosition(Number(pos[0]), Number(pos[1]));
	return true;
}
function baiHuaFrame_setScale(m_id, effectObj) {
	if (config.enlarge_flower == -1) {
		return false;
	}
	var enlarge = config.enlarge_flower.split("|");
	effectObj.setScale(Number(enlarge[0]), Number(enlarge[1]));
	return true;

}




/**
 *  touchFruit            果实的点击事件
 */
var status = self.vars_.status;
switch (Number(status)) {
	case 0:
		//game.scripts["al_scr_AddTip_1"](null, null, "未达到领取条件~", "layer1");
		createXRewardPanel();
		break;
	case 1:
		function callBack() {
			if (arguments[1]) {
				//current_game.scripts['al_scr_' + "createTogetherUrge"].call(this, undefined, this, iconImage);
				console.log(arguments);
				game.configs.config_fruitRewad = {};

				var panelObj = createFruitRewardPanel();
				var reward = arguments[2].rewardList;
				game.vars_.dropList = [];
				for (var i = 0; i < reward.length; i++) {
					var isOwn = false;
					var dropListItem = {},
						scale = 0.6,
						posY = 36;
					var _id = reward[i].id,
						icon = null;
					if (reward[i].type == 1) {
						isOwn = true;
						icon = game.configs.prop[_id].icon;
						if (_id == 101) {
							scale = 0.6;
						}
					}
					else if (reward[i].type == 2) {
						isOwn = !(game.vars_.bagList.cloth[_id] == undefined);
						icon = game.configs.fashion[_id].icon;
						posY = 52;
					}
					else if (reward[i].type == 3) {
						isOwn = !(game.vars_.bagList.plan[_id] == undefined);
					}
					else if (reward[i].type == 4) {
						isOwn = !(game.vars_.bagList.cloth[_id] == undefined);
						icon = game.configs.face[_id].icon;
						posY = 52;
					}
					else if (reward[i].type == 5) {
						isOwn = !((game.vars_.playInfoJson.hero_gift && game.vars_.playInfoJson.hero_gift[_id]) == undefined);
						icon = game.configs.hero_gift[_id].icon;
					}

					dropListItem.isOwn = isOwn;
					dropListItem.id = reward[i].id;
					dropListItem.type = reward[i].type;
					dropListItem.num = reward[i].num;
					game.vars_.dropList.push(dropListItem);

					game.configs.config_fruitRewad[i + 1] = {
						"id": i + 1,
						"markIcon": icon,
						"num": "*" + dropListItem.num,
						"scale": scale,
						"posY": posY
					};
				}
				panelObj.objects['scro_fruitReward'].refreshRelations();

				var itemNum = reward.length;
				switch (itemNum) {
					case 1:
						panelObj.objects['scro_fruitReward'].x = 474;
						break;
					case 2:
						panelObj.objects['scro_fruitReward'].x = 429;
						break;
					case 3:
						panelObj.objects['scro_fruitReward'].x = 377;
						break;
					default:
						panelObj.objects['scro_fruitReward'].x = 377;
						break;
				}

				panelObj.hide();

				game.vars_.haveFruitBox = true;
				game.scripts["al_scr_AddToBag"](null, null, game.vars_.dropList);
				game.scripts["al_scr_InitAwardBg"](null, null, game.vars_.dropList, "layer1");

				current_game.scripts['al_scr_' + "openTogetherPlay"].call(this, undefined, this);
			} else {
				console.log(arguments[2].code);
				game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
			}
			game.scripts["al_scr_gameloadDestroy"](null, null);
		}
		game.scripts["al_scr_gameloadCreate"](null, null);
		QyRpc.getTogetherAward(self.vars_.itemId, Number(self.vars_.taskId), self.vars_.index, callBack);
		break;
	case 2:
		game.scripts["al_scr_AddTip_1"](null, null, "果子中的奖励已经领取过啦~", "layer1");
		break;
	default:
		break;
}
function createFruitRewardPanel() {
	var panelArr = qyengine.getInstancesByType("grou_fruitRewardPanel");
	var obj = null;
	if (panelArr.length) {
		var obj = panelArr[0];
	} else {
		var obj = qyengine.instance_create(0, 0, "grou_fruitRewardPanel", {
			"type": "grou_fruitRewardPanel",
			"id": "grou_fruitRewardPanel",
			"zIndex": 20
		});
	}
	obj.objects['txt_fruitRewardTitle'].text = "恭喜你领取了如下奖励：";
	return obj;
}


/**
 * 展示果实的奖励
 */
function createXRewardPanel() {
	var panelArr = qyengine.getInstancesByType("grou_fruitRewardPanel");
	var obj = null;
	if (panelArr.length) {
		var obj = panelArr[0];
	} else {
		var obj = qyengine.instance_create(0, 0, "grou_fruitRewardPanel", {
			"type": "grou_fruitRewardPanel",
			"id": "grou_fruitRewardPanel",
			"zIndex": 20
		});
	}
	obj.show();

	game.configs.config_fruitRewad = {};
	var titleObj = obj.objects['txt_fruitRewardTitle'],
		taskName = game.configs.play[self.vars_.taskId].name.split("：")[0];
	titleObj.text = "自己或者邀请的好友完成" + taskName + "，就可以摘果子领奖励~"
	var table = game.configs.play[self.vars_.taskId],
		rewardKeys = [];
	rewardList = table["reward" + self.vars_.index].split("#");
	for (var i = 0; i < rewardList.length; i++) {
		var one = rewardList[i].split("|"),
			type = Number(one[0]),
			scale = 1,
			posY = 36;
		switch (type) {
			case 1:
				var table = game.configs.prop;
				if (Number(one[1]) <= 104) {

				}
				scale = 0.6;
				break;
			case 2:
				var table = game.configs.fashion;
				//posY=52;
				break;
			case 4:
				//avg 背景图
				var table = game.configs.bg;
				//posY=52;
				break;
			case 5:
				//avg 男主礼物
				var table = game.configs.hero_gift;
				break;
			default:
				break;
		}
		game.configs.config_fruitRewad[i + 1] = {
			"id": i + 1,
			"markIcon": table[one[1]].sicon || table[one[1]].icon,
			"num": Number(one[2]),
			"scale": scale,
			"posY": posY
		};
	}
	obj.objects['scro_fruitReward'].refreshRelations();
	var itemNum = rewardList.length;
	switch (itemNum) {
		case 1:
			obj.objects['scro_fruitReward'].x = 474;
			break;
		case 2:
			obj.objects['scro_fruitReward'].x = 429;
			break;
		case 3:
			obj.objects['scro_fruitReward'].x = 377;
			break;
		default:
			obj.objects['scro_fruitReward'].x = 377;
			break;
	}

}



//70397  14
var id = 70397;
var partsObj = qyengine.guardId("grou_playerDress").objects["handTake"];
partsObj.currentSprite.texture.baseTexture.source.src
partsObj.changeSprite("obj_" + getConfig("fashion", id, "image") + "_default", null, true);





switch (self.id) {
	case "grou_commonSureBtn_togther_cancel":
		break;
	case "grou_commonSureBtn_togther":
		current_game.scripts['al_scr_' + "togetherDelFriend"].call(this, undefined, this, self.vars_.data.uid);

		break;
	default:
		break;
}
qyengine.forEach(function () {
	this.hide();
}, "grou_commonSureOrCancelPanel");


/**
 * createCommonSureOrCancelPanel
 */
var objArr = qyengine.getInstancesByType("grou_commonSureOrCancelPanel");
if (objArr.length) {
	var obj = objArr[0];
	obj.show();
} else {
	var obj = qyengine.instance_create(0, 0, "grou_commonSureOrCancelPanel", {
		"type": "grou_commonSureOrCancelPanel",
		"id": "grou_commonSureOrCancelPanel",
		"zIndex": 10
	});
}

obj.objects['grou_commonSureBtn_togther'].vars_.data = self.vars_.data;




current_game.scripts['al_scr_' + "createCommonSureOrCancelPanel"].call(this, undefined, this);





/**
 * grou_wheelLuckyBox 的点击事件
 */
function createRewardPanel() {
	//物品的种类
	var rewardGoodIndex = 0;
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
		var table = null,
			rewardGroup = panelObj.objects["grou_boxRewards"];
		switch (nowType) {
			case 1:
				table = game.configs.prop;
				rewardGroup.objects['txt_luckyWheelCommon_recharge_rewardName_' + i].text = "" + nowNum + table[nowId].name;
				rewardGroup.objects['obj_Active_interface_chognzhizhuanpan_08'].changeSprite("obj_" + table[nowId].icon + "_default");
				break;

			default:
				break;
		}
	}
	rewardGoodIndex++;
	if (self.vars_.markId == 7) {
		var tableBox = game.configs.rechargewheel_date;
		var reward_box = -1;
		for (var i in tableBox) {
			var date_startStr = tableBox[i].date_start.replace(/\|/g, "/"),
				date_overStr = tableBox[i].date_over.replace(/\|/g, "/");
			var date_start = new Date(date_startStr).getTime(),
				date_over = new Date(date_overStr).getTime() + 24 * 3600 * 1000
			nowTime = new Date().getTime();
			if (nowTime > date_start && nowTime < date_over) {
				reward_box = tableBox[i].reward_box;
				break;
			}
		}
		if (reward_box != -1) {
			var reward_boxData = reward_box.split("#");
			for (var i = 0; i < reward_boxData.length; i++) {
				var typeAndNum = reward_boxData[i].split("|"),
					icon = "Icon_face_40008";
				switch (Number(typeAndNum[0])) {
					case 2:
						icon = game.configs.fashion[typeAndNum[1]].icon;
						break;
					default:
						break;
				}
				rewardGroup.objects['obj_Active_interface_chognzhizhuanpan_0' + (i + 9)].changeSprite("obj_" + icon + "_default", null, true);
				rewardGroup.objects["txt_luckyWheelCommon_recharge_rewardName_" + (i + 1)].text = typeAndNum[2];
				rewardGoodIndex++;
			}
		}
	} else {
		rewardGroup.objects["obj_Active_interface_chognzhizhuanpan_09"].changeSprite("obj_Active_interface_chognzhizhuanpan_08_default");
		rewardGroup.objects["txt_luckyWheelCommon_recharge_rewardName_1"].text = addNum + "次转盘机会;"
		rewardGoodIndex++;
	}
	grou_boxReward_getBtn.objects["obj_Main_interfac_zhuomian_02"].hide();
	grou_boxReward_getBtn.objects["obj_Active_interface_chognzhizhuanpan_15"].hide();
	grou_boxReward_getBtn.objects["obj_Bg_Active_interface_Already_receive"].show();

	setRewardsGroupPos(rewardGoodIndex);
}

if (self.vars_.markId != undefined) {
	if (self.vars_.status == 0) {
		game.scripts["al_scr_AddTip_1"](null, null, "本周累计充值" + self.vars_.rmb + "才能领取哦~", "layer1");
	} else if (self.vars_.status == 1) {
		current_game.scripts['al_scr_' + "openBox_recharge"].call(this, undefined, this, self.vars_.markId);
	} else if (self.vars_.status == 2) {
		createRewardPanel();
	}
} else {
	//特惠商城
	game.scripts["al_scr_openDailyRechargeShop"](null, null);
}
function setRewardsGroupPos(index) {
	var rewardObj = qyengine.guardId("grou_openBoxReward");
	if (index == 3) {
		rewardObj.x = 214;
	} else if (index == 2) {
		rewardObj.x = 282;
		rewardObj.objects['obj_Active_interface_chognzhizhuanpan_010'].hide();
		rewardObj.objects['txt_luckyWheelCommon_recharge_rewardName_2'].hide();
	}
}



/**
 * openBox_recharge
 */

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
	rechangeArray();
	var goodsNum = rewardData.length;
	for (var i = 0; i < rewardData.length; i++) {
		if (i > 0) {
			break;
		}
		var nowType = rewardData[i].type;
		var nowId = rewardData[i].id;
		var nowNum = rewardData[i].num;
		var table = null,
			rewardGroup = panelObj.objects["grou_boxRewards"];
		switch (nowType) {
			case 1:
				table = game.configs.prop;
				rewardGroup.objects['txt_luckyWheelCommon_recharge_rewardName_' + i].text = "" + nowNum + table[nowId].name;
				rewardGroup.objects['obj_Active_interface_chognzhizhuanpan_08'].changeSprite("obj_" + table[nowId].icon + "_default");
				break;
			case 2:
				table = game.configs.fashion;
				rewardGroup.objects['txt_luckyWheelCommon_recharge_rewardName_' + i].text = "" + nowNum + table[nowId].name;
				rewardGroup.objects['obj_Active_interface_chognzhizhuanpan_0' + (8 + i)].changeSprite("obj_" + table[nowId].icon + "_default", null, true);
				break;
			default:
				break;
		}
	}
	if (addNum != 0) {
		rewardGroup.objects["obj_Active_interface_chognzhizhuanpan_09"].changeSprite("obj_Active_interface_chognzhizhuanpan_08_default");
		rewardGroup.objects["txt_luckyWheelCommon_recharge_rewardName_1"].text = addNum + "次转盘机会";
		goodsNum++;
	}
	setRewardsGroupPos(goodsNum);
}
function setRewardsGroupPos(index) {
	var rewardObj = qyengine.guardId("grou_boxRewards");
	if (index == 3) {
		rewardObj.x = 214;
		rewardObj.objects['obj_Active_interface_chognzhizhuanpan_09'].y = 102;
	} else if (index == 2) {
		rewardObj.x = 282;
		rewardObj.objects['obj_Active_interface_chognzhizhuanpan_010'].hide();
		rewardObj.objects['txt_luckyWheelCommon_recharge_rewardName_2'].hide();

	}
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

function rechangeArray() {
	var a = panelObj.objects['grou_boxReward_getBtn'].vars_.rewardData;
	var typeOneInArray = 0;
	for (var i = 0; i < a.length; i++) {
		var itemData = a[i];
		if (itemData.type == 1) {
			typeOneInArray = i;
			break;
		}
	}
	if (typeOneInArray != 0) {
		var insertItem = a.splice(2);
		a.splice(0, 0, insertItem[0]);
	}
}







/**
 * 高级定制
 * 设计图制作
 * 服装进化
 * 分解
 * 锦绣庄（包括竞技场商店）
 * 云梦锦
 * 排行榜
 * （以上模块功能正常）
 * 
 * 活动能正常进入不报错
 */


/**
 * initGetWayClothes
 */

/**
* initGetWayClothes
*/

var getUnGet = function () {
	var tempArr = [];
	for (var i in game.vars_.playerCurrentCloths) {
		var markId = game.vars_.playerCurrentCloths[i];
		if (i != "name" && !(markId in game.vars_.playInfoJson.bagList.cloth) && markId && judgeIsNewManClothes(i)) {
			tempArr.push(markId);
		}
	}
	return tempArr;
};
var table = game.configs.fashion,
	table_face = game.configs.face;

getUnGet = getUnGet();
if (getUnGet.length <= 0) {
	if (!((game.vars_.playerCurrentCloths.jacket != 0 && game.vars_.playerCurrentCloths.pants != 0)
		|| (game.vars_.playerCurrentCloths.dress != 0/*&&game.vars_.playerCurrentCloths.dress!=25001*/))) {
		// game.scripts["al_scr_ShowTextWarning"](null,null,"衣服还没换好!");
		game.scripts["al_scr_AddTip_1"](null, null, "衣服还没换好!", "layer1");
		return;
	}
	switch (game.vars_.intoChangeType) {
		case 0:
			//剧情换装
			if (game.vars_.questType == 0) {
				if (judgeSkill()) {
					return;
				}
				game.scripts["al_scr_SendMsgSaveQuestCloth"](null, null, game.vars_.selectQuestId, game.vars_.playerCurrentCloths, 0);
				//game.scripts["al_scr_RefreshClothes"](null, null, game.vars_.playerCurrentCloths, "grou_playerDress_Story");
			} else if (game.vars_.questType == 1) {
				game.scripts["al_scr_SendMsgSaveSideQuestCloth"](null, null, game.vars_.selectQuestId, game.vars_.playerCurrentCloths, 0);
				//game.scripts["al_scr_RefreshClothes"](null, null, game.vars_.playerCurrentCloths, "grou_playerDress_Story");
				grou_clothesPressPanel.hide();
			}
			break;
		case 10:
			//衣柜换装
			storageClothesData();
			break;
		case 1:
			//竞技场
			if (judgeSkill()) {
				return;
			}
			game.scripts["al_scr_SendMsgSaveQuestCloth"](null, null, game.vars_.selectQuestId, game.vars_.playerCurrentCloths, 1);
			break;
		case 2:
			//百花
			game.scripts["al_scr_SendMsgJoinActivity"](null, null, game.vars_.playerCurrentCloths);
			qyengine.guardId("grou_clothesPressBack").dispatchMessage({
				"type": "message",
				"message": "clothesBack"
			});
			//grou_changeBg_1.hide();
			break;
		default:
			break;
	}
	return;
}
game.configs.config_getWayClothes = {};

var result = qyengine.instance_create(0, 0, "grou_getWay_close", {
	"type": "grou_getWay_close",
	"id": "grou_getWay_close",
	"zIndex": Number(qyengine['grou_clothesPressPanelInstance'].zIndex) + 1,
	"layer": "layer0"
});

qyengine.guardId("grou_oneKeyBuy").vars_.unGet = getUnGet;
qyengine.guardId("grou_allTakeOff").vars_.unGet = getUnGet;

game.configs.config_getWayClothes = {};
for (var index = 0; index < getUnGet.length; index++) {
	var waytype = { 2: "购买", 3: "去制作", 4: "开卡", 5: "购买", 6: "" };
	var waytypeDec = { 2: "直接购买", 3: "制衣坊制作", 4: "畅玩卡限定", 5: "花瓣商城", 6: "" };
	var makeTable = table[getUnGet[index]] || table_face[getUnGet[index]];
	var gatWayArr = makeTable.gatWay.toString().split("|");
	var way = Number(gatWayArr[0]);
	var dec = waytypeDec[way];
	if (way == 6) {
		dec = gatWayArr[1];
	}
	game.configs.config_getWayClothes[index + 1] = {
		"id": index + 1,
		"icon": "obj_" + makeTable.sicon + "_default",
		"name": makeTable.name,
		"itemId": Number(getUnGet[index]),
		"dec": dec,
		"wayWord": waytype[way],
		"index": Number(gatWayArr[0])
	};
}
result.objects["scro_getWayClothes"].refreshRelations();

function judgeIsNewManClothes(markKey) {
	var newManClothes = JSON.parse(game.configs.misc[1].value);
	if (newManClothes[markKey] && newManClothes[markKey] == game.vars_.playerCurrentCloths[markKey]) {
		return false;
	}
	return true;
}
function storageClothesData() {

	var tableSuitType = game.configs.suitType;
	var tableSuitTypeFace = game.configs.suitType_face;
	for (var i in tableSuitType) {
		var type = tableSuitType[i].name;
		game.vars_.playInfoJson.suit[game.vars_.changeSuitIndex][type] = parseInt(game.vars_.playerCurrentCloths[type]);
	}
	for (var i in tableSuitTypeFace) {
		var typeFace = tableSuitTypeFace[i].name;
		game.vars_.playInfoJson.suit[game.vars_.changeSuitIndex][typeFace] = parseInt(game.vars_.playerCurrentCloths[typeFace]);
	}
	/*
		//保存背景
		if (game.vars_.playInfoJson.bgMap != null && game.vars_.curMap != null) {
			game.vars_.playInfoJson.bgMap.curMap = game.vars_.curMap;
			game.scripts["al_scr_RefreshBG"](null, null);
		}
	*/
	game.scripts["al_scr_AddTip_1"](null, null, "保存成功!", "layer1");
	game.vars_.changeSuitIsSave = true;
	var suitMsg = JSON.parse(JSON.stringify(game.vars_.playInfoJson.suit[game.vars_.changeSuitIndex]));
	game.scripts["al_scr_SendMsgSetSuit"](null, null, game.vars_.changeSuitIndex, suitMsg, 1);
	if (game.vars_.changeSuitIndex != game.vars_.playInfoJson.dressIndex) {
		game.vars_.playInfoJson.dressIndex = game.vars_.changeSuitIndex;
		//套装
		if (game.vars_.curChangeType == 101) {
			current_game.scripts['al_scr_' + "Button_MySuit"].call(this, undefined, this);
		}
	}
}
function judgeSkill() {
	if (game.vars_.playInfoJson.skillData.defaultSkills.defaultRoleSkills.length <= 0
		&& game.vars_.playInfoJson.skillData.defaultSkills.defaultPetSkills.length <= 0) {
		//未携带任何主动技能和被动技能
		qyengine.instance_create(0, 0, "grou_noSkillPop", {
			"type": "grou_noSkillPop",
			"id": "grou_noSkillPop",
			"zIndex": 20,
			"layer": "layer0"
		});
		return true;
	}
	return false;
}




//(170,710)   (0.38,0.38)




/**
 * OpenPeacockGiftPanel
 */
if (game.vars_.activePeacockGiftState == null) {

	function callBack() {
		console.log(arguments[1]);
		if (arguments[1] == true) {
			if (arguments[2].peacockSuit) {
				game.vars_.activePeacockGiftState = 0;
			} else {
				game.vars_.activePeacockGiftState = 1;
			}
			if (game.vars_.activePeacockGift == null) {
				game.vars_.activePeacockGift = qyengine.instance_create(current_scene.viewOffset.x, 0, 'PeacockGiftPanel', { "type": 'PeacockGiftPanel', "id": 'PeacockGiftPanel', "zIndex": 9, "layer": "layer0", });
				qyengine.guardId("ActivePanel").appendChild("PeacockGiftPanel", 0, 0, 10);
				PeacockGiftPanel.objects['grou_porakeGrou'].setScale(0.78, 0.78);
			} else {
				game.vars_.activePeacockGift.show();
			}
			game.scripts["al_scr_RefreshPeacockGiftData"](null, null);
		} else {
			console.log(arguments[2].code);
			game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
		}

		game.scripts["al_scr_gameloadDestroy"](null, null);
	}

	game.scripts["al_scr_gameloadCreate"](null, null);
	QyRpc.peacockSuitView(callBack);

} else {
	game.vars_.activePeacockGift.show();
	game.scripts["al_scr_RefreshPeacockGiftData"](null, null);

}


/**
 * PeacockGiftPanel 的创建事件
 */

var startTimeStr = game.vars_.activeOpenTimeDic[8].time_start;

var overTimeStr = game.vars_.activeOpenTimeDic[8].time_over;

qyengine.guardId("PeacockGiftPanelOpenTime").setText("活动时间:" + startTimeStr[0] + "年" + startTimeStr[1] + "月" + startTimeStr[2] + "日——" + overTimeStr[0] + "年" + overTimeStr[1] + "月" + overTimeStr[2] + "日");



//var data = getConfig("recharge", 10015, "diamond").split("#");
var configs_misc = game.configs.misc;
var configs_suit = game.configs.suit[configs_misc[21].value];
var data = configs_suit.fashionId.split("|");
qyengine.forEach(function () {
	this.hide();
}, "PeacockGiftItem");
for (var i = 0; i < data.length; i++) {
	//var dataArr = data[i].split("|");
	var suitIconName = getConfig("fashion", data[i], "sicon");
	var suitName = getConfig("fashion", data[i], "name");
	qyengine.guardId("PeacockGiftItemIcon_" + i).changeSprite("obj_" + suitIconName + "_default");
	qyengine.guardId("PeacockGiftItemName_" + i).text = suitName;
	qyengine.guardId("PeacockGiftItemIcon_" + i).currentSprite.parent.qyobj.show();
}

//PeacockGiftItem_5.hide();


if (game.vars_.activePeacockGiftPanelState == 1) {
	qyengine.guardId("grou_PeacockGift").show();
	qyengine.guardId("grou_PeacockGiftBuyStateImg").hide();

} else {
	qyengine.guardId("grou_PeacockGift").hide();
	qyengine.guardId("grou_PeacockGiftBuyStateImg").show();
}



grou_porakeGrou.objects['obj_UI_Active_interface_jueselihui_04_1'].changeSprite("obj_" + configs_suit.model + "_default", null, true);
tastingRoomText_3.text = "" + configs_suit.name;
var rechargeId = configs_misc[20].value;
grou_PeacockGift.objects['tastingRoomText_2'].text = game.configs.recharge[rechargeId].rmb + "元";
grou_PeacockGift.vars_.rechargeId = rechargeId;


QyRpc.clearUserData(function () { console.log(arguments) })



/**
 * openTogetherBox
 */
/**
 * openTogetherBox id  status
 */

var boxStatus = status;
if (boxStatus == 2) {
	game.scripts["al_scr_AddTip_1"](null, null, "宝箱中的奖励已经领取过啦~", "layer1");
	return;
}
var boxPopArr = qyengine.getInstancesByType("grou_boxPopPanel"),
	boxPopObj = null;;
if (boxPopArr.length == 0) {
	boxPopObj = qyengine.instance_create(0, 0, "grou_boxPopPanel", {
		"type": "grou_boxPopPanel",
		"id": "grou_boxPopPanel",
		"zIndex": 20
	});
} else {
	boxPopObj = boxPopArr[0];
	boxPopObj.show();
}
var idToTask = { 2: "任务一", 4: "任务二", 6: "任务三", 8: "任务四" };

var rewardArr = game.configs.play[id].reward.split("#");
for (var i = 0; i < rewardArr.length; i++) {
	var rewardOne = rewardArr[i].toString().split("|"),
		rewardType = Number(rewardOne[0]),
		rewardId = Number(rewardOne[1]),
		rewardNum = Number(rewardOne[2]),
		icon = null;
	switch (rewardType) {
		case 1:
			icon = game.configs.prop[rewardId].icon;
			break;

		default:
			break;
	}
	boxPopObj.objects["grou_togetherRewardItem"].objects["obj_Icon_goods_0"].changeSprite("obj_" + icon + "_default", null, false);
	boxPopObj.objects["grou_togetherRewardItem"].objects["txt_togetherPlayBoxNum_0"].text = "*" + rewardNum;
}
//可领取
if (boxStatus == 1) {
	grou_boxPopSureBtn.objects['obj_Active_yiqiwan_28_1_1'].changeSprite("obj_" + "obj_Active_yiqiwan_28" + "_default", null, true);

	boxPopObj.objects['txt_togetherPlayCommon'].text = "太棒了！大家一起完成了任务，送你以下奖励，请收下!";

} else if (boxStatus == 0) {
	grou_boxPopSureBtn.objects['obj_Active_yiqiwan_28_1_1'].changeSprite("obj_" + "obj_Active_yiqiwan_28_1" + "_default", null, true);
	boxPopObj.objects['txt_togetherPlayCommon'].text = "自己和三个好友都完成" + idToTask[id] + "才能领取哦！";

}
grou_boxPopSureBtn.vars_.itemId = id;
grou_boxPopSureBtn.vars_.status = boxStatus;


/**
 * touchFruit
 */
/**
 *  touchFruit            果实的点击事件
 */
var status = self.vars_.status;
switch (Number(status)) {
	case 0:
		//game.scripts["al_scr_AddTip_1"](null, null, "未达到领取条件~", "layer1");
		createXRewardPanel();
		break;
	case 1:
		function callBack() {
			if (arguments[1]) {
				//current_game.scripts['al_scr_' + "createTogetherUrge"].call(this, undefined, this, iconImage);
				console.log(arguments);
				game.configs.config_fruitRewad = {};

				var panelObj = createFruitRewardPanel();
				var reward = arguments[2].rewardList;
				game.vars_.dropList = [];
				for (var i = 0; i < reward.length; i++) {
					var isOwn = false;
					var dropListItem = {},
						scale = 0.6,
						posY = 36;
					var _id = reward[i].id,
						icon = null;
					if (reward[i].type == 1) {
						isOwn = true;
						icon = game.configs.prop[_id].icon;
						if (_id == 101) {
							scale = 0.6;
						}
					}
					else if (reward[i].type == 2) {
						isOwn = !(game.vars_.bagList.cloth[_id] == undefined);
						icon = game.configs.fashion[_id].icon;
						posY = 52;
					}
					else if (reward[i].type == 3) {
						isOwn = !(game.vars_.bagList.plan[_id] == undefined);
					}
					else if (reward[i].type == 4) {
						isOwn = !(game.vars_.bagList.cloth[_id] == undefined);
						icon = game.configs.face[_id].icon;
						posY = 52;
					}
					else if (reward[i].type == 5) {
						isOwn = !((game.vars_.playInfoJson.hero_gift && game.vars_.playInfoJson.hero_gift[_id]) == undefined);
						icon = game.configs.hero_gift[_id].icon;
					}

					dropListItem.isOwn = isOwn;
					dropListItem.id = reward[i].id;
					dropListItem.type = reward[i].type;
					dropListItem.num = reward[i].num;
					game.vars_.dropList.push(dropListItem);

					game.configs.config_fruitRewad[i + 1] = {
						"id": i + 1,
						"markIcon": icon,
						"num": "*" + dropListItem.num,
						"scale": scale,
						"posY": posY
					};
				}
				panelObj.objects['scro_fruitReward'].refreshRelations();

				var itemNum = reward.length;
				switch (itemNum) {
					case 1:
						panelObj.objects['scro_fruitReward'].x = 474;
						break;
					case 2:
						panelObj.objects['scro_fruitReward'].x = 429;
						break;
					case 3:
						panelObj.objects['scro_fruitReward'].x = 377;
						break;
					default:
						panelObj.objects['scro_fruitReward'].x = 377;
						break;
				}

				panelObj.hide();

				game.vars_.haveFruitBox = true;
				game.scripts["al_scr_AddToBag"](null, null, game.vars_.dropList);
				game.scripts["al_scr_InitAwardBg"](null, null, game.vars_.dropList, "layer1");

				current_game.scripts['al_scr_' + "openTogetherPlay"].call(this, undefined, this);
			} else {
				console.log(arguments[2].code);
				game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
			}
			game.scripts["al_scr_gameloadDestroy"](null, null);
		}
		game.scripts["al_scr_gameloadCreate"](null, null);
		QyRpc.getTogetherAward(self.vars_.itemId, Number(self.vars_.taskId), self.vars_.index, callBack);
		break;
	case 2:
		game.scripts["al_scr_AddTip_1"](null, null, "果子中的奖励已经领取过啦~", "layer1");
		break;
	default:
		break;
}
function createFruitRewardPanel() {
	var panelArr = qyengine.getInstancesByType("grou_fruitRewardPanel");
	var obj = null;
	if (panelArr.length) {
		var obj = panelArr[0];
	} else {
		var obj = qyengine.instance_create(0, 0, "grou_fruitRewardPanel", {
			"type": "grou_fruitRewardPanel",
			"id": "grou_fruitRewardPanel",
			"zIndex": 20
		});
	}
	obj.objects['txt_fruitRewardTitle'].text = "恭喜你领取了如下奖励：";
	obj.objects['txt_fruitRewardTitle'].x = 357;
	return obj;
}


/**
 * 展示果实的奖励
 */
function createXRewardPanel() {
	var panelArr = qyengine.getInstancesByType("grou_fruitRewardPanel");
	var obj = null;
	if (panelArr.length) {
		var obj = panelArr[0];
	} else {
		var obj = qyengine.instance_create(0, 0, "grou_fruitRewardPanel", {
			"type": "grou_fruitRewardPanel",
			"id": "grou_fruitRewardPanel",
			"zIndex": 20
		});
	}
	obj.show();

	game.configs.config_fruitRewad = {};
	obj.objects['grou_shutRewardPanel'].show();
	obj.objects['grou_fruitRewardSureBtn'].hide();
	var titleObj = obj.objects['txt_fruitRewardTitle'],
		taskName = game.configs.play[self.vars_.taskId].name.split("：")[0];
	titleObj.text = "自己或者邀请的好友完成" + taskName + "，就可以摘果子领奖励~";
	//titleObj.currentSprite.style.align = "left";
	titleObj.y = 505;
	obj.objects['txt_fruitRewardTitle_0'].setPosition(262, 499);
	obj.objects['txt_fruitRewardTitle_0'].show();
	//titleObj.currentSprite.updateText();
	var table = game.configs.play[self.vars_.taskId],
		rewardKeys = [];
	rewardList = table["reward" + self.vars_.index].split("#");
	for (var i = 0; i < rewardList.length; i++) {
		var one = rewardList[i].split("|"),
			type = Number(one[0]),
			scale = 1,
			posY = 36;
		switch (type) {
			case 1:
				var table = game.configs.prop;
				if (Number(one[1]) <= 104) {

				}
				scale = 0.6;
				break;
			case 2:
				var table = game.configs.fashion;
				//posY=52;
				break;
			case 4:
				//avg 背景图
				var table = game.configs.bg;
				//posY=52;
				break;
			case 5:
				//avg 男主礼物
				var table = game.configs.hero_gift;
				break;
			default:
				break;
		}
		game.configs.config_fruitRewad[i + 1] = {
			"id": i + 1,
			"markIcon": table[one[1]].sicon || table[one[1]].icon,
			"num": Number(one[2]),
			"scale": scale,
			"posY": posY
		};
	}
	obj.objects['scro_fruitReward'].refreshRelations();
	var itemNum = rewardList.length;
	obj.objects['scro_fruitReward'].y = 639;
	switch (itemNum) {
		case 1:
			obj.objects['scro_fruitReward'].x = 474;
			break;
		case 2:
			obj.objects['scro_fruitReward'].x = 429;
			break;
		case 3:
			obj.objects['scro_fruitReward'].x = 377;
			break;
		default:
			obj.objects['scro_fruitReward'].x = 377;
			break;
	}

}


/**
 * createMonthCard
 */
//"createMonthCard"
function create_grou_monthCard() {
	if (qyengine['grou_monthCard']) {
		qyengine['grou_monthCard'].show();
	} else {
		qyengine['grou_monthCard'] = qyengine.instance_create(0, 0, 'grou_monthCard', {
			"type": "grou_monthCard",
			"id": "grou_monthCard",
			"zIndex": 9,
			"layer": "layer0"
		});
		grou_monthCardRight_2.objects['obj_Main_interface_yueka_05_1'].changeSprite("obj_Main_interface_yueka_04_default");
		var config_10016 = game.configs.recharge[10016],
			config_10017 = game.configs.recharge[10017];
		qyengine['grou_monthCard'].objects['txt_monthCardCommon'].text = "仅需" + config_10016.rmb + "元！";
		grou_monthCardRight.objects['txt_monthCardCommon_11'].text = config_10016.rmb;
		qyengine['grou_monthCard'].objects['txt_monthCardCommon_12'].text = "仅需" + config_10017.rmb + "元！";
		grou_monthCardRight_2.objects['txt_monthCardCommon_24'].text = config_10017.rmb;
		//限时送服装的时间
		var activity_timeData = game.configs.activity_time[6];
		if (activity_timeData) {
			var time_startArr = activity_timeData.time_start.split("|"),
				time_over = activity_timeData.time_over.split("|");
			qyengine['grou_monthCard'].objects['txt_monthCardCommon_25'].text = "限时赠送（" + time_startArr[1] + "." + time_startArr[2] +
				"-" + time_over[1] + "." + time_over[2] + "）";
		}

	}
}
function backMonthCard() {
	console.log(arguments);
	if (arguments[1]) {
		create_grou_monthCard();
		if (arguments[2].princessNum) {
			grou_monthCardRight.objects['txt_monthCardCommon_9'].setText("已激活,剩余时间：" + arguments[2].princessNum + "天");
			grou_monthCardRight.objects['txt_monthCardCommon_9'].isVisible = true;
			grou_monthCardRight.objects['obj_Main_interface_yueka_10'].hide();
		} else {
			grou_monthCardRight.objects['txt_monthCardCommon_9'].hide();
			grou_monthCardRight.objects['obj_Main_interface_yueka_10'].show();
		}
		if (arguments[2].queenNum) {
			grou_monthCardRight_2.objects['txt_monthCardCommon_23'].setText("已激活,剩余时间：" + arguments[2].queenNum + "天");
			grou_monthCardRight_2.objects['txt_monthCardCommon_23'].isVisible = true;
			grou_monthCardRight_2.objects['obj_Main_interface_yueka_10_1'].hide();
		} else {
			grou_monthCardRight_2.objects['txt_monthCardCommon_23'].hide();
			grou_monthCardRight_2.objects['obj_Main_interface_yueka_10_1'].show();
		}
	} else {
		game.scripts["al_scr_CodeTips"](null, null, arguments[2].code);
	}
	game.scripts["al_scr_gameloadDestroy"](null, null);
}
game.scripts["al_scr_gameloadDestroy"](null, null);

QyRpc.viewMonthCard(backMonthCard);




var getwList = ["xxx", "免费赠送", "锦绣庄购买", "设计图制做", "购买畅玩卡", "花瓣商城购买",
	"文字说明", "钻石购买", "花瓣购买", "花瓣商城购买", "种植获得", "炼药获得", "关卡获得", "购买设计图", "云梦锦获得", "高级定制",
	"服装进化", "水晶兑换", "竞技币兑换", "百花币兑换", "VIP会员福利", "神宠商店兑换"
];





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




/**
 * AcquiringWay
 */
/**
 * AcquiringWay
 */
/**
 * "xxx", "免费赠送", "锦绣庄购买", "设计图制做", "购买畅玩卡", "花瓣商城购买",
	"文字说明", "钻石购买", "花瓣购买", "花瓣商城购买", "种植获得", "炼药获得", "关卡获得", "购买设计图", "云梦锦获得", "高级定制",
	"服装进化", "水晶兑换", "竞技币兑换", "百花币兑换", "VIP会员福利", "神宠商店兑换"
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
		var fashType = getConfig("fashion", id, "type") || getConfig("face", id, "type");
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
		//畅玩卡购买
		game.scripts["al_scr_Vip_Init"](null, null);
		break;
	case 5:
		//花瓣商城
		game.scripts["al_scr_openDailyRechargeShop"](null, null, 1);
		break;
	case 7:
		//钻石直接购买
		var tableId = game.configs.prop[id];
		var price = tableId.getWay.split("|")[1];
		var priceIcon = game.configs.prop[101].icon;
		current_game.scripts['al_scr_' + "createCommonBox"].call(this, undefined, this, id, Number(price), priceIcon, tableId.name, "getWayBuySuccess");
		break;
	case 8:
		//直接购买 花瓣
		var tableId = game.configs.prop[id];
		var price = tableId.getWay.split("|")[1];
		var priceIcon = game.configs.prop[100].icon;
		current_game.scripts['al_scr_' + "createCommonBox"].call(this, undefined, this, id, Number(price), priceIcon, tableId.name, "getWayBuySuccess");
		break;
	case 9:
		//百花
		game.vars_.shopIntoType = 5;
		// var fashType=getConfig("fashion",id,"type");
		game.scripts["al_scr_ShopInit"](null, null, fashType, id, true);
		break;
	case 10:
		//种植获得
		var petArr = qyengine.getInstancesByType("grou_PetPanel");
		if (petArr.length && petArr[0].isVisible) {
			game.vars_.petPanel = true;
		}
		var toId = game.configs.prop[id].gatWay.toString().split("#")[0].split("|")[1];
		game.scripts["al_scr_initCropPark"](null, null, null, null, toId);
		break;
	case 11:
		//炼药获得
		game.vars_.openMedcine = true;
		game.scripts["al_scr_initCropPark"](null, null);

		break;

	case 12:
		//过关获得,跳转到关卡界面
		game.scripts["al_scr_openQuestPanel"](null, null, self.vars_.indexValue);
		break;
	case 13:
		//服装分解
		game.scripts["al_scr_OpenDecompose"](null, null, fashType);

		break;
	case 14:
		//云梦锦获得 跳转到云梦锦界面
		game.scripts["al_scr_FlowerInit"](null, null);

		break;
	case 17:
		//水晶兑换
		game.scripts["al_scr_ExchangeInit"](null, null, fashType, id);
		qyengine.instance_create(150, 0, "grou_shopBuyPanel", { "type": "grou_shopBuyPanel", "id": "grou_shopBuyPanel", "zIndex": 0 });
		break;
	case 18:
		//端午
		game.scripts["al_scr_OpenDoanngoPanel"](null, null);

		break;
	case 19:
		//百花

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
	case 23:
		//打开翡翠商城
		game.vars_.fromGetWay = true;
		game.scripts["al_scr_ExchangeInit"](null, null, fashType, id);
		qyengine.instance_create(150, 0, "grou_shopBuyPanel", {
			"type": "grou_shopBuyPanel",
			"id": "grou_shopBuyPanel",
			"zIndex": 0
		});
		break;
	default:

		break;
}




/**
 * 给服务端做的特殊处理 服务端需要
 */


/**
 * LimitInit
 */
qyengine.instance_create(0, 0, "grou_limitPanel", { "type": "grou_limitPanel", "id": "grou_limitPanel", "zIndex": 20 });
qyengine.guardId("grou_limitPanel").setAnchorPoint(0.5, 0.5);
qyengine.guardId("grou_limitPanel").setPosition(current_scene.width / 2 + current_scene.viewOffset.x, 640);

var markTable = grou_flowerPanel.vars_.currentType == 2 ? game.configs.drawPreview_emerald : game.configs.drawPreview;
for (var i = 0; i < Object.keys(markTable).length; i++) {
	var data = markTable[i + 1];
	var suitId = data.suitId;
	var fashion = getConfig("suit", suitId, "fashionId").toString();
	var fashionId = fashion.split("|");
	list_limit.addOneInstance("grou_limit_name", { id: "grou_limit_name_" + i });
	qyengine.guardId("grou_limit_name_" + i).objects.txt_suitName.setText("限定套装：" + getConfig("suit", suitId, "name"));
	list_limit.addOneInstance("cont_limit", { id: "cont_limit_" + i });
	var container = qyengine.guardId("cont_limit_" + i);
	for (var j = 0; j < fashionId.length; j++) {
		container.addOneInstance("grou_limitCloth", (j % 3) * 174, parseInt(j / 3) * 166, { id: "grou_limitCloth_" + i + "_" + j });
		var type = getConfig("fashion", fashionId[j], "type");
		var typeStr = getConfig("suitType", type, "name");
		//qyengine.guardId("grou_limitCloth_" + i + "_" + j).objects.obj_Icon.changeSprite("obj_Icon_" + typeStr + "_" + fashionId[j] + "_default");
		qyengine.guardId("grou_limitCloth_" + i + "_" + j).objects.obj_Icon.changeSprite("obj_" + getConfig("fashion", fashionId[j], "icon") + "_default", null, true);
		qyengine.guardId("grou_limitCloth_" + i + "_" + j).objects.txt_clothName.setText(getConfig("fashion", fashionId[j], "name"));
	}
}
list_limit.currentSprite.refreshView();



/**
 * Button_UpgradeSelect
 */

var grou_upgradePanelObj = qyengine.getInstancesByType("grou_upgradePanel")[qyengine.getInstancesByType("grou_upgradePanel").length - 1];
var grou_UpgradeTopObj = grou_upgradePanelObj.objects.grou_UpgradeTop;

grou_upgradePanelObj.objects.grou_UpgradeTop.show();

grou_upgradePanelObj.vars_.curItemId = itemId;

for (var i = 0; i <= 3; i++) {
	var grou_card_upgradeObj = qyengine.guardId("grou_card_upgrade_" + qyengine.getInstancesByType("grou_upgradePanel").length + i);

	if (grou_card_upgradeObj.vars_.itemId == itemId) {
		grou_card_upgradeObj.vars_.isPressed = true;
		grou_card_upgradeObj.objects.obj_Ui_select_the_box.show();
	}
	else {
		grou_card_upgradeObj.vars_.isPressed = false;
		grou_card_upgradeObj.objects.obj_Ui_select_the_box.hide();
	}
}

var left = getConfig("fashionEvolution", itemId, "evolution");
var leftId = left.split("|")[0];
var leftAmount = left.split("|")[1];

grou_upgradePanelObj.objects.grou_UpgradeTop.objects.txt_name_left.setText(getConfig("fashion", leftId, "name"));
var type = getConfig("fashion", leftId, "type");
var typeStr = getConfig("suitType", type, "name");
grou_upgradePanelObj.objects.grou_UpgradeTop.objects.obj_image_left.changeSprite("obj_" + getConfig("fashion", leftId, "show") + "_default", null, true);

var propertyStr = getConfig("fashion", leftId, "propertyInfo");
var property = propertyStr.split("#");
for (var i = 0; i < property.length; i++) {
	grou_upgradePanelObj.objects.grou_UpgradeTop.objects["obj_property_left_" + i].changeSprite("obj_FontImage_property_" + property[i] + "_default");
}

var contain = 0;
if (game.vars_.bagList.cloth[leftId]) {
	contain = game.vars_.bagList.cloth[leftId].num;
}
grou_upgradePanelObj.objects.grou_UpgradeTop.objects.grou_tailorMatAmount.objects.txt_amount.setText(contain + "/" + leftAmount);
grou_upgradePanelObj.objects.grou_UpgradeTop.objects.grou_tailorMatAmount.objects.obj_Btn_add.vars_.itemType = 2;
grou_upgradePanelObj.objects.grou_UpgradeTop.objects.grou_tailorMatAmount.objects.obj_Btn_add.vars_.itemId = leftId;

grou_upgradePanelObj.objects.grou_UpgradeTop.objects.txt_name_right.setText(getConfig("fashion", itemId, "name"));
type = getConfig("fashion", itemId, "type");
typeStr = getConfig("suitType", type, "name");
grou_upgradePanelObj.objects.grou_UpgradeTop.objects.obj_image_right.changeSprite("obj_" + getConfig("fashion", itemId, "show") + "_default", null);

propertyStr = getConfig("fashion", itemId, "propertyInfo");
property = propertyStr.split("#");
for (var i = 0; i < property.length; i++) {
	grou_upgradePanelObj.objects.grou_UpgradeTop.objects["obj_property_right_" + i].changeSprite("obj_FontImage_property_" + property[i] + "_default");
}


//设置服装的 品质
var qualityData = getConfig("fashion", leftId, "quality");
grou_UpgradeTopObj.objects.AdvancedHeardLeft.width = 176 * (qualityData / 6);
grou_UpgradeTopObj.objects.AdvancedHeardLeft.x = (35.2 * (6 - qualityData)) / 2 + 86;



qualityData = getConfig("fashion", itemId, "quality");
grou_UpgradeTopObj.objects.AdvancedHeardRight.width = 176 * (qualityData / 6);
grou_UpgradeTopObj.objects.AdvancedHeardRight.x = (35.2 * (6 - qualityData)) / 2 + 464;


var hasNum = 0;

if (game.vars_.bagList.cloth[itemId]) {
	hasNum = game.vars_.bagList.cloth[itemId].num;
}
grou_UpgradeTopObj.objects.hasUpgradeNumText.setText("已拥有:" + hasNum);

grou_upgradePanelObj.objects.grou_upGroupDontHas.hide();



/**
 * InitMailContent
 */
//**************************************************
//动作序列  InitMailContent   初始化单个邮件内容
//参数1 id 唯一标识
//**************************************************
game.scripts["al_scr_CommonInstanceCreate"](null, null, "grou_mailContent");
game.vars_.selectMailId = id;
var index = game.scripts["al_scr_GetNumFromString"](null, null, index);
var contentObj = qyengine.guardId("grou_mailContent");
contentObj.isVisible = true;

contentObj.objects["txt_content_title"].setText(game.vars_.playerMailData[index].title);
var timeStr = game.scripts["al_scr_TimestampToTime"](null, null, Number(game.vars_.playerMailData[index].sendTime / 1000));
contentObj.objects["txt_content_time"].setText(timeStr);
qyengine.guardId("txt_mailContent").setText(game.vars_.playerMailData[index].content);


// for (var i = 0; i < 5; ++i) {
// 	qyengine.guardId("grou_mailAwardIcon_" + i).isVisible = false;
// }

var obj = qyengine.getInstancesByType("grou_mailAwardIcon");
for (var i = 0; i < obj.length; i++) {
	obj[i].destroy();
}

qyengine.guardId("grou_mail_knowBtn").isVisible = false;
qyengine.guardId("grou_mail_getBtn").isVisible = false;
qyengine.guardId("obj_Btn_jiaqunyouli").hide();
if (game.vars_.playerMailData[index].type == 1) {
	qyengine.guardId("grou_mail_knowBtn").isVisible = true;
} else if (game.vars_.playerMailData[index].type == 3) {
	qyengine.guardId("obj_Btn_jiaqunyouli").show();
	//有一键加群
	var awardList = game.vars_.playerMailData[index].award;
	if (awardList && awardList.length) {
		qyengine.guardId("grou_mail_getBtn").isVisible = true;
		createAward(awardList);
	} else {
		qyengine.guardId("grou_mail_knowBtn").isVisible = true;
	}
} else {
	qyengine.guardId("grou_mail_getBtn").isVisible = true;

	//添加奖励显示
	var awardList = game.vars_.playerMailData[index].award;
	createAward(awardList);
}

function createAward(awardList) {
	for (var i = 0; i < awardList.length; ++i) {

		// if (i >= 5) {
		// 	//暂时屏蔽显示第六个奖励
		// 	continue;
		// }
		qyengine.instance_create(0, 0, "grou_mailAwardIcon", { "type": "grou_mailAwardIcon", "id": 'grou_mailAwardIcon_' + i, "zIndex": 9 });
		contentObj.objects.scro_mailContent.appendChild('grou_mailAwardIcon_' + i, 6, 12, 0, i, false, true);

		var awardInfo = awardList[i];
		qyengine.guardId("grou_mailAwardIcon_" + i).isVisible = true;

		var awardIcon = qyengine.guardId("grou_mailAwardIcon_" + i);
		var goodsIcon = awardIcon.objects["mail_goodsIcon_4"];
		var clothIcon = awardIcon.objects["mail_clothIcon_4"];
		goodsIcon.isVisible = false;
		clothIcon.isVisible = false;

		if (awardInfo.type == 1) {
			goodsIcon.isVisible = true;
			goodsIcon.changeSprite("obj_" + getConfig("prop", awardInfo.id, "icon") + "_default", null, true);
		} else if (awardInfo.type == 2) {
			clothIcon.isVisible = true;
			clothIcon.changeSprite("obj_" + getConfig("fashion", awardInfo.id, "icon") + "_default", null, true);
		} else if (awardInfo.type == 3) {
			goodsIcon.isVisible = true;
			goodsIcon.changeSprite("obj_" + getConfig("fashionPlan", awardInfo.id, "icon") + "_default", null, true);
		} else if (awardInfo.type == 4) {
			goodsIcon.isVisible = true;
			goodsIcon.changeSprite("obj_" + getConfig("face", awardInfo.id, "icon") + "_default", null, true);
			goodsIcon.y += 20;
		}
		else if (awardInfo.type == 5) {
			goodsIcon.isVisible = true;
			goodsIcon.changeSprite("obj_" + getConfig("hero_gift", awardInfo.id, "icon") + "_default", null, true);
		} else if (awardInfo.type == 7) {
			goodsIcon.isVisible = true;
			goodsIcon.changeSprite("obj_" + getConfig("poetry", awardInfo.id, "icon") + "_default", null, true);
		}

		awardIcon.objects["goodsNum_4"].setText(awardInfo.num);
	}
}




/**
 * Button_DesignSelect
 */


function backAAndB(markS) {
	var backTxt = "";
	switch (markS) {
		case 'A':
			backTxt = "优秀";
			break;
		case 'B':
			backTxt = "优良";
			break;
		case 'C':
			backTxt = "普通";
			break;
		case 'S':
			backTxt = "完美";
			break;
		case 'SS':
			backTxt = "完美+";
			break;
		default:
			break;
	}
	return backTxt;
}

var grou_designPanelObj = qyengine.getInstancesByType("grou_designPanel")[qyengine.getInstancesByType("grou_designPanel").length - 1];


var grou_DesignMiddleObj = grou_designPanelObj.objects.grou_DesignMiddle;
grou_designPanelObj.objects.grou_DesignMiddle.show();

grou_designPanelObj.vars_.curItemId = itemId;
grou_designPanelObj.vars_.curPlanId = planId;

var allCard = qyengine.getInstancesByType("grou_card_design");
for (var i = 0; i <= 3; i++) {
	var grou_card_designObj = qyengine.guardId("grou_card_design_" + qyengine.getInstancesByType("grou_designPanel").length + i);

	if (grou_card_designObj.vars_.itemId == itemId) {
		grou_card_designObj.vars_.isPressed = true;
		grou_card_designObj.objects.obj_Ui_select_the_box.show();
	}
	else {
		grou_card_designObj.vars_.isPressed = false;
		grou_card_designObj.objects.obj_Ui_select_the_box.hide();
	}
}


for (var i = 0; i < 5; i++) {
	grou_designPanelObj.objects.grou_DesignMiddle.objects["obj_property_" + (i + 1)].hide();
	grou_designPanelObj.objects.grou_DesignMiddle.objects["obj_propertyTex" + (i + 1)].hide();
}


//game.scripts["al_scr_DesignClothShowInit"](null,null,itemId);


var propertyStr = getConfig("fashion", itemId, "property");
var property = propertyStr.split("#");
for (var i = 0; i < property.length; i++) {
	var dataIndex = property[i].split("|");

	grou_designPanelObj.objects.grou_DesignMiddle.objects["obj_property_" + (i + 1)].show();
	grou_designPanelObj.objects.grou_DesignMiddle.objects["obj_propertyTex" + (i + 1)].show();
	grou_designPanelObj.objects.grou_DesignMiddle.objects["obj_property_" + (i + 1)].changeSprite("obj_FontImage_property_" + dataIndex[0] + "_default");
	grou_designPanelObj.objects.grou_DesignMiddle.objects["obj_propertyTex" + (i + 1)].text = backAAndB(dataIndex[1])/*dataIndex[1]*/;
}




var name = getConfig("fashion", itemId, "name");
grou_designPanelObj.objects.grou_DesignMiddle.objects.txt_text_clothName.setText(name);

var quality = getConfig("fashion", itemId, "quality");

grou_designPanelObj.objects.grou_DesignMiddle.objects.designHeardIcon.width = 176 * (quality / 6);
grou_designPanelObj.objects.grou_DesignMiddle.objects.designHeardIcon.x = (35.2 * (6 - quality)) / 2 + 68;


if (game.vars_.bagList.plan[planId] == undefined) {
	grou_designPanelObj.objects.grou_DesignMiddle.objects.obj_Icon_tailours_ungot.show();


	var getType = getConfig("fashionPlan", planId, "gatWay").split("|")[0];
	//没有设计图
	grou_designPanelObj.vars_.hasNotPlan = true;

	var type = getConfig("fashion", itemId, "type");
	var typeStr = getConfig("fashionPlan", planId, "icon");

	grou_designPanelObj.objects.grou_DesignMiddle.objects.grou_clothShow.objects.obj_ClothShow.changeSprite(typeStr, null, true);


}
else {
	grou_designPanelObj.objects.grou_DesignMiddle.objects.obj_Icon_tailours_ungot.hide();
	//有设计图
	grou_designPanelObj.vars_.hasNotPlan = false;
	var type = getConfig("fashion", itemId, "type");
	var typeStr = getConfig("fashionPlan", planId, "fashionId");
	var endId = getConfig("fashion", typeStr, "show")
	grou_designPanelObj.objects.grou_DesignMiddle.objects.grou_clothShow.objects.obj_ClothShow.changeSprite(endId, null, true);

}

for (var i = 0; i < 3; i++) {
	grou_designPanelObj.objects.grou_DesignMiddle.objects["grou_matIcon_" + i].hide();
}
grou_DesignMiddleObj.objects.grou_designPanelAdd2.hide();
var mat = getConfig("fashionPlan", planId, "material");
var matStr = mat.split("#");
for (var i = 0; i < matStr.length; i++) {
	var str = matStr[i].split("|");
	var material = str[0];
	var amount = str[1];
	var contain = 0;
	if (game.vars_.bagList.cloth[material] != undefined)
		contain = game.vars_.bagList.cloth[material].num;
	var type = getConfig("fashion", material, "type");
	var typeStr = getConfig("suitType", getConfig("fashion", material, "type"), "name");
	grou_designPanelObj.objects.grou_DesignMiddle.objects["grou_matIcon_" + i].show();
	//grou_designPanelObj.objects.grou_DesignMiddle.objects["grou_matIcon_" + i].objects["obj_matIcon" + i].changeSprite("obj_Icon2_" + typeStr + "_" + material + "_default", null, true);
	grou_designPanelObj.objects.grou_DesignMiddle.objects["grou_matIcon_" + i].objects["obj_matIcon" + i].changeSprite("obj_" + getConfig("fashion", material, "sicon") + "_default", null, true);

	grou_designPanelObj.objects.grou_DesignMiddle.objects["grou_matIcon_" + i].objects["txt_matName" + i].setText(getConfig("fashion", material, "name"));

	grou_DesignMiddleObj.objects["grou_matIcon_" + i].objects["grou_tailorMatAmount_" + i].objects["txt_matAmount" + i].setText(contain + "/" + amount);
	grou_DesignMiddleObj.objects["grou_matIcon_" + i].objects["grou_tailorMatAmount_" + i].objects["obj_Btn_add" + i].vars_.itemType = 2;
	grou_DesignMiddleObj.objects["grou_matIcon_" + i].objects["grou_tailorMatAmount_" + i].objects["obj_Btn_add" + i].vars_.itemId = material;
	if (i >= 2) {

		grou_DesignMiddleObj.objects.grou_designPanelAdd2.show();
	}

}

var getType = getConfig("fashionPlan", planId, "gatWay").split("|")[0];
var getStr = game.vars_.GetwList[getType];
grou_DesignMiddleObj.objects.LevelsdropInfo.setText("获取来源:" + getStr);


grou_designPanelObj.objects.grou_designTop.hide();

grou_designPanelObj.objects.grou_DesignMiddle.show();

grou_designPanelObj.vars_.itemId = itemId;






if (self.vars_.type && Number(self.vars_.type) == 12) {
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

	//制衣界面
	var designPanel = qyengine.getInstancesByType("grou_designPanel");
	if (designPanel.length && designPanel[0].isVisible) {
		qyengine.getInstancesByType("grou_designPanel")[qyengine.getInstancesByType("grou_designPanel").length - 1].destroy();
		//game.scripts["al_scr_RefreshRedDot"](null, null);
		game.scripts["al_scr_RefreshTask"](null, null);
		game.scripts["al_scr_RefreshGetAwarData"](null, null);
		game.scripts["al_scr_refreshHelpTips"](null, null);
	}

	game.scripts["al_scr_CommonDestroy"](null, null, "grou_settlement_new");
	qyengine.guardId("grou_clothDetail").destroy();
	return;
}

game.scripts["al_scr_AcquiringWay"](null, null, self.vars_.index, self.vars_.itemType, self.vars_.itemId);

//qyengine.guardId("grou_clothDetail").destroy();

qyengine.guardId("grou_clothDetail") && !qyengine.guardId("grou_clothDetail")._destroyed && qyengine.guardId("grou_clothDetail").destroy();






/**
 * PetMainPanel  的创建事件
 */

//初始化宠物数据

if (game.vars_.friendpet) {
	if (game.vars_.stealType) {
		self.objects['petText_lookAfterNum'] && self.objects['petText_lookAfterNum'].hide();
	} else {
		self.objects['petText_lookAfterNum'] && self.objects['petText_lookAfterNum'].show();
	}
	self.objects['petText_lookAfterNum'].text = "今日剩余照看好友人数:" + game.vars_.lookAfterNum;
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
	ItemObj.petRolleItemIcon.changeSprite("obj_" + iconName + "_default", null, true);
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
	ItemObj.petRolleItemIcon.changeSprite("obj_" + iconName + "_default", null, true);

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
 * TouchPet
 */


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
			qyengine.guardId("petPropertyMaxIcon_" + i).changeSprite("obj_FontImage_property_" + propertyArr[0] + "_default", null, true);
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
			qyengine.guardId("petPropertyIcon_" + i).changeSprite("obj_FontImage_property_" + propertyArr[0] + "_default", null, true);
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
	qyengine.guardId("obj_petDeblockingIcon").changeSprite("obj_" + getConfig("prop", adoptMoneyData[1], "smallIcon") + "_default", null, true);
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
	qyengine.guardId("obj_fate_pet_beijing_02").changeSprite("obj_fate_pet_beijing_01_default", null, true);
	qyengine.guardId("obj_fate_pet_13_1").changeSprite("obj_fate_pet_13_1_default", null, true);

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
	var PetActionItem_classId = game.vars_.friendpet ? "PetActionItem_friend" : "PetActionItem";
	//重新加
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
			qyengine.guardId(PetActionItem_classId + i).objects['obj_fate_pet_bt_06'].changeSprite("obj_fate_pet_bt_Friend_02_default", null, true);
		}
		if (game.vars_.friendpet && indexNum == 3 && game.vars_.petData[petId].qinting != undefined && game.vars_.petData[petId].qinting == 0 && i == 0) {
			qyengine.guardId(PetActionItem_classId + i).objects['obj_fate_pet_bt_06'].changeSprite("obj_fate_pet_bt_Friend_03_default", null, true);
		}
		if (game.vars_.friendpet && indexNum == 0 && game.vars_.petData[petId].weisi != undefined && game.vars_.petData[petId].weisi == 0 && i == 0) {
			qyengine.guardId(PetActionItem_classId + i).objects['obj_fate_pet_bt_06'].changeSprite("obj_fate_pet_bt_Friend_01_default", null, true);
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
	qyengine.guardId("obj_fate_pet_beijing_02").changeSprite("obj_fate_pet_beijing_02_default", null, true);


}

var setPetImagePos = function () {
	var petTable = game.configs.pet[petId];
	var petPos = petTable.pet_place1.split("|");
	var petTextPos = petTable.pet_place3.split("|");
	var petBoxPos = petTable.pet_place2.split("|");
	qyengine.guardId("PetAdoptionPetImg1").setPosition(Number(petPos[0]), Number(petPos[1]));
	qyengine.guardId("petChildhoodDialogueText").setPosition(Number(petTextPos[0]), Number(petTextPos[1]));
	qyengine.guardId("obj_fate_pet_box_17_1").setPosition(Number(petBoxPos[1]), Number(petBoxPos[2]));
	qyengine.guardId("obj_fate_pet_box_17_1").setMirror(1, Number(petBoxPos[0]) == 1 ? 1 : -1);
}

//设置宠物的外形
function SetPetOutlineHandle() {

	var icon;
	if (petData.level == 0) {
		icon = getConfig("pet", petId, "image").split(";")[0];
		qyengine.guardId("PetAdoptionPetImg1").changeSprite("obj_" + icon + "_default", null, true);
		setPetImagePos();

	} else if (petData.level > 0 && petData.level <= 2) {
		icon = getConfig("pet", petId, "image").split(";")[petData.level - 1];
		qyengine.guardId("PetAdoptionPetImg1").changeSprite("obj_" + icon + "_default", null, true);
		setPetImagePos();

	} else {
		icon = getConfig("pet", petId, "image").split(";")[petData.level - 1];
		qyengine.guardId("PetAdoptionPetImg2").changeSprite("obj_" + icon + "_default", null, true);
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
	qyengine.guardId("petTipsTextInfo1").text = "饱食,心情每" + "<font  color='#ff0000'>" + "20分钟减1点" + "</font>" + "," + "<font  color='#ff0000'>" + "饱食为0" + "</font>时宠物会死亡。";
	//只显示萤火商店
	setPetShopIsShow(1);

} else {
	//只显示萤火商店
	setPetShopIsShow(0);
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
	qyengine.guardId("obj_fate_pet_13_1").changeSprite("obj_fate_pet_14_default", null, true);
	qyengine.guardId("obj_petDeblockingIcon").changeSprite("obj_" + game.configs.prop[123].smallIcon + "_default", null, true);
	qyengine.guardId("petDeblockingUseMoneyText").text = "1 (拥有：" + (game.vars_.playInfoJson.xumindan || 0) + ")";
	qyengine.guardId("obj_petDeblockingIcon").x = 81;
	qyengine.guardId("petDeblockingUseMoneyText").x = 116;
	return;
} else {
	qyengine.guardId("obj_petDeblockingIcon").x = 136;
	qyengine.guardId("petDeblockingUseMoneyText").x = 177;
}


//领养前后
if (petData.isAdopt == 1) {
	ToAdoptHandle();
} else {
	NotToAdoptHandle();
	qyengine.guardId("obj_fate_pet_13_1").changeSprite("obj_fate_pet_13_default", null, true);
	return;
}



if (petData.growVal >= parseInt(cardinalityNum) && petData.level < 3) {
	//到达飞升状态
	qyengine.guardId("grouAdopt").show();
	qyengine.guardId("grou_AdoptionAward").hide();
	qyengine.guardId("grou_PetPlay").hide();
	var resurgenceMoneyData = getConfig("pet", game.vars_.CurryPetID, "up").split(";")[petData.level - 1].split("|");
	qyengine.guardId("petDeblockingUseMoneyText").text = resurgenceMoneyData[2];

	qyengine.guardId("obj_petDeblockingIcon").changeSprite("obj_petDeblockingIcon_default", null, true);

	qyengine.guardId("obj_petDeblockingIcon").x = 136;
	qyengine.guardId("petDeblockingUseMoneyText").x = 177;
	qyengine.guardId("obj_fate_pet_13_1").changeSprite("obj_fate_pet_15_default", null, true);

	return;
} else if (petData.level >= 3 && game.vars_.friendpet) {
	qyengine.forEach(function () {
		if (game.vars_.alreadyStealPet && this.objects['obj_fate_pet_bt_06'].spriteName == "obj_fate_pet_bt_Friend_06_default") {
			this.objects['obj_fate_pet_bt_06'].changeSprite("obj_fate_pet_bt_Friend_02_default", null, true);
			game.vars_.alreadyStealPet = null;
		}
	}, "PetActionItem_friend");
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
		item.objects.grouPetActionItemUseMoney.objects.petPlayUseMoneyIcon.changeSprite("obj_" + moneyIcon + "_default", null, true);
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
	item.objects.obj_fate_pet_bt_06.changeSprite("obj_" + PetMainPanel.vars_.addPropertyIcon[activeID] + "_default", null, true);
}




//刷新喂食的Item 
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
			feedItem.objects['obj_fate_pet_bt_06'].changeSprite("obj_fate_pet_bt_06_default", null, true);
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
			listenItem.objects['obj_fate_pet_bt_06'].changeSprite("obj_fate_pet_bt_26_default", null, true);
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
	listenItem.objects['grouPetActionItemUseMoney'].objects['petPlayUseMoneyIcon'].changeSprite("obj_Icon_Diamonds_default", null, true);
	listenItem.objects['petTextCdTime'].hide();
	listenItem.objects['petText_no'].hide();
	listenItem.objects['petPlayAddPropertyText'].text = "" + CalPlus(dataPlace);
	if (!game.vars_.friendpet || (game.vars_.friendpet && game.vars_.petData[game.vars_.CurryPetID].youguai == undefined)) {
		listenItem.objects['obj_fate_pet_bt_06'].changeSprite("obj_fate_pet_bt_Friend_06_default", null, true);
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

		itemUi.AdoptionAwardIcon.changeSprite("obj_" + awardIcon + "_default", null, true);
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
		grou_AdoptionAward.objects.obj_fate_pet_bt_23.changeSprite("obj_fate_pet_bt_24_default", null, true);
		grou_AdoptionAward.objects.ExploreTheTimeCdText.text = "探索中....." + formatSeconds(petData.exploreTime);


	} else {
		//探索已经完成 领取状态
		grou_AdoptionAward.objects.petSpeedUpBtn.vars_.state = 0;
		grou_AdoptionAward.objects.obj_fate_pet_bt_23.changeSprite("obj_fate_pet_bt_23_default", null, true);
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
	qyengine.guardId("obj_fate_pet_13_1").changeSprite("obj_fate_pet_14_default", null, true);

	qyengine.guardId("obj_petDeblockingIcon").changeSprite("obj_" + game.configs.prop[123].smallIcon + "_default", null, true);
	qyengine.guardId("petDeblockingUseMoneyText").text = "1 (拥有：" + (game.vars_.playInfoJson.xumindan || 0) + ")";
	qyengine.guardId("obj_petDeblockingIcon").x = 81;
	qyengine.guardId("petDeblockingUseMoneyText").x = 116;
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
	qyengine.guardId("obj_fate_pet_13_1").changeSprite("obj_fate_pet_15_default", null, true);

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
	if (petData.exploreTime != undefined && (petData.exploreTime > 0 || petData.exploreReward == 2)) {
		grou_PetPlay.hide();
		ExploreIngHandle();

	} else {
		grou_PetPlay.show();
		grou_AdoptionAward.hide();
		//宠物形 喂食 玩耍 探索
		RefreshPetformActivityHandle();
	}

}

































