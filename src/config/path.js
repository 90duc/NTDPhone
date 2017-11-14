let homePath = '/home';
let userPath = '/userInfo';

let roots={
    default: '/',
    login: '/login',
    register: '/register',
    picture3D: '/3d',
    user: userPath
};
let pages={
    home: homePath + '/',
    phoneDetail: homePath + '/phoneDetail',
    topDetail: homePath + '/topList',
    searchBy: homePath + '/searchBy',
    hobbyList: homePath + '/hobbyList',
};

let users={
    
    userHome: userPath + '/home',
    userSecurity: userPath + '/security',
    userPerson: userPath + '/person',
    userHelp: userPath + '/help',
}
let userSecuritys={
    userPassword: users.userSecurity + '/password',
    userEmail: users.userSecurity + '/email',
    userLoginInfo: users.userSecurity + '/loginInfo',
    userOperate: users.userSecurity + '/operate'
}
let userInfos ={
    userIcon: users.userPerson + '/icon',
    userNickname: users.userPerson + '/nickname',
    userInfo: users.userPerson + '/info',
    userDetail: users.userPerson + '/detail'
}
export default {
   roots:roots,
   pages:pages,
   users:users,
   userSecuritys:userSecuritys,
   userInfos:userInfos
}

