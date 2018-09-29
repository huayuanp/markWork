                qyengine.guardId('scro_1').addOneInstance('obj_1', 1 + repeatTime - 1, 1 - 1, {
                    "way": 'objectName',
                    "type": 'obj_1',
                    "id":'obj_1_'+repeatTime,
                   extend: {
                        a: {
                            variable: "a",
                            value: "a"
                        }
                    },
                    "autoAdd": "",
                    "y": 1 + repeatTime,
                    "x": 1,
                    "center": "",
                    "px": 26,
                    "py": 47,
                    "allowMultiple": 'true'
                });
//qyengine.guardId('obj_1_'+repeatTime).vars_.xxx=repeatTime;
//滚轴容器的优化