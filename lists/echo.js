function(head, req) {
  provides('json', function() {
    start({
      headers: {
        'Content-Type': 'application/json'
      }
    });
    send(JSON.stringify(req));
  });
}
