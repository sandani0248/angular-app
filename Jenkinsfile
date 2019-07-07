pipeline {
    agent any
    stages {
        stage(Packages) {
            steps {
                sh "npm install"
            }
        }

        stage('Build') {
            steps {
                sh "ng build"
            }
        }
        stage('dockerization') {
            steps {
                sh "docker build -t nginx:latest ."
                sh "docker run -d -p 8085:80 -v ${pwd}:/usr/share/nginx/html"
            }
        }
    }
}
