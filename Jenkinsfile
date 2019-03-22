pipeline {
    agent { label 'master' }
    stages {
        stage('build') {
            steps {
                sh "docker build . -t helloworld"
                sh "docker stop hellonode || true"
                sh "docker rm hellonode || true"
                sh "docker run -d -p 8000:8000 --name hellonode helloworld"
            }
        }
    }
}