#!/bin/sh

set -e

if [ ! -d terraform/terraform ]; then
  wget https://releases.hashicorp.com/terraform/0.1.11/terraform_0.1.11_linux_amd64.zip
  unzip terraform_0.1.11_linux_amd64.zip -d terraform
fi
