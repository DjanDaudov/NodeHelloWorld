pipeline {
    agent { label 'master' }
    stages {
        stage('build') {
            steps {
                sh "IMAGE_NAME="denones/nodehelloworld:${BUILD_NUMBER}"
                    docker build . -t $IMAGE_NAME
                    docker push $IMAGE_NAME"

                 sh "IMAGE_NAME="denones/nodehelloworld:${BUILD_NUMBER}"
                     kubectl set image deployment/nodehelloworld nodehelloworld=$IMAGE_NAME"
            }
        }
    }
}