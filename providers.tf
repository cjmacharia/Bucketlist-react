
// variable "region"{}
// variable "project"{}
provider "google" {
    region = "europe-west3"
    project = "advanced-191310"
    credentials = "${TF_CREDENTIALS}"
}
