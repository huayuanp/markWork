//
//QyRpc.regist("asdhfjdjshfjsdhfj", "dgdgdtdy", "1", "", "", function(){console.log(arguments)})    
//QyRpc.login("asdhfjdjshfjsdhfj", "dgdgdtdy", function(){console.log(arguments)})
//console.log("刷新经验值和等级");


CREATE TABLE `Account`(
    `id`  int(11) UNSIGNED NOT NULL AUTO_INCREMENT ,
    `user`  char(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '用户名' ,
    `name`  char(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '昵称' ,
    `pass`  char(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '密码' ,
    `openId`  varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '渠道来源id' ,
    `head_img`  varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '头像img' ,
    `create_time`  int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '创建时间' ,
    `money`  int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '蟹币' ,
    `real`  int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '成蟹' ,
    `update_time`  int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '更新时间' ,
    `vip_flg`  tinyint(1) UNSIGNED NOT NULL DEFAULT 0 COMMENT 'vip标识(0:不是，1：是)' ,
    `ad_vip_time`  int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '充值vip时间' ,
    `over_vip_time`  int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT 'vip到期时间' ,
    `de_level`tinyint(1) UNSIGNED NOT NULL DEFAULT 0 COMMENT '仓库等级' ,
    `pool_level`tinyint(1) UNSIGNED NOT NULL DEFAULT 0 COMMENT '池塘等级' ,
    `sign_num`tinyint(1) UNSIGNED NOT NULL DEFAULT 0 COMMENT '连续签到天数' ,
    `stole_num`tinyint(1) UNSIGNED NOT NULL DEFAULT 0 COMMENT '今日可被偷次数' ,
    `point`int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '积分' ,
    `server_id`tinyint(1) UNSIGNED NOT NULL DEFAULT 0 COMMENT '服务器id',
    'hunger'                            '饱腹度'
    PRIMARY KEY (`id`),
    INDEX`vip_flg`(`vip_flg`),
    INDEX`user`(`user`)
)ENGINE= INNODB  DEFAULT CHARSET= utf8 comment '用户表';

CREATE TABLE `login_log`(
    `id`  int(11) UNSIGNED NOT NULL AUTO_INCREMENT ,
    `uid`  int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '用户id' ,
    `login_time`  int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '登录时间' ,
    `over_time`  int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '退出时间' ,
    `only`  varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '唯一设备号' ,
    PRIMARY KEY (`id`),
    INDEX`uid`(`uid`)
)ENGINE= INNODB  DEFAULT CHARSET= utf8 comment '登录日志表';

CREATE TABLE `friend`(
    `id`  int(11) UNSIGNED NOT NULL AUTO_INCREMENT ,
    `uid`  int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '用户id' ,
    `fid`  varchar(312) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '好友id，序列化' ,
    PRIMARY KEY (`id`),
    INDEX`uid`(`uid`)
)ENGINE= INNODB  DEFAULT CHARSET= utf8 comment '好友表';

CREATE TABLE `sign`(
    `id`  int(11) UNSIGNED NOT NULL AUTO_INCREMENT ,
    `uid`  int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '用户id' ,
    `sign_time`  int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '签到时间' ,
    PRIMARY KEY (`id`),
    INDEX`uid`(`uid`)
)ENGINE= INNODB  DEFAULT CHARSET= utf8 comment '签到表';

CREATE TABLE `prop`(
    `id`  int(11) UNSIGNED NOT NULL AUTO_INCREMENT ,
    `uid`  int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '用户id' ,
    `sid`  int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '道具id' ,
    `use_time`  int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '使用时间' ,
    `over_time`  int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '结束时间' ,
    `num`  int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '剩余数量' ,
    `vip_flg`tinyint(1) UNSIGNED NOT NULL DEFAULT 0 COMMENT '是否vip可用',
    `name`  char(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '道具名称' ,
    `create_time`  int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '拥有时间' ,
    PRIMARY KEY (`id`),
    INDEX`uid`(`uid`)
)ENGINE= INNODB  DEFAULT CHARSET= utf8 comment '道具表';

CREATE TABLE `share`(
    `id`  int(11) UNSIGNED NOT NULL AUTO_INCREMENT ,
    `uid`  int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '用户id' ,
    `sign_time`  int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '分享时间' ,
    PRIMARY KEY (`id`),
    INDEX`uid`(`uid`)
)ENGINE= INNODB  DEFAULT CHARSET= utf8 comment '微信分享表';

CREATE TABLE `nofare`(
    `id`  int(11) UNSIGNED NOT NULL AUTO_INCREMENT ,
    `uid`  int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '用户id' ,
    `buy_time`  int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '购买时间' ,
    `money`  int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '金额' ,
    `type`tinyint(1) UNSIGNED NOT NULL DEFAULT 0 COMMENT '消费类型，道具，升级',
    `type_id`  int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '道具id' ,
    `content`  varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '备注' ,
    `vip_flg`  int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '是否vip' ,
    PRIMARY KEY (`id`),
    INDEX`uid`(`uid`),
    INDEX`type_id`(`type_id`)
)ENGINE= INNODB  DEFAULT CHARSET= utf8 comment '虚拟消费日志表';

CREATE TABLE `fare`(
    `id`  int(11) UNSIGNED NOT NULL AUTO_INCREMENT ,
    `uid`  int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '用户id' ,
    `buy_time`  int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '购买时间' ,
    `money`  int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '金额' ,
    `cate`tinyint(1) UNSIGNED NOT NULL DEFAULT 0 COMMENT '充值分类',
    `content`  varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '备注' ,
    `type`  int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '充值类型 支付宝，微信' ,
    PRIMARY KEY (`id`),
    INDEX`uid`(`uid`),
    INDEX`type`(`type`)
)ENGINE= INNODB  DEFAULT CHARSET= utf8 comment '真实消费日志表';

CREATE TABLE `crab`(
    `id`  int(11) UNSIGNED NOT NULL AUTO_INCREMENT ,
    `uid`  int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '用户id' ,
    `level`tinyint(1) UNSIGNED NOT NULL DEFAULT 0 COMMENT '等级',
    `isstole`tinyint(1) UNSIGNED NOT NULL DEFAULT 0 COMMENT '是否可偷',
    `hp`tinyint(1) UNSIGNED NOT NULL DEFAULT 0 COMMENT '生命值',
    `ispublic`tinyint(1) UNSIGNED NOT NULL DEFAULT 0 COMMENT '是否公共蟹池',
    `store_uid`  int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '从谁那偷来' ,
    `sex`tinyint(1) UNSIGNED NOT NULL DEFAULT 0 COMMENT '公 母',
    `source`tinyint(1) UNSIGNED NOT NULL DEFAULT 0 COMMENT '获得螃蟹的来源',
    `ripe_time`  int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '成熟时间' ,
    `dis_time`  int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '消失时间' ,
    `weight`  char(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '体重' ,
    PRIMARY KEY (`id`),
    INDEX`uid`(`uid`),
    INDEX`ispublic`(`ispublic`)
)ENGINE= INNODB  DEFAULT CHARSET= utf8 comment '螃蟹表';

CREATE TABLE `catch`(
    `id`  int(11) UNSIGNED NOT NULL AUTO_INCREMENT ,
    `uid`  int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '用户id' ,
    `store_uid`  int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '螃蟹原所有人' ,
    `content`  varchar(256) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '螃蟹编号序列化' ,
    PRIMARY KEY (`id`),
    INDEX`uid`(`uid`),
    INDEX`store_uid`(`store_uid`)
)ENGINE= INNODB  DEFAULT CHARSET= utf8 comment '捕捞日志表';

CREATE TABLE `convert`(
    `id`  int(11) UNSIGNED NOT NULL AUTO_INCREMENT ,
    `uid`  int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '用户id' ,
    `num`  int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '兑换数量' ,
    `name`  char(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '兑换的物品名称' ,
    `create_time`  int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '兑换时间' ,
    `flg`tinyint(1) UNSIGNED NOT NULL DEFAULT 0 COMMENT '虚拟还是实物的标识',
    PRIMARY KEY (`id`),
    INDEX`uid`(`uid`)
)ENGINE= INNODB  DEFAULT CHARSET= utf8 comment '兑换记录表';

CREATE TABLE `address`(
    `id`  int(11) UNSIGNED NOT NULL AUTO_INCREMENT ,
    `uid`  int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '用户id' ,
    `phone`  char(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '手机号' ,
    `name`  char(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '兑换的物品名称' ,
    `code`  int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '邮编' ,
    `address`  varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '详细地址' ,
    `city`  char(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '市' ,
    `province`  char(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '省' ,
    PRIMARY KEY (`id`),
    INDEX`uid`(`uid`)
)ENGINE= INNODB  DEFAULT CHARSET= utf8 comment '用户默认地址管理表';

CREATE TABLE `mail`(
    `id`  int(11) UNSIGNED NOT NULL AUTO_INCREMENT ,
    `uid`  int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '用户id' ,
    `phone`  char(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '手机号' ,
    `name`  char(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '兑换的物品名称' ,
    `city`  char(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '市' ,
    `province`  char(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '省' ,
    `code`  int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '邮编' ,
    `address`  varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '详细地址' ,
    PRIMARY KEY (`id`),
    INDEX`uid`(`uid`)
)ENGINE= INNODB  DEFAULT CHARSET= utf8 comment '邮寄信息表';

CREATE TABLE `promotion`(
    `id`  int(11) UNSIGNED NOT NULL AUTO_INCREMENT ,
    `uid`  int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '用户id' ,
    `pid`  int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '活动id' ,
    `sid`  int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '奖品id' ,
    `time`  int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '中奖时间' ,
    PRIMARY KEY (`id`),
    INDEX`uid`(`uid`)
)ENGINE= INNODB  DEFAULT CHARSET= utf8 comment '活动记录表';

CREATE TABLE `package`(
    `id`  int(11) UNSIGNED NOT NULL AUTO_INCREMENT ,
    `code`  char(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '兑换码' ,
    `type`tinyint(1) UNSIGNED NOT NULL DEFAULT 0 COMMENT '礼包类型',
    `flg`tinyint(1) UNSIGNED NOT NULL DEFAULT 0 COMMENT '是否已领',
    `sign_uid`  int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '领取人id' ,
    `time`  int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '领取时间' ,
    PRIMARY KEY (`id`),
    INDEX`sign_uid`(`sign_uid`)
)ENGINE= INNODB  DEFAULT CHARSET= utf8 comment '礼包领取表';













var _goodId = Number(goodId);

if (!_goodId) {
    console.log("数据出错！");
    return;
}
var quColour = ["#ffffff", "#00ff15", "#0011ff", "#ff00dd", "#a35700"];
//弹框
var pos = getConfig('UIConfig', 'grou_shop_goodDetail', 'position').split(',');
var zIndex = /*getConfig('UIConfig', 'grou_shop_goodDetail', 'zIndex')*/999;
var layer = getConfig('UIConfig', 'grou_shop_goodDetail', 'layer');

if (z_index) {
    //zIndex = z_index;
}
//返回格子的的品质底图
function ReturnGridQuality(quality) {
    return "role_quality_" + quality + "_default";
}
qyengine.instance_create(Number(pos[0]), Number(pos[1]), 'grou_shop_goodDetail', { "id": 'grou_shop_goodDetail', "zIndex": zIndex, "layer": layer });
console.log("物品详情框！");
var markIcon = 0;
var markName = 0;
var markQuality = 0;
//pwang 增加
var decStr = 0;
if (game.configs.item[_goodId]) {
    markIcon = game.configs.item[_goodId].icon;
    markName = game.configs.item[_goodId].name;
    markQuality = game.configs.item[_goodId].quality;
    decStr = game.configs.item[_goodId].dec;
} else if (game.configs.box[_goodId]) {
    markIcon = game.configs.box[_goodId].icon;
    markName = game.configs.box[_goodId].name;
    markQuality = game.configs.box[_goodId].quality;
    decStr = game.configs.box[_goodId].dec;
} else if (game.configs.title[_goodId]) {
    markIcon = game.configs.title[_goodId].icon;
    markName = game.configs.title[_goodId].name;
    markQuality = game.configs.title[_goodId].quality;
    decStr = game.configs.title[_goodId].dec;
} else if (game.configs.equipment[_goodId]) {
    markIcon = game.configs.equipment[_goodId].icon;
    markName = game.configs.equipment[_goodId].name;
    decStr = game.configs.equipment[_goodId].dec;
}
if (game.configs.title[_goodId]) {
    grou_shop_goodDetail.objects.obj_shop_goodDetail_Icon_wh.changeSprite('' + markIcon + '_default');
} else {
    grou_shop_goodDetail.objects.obj_shop_goodDetail_Icon_wh.changeSprite('obj_' + markIcon + '_default');
}
//是否传了品质
if (goodQuality) {
    markQuality = goodQuality;
}
grou_shop_goodDetail.objects.txt_shop_goodsDetailName.setText(markName);
grou_shop_goodDetail.objects.txt_shop_goodsDetailName.setFontColor(quColour[markQuality - 1]);
//obj_通用_道具框_橙_shop_goodDetail_wh_1_1

grou_shop_goodDetail.objects.obj_通用_道具框_橙_shop_goodDetail_wh_1_1.changeSprite(ReturnGridQuality(markQuality));
/*
if (game.configs.title[_goodId]) {
	decStr = game.configs.item[_goodId].dec;
} else {
	decStr = game.configs.title[_goodId].dec;
}
*/
//var decStr = game.configs.item[_goodId].dec;
//首先要判断这个文本有没|
if (decStr.indexOf("|") > 0) {
    var decStrArr = decStr.split("|");
    decStr = "";
    for (var i = 0; i < decStrArr.length; i++) {
        decStr = decStr + decStrArr[i] + "\n";

    }

}
grou_shop_goodDetail.objects.txt_shop_equipment_des_wh.setText(decStr);