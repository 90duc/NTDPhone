let homePath = '/home';
let userPath = '/userInfo';

let roots={
    default: '/',
    login: '/login',
    register: '/register',
    picture3D: '/3d',
    userInfo: userPath
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
    userNickname: userPath + '/nickname',
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

export default {
   roots:roots,
   pages:pages,
   users:users,
   userSecuritys:userSecuritys
}

