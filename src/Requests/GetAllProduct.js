var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("{{V1_URL_PREFIX}}/products?auth_key={{V1_API_TOKEN}}", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
