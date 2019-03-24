pipeline {
    agent { label 'master' }
    stages {
        stage('build') {
            steps {
                sh "docker build /home/vagrant/NodeHelloWorld -t denones/nodehelloworld:${BUILD_NUMBER}"
                sh "docker login -u denones -p ${DOCKER_HUB}"
                sh "docker push denones/nodehelloworld:${BUILD_NUMBER}"
                sh "kubectl set image deployment/nodehelloworld nodehelloworld=denones/nodehelloworld:${BUILD_NUMBER}"
            }
        }
    }
}