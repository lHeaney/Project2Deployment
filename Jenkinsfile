pipeline {
    agent any 

//     environment{
//         REACT_APP_VERSION = "1.0.$BUILD_ID"
//         AWS_DEFAULT_REGION = "us-east-1"
//         AWS_ECR_REPO = "530789571735.dkr.ecr.us-east-1.amazonaws.com"
//         APP_NAME = "cpa-project2-app"
//     }

    stages {
        stage('Jenkins')
        {
            agent{
                docker{
                    image 'Docker'
                    args "--entrypoint=''"
                }
            }
            steps{
                sh '''
                docker compose up
                '''
            }
        }
        stage('API'){
            agent {
                docker {
                    image 'frontend'
                    args "--entrypoint=''"
                }
            }
            steps {
                    sh ''' 
                    cd ./CPA-API/
                    docker build -t backend -v /var/run/docker.sock:/var/run/docker.sock .
                    docker run -p 5505:5505 backend
                    cd ..
                    '''
            }
        }
        stage('FrontEnd'){
            agent{
                docker {
                    image 'backend'
                    args "--entrypoint=''"
                }
            }
            steps{
                sh ''' 
                    cd ./CPA-FRONTEND/
                    docker build -t frontend -v /var/run/docker.sock:/var/run/docker.sock .
                    docker run -p 3000:3000 frontend
                    '''
            }
        }
    }
}