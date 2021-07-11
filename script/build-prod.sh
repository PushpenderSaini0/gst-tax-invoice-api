#!/usr/bin/env bash

#clean dist folder
rm -rf ./dist/*;

#compile ts
tsc;

#copy view
cp -r ./src/view ./dist/view