import React from 'react';

function personRequest() {
  const params = {
      method: 'GET',
      keepalive: true,
      headers: {
          Accept: 'application/json'
      },
  };
  const result = fetch('http://localhost:4000/person/', params);
  result.then(response => {
    return response.json();
  }).then(data => {
    console.log(data);
    return data;
  })
};

function showPerson() {
  let data = personRequest();
  console.log(data);
}

export const People = () => (
    <div>
      <h2>Allll of the people</h2>
      <button onClick={showPerson}>List People</button>
    </div>
  )