


function getRawMaterials(callback, auth){
  const url = 'http://104.236.192.53/restaurantapi/materias-primas';
  var request = new Request(url, {
      method: 'GET',
      headers: {
        Authorization: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSGVucnlrIiwiaWQiOjEsImlhdCI6MTUyNTc0NTQ3Mn0.OLbyDrZSMa331KzHFdLh2oT0T8lrNIu66auqHEGCuj4"
      }
  });

  fetch(request)
  .then((resp) => resp.json())
  .then(function(data){
    callback(data.items);
  })
}



export{getRawMaterials}
