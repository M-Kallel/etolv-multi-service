pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                echo 'Cloning repository...'
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker compose build'
            }
        }

        stage('Run Containers') {
            steps {
                sh 'docker compose up -d'
            }
        }

        stage('Test Backend') {
            steps {
                sh 'curl http://etolv.local/backend/api/hello'
            }
        }

        stage('Test Frontends') {
            steps {
                sh 'curl http://etolv.local/acc'
                sh 'curl http://etolv.local/portal'
                sh 'curl http://etolv.local/admin'
            }
        }
    }
}