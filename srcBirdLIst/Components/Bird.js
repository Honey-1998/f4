import React, { useState } from 'react'

function Bird({name}) {
    const [like, setLike] = useState(1);
    return (
        <li>
            <div><b>{name} </b></div>
            like: {like}
            <button onClick={() => setLike(like+1)}>+</button>
            
            
        </li>

    )
}

export default Bird;