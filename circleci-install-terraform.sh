#!/bin/sh

if [ -d terraform/terraform ]; then
  sudo rm -rf terraform
fi
wget https://releases.hashicorp.com/terraform/0.11.2/terraform_0.11.2_linux_amd64.zip
 unzip -o terraform_0.11.2_linux_amd64.zip -d terraform
