import React from 'react'

import Square from './Square'

const Board = ({ squares, onClick }) => (
    <div>
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
