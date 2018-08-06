# ttf-container

## Elasticsearch

[Compaibility matrix](https://www.elastic.co/support/matrix#matrix_compatibility)

```
docker-machine create -d virtualbox --virtualbox-memory 4096 cx-talktofrank-local
docker-machine env default
eval $(docker-machine env default)
docker-machine ssh default
sudo sysctl --w vm.max_map_count=262144
exit
docker run -d -p 9200:9200 -p 9300:9300 -p 5601:5601 elasticsearch 
```