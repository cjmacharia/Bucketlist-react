resource "google_compute_instance_template" "instance_template" {
  name_prefix  = "react-instance-template"
  machine_type = "${var.machine_type}"
  region       = "${var.region}"
  tags         =  ["${google_compute_firewall.pulic.name}"]
  disk {
    source_image = "${var.created_image}"
  }
  network_interface {
        subnetwork = "${google_compute_subnetwork.public-subnet.name}"
    access_config {
          // Ephemeral IP
    }
}
  lifecycle {
    create_before_destroy = true
  }

  metadata {
     startup-script="/home/cj/react/packer/react.sh"
     }
}

resource "google_compute_instance_group_manager" "instance_group_manager" {
  name               = "instance-group-manager"
  instance_template  = "${google_compute_instance_template.instance_template.self_link}"
  base_instance_name = "instance-group-manager"
  zone               = "${var.zone}"
  target_size        = "1"
}
resource "google_compute_autoscaler" "react" {
  name   = "scaler"
  zone   = "${var.zone}"
  target = "${google_compute_instance_group_manager.instance_group_manager.self_link}"

  autoscaling_policy = {
    max_replicas    = "${var.max_instances}"
    min_replicas    = "${var.min_instances}"
    cooldown_period = 60

    cpu_utilization {
      target = 0.5
    }
  }
}
