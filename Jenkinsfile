pipeline {
    agent { label 'master' }
    stages {
        stage('build') {
            steps {
                sh "rm -rf NodeHelloWorld"
                sh "git clone https://github.com/DenisStagniunas/NodeHelloWorld.git"
                sh "docker build . -t denones/nodehelloworld:${BUILD_NUMBER}"
                sh "docker login -u denones -p $(cat /home/vagrant/topsecret/.pass)"
                sh "docker push denones/nodehelloworld:${BUILD_NUMBER}"
                sh "sudo kubectl set image deployment/nodehelloworld nodehelloworld=denones/nodehelloworld:${BUILD_NUMBER}"
            }
        }
    }
}
