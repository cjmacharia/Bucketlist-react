#!bin/bash

set -e

environment_variables(){
    echo "declaring variables"

    PROJECT_NAME="packer"
    CLOUDSDK_COMPUTE_ZONE="europe-west3-b"
    CREATED_IMAGE=""
    PROJECT_ID="packer-192412"
}
clone_repo(){
    echo "clone our repository "
    mkdir -p /home/circleci/react
    git clone https://github.com/cjmash/Bucketlist-react.git  /home/circleci/react
    sudo chmod -R 777 /home/circleci/react
}
create_the_packer_image(){
    echo "creating a packer image"
    pushd /home/circleci/react/packer
        PROJECT_ID="$PROJECT_ID" GOOGLE_CREDENTIALS="$GOOGLE_CREDENTIALS" CODE_PATH="/home/circleci/react" packer build build.json 2>&1 | tee packer_output.log
        CREATED_IMAGE="$(grep 'A disk image was created:' packer_output.log | cut -d' ' -f8)"
    popd
}

set_up_terraform_infrastructure(){
    echo "create the gcp infrastructure"
     pushd /home/circleci/react
        terraform init
        terraform apply  -var="created_image=${CREATED_IMAGE}" -auto-approve
    popd
}
main(){
environment_variables
clone_repo
create_the_packer_image
set_up_terraform_infrastructure
}
main "$@"
