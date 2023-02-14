import React, { useState } from 'react';

function Ternaire() {
  const [feedback] = useState('');

  const handleClick = (event) => {
    const choice = event.target.name;
    
    const message = choice === 'goal' ? 'C\'est le but !' : 'C\'est dans les gradins.';
    alert(message);
  };

  return (
    <div>
      <button name="goal" onClick={handleClick}>C'est le but</button>
      <button name="miss" onClick={handleClick}>C'est dans les gradins</button>
      <p>{feedback}</p>
    </div>
  );
}
export default  Ternaire;
 