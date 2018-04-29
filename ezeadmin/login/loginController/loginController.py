import json
from rest_framework.decorators import api_view
from django.http import HttpResponse
from django.core.serializers.json import DjangoJSONEncoder
from ezeadmin.login.loginService.loginService import ezedocsLogin
import time


@api_view(['GET'])
def checkEmail(request):
    email=request.GET['email']

    eze_docsUser = ezedocsLogin()

    result = eze_docsUser.checkRegisteredEmail(email)

    dataobj = {'data': result}

    return HttpResponse(json.dumps(dataobj, cls=DjangoJSONEncoder), content_type='application/json', status=200)


@api_view(['PUT'])
def updatePassword(request):
    id = request.data['id']
    newpass = request.data['newpass']
    eze_docsUser = ezedocsLogin()

    result = eze_docsUser.updateuserPassword(id,newpass)

    dataobj = {'data': result}

    return HttpResponse(json.dumps(dataobj, cls=DjangoJSONEncoder), content_type='application/json', status=200)


@api_view(['POST'])
def loginUser(request):
    email = request.data['email']
    passcode = request.data['password']

    eze_docsLogin = ezedocsLogin()

    result = eze_docsLogin.login(email,passcode)

    dataobj = {'data': result}

    return HttpResponse(json.dumps(dataobj, cls=DjangoJSONEncoder), content_type='application/json', status=200)

