#!/bin/bash

set -eo pipefail

# Make tmp folder and make it writable if it doesnt exist
if [ ! -d "/opt/bitnami/apache/tmp" ]; then
  mkdir -p "/opt/bitnami/apache/tmp"
fi
if [ -d "/opt/bitnami/apache/tmp" ]; then
  chmod -R 777 "/opt/bitnami/apache/tmp"
fi

# Enable SSL if we have to
if [ -f "/etc/apache2/mods-available/ssl.load" ]; then
  echo "Enabling apache ssl modz"
  cp -rf /etc/apache2/mods-available/ssl* /etc/apache2/mods-enabled || true
  cp -rf /etc/apache2/mods-available/socache_shmcb* /etc/apache2/mods-enabled || true
fi

# if new bitnami certs are missing AND we have lando ones then copy the lando ones
if [ -f "/certs/cert.crt" ]; then
  cp -rf /certs/cert.crt /certs/tls.crt
  chown www-data /certs/tls.crt
  chmod 0644 /certs/tls.crt

  cp -rf /certs/cert.key /certs/tls.key
  chown www-data /certs/tls.key
  chmod 0640 /certs/tls.key
fi

# Detect and run the correct entrypoint script. THANKS BITNAMI!
if [ -f "/opt/bitnami/scripts/apache/entrypoint.sh" ]; then
  /opt/bitnami/scripts/apache/entrypoint.sh /opt/bitnami/scripts/apache/run.sh
elif [ -f "/app-entrypoint.sh" ]; then
  /app-entrypoint.sh httpd -f /opt/bitnami/apache/conf/httpd.conf -DFOREGROUND
else
  /entrypoint.sh /run.sh
fi
