## HackerNews Algolia API Test
If you aren't using an Nginx reverse-proxy, define ports in the docker-compose

### Front End
This just runs the hot reload version, without building and serving for speed sake.

- docker build -t hna .
- docker run -d -p 3000:3000 --name hna hna

### Docker-Compose
```yaml
---
version: "3"
services: 
  hna:
    image: hna
    container_name: hna
    restart: unless-stopped