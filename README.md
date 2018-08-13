# ttf-container

## Elasticsearch

[Compaibility matrix](https://www.elastic.co/support/matrix#matrix_compatibility)

### Setup
```
docker-machine create -d virtualbox --virtualbox-memory 4096 cx-talktofrank-local
eval $(docker-machine env cx-talktofrank-local)
docker-compose build
docker-compose up -d
```

You can then access the boxes via:

#### Web
```
bash -c "clear && docker exec -it ttf-container_web_1 /bin/bash"
```

#### Scripts
```
bash -c "clear && docker exec -it ttf-container_scripts_1 /bin/bash"
```

#### nginx
```
bash -c "clear && docker exec -it ttf-container_nginx_1 /bin/bash"
```

#### MySQL
```
bash -c "clear && docker exec -it mysql /bin/bash"
```

#### Elastic search
```
bash -c "clear && docker exec -it elasticsearch /bin/bash"
```

#### Kibana
```
bash -c "clear && docker exec -it kibana /bin/bash"
```

## Elasticsearch

[Compaibility matrix](https://www.elastic.co/support/matrix#matrix_compatibility)

### Setup
The max_map_count setting needs to be increased to 262144 on the docker machine for Elasticsearch to 
boot correctly.

```
docker-machine ssh cx-talktofrank-local
sudo sysctl --w vm.max_map_count=262144
```

### Resources

* [Awesome Elasticsearch - curated list of useful resources](https://github.com/dzharii/awesome-elasticsearch)

### Debug

```
https://www.npmjs.com/package/debug
```

### Contentful

```
https://www.contentful.com/developers/docs/concepts/webhooks/
```

##### Tech debt

* filtering of webhooks needs to be applied for contentful environments (applied in contentful ui)

### Elasticsearch

```
https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html
```