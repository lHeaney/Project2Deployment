pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                script {
                    docker.image('docker-jenkins:latest').inside {
                        // Commands to run inside the Docker container
                        sh 'docker compose up'
                    }
                }
            }
        }
        // stage('Test') {
        //     steps {
        //         script {
        //             docker.image('docker-jenkins:latest').inside {
                        
        //             }
        //         }
        //     }
        // }
    }
}
// pipeline {
//     agent any 

//     environment{
//         REACT_APP_VERSION = "1.0.$BUILD_ID"
//         APP_NAME = "cpa-project2-app"
//     }

//     stages {
//         stage('build')
//         {
//             agent any
//             steps{
//                 sh '''
//                 docker compose up
//                 '''
//             }
//         }
//         stage('Jenkins')
//         {
//             agent{
//                 docker{
//                     image 'docker'
//                      args "-u root -v /var/run/docker.sock:/var/run/docker.sock --entrypoint=''"
//                 }
//             }
//             steps{
//                 sh '''
//                 docker compose up
//                 '''
//             }
//         }
//         stage('API'){
//             agent {
//                 docker {
//                     image 'frontend'
//                     args "--entrypoint=''"
//                 }
//             }
//             steps {
//                     sh ''' 
//                     cd ./CPA-API/
//                     docker build -t backend -v /var/run/docker.sock:/var/run/docker.sock .
//                     docker run -p 5505:5505 backend
//                     cd ..
//                     '''
//             }
//         }
//         stage('FrontEnd'){
//             agent{
//                 docker {
//                     image 'backend'
//                     args "--entrypoint=''"
//                 }
//             }
//             steps{
//                 sh ''' 
//                     cd ./CPA-FRONTEND/
//                     docker build -t frontend -v /var/run/docker.sock:/var/run/docker.sock .
//                     docker run -p 3000:3000 frontend
//                     '''
//             }
//         }
//         stage('SQL Database')
//         {
//             agent{
//                 docker{
//                     image 'cpa-database'
//                 }
//             }
//             steps{
//                 sh '''

//                 docker run -p 5507:5507 --name my-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -e MYSQL_DATABASE=mydb -d mysql:latest
//                 docker exec -it cpa-database bash
//                 '''
//             }
            
//         }
//     }
// }