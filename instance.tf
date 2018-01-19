variable "created_image"{}

variable "created_image"{}
resource "random_string" "random" {
    length = 4
    special = false
    upper = false
    lower = true
}
resource "google_compute_instance" "nat" {
    project         = "packer-192412"
    zone           = "europe-west3-b"
    name           = "nat-gateway-${random_string.random.result}"
    can_ip_forward = true
    machine_type   = "f1-micro"
        tags       =  ["${google_compute_firewall.pulic.name}"]
    boot_disk {
        initialize_params {
            image = "${var.created_image}"

        }
    }
    network_interface {
        subnetwork = "${google_compute_subnetwork.public-subnet.name}"
    access_config {
          // Ephemeral IP
    }
}

    lifecycle {
        create_before_destroy =true
    }

    metadata {
        startup_script="/home/cj/react/packer/react.sh"
    }

}
resource "google_compute_instance" "db" {
    project = "packer-192412"
    zone = "europe-west3-b"
    name ="db-instance-${random_string.random.result}"
    can_ip_forward = false
    count = 1
    machine_type = "f1-micro"
    boot_disk {
        initialize_params {
            image = "${var.created_image}"
        }
    }
    network_interface {
        subnetwork = "${google_compute_subnetwork.database-subnet.name}"

    }
    lifecycle {
        create_before_destroy = true
    }
}
