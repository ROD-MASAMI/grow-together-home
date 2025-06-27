pipeline {
    agent any

    environment {
        BASE_DIR = '/learning'
        PROJECT_NAME = 'grow-together-home'
        TARGET_DIR = ${BASE_DIR}/${PROJECT_NAME}
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
                        cd $BASE_DIR
                        git clone $REPO_URL
                    fi
                '''
            }
        }

        stage('Install Dependencies') {
            steps {

                    sh 'npm install'

            }
        }

        stage('Build') {
            steps {

                    sh 'npm run build'

            }
        }

        stage('Run App') {
            steps {

                    sh 'npm run start'

            }
        }
    }
}
