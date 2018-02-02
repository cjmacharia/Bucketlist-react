#!bin/bash

set -e

environment_variables(){
    echo "declaring variables"
    PROJECT_NAME="packer"
    CLOUDSDK_COMPUTE_ZONE="europe-west3-b"
    CLUSTER_NAME="example-cluster"
    PROJECT_ID="packer-192412"
     #As specified in Deployment.yml
     DEPLOYMENT_NAME="react-dep"
     CONTAINER_NAME="react-app"
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
             echo "creating the deployment file"
            # kubectl apply -f deployment.yml
            echo "creaing the services"
            kubectl apply -f service.yml
            echo "updating the new image"
            kubectl set image deployment/${DEPLOYMENT_NAME} ${CONTAINER_NAME}=/gcr.io/packer-192412/react-app:$CIRCLE_SHA1

}

main(){
environment_variables
authenticate_gcloud
}
main "$@"
