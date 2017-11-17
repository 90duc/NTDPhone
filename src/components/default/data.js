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
    pid: 0,
    image: './static/0.jpg',
    name: 'iphone 8s',
    company:'Apple',
    rank: 7.9,
    commentSize:1790,
    screenSize: '5.2英寸,3.2英寸',
    pixels: '1080x1934像素,423x296像素',
    forecamera: '400万像素',
    backcamera: '800万像素',
    battery: '1200mAh',
    batteryType: '不可拆卸式电池',
    core: '四核,八核',
    coreType: '联发科 Helio P25',
    coreRate: '2.5GHz,1.4GZ',
    rom: '32G,64G',
    ram:'4G',
    density: '401ppi',
    weight: '153g',
    year: '2015',
    price:7999
};

let user ={
    name:'张三',
    account:'244831349@qq.com',
    image:'./static/11.jpg',
    sex:'男',
    age:18,
    birthday:'1995-2-3',
    info:'一生有你'
}
export default{
    clone: clone,
    cloneObject: clone1,
    user:user
}