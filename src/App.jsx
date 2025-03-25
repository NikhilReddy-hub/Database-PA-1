import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setGreeting(`Hello, ${name}!`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {greeting && <h2>{greeting}</h2>}
    </div>
  );
}

export default App;