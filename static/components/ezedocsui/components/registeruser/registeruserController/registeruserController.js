angular.module('registerUserController',[])
.controller('userRegisterController',['userRegisterService','$stateParams','$state',function(userRegisterService,$stateParams,$state){

    var registerUserScope = this;

    registerUserScope.saveUser = function(){

        var dob = registerUserScope.dob.replace(/(\d\d)\/(\d\d)\/(\d{4})/, "$3-$1-$2");

        dataobj = {
            "userName" : registerUserScope.userName,
            "email" : registerUserScope.userEmail,
            "dob" : dob,
            "password" : registerUserScope.password,
        }

        var success = function(response){
            console.log(response)
            registerUserScope.successmsg = true
            registerUserScope.errormsg = false
        }

        var failure = function(response){
            console.log(response)
            registerUserScope.successmsg = false
            registerUserScope.errormsg = true
        }

        userRegisterService.registerUser(dataobj,success,failure)
    }

    registerUserScope.ezeDocsUsers = function(){
        var success = function(response){
            console.log(response.data.data)
            registerUserScope.users = response.data.data
        }

        var failure = function(response){
            console.log(response)

        }

        userRegisterService.listUser(success,failure)
    }

// Delete user
    registerUserScope.deleteUser = function(id, $index){

        if (confirm('Are you sure?')){
            var success = function(response){
                registerUserScope.users.splice($index,1)
            }

            var failure = function(response){
                console.log(response)
                console.log('fail')
            }

            userRegisterService.deleteUser(id,success,failure)
        }

    }


//    Change State with id
    registerUserScope.changeState = function(userId){
        $state.go('editusers',{
            'obj': userId
        })
    }

//    get user values to update
    registerUserScope.getDatatoUpdate= function(){
        id = $stateParams.obj

        var success = function(response){
            console.log('success')
            registerUserScope.data = response.data.data[0]
            console.log(registerUserScope.data)
        }

        var failure = function(response){
            console.log(response)
            console.log('failure')
        }

        userRegisterService.geteditdata(id, success, failure)

    }

//    Update User

    registerUserScope.saveUpdatedUser = function(){

        var dob = registerUserScope.data.userDob.replace(/(\d\d)\/(\d\d)\/(\d{4})/, "$3-$1-$2");

        dataobj = {
            "id" : registerUserScope.data.userId,
            "userName" : registerUserScope.data.userName,
            "email" : registerUserScope.data.userEmail,
            "dob" : dob,
        }

        var success = function(response){
            console.log(registerUserScope.data)
            registerUserScope.successmsg = true
            registerUserScope.errormsg = false
        }

        var failure = function(response){
            console.log(response)
            console.log('failure')
            registerUserScope.successmsg = false
            registerUserScope.errormsg = true
        }

        userRegisterService.updatedUser(dataobj, success, failure)
    }



    return registerUserScope;

}])