#!/bin/bash
chown -R www-data:www-data wordpress
COMPOSE_HTTP_TIMEOUT=200 docker-compose up