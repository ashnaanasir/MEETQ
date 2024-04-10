#!/bin/bash
check_virtualenv() {
    if ! command -v virtualenv &> /dev/null; then
        echo "virtualenv is not installed. Installing..."
        python -m pip install --user virtualenv
        echo "virtualenv installation complete."
    fi
}
python3 -m venv venv
    source "OneOnOne/venv/bin/activate"
    pip3 install -U pip3

python3 -m pip3 install --upgrade pip
python3 -m pip3 install --upgrade Pillow
python3 -m pip3 install django
python3 -m pip3 install djangorestframework
python3 -m pip3 install djangorestframework-simplejwt

python3 ./OneOnOne/manage.py makemigrations
python3 ./OneOnOne/manage.py migrate
