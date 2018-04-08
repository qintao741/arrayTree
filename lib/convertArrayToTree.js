/*
    将一个平铺的数据转换成一个树形的数据结构
 config={
    id:id,     //对象id
    parentId:parentId    //父元素对象ID
    childrenList:childrenList     //树形属性名称[]
 }
 */

module.exports.convertArrayToTree = function (data,c) {

    if (!Array.isArray(data)) {
        throw new TypeError('array-unique expects an array.');
    }

    let config = {
        id:c.id?c.id:"id",
        parentId:c.parentId?c.parentId:"parentId",
        childrenList:c.childrenList?c.childrenList:"childrenList",
    };

    var childrenListMap = {};   //
    var nodeIds = {};   //将每一个数据项存储为一个对象
    var tree = [], count = 0, total = 0;    // tree 返回数据

    for (let d of data) {       //求出子元素列表对象
        let parentId = d[config.parentId];
        if (childrenListMap[parentId] == null) {
            childrenListMap[parentId] = [];
        }
        nodeIds[d[config.id]] = d;
        childrenListMap[parentId].push(d);
    }

    total = Object.keys(childrenListMap).length;    //总共需要几次操作

    for (let d of data) {      //初始化tree
        let parentId = d[config.parentId];
        if (nodeIds[parentId] == null) {
            tree.push(d);
        }
    }

    for (let t of tree) {
        if (count == total) {
            break;
        }
        adaptToChildrenList(t);
    }

    function adaptToChildrenList(o) {      //开始拼接数据
        if (childrenListMap[o[config.id]] !== null) {
            o[config.childrenList] = childrenListMap[o[config.id]];
            count++;
            if (count == total) {
                return;
            }
        }
        if (o[config.childrenList]) {
            for (let c of o[config.childrenList]) {
                if (count == total) {
                    break;
                }
                adaptToChildrenList(c);
            }
        }
    }
    return tree;
};





