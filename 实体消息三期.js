current_game.scripts['scr_kbe_entity'].call(this, "Account", true);
        current_game.scripts['scr_kbe_register']("onLoginSuccessfully", "loginSuccessCallback");
        current_game.scripts['scr_kbe_register']("onLoginFailed", "loginFailCallback");
        current_game.scripts['scr_kbe_register']('onCreateAccountResult', 'registerCallback');
        current_game.scripts['scr_kbe_register']('onDisableConnect', 'onDisableConnect');
        current_game.scripts['scr_kbe_register']('onKicked', 'onKicked');
        current_game.scripts['scr_kbe_register']('onConnectStatus', 'onConnectStatus');
        current_game.scripts['scr_kbe_register']('onLoginBaseappFailed', 'onLoginBaseappFailed');
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "set_pveAutoFightBoss", "set_pveAutoFightBoss");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "set_vip", "updateVIP");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "set_fighting", "updateFighting");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "set_gold", "updateGold");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "set_silver", "updateSilver");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "set_level", "refurbishInfo");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "set_loong", "updataeLoong");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "set_exp", "refurbishInfoExp");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespRolesList", "reqRolesListCallback");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespCreateRoleResult", "onRespCreateRoleCallback");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespResult", "onRespResult");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespChatMessage", "chatMessage");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespLoongAutoEquip", "onRespLoongAutoEquip");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespStrengWingResult", "onRespStrengWingResult");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespCultureWingResult", "onRespCultureWingResult");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespStrengWingResult", "onRespStrengWingResult");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespFightingResult", "onRespFightingResultRole");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespEveryDayMissionInfo", "onRespEveryDayMissionInfo");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespAcievemntInfo", "onRespAcievemntInfo");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespAcievementReward", "onRespAcievementReward");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespAutoCultureWingResult", "onRespAutoCultureWingResult");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespBlessTime", "onRespBlessTime");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespBoxReward", "onRespBoxReward");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespOpenMailbox", "openMailboxSuccessCallback");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespStarSuit", "onRespStarSuit");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespFoesList", "create_foes_scene");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespTitlesListResult", "battlelog");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespBelssFailed", "onRespBelssFailed");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespBlessEquipInfo", "onRespBlessEquipInfo");

        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespGoodsChange", "onRespGoodsChange");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespEquipAdd", "onRespEquipAdd");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespRedPointNotice", "onRespRedPointNotice");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespShopEquipInfo", "onRespShopEquipInfo");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespEquipRemove", "onRespEquipRemove");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespWelfare", "fuli_initdate_resp_welfare");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespOverlordInfo", "onRespOverlordInfo");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespClickKindomCity", "onRespClickKindomCity");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespRoleAttr", "onRespRoleAttr");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespOpenSignin", "fuli_initdate_resp_signin");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespClickSignin", "onRespClickSignin");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespFlushCityUi", "onRespFlushCityUi");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespClickCityRank", "onRespClickCityRank");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespEquipEnergy", "onRespEquipEnergy");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespEquipStar", "onRespEquipStar");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespExchequerInfo", "onRespExchequerInfo");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespApplyJoinGuildResult", "onRespApplyJoinGuildResult");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespHeritageEquipInfo", "onRespHeritageEquipInfo");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespRankList", "onRespRankList");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespGuildWeal", "onRespGuildWeal");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespDartInfo", "onRespDartInfo");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespAwardInfo", "onRespAwardInfo");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespOpenCityTime", "onRespOpenCityTime");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespOverLordOnline", "onRespOverLordOnline");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespClickGuildsTask", "onRespClickGuildsTask");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespExchangeCodeResult", "onRespExchangeCodeResult");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespPvpRevengeFighting", "onRespPvpRevengeFighting");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespPvpRevengeResult", "onRespPvpRevengeResult");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespOverlordTime", "onRespOverlordTime");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespOverLordOnline", "onRespOverLordOnline");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespPvpSportRefreshList", "onRespPvpSportRefreshList");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespPvpActiveSportRankResult", "onRespPvpActiveSportRankResult");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespPvpSportFightLogs", "onRespPvpSportFightLogs");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespPvpSportFighting", "onRespPvpSportFighting");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespPvpSportFightResult", "onRespPvpSportFightResult");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onResGetBrotherWelfare", "onResGetBrotherWelfare");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespFlushOverlordInfo", "onRespFlushOverlordInfo");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespClickTabDefends", "clickGuardTabCallback");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespSeeOtherPlayerInfoResult", "onRespSeeOtherPlayerInfoResult");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespGuildLevelList", "onRespGuildLevelList");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespCityEnd", "onRespCityEnd");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespOffLine", "onRespOffLine");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespSeeOtherPlayerRoleInfoResult", "onRespSeeOtherPlayerRoleInfoResult");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespHurtRank", "onRespHurtRank");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespBossBattleInfo", "onRespBossBattleInfo");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespClickBattle", "onRespClickBattle");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespWorldBossLevel", "onRespWorldBossLevel");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespWorldBossStatus", "onRespWorldBossStatus");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespCrossServerMythicalAnimals", "onRespCrossServerMythicalAnimals");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespCrossServerMythicalAnimalsResult", "onRespCrossServerMythicalAnimalsResult");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespClickGuildsBoss", "onRespClickGuildsBoss");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespClickEnterBossInfo", "onRespClickEnterBossInfo");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespClickEnterJoin", "onRespClickEnterJoin");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespLockBoss", "onRespLockBoss");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespCallBoss", "onRespCallBoss");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespClickRecharge", "onRespClickRecharge");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespGuildBossBattleInfo", "onRespGuildBossBattleInfo");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespClickBattleProgress", "onRespClickBattleProgress");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespGuildBossInspire", "onRespGuildBossInspire");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account","onRespGuildBossBattleProgress","onRespGuildBossBattleProgress");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account","onRespClickBoss","onRespClickBoss");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account","onRespNewHandGuideStep","guide_getinformation");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account","onRespPayResultQuery","onRespPayResultQuery");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account","onRespWin","onRespWin");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account","onRespGuildBossHurtRank","onRespGuildBossHurtRank");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account","onRespGuildBossFiled","onRespGuildBossFiled");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account","onRespWorldBossWin","onRespWorldBossWin");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account","onRespDefendLog","onRespDefendLog");     //国库英雄记录
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account","onRespWorldBossFiled","onRespWorldBossFiled");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account","onRespQualitySuit","onRespQualitySuit");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account","onRespClickGuildWeal","onRespClickGuildWeal");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account","onRespResult70","onRespResult70");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account","onRespNobilityInfo","onRespNobilityInfo");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account","onRespSurplusHp","onRespSurplusHp");
        //国库激励成功回调
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account","onRespClickConstruct","onRespClickConstruct");
       //打开一封邮件新的回调
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account","onRespOpenOneMailbox","onRespOpenOneMailbox");
        //一键领取后的物品的回调
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account","onRespClickAllReward","onRespClickAllReward");
        //徐广原talkingdata
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account","onRespGoldChange","onRespGoldChange");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account","onRespPayStatistics","onRespPayStatistics");
        //活动的实体消息的注册
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account","onRespActivityOne","onRespActivityOne");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account","onRespClickActivity","onRespClickActivity");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account","onRespActivityTwo","onRespActivityTwo");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account","onRespActivityThree","act_levelgift_getmessage");

        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespCrossServerExchequerInfo", "onRespCrossServerExchequerInfo");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespCrossServerDefendInfo", "onRespCrossServerDefendInfo");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespCrossServerFightDefendsResult", "onRespCrossServerFightDefendsResult");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespIsGetReward", "onRespIsGetReward");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespGetRecode", "onRespGetRecode");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespCrossServerDefends", "onRespCrossServerDefends");
        current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespAutoReplaceEquip", "onRespAutoReplaceEquip");
       current_game.scripts['scr_kbe_regsterEntityEvent'].call(this, "Account", "onRespAutoUpgradeSkill", "onRespAutoUpgradeSkill");

        current_game.scripts["al_scr_" + 'actionlist_pwangEntityLogin'] && current_game.scripts["al_scr_" + 'actionlist_pwangEntityLogin'].call(this, undefined, this);
        current_game.scripts["al_scr_" + 'battleMessageRegister'] && current_game.scripts["al_scr_" + 'battleMessageRegister'].call(this, undefined, this);
        current_game.scripts["al_scr_" + 'battlelog_message'] && current_game.scripts["al_scr_" + 'battlelog_message'].call(this, undefined, this);