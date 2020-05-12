import React from 'react'

import Square from './Square'

const style = {
    border: '4px solid darkblue',
    borderRadius: '10px',
    width: '250px',
    height: '250px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
}

const Board = ({ squares, onClick }) => (
    <div style={style}>
        <Square value='1' onclick={() => onClick('dummy value')} />
        <Square value='2' onclick={() => onClick('dummy value')} />
        <Square value='3' onclick={() => onClick('dummy value')} />
        <Square value='4' onclick={() => onClick('dummy value')} />
        <Square value='5' onclick={() => onClick('dummy value')} />
        <Square value='6' onclick={() => onClick('dummy value')} />
        <Square value='7' onclick={() => onClick('dummy value')} />
        <Square value='8' onclick={() => onClick('dummy value')} />
        <Square value='9' onclick={() => onClick('dummy value')} />
    </div>
)

export default Board
