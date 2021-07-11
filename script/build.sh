#!/usr/bin/env bash

#clean dist folder
rm -rf ./dist/*;

#compile docs
mkdocs build -q -f src/public/config.yml -d ../../dist/public/;

#compile ts
tsc;

#copy view
cp -r ./src/view ./dist/view