import React from 'react';

const Fruits = () => {
  const fruits = ['pomme', 'banane', 'orange', 'fraise'];

  return (
    <div>
      <h1>Qu'est-ce que j'ai dans mon panier</h1>
      <ul>
        {fruits.map(fruit => (
          <li key={fruit}>J'ai une/un {fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default Fruits;
