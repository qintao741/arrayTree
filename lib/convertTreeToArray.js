/*
   将树形结构的数组转换成平铺的数组
 */

module.exports.convertTreeToArray = function (data,c) {

    if (!Array.isArray(data)) {
        throw new TypeError('array-unique expects an array.');
    }


    let config = {
        needDelete:c.needDelete?c.needDelete:false,
        childrenList:c.childrenList?c.childrenList:"childrenList"
    };

    let array = [];

    function convert(data) {
        let n = Object.assign({},data);
        config.needDelete && delete n[config.childrenList];
        array.push(n);

        if(data[config.childrenList]){
            for(let c of data[config.childrenList]){
                convert(c);
            }
        }
    }
    for(let d of data){
        convert(d);
    }

    return array;
};





