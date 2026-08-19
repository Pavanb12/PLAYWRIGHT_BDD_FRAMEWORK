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
                    file(
                        credentialsId: 'playwright-env',
                        variable: 'ENV_FILE'
                    )
                ]) {
                    bat '''
                        echo Creating .env file...
                        copy /Y "%ENV_FILE%" ".env"
                    '''
                }
            }
        }

        stage('Verify .env') {
            steps {
                bat '''
                    if exist ".env" (
                        echo SUCCESS: .env exists
                    ) else (
                        echo ERROR: .env does not exist
                        exit /b 1
                    )
                '''
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
            bat '''
                if exist ".env" (
                    del /f /q ".env"
                    echo .env removed
                )
            '''
        }
    }
}
