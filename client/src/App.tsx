import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    fetch('/api/products')
    .then(res => res.json())
    .then(data => console.log(data))
  },[])
  return <div>
    <h1>Docker Exercise - Sana Alinia</h1>
    <h2>Description</h2>
    <p>
      This project builds a simple application using nodejs, mongodb, nginx.\br
      Launching the application is done thanks to docker files and docker compose yaml files.\br
      The project can be run in both dev and prod mode.
    </p>
    <h3>Run project in dev mode</h3>
    <p>docker-compose -f docker-compose.dev.yml up --build</p>
    <h3>Run project in prod mode</h3>
    <p>docker-compose -f docker-compose.prod.yml up --build</p>
  </div>;
};

export default App;
