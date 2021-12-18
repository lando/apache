Apache Example
==============

This example exists primarily to test the following documentation:

* [Apache Service](https://docs.devwithlando.io/tutorials/apache.html)

Start up tests
--------------

Run the following commands to get up and running with this example.

```bash
# Should start up successfully
lando poweroff
lando start
```

Verification commands
---------------------

Run the following commands to validate things are rolling as they should.

```bash
# Should serve from webroot if specified
lando ssh -s custom -c "curl http://localhost | grep WEBDIR"

# Should serve from https when specified
lando ssh -s custom -c "curl https://localhost | grep WEBDIR"

# Should mount custom config to the correct locationz
lando ssh -s custom -c "cat /opt/bitnami/apache/conf/httpd.conf | grep LANDOHTTPD"
lando ssh -s custom -c "cat /opt/bitnami/apache/conf/vhosts/lando.conf | grep LANDOCUSTOM"

# Should use htaccess-lando if it exists
lando ssh -s override -c "curl -I http://landoapache.lndo.site/folder1" | grep Location | grep http://landoapache.lndo.site/folder2/
```

Destroy tests
-------------

Run the following commands to trash this app like nothing ever happened.

```bash
# Should be destroyed with success
lando destroy -y
lando poweroff
```
