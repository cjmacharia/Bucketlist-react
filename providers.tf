
//variable "region"{}
// variable "project"{}
provider "google" {
    region = "europe-west3"
    project = "packer-192412"
    credentials = "${file ("credentials.json")}"
}
