pipeline {
    agent any 

    environment{
        REACT_APP_VERSION = "1.0.$BUILD_ID"
        AWS_DEFAULT_REGION = "us-east-1"
        AWS_ECR_REPO = "530789571735.dkr.ecr.us-east-1.amazonaws.com"
        APP_NAME = "cpa-project2-app"
    }

    stages {
    //     stage('SonarQube Analysis')
    //     {
    //        environment{
    //         SONAR_SCANNER_HOME= tool 'Sonar'
    //        }
    //        steps{
    //         withSonarQubeAnalysis('Sonar')
    //         {
    //             sh '''
    //                 $(SONAR_SCANNER_HOME)/bin/sonar-scanner \
    //                 -Dsonar.projectName = "jenkins_scan" \
    //                 -Dsonar.projectKey = "jenkins_scan" \
    //                 -Dsonar.projectVersion ="1.0" \
    //                 -Dsonar.sources=. \

    //                 echo "Code Scanning Completed, check SonarQube for details..."
    //             '''
    //         }
    //        }
    //     }
    //     stage('Build Docker Image and Push to ECR')
    //     {
    //         agent{
    //             docker{
    //                 image 'aws-cli'
    //                 args "-u root -v /var/run/docker.sock:/var/run/docker.sock --entrypoint=''"
    //                 reuseNode true
    //             }
    //         }
    //         steps {
    //             withCredentials(
    //                 [usernamePassword
    //                     (credentialsId: '8049ffbf-2561-42cf-933b-881cc054284e', 
    //                     passwordVariable: 'AWS_SECRET_ACCESS_KEY', 
    //                     usernameVariable: 'AWS_ACCESS_KEY_ID')
    //                 ]
    //             ){
    //                 sh ''' 
    //                 echo "Listing AWS CLi Version..."
    //                 aws --version

    //                 aws ecr get-login-password --region $AWS_DEFAULT_REGION | docker login --username AWS --password-stdin $AWS_ECR_REPO
    //                 echo "REACT_APP_VERSION = 1.0.$BUILD_ID > .env

    //                 docker build -t $AWS_ECR_REPO/$APP_NAME-frontend:$REACT_APP_VERSION ./CPA-FrontEnd
    //                 docker push $AWS_ECR_REPO/#APP_NAME-frontend:$REACT_APP_VERSION ./CPA-Frontend

    //                 docker build -t $AWS_ECR_REPO/$APP_NAME-backend:$REACT_APP_VERSION ./CPA-API
    //                 docker push $AWS_ECR_REPO/#APP_NAME-backend:$REACT_APP_VERSION ./CPA-API
    //                 '''
    //             }
    //         }
    //     }
        stage('AWS CLI'){
            // agent {
            //     docker {
            //         image 'aws-cli'
            //         args "--entrypoint=''"
            //     }
            // }
            // steps {
            //     withCredentials(
            //         [usernamePassword
            //             (credentialsId: '8049ffbf-2561-42cf-933b-881cc054284e', 
            //             passwordVariable: 'AWS_SECRET_ACCESS_KEY', 
            //             usernameVariable: 'AWS_ACCESS_KEY_ID')
            //         ]
            //     ){
            //         sh ''' 
            //         echo "Listing AWS CLi Version..."
            //         aws --version
            //         '''
            //     }
            // }
        }
    }
}