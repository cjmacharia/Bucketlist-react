resource "google_compute_network" "my-network" {
    name = "my-network"
    description = "A network meant to be used by the new instance created"
}
resource "google_compute_firewall" "my-network-firewall" {
  name    = "my-network-firewall"
  network = "${google_compute_network.my-network.name}"

  allow {
    protocol = "icmp"
  }

  allow {
    protocol = "tcp"
    ports    = ["1-65535"]
  }

}

resource "google_compute_subnetwork" "public-subnet" {
  name          = "public-subnet"
  ip_cidr_range = "10.0.1.0/24"
  network       = "${google_compute_network.my-network.name}"
  region        = "europe-west3"
}

resource "google_compute_firewall" "pulic" {
  network    = "${google_compute_network.my-network.name}"

  name = "allow-rules"
  allow {
    protocol = "tcp"
    ports = ["8080" , "22" , "20" , "80"]
  }
}
resource "google_compute_subnetwork" "private-subnet" {
  name          = "private-subnet"
  ip_cidr_range = "10.0.2.0/24"
  network       = "${google_compute_network.my-network.name}"
  region        = "europe-west3"
}
resource "google_compute_subnetwork" "database-subnet" {
  name          = "databse-subnet"
  ip_cidr_range = "10.0.3.0/24"
  network       = "${google_compute_network.my-network.name}"
  region        = "europe-west3"
}

resource "google_compute_route" "default" {
  name        = "network-route"
  dest_range  = "0.0.0.0/0"
  network     = "${google_compute_network.my-network.name}"
  next_hop_instance = "${google_compute_instance.nat.name}"
  next_hop_instance_zone =  "europe-west3-b"
  priority    = 400
}