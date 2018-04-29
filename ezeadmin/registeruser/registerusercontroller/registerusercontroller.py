import json
from rest_framework.decorators import api_view
from django.http import HttpResponse
from django.core.serializers.json import DjangoJSONEncoder
from ezeadmin.registeruser.registeruserservice.registeruserservice import ezedocsUser
import time


@api_view(['POST'])
def saveUser(request):
    username = request.data['username']
    email = request.data['email']
    dob = request.data['dob']
    password = request.data['password']
    createdDate = time.strftime("%Y-%m-%d %H:%M:%S", time.gmtime())

    eze_docsUser = ezedocsUser()

    result = eze_docsUser.saveEzeDocsUsers(username,email,dob,password,createdDate)

    dataobj = {'data': result}

    return HttpResponse(json.dumps(dataobj, cls=DjangoJSONEncoder), content_type='application/json', status=200)


@api_view(['GET'])
def userCount(request):
    eze_docsUser = ezedocsUser()

    result = eze_docsUser.ezeDocsUserCount()

    dataobj = {'data': result}

    return HttpResponse(json.dumps(dataobj, cls=DjangoJSONEncoder), content_type='application/json', status=200)

@api_view(['GET'])
def listUsers(request):
    eze_docsUser = ezedocsUser()

    result = eze_docsUser.ezeDocsUserList()

    dataobj = {'data': result}

    return HttpResponse(json.dumps(dataobj, cls=DjangoJSONEncoder), content_type='application/json', status=200)


@api_view(['DELETE'])
def deleteUser(request):
    id = request.GET['id']

    eze_docsUser = ezedocsUser()

    result = eze_docsUser.ezeDocsUserDelete(id)

    dataobj = {'data': result}

    return HttpResponse(json.dumps(dataobj, cls=DjangoJSONEncoder), content_type='application/json', status=200)

@api_view(['GET'])
def getEditData(request):
    id = request.GET['id']

    eze_docsUser = ezedocsUser()

    result = eze_docsUser.getEditUserData(id)

    dataobj = {'data': result}

    return HttpResponse(json.dumps(dataobj, cls=DjangoJSONEncoder), content_type='application/json', status=200)


@api_view(['PUT'])
def updateUser(request):
    id = request.data['id']
    email = request.data['email']
    dob = request.data['dob']
    username = request.data['username']
    modifiedDate = time.strftime("%Y-%m-%d %H:%M:%S", time.gmtime())

    eze_docsUser = ezedocsUser()

    result = eze_docsUser.updateUserData(id, username, email, dob, modifiedDate)

    dataobj = {'data': result}

    return HttpResponse(json.dumps(dataobj, cls=DjangoJSONEncoder), content_type='application/json', status=200)