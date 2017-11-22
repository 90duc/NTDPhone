
let personPath='';
let person={
    checkLogin:personPath+'/checkLogin',
    login:personPath+'/login',
    logout:personPath+'/logout',
    register:personPath+'/register',
    userInfo:personPath+'/userInfo',
    modifyPassword:personPath+'/password',
    modifyEmail:personPath+'/email',
    loginInfo:personPath+'/loginInfo',
    sensitiveOperation:personPath+'/operate',
    modifyUserName:personPath+'/nickname',
    modifyInfo:personPath+'/modifyInfo',
    modifyDetail:personPath+'/modifyDetail',
};

let phonePath=''
let phone={
   search:phonePath+'/search',
   searchBy:phonePath+'/searchBy',
   hobby:phonePath+'/hobby',
   type:phonePath+'/new',
   company:phonePath+'/company',
   detail:phonePath+'/detail',
   images:phonePath+'/images',
   
};
export default{
    person:person,
    phone:phone
}