let typeList = {
    top: { type: 'top', name: '口碑', url: 'topwurl' },
    hot: { type: 'hot', name: '热门', url: 'hoturl' },
    new: { type: 'new', name: '新品', url: 'newurl' }  
};

function getUrl(value) {
    var res = '';
    for (var name in typeList) {
        if (typeList[name].type == value) {
            res = typeList[name].url;
            break;
        }
    }
    return res;
}

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
    getUrl: getUrl,
    getType: getType
}