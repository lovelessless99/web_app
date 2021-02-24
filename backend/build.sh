#!bin/bash
if [ -f Dockerfile ]; then
    docker build -t flask:test .
fi