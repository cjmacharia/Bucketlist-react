
// variable "region"{}
// variable "project"{}
provider "google" {
    credentials = "${GOOGLE_CREDENTIALS}"
    region = "europe-west3"
    project = "advanced-191310"
}
