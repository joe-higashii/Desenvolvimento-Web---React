import React, { useState } from 'react'
import styled from 'styled-components'

const BotaoPrimario = styled.button`
    background: ${props => props.darkMode ? '#333' : '#6AEBF9'};
    border-radius: 3px;
    border: 1px solid var(--accent-color);
    color: ${props => props.darkMode ? '#6AEBF9' : 'var(--accent-color)'};
    display: inline-block;
    margin: 0.5rem 1rem;
    padding: 0.5rem 0;
    transition: all 200ms ease-in-out;
    width: 11rem;

    &:hover {
        filter: brightness(0.85);
    }

    &:active {
        filter: brightness(1);
    }
`

function BotaoPrimarioComponent({ children }) {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    }

    return (
        <BotaoPrimario darkMode={darkMode} onClick={toggleDarkMode}>
            {children}
        </BotaoPrimario>
    )
}

export default BotaoPrimarioComponent;
