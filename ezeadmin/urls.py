from django.conf.urls import url
from ezeadmin import views
from ezeadmin.registeruser.registerusercontroller import registerusercontroller
from ezeadmin.login.loginController import loginController
from ezeadmin.uploadpdf.uploadpdfController import uploadpdfController

urlpatterns = [
    # First time rendering from django side
    url(r'^$', views.loginView.as_view()),

    # register user urls starts
    url(r'^api/saveuser/$', registerusercontroller.saveUser),
    url(r'^api/listusers/$', registerusercontroller.listUsers),
    url(r'^api/deleteusers/$', registerusercontroller.deleteUser),
    url(r'^api/geteditdata/$', registerusercontroller.getEditData),
    url(r'^api/updateuser/$', registerusercontroller.updateUser),
    # register user urls ends

    # Login user Starts
    url(r'^api/checkemail/$', loginController.checkEmail),
    url(r'^api/updatepassword/$', loginController.updatePassword),
    url(r'^api/login/$', loginController.loginUser),
    # Login user Ends

    #Dashboard starts
    url(r'^api/fetchusercount/$', registerusercontroller.userCount),
    #Daashboard ends

#     upload pdf
    url(r'^api/savepdf/$', uploadpdfController.savepdf),
    url(r'^api/listpdf/$', uploadpdfController.listPdf),
    url(r'^api/delpdf/$', uploadpdfController.delPdf),




]