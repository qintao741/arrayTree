

module.exports.convertArrayToTree = function (data) {

    var childrenListMap = {};
    var nodeIds = {};
    var tree = [], count = 0, total = 0;

    for (let d of data) {
        let parentId = d.parentId;
        if (childrenListMap[parentId] == null) {
            childrenListMap[parentId] = [];
        }
        nodeIds[d.id] = d;
        childrenListMap[parentId].push(d);
    }

    total = Object.keys(childrenListMap).length;

    for (let d of data) {
        let parentId = d.parentId;
        if (nodeIds[parentId] == null) {
            tree.push(d);
        }
    }

    for (let t of tree) {
        console.log('这是tree' + t);
        if (count == total) {
            break;
        }
        adaptToChildrenList(t);
    }

    function adaptToChildrenList(o) {
        if (childrenListMap[o.id] !== null) {
            o["childrenLits"] = childrenListMap[o.id];
            count++;
            if (count == total) {
                return;
            }
        }
        if (o.childrenLits) {
            for (let c of o.childrenLits) {
                if (count == total) {
                    break;
                }
                adaptToChildrenList(c);
            }
        }
    }
    return tree;
};





