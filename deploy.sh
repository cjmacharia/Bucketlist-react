#!bin/bash

set -e
environment_variables(){
    echo "declaring variables"

    PROJECT_NAME = "packer"
    CLOUDSDK_COMPUTE_ZONE = "europe-west3-b"
    PROJECT_ID = "packer-192412"
}
clone_repo(){
    echo "clone our repository "
    git clone https://github.com/cjmash/Bucketlist-react.git
}

set_up_terraform_infrastructure(){
    echo "create the gcp infrastructure"
    terraform init
    terraform apply auto-approve
}
main(){
environment_variables
clone_repo
set_up_terraform_infrastructure
}
main "$@"
