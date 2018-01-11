#!/bin/sh

if [ ! -d terraform/terraform ]; then
  sudo rm -rf terraform
fi
wget https://releases.hashicorp.com/terraform/0.6.8/terraform_0.6.8_linux_amd64.zip
 unzip terraform_0.6.8_linux_amd64.zip -d terraform
