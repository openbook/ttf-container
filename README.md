# Talk to Frank Alpha - Ops

## Orchestration

Ansible used to provision alpha server. See README in folder for more info.


## Dockerfile

Custom image based on library Node image. Includes headless Chrome functionality
for automated test.

Used by Buddy CI in the post build validation stage.

@todo move off of my own Docker hub account.

### Build

`docker -t koded/ttf-build .`

### Publish

`docker push koded/ttf-build`.
