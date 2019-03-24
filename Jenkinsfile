pipeline {
    agent { label 'master' }
    stages {
        stage('build') {
            steps {
                sh "IMAGE_NAME='denones/nodehelloworld:${BUILD_NUMBER}'"
                sh "docker build /home/vagrant/NodeHelloWorld -t $IMAGE_NAME"
                sh "docker push $IMAGE_NAME"
            }
        }
    }
}