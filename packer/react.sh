#!/bin/bash

set -e
ubuntu_install(){
    sudo apt-get -y update
    curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
    sudo apt-get install -y nodejs
    sudo apt-get install -y git
    sudo apt-get install -y npm
    sudo npm install -g -y yarn
}
mac_os(){
    echo "you are using macos"
}
check-os(){
    operation_system=$(python -mplatform)
    found_os=
    if [[ operation_system =~ "Ubuntu" ]] ; then
        found_os = 1
    fi
    if [[ operation_system =~ "darwin" ]]; then
    found_os = 2
    fi
if [[ found_os==1 ]]; then
ubuntu_install
fi
if [[ found_os==2 ]]; then
mac_os
fi

if [[  -d Bucketlist-react ]]; then
sudo rm -rf Bucketlist-react
fi
git clone https://github.com/cjmash/Bucketlist-react.git
cd ~/Bucketlist-react
yarn install
yarn start
}
main(){
    ubuntu_install
    check_os
}
main"$@"
