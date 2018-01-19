#!/bin/bash
ubuntu_install(){
    sudo apt-get -y update
    sudo apt-get install python3-pip
    sudo apt-install virtualenv
    sudo apt-get install git

}
mac_os(){
    echo "you are using macos"
}
main(){
    operation_system=python -mplatform
    found_os=

    if [[ operation_system =~ "Ubuntu" ]] ; then
        found_os = 1
    fi

    if [[ operation_system =~ "darwin" ]]; then
    found_os = 2
    fi
}

if [[ found_os==1 ]]; then
ubuntu_install
fi
if [[ found_os==2 ]]; then
mac_os
fi

if [[ ! -d BucketList-API ]]; then
git clone https://github.com/cjmash/BucketList-API.git
fi
cd ~/BucketList-API
if [[ ! -d venv && found_os==1 ]]; then
virtualenv venv
source venv/bin/activate
pip install -r requirements.txt
python3 manage.py db init
python3 manage.py db migrate
python3 manage.py db upgrade
python run.py
fi