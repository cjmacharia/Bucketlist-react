variable "region"{
    type = "string"
    default = "europe-west1"
}
variable "zone" {
  type = "string"
  default = "europe-west1-b"
}
variable "machine_type" {
  type = "string"
  default = "n1-standard-1"
}
variable "max_instances" {
  type = "string"
  default = "3"
}

variable "min_instances" {
  type = "string"
  default = "2"
}
variable "created_image"{
    type = "string"
}
