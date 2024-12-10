#!/bin/bash

# create login file
echo "{\"login\":\"admin\",\"password\":\"admin\"}" > cypress.env.json

# install dependencies
npm install -g n
n stable
apt-get --allow-releaseinfo-change update
apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth xvfb -y
npm ci

chmod +x scripts/cypress-parallel.js