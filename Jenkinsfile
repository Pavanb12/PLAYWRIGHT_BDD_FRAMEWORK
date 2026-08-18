pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Create .env') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'playwright-login',
                        usernameVariable: 'APP_USERNAME',
                        passwordVariable: 'APP_PASSWORD'
                    )
                ]) {
                    bat '''
                        echo BASE_URL=https://your-qa-url.com > .env
                        echo USERNAME=%APP_USERNAME% >> .env
                        echo PASSWORD=%APP_PASSWORD% >> .env
                    '''
                }
            }
        }

        stage('Verify .env') {
            steps {
                bat 'if exist .env (echo .env created successfully) else (echo ERROR: .env missing)'
            }
        }

        stage('Install Playwright') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Run BDD Tests') {
            steps {
                bat 'npm test'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**',
                             allowEmptyArchive: true
        }

        cleanup {
            bat 'if exist .env del /f /q .env'
        }
    }
}
