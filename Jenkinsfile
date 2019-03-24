pipeline {
    agent { label 'master' }
    stages {
        stage('build') {
            steps {
                sh "cd /home/vagrant/NodeHelloWorld"
                sh "git clone https://github.com/DenisStagniunas/NodeHelloWorld.git"
                sh "docker build /home/vagrant/NodeHelloWorld -t denones/nodehelloworld:${BUILD_NUMBER}"
                sh "docker login -u denones -p dockerhub123"
                sh "docker push denones/nodehelloworld:${BUILD_NUMBER}"
                sh "sudo kubectl set image deployment/nodehelloworld nodehelloworld=denones/nodehelloworld:${BUILD_NUMBER}"
            }
        }
    }
}