#!bin/bash
if [ -f Dockerfile ]; then
    docker build -t angular:test .
fi