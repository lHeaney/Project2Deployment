pipelin {
    agent any 
    stages{
        stage('AWS CLI'){
            agent{
                docker{
                    image 'aws/cli'
                    arge "--entrypoing=''"
                }
            }
            
            steps{
                withCredentials(
                    [usernamePassword
                        (credentialsId: 'ecdebb42-7c57-4748-bfea-d807ea556190', 
                        passwordVariable: 'AWS_SECRET_ACCESS_KEY', 
                        usernameVariable: 'AWS_ACCESS_KEY_ID')
                    ]
                ){
                   sh ''' 
                   Listing AWS CLi Version...
                   aws --version
                   '''
                }


                
            }
        }
    }
}