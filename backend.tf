terraform {
  backend "gcs" {
    bucket = "cp_tfstate"
    path = "state/terraform.tfstate"
  }
}
