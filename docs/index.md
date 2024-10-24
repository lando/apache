---
title: Apache Lando Plugin
description: Add an Apache web server service to your Lando config for local development with all the power of Docker and Docker Compose; learn how to change version, setup SSL, use a custom webroot or custom Apache config.
next: ./config.html
---

# Apache

[Apache](https://www.apache.org/) is a very common web server which you can easily add to your Lando app by adding an entry to the [services](https://docs.lando.dev/core/v3/services/lando.html) top-level config in your [Landofile](https://docs.lando.dev/core/v3).

You can easily add it to your Lando app by adding an entry to the [services](https://docs.lando.dev/core/v3/services/lando.html) top-level config in your [Landofile](https://docs.lando.dev/core/v3).

```yaml
services:
  myservice:
    type: apache:2.4
```

## Supported versions

*   **[2.4](https://hub.docker.com/r/bitnami/apache)** **(default)**
*   [custom](https://docs.lando.dev/core/v3/services/lando.html#overrides)

## Patch versions

::: warning Not officially supported!
While we allow users to specify patch versions for this service, they are not *officially* supported, so if you use one, YMMV.
:::

To use a patch version, you can do something as shown below:

```yaml
services:
  myservice:
    type: apache:2.4.62
```

But make sure you use one of the available [patch tags](https://hub.docker.com/r/bitnami/apache/tags) for the underlying image we are using.

