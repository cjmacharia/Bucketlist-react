#!bin/bash

set -e
environment_variables(){
    echo "declaring variables"

    PROJECT_NAME="packer"
    CLOUDSDK_COMPUTE_ZONE="europe-west3-b"
    PROJECT_ID="packer-192412"
}
clone_repo(){
    echo "clone our repository "
    mkdir -p /home/circleci/react

    git clone https://github.com/cjmash/Bucketlist-react.git  /home/circleci/react
}
create_the_packer_image(){
    echo "creating a packer image"
    PROJECT_ID="$PROJECT_ID" GOOGLE_CREDENTIALS="$GOOGLE_CREDENTIALS" CODE_PATH="/home/circleci/react" packer build packer/build.json
}
set_up_terraform_infrastructure(){
    echo "create the gcp infrastructure"
    terraform init
    terraform apply -auto-approve
}
main(){
environment_variables
clone_repo
create_the_packer_image
set_up_terraform_infrastructure
}
main "$@"
