pipeline {
    agent any

    stages {
        stage('Build Docker Images') {
            steps {
                bat 'docker compose build'
            }
        }

        stage('Run Containers') {
            steps {
                bat 'docker compose up -d'
            }
        }

        stage('Kubernetes Deploy') {
            steps {
                bat 'kubectl apply -f k8s/'
            }
        }

        stage('Check Pods') {
            steps {
                bat 'kubectl get pods'
            }
        }
    }
}