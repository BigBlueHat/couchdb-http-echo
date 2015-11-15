# couchdb-http-echo

Echo's what [CouchDB](http://couchdb.apache.org) makes available to it's
[Request Object](http://docs.couchdb.org/en/1.6.1/json-structure.html#request-object)
(which it in turn gives to _show, _list, and _update functions) when receiving
an HTTP request.

Pretty handy for getting started with CouchApps!

## Usage

Grab [couchapp.py](http://github.com/couchapp/couchapp), then...
```
$ couchapp push . http://{user}:{pass}@localhost:5984/couchdb-http-echo
$ curl http://localhost:5984/couchdb-http-echo/_design/http-echo/_show/echo
$ curl http://localhost:5984/couchdb-http-echo/_design/http-echo/_list/echo/all
$ curl -X PUT http://localhost:5984/couchdb-http-echo/_design/http-echo/_update/echo
```

## License

Public Domain (srsly! this is hardly copy-writable)
