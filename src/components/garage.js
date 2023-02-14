import React, { useState } from 'react';

function Voiture({ nom, marque }) {
    return <p>Je suis une {marque} {nom}</p>;
}

function Garage() {
    const [nom, setNom] = useState('');
    const [marque, setMarque] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const infoVoiture = { nom, marque };
        console.log('Qui a-t-il dans mon garage ?', infoVoiture);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Nom :
                    <input type="text" value={nom} onChange={e => setNom(e.target.value)} />
                </label>
                <br />
                <label>
                    Marque :
                    <input type="text" value={marque} onChange={e => setMarque(e.target.value)} />
                </label>
                <br />
                <button type="submit">Ajouter à mon garage</button>
            </form>
            {nom && marque && <Voiture nom={nom} marque={marque} />}
        </div>
    );
}
export default Garage;