
// variable "region"{}
// variable "project"{}
provider "google" {
    credentials = "${file("${var.GOOGLE_APPLICATION_CREDENTIALS}")}"
    region = "europe-west3"
    project = "advanced-191310"
}
