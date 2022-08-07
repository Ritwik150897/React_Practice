import React, { useState } from 'react'

function HooksThree() {
    const[n, setName] = useState({ firstName: '', lastName: '' })
    return (
        <div>
            <form>
                <input
                    type='text'
                    value={n.firstName}
                    onChange={e => setName({ ...n, firstName: e.target.value })}
                />
                <input
                    type='text'
                    value={n.lastName}
                    onChange={e => setName({ ...n, lastName: e.target.value })}
                />
                <h3>First Name is: {n.firstName}</h3>
                <h3>Last Name is: {n.lastName}</h3>
                <h4>{JSON.stringify(n)}</h4>
            </form>
        </div>
    )
}

export default HooksThree
