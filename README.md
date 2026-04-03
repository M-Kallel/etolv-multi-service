\# ETOLV Multi-Service Application



\## 📌 Project Overview



This project is a multi-service web application built using:



\* \*\*Frontend:\*\* Angular (3 applications)



&#x20; \* ACC Frontend

&#x20; \* Portal Frontend

&#x20; \* Admin Frontend

\* \*\*Backend:\*\* Laravel (PHP)

\* \*\*Containerization:\*\* Docker \& Docker Compose

\* \*\*Reverse Proxy:\*\* Traefik

\* \*\*Orchestration:\*\* Kubernetes (K8s)

\* \*\*CI/CD:\*\* Jenkins (basic pipeline)



\---



\## 🏗️ Architecture



User requests are routed using Traefik:



\* `/acc` → ACC Frontend

\* `/portal` → Portal Frontend

\* `/admin` → Admin Frontend

\* `/backend` → Laravel Backend API



\### Flow:



User → Traefik → Frontend (Angular) → Backend (Laravel API)



\---



\## ⚙️ Technologies Used



\* Angular

\* Laravel

\* Docker

\* Docker Compose

\* Traefik

\* Kubernetes

\* Jenkins



\---



\## 🚀 How to Run (Docker)



\### 1. Clone the repository



```bash

git clone https://github.com/YOUR\_USERNAME/etolv-multi-service.git

cd etolv-multi-service

```



\### 2. Add host mapping



Edit your hosts file:



```text

127.0.0.1 etolv.local

```



\### 3. Run Docker



```bash

docker compose up --build

```



\### 4. Access the application



\* http://etolv.local/acc

\* http://etolv.local/portal

\* http://etolv.local/admin

\* http://etolv.local/backend/api/hello



\---



\## ☸️ Kubernetes Deployment



\### Apply manifests:



```bash

kubectl apply -f k8s/

```



\### Check resources:



```bash

kubectl get pods

kubectl get svc

kubectl get ingress

```



\---



\## 🔐 Configuration



\### ConfigMap



Used to store application configuration:



\* APP\_NAME

\* APP\_ENV

\* APP\_DEBUG



\### Secret



Used to store sensitive data:



\* DB\_PASSWORD

\* API\_KEY



\---



\## ⏰ CronJob



A Kubernetes CronJob is configured to run:



```bash

php artisan schedule:run

```



Every 5 minutes.



\---



\## 🔄 CI/CD Pipeline (Jenkins)



The Jenkins pipeline includes:



\* Build Docker images

\* Tag images

\* Push to Docker Hub

\* Deploy to Kubernetes

\* Verify deployment



\---



\## 🔍 Traefik vs Nginx



\* \*\*Traefik\*\*



&#x20; \* Dynamic routing

&#x20; \* Native Docker integration

&#x20; \* Automatic service discovery



\* \*\*Nginx\*\*



&#x20; \* Static configuration

&#x20; \* Manual setup required



👉 Traefik is better suited for microservices and container environments.



\---



\## 📂 Project Structure



```text

etolv-multi-service/

├── acc-frontend/

├── portal-frontend/

├── admin-frontend/

├── backend/

├── traefik/

├── k8s/

├── docker-compose.yml

├── Jenkinsfile

└── README.md

```



\---



\## ✅ Features



\* Multi-frontend architecture

\* REST API backend

\* Dockerized services

\* Reverse proxy routing

\* Kubernetes deployment

\* ConfigMap \& Secret usage

\* Scheduled jobs (CronJob)



\---



\## 👨‍💻 Author



Moatez Kallel



\---



\## 📌 Notes



\* Phase 5 (advanced Jenkins / Helm) is optional bonus

\* Project is fully functional with Docker and Kubernetes

\* Designed for DevOps learning and microservices architecture



