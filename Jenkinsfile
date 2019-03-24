pipeline {
    agent { label 'master' }
    stages {
        stage('build') {
            steps {
                sh "docker build /home/vagrant/NodeHelloWorld -t denones/nodehelloworld:${BUILD_NUMBER}"
                sh "docker push denones/nodehelloworld:${BUILD_NUMBER}"
            }
        }
    }
}