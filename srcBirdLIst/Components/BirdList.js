import React, { useState } from 'react'
import Bird from './Bird';

function BirdList() {
    const [input, setInput] = useState('');
    const [birds, setBirds] = useState([]);
    return (
        <div>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <div>
            <button onClick={() => {setBirds([...birds, input]); setInput('');}}>Add</button>
            </div>
            <ul>
                {
                    birds.map((bird, i) => (
                        <Bird key={i} name={bird} />
                    ))
                }
            </ul>
        </div>
    )
}

export default BirdList