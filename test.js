/**
 * Created by tao on 17/3/31.
 */
var array = [
    {
        "id": 1,
        "parentId": 0,
        "name": "王兴(总办)",
        "settingId": 625,
        "employeeId": "000001",
        "level": 1,
        "isClicked": null,
        "leaf": false
    },
    {
        "id": 2,
        "parentId": 1,
        "name": "穆荣均(总办)",
        "settingId": 625,
        "employeeId": "000002",
        "level": 2,
        "isClicked": null,
        "leaf": false,
        "isSubmit": true,
    },
    {
        "id": 3,
        "parentId": 2,
        "name": "邓昀泽(企业平台研发部)",
        "settingId": 625,
        "employeeId": "028103",
        "level": 3,
        "isClicked": null,
        "leaf": false
    },
    {
        "id": 4,
        "parentId": 3,
        "name": "方正柱(企业平台研发部)",
        "settingId": 625,
        "employeeId": "039984",
        "level": 4,
        "isClicked": null,
        "leaf": false
    },
    {
        "id": 5,
        "parentId": 4,
        "name": "马杰星(HR研发组)",
        "settingId": 625,
        "employeeId": "0002410",
        "level": 5,
        "isClicked": null,
        "leaf": true
    },
    {
        "id": 6,
        "parentId": 4,
        "name": "喻峙元(HR平台组)",
        "settingId": 625,
        "employeeId": "03015798",
        "level": 5,
        "isClicked": null,
        "leaf": true
    }];
var tree = [
    {
        "id": 1,
        "parentId": 0,
        "name": "王兴(总办)",
        "settingId": 625,
        "employeeId": "000001",
        "level": 1,
        "isClicked": null,
        "leaf": false,
        "childrenLits": [
            {
                "id": 2,
                "parentId": 1,
                "name": "穆荣均(总办)",
                "settingId": 625,
                "employeeId": "000002",
                "level": 2,
                "isClicked": null,
                "leaf": false,
                "isSubmit": true,
                "childrenLits": [
                    {
                        "id": 3,
                        "parentId": 2,
                        "name": "邓昀泽(企业平台研发部)",
                        "settingId": 625,
                        "employeeId": "028103",
                        "level": 3,
                        "isClicked": null,
                        "leaf": false,
                        "childrenLits": [
                            {
                                "id": 4,
                                "parentId": 3,
                                "name": "方正柱(企业平台研发部)",
                                "settingId": 625,
                                "employeeId": "039984",
                                "level": 4,
                                "isClicked": null,
                                "leaf": false,
                                "childrenLits": [
                                    {
                                        "id": 5,
                                        "parentId": 4,
                                        "name": "马杰星(HR研发组)",
                                        "settingId": 625,
                                        "employeeId": "0002410",
                                        "level": 5,
                                        "isClicked": null,
                                        "leaf": true
                                    },
                                    {
                                        "id": 6,
                                        "parentId": 4,
                                        "name": "喻峙元(HR平台组)",
                                        "settingId": 625,
                                        "employeeId": "03015798",
                                        "level": 5,
                                        "isClicked": null,
                                        "leaf": true
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

var util = require("./index.js")


var d = util.convertArrayToTree(array);
var d2 = util.convertArrayToTree(array);
console.log(JSON.stringify(d));
console.log(JSON.stringify(d2));