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
# Should return 2.4.41 for the default version
lando ssh -s defaults -c "apachectl -V | grep 2.4.41"

# Should return 2.4.39 for the patch service
lando ssh -s patch -c "apachectl -V | grep 2.4.39"

# Should serve from the app root by default
lando ssh -s defaults -c "curl http://localhost | grep ROOTDIR"

# Should only serve over http by default
lando ssh -s defaults -c "curl https://localhost" || echo $? | grep 1
```

Destroy tests
-------------

Run the following commands to trash this app like nothing ever happened.

```bash
# Should be destroyed with success
lando destroy -y
lando poweroff
```
