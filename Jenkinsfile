pipeline {
    agent any

    stages {
        stage('Build Docker Images') {
            steps {
                bat 'docker compose build'
            }
        }

        stage('Cleanup Old Containers') {
            steps {
                bat 'docker compose down'
            }
        }

        stage('Run Containers') {
            steps {
                bat 'docker compose up -d'
            }
        }

      stage('Kubernetes Deploy') {
    steps {
        bat '''
        set KUBECONFIG=C:\\Users\\moate\\.kube\\config
        kubectl apply -f k8s/
        '''
    }
}

stage('Check Pods') {
    steps {
        bat '''
        set KUBECONFIG=C:\\Users\\moate\\.kube\\config
        kubectl get pods
        '''
    }
}
    }
}