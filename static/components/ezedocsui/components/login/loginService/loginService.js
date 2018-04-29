angular.module('userLoginService',[])
.service('loginUserService',['$http',function($http){

    var loginUser = {}

    loginUser.check = function(email,success,failure){
        $http.get('api/checkemail/?email='+email).then(success,failure)
    }

    loginUser.updatePassword = function(userId,newpass,success,failure){
        $http.put('api/updatepassword/',{
            "id" : userId,
            "newpass" : newpass,

        }).then(success,failure)
    }

    loginUser.loginUser = function(email,password,success,failure){
        $http.post('api/login/',{
            "email" : email,
            "password" : password,
        }).then(success,failure)
    }

    return loginUser


}])