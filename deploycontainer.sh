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

create_the_docker_image(){
    echo "creating a docker image with our project in the image"
    #docker run -it -v /var/run/docker.sock:/var/run/docker.sock -v /usr/bin/docker:/usr/bin/docker docker:latest bash



}
authenticate_gcloud(){
 echo "authenticating gcloud to use circle ci"
            # apt-get update && apt-get --only-upgrade install kubectl google-cloud-sdk google-cloud-sdk-datastore-emulator google-cloud-sdk-pubsub-emulator google-cloud-sdk-app-engine-go google-cloud-sdk-app-engine-java google-cloud-sdk-app-engine-python google-cloud-sdk-cbt google-cloud-sdk-bigtable-emulator google-cloud-sdk-datalab
            # Authenticate CircleCI with the service account file
            # Save the string to a text file key
            echo ${PACKER_AUTH} > key.txt
            # Decode the Service Account
            base64 -i key.txt -d > ${HOME}/gcloud-service-key.json
            gcloud auth activate-service-account ${PACKER_ID} --key-file ${HOME}/gcloud-service-key.json
            gcloud  config set project ${PROJECT_ID}
            #define our default compute zone
            gcloud config set compute/zone ${CLOUDSDK_COMPUTE_ZONE}
            #create a cluster
            #set the default default cluster for our project
            gcloud config set container/cluster example-cluster
            #authenticate the cluster
            gcloud container clusters get-credentials $CLUSTER_NAME
            echo "we're pushing here"
            gcloud docker -- push gcr.io/packer-192412/react-app:$CIRCLE_SHA1
}

main(){
environment_variables
create_the_docker_image
}
main "$@"
