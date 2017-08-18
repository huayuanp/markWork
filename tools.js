






function callBack()
{
    console.log("活动回调",arguments);
    
    if(arguments[1] == true)
    {
        game.vars_.activeOpenData=arguments[2]["openActivity"];
        game.vars_.activePeacockGiftPanelState= arguments[2]["hotSale"];
        game.vars_.activeOpenTimeDic= arguments[2]["actTimes"];
        if(game.vars_.isHideShareButton)
        {
            for(var i=0;i<game.vars_.activeOpenData.length;i++)
            {
                if(game.vars_.activeOpenData[i]=="5")
                {
                   game.vars_.activeOpenData.splice(i,1);
                }
            }
        }
            game.vars_.activeTastingRoomIsOpen=arguments[2]["receivePower"];
            game.vars_.activeInviteFriendData=arguments[2]["invitefriend"];
            game.vars_.activeSevenid=arguments[2]["sevenid"];
            game.vars_.activeSevenOpen=arguments[2]["sevenActivity"];
            game.vars_.activeSevenOpenID=openId;
    qyengine.instance_create(150, 0, 'ActivePanel', {"type": 'ActivePanel',"id": 'ActivePanel',"zIndex":9,"layer":"layer0",});
    }else
    {
        console.log(arguments[2].code);
        game.scripts["al_scr_CodeTips"](null,null,arguments[2].code);   
    }




		//连续登陆
		if (qyengine.guardId("obj_ActiveReddot_7") != null) {
			if (arguments[2]["continueLoginPoint"]) {
				qyengine.guardId("obj_ActiveReddot_7").show();
			} else {
				qyengine.guardId("obj_ActiveReddot_7").hide();
			}
		}

if(qyengine.guardId("obj_ActiveReddot_1")!=null)
{
           //御膳房红点
if(arguments[2]["receivePower"])
{
    qyengine.guardId("obj_ActiveReddot_1").show();
 

}else
{
    qyengine.guardId("obj_ActiveReddot_1").hide();
}

}

if(qyengine.guardId("obj_ActiveReddot_2")!=null)
{
    //三元购红点
if(arguments[2]["status"][0].num>0)
{
    //qyengine.guardId("obj_ActiveReddot_2").show();
 
}else
{
    qyengine.guardId("obj_ActiveReddot_2").hide();
}
    
}


if(qyengine.guardId("obj_ActiveReddot_5")!=null)
{
    //邀请好友
if(arguments[2]["invite"]==1)
{
    qyengine.guardId("obj_ActiveReddot_5").show();
 
}else
{
    qyengine.guardId("obj_ActiveReddot_5").hide();
}
    
}

if(qyengine.guardId("obj_ActiveReddot_3")!=null)
{
    //七日套装
if(arguments[2]["sevenActivity"]==1)
{
    qyengine.guardId("obj_ActiveReddot_3").show();
 
}else
{
    qyengine.guardId("obj_ActiveReddot_3").hide();
}

    
}

//私密小铺
if(qyengine.guardId("obj_ActiveReddot_6")!=null)
{
    //私密小铺
if(arguments[2]["privateShop"]==1)
{
    qyengine.guardId("obj_ActiveReddot_6").show();
 
}else
{
    qyengine.guardId("obj_ActiveReddot_6").hide();
}

    
}



//限时热卖
if(qyengine.guardId("obj_ActiveReddot_8")!=null)
{

    //限时热卖
if(arguments[2]["hotSale"]==1)
{
    qyengine.guardId("obj_ActiveReddot_8").show();
 
}else
{
    qyengine.guardId("obj_ActiveReddot_8").hide();
}

    
}

//累计充值
if(qyengine.guardId("obj_ActiveReddot_9")!=null)
{

    //累计充值
if(arguments[2]["sumChargePoint"]==1)
{
    qyengine.guardId("obj_ActiveReddot_9").show();
 
}else
{
    qyengine.guardId("obj_ActiveReddot_9").hide();
}
  
}



//摇钱树
if(qyengine.guardId("obj_ActiveReddot_10")!=null)
{

    //摇钱树
if(arguments[2]["shakeMoneyPoint"]==1)
{
    qyengine.guardId("obj_ActiveReddot_10").show();
 
}else
{
    qyengine.guardId("obj_ActiveReddot_10").hide();
}
  
}


game.scripts["al_scr_gameloadDestroy"](null, null);
}

game.scripts["al_scr_gameloadCreate"](null, null);
QyRpc.OpenActivity(callBack);