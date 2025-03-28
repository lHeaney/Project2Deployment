pipeline {
    agent any 
    stages {
        stage('AWS CLI'){
            agent {
                docker {
                    image 'amazon/aws-cli'
                    args "--entrypoint=''"
                }
            }
            steps {
                withCredentials(
                    [usernamePassword
                        (credentialsId: '8049ffbf-2561-42cf-933b-881cc054284e', 
                        passwordVariable: 'AWS_SECRET_ACCESS_KEY', 
                        usernameVariable: 'AWS_ACCESS_KEY_ID')
                    ]
                ){
                    sh ''' 
                    echo "Listing AWS CLi Version..."
                    aws --version
                    '''
                }
            }
        }
    }
}