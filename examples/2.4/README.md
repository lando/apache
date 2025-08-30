# Apache 2.4 Example

This example exists primarily to test the following documentation:

* [Apache Service](https://docs.lando.dev/plugins/apache)

## Start up tests

Run the following commands to get up and running with this example.

```bash
# Should start up successfully
lando poweroff
lando start
```

## Verification commands

Run the following commands to validate things are rolling as they should.

```bash
# Should return 2.4.65 for the default version
lando exec defaults -- apachectl -V | grep 2.4

# Should return 2.4.64 for the patch service
lando exec patch -- apachectl -V | grep 2.4.64

# Should serve from the app root by default
lando exec defaults -- curl http://localhost | grep ROOTDIR

# Should only serve over http by default
lando exec defaults -- curl https://localhost || echo $? | grep 7
```

## Destroy tests

Run the following commands to trash this app like nothing ever happened.

```bash
# Should be destroyed with success
lando destroy -y
lando poweroff
```
