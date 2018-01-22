
resource "google_compute_network" "my-network" {
    name = "my-network-${random_string.random.result}"
    description = "A network meant to be used by the new instance created"
    auto_create_subnetworks = "false"
}
resource "google_compute_firewall" "my-network-firewall" {
  name    = "my-network-firewall-${random_string.random.result}"
  network = "${google_compute_network.my-network.name}"

  allow {
    protocol = "icmp"
  }

  allow {
    protocol = "tcp"
    ports    = ["1-65535","22"]
  }

}

resource "google_compute_subnetwork" "public-subnet" {
  name          = "public-subnet-${random_string.random.result}"
  count         = 1
  ip_cidr_range = "10.0.1.0/24"
  network       = "${google_compute_network.my-network.name}"
  region        = "${var.region}"
}

resource "google_compute_firewall" "pulic" {
  network    = "${google_compute_network.my-network.name}"

  name = "${google_compute_network.my-network.name}-allow-rules"
  allow {
    protocol = "tcp"
    ports = ["8080" , "22" , "20" , "80"]
  }
}
resource "google_compute_subnetwork" "private-subnet" {
  name          = "private-subnet-${random_string.random.result}"
  ip_cidr_range = "10.0.2.0/24"
  network       = "${google_compute_network.my-network.name}"
  region        = "${var.region}"

}
resource "google_compute_subnetwork" "database-subnet" {
  name          = "databse-subnet-${random_string.random.result}"
  ip_cidr_range = "10.0.3.0/24"
  network       = "${google_compute_network.my-network.name}"
  region        = "${var.region}"

}
