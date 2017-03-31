/**
 * Created by tao on 17/3/31.
 */
var array = [
    {
        "id": 1,
        "parent": 0
    },
    {
        "id": 2,
        "parent": 1
    },
    {
        "id": 3,
        "parent": 2
    },
    {
        "id": 4,
        "parent": 3
    },
    {
        "id": 5,
        "parent": 4
    },
    {
        "id": 6,
        "parent": 4
    }];

var tree = [
    {
        "id": 1,
        "parent": 0,
        "list": [
            {
                "id": 2,
                "parent": 1,
                "list": [
                    {
                        "id": 3,
                        "parent": 2,
                        "list": [
                            {
                                "id": 4,
                                "parent": 3,
                                "list": [
                                    {
                                        "id": 5,
                                        "parent": 4
                                    },
                                    {
                                        "id": 6,
                                        "parent": 4
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

var util = require("./index.js");

var d = util.convertArrayToTree(array,{id:"id",parentId:"parent",childrenList:"list"});

var z = util.convertTreeToArray(tree,{childrenList:"list",needDelete:true});

console.log(JSON.stringify(z));




// var d2 = util.convertTreeToArray(tree);

