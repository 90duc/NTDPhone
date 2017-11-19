let typeList = {
    top: { type: 'top', name: '口碑' },
    hot: { type: 'hot', name: '热门' },
    new: { type: 'new', name: '新品' }  
};

function getType(value) {
    var res = null;
    for (var name in typeList) {
        if (typeList[name].type == value) {
            res = typeList[name];
            break;
        }
    }
    return res;
}
export default {
    typeList: typeList,
    getType: getType
}