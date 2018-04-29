angular.module('registerUserService',[])
.service('userRegisterService',['$http',function($http){
     var userRegister = {};

     userRegister.registerUser = function(dataobj,success,failure){
        $http.post('api/saveuser/',{
            "username" : dataobj.userName,
            "email" : dataobj.email,
            "dob" : dataobj.dob,
            "password" : dataobj.password,
        }).then(success,failure)
     }

     userRegister.listUser = function(success,failure){
        $http.get('api/listusers/').then(success,failure)
     }

     userRegister.deleteUser = function(id,success,failure){
        $http.delete('api/deleteusers/?id='+id).then(success,failure)
     }

     userRegister.geteditdata = function(id, success, failure){
        $http.get('api/geteditdata/?id='+id).then(success,failure)
     }

     userRegister.updatedUser = function(dataobj, success, failure){
        $http.put('api/updateuser/',{
            'id' : dataobj.id,
            "username" : dataobj.userName,
            "email" : dataobj.email,
            "dob" : dataobj.dob,
        }).then(success,failure)
     }

     return userRegister;

}])