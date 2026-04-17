#!/usr/bin/env bash
set -e

cd /var/www/buseka.lk

sudo chown -R ubuntu:ubuntu /var/www/buseka.lk

git fetch origin
git reset --hard origin/main

rm -rf node_modules dist

yarn install --frozen-lockfile
chmod +x node_modules/.bin/vite
yarn build

find /var/www/buseka.lk/dist -type d -exec chmod 755 {} \;
find /var/www/buseka.lk/dist -type f -exec chmod 644 {} \;