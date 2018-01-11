
// variable "region"{}
// variable "project"{}
provider "google" {
    credentials = "${file("${HOME}/gcloud-service-key.json")}"
    region = "europe-west3"
    project = "advanced-191310"
}
