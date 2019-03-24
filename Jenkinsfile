pipeline {
    agent { label 'master' }
    stages {
        stage('Building image') {
          steps{
            script {
              echo ${BUILD_NUMBER}
              IMAGE_NAME="denones/nodehelloworld:${BUILD_NUMBER}"
              docker build /home/vagrant/NodeHelloWorld -t $IMAGE_NAME
              docker push $IMAGE_NAME
              kubectl set image deployment/nodehelloworld nodehelloworld=$IMAGE_NAME
            }
          }
        }
      }
    }
}