import React, { useEffect, useState } from 'react';

const Get = () => {
  const [name, Setname] = useState([]);

  async function views() {
    try {
      const response = await fetch("http://localhost:3060/getuser");
      if (!response.ok) {
        throw new Error('Request failed');
      }
      const data = await response.json();
      Setname(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <p>
        <button onClick={views}>Show</button>
        <ul>
        {name.map((e) => (
          <div key={e.index}>
            <li>{e.name}</li>
            <li>{e.mail}</li>
            <li>{e.phone}</li>
          </div>
        ))}
        </ul>
      </p>
    </div>
  );
};

export default Get;
