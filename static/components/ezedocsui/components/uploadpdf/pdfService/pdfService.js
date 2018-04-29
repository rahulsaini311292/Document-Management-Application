angular.module('uploadPdfService',[])
.service('pdfService',['$http', function($http){

    var uploadPdf = {}

    uploadPdf.savepdf = function(formdata,success,failure){
         $http({
            method:'POST',
            url:'api/savepdf/',
            data:formdata,
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
        }).then(success, failure)
    }

    uploadPdf.listpdf = function(success,failure){
        $http.get('api/listpdf/').then(success, failure)
    }

    uploadPdf.deletePdf = function(id,success,failure){
        $http.delete('api/delpdf/?id='+id).then(success, failure)
    }

    return uploadPdf
}])