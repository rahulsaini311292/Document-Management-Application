from ezeadmin.models import registeruser


class ezedocsLogin:
    @classmethod
    def checkRegisteredEmail(self, email):
        try:
            getemailqry = registeruser.objects.get(user_email=email)

            if getemailqry is not None:
                saveqrysuccessobj = {
                    'response': getemailqry.user_email,
                    'id' : getemailqry.user_id
                }
            else:
                saveqrysuccessobj = {
                    'response': 'email not found'
                }
            return saveqrysuccessobj

        except Exception, err:
            saveqryfailureobj = {
                'response': "Failure"
            }
            return saveqryfailureobj

    @classmethod
    def updateuserPassword(self, id,newpass):
        try:
            updateqry = registeruser.objects.get(user_id=id)

            updateqry.user_password = newpass
            updateqry.save()

            saveqrysuccessobj = {
                'response': "success"
            }
            return saveqrysuccessobj

        except Exception, err:
            saveqryfailureobj = {
                'response': "Failure"
            }
            return saveqryfailureobj

    @classmethod
    def login(self, email,passcode):
        try:
            getqry = registeruser.objects.raw("select user_id, user_name,user_email from register_user where user_email= '%s' AND user_password='%s'"%(email,passcode))

            datalist = []

            if list(getqry).__len__() == 0:
                datalist.append({
                    'noUser' : 'No User Found',
                })

            else:
                for values in getqry:
                    datalist.append({
                        'userId' : values.user_id,
                        'userName' : values.user_name,
                        'userEmail' : values.user_email,
                    })


            return datalist

        except Exception, err:
            saveqryfailureobj = {
                'response': "Failure"
            }
            return saveqryfailureobj