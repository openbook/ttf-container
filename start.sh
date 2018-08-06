#!/usr/bin/env bash
docker-machine restart cx-talktofrank-local
eval $(docker-machine env cx-talktofrank-local)
docker-compose up -d
#bash -c "clear && docker exec -it ttf-container_web_1 /bin/bash"
#bash -c "clear && docker exec -it ttf-container_scripts_1 /bin/bash"
