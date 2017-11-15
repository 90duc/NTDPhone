
let animals = ["子鼠", "丑牛", "寅虎", "卯兔", "辰龙", '巳蛇', "午马", "未羊", "申猴", "酉鸡", '戌狗', "亥猪"];
let stars = [
    "摩羯座",
    "水瓶座",
    "双鱼座",
    "白羊座",
    "金牛座",
    "双子座",
    "巨蟹座",
    "狮子座",
    "处女座",
    "天秤座",
    "天蝎座",
    "射手座"
];
let starsDay = [20, 19, 21, 20, 21, 22, 23, 23, 23, 24, 23, 22];

function getAge(year) {
    let y = new Date().getFullYear();
    if (year == null || year == '')
        year = y;

    return y - year + 1;
}
function getAnimal(year) {
    let y = new Date().getFullYear();
    if (year == null || year == '')
        year = y;

    return animals[(year - 1900) % animals.length];
}
function getStar(month, day) {
    let d = new Date();
    if (month == null || month == '')
        month = d.getMonth();
    if (day == null || day == '')
        day = d.getDay();
    let index = month - 1;
    if (day >= starsDay[index]) index = (index + 1) % 12;
    return stars[index];
}
function isLeapYear(year) {
    return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}
function isMinMonth(m) {
    return m == 4 || m == 6 || m == 9 || m == 11;
}
export default {
    getAge: getAge,
    getAnimal: getAnimal,
    getStar: getStar,
    isLeapYear:isLeapYear,
    isMinMonth:isMinMonth
}