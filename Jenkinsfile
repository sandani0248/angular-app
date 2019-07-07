pipeline {
    agent any
    stages {
        stage(Packages) {
            steps {
                sh "npm install"
            }
        }

#         stage(Test) {
#            steps {
#                sh "ng test"
#           }
#        }
        stage('Build') {
            steps {
                sh "ng build"
            }
        }
        stage('dockerization') {
            steps {
                sh "docker pull nginx"
                sh "docker run -d -p 8085:80 -v $(pwd):/usr/share/nginx/html"
            }
        }
    }
}
