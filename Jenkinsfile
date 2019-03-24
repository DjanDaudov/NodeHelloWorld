pipeline {
    agent { label 'master' }
    stages {
        stage('build') {
            steps {
                sh "IMAGE_NAME="denones/nodehelloworld:${BUILD_NUMBER}"
                sh "docker build . -t $IMAGE_NAME"
                sh "docker push $IMAGE_NAME"

                sh "IMAGE_NAME="denones/nodehelloworld:${BUILD_NUMBER}"
                sh  "kubectl set image deployment/nodehelloworld nodehelloworld=$IMAGE_NAME"
            }
        }
    }
}