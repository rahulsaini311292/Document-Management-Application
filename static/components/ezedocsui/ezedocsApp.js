angular.module('ezedocsApp',[
    'ui.router',
    'smart-table',
    'ngMaterial',
    'ezedocsApp.registerUser',
    'ezedocsApp.userlogin',
    'ezedocsApp.dashboard',
    'ezedocsApp.uploadpdf',
])

.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider){


    $urlRouterProvider.otherwise('/login');


    $stateProvider
    .state('login',{
        url: '/login',
        templateUrl: '/static/components/ezedocsui/components/login/views/login.html',
        controller: 'loginUserController',
        controllerAs: 'userLoginScope',
    })

     .state('forgotpassword',{
        url: '/forgotpassword',
        templateUrl: '/static/components/ezedocsui/components/login/views/forgotpassword.html',
        controller: 'loginUserController',
        controllerAs: 'userLoginScope',
    })

    .state('registeruser',{
        url: '/registeruser',
        templateUrl: '/static/components/ezedocsui/components/registeruser/views/registeruser.html',
        controller: 'userRegisterController',
        controllerAs: 'registerUserScope',
    })

            //listing registed users

    .state('listusers',{
        url:'/listusers',
        templateUrl:'/static/components/ezedocsui/components/registeruser/views/listusers.html',
        controller: 'userRegisterController',
        controllerAs: 'registerUserScope',
    })

    .state('editusers',{
        url:'/editusers/:obj',
        templateUrl:'/static/components/ezedocsui/components/registeruser/views/edituser.html',
        controller: 'userRegisterController',
        controllerAs: 'registerUserScope',
    })

//    Dashboard
    .state('dashboard',{
        url: '/dashboard',
        templateUrl: '/static/components/ezedocsui/components/dashboard/views/dashboard.html',
        controller: 'dashboardController',
        controllerAs: 'dashboardScope',
    })

//    Upload pdf
    .state('uploadpdf',{
        url: '/uploadpdf',
        templateUrl: '/static/components/ezedocsui/components/uploadpdf/views/uploadpdf.html',
        controller: 'pdfController',
        controllerAs: 'pdfScope',
    })

    .state('listpdf',{
        url: '/listpdf',
        templateUrl: '/static/components/ezedocsui/components/uploadpdf/views/listpdf.html',
        controller: 'pdfController',
        controllerAs: 'pdfScope',
    })



}])

