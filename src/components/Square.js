import React from 'react'

const Square = ({ onClick, value }) => (
    <div>
        <button onClick={onClick}>{value}</button>
    </div>
)

export default Square
