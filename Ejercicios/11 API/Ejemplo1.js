// Cazar errores del servidor

'use strict';


// The below code prints the error that the fetch returns
fetch('https://api.github.com/repositories?since=asdf')
  .then((response) => {
    if (!response.ok) {
      throw response;
    }
    return response.json();
  })
  .then((data) => console.log('success', data))
  .catch((err) => console.log('error', err));


