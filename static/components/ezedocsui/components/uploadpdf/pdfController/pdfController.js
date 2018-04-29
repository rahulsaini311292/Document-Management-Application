angular.module('uploadPdfController',[])
.controller('pdfController',['$state','$stateParams','pdfService',function($state,$stateParams,pdfService){

    var pdfScope = this

    pdfScope.savePdf = function(){

        var formdata = new FormData();
        formdata.append('file', pdfScope.pdfFile);

        var success = function(response){
            if (response.data.data.errResp){
                pdfScope.successmsg = false
                pdfScope.errormsg = true
            }
            else{
                pdfScope.successmsg = true
                pdfScope.errormsg = false
            }
            console.log(response)
        }

        var failure = function(response){
            pdfScope.successmsg = false
            pdfScope.errormsg = true
            console.log(response)
        }

        pdfService.savepdf(formdata,success,failure)

    }

    pdfScope.listPdf = function(){
        var success = function(response){
            console.log(response.data.data)
            pdfScope.pdf = response.data.data
        }

        var failure = function(response){
            console.log(response)

        }

        pdfService.listpdf(success,failure)
    }


    pdfScope.delPdf = function(id,$index){
        if (confirm('Are you sure?')){
            var success = function(response){
                pdfScope.pdf.splice($index,1)
            }

            var failure = function(response){
                console.log(response)
                console.log('fail')
            }
            console.log(id)
            pdfService.deletePdf(id,success,failure)
        }
    }



    return pdfScope

}])

.directive('fileModel',['$parse', function($parse){
    return{
        restrict: 'A',
        link: function(scope,element,attrs){
              var model=$parse(attrs.fileModel);
              var modelSetter = model.assign;

              element.bind('change', function(){
                scope.$apply(function(){
                modelSetter(scope, element[0].files[0]);
                   });
              });
           }
        };
     }]);