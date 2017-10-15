export default{
    clone:clone
}
function clone1(obj) {
    if (typeof obj !== "object") {
        return obj;
    }
    if (obj instanceof Array) {
        var newobj = [];
        for (var i = 0; i < obj.length; i++) {
            newobj[i] = clone1(obj[i]);
        }
        return newobj;
    }

    var newobj = {};
    for (var attr in obj) {
        newobj[attr] = clone1(obj[attr]);
    }
    return newobj;
}

function clone() {
   return clone1(phoneTemp);
}

let phoneTemp = {
    id: 0,
    image: '/static/1.webapp',
    name: 'iphone 8s',
    rank: 7.9,
    screenSize: [4.4, 3.2],
    pixels: [{ x: 1080, y: 1934 }, { x: 423, y: 296 }],
    forecamera: '400万像素',
    backcamera: '800万像素',
    battery: '1200mAh',
    batteryType: '不可拆卸式电池',
    core: ['四核', '八核'],
    coreType: '联发科 Helio P25',
    coreRate: ['2.5GHz', '1.4GZ'],
    ROM: ['32G', '64G'],
    networkType: ['4G全网通', '3G移动'],
    bodyColor: ['红色', '白色'],
    year: '2015'
};
