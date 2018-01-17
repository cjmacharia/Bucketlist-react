#!/bin/bash

set -e

create_user(){
    if ! id -u cj; then
    sudo useradd -m -s /bin/bash/ cj
    fi
}
install_dependecies(){
  sudo apt-get -y update
}

install_node(){
    curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
    sudo apt-get install -y nodejs
    sudo npm install -g -y yarn
}
main (){
create_user
install_dependecies
install_node
}

main "$@"