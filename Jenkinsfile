pipeline {
    agent { label 'master' }
    stages {
        stage('Building image') {
          steps{
            script {
              IMAGE_NAME="denones/nodehelloworld:${BUILD_NUMBER}"
              docker build . -t $IMAGE_NAME
              docker push $IMAGE_NAME
              kubectl set image deployment/nodehelloworld nodehelloworld=$IMAGE_NAME
            }
          }
        }
      }
    }
}