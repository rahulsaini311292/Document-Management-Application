import json
from rest_framework.decorators import api_view
from django.http import HttpResponse
from django.core.serializers.json import DjangoJSONEncoder
from ezeadmin.uploadpdf.uploadpdfService.uploadpdfService import ezedocsPdfUpload
import time


@api_view(['POST'])
def savepdf(request):
    pdfFile = request.FILES['file']

    createdDate = time.strftime("%Y-%m-%d %H:%M:%S", time.gmtime())

    ezedocs_pdf_upload = ezedocsPdfUpload()

    result = ezedocs_pdf_upload.savePdfFile(pdfFile,createdDate)

    dataobj = {'data': result}

    return HttpResponse(json.dumps(dataobj, cls=DjangoJSONEncoder), content_type='application/json', status=200)

@api_view(['GET'])
def listPdf(request):

    ezedocs_pdf_upload = ezedocsPdfUpload()

    result = ezedocs_pdf_upload.listPdfFile()

    dataobj = {'data': result}

    return HttpResponse(json.dumps(dataobj, cls=DjangoJSONEncoder), content_type='application/json', status=200)

@api_view(['DELETE'])
def delPdf(request):
    id = request.GET['id']

    ezedocs_pdf_upload = ezedocsPdfUpload()

    result = ezedocs_pdf_upload.delPdfFile(id)

    dataobj = {'data': result}

    return HttpResponse(json.dumps(dataobj, cls=DjangoJSONEncoder), content_type='application/json', status=200)