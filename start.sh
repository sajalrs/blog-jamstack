#!/bin/bash
chown -R www-data:www-data wordpress
chmod a+w frontend/node_modules/
COMPOSE_HTTP_TIMEOUT=200 docker-compose up