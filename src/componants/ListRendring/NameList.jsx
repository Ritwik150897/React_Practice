import React from 'react'

function NameList() {
    const names = ['Jake', 'Amy', 'Charles', 'Rosa', 'Gina', 'Terry', 'Ray']
    const nameList = names.map(name => <h5>{name}</h5>)
    return <div>{nameList}</div>
}

export default NameList
