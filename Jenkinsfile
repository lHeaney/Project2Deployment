pipeline {
    agent any 

    environment{
        // REACT_APP_VERSION = "1.0.$BUILD_ID"
        // AWS_DEFAULT_REGION = "us-east-1"
        // AWS_ECR_REPO = "530789571735.dkr.ecr.us-east-1.amazonaws.com"
        // APP_NAME = "cpa-project2-app"
    }

    stages {
        stage('CPA'){
            agent {
                docker {
                    image 'aws-cli'
                    args "--entrypoint=''"
                }
            }
            steps {
            //     withCredentials(
            //         [usernamePassword
            //             (credentialsId: '8049ffbf-2561-42cf-933b-881cc054284e', 
            //             passwordVariable: 'AWS_SECRET_ACCESS_KEY', 
            //             usernameVariable: 'AWS_ACCESS_KEY_ID')
            //         ]
            //     )
                // {
                    sh ''' 
                    echo "Listing AWS CLi Version..."
                    aws --version
                    '''
                // }
            }
        }
    }
}