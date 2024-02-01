---
title: Configuration
description: Learn how to configure the Lando Apache service.
---

# Configuration

Here are the configuration options, set to the default values, for this service. If you are unsure about where this goes or what this means, we *highly recommend* scanning the [services documentation](https://docs.lando.dev/core/v3/lando-service.html) to get a good handle on how the magicks work.

Also note that options, in addition to the [build steps](https://docs.lando.dev/core/v3/lando-service.html#build-steps) and [overrides](https://docs.lando.dev/core/v3/lando-service.html#overrides) that are available to every service, are shown below:

```yaml
services:
  myservice:
    type: apache:2.4
    webroot: .
    ssl: false
    config:
      server: SEE BELOW
      vhosts: SEE BELOW
```

## Using custom Apache config files

The default `config` files depend on how you have set `ssl` but are all available [here](https://github.com/lando/apache/tree/main/services/apache).

Note that if you set `config` to use your own files then those files should exist inside your application and be expressed relative to your project root as shown below:

**A hypothetical project**

Note that you can put your configuration files anywhere inside your application directory. We use a `config` directory but you can call it whatever you want such as `.lando` in the example below:

```bash
./
|-- config
   |-- default.conf
   |-- httpd.conf
|-- docroot
   |-- index.html
|-- .lando.yml
```

**Landofile using custom apache config**

```yaml
services:
  myservice:
    type: apache
    webroot: docroot
    config:
      server: config/httpd.conf
      vhosts: config/default.conf
```

## Custom .htaccess-Lando

In some cases, you may want Apache to behave differently when running in Lando than in other environments. If you are using the default httpd.conf shipped with Lando, you can include a `.htaccess-lando` next to your normal `.htaccess` file. **Note**: If you include this file, the default `.htaccess` won't be loaded in Lando, so be sure to copy over the relevant rules to your `.htaccess-lando` file.
