function(doc, req){
  // change nothing in database
  return [null, {
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(req)
  }];
}
