#!/bin/bash

docker run --link mongo --link elasticsearch -p 9000:9000 -p 12201:12201 -p 1514:1514 -p 5555:5555  -e GRAYLOG_HTTP_EXTERNAL_URI="http://127.0.0.1:9000/" -d graylog/graylog:4.2