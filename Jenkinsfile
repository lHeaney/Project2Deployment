pipeline {
    agent any 

//     environment{
//         REACT_APP_VERSION = "1.0.$BUILD_ID"
//         AWS_DEFAULT_REGION = "us-east-1"
//         AWS_ECR_REPO = "530789571735.dkr.ecr.us-east-1.amazonaws.com"
//         APP_NAME = "cpa-project2-app"
//     }

    stages {
        stage('API'){
            agent {
                docker {
                    image 'frontend'
                    args "--entrypoint=''"
                }
            }
            steps {
                    sh ''' 
                    cd .\CPA-API\
                    docker build -t backend .
                    docker run -p 5505:5505 backend
                    '''
            }
        }
        stage('FrontEnd'){
            agent{

            }
            steps{
                sh ''' 
                    cd .\CPA-FRONTEND\
                    docker build -t frontend .
                    docker run -p 3000:3000 frontend
                    '''
            }
        }
    }
}