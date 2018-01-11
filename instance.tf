
resource "google_compute_instance" "nat" {
    project = "advanced-191310"
    zone           = "europe-west3-b"
    name           ="terra-nat-gateway"
    can_ip_forward = true
    machine_type   = "f1-micro"
    tags           =  ["allow-rules"]

    boot_disk {
        initialize_params {
            image = "ubuntu-1604-xenial-v20170328"
        }
    }
    network_interface {
        subnetwork = "${google_compute_subnetwork.public-subnet.name}"
    access_config {
          // Ephemeral IP
    }
metadata_startup_script = "react.sh"
}
}
resource "google_compute_instance" "python" {
    project = "advanced-191310"
    zone = "europe-west3-b"
    name ="terra-python-instance"
    can_ip_forward = false
    machine_type = "f1-micro"
    boot_disk {
        initialize_params {
            image = "ubuntu-1604-xenial-v20170328"
        }
    }
    network_interface {
        subnetwork = "${google_compute_subnetwork.private-subnet.name}"
    }


}
resource "google_compute_instance" "db" {
    project = "advanced-191310"
    zone = "europe-west3-b"
    name ="terra-db-instance"
    can_ip_forward = false
    machine_type = "f1-micro"
    boot_disk {
        initialize_params {
            image = "ubuntu-1604-xenial-v20170328"
        }
    }
    network_interface {
        subnetwork = "${google_compute_subnetwork.database-subnet.name}"

    }
}
