pipeline {
    agent any

    environment {
        NODE_OPTIONS = "--max_old_space_size=4096"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/vikram-2101/Food-Delivery.git'
            }
        }

        stage('Build Frontend') {
            steps {
                dir('Frontend') {
                    sh '''
                        echo "Installing Frontend dependencies..."
                        npm install
                        echo "Building Frontend using Vite..."
                        npm run build
                    '''
                }
            }
        }

        stage('Build Backend') {
            steps {
                dir('Backend') {
                    sh '''
                        echo "Installing Backend dependencies..."
                        npm install
                        echo "Backend dependencies installed"
                    '''
                }
            }
        }

        stage('Run Backend Server (optional for local deploy)') {
            steps {
                dir('Backend') {
                    // WARNING: Use `nohup` or PM2 if you want background run (for deploy)
                    sh '''
                        echo "Starting backend server..."
                        nohup npm run server &
                    '''
                }
            }
        }

        stage('Deploy (optional)') {
            steps {
                echo 'Add deployment steps here (like copying build to a server or using PM2/Docker)'
            }
        }
    }
}
