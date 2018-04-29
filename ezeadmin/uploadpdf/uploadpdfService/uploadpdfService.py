from ezeadmin.models import uploadpdf
from django.core.files.storage import FileSystemStorage

class ezedocsPdfUpload:
    @classmethod
    def savePdfFile(self, pdfFile,createdDate):
        try:

            if pdfFile.name.endswith('.pdf'):
                saveqry = uploadpdf(pdf_name=pdfFile, created_date=createdDate)

                saveqry.save()

                fs = FileSystemStorage()

                pdfname = fs.save(pdfFile.name, pdfFile)

                saveqrysuccessobj = {
                    'response': "success"
                }

            else:
                saveqrysuccessobj = {
                    'errResp': "Upload Only Pdf"
                }


            return saveqrysuccessobj

        except Exception, err:
            saveqryfailureobj = {
                'response': "Failure"
            }
            return {'failureobj': saveqryfailureobj}

    @classmethod
    def listPdfFile(cls):
        try:
            listqry = uploadpdf.objects.all()

            datalist = []

            for values in listqry:
                datalist.append({
                    'pdfId': values.pdf_id,
                    'pdfName': values.pdf_name,
                })

            return datalist

        except Exception, err:
            saveqryfailureobj = {
                'response': "Failure"
            }
            return {'failureobj': saveqryfailureobj}

    @classmethod
    def delPdfFile(cls, id):
        try:
            delqry = uploadpdf.objects.get(pdf_id=id)

            delqry.delete()

            dataobj ={
                'resp' : 'Successfully delete'
            }

            return dataobj

        except Exception, err:
            saveqryfailureobj = {
                'response': "Failure"
            }
            return {'failureobj': saveqryfailureobj}
