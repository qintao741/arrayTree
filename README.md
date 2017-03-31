# arrayTree

js数组平铺和树形结构的转换

# Examples

````
var util = require("./index.js");

var d = util.convertArrayToTree(array,{id:"id",parentId:"parent",childrenList:"list"});

var z = util.convertTreeToArray(tree,{childrenList:"list",needDelete:true});
````

