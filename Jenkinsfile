pipeline {
    agent any

    environment {
        TARGET_DIR = '/Users/rmasami/Documents/learning'
        REPO_URL = 'https://github.com/ROD-MASAMI/grow-together-home'
    }

    stages {
        stage('Prepare Code') {
            steps {
                sh '''
                    if [ -d "$TARGET_DIR/.git" ]; then
                        echo "Repo exists, pulling latest changes..."
                        cd $TARGET_DIR
                        git pull origin main
                    else
                        echo "Cloning repo for the first time..."
                        mkdir -p $TARGET_DIR
                        git clone $REPO_URL $TARGET_DIR
                    fi
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                dir("${env.TARGET_DIR}") {
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                dir("${env.TARGET_DIR}") {
                    sh 'npm run build'
                }
            }
        }

        stage('Run App') {
            steps {
                dir("${env.TARGET_DIR}") {
                    sh 'npm run start'
                }
            }
        }
    }
}
