angular.module('userLoginController',[])
.controller('loginUserController',['loginUserService','$stateParams','$state',function(loginUserService,$stateParams,$state){

    var userLoginScope = this;

    userLoginScope.showEmail = true
    userLoginScope.showPass = false
    userLoginScope.emailBtn = true
    userLoginScope.passBtn = false
    userLoginScope.successmsg = false

//Check Email

    userLoginScope.checkEmail = function(){

        var email = userLoginScope.userEmail

        var success = function(response){
            if (response.data.data.response == "Failure"){
                userLoginScope.showEmail = true
                userLoginScope.showPass = false
                userLoginScope.emailBtn = true
                userLoginScope.passBtn = false
                userLoginScope.errormsg = true
                userLoginScope.successmsg = false
            }
            else{
                userLoginScope.showEmail = false
                userLoginScope.showPass = true
                userLoginScope.emailBtn = false
                userLoginScope.passBtn = true
                userLoginScope.errormsg = false
                userLoginScope.successmsg = false
                userLoginScope.userId = response.data.data.id
            }

        }

        var failure = function(response){
            console.log(response)
            userLoginScope.showEmail = true
            userLoginScope.showPass = false
            userLoginScope.emailBtn = true
            userLoginScope.passBtn = false
            userLoginScope.errormsg = true
        }

        loginUserService.check(email,success,failure)
    }

//    Update Password

    userLoginScope.saveNewPassword = function(){

         var userId = userLoginScope.userId
         var newpass = userLoginScope.newpassword
         var success = function(response){
            console.log(response.data.data)
            if (response.data.data.response == 'success'){
                userLoginScope.successmsg = true
                userLoginScope.errormsg = false
            }

            else{
                userLoginScope.successmsg = false
                userLoginScope.errormsg = true
            }
        }

        var failure = function(response){
            console.log(response)
            userLoginScope.successmsg = false
            userLoginScope.errormsg = true
        }

        loginUserService.updatePassword(userId,newpass,success,failure)
    }


// Login (Match email and password)

    userLoginScope.login = function(){
        var email = userLoginScope.email
        var password = userLoginScope.password

        var success = function(response){
            console.log(response.data.data[0])
            if(response.data.data[0].noUser){
              userLoginScope.errormsg = true
            }
            else{
                  $state.go('dashboard')
            }

        }

        var failure = function(response){
            console.log(response)
            userLoginScope.successmsg = false
            userLoginScope.errormsg = true
        }

        loginUserService.loginUser(email,password,success,failure)

    }


    return userLoginScope;

}])