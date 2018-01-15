resource "google_compute_instance" "nat" {
    project = "advanced-191310"
    zone           = "europe-west3-b"
    name           = "react-${random_id}"
    can_ip_forward = true
    count = 1
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
}

provisioner "file" {
    source = "react.sh"
    destination = "/tmp/script.sh"

    connection {
        type = "ssh"
        user = "cj"

    }
}
provisioner "remote-exec"{
     connection {
      type = "ssh"
      user = "cj"
      agent = false
    }
    inline = [
      "chmod +x /tmp/script.sh"
    ]
}
lifecycle {
        create_before_destroy =true
    }
}
resource "google_compute_instance" "python" {

    project = "advanced-191310"
    zone = "europe-west3-b"
    name = "python-instance-${random_id}"
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
    lifecycle {
        create_before_destroy =true
    }

}
resource "google_compute_instance" "db" {
    project = "advanced-191310"
    zone = "europe-west3-b"
    name ="db-instance-${random_id}"
    can_ip_forward = false
    count = 1
    machine_type = "f1-micro"
    boot_disk {
        initialize_params {
            image = "ubuntu-1604-xenial-v20170328"
        }
    }
    network_interface {
        subnetwork = "${google_compute_subnetwork.database-subnet.name}"

    }
    lifecycle {
        create_before_destroy = true
    }
}
