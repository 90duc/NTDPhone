let homePath = '/home';
let userPath = '/user';

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
    remarkPhone:homePath + '/remarkPhone'
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

let userHelps={
    account:users.userHelp+'/account',
    safe:users.userHelp+'/safe',
    other:users.userHelp+'/other'
}
export default {
   roots:roots,
   pages:pages,
   users:users,
   userSecuritys:userSecuritys,
   userInfos:userInfos,
   userHelps:userHelps
}

