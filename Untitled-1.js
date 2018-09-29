//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends egret.DisplayObjectContainer {



    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin

            context.onUpdate = () => {

            }
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        this.runGame().catch(e => {
            console.log(e);
        })



    }

    private async runGame() {
        await this.loadResource()
        this.createGameScene();
        const result = await RES.getResAsync("description_json")
        //this.startAnimation(result);
        await platform.login();
        const userInfo = await platform.getUserInfo();
        console.log(userInfo);

    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    private textfield: egret.TextField;

    /**
     * 创建游戏场景
     * Create a game scene
     */
    //private times: number;
    private static typeTotal: number = 5;
    private static hangTotal: number = 10;
    private static lieTotal: number = 9;
    private boxs = [];
    private createGameScene() {
        for (let i = 0; i < Main.hangTotal; i++) {
            var markEveryLies = [];
            for (let j = 0; j < Main.lieTotal; j++) {
                let boxType = this.getGenerate(Main.typeTotal);
                let posx: number = 50 + 55 * j;
                let posy: number = 100 + 55 * i;
                let posXY: any = { x: j, y: i };
                let box = new Box(boxType, posXY);
                box.x = posx;
                box.y = posy;
                box.touchEnabled = true;
                this.addChild(box);
                markEveryLies.push(box);
                box.addEventListener(egret.TouchEvent.TOUCH_TAP, this.boxOnclick, this);
            }
            this.boxs.push(markEveryLies);
        }

    }

    /**
     * box点击事件
     */
    private boxOnclick(e: egret.Event): void {
        //console.log(e.target);
        let destroyObjs = [],
            index = 0,
            boxs: any = this.boxs;

        let destroys = gt(e.target.hangLie.y, e.target.hangLie.x);
        if (index >= 3) {
            for (let i = 0; i < destroys.length; i++) {
                let destroyParent = destroys[i].parent;
                if (destroyParent) {
                    destroyParent.removeChild(destroys[i]);
                }
            }
            this.moveBox();
        } else {
            //不能消除，需要还原boxs
            for (let i = 0; i < destroys.length; i++) {
                this.boxs[destroys[i].hangLie.y][destroys[i].hangLie.x] = destroys[i];
            }
        }
        function gt(y: number, x: number) {
            var oneBoxType: number = boxs[y][x].type;
            function df(y: number, x: number) {
                if (y < 0 || x < 0 || x > Main.lieTotal - 1 || y > Main.hangTotal - 1 || boxs[y][x] == null || oneBoxType != boxs[y][x].type) {
                    return;
                }
                index++;
                destroyObjs.push(boxs[y][x]);
                boxs[y][x] = null;
                df(y - 1, x);
                df(y + 1, x);
                df(y, x + 1);
                df(y, x - 1);
            }
            df(y, x);
            return destroyObjs;
        }
    }
    /**
     * box移动
     */
    private moveBox() {
        //找出消除发生在哪几列
        for (let i = Main.hangTotal - 1; i >= 0; i--) {
            for (let j = 0; j < Main.lieTotal; j++) {
                if (this.boxs[i][j] == null) {
                    let emptyLie: boolean = true;
                    for (let k = i - 1; k >= 0; k--) {
                        if (this.boxs[k][j]) {
                            emptyLie = false;
                            this.boxs[i][j] = this.boxs[k][j];
                            this.boxs[k][j].setMove(i, j);
                            this.boxs[k][j] = null;
                            break;
                        }
                    }
                    if (emptyLie && i == Main.hangTotal - 1) {
                        //有空列
                        console.log("有空列：" + j);
                    }
                }
            }
        }
    }
    /**
     * 生成随机数
     */
    private getGenerate(value: number): number {
        let randomType: number = Math.floor(5 * Math.random());
        return randomType;
    }
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name: string) {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    private startAnimation(result: string[]) {
        let parser = new egret.HtmlTextParser();

        let textflowArr = result.map(text => parser.parse(text));
        let textfield = this.textfield;
        let count = -1;
        let change = () => {
            count++;
            if (count >= textflowArr.length) {
                count = 0;
            }
            let textFlow = textflowArr[count];

            // 切换描述内容
            // Switch to described content
            textfield.textFlow = textFlow;
            let tw = egret.Tween.get(textfield);
            tw.to({ "alpha": 1 }, 200);
            tw.wait(2000);
            tw.to({ "alpha": 0 }, 200);
            tw.call(change, this);
        };

        change();
    }
    private touchHandler(evt: egret.TouchEvent): void {
        var tx: egret.TextField = evt.currentTarget;
        tx.textColor = 0x00ff00;
    }
}