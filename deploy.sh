#!bin/bash

set -e
clone_repo(){
    echo "clone our repo "
    git clone https://github.com/cjmash/Bucketlist-react.git
}

set_up_terraform_infrastructure(){
    echo "create a"
    terraform init
    terraform apply auto-approve
}