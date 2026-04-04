# 🚀 ETOLV Multi-Service DevOps Application

## 📌 Overview

This project is a full **DevOps-based multi-service application** that demonstrates modern deployment practices using:

* **Frontend:** Angular (Admin, Portal, ACC)
* **Backend:** Laravel API
* **Containerization:** Docker & Docker Compose
* **Reverse Proxy:** Traefik
* **Orchestration:** Kubernetes (K8s)
* **CI/CD:** Jenkins

---

## 🏗️ Architecture

```
User → Traefik → Frontends (Angular)
                  ↓
               Backend (Laravel API)
                  ↓
             Kubernetes Cluster
```

---

## ⚙️ Technologies Used

* Docker / Docker Compose
* Traefik (Routing)
* Kubernetes (Deployments, Services, Ingress, CronJob)
* Jenkins (CI/CD Pipeline)
* Angular
* Laravel

---

## 📦 Services

| Service         | Description        |
| --------------- | ------------------ |
| acc-frontend    | ACC user interface |
| admin-frontend  | Admin dashboard    |
| portal-frontend | Main portal UI     |
| backend         | Laravel REST API   |

---

## 🚀 How to Run Locally (Docker)

```bash
docker compose up -d
```

Access:

* http://etolv.local/acc
* http://etolv.local/portal
* http://etolv.local/admin
* http://etolv.local/backend/api/hello

---

## ☸️ Kubernetes Deployment

Apply manifests:

```bash
kubectl apply -f k8s/
```

Check pods:

```bash
kubectl get pods
```

---

## 🔁 Jenkins CI/CD Pipeline

The pipeline automates:

1. Clone repository from GitHub
2. Build Docker images
3. Stop old containers
4. Start new containers
5. Deploy to Kubernetes
6. Verify deployment

### Jenkinsfile Example

```groovy
pipeline {
    agent any

    environment {
        KUBECONFIG = "C:\\Users\\moate\\.kube\\config"
    }

    stages {
        stage('Build Docker Images') {
            steps {
                bat 'docker compose build'
            }
        }

        stage('Stop Old Containers') {
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
```

---

## 🌐 Access (Jenkins Environment)

Due to port conflicts, Jenkins uses:

* http://etolv.local:8081
* Traefik Dashboard: http://localhost:8082

---

## 🎯 Key Features

* Microservices architecture
* Reverse proxy routing with Traefik
* Containerized applications
* Kubernetes orchestration
* Automated CI/CD pipeline with Jenkins
* CronJob integration in Kubernetes

---

## 📈 What I Learned

* Building multi-service architectures
* Docker networking and container management
* Traefik routing and middleware
* Kubernetes deployments and services
* CI/CD pipeline creation with Jenkins
* Debugging real DevOps issues (ports, containers, kubeconfig)

---

## 👨‍💻 Author

**Mootez Kallel**

GitHub: https://github.com/M-Kallel

---

## 📎 Project Link

👉 https://github.com/M-Kallel/etolv-multi-service

---

## ✅ Status

✔ Fully Working
✔ CI/CD Implemented
✔ Kubernetes Deployed

---

## 🔥 Final Note

This project demonstrates a complete DevOps workflow from development to deployment using modern tools and best practices.
