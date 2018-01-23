terraform {
  backend "gcs" {
    bucket = "cp_tfstate"
    path = "/terraform.tfstate"
  }
}