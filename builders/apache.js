'use strict';

// Modules
const _ = require('lodash');
const path = require('path');

// Builder
module.exports = {
  name: 'apache',
  config: {
    version: '2.4',
    supported: ['2.4'],
    pinPairs: {
      '2.4': 'bitnami/apache:2.4.41-debian-10-r52',
    },
    patchesSupported: true,
    confSrc: path.resolve(__dirname, '..', 'config'),
    defaultFiles: {
      server: 'httpd.conf',
      vhosts: 'default.conf',
    },
    environment: {
      APACHE_HTTP_PORT_NUMBER: '80',
      APACHE_USER: 'www-data',
      APACHE_GROUP: 'www-data',
      LANDO_NEEDS_EXEC: 'DOEEET',
    },
    ports: ['80'],
    remoteFiles: {
      server: '/opt/bitnami/apache/conf/httpd.conf',
      vhosts: '/opt/bitnami/apache/conf/vhosts/lando.conf',
    },
    ssl: false,
    webroot: '.',
  },
  parent: '_webserver',
  builder: (parent, config) => class LandoApache extends parent {
    // Constructor
    constructor(id, options = {}) {
      options = _.merge({}, config, options);

      // Use different config for ssl
      if (options.ssl) {
        options.defaultFiles.vhosts = 'default-ssl.conf';
        options.environment.APACHE_HTTPS_PORT_NUMBER = '443';
        options.ports.push('443');
      }

      // Build the default stuff here
      const apache = {
        image: `bitnami/apache:${options.version}`,
        command: '/launch.sh',
        environment: options.environment,
        user: 'root',
        ports: options.ports,
        volumes: [
          `${options.confDest}/launch.sh:/launch.sh`,
          `${options.confDest}/${options.defaultFiles.server}:${options.remoteFiles.server}`,
          `${options.confDest}/${options.defaultFiles.vhosts}:${options.remoteFiles.vhosts}:ro`,
        ],
      };
      // Send it downstream
      super(id, options, {services: _.set({}, options.name, apache)});
    };
  },
};
