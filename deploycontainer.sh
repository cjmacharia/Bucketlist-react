#!bin/bash

set -e

environment_variables(){
    echo "declaring variables"
    PROJECT_NAME="packer"
    CLOUDSDK_COMPUTE_ZONE="europe-west3-b"
    CLUSTER_NAME="example-cluster"
    PROJECT_ID="packer-192412"
     #As specified in Deployment.yml
     DEPLOYMENT_NAME="reactdeployment"
     CONTAINER_NAME="react-app"
}
install_docker(){
echo "installing docker"
}
create_the_docker_image(){
    echo "creating a docker image with our project in the image"
    docker run -it -v /var/run/docker.sock:/var/run/docker.sock -v /usr/bin/docker:/usr/bin/docker docker:latest bash
    docker run -v /var/run/docker.sock:/var/run/docker.sock  -ti grc.io/${PROJECT_ID}/react-app:$CIRCLE_SHA1
    sudo  docker build  -v /var/run/docker.sock:/var/run/docker.sock -t grc.io/${PROJECT_ID}/react-app:$CIRCLE_SHA1 .
    # Push the Image to the GCP Container Registry
    gcloud docker push grc.io/${PROJECT_ID}/react-app:$CIRCLE_SHA1 .


}
authenticate_gcloud(){
     # Authenticate CircleCI with the service account file
     gcloud component update --version 120.0.0
     gcloud component update  --version 120.0.0 kubectl
     # Save the string to a text file
     echo $SERVICE_KEY > key.txt
        # Decode the Service Account
      base64 -i key.txt -d > ${HOME}/gcloud-service-key.json
     gcloud component auth activate-service-account ${PACKER_ID} --key -file ${HOME}/gcloud-service-key.json
     gcloud  config set project ${PROJECT_ID}
     #create a cluster
     gcloud container clusters create example-cluster
     #define our default compute zone
     gcloud config set zone ${CLOUDSDK_COMPUTE_ZONE}
     #set the default default cluster for our project
     gcloud config set container/cluster example-cluster
    #authenticate the cluster
    gcloud container cluster get-credentials $CLUSTER_NAME
}

main(){
environment_variables
install_docker
create_the_docker_image
authenticate_gcloud
}
main "$@"
