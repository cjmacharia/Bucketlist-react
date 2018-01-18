#!bin/bash

set -e
environment_variables(){
    PROJECT_NAME: packer
    CLOUDSDK_COMPUTE_ZONE: europe-west3-b
    PROJECT_ID: packer-192412
}
clone_repo(){
    echo "clone our repo "
    git clone https://github.com/cjmash/Bucketlist-react.git
}

set_up_terraform_infrastructure(){
    echo "create a"
    terraform init
    terraform apply auto-approve
}